// Konfigurasi
const PASSWORD = "Skibidi123XD";
const IMG_BASE = "https://radiantoptimizer.app/product/games/";
const JPW_THUMB = "https://justplayweb.com/thumbs/";
const JPW_GAME = "https://justplayweb.com/game/";
const LS_AUTH = "gh_auth";
const LS_HISTORY = "gh_history";
const IDLE_MS = 1000 * 60 * 15; // sesi gate: 15 menit tanpa aktivitas
const WASM_BASE = "https://wasmarcade.com";
const WASM_RIP = "https://wasm.rip/files";

/* Host yang melarang di-embed (X-Frame-Options / frame-ancestors).
   Kalau kamu lihat ikon muka sedih di player, tambahin domainnya di sini
   supaya langsung muncul tombol "Buka di Tab Baru" tanpa nunggu. */
const NO_EMBED_HOSTS = [
  "dezm0n.itch.io",
  "justplayweb.com",
  "nytimes.com",
  "web.archive.org"
];

function canEmbed(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return !NO_EMBED_HOSTS.some(h => host === h || host.endsWith("." + h));
  } catch { return true; }
}

const CATEGORIES = [
  "PC", "Neo Geo", "Capcom", "Arcade",
  "Shooter", "Action", "Retro", "Sandbox", "RPG",
  "Strategy", "Puzzle", "Casual", "Horror",
  "Racing", "Sports", "Adventure"
];

