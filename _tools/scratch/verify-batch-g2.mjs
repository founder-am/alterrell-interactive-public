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
const browser = await chromium.launch();

function scan() {
  const rows = [];
  document.querySelectorAll('*').forEach((e) => {
    const own = Array.from(e.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
    if (!own) return;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const fs2 = parseFloat(getComputedStyle(e).fontSize);
    if (fs2 < 15) rows.push({ sel: e.tagName.toLowerCase() + (e.className ? '.' + String(e.className).trim().split(/\s+/).join('.') : ''), px: fs2, inPicker: !!e.closest('.ai-sodium-picker') });
  });
  return rows;
}

for (const w of [360, 1280]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const pg = await ctx.newPage();
  await pg.goto(base + '/pieces/fast-food-sodium/');
  await pg.click('#tab-btn-tab-compare');
  await pg.selectOption('#ai-sodium-chain', 'mcdonalds');
  await pg.selectOption('#ai-sodium-item', 'mc-bigmac');
  await pg.click('#ai-sodium-find');
  await pg.waitForSelector('.ai-sodium-results--open');
  const rows = await pg.evaluate(scan);
  const agg = {};
  rows.forEach((r) => { const k = r.sel + ' @' + r.px + (r.inPicker ? ' [PICKER]' : ''); agg[k] = (agg[k] || 0) + 1; });
  console.log(`--- ${w}px, compare tab open, results rendered: ${rows.length} rendered nodes under 15px`);
  Object.keys(agg).sort().forEach((k) => console.log(`    ${agg[k]}x  ${k}`));
  const pickerMin = rows.filter((r) => r.inPicker);
  console.log(`    picker nodes under 15px: ${pickerMin.length}`);
  await ctx.close();
}

// concert-tax ticket table
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const pg = await ctx.newPage();
await pg.goto(base + '/pieces/concert-tax/');
const tables = await pg.evaluate(() => Array.from(document.querySelectorAll('table')).map((t, i) => ({
  i,
  caption: t.previousElementSibling?.textContent.replace(/\s+/g, ' ').trim().slice(0, 90) || '',
  head: Array.from(t.querySelectorAll('thead th')).map((c) => c.textContent.trim()),
  body: Array.from(t.querySelectorAll('tbody tr')).map((r) => Array.from(r.children).map((c) => c.textContent.replace(/\s+/g, ' ').trim())),
  foot: Array.from(t.querySelectorAll('tfoot tr')).map((r) => Array.from(r.children).map((c) => c.textContent.replace(/\s+/g, ' ').trim())),
})));
tables.forEach((t) => {
  console.log(`\n=== concert-tax table ${t.i} | ${t.caption}`);
  console.log('   head:', JSON.stringify(t.head));
  t.body.forEach((r) => console.log('   row:', JSON.stringify(r)));
  t.foot.forEach((r) => console.log('   foot:', JSON.stringify(r)));
});
await ctx.close();
await browser.close();
server.close();
