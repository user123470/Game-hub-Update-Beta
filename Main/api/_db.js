const crypto = require("crypto");

const ADMIN_CODE = process.env.ADMIN_CODE || "Skibidi123XD.Admin";
const RESET_CODE = process.env.RESET_CODE || "Skibidi123XD.Reset";
const GETKEY_CODE = process.env.GETKEY_CODE || "Skibidi123XD.GetKey";
const SESSION_TTL = 60 * 60 * 24 * 30; // 30 hari
const ADMIN_TTL = 60 * 60 * 2;         // 2 jam

async function redis(cmd) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("NO_DB");
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify(cmd)
  });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

function send(res, status, data) {
  res.status(status).setHeader("Cache-Control", "no-store");
  res.json(data);
}

function body(req) {
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
  return b && typeof b === "object" ? b : {};
}

function bearer(req) {
  const h = req.headers.authorization || "";
  return h.startsWith("Bearer ") ? h.slice(7).trim() : "";
}

function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "x").split(",")[0].trim();
}

async function rateLimit(req, name, max, windowSec) {
  const key = `rl:${name}:${clientIp(req)}`;
  const n = await redis(["INCR", key]);
  if (n === 1) await redis(["EXPIRE", key, windowSec]);
  return n <= max;
}

function banInfo(ban) {
  return {
    banned: true,
    username: ban.username,
    reason: ban.reason,
    until: ban.until || 0,
    permanent: !ban.until,
    error: "Akun diblokir."
  };
}

function userState(user) {
  return {
    username: user.username,
    history: user.history || [],
    favorites: user.favorites || [],
    profile: Object.assign({ avatar: "😎", color: "#7c6cff", bio: "" }, user.profile || {}),
    bg: user.bg || { type: "preset", id: "aurora" }
  };
}

function validUsername(u) { return typeof u === "string" && /^[A-Za-z0-9_]{3,16}$/.test(u); }
function validPassword(p) { return typeof p === "string" && p.length >= 6 && p.length <= 64; }
const lower = (u) => String(u).toLowerCase();

function scrypt(password, salt) {
  return new Promise((resolve, reject) =>
    crypto.scrypt(password, salt, 64, (e, k) => (e ? reject(e) : resolve(k))));
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

async function getBan(name) {
  const raw = await redis(["GET", "ban:" + lower(name)]);
  if (!raw) return null;
  let b; try { b = JSON.parse(raw); } catch { return null; }
  if (b.until && b.until < Date.now()) {
    await redis(["DEL", "ban:" + lower(name)]);
    await redis(["SREM", "banset", lower(name)]);
    return null;
  }
  return b;
}

async function sessionUser(req) {
  const t = bearer(req);
  if (!t) return null;
  const name = await redis(["GET", "sess:" + t]);
  return name || null;
}

async function isKeyAdmin(req) {
  const t = bearer(req);
  if (!t) return false;
  return (await redis(["GET", "kadm:" + t])) === "1";
}

async function isAdmin(req) {
  const t = bearer(req);
  if (!t) return false;
  return (await redis(["GET", "adm:" + t])) === "1";
}

module.exports = {
  ADMIN_CODE, RESET_CODE, GETKEY_CODE, isKeyAdmin, userState, SESSION_TTL, ADMIN_TTL, crypto, redis, send, body, bearer,
  rateLimit, validUsername, validPassword, lower, scrypt, safeEqual,
  getBan, banInfo, sessionUser, isAdmin
};
