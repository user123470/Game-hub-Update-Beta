const d = require("./_db");

const DURATIONS = {
  "1h": 3600e3, "3h": 3 * 3600e3, "1d": 86400e3, "3d": 3 * 86400e3,
  "7d": 7 * 86400e3, "30d": 30 * 86400e3, "perm": 0
};

/* Hapus SEMUA data aplikasi (akun, sesi, ban, chat, dst) */
async function wipeAll() {
  let total = 0;
  for (const pat of ["user:*", "sess:*", "adm:*", "ban:*", "online:*", "rl:*", "rst:*"]) {
    let cursor = "0", guard = 0;
    do {
      const r = await d.redis(["SCAN", cursor, "MATCH", pat, "COUNT", 500]);
      cursor = String(r[0]);
      const keys = r[1] || [];
      for (let i = 0; i < keys.length; i += 100) {
        const part = keys.slice(i, i + 100);
        await d.redis(["DEL", ...part]);
        total += part.length;
      }
      guard++;
    } while (cursor !== "0" && guard < 2000);
  }
  await d.redis(["DEL", "banset", "chat"]);
  return total;
}

/* Ambil semua username (huruf kecil) dari database */
async function allUserKeys() {
  const names = new Set();
  let cursor = "0";
  let guard = 0;
  do {
    const r = await d.redis(["SCAN", cursor, "MATCH", "user:*", "COUNT", 200]);
    cursor = String(r[0]);
    for (const k of r[1] || []) names.add(String(k).slice(5));
    guard++;
  } while (cursor !== "0" && guard < 500);
  return [...names];
}

async function mget(keys) {
  const out = [];
  for (let i = 0; i < keys.length; i += 100) {
    const part = keys.slice(i, i + 100);
    const r = await d.redis(["MGET", ...part]);
    out.push(...(r || []));
  }
  return out;
}

function activeBan(raw) {
  if (!raw) return null;
  let b; try { b = JSON.parse(raw); } catch { return null; }
  if (b.until && b.until < Date.now()) return null;
  return b;
}

/* Daftar semua player + status online + status ban */
async function listPlayers() {
  const keys = await allUserKeys();
  const [users, online, bans] = await Promise.all([
    mget(keys.map(k => "user:" + k)),
    mget(keys.map(k => "online:" + k)),
    mget(keys.map(k => "ban:" + k))
  ]);
  const players = [];
  keys.forEach((k, i) => {
    if (!users[i]) return;
    let u; try { u = JSON.parse(users[i]); } catch { return; }
    players.push({
      username: u.username || k,
      online: !!online[i],
      banned: !!activeBan(bans[i]),
      created: u.created || 0
    });
  });
  players.sort((a, b) => (b.online - a.online) || a.username.toLowerCase().localeCompare(b.username.toLowerCase()));
  return players;
}