// Daftar game. Tiap baris diakhiri koma, kecuali yang terakhir.
const games = [
  /* ==================== PC (42) ==================== */
  { name: "Need For Speed Underground 2", slug: "Need-For-Speed-Underground-2", url: "https://nfsu2.xyz", cat: "PC" },
  { name: "Tekken 4", slug: "Tekken-4", url: "https://tekken4.online/", cat: "PC" },
  { name: "Cyberpunk 2077", slug: "Cyberpunk2077", url: "https://cyberpunk2077.lol/", cat: "PC" },
  { name: "Hollow Knight", slug: "hollow-knight", url: "https://dezm0n.itch.io/hollow-knight-web-port", cat: "PC" },
  { name: "horsey game", slug: "horsey-game", url: "https://woahhcrackers.github.io/HorseyGameWeb/", cat: "PC" },
  { name: "Need For Speed Wanted", slug: "Need-For-Speed-Wanted", url: "https://web.nfsmwo.com", cat: "PC" },
  { name: "Grand Theft Auto V (wasm)", slug: "gta-v-wasm", url: WASM_BASE + "/gta-5", cat: "PC" },
  { name: "GTA 5 mobile & desktop", slug: "GTA-5-mobile-&-desktop", url: "https://v2.fiveplay.lol/launcher.html", cat: "PC" },
  { name: "GTA vice city mobile & desktop", slug: "GTA-vice-city-mobile-&-desktop", url: "https://gta.rabisco.net/", cat: "PC" },
  { name: "GTA: Vice City (wasm)", slug: "vice-city-wasm", url: WASM_BASE + "/vice-city", cat: "PC" },
  { name: "GTA III", slug: "gta-3", url: WASM_BASE + "/gta3", cat: "PC" },
  { name: "The Simpsons: Hit & Run (wasm)", slug: "simpsons-wasm", url: WASM_BASE + "/simpsons", cat: "PC" },
  { name: "Minecraft 1.8.8", slug: "minecraft", url: WASM_BASE + "/minecraft", cat: "PC" },
  { name: "GTA V (Archive)", slug: "gta-v", url: "https://web.archive.org/web/20261006055917/https://playgta5.com/", cat: "PC" },
  { name: "GTA V (Alternative)", slug: "gta-v-alt", url: "https://gta.deloskiyt.pl", cat: "PC" },
  { name: "GTA: Vice City Project", slug: "vice-city", url: "https://joncodeofficial.github.io/gta-vice-city-wasm/", cat: "PC" },
  { name: "The Simpsons: Hit & Run (Web)", slug: "simpsons-hit-and-run", url: "https://shar-wasm.cjoseph.workers.dev/?skipmovie", cat: "PC" },
  { name: "Cuphead", slug: "cuphead", url: WASM_RIP + "/cuphead/index.html", cat: "PC" },
  { name: "Stardew Valley", slug: "stardew-valley", url: WASM_RIP + "/stardewvalley/index.html", cat: "PC" },
  { name: "Among Us", slug: "among-us", url: WASM_RIP + "/amongus/index.html", cat: "PC" },
  { name: "Lethal Company", slug: "lethal-company", url: WASM_RIP + "/lethal/index.html", cat: "PC" },
  { name: "PEAK", slug: "peak", url: WASM_RIP + "/peak/PEAK.html", cat: "PC" },
  { name: "RimWorld", slug: "rimworld", url: WASM_RIP + "/rimworld/index.html", cat: "PC" },
  { name: "Inscryption", slug: "inscryption", url: WASM_RIP + "/inscryption/index.html", cat: "PC" },
  { name: "Bendy and the Ink Machine", slug: "bendy", url: WASM_RIP + "/BATIM/index.html", cat: "PC" },
  { name: "MiSide", slug: "miside", url: WASM_RIP + "/miside/miside.html", cat: "PC" },
  { name: "OneShot: World Machine Edition", slug: "oneshot", url: WASM_RIP + "/oneshot-wme/index.html", cat: "PC" },
  { name: "Helltaker", slug: "helltaker", url: WASM_RIP + "/Helltaker/helltaker.html", cat: "PC" },
  { name: "FEZ", slug: "fez", url: WASM_RIP + "/FEZ/fez.html", cat: "PC" },
  { name: "Brotato Paws n' Claws", slug: "brotato", url: WASM_RIP + "/bpac/index.html", cat: "PC" },
  { name: "Ravenfield", slug: "ravenfield", url: WASM_RIP + "/ravenfield/index.html", cat: "PC" },
  { name: "Clustertruck", slug: "clustertruck", url: WASM_RIP + "/ClusterTruck/clustertruck.html", cat: "PC" },
  { name: "Plague Inc", slug: "plague-inc", url: WASM_RIP + "/plauge/index.html", cat: "PC" },
  { name: "Lobotomy Corporation", slug: "lobotomy-corporation", url: WASM_RIP + "/lob-corp/index.html", cat: "PC" },
  { name: "Trombone Champ", slug: "trombone-champ", url: WASM_RIP + "/tchamp/index.html", cat: "PC" },
  { name: "Granny 3", slug: "granny-3", url: WASM_RIP + "/granny/granny3.html", cat: "PC" },
  { name: "How to Fish", slug: "how-to-fish", url: WASM_RIP + "/HowToFish/HowToFish.html", cat: "PC" },
  { name: "SCP: Containment Breach", slug: "scp-containment-breach", url: WASM_RIP + "/scp/index.html", cat: "PC" },
  { name: "Baldi's Basics Birthday Bash", slug: "baldis-birthday-bash", url: WASM_RIP + "/birthdaybash/index.html", cat: "PC" },
  { name: "Boil Noodles at Night", slug: "boil-noodles-at-night", url: WASM_RIP + "/boilnoodles/index.html", cat: "PC" },
  { name: "Cheese Rolling", slug: "cheese-rolling", url: WASM_RIP + "/cheese-rolling/index.html", cat: "PC" },
  { name: "Dice A Million", slug: "dice-a-million", url: WASM_RIP + "/diceAmillion/diceamillion.html", cat: "PC" },
  { name: "The Man From The Window 2", slug: "man-from-the-window-2", url: WASM_RIP + "/MFDW2/index.html", cat: "PC" },
  { name: "Beatblock", slug: "beatblock", url: WASM_RIP + "/beatblock/index.html", cat: "PC" },
  { name: "Happy Room", slug: "happy-room", url: WASM_RIP + "/happy-room/index.html", cat: "PC" },
  { name: "Ages of Conflict", slug: "ages-of-conflict", url: WASM_RIP + "/aoc/index.html", cat: "PC" },
  { name: "while True: learn()", slug: "while-true-learn", url: WASM_RIP + "/wtl/index.html", cat: "PC" },
  { name: "Crashout Crew", slug: "crashout-crew", url: WASM_RIP + "/cc/index.html", cat: "PC" },
  { name: "The Message From Deep Space", slug: "message-from-deep-space", url: WASM_RIP + "/TMFDS/index.html", cat: "PC" },
  { name: "Dude, Stop", slug: "dude-stop", url: WASM_RIP + "/dudestop/index.html", cat: "PC" },
  { name: "Hill Climb Racing", slug: "hill-climb-racing", url: WASM_RIP + "/hcr/index.html", cat: "PC" },
  { name: "Toasterball", slug: "toasterball", url: WASM_RIP + "/toasterball/index.html", cat: "PC" },

  /* ==================== NEO GEO (94) ==================== */
  { name: "2020 Super Baseball", slug: "2020-super-baseball", url: WASM_BASE + "/2020-super-baseball", cat: "Neo Geo" },
  { name: "3 Count Bout", slug: "3-count-bout", url: WASM_BASE + "/3-count-bout", cat: "Neo Geo" },
  { name: "Aero Fighters 2", slug: "aero-fighters-2", url: WASM_BASE + "/aero-fighters-2", cat: "Neo Geo" },
  { name: "Aero Fighters 3", slug: "aero-fighters-3", url: WASM_BASE + "/aero-fighters-3", cat: "Neo Geo" },
  { name: "Alpha Mission II", slug: "alpha-mission-2", url: WASM_BASE + "/alpha-mission-2", cat: "Neo Geo" },
  { name: "Andro Dunos", slug: "andro-dunos", url: WASM_BASE + "/andro-dunos", cat: "Neo Geo" },
  { name: "Art of Fighting 2", slug: "art-of-fighting-2", url: WASM_BASE + "/art-of-fighting-2", cat: "Neo Geo" },
  { name: "Art of Fighting 3", slug: "art-of-fighting-3", url: WASM_BASE + "/art-of-fighting-3", cat: "Neo Geo" },
  { name: "Bang Bead", slug: "bang-bead", url: WASM_BASE + "/bang-bead", cat: "Neo Geo" },
  { name: "Baseball Stars 2", slug: "baseball-stars-2", url: WASM_BASE + "/baseball-stars-2", cat: "Neo Geo" },
  { name: "Baseball Stars Professional", slug: "baseball-stars-pro", url: WASM_BASE + "/baseball-stars-professional", cat: "Neo Geo" },
  { name: "Blazing Star", slug: "blazing-star", url: WASM_BASE + "/blazing-star", cat: "Neo Geo" },
  { name: "Blue's Journey", slug: "blues-journey", url: WASM_BASE + "/blues-journey", cat: "Neo Geo" },
  { name: "Breakers Revenge", slug: "breakers-revenge", url: WASM_BASE + "/breakers-revenge", cat: "Neo Geo" },
  { name: "Burning Fight", slug: "burning-fight", url: WASM_BASE + "/burning-fight", cat: "Neo Geo" },
  { name: "Crossed Swords", slug: "crossed-swords", url: WASM_BASE + "/crossed-swords", cat: "Neo Geo" },
  { name: "Crossed Swords 2", slug: "crossed-swords-2", url: WASM_BASE + "/crossed-swords-2", cat: "Neo Geo" },
  { name: "Double Dragon (Neo Geo)", slug: "double-dragon-neogeo", url: WASM_BASE + "/double-dragon-neo-geo", cat: "Neo Geo" },
  { name: "EightMan", slug: "eightman", url: WASM_BASE + "/eightman", cat: "Neo Geo" },
  { name: "Fatal Fury", slug: "fatal-fury", url: WASM_BASE + "/fatal-fury", cat: "Neo Geo" },
  { name: "Fatal Fury 3", slug: "fatal-fury-3", url: WASM_BASE + "/fatal-fury-3", cat: "Neo Geo" },
  { name: "Fatal Fury Special", slug: "fatal-fury-special", url: WASM_BASE + "/fatal-fury-special", cat: "Neo Geo" },
  { name: "Ganryu", slug: "ganryu", url: WASM_BASE + "/ganryu", cat: "Neo Geo" },
  { name: "Garou: Mark of the Wolves", slug: "garou-motw", url: WASM_BASE + "/garou-mark-of-the-wolves", cat: "Neo Geo" },
  { name: "Ghost Pilots", slug: "ghost-pilots", url: WASM_BASE + "/ghost-pilots", cat: "Neo Geo" },
  { name: "Goal! Goal! Goal!", slug: "goal-goal-goal", url: WASM_BASE + "/goal-goal-goal", cat: "Neo Geo" },
  { name: "Kabuki Klash", slug: "kabuki-klash", url: WASM_BASE + "/kabuki-klash", cat: "Neo Geo" },
  { name: "Karnov's Revenge", slug: "karnovs-revenge", url: WASM_BASE + "/karnovs-revenge", cat: "Neo Geo" },
  { name: "King of the Monsters", slug: "king-of-monsters", url: WASM_BASE + "/king-of-the-monsters", cat: "Neo Geo" },
  { name: "King of the Monsters 2", slug: "king-of-monsters-2", url: WASM_BASE + "/king-of-the-monsters-2", cat: "Neo Geo" },
  { name: "Last Resort", slug: "last-resort", url: WASM_BASE + "/last-resort", cat: "Neo Geo" },
  { name: "League Bowling", slug: "league-bowling", url: WASM_BASE + "/league-bowling", cat: "Neo Geo" },
  { name: "Magical Drop II", slug: "magical-drop-2", url: WASM_BASE + "/magical-drop-2", cat: "Neo Geo" },
  { name: "Magical Drop III", slug: "magical-drop-3", url: WASM_BASE + "/magical-drop-3", cat: "Neo Geo" },
  { name: "Magician Lord", slug: "magician-lord", url: WASM_BASE + "/magician-lord", cat: "Neo Geo" },
  { name: "Matrimelee", slug: "matrimelee", url: WASM_BASE + "/matrimelee", cat: "Neo Geo" },
  { name: "Metal Slug", slug: "metal-slug", url: WASM_BASE + "/metal-slug", cat: "Neo Geo" },
  { name: "Metal Slug 3", slug: "metal-slug-3", url: WASM_BASE + "/metal-slug-3", cat: "Neo Geo" },
  { name: "Metal Slug 4", slug: "metal-slug-4", url: WASM_BASE + "/metal-slug-4", cat: "Neo Geo" },
  { name: "Metal Slug 5", slug: "metal-slug-5", url: WASM_BASE + "/metal-slug-5", cat: "Neo Geo" },
  { name: "Metal Slug X", slug: "metal-slug-x", url: WASM_BASE + "/metal-slug-x", cat: "Neo Geo" },
  { name: "Mutation Nation", slug: "mutation-nation", url: WASM_BASE + "/mutation-nation", cat: "Neo Geo" },
  { name: "NAM-1975", slug: "nam-1975", url: WASM_BASE + "/nam-1975", cat: "Neo Geo" },
  { name: "Neo Bomberman", slug: "neo-bomberman", url: WASM_BASE + "/neo-bomberman", cat: "Neo Geo" },
  { name: "Neo Drift Out", slug: "neo-drift-out", url: WASM_BASE + "/neo-drift-out", cat: "Neo Geo" },
  { name: "Neo Mr. Do!", slug: "neo-mr-do", url: WASM_BASE + "/neo-mr-do", cat: "Neo Geo" },
  { name: "Neo Turf Masters", slug: "neo-turf-masters", url: WASM_BASE + "/neo-turf-masters", cat: "Neo Geo" },
  { name: "Nightmare in the Dark", slug: "nightmare-in-the-dark", url: WASM_BASE + "/nightmare-in-the-dark", cat: "Neo Geo" },
  { name: "Ninja Combat", slug: "ninja-combat", url: WASM_BASE + "/ninja-combat", cat: "Neo Geo" },
  { name: "Ninja Commando", slug: "ninja-commando", url: WASM_BASE + "/ninja-commando", cat: "Neo Geo" },
  { name: "Over Top", slug: "over-top", url: WASM_BASE + "/over-top", cat: "Neo Geo" },
  { name: "Panic Bomber", slug: "panic-bomber", url: WASM_BASE + "/panic-bomber", cat: "Neo Geo" },
  { name: "Prehistoric Isle 2", slug: "prehistoric-isle-2", url: WASM_BASE + "/prehistoric-isle-2", cat: "Neo Geo" },
  { name: "Pulstar", slug: "pulstar", url: WASM_BASE + "/pulstar", cat: "Neo Geo" },
  { name: "Puzzle Bobble", slug: "puzzle-bobble", url: WASM_BASE + "/puzzle-bobble", cat: "Neo Geo" },
  { name: "Puzzle Bobble 2", slug: "puzzle-bobble-2", url: WASM_BASE + "/puzzle-bobble-2", cat: "Neo Geo" },
  { name: "Rage of the Dragons", slug: "rage-of-the-dragons", url: WASM_BASE + "/rage-of-the-dragons", cat: "Neo Geo" },
  { name: "Real Bout Fatal Fury", slug: "real-bout-fatal-fury", url: WASM_BASE + "/real-bout-fatal-fury", cat: "Neo Geo" },
  { name: "Real Bout Fatal Fury 2", slug: "real-bout-fatal-fury-2", url: WASM_BASE + "/real-bout-fatal-fury-2", cat: "Neo Geo" },
  { name: "Real Bout Fatal Fury Special", slug: "real-bout-fatal-fury-special", url: WASM_BASE + "/real-bout-fatal-fury-special", cat: "Neo Geo" },
  { name: "Robo Army", slug: "robo-army", url: WASM_BASE + "/robo-army", cat: "Neo Geo" },
  { name: "Samurai Shodown III", slug: "samurai-shodown-3", url: WASM_BASE + "/samurai-shodown-3", cat: "Neo Geo" },
  { name: "Samurai Shodown IV", slug: "samurai-shodown-4", url: WASM_BASE + "/samurai-shodown-4", cat: "Neo Geo" },
  { name: "Samurai Shodown V Special", slug: "samurai-shodown-5", url: WASM_BASE + "/samurai-shodown-v-special", cat: "Neo Geo" },
  { name: "Sengoku", slug: "sengoku", url: WASM_BASE + "/sengoku", cat: "Neo Geo" },
  { name: "Sengoku 2", slug: "sengoku-2", url: WASM_BASE + "/sengoku-2", cat: "Neo Geo" },
  { name: "Sengoku 3", slug: "sengoku-3", url: WASM_BASE + "/sengoku-3", cat: "Neo Geo" },
  { name: "Shock Troopers", slug: "shock-troopers", url: WASM_BASE + "/shock-troopers", cat: "Neo Geo" },
  { name: "Shock Troopers 2nd Squad", slug: "shock-troopers-2", url: WASM_BASE + "/shock-troopers-2nd-squad", cat: "Neo Geo" },
  { name: "SNK vs. Capcom: SVC Chaos", slug: "svc-chaos", url: WASM_BASE + "/snk-vs-capcom-svc-chaos", cat: "Neo Geo" },
  { name: "Soccer Brawl", slug: "soccer-brawl", url: WASM_BASE + "/soccer-brawl", cat: "Neo Geo" },
  { name: "Spinmaster", slug: "spinmaster", url: WASM_BASE + "/spinmaster", cat: "Neo Geo" },
  { name: "Street Hoop", slug: "street-hoop", url: WASM_BASE + "/street-hoop", cat: "Neo Geo" },
  { name: "Super Dodge Ball", slug: "super-dodge-ball", url: WASM_BASE + "/super-dodge-ball", cat: "Neo Geo" },
  { name: "The Irritating Maze", slug: "irritating-maze", url: WASM_BASE + "/the-irritating-maze", cat: "Neo Geo" },
  { name: "The King of Fighters '94", slug: "kof-94", url: WASM_BASE + "/the-king-of-fighters-94", cat: "Neo Geo" },
  { name: "The King of Fighters '95", slug: "kof-95", url: WASM_BASE + "/the-king-of-fighters-95", cat: "Neo Geo" },
  { name: "The King of Fighters '96", slug: "kof-96", url: WASM_BASE + "/the-king-of-fighters-96", cat: "Neo Geo" },
  { name: "The King of Fighters '97", slug: "kof-97", url: WASM_BASE + "/the-king-of-fighters-97", cat: "Neo Geo" },
  { name: "The King of Fighters 2000", slug: "kof-2000", url: WASM_BASE + "/the-king-of-fighters-2000", cat: "Neo Geo" },
  { name: "The King of Fighters 2001", slug: "kof-2001", url: WASM_BASE + "/the-king-of-fighters-2001", cat: "Neo Geo" },
  { name: "The King of Fighters 2002", slug: "kof-2002", url: WASM_BASE + "/the-king-of-fighters-2002", cat: "Neo Geo" },
  { name: "The King of Fighters 2003", slug: "kof-2003", url: WASM_BASE + "/the-king-of-fighters-2003", cat: "Neo Geo" },
  { name: "The Last Blade", slug: "last-blade", url: WASM_BASE + "/the-last-blade", cat: "Neo Geo" },
  { name: "The Last Blade 2", slug: "last-blade-2", url: WASM_BASE + "/the-last-blade-2", cat: "Neo Geo" },
  { name: "The Super Spy", slug: "super-spy", url: WASM_BASE + "/the-super-spy", cat: "Neo Geo" },
  { name: "The Ultimate 11", slug: "ultimate-11", url: WASM_BASE + "/the-ultimate-11", cat: "Neo Geo" },
  { name: "Thrash Rally", slug: "thrash-rally", url: WASM_BASE + "/thrash-rally", cat: "Neo Geo" },
  { name: "Top Hunter", slug: "top-hunter", url: WASM_BASE + "/top-hunter", cat: "Neo Geo" },
  { name: "Twinkle Star Sprites", slug: "twinkle-star-sprites", url: WASM_BASE + "/twinkle-star-sprites", cat: "Neo Geo" },
  { name: "Waku Waku 7", slug: "waku-waku-7", url: WASM_BASE + "/waku-waku-7", cat: "Neo Geo" },
  { name: "Windjammers", slug: "windjammers", url: WASM_BASE + "/windjammers", cat: "Neo Geo" },
  { name: "Zed Blade", slug: "zed-blade", url: WASM_BASE + "/zed-blade", cat: "Neo Geo" },
  { name: "Zupapa!", slug: "zupapa", url: WASM_BASE + "/zupapa", cat: "Neo Geo" },

  /* ==================== CAPCOM (62) ==================== */
  { name: "1941: Counter Attack", slug: "1941", url: WASM_BASE + "/1941-counter-attack", cat: "Capcom" },
  { name: "1944: The Loop Master", slug: "1944", url: WASM_BASE + "/1944-the-loop-master", cat: "Capcom" },
  { name: "19XX: The War Against Destiny", slug: "19xx", url: WASM_BASE + "/19xx-the-war-against-destiny", cat: "Capcom" },
  { name: "Alien vs. Predator", slug: "avp-capcom", url: WASM_BASE + "/alien-vs-predator", cat: "Capcom" },
  { name: "Armored Warriors", slug: "armored-warriors", url: WASM_BASE + "/armored-warriors", cat: "Capcom" },
  { name: "Battle Circuit", slug: "battle-circuit", url: WASM_BASE + "/battle-circuit", cat: "Capcom" },
  { name: "Cadillacs and Dinosaurs", slug: "cadillacs-dinosaurs", url: WASM_BASE + "/cadillacs-and-dinosaurs", cat: "Capcom" },
  { name: "Capcom Sports Club", slug: "capcom-sports-club", url: WASM_BASE + "/capcom-sports-club", cat: "Capcom" },
  { name: "Captain Commando", slug: "captain-commando", url: WASM_BASE + "/captain-commando", cat: "Capcom" },
  { name: "Carrier Air Wing", slug: "carrier-air-wing", url: WASM_BASE + "/carrier-air-wing", cat: "Capcom" },
  { name: "Cyberbots", slug: "cyberbots", url: WASM_BASE + "/cyberbots", cat: "Capcom" },
  { name: "Darkstalkers", slug: "darkstalkers", url: WASM_BASE + "/darkstalkers", cat: "Capcom" },
  { name: "Dimahoo", slug: "dimahoo", url: WASM_BASE + "/dimahoo", cat: "Capcom" },
  { name: "D&D: Shadow Over Mystara", slug: "dd-shadow-mystara", url: WASM_BASE + "/dungeons-dragons-shadow-over-mystara", cat: "Capcom" },
  { name: "D&D: Tower of Doom", slug: "dd-tower-doom", url: WASM_BASE + "/dungeons-dragons-tower-of-doom", cat: "Capcom" },
  { name: "Dynasty Wars", slug: "dynasty-wars", url: WASM_BASE + "/dynasty-wars", cat: "Capcom" },
  { name: "Eco Fighters", slug: "eco-fighters", url: WASM_BASE + "/eco-fighters", cat: "Capcom" },
  { name: "Final Fight", slug: "final-fight", url: WASM_BASE + "/final-fight", cat: "Capcom" },
  { name: "Forgotten Worlds", slug: "forgotten-worlds", url: WASM_BASE + "/forgotten-worlds", cat: "Capcom" },
  { name: "Giga Wing", slug: "giga-wing", url: WASM_BASE + "/giga-wing", cat: "Capcom" },
  { name: "Hyper Street Fighter II", slug: "hyper-sf2", url: WASM_BASE + "/hyper-street-fighter-2", cat: "Capcom" },
  { name: "JoJo's Bizarre Adventure", slug: "jojo", url: WASM_BASE + "/jojos-bizarre-adventure", cat: "Capcom" },
  { name: "JoJo's Venture", slug: "jojo-venture", url: WASM_BASE + "/jojos-venture", cat: "Capcom" },
  { name: "Knights of the Round", slug: "knights-of-the-round", url: WASM_BASE + "/knights-of-the-round", cat: "Capcom" },
  { name: "Magic Sword", slug: "magic-sword", url: WASM_BASE + "/magic-sword", cat: "Capcom" },
  { name: "Mars Matrix", slug: "mars-matrix", url: WASM_BASE + "/mars-matrix", cat: "Capcom" },
  { name: "Marvel Super Heroes", slug: "marvel-super-heroes", url: WASM_BASE + "/marvel-super-heroes", cat: "Capcom" },
  { name: "Marvel Super Heroes vs. Street Fighter", slug: "marvel-vs-sf", url: WASM_BASE + "/marvel-super-heroes-vs-street-fighter", cat: "Capcom" },
  { name: "Marvel vs. Capcom", slug: "marvel-vs-capcom", url: WASM_BASE + "/marvel-vs-capcom", cat: "Capcom" },
  { name: "Mega Man 2: The Power Fighters", slug: "mega-man-2-power-fighters", url: WASM_BASE + "/mega-man-2-the-power-fighters", cat: "Capcom" },
  { name: "Mega Man: The Power Battle", slug: "mega-man-power-battle", url: WASM_BASE + "/mega-man-the-power-battle", cat: "Capcom" },
  { name: "Mega Twins", slug: "mega-twins", url: WASM_BASE + "/mega-twins", cat: "Capcom" },
  { name: "Mighty! Pang", slug: "mighty-pang", url: WASM_BASE + "/mighty-pang", cat: "Capcom" },
  { name: "Muscle Bomber Duo", slug: "muscle-bomber-duo", url: WASM_BASE + "/muscle-bomber-duo", cat: "Capcom" },
  { name: "Night Warriors", slug: "night-warriors", url: WASM_BASE + "/night-warriors-darkstalkers-revenge", cat: "Capcom" },
  { name: "Pang! 3", slug: "pang-3", url: WASM_BASE + "/pang-3", cat: "Capcom" },
  { name: "Pnickies", slug: "pnickies", url: WASM_BASE + "/pnickies", cat: "Capcom" },
  { name: "Progear", slug: "progear", url: WASM_BASE + "/progear", cat: "Capcom" },
  { name: "Puzz Loop 2", slug: "puzz-loop-2", url: WASM_BASE + "/puzz-loop-2", cat: "Capcom" },
  { name: "Red Earth", slug: "red-earth", url: WASM_BASE + "/red-earth", cat: "Capcom" },
  { name: "Ring of Destruction", slug: "ring-of-destruction", url: WASM_BASE + "/ring-of-destruction", cat: "Capcom" },
  { name: "Saturday Night Slam Masters", slug: "slam-masters", url: WASM_BASE + "/saturday-night-slam-masters", cat: "Capcom" },
  { name: "Street Fighter Alpha", slug: "sf-alpha", url: WASM_BASE + "/street-fighter-alpha", cat: "Capcom" },
  { name: "Street Fighter Alpha 2", slug: "sf-alpha-2", url: WASM_BASE + "/street-fighter-alpha-2", cat: "Capcom" },
  { name: "Street Fighter Alpha 3", slug: "sf-alpha-3", url: WASM_BASE + "/street-fighter-alpha-3", cat: "Capcom" },
  { name: "Street Fighter II: Champion Edition", slug: "sf2-champion", url: WASM_BASE + "/street-fighter-2-champion-edition", cat: "Capcom" },
  { name: "Street Fighter II: Hyper Fighting", slug: "sf2-hyper", url: WASM_BASE + "/street-fighter-2-hyper-fighting", cat: "Capcom" },
  { name: "Street Fighter II: The World Warrior", slug: "sf2-world-warrior", url: WASM_BASE + "/street-fighter-2-the-world-warrior", cat: "Capcom" },
  { name: "Street Fighter III: 2nd Impact", slug: "sf3-2nd-impact", url: WASM_BASE + "/street-fighter-3-2nd-impact", cat: "Capcom" },
  { name: "Street Fighter III: 3rd Strike", slug: "sf3-3rd-strike", url: WASM_BASE + "/street-fighter-3-3rd-strike", cat: "Capcom" },
  { name: "Street Fighter III: New Generation", slug: "sf3-new-gen", url: WASM_BASE + "/street-fighter-3-new-generation", cat: "Capcom" },
  { name: "Street Fighter Zero 2 Alpha", slug: "sf-zero-2-alpha", url: WASM_BASE + "/street-fighter-zero-2-alpha", cat: "Capcom" },
  { name: "Super Gem Fighter Mini Mix", slug: "super-gem-fighter", url: WASM_BASE + "/super-gem-fighter-mini-mix", cat: "Capcom" },
  { name: "Super Puzzle Fighter II Turbo", slug: "super-puzzle-fighter", url: WASM_BASE + "/super-puzzle-fighter-2-turbo", cat: "Capcom" },
  { name: "Super Street Fighter II Turbo", slug: "super-sf2-turbo", url: WASM_BASE + "/super-street-fighter-2-turbo", cat: "Capcom" },
  { name: "Super Street Fighter II: New Challengers", slug: "super-sf2-new-challengers", url: WASM_BASE + "/super-street-fighter-2-new-challengers", cat: "Capcom" },
  { name: "The King of Dragons", slug: "king-of-dragons", url: WASM_BASE + "/the-king-of-dragons", cat: "Capcom" },
  { name: "Three Wonders", slug: "three-wonders", url: WASM_BASE + "/three-wonders", cat: "Capcom" },
  { name: "U.N. Squadron", slug: "un-squadron", url: WASM_BASE + "/un-squadron", cat: "Capcom" },
  { name: "Vampire Hunter 2", slug: "vampire-hunter-2", url: WASM_BASE + "/vampire-hunter-2", cat: "Capcom" },
  { name: "Vampire Savior", slug: "vampire-savior", url: WASM_BASE + "/vampire-savior", cat: "Capcom" },
  { name: "Vampire Savior 2", slug: "vampire-savior-2", url: WASM_BASE + "/vampire-savior-2", cat: "Capcom" },
  { name: "Varth", slug: "varth", url: WASM_BASE + "/varth", cat: "Capcom" },
  { name: "Warriors of Fate", slug: "warriors-of-fate", url: WASM_BASE + "/warriors-of-fate", cat: "Capcom" },
  { name: "Willow", slug: "willow", url: WASM_BASE + "/willow", cat: "Capcom" },
  { name: "X-Men vs Street Fighter", slug: "xmen-vs-sf", url: WASM_BASE + "/x-men-vs-street-fighter", cat: "Capcom" },
  { name: "X-Men: Children Of The Atom", slug: "xmen-cota", url: WASM_BASE + "/x-men-children-of-the-atom", cat: "Capcom" },

  /* ==================== ARCADE (70) ==================== */
  { name: "After Burner II", slug: "after-burner-2", url: WASM_BASE + "/after-burner-2", cat: "Arcade" },
  { name: "Alien Storm", slug: "alien-storm", url: WASM_BASE + "/alien-storm", cat: "Arcade" },
  { name: "Altered Beast", slug: "altered-beast", url: WASM_BASE + "/altered-beast", cat: "Arcade" },
  { name: "Art of Fighting", slug: "art-of-fighting", url: WASM_BASE + "/art-of-fighting", cat: "Arcade" },
  { name: "Batman", slug: "batman-arcade", url: WASM_BASE + "/batman", cat: "Arcade" },
  { name: "Battletoads", slug: "battletoads", url: WASM_BASE + "/battletoads", cat: "Arcade" },
  { name: "Bishoujo Senshi Sailor Moon", slug: "sailor-moon", url: WASM_BASE + "/bishoujo-senshi-sailor-moon", cat: "Arcade" },
  { name: "Buck Rogers", slug: "buck-rogers", url: WASM_BASE + "/buck-rogers", cat: "Arcade" },
  { name: "Captain America and the Avengers", slug: "captain-america", url: WASM_BASE + "/captain-america-and-the-avengers", cat: "Arcade" },
  { name: "Columns", slug: "columns", url: WASM_BASE + "/columns", cat: "Arcade" },
  { name: "Congo Bongo", slug: "congo-bongo", url: WASM_BASE + "/congo-bongo", cat: "Arcade" },
  { name: "Contra", slug: "contra", url: WASM_BASE + "/contra", cat: "Arcade" },
  { name: "Cyber Police ESWAT", slug: "eswat", url: WASM_BASE + "/cyber-police-eswat", cat: "Arcade" },
  { name: "Double Dragon", slug: "double-dragon", url: WASM_BASE + "/double-dragon", cat: "Arcade" },
  { name: "Double Dragon 3", slug: "double-dragon-3", url: WASM_BASE + "/double-dragon-3", cat: "Arcade" },
  { name: "Double Dragon II", slug: "double-dragon-2", url: WASM_BASE + "/double-dragon-2", cat: "Arcade" },
  { name: "Dragon Ball Z", slug: "dragon-ball-z", url: WASM_BASE + "/dragon-ball-z", cat: "Arcade" },
  { name: "Fire Shark", slug: "fire-shark", url: WASM_BASE + "/fire-shark", cat: "Arcade" },
  { name: "Flicky", slug: "flicky", url: WASM_BASE + "/flicky", cat: "Arcade" },
  { name: "Frogger", slug: "frogger", url: WASM_BASE + "/frogger", cat: "Arcade" },
  { name: "Gain Ground", slug: "gain-ground", url: WASM_BASE + "/gain-ground", cat: "Arcade" },
  { name: "Ghouls'n Ghosts", slug: "ghouls-n-ghosts", url: WASM_BASE + "/ghouls-n-ghosts", cat: "Arcade" },
  { name: "Golden Axe", slug: "golden-axe", url: WASM_BASE + "/golden-axe", cat: "Arcade" },
  { name: "Growl", slug: "growl", url: WASM_BASE + "/growl", cat: "Arcade" },
  { name: "Hellfire", slug: "hellfire", url: WASM_BASE + "/hellfire", cat: "Arcade" },
  { name: "Hit the Ice", slug: "hit-the-ice", url: WASM_BASE + "/hit-the-ice", cat: "Arcade" },
  { name: "Hook", slug: "hook", url: WASM_BASE + "/hook", cat: "Arcade" },
  { name: "King & Balloon", slug: "king-balloon", url: WASM_BASE + "/king-and-balloon", cat: "Arcade" },
  { name: "Klax", slug: "klax", url: WASM_BASE + "/klax", cat: "Arcade" },
  { name: "Michael Jackson's Moonwalker", slug: "moonwalker", url: WASM_BASE + "/michael-jacksons-moonwalker", cat: "Arcade" },
  { name: "Mortal Kombat", slug: "mortal-kombat", url: WASM_BASE + "/mortal-kombat", cat: "Arcade" },
  { name: "Mortal Kombat II", slug: "mortal-kombat-2", url: WASM_BASE + "/mortal-kombat-2", cat: "Arcade" },
  { name: "Ms. Pac-Man", slug: "ms-pac-man", url: WASM_BASE + "/ms-pac-man", cat: "Arcade" },
  { name: "NBA Jam Tournament Edition", slug: "nba-jam", url: WASM_BASE + "/nba-jam-tournament-edition", cat: "Arcade" },
  { name: "Nemo", slug: "nemo", url: WASM_BASE + "/nemo", cat: "Arcade" },
  { name: "OutRun", slug: "outrun", url: WASM_BASE + "/outrun", cat: "Arcade" },
  { name: "Pac-Man", slug: "pac-man", url: WASM_BASE + "/pac-man", cat: "Arcade" },
  { name: "Pit-Fighter", slug: "pit-fighter", url: WASM_BASE + "/pit-fighter", cat: "Arcade" },
  { name: "Puyo Puyo 2", slug: "puyo-puyo-2", url: WASM_BASE + "/puyo-puyo-2", cat: "Arcade" },
  { name: "Rainbow Islands", slug: "rainbow-islands", url: WASM_BASE + "/rainbow-islands", cat: "Arcade" },
  { name: "Rambo III", slug: "rambo-3", url: WASM_BASE + "/rambo-3", cat: "Arcade" },
  { name: "Rolling Thunder 2", slug: "rolling-thunder-2", url: WASM_BASE + "/rolling-thunder-2", cat: "Arcade" },
  { name: "Samurai Shodown", slug: "samurai-shodown", url: WASM_BASE + "/samurai-shodown", cat: "Arcade" },
  { name: "Samurai Shodown II", slug: "samurai-shodown-2", url: WASM_BASE + "/samurai-shodown-2", cat: "Arcade" },
  { name: "SegaSonic the Hedgehog", slug: "sega-sonic", url: WASM_BASE + "/sega-sonic-the-hedgehog", cat: "Arcade" },
  { name: "Shadow Dancer", slug: "shadow-dancer", url: WASM_BASE + "/shadow-dancer", cat: "Arcade" },
  { name: "Snow Bros.: Nick & Tom", slug: "snow-bros", url: WASM_BASE + "/snow-bros", cat: "Arcade" },
  { name: "Space Harrier", slug: "space-harrier", url: WASM_BASE + "/space-harrier", cat: "Arcade" },
  { name: "Star Wars", slug: "star-wars", url: WASM_BASE + "/star-wars", cat: "Arcade" },
  { name: "Strider", slug: "strider", url: WASM_BASE + "/strider", cat: "Arcade" },
  { name: "Super Hang-On", slug: "super-hang-on", url: WASM_BASE + "/super-hang-on", cat: "Arcade" },
  { name: "Superman", slug: "superman", url: WASM_BASE + "/superman", cat: "Arcade" },
  { name: "The King of Fighters '98", slug: "kof-98", url: WASM_BASE + "/the-king-of-fighters-98", cat: "Arcade" },
  { name: "The King of Fighters '99", slug: "kof-99", url: WASM_BASE + "/the-king-of-fighters-99", cat: "Arcade" },
  { name: "The New Zealand Story", slug: "new-zealand-story", url: WASM_BASE + "/the-new-zealand-story", cat: "Arcade" },
  { name: "The Punisher", slug: "punisher", url: WASM_BASE + "/the-punisher", cat: "Arcade" },
  { name: "Toki", slug: "toki", url: WASM_BASE + "/toki", cat: "Arcade" },
  { name: "Truxton", slug: "truxton", url: WASM_BASE + "/truxton", cat: "Arcade" },
  { name: "Twin Cobra", slug: "twin-cobra", url: WASM_BASE + "/twin-cobra", cat: "Arcade" },
  { name: "Twin Hawk", slug: "twin-hawk", url: WASM_BASE + "/twin-hawk", cat: "Arcade" },
  { name: "Two Crude Dudes", slug: "two-crude-dudes", url: WASM_BASE + "/two-crude-dudes", cat: "Arcade" },
  { name: "Ultimate Mortal Kombat 3", slug: "umk3", url: WASM_BASE + "/ultimate-mortal-kombat-3", cat: "Arcade" },
  { name: "Viewpoint", slug: "viewpoint", url: WASM_BASE + "/viewpoint", cat: "Arcade" },
  { name: "Volfied", slug: "volfied", url: WASM_BASE + "/volfied", cat: "Arcade" },
  { name: "Zero Wing", slug: "zero-wing", url: WASM_BASE + "/zero-wing", cat: "Arcade" },
  { name: "2020 Super Baseball (Arcade)", slug: "2020-super-baseball-arcade", url: WASM_BASE + "/2020-super-baseball", cat: "Arcade" },

  /* ==================== SHOOTER (23) ==================== */
  { name: "Quake", slug: "quake", url: "https://q1.pieter.com/", cat: "Shooter" },
  { name: "CS Surf", slug: "cs-surf", url: "https://surfd.net/", cat: "Shooter" },
  { name: "Black Ops Zombies", slug: "bo1-zombies", url: "https://vel.gg/bo1z", cat: "Shooter" },
  { name: "Halo: Combat Evolved", slug: "halo-ce", url: "https://mitchellhynes.com/halo", cat: "Shooter" },
  { name: "Moon Zombies", slug: "moon-zombies", url: "https://radiantoptimizer.app/en/games/moon-zombies", cat: "Shooter" },
  { name: "Kino der Toten", slug: "kino-der-toten", url: "https://theeagler1234-alt.github.io/kino-der-toten/", cat: "Shooter" },
  { name: "Claude of Duty: Vibe Slops II", slug: "black-ops-2", url: "https://playops.netlify.app/", cat: "Shooter" },
  { name: "Halo CE Mobile", slug: "halo-mobile", url: "https://hcemobile.com/", cat: "Shooter" },
  { name: "Quake II", slug: "quake-2", url: "https://q2.pieter.com/", cat: "Shooter" },
  { name: "Quake III", slug: "quake-3", url: "https://q3.pieter.com/", cat: "Shooter" },
  { name: "Return to Castle Wolfenstein", slug: "wolfenstein", url: "https://rtcw.pieter.com/", cat: "Shooter" },
  { name: "Urban Terror", slug: "urban-terror", url: "https://ut.pieter.com/", cat: "Shooter" },
  { name: "Half-Life Web", slug: "half-life", url: "https://pixelsuft.github.io/hl/", cat: "Shooter" },
  { name: "Half-Life / CS 1.6", slug: "webxash", url: "https://x8bitrain.github.io/webXash/", cat: "Shooter" },
  { name: "Krunker.io", slug: "krunker", url: "https://krunker.io/", cat: "Shooter" },
  { name: "DEADSHOT.io", slug: "deadshot", url: "https://deadshot.io/", cat: "Shooter" },
  { name: "Counter-Strike 1.6", slug: "counter-strike", url: "https://combatskirmish.net/quickjoin", cat: "Shooter" },
  { name: "Nacht der Untoten", slug: "nacht-der-untoten", url: "https://zombies.bitcoinsapi.com/", cat: "Shooter" },
  { name: "Fortnite OG", slug: "fortnite-og", url: "https://fortniteog.lol/", cat: "Shooter" },
  { name: "DOOM II Multiplayer", slug: "doom-2-multiplayer", url: "https://doom.pieter.com/", cat: "Shooter" },
  { name: "Modern Warfare 2", slug: "modern-warfare-2", url: "https://ovz-game-production.up.railway.app/", cat: "Shooter" },
  { name: "Redcoats.io", slug: "redcoats", url: "https://redcoats.io/app/", cat: "Shooter" },
  { name: "Salty Seas", slug: "salty-seas", url: "https://saltyseas.io/app/", cat: "Shooter" },

  /* ==================== ACTION (7) ==================== */
  { name: "PokéSurvivor", slug: "pokesurvivor", url: "https://pokesurvivor.com/", cat: "Action" },
  { name: "Web Dashers", slug: "web-dashers", url: "https://web-dashers.github.io/", cat: "Action" },
  { name: "Lagos Life", slug: "lagos-life", url: "https://lagoslife.com.ng/play/", cat: "Action" },
  { name: "Super Mario Zombies", slug: "super-mario-zombies", url: "https://smz.fun/", cat: "Action" },
  { name: "Crash Bash Online", slug: "crash-bash", url: "https://crashbash.app/", cat: "Action" },
  { name: "The Binding of Isaac: Repentance+", slug: "binding-of-isaac", url: "https://tboi.online/", cat: "Action" },
  { name: "SandStorm", slug: "sandstorm", url: "https://sandstorm.ink/play.html", cat: "Action" },

  /* ==================== RPG (7) ==================== */
  { name: "Diablo", slug: "diablo", url: "https://johnimril.github.io/diablo_web/", cat: "RPG" },
  { name: "TuffyMon", slug: "tuffymon", url: "https://tuffymon.app/", cat: "RPG" },
  { name: "DELTARUNE Fight Simulator", slug: "deltarune-fight-simulator", url: "https://deltarunesim.com/", cat: "RPG" },
  { name: "AI Dungeon", slug: "ai-dungeon", url: "https://play.aidungeon.com/", cat: "RPG" },
  { name: "Pokémon Redstone", slug: "pokemon-redstone", url: "https://pokemon-redstone.pages.dev/", cat: "RPG" },
  { name: "RuneScape Classic", slug: "runescape-classic", url: "https://runescapeclassic.gold/", cat: "RPG" },
  { name: "A Dark Room", slug: "a-dark-room", url: "https://adarkroom.doublespeakgames.com/", cat: "RPG" },

  /* ==================== STRATEGY (6) ==================== */
  { name: "OpenFront.io", slug: "openfront", url: "https://openfront.io/", cat: "Strategy" },
  { name: "OpenTTD", slug: "openttd", url: "https://dos.zone/open-ttd/", cat: "Strategy" },
  { name: "Dune II: Open Dune", slug: "dune-2", url: "https://dos.zone/dune-ii-the-building-of-a-dynasty-dec-1992/", cat: "Strategy" },
  { name: "Command & Conquer", slug: "command-and-conquer", url: "https://dos.zone/command-conquer-sep-26-1995/", cat: "Strategy" },
  { name: "Heroes of Might and Magic II", slug: "heroes-2", url: "https://dos.zone/heroes-of-might-and-magic-ii/", cat: "Strategy" },
  { name: "SimCity 2000", slug: "simcity-2000", url: "https://dos.zone/sim-city-2000-1993/", cat: "Strategy" },

  /* ==================== PUZZLE (17) ==================== */
  { name: "Chainle", slug: "chainle", url: "https://chainle.io/", cat: "Puzzle" },
  { name: "Checkers: Cardgames.io", slug: "checkers-cardgames", url: "https://cardgames.io/checkers/", cat: "Puzzle" },
  { name: "Hearts: Cardgames.io", slug: "hearts-cardgames", url: "https://cardgames.io/hearts/", cat: "Puzzle" },
  { name: "Jigsaw Planet", slug: "jigsaw-planet", url: "https://www.jigsawplanet.com/", cat: "Puzzle" },
  { name: "Songless", slug: "songless", url: "https://lessgames.com/songless", cat: "Puzzle" },
  { name: "RNGdle", slug: "rngdle", url: "https://www.rngdle.com/", cat: "Puzzle" },
  { name: "Connections: NYT", slug: "connections", url: "https://www.nytimes.com/games/connections", cat: "Puzzle" },
  { name: "MapTap.gg", slug: "maptap", url: "https://maptap.gg/home", cat: "Puzzle" },
  { name: "enclose.horse", slug: "enclose-horse", url: "https://enclose.horse/", cat: "Puzzle" },
  { name: "Magnitudle", slug: "magnitudle", url: "https://magnitudle.com/", cat: "Puzzle" },
  { name: "Costcodle", slug: "costcodle", url: "https://costcodle.com/", cat: "Puzzle" },
  { name: "Six Cats Under", slug: "six-cats-under", url: "https://teambeanloop.itch.io/six-cats-under", cat: "Puzzle" },
  { name: "2048", slug: "2048", url: "https://play2048.co/", cat: "Puzzle" },
  { name: "Little Alchemy 2", slug: "little-alchemy-2", url: "https://littlealchemy2.com/", cat: "Puzzle" },
  { name: "Unusual Suspects", slug: "unusual-suspects", url: "https://neal.fun/unusual-suspects/", cat: "Puzzle" },
  { name: "The Password Game", slug: "password-game", url: "https://neal.fun/password-game/", cat: "Puzzle" },
  { name: "I'm Not a Robot", slug: "not-a-robot", url: "https://neal.fun/not-a-robot/", cat: "Puzzle" },

  /* ==================== CASUAL (21) ==================== */
  { name: "Cheese Cube", slug: "cheese-cube", url: "https://radiantoptimizer.app/en/games/cheese-cube", cat: "Casual" },
  { name: "Songspot", slug: "songspot", url: "https://songspot.net/", cat: "Casual" },
  { name: "Fermi", slug: "fermi", url: "https://fermi.gg/", cat: "Casual" },
  { name: "Swervle", slug: "swervle", url: "https://swervle.com/", cat: "Casual" },
  { name: "All 22 Pokémon", slug: "all-22-pokemon", url: "https://all22pokemon.com/", cat: "Casual" },
  { name: "Krillion", slug: "krillion", url: "https://krillion.io/", cat: "Casual" },
  { name: "Poople", slug: "poople", url: "https://poople.io/", cat: "Casual" },
  { name: "Dragonkind", slug: "dragonkind", url: "https://dragonkind.com/", cat: "Casual" },
  { name: "NoomiClone: Browser Prototype", slug: "noomiclone", url: "https://jamesnorth.itch.io/noomiclone", cat: "Casual" },
  { name: "TypeRacer", slug: "typeracer", url: "https://play.typeracer.com/", cat: "Casual" },
  { name: "ZType", slug: "ztype", url: "https://zty.pe/", cat: "Casual" },
  { name: "Toss Office", slug: "toss-office", url: "https://ravenous-den.itch.io/toss-office", cat: "Casual" },
  { name: "Sort the Court!", slug: "sort-the-court", url: "https://graebor.itch.io/sort-the-court", cat: "Casual" },
  { name: "We Become What We Behold", slug: "we-become-what-we-behold", url: "https://ncase.itch.io/wbwwb", cat: "Casual" },
  { name: "Friday Night Funkin'", slug: "friday-night-funkin", url: "https://ninja-muffin24.itch.io/funkin", cat: "Casual" },
  { name: "The Evolution of Trust", slug: "evolution-of-trust", url: "https://ncase.me/trust/", cat: "Casual" },
  { name: "Cookie Clicker", slug: "cookie-clicker", url: "https://orteil.dashnet.org/cookieclicker/", cat: "Casual" },
  { name: "Infinite Craft", slug: "infinite-craft", url: "https://neal.fun/infinite-craft/", cat: "Casual" },
  { name: "Stimulation Clicker", slug: "stimulation-clicker", url: "https://neal.fun/stimulation-clicker/", cat: "Casual" },
  { name: "Park Baron", slug: "park-baron", url: "https://parkbaron.com/play", cat: "Casual" },
  { name: "Seedbed", slug: "seedbed", url: "https://playseedbed.com/", cat: "Casual" },

  /* ==================== HORROR (2) ==================== */
  { name: "I Can Smell You from Here", slug: "i-can-smell-you-from-here", url: "https://catproblem9735.itch.io/i-can-smell-you-from-here", cat: "Horror" },
  { name: "last seen online", slug: "last-seen-online", url: "https://qwook.itch.io/last-seen-online", cat: "Horror" },

  /* ==================== RACING (2) ==================== */
  { name: "Taipei Rush", slug: "taipei-rush", url: "https://www.taipei-rush.app/", cat: "Racing" },
  { name: "Slow Roads", slug: "slow-roads", url: "https://slowroads.io/", cat: "Racing" },

  /* ==================== SPORTS (3) ==================== */
  { name: "Skate 3", slug: "skate-3", url: "https://skate.aaddpp.lol/", cat: "Sports" },
  { name: "Skate Rust", slug: "skate-rust", url: "https://global-terror-skate-rust.fvc3less.workers.dev/full.html", cat: "Sports" },
  { name: "PES 6", slug: "pes-6", url: "https://pes6.optijuegos.net/", cat: "Sports" },

  /* ==================== ADVENTURE (2) ==================== */
  { name: "The Margot Collapse", slug: "the-margot-collapse", url: "https://funday-games.itch.io/the-margot-collapse", cat: "Adventure" },
  { name: "LEGO Island", slug: "lego-island", url: "https://isle.pizza/", cat: "Adventure" },

  /* ==================== RETRO (10) ==================== */
  { name: "Flash Games (878)", slug: "flash-games", url: "https://wasmarcade.com/flash-games", cat: "Retro" },
  { name: "Arcade Classics (227)", slug: "arcade-classics", url: "https://wasmarcade.com/retro-games", cat: "Retro" },
  { name: "DOOM", slug: "doom", url: "https://dos.zone/doom-dec-1993/", cat: "Retro" },
  { name: "DOOM II", slug: "doom-2", url: "https://dos.zone/doom-ii-oct-10-1994/", cat: "Retro" },
  { name: "Wolfenstein 3D", slug: "wolfenstein-3d", url: "https://dos.zone/wolfenstein-3d-may-05-1992/", cat: "Retro" },
  { name: "Duke Nukem 3D", slug: "duke-nukem-3d", url: "https://dos.zone/duke-nukem-3d-1996/", cat: "Retro" },
  { name: "Blood", slug: "blood", url: "https://dos.zone/blood-may-31-1997/", cat: "Retro" },
  { name: "Prince of Persia", slug: "prince-of-persia", url: "https://dos.zone/prince-of-persia-1990/", cat: "Retro" },
  { name: "3D Pinball: Space Cadet", slug: "space-cadet-pinball", url: "https://dos.zone/microsoft-3d-pinball-space-cadet/", cat: "Retro" },
  { name: "The Need for Speed", slug: "need-for-speed", url: "https://dos.zone/the-need-for-speed-sep-1995/", cat: "Retro" },

  /* ==================== SANDBOX (2) ==================== */
  { name: "Tweetcraft", slug: "tweetcraft", url: "https://tweetcraft.jai.vin/", cat: "Sandbox" },
  { name: "Minecraft Classic", slug: "minecraft-classic", url: "https://classic.minecraft.net/", cat: "Sandbox" },

  /* ==================== BARU: game open-source / boleh di-embed ==================== */
  { name: "Hextris", slug: "hextris", url: "https://hextris.github.io/hextris/", cat: "Puzzle" },
  { name: "React Tetris", slug: "react-tetris", url: "https://chvin.github.io/react-tetris/", cat: "Puzzle" },
  { name: "Lichess Puzzle", slug: "lichess-puzzle", url: "https://lichess.org/training/frame?theme=brown&bg=dark", cat: "Puzzle" },
  { name: "Clumsy Bird", slug: "clumsy-bird", url: "https://ellisonleao.github.io/clumsy-bird/", cat: "Casual" },
  { name: "Floppy Bird", slug: "floppy-bird", url: "https://nebez.github.io/floppybird/", cat: "Casual" },
  { name: "Astray (Maze)", slug: "astray-maze", url: "https://wwwtyro.github.io/Astray/", cat: "Casual" },
  { name: "Spend Bill Gates' Money", slug: "spend-gates-money", url: "https://neal.fun/spend/", cat: "Casual" },
  { name: "Draw a Perfect Circle", slug: "perfect-circle", url: "https://neal.fun/perfect-circle/", cat: "Casual" },
  { name: "Absurd Trolley Problems", slug: "absurd-trolley", url: "https://neal.fun/absurd-trolley-problems/", cat: "Casual" },

  /* ==================== JUSTPLAYWEB (jpw) ==================== */
  { name: "Car Crash Test jpw", slug: "jpw-car-crash-test", url: "https://play.gamepix.com/car-crash-test/embed?sid=1", img: JPW_THUMB + "car-crash-test" + ".webp", cat: "Racing" },
  { name: "Minecraft Classic jpw", slug: "jpw-minecraft-classic", url: JPW_GAME + "minecraft-classic" + "/", img: JPW_THUMB + "minecraft-classic" + ".webp", cat: "Casual" },
  { name: "Warfare 1942 jpw", slug: "jpw-warfare-1942", url: JPW_GAME + "warfare-1942" + "/", img: JPW_THUMB + "warfare-1942" + ".webp", cat: "Shooter" },
  { name: "DOOM Shareware jpw", slug: "jpw-doom-shareware", url: JPW_GAME + "doom-shareware" + "/", img: JPW_THUMB + "doom-shareware" + ".webp", cat: "Shooter" },
  { name: "Diablo Shareware jpw", slug: "jpw-diablo-shareware", url: JPW_GAME + "diablo-shareware" + "/", img: JPW_THUMB + "diablo-shareware" + ".webp", cat: "Action" },
  { name: "100 Doors: Escape from Prison jpw", slug: "jpw-hundred-doors-prison", url: JPW_GAME + "hundred-doors-prison" + "/", img: JPW_THUMB + "hundred-doors-prison" + ".webp", cat: "Puzzle" },
  { name: "Delay Lama jpw", slug: "jpw-delay-lama", url: JPW_GAME + "delay-lama" + "/", img: JPW_THUMB + "delay-lama" + ".webp", cat: "Sandbox" },
  { name: "8 Ball Pool Game jpw", slug: "jpw-eight-ball-pool", url: JPW_GAME + "eight-ball-pool" + "/", img: JPW_THUMB + "eight-ball-pool" + ".webp", cat: "Sports" },
  { name: "Ado Stunt Cars 3 jpw", slug: "jpw-ado-stunt-cars-3", url: JPW_GAME + "ado-stunt-cars-3" + "/", img: JPW_THUMB + "ado-stunt-cars-3" + ".webp", cat: "Racing" },
  { name: "Madalin Cars Multiplayer jpw", slug: "jpw-madalin-cars-multiplayer", url: JPW_GAME + "madalin-cars-multiplayer" + "/", img: JPW_THUMB + "madalin-cars-multiplayer" + ".webp", cat: "Racing" },
  { name: "1941 Frozen Front jpw", slug: "jpw-1941-frozen-front", url: JPW_GAME + "1941-frozen-front" + "/", img: JPW_THUMB + "1941-frozen-front" + ".webp", cat: "Strategy" },
  { name: "Ultimate Flying Car jpw", slug: "jpw-ultimate-flying-car", url: JPW_GAME + "ultimate-flying-car" + "/", img: JPW_THUMB + "ultimate-flying-car" + ".webp", cat: "Racing" },
  { name: "Counter Combat Multiplayer jpw", slug: "jpw-counter-combat-multiplayer", url: JPW_GAME + "counter-combat-multiplayer" + "/", img: JPW_THUMB + "counter-combat-multiplayer" + ".webp", cat: "Shooter" },
  { name: "Fancy Pants Adventures jpw", slug: "jpw-fancy-pants", url: JPW_GAME + "fancy-pants" + "/", img: JPW_THUMB + "fancy-pants" + ".webp", cat: "Action" },
  { name: "Grand Nitro Formula jpw", slug: "jpw-grand-nitro-formula", url: JPW_GAME + "grand-nitro-formula" + "/", img: JPW_THUMB + "grand-nitro-formula" + ".webp", cat: "Racing" },
  { name: "Call of Ops 3 jpw", slug: "jpw-call-of-ops-3", url: JPW_GAME + "call-of-ops-3" + "/", img: JPW_THUMB + "call-of-ops-3" + ".webp", cat: "Shooter" },
  { name: "Epic Battle Fantasy 2 jpw", slug: "jpw-epic-battle-fantasy-2", url: JPW_GAME + "epic-battle-fantasy-2" + "/", img: JPW_THUMB + "epic-battle-fantasy-2" + ".webp", cat: "Strategy" },
  { name: "My Parking Lot jpw", slug: "jpw-my-parking-lot", url: JPW_GAME + "my-parking-lot" + "/", img: JPW_THUMB + "my-parking-lot" + ".webp", cat: "Puzzle" },
  { name: "Tank Forces: Survival jpw", slug: "jpw-tank-forces-survival", url: JPW_GAME + "tank-forces-survival" + "/", img: JPW_THUMB + "tank-forces-survival" + ".webp", cat: "Action" },
  { name: "MR RACER: Car Racing jpw", slug: "jpw-mr-racer", url: JPW_GAME + "mr-racer" + "/", img: JPW_THUMB + "mr-racer" + ".webp", cat: "Racing" },
  { name: "Cut the Rope 2 jpw", slug: "jpw-cut-the-rope-2", url: JPW_GAME + "cut-the-rope-2" + "/", img: JPW_THUMB + "cut-the-rope-2" + ".webp", cat: "Puzzle" },
  { name: "Demolition Derby Life jpw", slug: "jpw-demolition-derby-life", url: JPW_GAME + "demolition-derby-life" + "/", img: JPW_THUMB + "demolition-derby-life" + ".webp", cat: "Racing" },
  { name: "Crazy Shooters 2 jpw", slug: "jpw-crazy-shooters-2", url: JPW_GAME + "crazy-shooters-2" + "/", img: JPW_THUMB + "crazy-shooters-2" + ".webp", cat: "Shooter" },
  { name: "Brutal Zombies jpw", slug: "jpw-brutal-zombies", url: JPW_GAME + "brutal-zombies" + "/", img: JPW_THUMB + "brutal-zombies" + ".webp", cat: "Shooter" },
  { name: "Achievement Unlocked jpw", slug: "jpw-achievement-unlocked", url: JPW_GAME + "achievement-unlocked" + "/", img: JPW_THUMB + "achievement-unlocked" + ".webp", cat: "Action" },
  { name: "Body Drop 3D jpw", slug: "jpw-body-drop-3d", url: JPW_GAME + "body-drop-3d" + "/", img: JPW_THUMB + "body-drop-3d" + ".webp", cat: "Casual" },
  { name: "1942 Pacific Front jpw", slug: "jpw-1942-pacific-front", url: JPW_GAME + "1942-pacific-front" + "/", img: JPW_THUMB + "1942-pacific-front" + ".webp", cat: "Strategy" },
  { name: "Solar Smash jpw", slug: "jpw-solar-smash", url: JPW_GAME + "solar-smash" + "/", img: JPW_THUMB + "solar-smash" + ".webp", cat: "Casual" },
  { name: "Henry Stickmin: Breaking the Bank jpw", slug: "jpw-breaking-the-bank", url: JPW_GAME + "breaking-the-bank" + "/", img: JPW_THUMB + "breaking-the-bank" + ".webp", cat: "Puzzle" },
  { name: "Kopanito All-Stars Soccer jpw", slug: "jpw-kopanito-soccer", url: JPW_GAME + "kopanito-soccer" + "/", img: JPW_THUMB + "kopanito-soccer" + ".webp", cat: "Sports" },
  { name: "Fortzone Battle Royale jpw", slug: "jpw-fortzone-battle-royale", url: JPW_GAME + "fortzone-battle-royale" + "/", img: JPW_THUMB + "fortzone-battle-royale" + ".webp", cat: "Shooter" },
  { name: "Gulper.io jpw", slug: "jpw-gulper-io", url: JPW_GAME + "gulper-io" + "/", img: JPW_THUMB + "gulper-io" + ".webp", cat: "Arcade" },
  { name: "Battle Simulator: Sandbox jpw", slug: "jpw-battle-simulator-sandbox", url: JPW_GAME + "battle-simulator-sandbox" + "/", img: JPW_THUMB + "battle-simulator-sandbox" + ".webp", cat: "Strategy" },
  { name: "Ballistic jpw", slug: "jpw-ballistic", url: JPW_GAME + "ballistic" + "/", img: JPW_THUMB + "ballistic" + ".webp", cat: "Arcade" },
  { name: "Bomber Friends jpw", slug: "jpw-bomber-friends", url: JPW_GAME + "bomber-friends" + "/", img: JPW_THUMB + "bomber-friends" + ".webp", cat: "Action" },
  { name: "Turbo Crash Test jpw", slug: "jpw-turbo-crash-test", url: JPW_GAME + "turbo-crash-test" + "/", img: JPW_THUMB + "turbo-crash-test" + ".webp", cat: "Casual" },
  { name: "Tower Defense jpw", slug: "jpw-tower-defense", url: JPW_GAME + "tower-defense" + "/", img: JPW_THUMB + "tower-defense" + ".webp", cat: "Strategy" },
  { name: "Dad 'n Me jpw", slug: "jpw-dad-n-me", url: JPW_GAME + "dad-n-me" + "/", img: JPW_THUMB + "dad-n-me" + ".webp", cat: "Action" },
  { name: "War the Knights jpw", slug: "jpw-war-the-knights", url: JPW_GAME + "war-the-knights" + "/", img: JPW_THUMB + "war-the-knights" + ".webp", cat: "Strategy" },
  { name: "Ultimate OffRoad Cars 2 jpw", slug: "jpw-ultimate-offroad-cars-2", url: JPW_GAME + "ultimate-offroad-cars-2" + "/", img: JPW_THUMB + "ultimate-offroad-cars-2" + ".webp", cat: "Racing" },
  { name: "Moto X3M: Spooky Land jpw", slug: "jpw-moto-x3m-spooky-land", url: JPW_GAME + "moto-x3m-spooky-land" + "/", img: JPW_THUMB + "moto-x3m-spooky-land" + ".webp", cat: "Racing" },
  { name: "Mope.io jpw", slug: "jpw-mope-io", url: JPW_GAME + "mope-io" + "/", img: JPW_THUMB + "mope-io" + ".webp", cat: "Arcade" },
  { name: "Meat Boy jpw", slug: "jpw-meat-boy", url: JPW_GAME + "meat-boy" + "/", img: JPW_THUMB + "meat-boy" + ".webp", cat: "Action" },
  { name: "OpenTTD jpw", slug: "jpw-openttd", url: JPW_GAME + "openttd" + "/", img: JPW_THUMB + "openttd" + ".webp", cat: "Strategy" },
  { name: "Cubes 2048.io jpw", slug: "jpw-cubes-2048-io", url: JPW_GAME + "cubes-2048-io" + "/", img: JPW_THUMB + "cubes-2048-io" + ".webp", cat: "Arcade" },
  { name: "Slope Racing 3D jpw", slug: "jpw-slope-racing-3d", url: JPW_GAME + "slope-racing-3d" + "/", img: JPW_THUMB + "slope-racing-3d" + ".webp", cat: "Arcade" },
  { name: "Cat Clicker jpw", slug: "jpw-cat-clicker", url: JPW_GAME + "cat-clicker" + "/", img: JPW_THUMB + "cat-clicker" + ".webp", cat: "Casual" },
  { name: "Motherload jpw", slug: "jpw-motherload", url: JPW_GAME + "motherload" + "/", img: JPW_THUMB + "motherload" + ".webp", cat: "Arcade" },
  { name: "BMG! CrashDay 2025 jpw", slug: "jpw-bmg-crashday", url: JPW_GAME + "bmg-crashday" + "/", img: JPW_THUMB + "bmg-crashday" + ".webp", cat: "Racing" },
  { name: "Basketball Stars jpw", slug: "jpw-basketball-stars", url: JPW_GAME + "basketball-stars" + "/", img: JPW_THUMB + "basketball-stars" + ".webp", cat: "Sports" },
  { name: "Boxing Stars jpw", slug: "jpw-boxing-stars", url: JPW_GAME + "boxing-stars" + "/", img: JPW_THUMB + "boxing-stars" + ".webp", cat: "Sports" },
  { name: "Duck Life jpw", slug: "jpw-duck-life", url: JPW_GAME + "duck-life" + "/", img: JPW_THUMB + "duck-life" + ".webp", cat: "Arcade" },
  { name: "Madalin Stunt Cars 2 jpw", slug: "jpw-madalin-stunt-cars-2", url: JPW_GAME + "madalin-stunt-cars-2" + "/", img: JPW_THUMB + "madalin-stunt-cars-2" + ".webp", cat: "Racing" },
  { name: "Riddle School 5 jpw", slug: "jpw-riddle-school-5", url: JPW_GAME + "riddle-school-5" + "/", img: JPW_THUMB + "riddle-school-5" + ".webp", cat: "Puzzle" },
  { name: "Stickman Street Fighting 3D jpw", slug: "jpw-stickman-street-fighting", url: JPW_GAME + "stickman-street-fighting" + "/", img: JPW_THUMB + "stickman-street-fighting" + ".webp", cat: "Action" },
  { name: "Stickman Fighter: Mega Brawl jpw", slug: "jpw-stickman-fighter-mega-brawl", url: JPW_GAME + "stickman-fighter-mega-brawl" + "/", img: JPW_THUMB + "stickman-fighter-mega-brawl" + ".webp", cat: "Action" },
  { name: "The World's Hardest Game jpw", slug: "jpw-worlds-hardest-game", url: JPW_GAME + "worlds-hardest-game" + "/", img: JPW_THUMB + "worlds-hardest-game" + ".webp", cat: "Action" },
  { name: "TenTrix jpw", slug: "jpw-tentrix", url: JPW_GAME + "tentrix" + "/", img: JPW_THUMB + "tentrix" + ".webp", cat: "Puzzle" },
  { name: "Riddle School jpw", slug: "jpw-riddle-school", url: JPW_GAME + "riddle-school" + "/", img: JPW_THUMB + "riddle-school" + ".webp", cat: "Puzzle" },
  { name: "Cut the Rope jpw", slug: "jpw-cut-the-rope", url: JPW_GAME + "cut-the-rope" + "/", img: JPW_THUMB + "cut-the-rope" + ".webp", cat: "Puzzle" },
  { name: "Shell Shockers jpw", slug: "jpw-shell-shockers", url: JPW_GAME + "shell-shockers" + "/", img: JPW_THUMB + "shell-shockers" + ".webp", cat: "Shooter" },
  { name: "Age of War jpw", slug: "jpw-age-of-war", url: JPW_GAME + "age-of-war" + "/", img: JPW_THUMB + "age-of-war" + ".webp", cat: "Strategy" },
  { name: "Battle Simulator: Stickman Zombie jpw", slug: "jpw-stickman-zombie-battle", url: JPW_GAME + "stickman-zombie-battle" + "/", img: JPW_THUMB + "stickman-zombie-battle" + ".webp", cat: "Action" },
  { name: "Into Space 2 jpw", slug: "jpw-into-space-2", url: JPW_GAME + "into-space-2" + "/", img: JPW_THUMB + "into-space-2" + ".webp", cat: "Arcade" },
  { name: "Bloons Tower Defense jpw", slug: "jpw-bloons-td", url: JPW_GAME + "bloons-td" + "/", img: JPW_THUMB + "bloons-td" + ".webp", cat: "Strategy" },
  { name: "Bonk.io jpw", slug: "jpw-bonk-io", url: JPW_GAME + "bonk-io" + "/", img: JPW_THUMB + "bonk-io" + ".webp", cat: "Arcade" },
  { name: "Master Chess Multiplayer jpw", slug: "jpw-master-chess", url: JPW_GAME + "master-chess" + "/", img: JPW_THUMB + "master-chess" + ".webp", cat: "Strategy" },
  { name: "Run 2 jpw", slug: "jpw-run-2", url: JPW_GAME + "run-2" + "/", img: JPW_THUMB + "run-2" + ".webp", cat: "Action" },
  { name: "Crazy Shooters jpw", slug: "jpw-crazy-shooters", url: JPW_GAME + "crazy-shooters" + "/", img: JPW_THUMB + "crazy-shooters" + ".webp", cat: "Shooter" },
  { name: "Age of Tanks Warriors jpw", slug: "jpw-age-of-tanks", url: JPW_GAME + "age-of-tanks" + "/", img: JPW_THUMB + "age-of-tanks" + ".webp", cat: "Strategy" },
  { name: "Cut the Rope: Experiments jpw", slug: "jpw-cut-the-rope-experiments", url: JPW_GAME + "cut-the-rope-experiments" + "/", img: JPW_THUMB + "cut-the-rope-experiments" + ".webp", cat: "Puzzle" },
  { name: "Kour.io jpw", slug: "jpw-kour-io", url: JPW_GAME + "kour-io" + "/", img: JPW_THUMB + "kour-io" + ".webp", cat: "Shooter" },
  { name: "Funny Shooter 2 jpw", slug: "jpw-funny-shooter-2", url: JPW_GAME + "funny-shooter-2" + "/", img: JPW_THUMB + "funny-shooter-2" + ".webp", cat: "Shooter" },
  { name: "Dynamons 4 jpw", slug: "jpw-dynamons-4", url: JPW_GAME + "dynamons-4" + "/", img: JPW_THUMB + "dynamons-4" + ".webp", cat: "Strategy" },
  { name: "Car Eats Car: Volcanic Adventure jpw", slug: "jpw-car-eats-car-volcanic", url: JPW_GAME + "car-eats-car-volcanic" + "/", img: JPW_THUMB + "car-eats-car-volcanic" + ".webp", cat: "Racing" },
  { name: "Getaway Shootout jpw", slug: "jpw-getaway-shootout", url: JPW_GAME + "getaway-shootout" + "/", img: JPW_THUMB + "getaway-shootout" + ".webp", cat: "Action" },
  { name: "10x10! jpw", slug: "jpw-10x10", url: JPW_GAME + "10x10" + "/", img: JPW_THUMB + "10x10" + ".webp", cat: "Puzzle" },
  { name: "Toss the Turtle jpw", slug: "jpw-toss-the-turtle", url: JPW_GAME + "toss-the-turtle" + "/", img: JPW_THUMB + "toss-the-turtle" + ".webp", cat: "Arcade" },
  { name: "Ships 3D jpw", slug: "jpw-ships-3d", url: JPW_GAME + "ships-3d" + "/", img: JPW_THUMB + "ships-3d" + ".webp", cat: "Action" },
  { name: "3D Bowling jpw", slug: "jpw-3d-bowling", url: JPW_GAME + "3d-bowling" + "/", img: JPW_THUMB + "3d-bowling" + ".webp", cat: "Sports" },
  { name: "Portal: The Flash Version jpw", slug: "jpw-portal-flash", url: JPW_GAME + "portal-flash" + "/", img: JPW_THUMB + "portal-flash" + ".webp", cat: "Puzzle" },
  { name: "Riddle School 2 jpw", slug: "jpw-riddle-school-2", url: JPW_GAME + "riddle-school-2" + "/", img: JPW_THUMB + "riddle-school-2" + ".webp", cat: "Puzzle" },
  { name: "Storm the House 2 jpw", slug: "jpw-storm-the-house-2", url: JPW_GAME + "storm-the-house-2" + "/", img: JPW_THUMB + "storm-the-house-2" + ".webp", cat: "Shooter" },
  { name: "The Impossible Quiz jpw", slug: "jpw-the-impossible-quiz", url: JPW_GAME + "the-impossible-quiz" + "/", img: JPW_THUMB + "the-impossible-quiz" + ".webp", cat: "Puzzle" },
  { name: "Interactive Buddy jpw", slug: "jpw-interactive-buddy", url: JPW_GAME + "interactive-buddy" + "/", img: JPW_THUMB + "interactive-buddy" + ".webp", cat: "Casual" },
  { name: "Battle for the Galaxy jpw", slug: "jpw-battle-for-the-galaxy", url: JPW_GAME + "battle-for-the-galaxy" + "/", img: JPW_THUMB + "battle-for-the-galaxy" + ".webp", cat: "Strategy" },
  { name: "Cut the Rope: Time Travel jpw", slug: "jpw-cut-the-rope-time-travel", url: JPW_GAME + "cut-the-rope-time-travel" + "/", img: JPW_THUMB + "cut-the-rope-time-travel" + ".webp", cat: "Puzzle" },
  { name: "Bloons jpw", slug: "jpw-bloons", url: JPW_GAME + "bloons" + "/", img: JPW_THUMB + "bloons" + ".webp", cat: "Puzzle" },
  { name: "N: The Way of the Ninja jpw", slug: "jpw-n-ninja", url: JPW_GAME + "n-ninja" + "/", img: JPW_THUMB + "n-ninja" + ".webp", cat: "Action" },
  { name: "2048 jpw", slug: "jpw-2048", url: JPW_GAME + "2048" + "/", img: JPW_THUMB + "2048" + ".webp", cat: "Puzzle" },
  { name: "Micropolis (SimCity Classic) jpw", slug: "jpw-micropolis", url: JPW_GAME + "micropolis" + "/", img: JPW_THUMB + "micropolis" + ".webp", cat: "Strategy" },
  { name: "Sploop.io jpw", slug: "jpw-sploop-io", url: JPW_GAME + "sploop-io" + "/", img: JPW_THUMB + "sploop-io" + ".webp", cat: "Strategy" },
  { name: "Solitaire jpw", slug: "jpw-solitaire", url: JPW_GAME + "solitaire" + "/", img: JPW_THUMB + "solitaire" + ".webp", cat: "Casual" },
  { name: "Little Big Snake jpw", slug: "jpw-little-big-snake", url: JPW_GAME + "little-big-snake" + "/", img: JPW_THUMB + "little-big-snake" + ".webp", cat: "Arcade" },
  { name: "Starblast.io jpw", slug: "jpw-starblast-io", url: JPW_GAME + "starblast-io" + "/", img: JPW_THUMB + "starblast-io" + ".webp", cat: "Shooter" },
  { name: "Hexanaut.io jpw", slug: "jpw-hexanaut-io", url: JPW_GAME + "hexanaut-io" + "/", img: JPW_THUMB + "hexanaut-io" + ".webp", cat: "Arcade" },
  { name: "Muscle Clicker 2 jpw", slug: "jpw-muscle-clicker-2", url: JPW_GAME + "muscle-clicker-2" + "/", img: JPW_THUMB + "muscle-clicker-2" + ".webp", cat: "Casual" },
  { name: "BeepBox jpw", slug: "jpw-beepbox", url: JPW_GAME + "beepbox" + "/", img: JPW_THUMB + "beepbox" + ".webp", cat: "Sandbox" },
  { name: "Worms Zone jpw", slug: "jpw-worms-zone", url: JPW_GAME + "worms-zone" + "/", img: JPW_THUMB + "worms-zone" + ".webp", cat: "Arcade" },
  { name: "Flip Trickster jpw", slug: "jpw-flip-trickster", url: JPW_GAME + "flip-trickster" + "/", img: JPW_THUMB + "flip-trickster" + ".webp", cat: "Sports" },
  { name: "Learn to Fly jpw", slug: "jpw-learn-to-fly", url: JPW_GAME + "learn-to-fly" + "/", img: JPW_THUMB + "learn-to-fly" + ".webp", cat: "Arcade" },
  { name: "Rocket Bot Royale jpw", slug: "jpw-rocket-bot-royale", url: JPW_GAME + "rocket-bot-royale" + "/", img: JPW_THUMB + "rocket-bot-royale" + ".webp", cat: "Shooter" },
  { name: "Road Trip FRVR jpw", slug: "jpw-road-trip-frvr", url: JPW_GAME + "road-trip-frvr" + "/", img: JPW_THUMB + "road-trip-frvr" + ".webp", cat: "Puzzle" },
  { name: "Riddle School 3 jpw", slug: "jpw-riddle-school-3", url: JPW_GAME + "riddle-school-3" + "/", img: JPW_THUMB + "riddle-school-3" + ".webp", cat: "Puzzle" },
  { name: "QWOP jpw", slug: "jpw-qwop", url: JPW_GAME + "qwop" + "/", img: JPW_THUMB + "qwop" + ".webp", cat: "Sports" },
  { name: "Wormate.io jpw", slug: "jpw-wormate-io", url: JPW_GAME + "wormate-io" + "/", img: JPW_THUMB + "wormate-io" + ".webp", cat: "Arcade" },
  { name: "Four Colors Multiplayer jpw", slug: "jpw-four-colors", url: JPW_GAME + "four-colors" + "/", img: JPW_THUMB + "four-colors" + ".webp", cat: "Casual" },
  { name: "Dynamons 6 jpw", slug: "jpw-dynamons-6", url: JPW_GAME + "dynamons-6" + "/", img: JPW_THUMB + "dynamons-6" + ".webp", cat: "Strategy" },
  { name: "2048 X2 Merge Blocks jpw", slug: "jpw-2048-x2-merge-blocks", url: JPW_GAME + "2048-x2-merge-blocks" + "/", img: JPW_THUMB + "2048-x2-merge-blocks" + ".webp", cat: "Puzzle" },
  { name: "Henry Stickmin: Escaping the Prison jpw", slug: "jpw-escaping-the-prison", url: JPW_GAME + "escaping-the-prison" + "/", img: JPW_THUMB + "escaping-the-prison" + ".webp", cat: "Puzzle" },
  { name: "FreeCell jpw", slug: "jpw-freecell", url: JPW_GAME + "freecell" + "/", img: JPW_THUMB + "freecell" + ".webp", cat: "Casual" },
  { name: "Minesweeper jpw", slug: "jpw-minesweeper", url: JPW_GAME + "minesweeper" + "/", img: JPW_THUMB + "minesweeper" + ".webp", cat: "Puzzle" },
  { name: "Narrow One jpw", slug: "jpw-narrow-one", url: JPW_GAME + "narrow-one" + "/", img: JPW_THUMB + "narrow-one" + ".webp", cat: "Shooter" },
  { name: "Territorial.io jpw", slug: "jpw-territorial-io", url: JPW_GAME + "territorial-io" + "/", img: JPW_THUMB + "territorial-io" + ".webp", cat: "Strategy" },
  { name: "LOLBeans.io jpw", slug: "jpw-lolbeans-io", url: JPW_GAME + "lolbeans-io" + "/", img: JPW_THUMB + "lolbeans-io" + ".webp", cat: "Casual" },
  { name: "Mazean jpw", slug: "jpw-mazean", url: JPW_GAME + "mazean" + "/", img: JPW_THUMB + "mazean" + ".webp", cat: "Shooter" },
  { name: "TenTrix Blast jpw", slug: "jpw-tentrix-blast", url: JPW_GAME + "tentrix-blast" + "/", img: JPW_THUMB + "tentrix-blast" + ".webp", cat: "Puzzle" },
  { name: "Shopping Cart Hero jpw", slug: "jpw-shopping-cart-hero", url: JPW_GAME + "shopping-cart-hero" + "/", img: JPW_THUMB + "shopping-cart-hero" + ".webp", cat: "Arcade" },
  { name: "Taming.io jpw", slug: "jpw-taming-io", url: JPW_GAME + "taming-io" + "/", img: JPW_THUMB + "taming-io" + ".webp", cat: "Arcade" },
  { name: "Ninja Parkour Multiplayer jpw", slug: "jpw-ninja-parkour", url: JPW_GAME + "ninja-parkour" + "/", img: JPW_THUMB + "ninja-parkour" + ".webp", cat: "Arcade" },
  { name: "Mountain Tank jpw", slug: "jpw-mountain-tank", url: JPW_GAME + "mountain-tank" + "/", img: JPW_THUMB + "mountain-tank" + ".webp", cat: "Action" },
  { name: "Dogeminer 2 jpw", slug: "jpw-dogeminer-2", url: JPW_GAME + "dogeminer-2" + "/", img: JPW_THUMB + "dogeminer-2" + ".webp", cat: "Casual" },
  { name: "Duck Life 4 jpw", slug: "jpw-duck-life-4", url: JPW_GAME + "duck-life-4" + "/", img: JPW_THUMB + "duck-life-4" + ".webp", cat: "Arcade" },
  { name: "Henry Stickmin: Stealing the Diamond jpw", slug: "jpw-stealing-the-diamond", url: JPW_GAME + "stealing-the-diamond" + "/", img: JPW_THUMB + "stealing-the-diamond" + ".webp", cat: "Puzzle" },
  { name: "Stick RPG jpw", slug: "jpw-stick-rpg", url: JPW_GAME + "stick-rpg" + "/", img: JPW_THUMB + "stick-rpg" + ".webp", cat: "Casual" },
  { name: "Storm the House jpw", slug: "jpw-storm-the-house", url: JPW_GAME + "storm-the-house" + "/", img: JPW_THUMB + "storm-the-house" + ".webp", cat: "Shooter" },
  { name: "Miami Shark jpw", slug: "jpw-miami-shark", url: JPW_GAME + "miami-shark" + "/", img: JPW_THUMB + "miami-shark" + ".webp", cat: "Action" },
  { name: "A Dark Room jpw", slug: "jpw-a-dark-room", url: JPW_GAME + "a-dark-room" + "/", img: JPW_THUMB + "a-dark-room" + ".webp", cat: "Adventure" },
  { name: "Dungeon Crawl Stone Soup jpw", slug: "jpw-dungeon-crawl-stone-soup", url: JPW_GAME + "dungeon-crawl-stone-soup" + "/", img: JPW_THUMB + "dungeon-crawl-stone-soup" + ".webp", cat: "RPG" },
  { name: "SeaDragons.io jpw", slug: "jpw-seadragons-io", url: JPW_GAME + "seadragons-io" + "/", img: JPW_THUMB + "seadragons-io" + ".webp", cat: "Arcade" },
  { name: "Kiomet jpw", slug: "jpw-kiomet", url: JPW_GAME + "kiomet" + "/", img: JPW_THUMB + "kiomet" + ".webp", cat: "Strategy" },
  { name: "Rummikub jpw", slug: "jpw-rummikub", url: JPW_GAME + "rummikub" + "/", img: JPW_THUMB + "rummikub" + ".webp", cat: "Strategy" },
  { name: "Merge Battle Tactics jpw", slug: "jpw-merge-battle-tactics", url: JPW_GAME + "merge-battle-tactics" + "/", img: JPW_THUMB + "merge-battle-tactics" + ".webp", cat: "Strategy" },
  { name: "Roller Ball 6 jpw", slug: "jpw-roller-ball-6", url: JPW_GAME + "roller-ball-6" + "/", img: JPW_THUMB + "roller-ball-6" + ".webp", cat: "Arcade" },
  { name: "Like a King jpw", slug: "jpw-like-a-king", url: JPW_GAME + "like-a-king" + "/", img: JPW_THUMB + "like-a-king" + ".webp", cat: "Strategy" },
  { name: "Hextris jpw", slug: "jpw-hextris", url: JPW_GAME + "hextris" + "/", img: JPW_THUMB + "hextris" + ".webp", cat: "Puzzle" },
  { name: "Hoop World jpw", slug: "jpw-hoop-world", url: JPW_GAME + "hoop-world" + "/", img: JPW_THUMB + "hoop-world" + ".webp", cat: "Sports" },
  { name: "Breakit jpw", slug: "jpw-breakit", url: JPW_GAME + "breakit" + "/", img: JPW_THUMB + "breakit" + ".webp", cat: "Arcade" },
  { name: "Duck Life 2 jpw", slug: "jpw-duck-life-2", url: JPW_GAME + "duck-life-2" + "/", img: JPW_THUMB + "duck-life-2" + ".webp", cat: "Arcade" },
  { name: "Cataclysm: Dark Days Ahead jpw", slug: "jpw-cataclysm-dda", url: JPW_GAME + "cataclysm-dda" + "/", img: JPW_THUMB + "cataclysm-dda" + ".webp", cat: "RPG" },
  { name: "EvoWorld.io jpw", slug: "jpw-evoworld-io", url: JPW_GAME + "evoworld-io" + "/", img: JPW_THUMB + "evoworld-io" + ".webp", cat: "Arcade" },
  { name: "Cut the Rope: Magic jpw", slug: "jpw-cut-the-rope-magic", url: JPW_GAME + "cut-the-rope-magic" + "/", img: JPW_THUMB + "cut-the-rope-magic" + ".webp", cat: "Puzzle" },
  { name: "Yummy Tales jpw", slug: "jpw-yummy-tales", url: JPW_GAME + "yummy-tales" + "/", img: JPW_THUMB + "yummy-tales" + ".webp", cat: "Puzzle" },
  { name: "Prism Match 3D jpw", slug: "jpw-prism-match-3d", url: JPW_GAME + "prism-match-3d" + "/", img: JPW_THUMB + "prism-match-3d" + ".webp", cat: "Puzzle" },
  { name: "Pandemic 2 jpw", slug: "jpw-pandemic-2", url: JPW_GAME + "pandemic-2" + "/", img: JPW_THUMB + "pandemic-2" + ".webp", cat: "Strategy" },
  { name: "Stabfish 2 jpw", slug: "jpw-stabfish-2", url: JPW_GAME + "stabfish-2" + "/", img: JPW_THUMB + "stabfish-2" + ".webp", cat: "Arcade" },
  { name: "Galaxy Attack: Virus Shooter jpw", slug: "jpw-galaxy-attack", url: JPW_GAME + "galaxy-attack" + "/", img: JPW_THUMB + "galaxy-attack" + ".webp", cat: "Shooter" },
  { name: "Zoo Boom jpw", slug: "jpw-zoo-boom", url: JPW_GAME + "zoo-boom" + "/", img: JPW_THUMB + "zoo-boom" + ".webp", cat: "Puzzle" },
  { name: "NetHack jpw", slug: "jpw-nethack", url: JPW_GAME + "nethack" + "/", img: JPW_THUMB + "nethack" + ".webp", cat: "RPG" },
  { name: "Shattered Pixel Dungeon jpw", slug: "jpw-shattered-pixel-dungeon", url: JPW_GAME + "shattered-pixel-dungeon" + "/", img: JPW_THUMB + "shattered-pixel-dungeon" + ".webp", cat: "RPG" },
  { name: "Mindustry jpw", slug: "jpw-mindustry", url: JPW_GAME + "mindustry" + "/", img: JPW_THUMB + "mindustry" + ".webp", cat: "Strategy" },
  { name: "Skribbl.io jpw", slug: "jpw-skribbl-io", url: JPW_GAME + "skribbl-io" + "/", img: JPW_THUMB + "skribbl-io" + ".webp", cat: "Casual" },
  { name: "Bloons Tower Defense 2 jpw", slug: "jpw-bloons-td-2", url: JPW_GAME + "bloons-td-2" + "/", img: JPW_THUMB + "bloons-td-2" + ".webp", cat: "Strategy" },
  { name: "Duck Life 3: Evolution jpw", slug: "jpw-duck-life-3", url: JPW_GAME + "duck-life-3" + "/", img: JPW_THUMB + "duck-life-3" + ".webp", cat: "Arcade" },
  { name: "Sandspiel jpw", slug: "jpw-sandspiel", url: JPW_GAME + "sandspiel" + "/", img: JPW_THUMB + "sandspiel" + ".webp", cat: "Sandbox" },
  { name: "Freeciv jpw", slug: "jpw-freeciv", url: JPW_GAME + "freeciv" + "/", img: JPW_THUMB + "freeciv" + ".webp", cat: "Strategy" },
  { name: "War Brokers jpw", slug: "jpw-war-brokers", url: JPW_GAME + "war-brokers" + "/", img: JPW_THUMB + "war-brokers" + ".webp", cat: "Shooter" },
  { name: "Gold Train FRVR jpw", slug: "jpw-gold-train-frvr", url: JPW_GAME + "gold-train-frvr" + "/", img: JPW_THUMB + "gold-train-frvr" + ".webp", cat: "Puzzle" },
  { name: "Mahjongg Dimensions jpw", slug: "jpw-mahjongg-dimensions", url: JPW_GAME + "mahjongg-dimensions" + "/", img: JPW_THUMB + "mahjongg-dimensions" + ".webp", cat: "Puzzle" },
  { name: "shapez Demo jpw", slug: "jpw-shapez", url: JPW_GAME + "shapez" + "/", img: JPW_THUMB + "shapez" + ".webp", cat: "Strategy" },
];

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function isAuthed() {
  try {
    const raw = localStorage.getItem(LS_AUTH);
    if (!raw) return false;
    const s = JSON.parse(raw);
    if (!s.t) return false;
    if (Date.now() - s.t > IDLE_MS || (s.until && Date.now() > s.until)) {
      localStorage.removeItem(LS_AUTH);
      return false;
    }
    return true;
  } catch { return false; }
}

