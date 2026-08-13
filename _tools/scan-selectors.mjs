// scan-selectors.mjs
// Run from: ~/Documents/GitHub/alterrell-interactive-public
//   node _tools/scan-selectors.mjs
//
// Serves ./dist on a free port, probes every selector on the rendered hub and
// piece, measures the font gap, lists classes not in the v3 control list,
// writes ../alterrell-hq/reports/2026-08-13-selector-scan.txt, appends one
// LEDGER line, then exits. No background jobs, nothing left running.

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- config

const DIST = 'dist';
const REPORT = '../alterrell-hq/reports/2026-08-13-selector-scan.txt';
const LEDGER = '../alterrell-hq/LEDGER.md';

const SEL = [
  '.ai-nav', '.ai-nav .wm', '.ai-nav .links', '.ai-tabs', '.ai-tab',
  '.ai-inner', '.ai-journey-inner', '.hub-hero-inner', '.hub-grid-section-inner', '.ai-footer-inner',
  '.ai-hero', '.hub-hero', '.ai-section', '.hub-grid-section',
  '.ai-hero-hed', '.hub-hero-headline', '.ai-hero-dek', '.ct-tags', '.ct-tag',
  '.ai-journey', '.ai-journey-path', '.ai-journey-icon', '.ai-journey-label',
  '.ai-journey-title', '.ai-journey-meta', '.ai-journey-cta',
  '.ai-h2', '.ai-h3', '.ai-body', '.ct-prose',
  '.hub-piece-grid', '.hub-card', '.hub-card-bar', '.hub-card-bar-title',
  '.hub-card-body', '.hub-card-sub', '.hub-card-cta', '.hub-card-meta',
  '.ai-footer', '.ai-footer-series-hub', '.ai-footer-url', '.ai-footer-nav',
  '.ai-card-gallery', '.ai-card', '.card-square', '.ai-share-trigger', '.ai-share-btn',
  '.ai-source-list', '.ai-table-wrap', '.ai-metric', '.ai-callout', '.ai-stamp',
  '[role=tab]', '[role=tabpanel]'
];

const FONTPROBE = [
  '.hub-hero-headline', '.ai-hero-hed', '.ai-hero-dek', '.ai-h2',
  '.ai-body', '.ai-tab', '.ai-journey-title', '.ai-journey-label'
];

const ROUTES = [
  ['HUB', '/index.html'],
  ['PIECE', '/concert-tax/index.html']
];

// ---------------------------------------------------------------- server

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon', '.txt': 'text/plain'
};

function serve(root) {
  const server = http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(root, rel);
    if (!file.startsWith(path.resolve(root))) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end('not found: ' + rel); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

// ---------------------------------------------------------------- checks

if (!fs.existsSync(DIST)) {
  console.error('\nERROR: ' + DIST + ' not found.');
  console.error('Run "npm run build" first, from the repo root.\n');
  process.exit(1);
}

const root = path.resolve(DIST);
const { server, port } = await serve(root);
console.log('serving ' + root + ' on 127.0.0.1:' + port);

// ---------------------------------------------------------------- scan

const browser = await chromium.launch();
const out = { counts: {}, fonts: {}, classes: {}, missing: [] };

for (const [name, route] of ROUTES) {
  const url = 'http://127.0.0.1:' + port + route;
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const resp = await page.goto(url, { waitUntil: 'networkidle' });
  if (!resp || resp.status() !== 200) {
    out.missing.push(name + ' ' + route + ' -> ' + (resp ? resp.status() : 'no response'));
    out.counts[name] = {}; out.fonts[name] = {}; out.classes[name] = [];
    await page.close();
    continue;
  }

  out.counts[name] = await page.evaluate((S) => {
    const r = {};
    for (const s of S) {
      try { r[s] = document.querySelectorAll(s).length; }
      catch (e) { r[s] = -1; }
    }
    return r;
  }, SEL);

  out.fonts[name] = await page.evaluate((F) => {
    const r = {};
    for (const s of F) {
      const el = document.querySelector(s);
      if (!el) { r[s] = null; continue; }
      const c = getComputedStyle(el);
      r[s] = {
        fam: c.fontFamily.split(',')[0].replace(/["']/g, ''),
        size: c.fontSize,
        weight: c.fontWeight,
        lh: c.lineHeight
      };
    }
    return r;
  }, FONTPROBE);

  out.classes[name] = await page.evaluate(() => {
    const set = new Set();
    document.querySelectorAll('*').forEach(el => el.classList.forEach(c => set.add(c)));
    return [...set].sort();
  });

  await page.close();
}

await browser.close();
server.close();

// ---------------------------------------------------------------- report

const pad = (s, n) => String(s).padEnd(n);

const known = new Set(
  SEL.filter(s => s.startsWith('.')).map(s => s.split(' ').pop().slice(1))
);

let R = 'SELECTOR SCAN ' + new Date().toISOString().slice(0, 10) + '\n';
R += 'Source: rendered ' + DIST + ', served locally, viewport 1280\n';
R += 'Selectors probed: ' + SEL.length + '   Font probes: ' + FONTPROBE.length + '\n';

if (out.missing.length) {
  R += '\n!! PAGES THAT DID NOT LOAD !!\n' + out.missing.join('\n') + '\n';
}

R += '\n== 1. SELECTOR COUNTS ==\n';
R += pad('selector', 30) + pad('hub', 8) + 'piece\n';
R += '------------------------------------------------\n';
for (const s of SEL) {
  const h = out.counts.HUB[s], p = out.counts.PIECE[s];
  R += pad(s, 30) + pad(h === undefined ? '-' : h, 8) + (p === undefined ? '-' : p) + '\n';
}

R += '\n== 2. DEAD ON BOTH SURFACES ==\n';
const dead = SEL.filter(s => out.counts.HUB[s] === 0 && out.counts.PIECE[s] === 0);
R += (dead.length ? dead.join('\n') : 'none') + '\n';

R += '\n== 3. BAD SELECTORS (parse error) ==\n';
const bad = SEL.filter(s => out.counts.HUB[s] === -1 || out.counts.PIECE[s] === -1);
R += (bad.length ? bad.join('\n') : 'none') + '\n';

R += '\n== 4. FONT GAP AT 1280 ==\n';
R += pad('selector', 26) + pad('surface', 8) + pad('family', 22) + pad('size', 10) + pad('wt', 6) + 'leading\n';
R += '--------------------------------------------------------------------------------\n';
for (const [n] of ROUTES) {
  for (const s of FONTPROBE) {
    const f = out.fonts[n] ? out.fonts[n][s] : null;
    R += pad(s, 26) + pad(n, 8)
      + pad(f ? f.fam : 'ABSENT', 22)
      + pad(f ? f.size : '-', 10)
      + pad(f ? f.weight : '-', 6)
      + (f ? f.lh : '-') + '\n';
  }
}

R += '\n== 5. CLASSES PRESENT, NOT IN THE V3 CONTROL LIST ==\n';
for (const [n] of ROUTES) {
  const all = out.classes[n] || [];
  const un = all.filter(c => !known.has(c));
  R += '\n' + n + ': ' + all.length + ' distinct classes, ' + un.length + ' unlisted\n';
  R += (un.length ? un.join(' ') : 'none') + '\n';
}

console.log('\n' + R);

fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, R);
console.log('report written: ' + path.resolve(REPORT));

fs.appendFileSync(
  LEDGER,
  '- Selector scan, ' + SEL.length + ' selectors probed on rendered hub and piece, font gap measured | completed | 08-13\n'
);
console.log('LEDGER line appended.');
