const d = require("./_db");

const TTL_MS = 60 * 60 * 1000; // pesan hilang setelah 1 jam
const MAX_MSG = 200;           // maksimal pesan tersimpan sekaligus

async function prune(now) {
  await d.redis(["ZREMRANGEBYSCORE", "chat", "-inf", String(now - TTL_MS)]);
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return d.send(res, 405, { error: "Method not allowed" });
  try {
    const name = await d.sessionUser(req);
    if (!name) return d.send(res, 401, { error: "Sesi habis. Silakan login lagi." });
    const ban = await d.getBan(name);
    if (ban) return d.send(res, 403, d.banInfo(ban));

    const b = d.body(req);
    const now = Date.now();

    if (b.action === "send") {
      const text = typeof b.text === "string" ? b.text.trim().slice(0, 300) : "";
      if (!text) return d.send(res, 400, { error: "Pesan kosong." });

      const k = "rl:chatu:" + name;
      const n = await d.redis(["INCR", k]);
      if (n === 1) await d.redis(["EXPIRE", k, 10]);
      if (n > 6) return d.send(res, 429, { error: "Terlalu cepat. Tunggu sebentar." });

      const raw = await d.redis(["GET", "user:" + name]);
      if (!raw) return d.send(res, 401, { error: "Akun tidak ditemukan." });
      const user = JSON.parse(raw);
      const st = d.userState(user);

      const msg = {
        id: d.crypto.randomBytes(8).toString("hex"),
        u: user.username,
        t: text,
        ts: now,
        a: st.profile.avatar,
        c: st.profile.color
      };
      await d.redis(["ZADD", "chat", now, JSON.stringify(msg)]);
      await prune(now);
      await d.redis(["ZREMRANGEBYRANK", "chat", 0, -(MAX_MSG + 1)]);
      await d.redis(["EXPIRE", "chat", 3700]);
      return d.send(res, 200, { msg });
    }

    if (b.action === "poll") {
      const since = Number(b.since) > 0 ? Math.floor(Number(b.since)) : 0;
      await prune(now);
      const rows = (await d.redis(["ZRANGEBYSCORE", "chat", "(" + since, "+inf"])) || [];
      const messages = [];
      for (const r of rows) { try { messages.push(JSON.parse(r)); } catch {} }
      await d.redis(["SET", "online:" + name, "1", "EX", 120]);
      return d.send(res, 200, { messages, cutoff: now - TTL_MS, now });
    }

    return d.send(res, 400, { error: "Aksi tidak valid." });
  } catch (e) {
    return d.send(res, 500, { error: e.message === "NO_DB" ? "Database belum disambungkan (lihat SETUP.md)." : "Server error." });
  }
};