/* batas waktu kode masuk (key) yang sedang dipakai; 0 = password biasa (tanpa batas) */
let sessionUntil = 0;
try { sessionUntil = JSON.parse(localStorage.getItem(LS_AUTH)).until || 0; } catch {}

function touchAuth(until) {
  if (typeof until === "number") sessionUntil = until; // 0 = tanpa batas (password biasa)
  localStorage.setItem(LS_AUTH, JSON.stringify({ t: Date.now(), until: sessionUntil }));
}

/* kode masuk (key) yang sedang dipakai sudah habis masa berlakunya? */
function keyExpired() {
  return sessionUntil > 0 && Date.now() > sessionUntil;
}

/* ---------- Mode Lite ---------- */
const LS_LITE = "gh_lite";
function isLite() { return localStorage.getItem(LS_LITE) === "1"; }
document.body.classList.toggle("lite", isLite());

const LS_TOKEN = "gh_token";
let historyCache = [];

async function api(path, body, token) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = "Bearer " + token;
  try {
    const r = await fetch("/api/" + path, { method: "POST", headers, body: JSON.stringify(body || {}) });
    let data = {};
    try { data = await r.json(); } catch {}
    return { ok: r.ok, status: r.status, data };
  } catch {
    return { ok: false, status: 0, data: { error: "Tidak bisa terhubung ke server." } };
  }
}

