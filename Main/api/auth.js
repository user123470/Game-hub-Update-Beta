const d = require("./_db");

module.exports = async (req, res) => {
  if (req.method !== "POST") return d.send(res, 405, { error: "Method not allowed" });
  try {
    const b = d.body(req);

    if (b.action === "logout") {
      const t = d.bearer(req);
      if (t) await d.redis(["DEL", "sess:" + t]);
      return d.send(res, 200, { ok: true });
    }

    if (b.action !== "register" && b.action !== "login")
      return d.send(res, 400, { error: "Aksi tidak valid." });

    if (!(await d.rateLimit(req, "auth", 20, 300)))
      return d.send(res, 429, { error: "Terlalu banyak percobaan. Coba lagi 5 menit lagi." });

    const username = typeof b.username === "string" ? b.username.trim() : "";
    const password = b.password;

    if (b.action === "register") {
      if (!d.validUsername(username))
        return d.send(res, 400, { error: "Username 3-16 karakter: huruf, angka, atau underscore." });
      if (!d.validPassword(password))
        return d.send(res, 400, { error: "Password minimal 6 karakter." });

      const salt = d.crypto.randomBytes(16).toString("hex");
      const hash = (await d.scrypt(password, salt)).toString("hex");
      const user = { username, salt, hash, created: Date.now(), history: [] };

      const ok = await d.redis(["SET", "user:" + d.lower(username), JSON.stringify(user), "NX"]);
      if (ok !== "OK") return d.send(res, 409, { error: "Username sudah dipakai." });

      const token = d.crypto.randomBytes(32).toString("hex");
      await d.redis(["SET", "sess:" + token, d.lower(username), "EX", d.SESSION_TTL]);
      return d.send(res, 200, { token, username, history: [] });
    }

    // login
    if (!d.validUsername(username) || typeof password !== "string")
      return d.send(res, 401, { error: "Username atau password salah." });

    const raw = await d.redis(["GET", "user:" + d.lower(username)]);
    if (!raw) return d.send(res, 401, { error: "Username atau password salah." });
    const user = JSON.parse(raw);

    const hash = (await d.scrypt(password, user.salt)).toString("hex");
    if (!d.safeEqual(hash, user.hash))
      return d.send(res, 401, { error: "Username atau password salah." });

    const ban = await d.getBan(username);
    if (ban) return d.send(res, 403, { banned: true, reason: ban.reason, until: ban.until || 0, error: "Akun diblokir." });

    const token = d.crypto.randomBytes(32).toString("hex");
    await d.redis(["SET", "sess:" + token, d.lower(username), "EX", d.SESSION_TTL]);
    return d.send(res, 200, { token, username: user.username, history: user.history || [] });
  } catch (e) {
    const msg = e.message === "NO_DB"
      ? "Database belum disambungkan (lihat SETUP.md)."
      : "Server error.";
    return d.send(res, 500, { error: msg });
  }
};
