const d = require("./_db");

/* Host yang banyak dipakai bareng (favicon-nya sama untuk semua game) -> jangan dipakai sebagai ikon */
const GENERIC = ["wasmarcade.com", "wasm.rip", "justplayweb.com", "github.io", "vercel.app", "web.app", "netlify.app", "itch.io", "fiveplay.lol"];

const STOP = /\b(wasm|archive|jpw|mobile|desktop|demo|shareware|multiplayer|unblocked|online|free|edition|remastered|classic)\b/gi;

function clean(n) {
  return String(n)
    .replace(/\([^)]*\)/g, " ")
    .replace(STOP, " ")
    .replace(/\b\d+\.\d+(\.\d+)?\b/g, " ")
    .replace(/&/g, " ")
    .replace(/[^\w\s':.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
const tokens = (s) => String(s).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);

function score(query, name) {
  const a = tokens(query), b = tokens(name);
  if (!a.length || !b.length) return 0;
  if (a.join(" ") === b.join(" ")) return 1;
  const setB = new Set(b);
  const hit = a.filter(t => setB.has(t)).length;
  if (a.length <= 2) return 0; // nama pendek: harus persis sama (hindari salah game)
  return (hit / a.length) * Math.min(1, a.length / b.length + 0.25);
}

async function steamLookup(query) {
  const ctl = new AbortController();
  const to = setTimeout(() => ctl.abort(), 4500);
  try {
    const r = await fetch(
      "https://store.steampowered.com/api/storesearch/?l=english&cc=US&term=" + encodeURIComponent(query),
      { signal: ctl.signal, headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!r.ok) return { error: true };
    const j = await r.json();
    let best = null, bs = 0;
    for (const it of j.items || []) {
      if (it.type && it.type !== "app") continue;
      const s = score(query, it.name);
      if (s > bs) { bs = s; best = it; }
    }
    if (!best || bs < 0.75) return { none: true };
    const tiny = best.tiny_image || "";
    const header = tiny
      ? tiny.replace(/capsule_[^/?]+\.jpg/, "header.jpg")
      : "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" + best.id + "/header.jpg";
    return { src: header, alt: tiny || null, kind: "steam" };
  } catch {
    return { error: true };
  } finally {
    clearTimeout(to);
  }
}

module.exports = async (req, res) => {
  if (req.method !== "GET") return d.send(res, 405, { error: "Method not allowed" });
  const q = req.query || {};
  const name = typeof q.n === "string" ? q.n.slice(0, 100) : "";
  const host = typeof q.h === "string" && /^[a-z0-9.-]{3,80}$/i.test(q.h) ? q.h.toLowerCase() : "";
  if (!name) return d.send(res, 400, { error: "n kosong" });

  const out = (obj, ttl) => {
    res.setHeader("Cache-Control", `public, max-age=3600, s-maxage=${ttl}, stale-while-revalidate=86400`);
    return res.status(200).json(obj);
  };

  const key = "icon:" + d.crypto.createHash("sha1").update(name + "|" + host).digest("hex").slice(0, 20);
  try {
    const cached = await d.redis(["GET", key]);
    if (cached) return out(JSON.parse(cached), 604800);
  } catch {}

  let result = { src: null };
  const query = clean(name);
  let steamErr = false;
  if (query.length >= 2) {
    try {
      if (!(await d.rateLimit(req, "icon", 300, 300))) return d.send(res, 429, { error: "Terlalu banyak permintaan." });
    } catch {}
    const s = await steamLookup(query);
    if (s.src) result = s;
    else if (s.error) steamErr = true;
  }
  if (!result.src && host && !GENERIC.some(g => host === g || host.endsWith("." + g))) {
    result = { src: "https://www.google.com/s2/favicons?sz=128&domain=" + encodeURIComponent(host), kind: "favicon" };
  }

  if (!steamErr) {
    try { await d.redis(["SET", key, JSON.stringify(result), "EX", result.src ? 60 * 60 * 24 * 30 : 60 * 60 * 24]); } catch {}
  }
  return out(result, steamErr ? 60 : 604800);
};
