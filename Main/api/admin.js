const d = require("./_db");

const DURATIONS = {
  "1h": 3600e3, "3h": 3 * 3600e3, "1d": 86400e3, "3d": 3 * 86400e3,
  "7d": 7 * 86400e3, "30d": 30 * 86400e3, "perm": 0
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return d.send(res, 405, { error: "Method not allowed" });
  try {
    const b = d.body(req);

    if (b.action === "login") {
      if (!(await d.rateLimit(req, "admin", 8, 600)))
        return d.send(res, 429, { error: "Terlalu banyak percobaan. Coba lagi nanti." });
      if (typeof b.code !== "string" || !d.safeEqual(b.code, d.ADMIN_CODE))
        return d.send(res, 401, { error: "Kode salah." });
      const token = d.crypto.randomBytes(32).toString("hex");
      await d.redis(["SET", "adm:" + token, "1", "EX", d.ADMIN_TTL]);
      return d.send(res, 200, { token });
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

    if (b.action === "ban") {
      const username = typeof b.username === "string" ? b.username.trim() : "";
      if (!d.validUsername(username)) return d.send(res, 400, { error: "Username tidak valid." });
      if (!(b.duration in DURATIONS)) return d.send(res, 400, { error: "Durasi tidak valid." });
      const raw = await d.redis(["GET", "user:" + d.lower(username)]);
      if (!raw) return d.send(res, 404, { error: "Username tidak ditemukan." });
      const real = JSON.parse(raw).username;
      const ms = DURATIONS[b.duration];
      const ban = {
        username: real,
        reason: String(b.reason || "Tidak ada alasan").slice(0, 200),
        until: ms ? Date.now() + ms : 0,
        at: Date.now()
      };
      const cmd = ["SET", "ban:" + d.lower(real), JSON.stringify(ban)];
      if (ms) cmd.push("PX", ms + 60000);
      await d.redis(cmd);
      await d.redis(["SADD", "banset", d.lower(real)]);
      return d.send(res, 200, { ok: true, ban });
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