function getHistory() { return historyCache; }

function addHistory(slug) {
  const g = games.find(x => x.slug === slug);
  if (!g) return;
  api("me", { action: "add", slug, name: g.name, cat: g.cat }, localStorage.getItem(LS_TOKEN));
}

const LS_BAN = "gh_ban";
function saveBan(d) {
  localStorage.setItem(LS_BAN, JSON.stringify({
    username: d.username || "", reason: d.reason || "", until: d.until || 0, permanent: !d.until
  }));
}
function clearBan() { localStorage.removeItem(LS_BAN); }
function loadBan() { try { return JSON.parse(localStorage.getItem(LS_BAN)); } catch { return null; } }

const LS_BG = "gh_bg";
const LS_BGIMG = "gh_bgimg";

let favCache = [];
let profileCache = { avatar: "😎", color: "#7c6cff", bio: "" };
const DEFAULT_BG = { type: "preset", id: "lume" };
let bgCache = DEFAULT_BG;

/* empat bercak warna (R,G,B) di balik kaca; dipilih agar tidak saling bertabrakan */
const BG_PRESETS = {
  lume:  ["46,160,120", "88,86,214", "222,122,72", "30,110,150"],
  fajar: ["230,120,70", "200,70,110", "240,180,80", "120,70,170"],
  laut:  ["20,130,170", "30,90,190", "40,170,160", "70,70,160"],
  hutan: ["50,150,90", "120,170,50", "30,110,100", "90,120,60"],
  malam: ["70,70,190", "120,70,180", "40,60,140", "30,90,150"],
  arang: ["110,115,120", "70,75,85", "140,130,120", "55,60,70"]
};
const BG_NAMES = { lume: "Lume", fajar: "Fajar", laut: "Laut", hutan: "Hutan", malam: "Malam", arang: "Arang" };

