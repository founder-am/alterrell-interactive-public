import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const REPO = '/Users/alterrellmills/Documents/GitHub/alterrell-interactive-public';
const DIST = path.join(REPO, 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(DIST, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  res.end(fs.readFileSync(f));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const out = [];
const log = (s) => { out.push(s); console.log(s); };

const browser = await chromium.launch();

// ── 3. status codes
for (const u of ['/pieces/concert-tax/', '/pieces/fast-food-sodium/']) {
  const ctx = await browser.newContext();
  const pg = await ctx.newPage();
  const r = await pg.goto(base + u);
  log(`3  ${r.status() === 200 ? 'PASS' : 'FAIL'}  ${u} -> ${r.status()}`);
  await ctx.close();
}

// ── selectors + picker, at 360
const SELECTORS = [
  '.ai-sodium-picker',
  '#ai-sodium-data',
  '#ai-sodium-chain',
  '#ai-sodium-item',
  '#ai-sodium-find',
  '#ai-sodium-results',
  '.ai-sodium-mode-btn',
];

const ctx360 = await browser.newContext({ viewport: { width: 360, height: 780 } });
const p360 = await ctx360.newPage();
await p360.goto(base + '/pieces/fast-food-sodium/');

// 8 selector resolution
for (const s of SELECTORS) {
  const n = await p360.locator(s).count();
  log(`8  ${n >= 1 ? 'PASS' : 'FAIL'}  ${s} -> ${n} match${n === 1 ? '' : 'es'}`);
}

// 6 item count inside the built JSON block
const built = await p360.evaluate(() => {
  const d = JSON.parse(document.getElementById('ai-sodium-data').textContent);
  let n = 0; Object.keys(d.MENU).forEach((k) => { n += d.MENU[k].items.length; });
  return { chains: Object.keys(d.MENU).length, items: n, na: d.DAILY_SODIUM, fib: d.DAILY_FIBER };
});
log(`6  built page JSON: ${built.chains} chains, ${built.items} items, DAILY_SODIUM=${built.na}, DAILY_FIBER=${built.fib}`);

// 10 interactivity — drive it
await p360.click('#tab-btn-tab-compare');
await p360.selectOption('#ai-sodium-chain', 'mcdonalds');
const optCount = await p360.locator('#ai-sodium-item option').count();
await p360.selectOption('#ai-sodium-item', 'mc-bigmac');
await p360.click('#ai-sodium-find');
await p360.waitForSelector('.ai-sodium-results--open', { timeout: 3000 });
const res = await p360.evaluate(() => {
  const r = document.getElementById('ai-sodium-results');
  return {
    open: r.classList.contains('ai-sodium-results--open'),
    cards: r.querySelectorAll('.ai-sodium-card').length,
    meter: r.querySelectorAll('.ai-sodium-meter-fill').length,
    text: r.querySelector('.ai-sodium-selection')?.textContent.trim(),
    badge: r.querySelector('.ai-sodium-card-badge')?.textContent.trim(),
  };
});
log(`10 ${res.open && res.cards >= 2 ? 'PASS' : 'FAIL'}  item options after chain pick: ${optCount}; results cards: ${res.cards}; meter: ${res.meter}; "${res.text}"; first badge "${res.badge}"`);

// 13 picker controls >= 44px at 360 (compare tab open)
const ctrls = await p360.evaluate(() => {
  const root = document.querySelector('.ai-sodium-picker');
  const els = root.querySelectorAll('select, button, a, input, [role=button]');
  return Array.from(els).map((e) => {
    const r = e.getBoundingClientRect();
    return { tag: e.tagName.toLowerCase(), id: e.id || '', cls: e.className, w: Math.round(r.width), h: Math.round(r.height) };
  });
});
let ctrlFail = 0;
ctrls.forEach((c) => { if (c.h < 44) ctrlFail++; });
ctrls.forEach((c) => log(`13    ${c.h >= 44 ? 'ok  ' : 'FAIL'} ${c.tag}${c.id ? '#' + c.id : ''}${c.cls ? '.' + String(c.cls).split(' ')[0] : ''}  ${c.w}x${c.h}`));
log(`13 ${ctrlFail === 0 ? 'PASS' : 'FAIL'}  ${ctrls.length} picker controls at 360, ${ctrlFail} under 44px high`);

// 15 font sizes at 360
const f360 = await p360.evaluate(() => {
  const body = parseFloat(getComputedStyle(document.body).fontSize);
  let min = Infinity, minSel = '';
  document.querySelectorAll('*').forEach((e) => {
    if (!e.textContent.trim()) return;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const fs = parseFloat(getComputedStyle(e).fontSize);
    if (fs < min) { min = fs; minSel = e.tagName.toLowerCase() + (e.className ? '.' + String(e.className).split(' ')[0] : ''); }
  });
  return { body, min, minSel };
});
log(`15 360:  body ${f360.body}px, smallest rendered ${f360.min}px on ${f360.minSel}`);
await ctx360.close();

const ctx1280 = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const p1280 = await ctx1280.newPage();
await p1280.goto(base + '/pieces/fast-food-sodium/');
const f1280 = await p1280.evaluate(() => {
  const body = parseFloat(getComputedStyle(document.body).fontSize);
  let min = Infinity, minSel = '';
  document.querySelectorAll('*').forEach((e) => {
    if (!e.textContent.trim()) return;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const fs = parseFloat(getComputedStyle(e).fontSize);
    if (fs < min) { min = fs; minSel = e.tagName.toLowerCase() + (e.className ? '.' + String(e.className).split(' ')[0] : ''); }
  });
  return { body, min, minSel };
});
log(`15 1280: body ${f1280.body}px, smallest rendered ${f1280.min}px on ${f1280.minSel}`);
await ctx1280.close();

// 16 concert-tax ticket table
const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const pct = await ctx2.newPage();
await pct.goto(base + '/pieces/concert-tax/');
const table = await pct.evaluate(() => {
  const tables = Array.from(document.querySelectorAll('table'));
  for (const t of tables) {
    const rows = Array.from(t.querySelectorAll('tbody tr'));
    const cells = rows.map((r) => Array.from(r.querySelectorAll('td,th')).map((c) => c.textContent.trim()));
    const dollars = cells.map((c) => c.map((x) => x.match(/\$([\d.]+)/)).filter(Boolean).map((m) => parseFloat(m[1])));
    const flat = dollars.flat();
    if (rows.length >= 4 && flat.length) {
      return { rowCount: rows.length, cells, sum: flat.reduce((a, b) => a + b, 0), tfoot: t.querySelector('tfoot')?.textContent.replace(/\s+/g, ' ').trim() || '' };
    }
  }
  return null;
});
log(`16 ${table ? JSON.stringify(table) : 'no table found'}`);

// 17 hub cards
const phub = await ctx2.newPage();
await phub.goto(base + '/');
const cards = await phub.evaluate(() => Array.from(document.querySelectorAll('.hub-card, a.hub-card, [class*=hub-card]'))
  .map((c) => ({ tag: c.tagName.toLowerCase(), cls: c.className, href: c.getAttribute('href') || (c.querySelector('a')?.getAttribute('href') ?? null) })));
log(`17 hub cards: ${JSON.stringify(cards)}`);

// 18 og:image
for (const u of ['/pieces/concert-tax/', '/pieces/fast-food-sodium/']) {
  const pg = await ctx2.newPage();
  await pg.goto(base + u);
  const og = await pg.getAttribute('meta[property="og:image"]', 'content');
  const rel = og.replace('https://interactive.alterrell.com', '');
  const exists = fs.existsSync(path.join(DIST, rel));
  log(`18 ${u} og:image ${og} -> dist${rel} ${exists ? 'RESOLVES' : 'ABSENT'}`);
}
log(`18 dist/og contents: ${fs.existsSync(path.join(DIST, 'og')) ? fs.readdirSync(path.join(DIST, 'og')).join(', ') : '(no dist/og)'}`);

await ctx2.close();
await browser.close();
server.close();
fs.writeFileSync('/private/tmp/claude-501/-Users-alterrellmills-Documents-GitHub-alterrell-interactive-public/e3dc0ce1-602b-4fcb-bab6-6d4cc15f4e65/scratchpad/verify-out.txt', out.join('\n'));
