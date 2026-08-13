// render-readout.mjs
// Run from: ~/Documents/GitHub/alterrell-interactive-public
//   node _tools/render-readout.mjs
//
// Replaces screenshot review with numbers. Serves ./dist, loads the hub and
// Concert Tax at 360 and 1280, and reports what a screenshot would have told
// you: block heights, tab bar offset, headline wrap, journey cell size,
// overflow, and the per-page FAIL breakdown from _tools/results.json.
// Read-only. Writes one report. Commits nothing.

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const REPORT = '../alterrell-hq/reports/2026-08-13-render-readout.txt';

const ROUTES = [
  ['HUB',   '/index.html'],
  ['PIECE', '/concert-tax/index.html']
];
const WIDTHS = [360, 1280];

// blocks measured top to bottom, first match wins
const BLOCKS = [
  ['nav',       '.ai-nav'],
  ['hero',      '.ai-hero, .hub-hero'],
  ['journey',   '.ai-journey, .hub-journey'],
  ['tab bar',   '.ai-tabs'],
  ['section 1', '.ai-section, .hub-grid-section'],
  ['footer',    '.ai-footer, .hub-footer']
];

// single elements worth a line each
const PROBES = [
  ['headline',      '.ai-hero-hed, .hub-hero-headline'],
  ['dek',           '.ai-hero-dek'],
  ['journey cell',  '.ai-journey-path'],
  ['journey title', '.ai-journey-title'],
  ['journey cta',   '.ai-journey-cta'],
  ['tab',           '.ai-tab'],
  ['card bar',      '.hub-card-bar'],
  ['card title',    '.hub-card-bar-title'],
  ['body para',     '.ai-body'],
  ['metric num',    '.ai-metric-num'],
  ['share button',  '.ai-share-btn'],
  ['back link',     '.ai-footer-series-hub']
];

const MIME = {'.html':'text/html','.css':'text/css','.js':'text/javascript',
  '.mjs':'text/javascript','.json':'application/json','.svg':'image/svg+xml',
  '.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp',
  '.woff':'font/woff','.woff2':'font/woff2','.ico':'image/x-icon','.txt':'text/plain'};

function serve(root){
  const s = http.createServer((req,res)=>{
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const f = path.join(root, rel);
    if (!f.startsWith(path.resolve(root))) { res.writeHead(403); return res.end(); }
    fs.readFile(f,(e,d)=>{
      if (e){ res.writeHead(404); return res.end('404 '+rel); }
      res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});
      res.end(d);
    });
  });
  return new Promise((ok,no)=>{ s.on('error',no); s.listen(0,'127.0.0.1',()=>ok({s,port:s.address().port})); });
}

if (!fs.existsSync(DIST)) {
  console.error('\nERROR: ' + DIST + ' not found. Run "npm run build" first.\n');
  process.exit(1);
}

const root = path.resolve(DIST);
const { s: server, port } = await serve(root);
const browser = await chromium.launch();
const data = {};

for (const [name, route] of ROUTES) {
  data[name] = {};
  for (const w of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: w, height: 900 });
    const resp = await page.goto('http://127.0.0.1:' + port + route, { waitUntil: 'networkidle' });
    if (!resp || resp.status() !== 200) { data[name][w] = { error: 'status ' + (resp?resp.status():'none') }; await page.close(); continue; }
    await page.evaluate(() => document.fonts && document.fonts.ready);

    data[name][w] = await page.evaluate(function (args) {
      const BL = args.BL, PR = args.PR, vw = args.vw;
      const out = { blocks: [], probes: [], overflow: [], doc: 0, tabOffset: null };
      out.doc = Math.round(document.documentElement.scrollHeight);

      for (const pair of BL) {
        const el = document.querySelector(pair[1]);
        if (!el) { out.blocks.push([pair[0], null, null]); continue; }
        const r = el.getBoundingClientRect();
        out.blocks.push([pair[0], Math.round(r.height), Math.round(r.top + window.scrollY)]);
      }

      const tabs = document.querySelector('.ai-tabs');
      if (tabs) out.tabOffset = Math.round(tabs.getBoundingClientRect().top + window.scrollY);

      for (const pair of PR) {
        const el = document.querySelector(pair[1]);
        if (!el) { out.probes.push([pair[0], null]); continue; }
        const r = el.getBoundingClientRect();
        const c = getComputedStyle(el);
        const fs_ = parseFloat(c.fontSize);
        const lhRaw = c.lineHeight;
        const lh = lhRaw === 'normal' ? fs_ * 1.2 : parseFloat(lhRaw);
        const lines = lh > 0 ? Math.max(1, Math.round(r.height / lh)) : 1;
        out.probes.push([pair[0], {
          w: Math.round(r.width), h: Math.round(r.height),
          fs: Math.round(fs_ * 10) / 10, lines: lines,
          n: document.querySelectorAll(pair[1]).length,
          tap: (r.width >= 44 && r.height >= 44)
        }]);
      }

      const all = document.querySelectorAll('*');
      for (let i = 0; i < all.length; i++) {
        const el = all[i];
        const r = el.getBoundingClientRect();
        if (r.width > vw + 1) {
          let tag = el.tagName.toLowerCase();
          if (el.className && typeof el.className === 'string') tag += '.' + el.className.trim().split(/\s+/).join('.');
          out.overflow.push(tag + '  ' + Math.round(r.width) + 'px');
        }
      }
      out.overflow = out.overflow.slice(0, 6);
      return out;
    }, { BL: BLOCKS, PR: PROBES, vw: w });

    await page.close();
  }
}