function hexToRgb(h) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
}

function applyBg(bg) {
  bg = bg || DEFAULT_BG;
  const body = document.body;
  let orbs = BG_PRESETS.lume;
  body.classList.remove("has-bg-image");

  if (bg.type === "preset" && BG_PRESETS[bg.id]) orbs = BG_PRESETS[bg.id];
  else if (bg.type === "colors") { const a = hexToRgb(bg.c1), b = hexToRgb(bg.c2); orbs = [a, b, a, b]; }
  else if (bg.type === "local") {
    const img = localStorage.getItem(LS_BGIMG);
    if (img) {
      body.style.setProperty("--bg-image", 'url("' + img + '")');
      body.classList.add("has-bg-image");
    }
  }

  orbs.forEach((c, i) => document.documentElement.style.setProperty("--o" + (i + 1), c));
  try { localStorage.setItem(LS_BG, JSON.stringify(bg)); } catch {}
}

function applyMe(d) {
  historyCache = d.history || [];
  favCache = d.favorites || [];
  profileCache = d.profile || profileCache;
  bgCache = d.bg || bgCache;
  applyBg(bgCache);
}

try { bgCache = JSON.parse(localStorage.getItem(LS_BG)) || bgCache; } catch {}
applyBg(bgCache);

const isPlayerPage = document.body.classList.contains("player-body");

