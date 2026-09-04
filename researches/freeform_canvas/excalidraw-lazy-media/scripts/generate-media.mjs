import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync, crc32 } from "node:zlib";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "media");

/** Stable Excalidraw-looking file ids (40 hex chars). */
function fileId(slug) {
  return createHash("sha1").update(`excalidraw-lazy:${slug}`).digest("hex");
}

export const ITEMS = [
  { slug: "aurora", title: "Aurora", hue: 168 },
  { slug: "harbor", title: "Harbor", hue: 204 },
  { slug: "desert", title: "Desert", hue: 28 },
  { slug: "forest", title: "Forest", hue: 132 },
  { slug: "neon", title: "Neon", hue: 292 },
  { slug: "quarry", title: "Quarry", hue: 36 },
  { slug: "glacier", title: "Glacier", hue: 196 },
  { slug: "market", title: "Market", hue: 12 },
  { slug: "studio", title: "Studio", hue: 248 },
  { slug: "dusk", title: "Dusk", hue: 328 },
  { slug: "archive", title: "Archive", hue: 48 },
  { slug: "orchard", title: "Orchard", hue: 88 },
];

const FULL = { w: 800, h: 450 };
const THUMB = { w: 24, h: 14 };

function hslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = ((h % 360) + 360) % 360 / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r = 0,
    g = 0,
    b = 0;
  if (hp < 1) [r, g, b] = [c, x, 0];
  else if (hp < 2) [r, g, b] = [x, c, 0];
  else if (hp < 3) [r, g, b] = [0, c, x];
  else if (hp < 4) [r, g, b] = [0, x, c];
  else if (hp < 5) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const m = l - c / 2;
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

function sample(item, x, y, w, h, { label }) {
  const u = x / (w - 1);
  const v = y / (h - 1);
  const plasma =
    0.55 +
    0.22 * Math.sin(u * 9 + item.hue / 40) +
    0.18 * Math.sin(v * 7.3 + u * 4) +
    0.12 * Math.sin((u + v) * 13);
  const vig = Math.hypot(u - 0.5, v - 0.5);
  const light = Math.max(0.12, Math.min(0.72, plasma - vig * 0.35));
  const sat = 0.42 + 0.2 * Math.sin(v * 6);
  let [r, g, b] = hslToRgb(item.hue + u * 18, sat, light);

  if (label && w >= 200) {
    const glyph = stamp(item.title, u, v);
    if (glyph) {
      r = Math.round(r * 0.15 + 255 * 0.85);
      g = Math.round(g * 0.15 + 255 * 0.85);
      b = Math.round(b * 0.15 + 255 * 0.85);
    }
  }

  const grain = ((x * 73 + y * 149 + item.hue) % 13) - 6;
  return [
    clamp(r + grain),
    clamp(g + grain),
    clamp(b + grain),
    255,
  ];
}

/** Crude 5×7 caps so the full image is obviously sharper than the thumb. */
function stamp(text, u, v) {
  const letters = {
    A: "0111010001111111000110001",
    B: "1111010001111101000111110",
    C: "0111110000100001000001111",
    D: "1111010001100011000111110",
    E: "1111110000111101000011111",
    F: "1111110000111101000010000",
    G: "0111110000100111000101111",
    H: "1000110001111111000110001",
    I: "1111100100001000010011111",
    K: "1000110010111001001010001",
    L: "1000010000100001000011111",
    M: "1000111011101011000110001",
    N: "1000111001101011001110001",
    O: "0111010001100011000101110",
    Q: "0111010001100011001001111",
    R: "1111010001111101001010001",
    S: "0111110000011100000111110",
    T: "1111100100001000010000100",
    U: "1000110001100011000101110",
    V: "1000110001100010101000100",
    Y: "1000110001010100010000100",
  };
  const cols = text.length * 6 - 1;
  const px = (u - 0.12) / 0.76;
  const py = (v - 0.38) / 0.24;
  if (px < 0 || py < 0 || px > 1 || py > 1) return false;
  const cx = Math.floor(px * cols);
  const cy = Math.floor(py * 7);
  const li = Math.floor(cx / 6);
  const lx = cx % 6;
  if (lx === 5 || li >= text.length) return false;
  const ch = text[li].toUpperCase();
  const glyph = letters[ch];
  if (!glyph) return false;
  return glyph[cy * 5 + lx] === "1";
}

function clamp(n) {
  return Math.max(0, Math.min(255, n));
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const payload = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(payload) >>> 0);
  return Buffer.concat([len, payload, crc]);
}

function encodePng(width, height, pixel) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixel(x, y);
      const i = row + 1 + x * 4;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
      raw[i + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

await mkdir(join(OUT, "thumbs"), { recursive: true });
await mkdir(join(OUT, "full"), { recursive: true });

const catalog = [];
for (const item of ITEMS) {
  const id = fileId(item.slug);
  const thumb = encodePng(THUMB.w, THUMB.h, (x, y) =>
    sample(item, x, y, THUMB.w, THUMB.h, { label: false }),
  );
  const full = encodePng(FULL.w, FULL.h, (x, y) =>
    sample(item, x, y, FULL.w, FULL.h, { label: true }),
  );
  const thumbRel = `thumbs/${item.slug}.png`;
  const fullRel = `full/${item.slug}.png`;
  await writeFile(join(OUT, thumbRel), thumb);
  await writeFile(join(OUT, fullRel), full);
  catalog.push({
    id,
    slug: item.slug,
    title: item.title,
    width: FULL.w,
    height: FULL.h,
    thumb: `media/${thumbRel}`,
    full: `media/${fullRel}`,
    thumbBytes: thumb.length,
    fullBytes: full.length,
  });
}

await writeFile(join(OUT, "catalog.json"), `${JSON.stringify({ images: catalog }, null, 2)}\n`);
console.log(`wrote ${catalog.length} thumbs + fulls → public/media`);
for (const row of catalog) {
  console.log(
    `  ${row.slug.padEnd(10)} thumb ${String(row.thumbBytes).padStart(5)}B  full ${String(row.fullBytes).padStart(7)}B`,
  );
}