async function applyBan(real, reason, duration) {
  const ms = DURATIONS[duration];
  const ban = {
    username: real,
    reason: String(reason || "Tidak ada alasan").slice(0, 200),
    until: ms ? Date.now() + ms : 0,
    permanent: !ms,
    at: Date.now()
  };
  const cmd = ["SET", "ban:" + d.lower(real), JSON.stringify(ban)];
  if (ms) cmd.push("PX", ms + 60000);
  await d.redis(cmd);
  await d.redis(["SADD", "banset", d.lower(real)]);
  /* ban permanen: hapus data akun (password, riwayat) supaya database hemat.
     Catatan ban kecil tetap disimpan agar username ini tidak bisa daftar lagi. */
  if (!ms) await d.redis(["DEL", "user:" + d.lower(real), "online:" + d.lower(real)]);
  return ban;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return d.send(res, 405, { error: "Method not allowed" });
  try {
    const b = d.body(req);

    if (b.action === "login") {
      if (!(await d.rateLimit(req, "admin", 8, 600)))
        return d.send(res, 429, { error: "Terlalu banyak percobaan. Coba lagi nanti." });
      if (typeof b.code !== "string") return d.send(res, 401, { error: "Kode salah." });
      /* kode reset: kembalikan tiket 60 detik, eksekusi baru setelah konfirmasi di layar */
      if (d.safeEqual(b.code, d.RESET_CODE)) {
        const ticket = d.crypto.randomBytes(16).toString("hex");
        await d.redis(["SET", "rst:" + ticket, "1", "EX", 60]);
        return d.send(res, 200, { reset: true, ticket });
      }
      if (!d.safeEqual(b.code, d.ADMIN_CODE))
        return d.send(res, 401, { error: "Kode salah." });
      const token = d.crypto.randomBytes(32).toString("hex");
      await d.redis(["SET", "adm:" + token, "1", "EX", d.ADMIN_TTL]);
      return d.send(res, 200, { token });
    }

    if (b.action === "reset") {
      if (!(await d.rateLimit(req, "admin", 8, 600)))
        return d.send(res, 429, { error: "Terlalu banyak percobaan. Coba lagi nanti." });
      const t = String(b.ticket || "");
      if (!/^[0-9a-f]{32}$/.test(t) || (await d.redis(["GET", "rst:" + t])) !== "1")
        return d.send(res, 401, { error: "Tiket reset tidak valid atau sudah kadaluarsa." });
      const deleted = await wipeAll();
      return d.send(res, 200, { ok: true, deleted });
    }

    if (!(await d.isAdmin(req))) return d.send(res, 401, { error: "Sesi admin habis." });

    if (b.action === "logout") {
      await d.redis(["DEL", "adm:" + d.bearer(req)]);
      return d.send(res, 200, { ok: true });
    }

    if (b.action === "list") {
      const names = (await d.redis(["SMEMBERS", "banset"])) || [];
      const bans = [];
      for (const n of names) {
        const ban = await d.getBan(n);
        if (ban) bans.push(ban); else await d.redis(["SREM", "banset", n]);
      }
      bans.sort((a, b) => b.at - a.at);
      return d.send(res, 200, { bans });
    }

    /* BARU: daftar semua player (online / offline) */
    if (b.action === "players") {
      const players = await listPlayers();
      return d.send(res, 200, { players, online: players.filter(p => p.online).length });
    }

    if (b.action === "ban") {
      const username = typeof b.username === "string" ? b.username.trim() : "";
      if (!d.validUsername(username)) return d.send(res, 400, { error: "Username tidak valid." });
      if (!(b.duration in DURATIONS)) return d.send(res, 400, { error: "Durasi tidak valid." });
      const raw = await d.redis(["GET", "user:" + d.lower(username)]);
      if (!raw) return d.send(res, 404, { error: "Username tidak ditemukan." });
      const real = JSON.parse(raw).username;
      const ban = await applyBan(real, b.reason, b.duration);
      return d.send(res, 200, { ok: true, ban });
    }

    /* BARU: ban semua player sekaligus */
    if (b.action === "banall") {
      if (!(b.duration in DURATIONS)) return d.send(res, 400, { error: "Durasi tidak valid." });
      const players = await listPlayers();
      const targets = players.filter(p => !p.banned);
      for (let i = 0; i < targets.length; i += 10) {
        await Promise.all(targets.slice(i, i + 10).map(p => applyBan(p.username, b.reason, b.duration)));
      }
      return d.send(res, 200, { ok: true, count: targets.length, skipped: players.length - targets.length });
    }

    if (b.action === "unban") {
      const n = d.lower(String(b.username || ""));
      await d.redis(["DEL", "ban:" + n]);
      await d.redis(["SREM", "banset", n]);
      return d.send(res, 200, { ok: true });
    }

    return d.send(res, 400, { error: "Aksi tidak valid." });
  } catch (e) {
    return d.send(res, 500, { error: e.message === "NO_DB" ? "Database belum disambungkan (lihat SETUP.md)." : "Server error." });
  }
};