// Halaman daftar game
if (!isPlayerPage) {
  let currentCat = "All";
  let currentQuery = "";

  let authMode = "login";
  let adminToken = "";
  let adminBans = [];

  function show(id) { document.getElementById(id).classList.remove("hidden"); }
  function hide(id) { document.getElementById(id).classList.add("hidden"); }

  function showVerifikasi() {
    const overlay = document.getElementById("verifikasiOverlay");
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("hidden"), 2000);
  }

  function openApp(username) {
    hide("gate"); hide("authScreen");
    show("app");
    document.getElementById("userName").textContent = username || "";
    renderTopUser();
    renderChips();
    renderGrid();
    setView("home");
  }

  function showAuth(msg) {
    hide("gate"); hide("app");
    show("authScreen");
    document.getElementById("authErr").textContent = msg || "";
  }

  function banText(d) {
    const until = d.until ? new Date(d.until).toLocaleString("id-ID") : "Permanen";
    return "Akun kamu diblokir. Alasan: " + (d.reason || "-") + ". Berakhir: " + until + ".";
  }

  let banTimer = null;

  function showBan(info) {
    hide("gate"); hide("app"); hide("authScreen"); hide("adminScreen");
    show("banScreen");
    document.getElementById("banUser").textContent = info.username || "-";
    document.getElementById("banReason").textContent = info.reason || "-";
    document.getElementById("banMsg").textContent = "";
    const left = document.getElementById("banLeft");
    clearInterval(banTimer);
    const tick = () => {
      if (!info.until) { left.textContent = "Permanen"; return; }
      const ms = info.until - Date.now();
      if (ms <= 0) { left.textContent = "Sudah berakhir. Tekan Cek Status."; clearInterval(banTimer); return; }
      const s = Math.floor(ms / 1000);
      const dd = Math.floor(s / 86400), hh = Math.floor((s % 86400) / 3600);
      const mm = Math.floor((s % 3600) / 60), ss = s % 60;
      left.textContent = (dd ? dd + "hr " : "") + (dd || hh ? hh + "j " : "") + mm + "m " + ss + "d";
    };
    tick();
    banTimer = setInterval(tick, 1000);
  }

  async function checkBan() {
    const stored = loadBan();
    const btn = document.getElementById("banCheck");
    const msg = document.getElementById("banMsg");
    btn.disabled = true;
    const r = stored && stored.username
      ? await api("auth", { action: "banstatus", username: stored.username })
      : { ok: true, data: { banned: false } };
    btn.disabled = false;
    if (r.ok && r.data.banned) {
      saveBan(r.data);
      showBan(r.data);
      document.getElementById("banMsg").textContent = "Akun masih diblokir.";
      return;
    }
    if (r.ok) {
      clearBan();
      clearInterval(banTimer);
      hide("banScreen");
      showAuth();
      return;
    }
    msg.textContent = r.data.error || "Gagal cek status.";
  }

  async function afterGate() {
    hide("gate");

    /* perangkat ini pernah kena ban? cek ke server dulu */
    const stored = loadBan();
    if (stored && stored.username) {
      const r = await api("auth", { action: "banstatus", username: stored.username });
      if (r.ok && r.data.banned) { saveBan(r.data); showBan(r.data); return; }
      if (r.ok) clearBan(); else { showBan(stored); return; }
    } else if (stored) {
      clearBan();
    }

    const token = localStorage.getItem(LS_TOKEN);
    if (token) {
      const r = await api("me", { action: "get" }, token);
      if (r.ok) {
        applyMe(r.data);
        openApp(r.data.username);
        return;
      }
      if (r.status === 401 || r.data.banned) localStorage.removeItem(LS_TOKEN);
      if (r.data.banned) { saveBan(r.data); showBan(r.data); return; }
      showAuth(r.status === 0 ? r.data.error : "");
      return;
    }
    showAuth();
  }

  function setAuthMode(m) {
    authMode = m;
    document.getElementById("tabLogin").classList.toggle("active", m === "login");
    document.getElementById("tabReg").classList.toggle("active", m === "register");
    document.getElementById("tabLogin").setAttribute("aria-pressed", String(m === "login"));
    document.getElementById("tabReg").setAttribute("aria-pressed", String(m === "register"));
    document.getElementById("authPw2Wrap").classList.toggle("hidden", m !== "register");
    document.getElementById("authBtn").textContent = m === "login" ? "Masuk" : "Daftar";
    document.getElementById("authPw").autocomplete = m === "login" ? "current-password" : "new-password";
    document.getElementById("authErr").textContent = "";
  }

  async function submitAuth() {
    const u = document.getElementById("authUser").value.trim();
    const p = document.getElementById("authPw").value;
    const p2 = document.getElementById("authPw2").value;
    const err = document.getElementById("authErr");
    const btn = document.getElementById("authBtn");

    if (!u || !p) { err.textContent = "Username dan password wajib diisi."; return; }
    if (authMode === "register" && p !== p2) { err.textContent = "Password tidak sama."; return; }

    btn.disabled = true;
    const r = await api("auth", { action: authMode, username: u, password: p });
    btn.disabled = false;

    if (r.ok) {
      localStorage.setItem(LS_TOKEN, r.data.token);
      applyMe(r.data);
      document.getElementById("authPw").value = "";
      document.getElementById("authPw2").value = "";
      openApp(r.data.username);
    } else {
      if (r.data.banned) { saveBan(r.data); showBan(r.data); return; }
      err.textContent = r.data.error || "Gagal.";
    }
  }

  async function logout() {
    const token = localStorage.getItem(LS_TOKEN);
    localStorage.removeItem(LS_TOKEN);
    historyCache = [];
    favCache = [];
    stopChat();
    chatMsgs = [];
    chatSince = 0;
    if (token) await api("auth", { action: "logout" }, token);
    document.getElementById("authUser").value = "";
    showAuth();
  }

  /* ---------- ADMIN PANEL ---------- */
  function fmtLeft(until) {
    if (!until) return "Permanent";
    const ms = until - Date.now();
    if (ms <= 0) return "Expired";
    const m = Math.ceil(ms / 60000);
    if (m >= 1440) { const d = Math.ceil(m / 1440); return d + (d === 1 ? " Day" : " Days"); }
    if (m >= 60) { const h = Math.ceil(m / 60); return h + (h === 1 ? " Hour" : " Hours"); }
    return m + " Min";
  }

  function admMsg(t, ok) {
    const el = document.getElementById("admMsg");
    el.textContent = t || "";
    el.classList.toggle("ok", !!ok);
  }

  function openAdmin() {
    hide("gate"); hide("authScreen"); hide("app");
    show("adminScreen");
    admMsg("");
    loadBans();
  }

  async function closeAdmin() {
    const t = adminToken;
    adminToken = "";
    closePicker();
    hide("adminScreen");
    show("gate");
    document.getElementById("gatePw").value = "";
    document.getElementById("gateErr").textContent = "";
    if (t) await api("admin", { action: "logout" }, t);
  }

  async function loadBans() {
    const r = await api("admin", { action: "list" }, adminToken);
    if (r.status === 401) { closeAdmin(); return; }
    if (!r.ok) { admMsg(r.data.error || "Gagal memuat."); return; }
    adminBans = r.data.bans || [];
    renderBans();
  }

  function renderBans() {
    const q = document.getElementById("admSearch").value.toLowerCase().trim();
    const list = adminBans.filter(b => !q || b.username.toLowerCase().includes(q));
    const box = document.getElementById("admList");
    if (!list.length) { box.innerHTML = '<div class="adm-empty">Tidak ada player yang diban.</div>'; return; }
    box.innerHTML = list.map(b => `<div class="adm-row" title="${escapeHtml(b.reason || "")}">
      <div class="adm-ava">${escapeHtml(b.username.charAt(0).toUpperCase())}</div>
      <div class="adm-info">
        <b>${escapeHtml(b.username)}</b>
        <small>${escapeHtml(fmtLeft(b.until))}${b.reason ? " · " + escapeHtml(b.reason) : ""}</small>
      </div>
      <button type="button" class="adm-unban" data-u="${escapeHtml(b.username)}" title="Unban">&#8212;</button>
    </div>`).join("");
    box.querySelectorAll(".adm-unban").forEach(btn => {
      btn.onclick = async () => {
        const r = await api("admin", { action: "unban", username: btn.dataset.u }, adminToken);
        if (r.ok) { admMsg("Unban " + btn.dataset.u + " berhasil.", true); loadBans(); refreshPicker(); }
        else admMsg(r.data.error || "Gagal unban.");
      };
    });
  }

  async function doBan() {
    const username = document.getElementById("admUser").value.trim();
    const reason = document.getElementById("admReason").value.trim();
    const duration = document.getElementById("admDur").value;
    if (!username) { admMsg("Isi username dulu, atau tekan PILIH."); return; }
    if (duration === "perm" && !confirm("Ban PERMANEN akan MENGHAPUS akun " + username + " (password & riwayat) dari database.\n\nLanjut?")) return;
    const btn = document.getElementById("admBan");
    btn.disabled = true;
    const r = await api("admin", { action: "ban", username, reason: reason || "Tidak ada alasan", duration }, adminToken);
    btn.disabled = false;
    if (r.status === 401) { closeAdmin(); return; }
    if (r.ok) {
      admMsg(username + " berhasil diban.", true);
      document.getElementById("admUser").value = "";
      document.getElementById("admReason").value = "";
      loadBans();
      refreshPicker();
    } else admMsg(r.data.error || "Gagal ban.");
  }

  /* ---------- BAN ALL ---------- */
  async function doBanAll() {
    const reason = document.getElementById("admReason").value.trim();
    const sel = document.getElementById("admDur");
    const durText = sel.options[sel.selectedIndex].text;
    const permWarn = sel.value === "perm" ? "\n\nPERMANEN = SEMUA akun akan DIHAPUS dari database!" : "";
    if (!confirm("BAN SEMUA PLAYER selama " + durText + "?" + permWarn + "\n\nSemua akun yang terdaftar akan diblokir dari website.")) return;
    const btn = document.getElementById("admBanAll");
    btn.disabled = true;
    admMsg("Memproses...", true);
    const r = await api("admin", { action: "banall", reason: reason || "Tidak ada alasan", duration: sel.value }, adminToken);
    btn.disabled = false;
    if (r.status === 401) { closeAdmin(); return; }
    if (r.ok) {
      admMsg(r.data.count + " player berhasil diban" + (r.data.skipped ? " (" + r.data.skipped + " sudah diban)." : "."), true);
      loadBans();
      refreshPicker();
    } else admMsg(r.data.error || "Gagal ban all.");
  }

  /* ---------- PILIH PLAYER (tanpa perlu tahu username) ---------- */
  let adminPlayers = [];
  let pickerTimer = null;

  function openPicker() {
    show("admPicker");
    document.getElementById("admPickSearch").value = "";
    document.getElementById("admPickList").innerHTML = '<div class="adm-empty">Memuat...</div>';
    refreshPicker();
    clearInterval(pickerTimer);
    pickerTimer = setInterval(refreshPicker, 10000); // status online diperbarui tiap 10 detik
  }

  function closePicker() {
    clearInterval(pickerTimer);
    pickerTimer = null;
    const el = document.getElementById("admPicker");
    if (el) el.classList.add("hidden");
  }

  async function refreshPicker() {
    const el = document.getElementById("admPicker");
    if (!el || el.classList.contains("hidden") || !adminToken) return;
    const r = await api("admin", { action: "players" }, adminToken);
    if (r.status === 401) { closeAdmin(); return; }
    if (!r.ok) {
      document.getElementById("admPickList").innerHTML = '<div class="adm-empty">' + escapeHtml(r.data.error || "Gagal memuat.") + "</div>";
      return;
    }
    adminPlayers = r.data.players || [];
    document.getElementById("admPickCount").textContent =
      "(" + (r.data.online || 0) + " online / " + adminPlayers.length + ")";
    renderPicker();
  }

  function renderPicker() {
    const q = document.getElementById("admPickSearch").value.toLowerCase().trim();
    const list = adminPlayers.filter(p => !q || p.username.toLowerCase().includes(q));
    const box = document.getElementById("admPickList");
    if (!list.length) { box.innerHTML = '<div class="adm-empty">Tidak ada player.</div>'; return; }
    box.innerHTML = list.map(p => `<div class="adm-row adm-pickrow" data-u="${escapeHtml(p.username)}">
      <div class="adm-ava">${escapeHtml(p.username.charAt(0).toUpperCase())}</div>
      <div class="adm-info">
        <b>${escapeHtml(p.username)}</b>
        <small>${p.banned ? "Sedang diban" : (p.online ? "Online" : "Offline")}</small>
      </div>
      <i class="adm-dot ${p.online ? "on" : "off"}" title="${p.online ? "Online" : "Offline"}"></i>
    </div>`).join("");
    box.querySelectorAll(".adm-pickrow").forEach(row => {
      row.onclick = () => {
        document.getElementById("admUser").value = row.dataset.u;
        closePicker();
        admMsg("Player dipilih: " + row.dataset.u + ". Isi reason lalu tekan BAN USER.", true);
        document.getElementById("admReason").focus();
      };
    });
  }

  function initAuthUi() {
    document.getElementById("tabLogin").onclick = () => setAuthMode("login");
    document.getElementById("tabReg").onclick = () => setAuthMode("register");
    document.getElementById("authBtn").onclick = submitAuth;
    ["authUser", "authPw", "authPw2"].forEach(id =>
      document.getElementById(id).addEventListener("keydown", e => { if (e.key === "Enter") submitAuth(); }));
    document.getElementById("logoutBtn").onclick = logout;
    document.getElementById("banCheck").onclick = checkBan;

    document.getElementById("admBan").onclick = doBan;
    document.getElementById("admBanAll").onclick = doBanAll;
    document.getElementById("admPick").onclick = openPicker;
    document.getElementById("admPickClose").onclick = closePicker;
    document.getElementById("admPickSearch").addEventListener("input", renderPicker);
    document.getElementById("admPicker").addEventListener("click", e => { if (e.target.id === "admPicker") closePicker(); });
    document.getElementById("admRefresh").onclick = () => { loadBans(); refreshPicker(); };
    document.getElementById("admClose").onclick = closeAdmin;
    document.getElementById("admSearch").addEventListener("input", renderBans);
    document.getElementById("admReason").addEventListener("keydown", e => { if (e.key === "Enter") doBan(); });
  }

  async function tryGate() {
    const input = document.getElementById("gatePw").value;
    const err = document.getElementById("gateErr");
    const card = document.querySelector("#gate .gate-card");
    const btn = document.getElementById("gateBtn");

    if (!input) { err.textContent = "Password tidak boleh kosong."; return; }

    if (input === PASSWORD) {
      touchAuth(0);
      afterGate();
      return;
    }

    /* bukan password biasa: cek kode admin (diverifikasi di server) */
    btn.disabled = true;
    const r = await api("admin", { action: "login", code: input });
    btn.disabled = false;

    if (r.ok && r.data.getkey) {
      document.getElementById("gatePw").value = "";
      openKeys(r.data.ktoken);
      return;
    }
    if (r.ok && r.data.key) {
      document.getElementById("gatePw").value = "";
      touchAuth(r.data.until);
      afterGate();
      return;
    }

    if (r.ok && r.data.token) {
      adminToken = r.data.token;
      document.getElementById("gatePw").value = "";
      openAdmin();
      return;
    }
    if (r.ok && r.data.reset) {
      document.getElementById("gatePw").value = "";
      doReset(r.data.ticket);
      return;
    }
    if (r.status === 429) { err.textContent = r.data.error; return; }

    err.textContent = "Password salah. Coba lagi.";
    document.getElementById("gatePw").value = "";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 400);
    showVerifikasi();
  }

  function renderChips() {
    const box = document.getElementById("chips");
    const total = games.length;
    const counts = {};
    CATEGORIES.forEach(c => counts[c] = games.filter(g => g.cat === c).length);

    let html = `<button class="chip ${currentCat === "All" ? "active" : ""}" data-cat="All">Semua <span class="cnt">${total}</span></button>`;

    CATEGORIES.forEach(c => {
      if (counts[c] > 0) {
        html += `<button class="chip ${currentCat === c ? "active" : ""}" data-cat="${c}">${c} <span class="cnt">${counts[c]}</span></button>`;
      }
    });

    box.innerHTML = html;
    box.querySelectorAll(".chip").forEach(chip => {
      chip.onclick = () => {
        currentCat = chip.dataset.cat;
        renderChips();
        renderGrid();
      };
    });
  }

  /* ---------- tampilan / navigasi bawah ---------- */
  let currentView = "home";
  const VIEWS = ["home", "history", "fav", "chat", "settings"];

  function setView(v) {
    currentView = v;
    VIEWS.forEach(n => document.getElementById("view-" + n).classList.toggle("hidden", n !== v));
    document.querySelectorAll(".bn-item").forEach(b => {
      const on = b.dataset.view === v;
      b.classList.toggle("active", on);
      if (on) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    document.querySelector(".search-wrap").classList.toggle("hidden", v !== "home");
    if (v === "history") renderHistory();
    if (v === "fav") renderFav();
    if (v === "settings") renderSettings();
    if (v === "chat") startChat(); else stopChat();
    window.scrollTo({ top: 0 });
  }

  /* ---------- kartu game (dipakai di semua daftar) ---------- */
  function cardHtml(g, i) {
    const init = g.name.trim().charAt(0).toUpperCase();
    const loading = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
    const fav = favCache.includes(g.slug);
    const name = escapeHtml(g.name);
    return `<div class="card">
      <a href="play.html?slug=${encodeURIComponent(g.slug)}" class="card-link">
        <div class="card-thumb">
          <span class="initial">${escapeHtml(init)}</span>
          <img src="${g.img || (IMG_BASE + g.slug + ".webp")}" alt="" width="320" height="240" ${loading} referrerpolicy="no-referrer"
               data-n="${name}" data-h="${escapeHtml(hostOf(g.url))}"
               onload="this.classList.add('loaded')">
        </div>
        <div class="card-body">
          <div class="card-title">${name}</div>
        </div>
      </a>
      <div class="card-tools">
        <span class="card-cat">${escapeHtml(g.cat)}</span>
        <button type="button" class="card-open-tab" data-url="${escapeHtml(g.url)}" aria-label="Buka ${name} di tab baru">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 5H5.500A1.500 1.500 0 0 0 4 6.500v12A1.500 1.500 0 0 0 5.500 20h12a1.500 1.500 0 0 0 1.500-1.500V14"/><path d="M14 4h6v6"/><path d="M20 4 11 13"/></svg>
        </button>
        <button type="button" class="card-fav ${fav ? "on" : ""}" data-slug="${escapeHtml(g.slug)}" aria-pressed="${fav}" aria-label="Favorit: ${name}">
          <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.500C5.500 16 3 12.800 3 9.500A4.500 4.500 0 0 1 7.500 5C9.500 5 11.200 6 12 7.500 12.800 6 14.500 5 16.500 5A4.500 4.500 0 0 1 21 9.500c0 3.300-2.500 6.500-9 11Z"/></svg>
        </button>
      </div>
    </div>`;
  }

  /* ---------- ikon cadangan: Steam -> favicon Google (lewat /api/icon) ---------- */
  const iconMem = {};
  let iconActive = 0;
  const iconWait = [];

  function iconRun(fn) {
    return new Promise(res => {
      const go = async () => {
        iconActive++;
        try { res(await fn()); }
        finally { iconActive--; const nx = iconWait.shift(); if (nx) nx(); }
      };
      if (iconActive < 3) go(); else iconWait.push(go);
    });
  }

  function hostOf(u) {
    try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; }
  }

  function iconLookup(n, h) {
    const k = n + "|" + h;
    if (!iconMem[k]) {
      iconMem[k] = iconRun(() =>
        fetch("/api/icon?n=" + encodeURIComponent(n) + "&h=" + encodeURIComponent(h))
          .then(r => r.json())
          .catch(() => ({ src: null })));
    }
    return iconMem[k];
  }

  async function iconFallback(img) {
    const step = Number(img.dataset.step || 0);
    img.dataset.step = String(step + 1);
    if (step === 0) {
      const d = await iconLookup(img.dataset.n, img.dataset.h);
      img.dataset.alt = d.alt || "";
      if (d.src) {
        img.classList.toggle("icon-fav", d.kind === "favicon");
        img.src = d.src;
        return;
      }
    } else if (step === 1 && img.dataset.alt) {
      img.src = img.dataset.alt;
      return;
    }
    img.remove();
  }

  function bindCards(root) {
    root.querySelectorAll(".card-thumb img").forEach(img => {
      img.addEventListener("error", () => iconFallback(img));
    });
    root.querySelectorAll(".card-open-tab").forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(btn.dataset.url, "_blank", "noopener");
      };
    });
    root.querySelectorAll(".card-fav").forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFav(btn.dataset.slug);
      };
    });
  }

  function toggleFav(slug) {
    const on = !favCache.includes(slug);
    favCache = on ? [slug, ...favCache] : favCache.filter(x => x !== slug);
    document.querySelectorAll(".card-fav").forEach(b => {
      if (b.dataset.slug === slug) {
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", String(on));
      }
    });
    api("me", { action: "fav", slug, on }, localStorage.getItem(LS_TOKEN));
    if (currentView === "fav") renderFav();
  }

  function renderHistory() {
    const grid = document.getElementById("historyGrid");
    const empty = document.getElementById("historyEmpty");
    const list = getHistory().map(h => games.find(x => x.slug === h.slug)).filter(Boolean);
    document.getElementById("clearHistoryBtn").classList.toggle("hidden", list.length === 0);
    empty.classList.toggle("hidden", list.length > 0);
    grid.innerHTML = list.map(cardHtml).join("");
    bindCards(grid);
  }

  function renderFav() {
    const grid = document.getElementById("favGrid");
    const empty = document.getElementById("favEmpty");
    const list = favCache.map(s => games.find(x => x.slug === s)).filter(Boolean);
    empty.classList.toggle("hidden", list.length > 0);
    grid.innerHTML = list.map(cardHtml).join("");
    bindCards(grid);
  }

  const LITE_PAGE = 24;
  let liteShown = LITE_PAGE;
  let liteKey = "";

  function renderGrid(append) {
    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");
    const count = document.getElementById("count");
    const more = document.getElementById("moreBtn");
    const q = currentQuery.toLowerCase().trim();
    const lite = isLite();

    const list = games.filter(g => {
      const mc = currentCat === "All" || g.cat === currentCat;
      const mq = !q || g.name.toLowerCase().includes(q) || g.url.toLowerCase().includes(q) || g.cat.toLowerCase().includes(q);
      return mc && mq;
    });

    const key = currentCat + "|" + q;
    if (key !== liteKey) { liteKey = key; liteShown = LITE_PAGE; append = false; }

    const shown = lite ? Math.min(liteShown, list.length) : list.length;
    count.textContent = lite
      ? `Menampilkan ${shown} dari ${list.length} game (mode ringan)`
      : (q || currentCat !== "All"
          ? `${list.length} hasil dari ${games.length} game`
          : `${games.length} game tersedia`);

    if (list.length === 0) {
      grid.innerHTML = "";
      more.classList.add("hidden");
      empty.classList.remove("hidden");
      return;
    }
    empty.classList.add("hidden");

    if (append && lite) {
      const tmp = document.createElement("div");
      tmp.innerHTML = list.slice(liteShown - LITE_PAGE, shown).map(g => cardHtml(g, 1)).join("");
      bindCards(tmp);
      while (tmp.firstChild) grid.appendChild(tmp.firstChild);
    } else {
      grid.innerHTML = (lite ? list.slice(0, shown) : list).map(cardHtml).join("");
      bindCards(grid);
    }

    const left = lite ? list.length - shown : 0;
    more.classList.toggle("hidden", left <= 0);
    more.textContent = `Muat lebih banyak (${left} lagi)`;
  }

  function loadMore() {
    liteShown += LITE_PAGE;
    renderGrid(true);
  }

  function setLite(on) {
    localStorage.setItem(LS_LITE, on ? "1" : "0");
    document.body.classList.toggle("lite", on);
    liteShown = LITE_PAGE;
    renderGrid();
    if (chatTimer) { stopChat(); startChat(); }
  }

  /* ---------- pengaturan: profil + latar ---------- */
  const AVATARS = ["😎", "🦊", "🐱", "🐼", "🐸", "🦄", "🐲", "👾", "🤖", "🎮", "⚡", "🔥", "🌙", "🍉", "👑", "🐧"];
  const AVA_COLORS = ["#7c6cff", "#22d3ee", "#ff5ca8", "#ff8c32", "#4ade80", "#facc15", "#60a5fa", "#f87171"];
  let draftProfile = { ...profileCache };

  function paintAva(el, p) { el.style.background = p.color; el.textContent = p.avatar; }

  function renderTopUser() { paintAva(document.getElementById("topAva"), profileCache); }

  function renderProfilePreview() {
    paintAva(document.getElementById("setAva"), draftProfile);
    document.getElementById("setName").textContent = document.getElementById("userName").textContent;
    document.getElementById("setBioPrev").textContent = document.getElementById("setBio").value.trim() || "Belum ada status";
    document.querySelectorAll("#avaPicker button").forEach(b => b.classList.toggle("active", b.dataset.v === draftProfile.avatar));
    document.querySelectorAll("#colPicker button").forEach(b => b.classList.toggle("active", b.dataset.v === draftProfile.color));
  }

  function renderBgPresets() {
    const box = document.getElementById("bgPresets");
    box.innerHTML = Object.keys(BG_PRESETS).map(id => {
      const c = BG_PRESETS[id];
      const on = bgCache.type === "preset" && bgCache.id === id;
      const swatch = `radial-gradient(60% 80% at 15% 15%, rgb(${c[0]}), transparent), radial-gradient(60% 80% at 90% 30%, rgb(${c[1]}), transparent), radial-gradient(60% 80% at 60% 100%, rgb(${c[2]}), transparent), #0b100f`;
      return `<button type="button" class="bg-chip ${on ? "active" : ""}" data-id="${id}" aria-pressed="${on}" style="background:${swatch}">${BG_NAMES[id]}</button>`;
    }).join("");
    box.querySelectorAll(".bg-chip").forEach(b => {
      b.onclick = () => saveBg({ type: "preset", id: b.dataset.id });
    });
    document.getElementById("bgClearImg").classList.toggle("hidden", !localStorage.getItem(LS_BGIMG));
  }

  function saveBg(bg) {
    bgCache = bg;
    applyBg(bg);
    renderBgPresets();
    api("me", { action: "bg", bg }, localStorage.getItem(LS_TOKEN));
  }

  function renderSettings() {
    draftProfile = { ...profileCache };
    document.getElementById("setBio").value = draftProfile.bio || "";
    document.getElementById("avaPicker").innerHTML = AVATARS.map(a => `<button type="button" data-v="${a}">${a}</button>`).join("");
    document.getElementById("colPicker").innerHTML = AVA_COLORS.map(c => `<button type="button" data-v="${c}" style="background:${c}"></button>`).join("");
    document.querySelectorAll("#avaPicker button").forEach(b => b.onclick = () => { draftProfile.avatar = b.dataset.v; renderProfilePreview(); });
    document.querySelectorAll("#colPicker button").forEach(b => b.onclick = () => { draftProfile.color = b.dataset.v; renderProfilePreview(); });
    document.getElementById("setMsg").textContent = "";
    if (bgCache.type === "colors") {
      document.getElementById("bgC1").value = bgCache.c1;
      document.getElementById("bgC2").value = bgCache.c2;
    }
    renderProfilePreview();
    renderBgPresets();
  }

  async function saveProfile() {
    const msg = document.getElementById("setMsg");
    const btn = document.getElementById("saveProfile");
    btn.disabled = true;
    const r = await api("me", {
      action: "profile",
      avatar: draftProfile.avatar,
      color: draftProfile.color,
      bio: document.getElementById("setBio").value
    }, localStorage.getItem(LS_TOKEN));
    btn.disabled = false;
    if (r.ok) {
      profileCache = r.data.profile;
      renderTopUser();
      msg.classList.add("ok");
      msg.textContent = "Profil tersimpan.";
    } else {
      msg.classList.remove("ok");
      msg.textContent = r.data.error || "Gagal menyimpan.";
    }
  }

  function readBgFile(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onerror = () => reject(new Error("Gagal membaca file."));
      fr.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error("File bukan gambar."));
        img.onload = () => {
          const max = 1280;
          const k = Math.min(1, max / Math.max(img.width, img.height));
          const c = document.createElement("canvas");
          c.width = Math.round(img.width * k);
          c.height = Math.round(img.height * k);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", 0.72));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  function initSettings() {
    document.getElementById("saveProfile").onclick = saveProfile;
    document.getElementById("liteToggle").checked = isLite();
    document.getElementById("liteToggle").onchange = (e) => setLite(e.target.checked);
    document.getElementById("moreBtn").onclick = loadMore;
    document.getElementById("setBio").addEventListener("input", renderProfilePreview);
    document.getElementById("bgApplyColors").onclick = () => saveBg({
      type: "colors",
      c1: document.getElementById("bgC1").value,
      c2: document.getElementById("bgC2").value
    });
    document.getElementById("bgFile").onchange = async (e) => {
      const f = e.target.files[0];
      e.target.value = "";
      if (!f) return;
      const msg = document.getElementById("bgMsg");
      try {
        const data = await readBgFile(f);
        localStorage.setItem(LS_BGIMG, data);
        msg.textContent = "";
        saveBg({ type: "local" });
      } catch (err) {
        msg.textContent = err.name === "QuotaExceededError" ? "Gambar terlalu besar untuk disimpan." : (err.message || "Gagal.");
      }
    };
    document.getElementById("bgClearImg").onclick = () => {
      localStorage.removeItem(LS_BGIMG);
      saveBg({ type: "preset", id: "aurora" });
    };
    document.getElementById("userChip").onclick = () => setView("settings");
  }

  /* ---------- chat global (pesan hilang setelah 1 jam) ---------- */
  const CHAT_TTL = 60 * 60 * 1000;
  let chatMsgs = [], chatSince = 0, chatTimer = null, chatBusy = false, chatLoaded = false;

  function hhmm(ts) { return new Date(ts).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); }

  function renderChat(forceBottom) {
    const box = document.getElementById("chatBox");
    const me = document.getElementById("userName").textContent.toLowerCase();
    const stick = forceBottom || box.scrollHeight - box.scrollTop - box.clientHeight < 80;
    const cutoff = Date.now() - CHAT_TTL;
    chatMsgs = chatMsgs.filter(m => m.ts > cutoff);
    box.innerHTML = chatMsgs.length
      ? chatMsgs.map(m => {
          const col = /^#[0-9a-fA-F]{6}$/.test(m.c) ? m.c : "#7c6cff";
          return `<div class="msg ${String(m.u).toLowerCase() === me ? "mine" : ""}">
            <span class="ava sm" style="background:${col}">${escapeHtml(m.a || "😎")}</span>
            <div class="bubble">
              <div class="msg-head"><b>${escapeHtml(m.u)}</b><small>${hhmm(m.ts)}</small></div>
              <div class="msg-text">${escapeHtml(m.t)}</div>
            </div>
          </div>`;
        }).join("")
      : `<p class="chat-empty">${chatLoaded ? "Belum ada pesan" : "Memuat pesan..."}</p>`;
    if (stick) box.scrollTop = box.scrollHeight;
  }

  function chatKicked(r) {
    if (r.status === 401 || r.data.banned) {
      if (r.data.banned) saveBan(r.data);
      localStorage.removeItem(LS_TOKEN);
      location.reload();
      return true;
    }
    return false;
  }

  async function pollChat() {
    if (chatBusy) return;
    chatBusy = true;
    const r = await api("chat", { action: "poll", since: Math.max(0, chatSince - 1) }, localStorage.getItem(LS_TOKEN));
    chatBusy = false;
    if (chatKicked(r)) return;
    if (!r.ok) {
      document.getElementById("chatErr").textContent = r.data.error || "Chat tidak bisa dimuat. Mencoba lagi.";
      return;
    }
    document.getElementById("chatErr").textContent = "";
    chatLoaded = true;
    const known = new Set(chatMsgs.map(m => m.id));
    r.data.messages.forEach(m => {
      if (!known.has(m.id)) chatMsgs.push(m);
      if (m.ts > chatSince) chatSince = m.ts;
    });
    chatMsgs = chatMsgs.filter(m => m.ts > r.data.cutoff);
    renderChat();
  }

  function startChat() {
    if (chatTimer) return;
    renderChat(true);
    pollChat();
    chatTimer = setInterval(pollChat, isLite() ? 6000 : 3000);
  }

  function stopChat() {
    clearInterval(chatTimer);
    chatTimer = null;
  }

  async function sendChat() {
    const inp = document.getElementById("chatText");
    const btn = document.getElementById("chatSend");
    const err = document.getElementById("chatErr");
    const text = inp.value.trim();
    if (!text) return;
    inp.value = "";
    err.textContent = "";
    btn.disabled = true;
    const r = await api("chat", { action: "send", text }, localStorage.getItem(LS_TOKEN));
    btn.disabled = false;
    if (chatKicked(r)) return;
    if (r.ok) {
      if (!chatMsgs.some(m => m.id === r.data.msg.id)) chatMsgs.push(r.data.msg);
      if (r.data.msg.ts > chatSince) chatSince = r.data.msg.ts;
      renderChat(true);
    } else {
      inp.value = text;
      err.textContent = r.data.error || "Gagal mengirim.";
    }
  }

  function initChat() {
    document.getElementById("chatSend").onclick = sendChat;
    document.getElementById("chatText").addEventListener("keydown", e => { if (e.key === "Enter") sendChat(); });
  }

  function initNav() {
    document.querySelectorAll(".bn-item").forEach(b => { b.onclick = () => setView(b.dataset.view); });
  }

  /* ---------- panel GetKey: buat kode masuk berbatas waktu ---------- */
  let keyToken = "";
  let keyListData = [];

  const pad2 = (n) => String(n).padStart(2, "0");
  function toLocalInput(ms) {
    const d = new Date(ms);
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()) + "T" + pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  }

  function keyMsg(t, ok) {
    const el = document.getElementById("keyMsg");
    el.textContent = t || "";
    el.classList.toggle("ok", !!ok);
  }

  function openKeys(token) {
    keyToken = token;
    hide("gate"); hide("authScreen"); hide("app"); hide("adminScreen");
    show("keyScreen");
    keyMsg("");
    document.getElementById("keyUntil").value = toLocalInput(Date.now() + 86400000);
    loadKeys();
  }

  async function closeKeys() {
    const t = keyToken;
    keyToken = "";
    hide("keyScreen");
    show("gate");
    document.getElementById("gatePw").value = "";
    document.getElementById("gateErr").textContent = "";
    if (t) await api("admin", { action: "keys_logout" }, t);
  }

  async function loadKeys() {
    const r = await api("admin", { action: "keys_list" }, keyToken);
    if (r.status === 401) { closeKeys(); return; }
    if (!r.ok) { keyMsg(r.data.error || "Gagal memuat."); return; }
    keyListData = r.data.keys || [];
    renderKeys();
  }

  function renderKeys() {
    const box = document.getElementById("keyList");
    if (!keyListData.length) { box.innerHTML = '<div class="adm-empty">Belum ada kode aktif.</div>'; return; }
    box.innerHTML = keyListData.map(k => `<div class="adm-row">
      <div class="adm-ava">&#128273;</div>
      <div class="adm-info">
        <b>${escapeHtml(k.name)}</b>
        <small>Hingga ${escapeHtml(new Date(k.until).toLocaleString("id-ID"))} · sisa ${escapeHtml(fmtLeft(k.until))}</small>
      </div>
      <button type="button" class="adm-unban" data-k="${escapeHtml(k.name)}" title="Hapus">&#8212;</button>
    </div>`).join("");
    box.querySelectorAll(".adm-unban").forEach(btn => {
      btn.onclick = async () => {
        const r = await api("admin", { action: "keys_del", name: btn.dataset.k }, keyToken);
        if (r.ok) { keyMsg("Kode " + btn.dataset.k + " dihapus.", true); loadKeys(); }
        else keyMsg(r.data.error || "Gagal menghapus.");
      };
    });
  }

  async function addKey() {
    const name = document.getElementById("keyName").value.trim();
    const until = new Date(document.getElementById("keyUntil").value).getTime();
    if (!name) { keyMsg("Isi nama kode dulu."); return; }
    if (!until) { keyMsg("Pilih waktu berlaku."); return; }
    const btn = document.getElementById("keyAdd");
    btn.disabled = true;
    const r = await api("admin", { action: "keys_add", name, until }, keyToken);
    btn.disabled = false;
    if (r.status === 401) { closeKeys(); return; }
    if (r.ok) {
      keyMsg("Kode " + name + " aktif sampai " + new Date(until).toLocaleString("id-ID") + ".", true);
      document.getElementById("keyName").value = "";
      loadKeys();
    } else keyMsg(r.data.error || "Gagal membuat kode.");
  }

  function initKeyUi() {
    document.getElementById("keyAdd").onclick = addKey;
    document.getElementById("keyRefresh").onclick = loadKeys;
    document.getElementById("keyClose").onclick = closeKeys;
    document.getElementById("keyName").addEventListener("keydown", e => { if (e.key === "Enter") addKey(); });
    document.querySelectorAll(".key-quick button").forEach(b => {
      b.onclick = () => { document.getElementById("keyUntil").value = toLocalInput(Date.now() + Number(b.dataset.off)); };
    });
    /* kode masuk (key) yang habis saat sedang dipakai -> kembali ke gate */
    setInterval(() => { if (keyExpired()) location.reload(); }, 30000);
  }

  /* ---------- reset total (kode rahasia) ---------- */
  async function doReset(ticket) {
    if (!confirm("Reset total\n\nSemua akun, riwayat, favorit, chat, dan data ban akan dihapus permanen dari database.\n\nLanjutkan?")) return;
    if (!confirm("Yakin 100%? Ini tidak bisa dibatalkan.")) return;
    const r = await api("admin", { action: "reset", ticket });
    if (r.ok) {
      [LS_TOKEN, LS_BAN, LS_BG, LS_BGIMG, LS_AUTH].forEach(k => localStorage.removeItem(k));
      alert("Selesai. Semua data & akun sudah dihapus.");
      location.reload();
    } else {
      document.getElementById("gateErr").textContent = r.data.error || "Reset gagal.";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gateBtn").onclick = tryGate;
    document.getElementById("gatePw").addEventListener("keydown", e => {
      if (e.key === "Enter") tryGate();
    });

    document.getElementById("clearHistoryBtn").onclick = () => {
      if (confirm("Hapus semua riwayat?")) {
        historyCache = [];
        api("me", { action: "clear" }, localStorage.getItem(LS_TOKEN));
        renderHistory();
      }
    };

    let timer;
    document.getElementById("search").addEventListener("input", e => {
      currentQuery = e.target.value;
      clearTimeout(timer);
      timer = setTimeout(renderGrid, 80);
    });

    document.getElementById("totalFoot").textContent = games.length;

    initAuthUi();
    initNav();
    initKeyUi();
    initSettings();
    initChat();

    if (isAuthed()) {
      touchAuth();
      afterGate();
    }

    ["click", "keydown", "touchstart"].forEach(evt => {
      document.addEventListener(evt, () => { if (isAuthed()) touchAuth(); }, { passive: true });
    });
  });
}

