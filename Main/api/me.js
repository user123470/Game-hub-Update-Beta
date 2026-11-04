const d = require("./_db");

const ONLINE_TTL = 120; // detik: dianggap online kalau ada aktivitas dalam 2 menit terakhir
const HEX = /^#[0-9a-fA-F]{6}$/;

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

    let dirty = false;

    if (b.action === "add") {
      const slug = String(b.slug || "").slice(0, 80);
      if (!slug) return d.send(res, 400, { error: "slug kosong" });
      const item = { slug, name: String(b.name || slug).slice(0, 120), cat: String(b.cat || "").slice(0, 40) };
      user.history = [item, ...(user.history || []).filter(x => x.slug !== slug)].slice(0, 20);
      dirty = true;
    } else if (b.action === "clear") {
      user.history = [];
      dirty = true;
    } else if (b.action === "fav") {
      const slug = String(b.slug || "").slice(0, 80);
      if (!slug) return d.send(res, 400, { error: "slug kosong" });
      const fav = (user.favorites || []).filter(x => x !== slug);
      if (b.on) fav.unshift(slug);
      user.favorites = fav.slice(0, 500);
      dirty = true;
    } else if (b.action === "profile") {
      const p = Object.assign({}, user.profile || {});
      if (typeof b.avatar === "string" && b.avatar.length > 0 && b.avatar.length <= 8) p.avatar = b.avatar;
      if (typeof b.color === "string" && HEX.test(b.color)) p.color = b.color;
      if (typeof b.bio === "string") p.bio = b.bio.trim().slice(0, 80);
      user.profile = p;
      dirty = true;
    } else if (b.action === "bg") {
      const v = b.bg || {};
      let nb = null;
      if (v.type === "preset" && /^[a-z]{2,12}$/.test(String(v.id))) nb = { type: "preset", id: v.id };
      else if (v.type === "colors" && HEX.test(v.c1) && HEX.test(v.c2)) nb = { type: "colors", c1: v.c1, c2: v.c2 };
      else if (v.type === "local") nb = { type: "local" };
      if (!nb) return d.send(res, 400, { error: "Latar tidak valid." });
      user.bg = nb;
      dirty = true;
    }

    if (dirty) await d.redis(["SET", "user:" + name, JSON.stringify(user)]);

    return d.send(res, 200, d.userState(user));
  } catch (e) {
    return d.send(res, 500, { error: e.message === "NO_DB" ? "Database belum disambungkan (lihat SETUP.md)." : "Server error." });
  }
};