await browser.close();
server.close();

// ---- checker results, per page ----
let checker = null;
try {
  const raw = JSON.parse(fs.readFileSync('_tools/results.json', 'utf8'));
  checker = { total: raw.summary ? raw.summary.totalFailCells : null, rows: [] };
  for (const p of raw.pieces) {
    const cells = [];
    for (const w of raw.widths) {
      const g = (p.widths[String(w)] || {}).geometry || {};
      for (const k of Object.keys(g)) {
        if (g[k].status === 'FAIL') {
          const offs = (g[k].offenders || []).map(o => o.selector + ' ' + (o.value || '')).slice(0, 3);
          cells.push(k + '@' + w + (offs.length ? '  [' + offs.join(' | ') + ']' : ''));
        }
      }
    }
    const s = p.structure;
    if (s) for (const k of Object.keys(s)) if (s[k].status === 'FAIL') cells.push(k);
    if (cells.length) checker.rows.push([p.path, cells]);
  }
} catch (e) { checker = { error: String(e.message || e) }; }

// ---- render ----
const pad = (s, n) => String(s).padEnd(n);
let R = 'RENDER READOUT ' + new Date().toISOString().slice(0, 10) + '\n';
R += 'Source: rendered ' + DIST + ', served locally. Fonts loaded before measuring.\n';
R += 'This replaces screenshot review. Every number is measured, none derived.\n';

for (const [name] of ROUTES) {
  for (const w of WIDTHS) {
    const d = data[name][w];
    R += '\n================ ' + name + ' @ ' + w + ' ================\n';
    if (d.error) { R += 'PAGE DID NOT LOAD: ' + d.error + '\n'; continue; }
    R += 'document height: ' + d.doc + 'px\n';
    if (d.tabOffset !== null) {
      R += 'tab bar offset:  ' + d.tabOffset + 'px' + (w === 360 ? '   (budget 4 is 400 at 360 — ' + (d.tabOffset <= 400 ? 'PASS' : 'OVER by ' + (d.tabOffset - 400)) + ')' : '') + '\n';
    }

    R += '\n-- blocks, top to bottom --\n';
    R += pad('block', 14) + pad('height', 10) + 'top\n';
    for (const [label, h, top] of d.blocks) {
      R += pad(label, 14) + pad(h === null ? 'absent' : h + 'px', 10) + (top === null ? '-' : top + 'px') + '\n';
    }

    R += '\n-- elements --\n';
    R += pad('element', 15) + pad('count', 7) + pad('size', 14) + pad('font', 8) + pad('lines', 7) + '44px tap\n';
    for (const [label, p] of d.probes) {
      if (!p) { R += pad(label, 15) + 'absent\n'; continue; }
      R += pad(label, 15) + pad(p.n, 7) + pad(p.w + 'x' + p.h, 14) + pad(p.fs + 'px', 8) + pad(p.lines, 7) + (p.tap ? 'yes' : 'no') + '\n';
    }

    R += '\n-- wider than the viewport --\n';
    R += d.overflow.length ? d.overflow.join('\n') + '\n' : 'none\n';
  }
}

R += '\n\n================ CHECKER ================\n';
if (checker.error) R += 'could not read _tools/results.json: ' + checker.error + '\n';
else {
  R += 'total FAIL cells: ' + checker.total + '\n\n';
  for (const [p, cells] of checker.rows) {
    R += p + '\n';
    for (const c of cells) R += '   ' + c + '\n';
  }
  if (!checker.rows.length) R += 'no failing pages\n';
}

console.log('\n' + R);
fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, R);
console.log('report written: ' + path.resolve(REPORT));
console.log('\nNothing was committed. Commit block is separate.');
