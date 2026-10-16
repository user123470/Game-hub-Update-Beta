const d = require("./_db");

const ONLINE_TTL = 120; // detik: dianggap online kalau ada aktivitas dalam 2 menit terakhir

module.exports = async (req, res) => {
  if (req.method !== "POST") return d.send(res, 405, { error: "Method not allowed" });
  try {
    const name = await d.sessionUser(req);
    if (!name) return d.send(res, 401, { error: "Sesi habis. Silakan login lagi." });

    const ban = await d.getBan(name);
    if (ban) return d.send(res, 403, d.banInfo(ban));

    const raw = await d.redis(["GET", "user:" + name]);
    if (!raw) return d.send(res, 401, { error: "Akun tidak ditemukan." });
    const user = JSON.parse(raw);
    const b = d.body(req);

    /* tandai player ini online */
    await d.redis(["SET", "online:" + name, "1", "EX", ONLINE_TTL]);

    if (b.action === "add") {
      const slug = String(b.slug || "").slice(0, 80);
      if (!slug) return d.send(res, 400, { error: "slug kosong" });
      const item = { slug, name: String(b.name || slug).slice(0, 120), cat: String(b.cat || "").slice(0, 40) };
      user.history = [item, ...(user.history || []).filter(x => x.slug !== slug)].slice(0, 20);
      await d.redis(["SET", "user:" + name, JSON.stringify(user)]);
    } else if (b.action === "clear") {
      user.history = [];
      await d.redis(["SET", "user:" + name, JSON.stringify(user)]);
    }

    return d.send(res, 200, { username: user.username, history: user.history || [] });
  } catch (e) {
    return d.send(res, 500, { error: e.message === "NO_DB" ? "Database belum disambungkan (lihat SETUP.md)." : "Server error." });
  }
};
