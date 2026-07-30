#!/usr/bin/env node
/*
 * fetch-fonts.js — one-time vendoring of the webfonts the pieces use.
 *
 * The pieces link fonts.googleapis.com. Measuring text geometry against a
 * font that arrives over the network is measuring the network: a slow or
 * failed fetch silently falls back to a system font and every width, line
 * count, and chars-per-line figure shifts. This vendors the exact font
 * files into _tools/fonts/ so check.js can serve them from disk and get
 * the same pixels every run, offline.
 *
 * Re-run only when a piece changes its font request:
 *   node fetch-fonts.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const OUT = path.join(__dirname, 'fonts');
const WOFF = path.join(OUT, 'woff2');

// Chrome UA is required, or Google serves ttf instead of woff2.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36';

// Both variants the pieces request. Kept verbatim so the vendored CSS is
// a superset of what any piece asks for.
const CSS_URLS = [
  'https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,700;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,800&family=DM+Mono:wght@400;500&display=swap',
  'https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,700;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap',
];

function get(url, asBuffer = false) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': UA } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location, asBuffer).then(resolve, reject);
        }
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(asBuffer ? Buffer.concat(chunks) : Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });
}

(async () => {
  fs.mkdirSync(WOFF, { recursive: true });

  const blocks = [];
  for (const url of CSS_URLS) {
    process.stdout.write(`css  ${url.slice(0, 70)}...\n`);
    blocks.push(await get(url));
  }
  // Dedupe @font-face blocks across the two variants.
  const seen = new Set();
  const merged = [];
  for (const block of blocks) {
    for (const m of block.matchAll(/(\/\*[^*]*\*\/\s*)?@font-face\s*\{[^}]*\}/g)) {
      const face = m[0].trim();
      const key = face.replace(/\s+/g, ' ');
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(face);
    }
  }

  const urls = [...new Set([...merged.join('\n').matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]))];
  const manifest = { fetched: new Date().toISOString(), files: {} };
  for (const u of urls) {
    const base = path.basename(new URL(u).pathname);
    const buf = await get(u, true);
    fs.writeFileSync(path.join(WOFF, base), buf);
    manifest.files[base] = {
      url: u,
      bytes: buf.length,
      sha256: crypto.createHash('sha256').update(buf).digest('hex'),
    };
    process.stdout.write(`  ${base}  ${buf.length}b\n`);
  }

  fs.writeFileSync(path.join(OUT, 'fonts.css'), merged.join('\n') + '\n');
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\n${merged.length} @font-face blocks, ${urls.length} woff2 files -> ${OUT}`);
})();