// Halaman player
if (isPlayerPage) {
  document.addEventListener("DOMContentLoaded", async () => {
    if (!isAuthed()) {
      location.href = "index.html";
      return;
    }

    const me = await api("me", { action: "get" }, localStorage.getItem(LS_TOKEN));
    if (!me.ok) {
      if (me.data.banned) saveBan(me.data);
      if (me.status === 401 || me.data.banned) localStorage.removeItem(LS_TOKEN);
      location.href = "index.html";
      return;
    }

    applyMe(me.data);

    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    const game = games.find(g => g.slug === slug);

    if (!game) {
      document.getElementById("playerTitle").textContent = "Game tidak ditemukan";
      document.getElementById("loading").innerHTML = "<p>Game tidak ditemukan.</p>";
      return;
    }

    document.title = game.name + " | Playlume";
    document.getElementById("playerTitle").textContent = game.name;
    document.getElementById("openNewTab").href = game.url;
    document.getElementById("fallbackBtn").href = game.url;

    addHistory(slug);

    const frame = document.getElementById("gameFrame");
    const loading = document.getElementById("loading");
    const fallback = document.getElementById("fallback");

    let loaded = false;
    let fallbackShown = false;

    function showFallback() {
      if (fallbackShown) return;
      fallbackShown = true;
      loading.classList.add("hidden");
      frame.classList.add("hidden");
      frame.src = "about:blank";
      fallback.classList.remove("hidden");
    }

    if (!canEmbed(game.url)) {
      showFallback();
    } else {
      frame.setAttribute("referrerpolicy", "no-referrer");
      frame.addEventListener("load", () => {
        if (fallbackShown) return;
        loaded = true;
        loading.classList.add("hidden");
        frame.classList.remove("hidden");
      });
      frame.addEventListener("error", showFallback);
      frame.src = game.url;

      setTimeout(() => { if (!loaded) showFallback(); }, 8000);
    }

    document.getElementById("backBtn").addEventListener("click", e => {
      e.preventDefault();
      location.href = "index.html";
    });

    const fsBtn = document.getElementById("fullscreenBtn");
    const fsIcon = document.getElementById("fsIcon");
    const body = document.body;

    const iconExpand = `<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>`;
    const iconShrink = `<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>`;

    function isFullscreen() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement);
    }

    function updateFsIcon() {
      fsIcon.innerHTML = isFullscreen() ? iconShrink : iconExpand;
    }

    async function toggleFullscreen() {
      try {
        if (!isFullscreen()) {
          if (frame.requestFullscreen || frame.webkitRequestFullscreen) {
            try {
              await (frame.requestFullscreen ? frame.requestFullscreen() : Promise.resolve(frame.webkitRequestFullscreen()));
              updateFsIcon();
              return;
            } catch (e) {}
          }
          if (body.requestFullscreen) await body.requestFullscreen();
          else if (body.webkitRequestFullscreen) body.webkitRequestFullscreen();
          else if (body.msRequestFullscreen) body.msRequestFullscreen();
        } else {
          if (document.exitFullscreen) await document.exitFullscreen();
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
        }
        updateFsIcon();
      } catch (err) {
        console.warn("Fullscreen gagal:", err);
      }
    }

    fsBtn.addEventListener("click", toggleFullscreen);

    ["fullscreenchange", "webkitfullscreenchange"].forEach(evt => {
      document.addEventListener(evt, updateFsIcon);
    });

    document.addEventListener("keydown", e => {
      if ((e.key === "f" || e.key === "F") && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        toggleFullscreen();
      }
    });
  });
   }

// Tandai player online dan keluarkan kalau akunnya diban
setInterval(async () => {
  const token = localStorage.getItem(LS_TOKEN);
  if (!token) return;
  const appEl = document.getElementById("app");
  const inApp = isPlayerPage || (appEl && !appEl.classList.contains("hidden"));
  if (!inApp) return;
  const r = await api("me", { action: "ping" }, token);
  if (r.status === 401 || r.data.banned) {
    if (r.data.banned) saveBan(r.data);
    localStorage.removeItem(LS_TOKEN);
    location.reload();
  }
}, 40000);
