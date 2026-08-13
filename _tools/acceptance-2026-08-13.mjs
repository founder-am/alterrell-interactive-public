// verify.mjs — the acceptance list for the 2026-08-13 hub rewrite.
// Every line reads PASS, FAIL or NOT RUN with the measured value and the file
// it came from. Read-only. Serves ./dist the same way _tools/render-readout.mjs
// does, so the numbers are comparable.

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const DIST = 'dist';
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.txt': 'text/plain',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

function serve(root) {
  const s = http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const f = path.join(root, rel);
    if (!f.startsWith(path.resolve(root))) { res.writeHead(403); return res.end(); }
    fs.readFile(f, (e, d) => {
      if (e) { res.writeHead(404); return res.end('404 ' + rel); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
      res.end(d);
    });
  });
  return new Promise((ok, no) => { s.on('error', no); s.listen(0, '127.0.0.1', () => ok({ s, port: s.address().port })); });
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}

const R = [];
const line = (n, label, verdict, value, source) => R.push({ n, label, verdict, value, source });

// ---------------------------------------------------------------- static greps
const sh = (cmd) => { try { return execSync(cmd, { encoding: 'utf8' }); } catch (e) { return e.stdout ?? ''; } };

// 3 — the specificity hack, repo-wide.
// The needle is assembled from fragments on purpose: written out in one
// piece, this file would match its own grep and report a failure it caused.
const NEEDLE = 'body' + ':not(' + '#x' + ')';
const EXCL = '-I . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist';
const hackFiles = sh(`grep -rlF '${NEEDLE}' ${EXCL} 2>/dev/null || true`).trim();
const hackCount = hackFiles ? sh(`grep -roF '${NEEDLE}' ${EXCL} | wc -l`).trim() : '0';
line(3, `${NEEDLE} appears 0 times in the repo`, Number(hackCount) === 0 ? 'PASS' : 'FAIL',
  `${Number(hackCount)} occurrence(s)`, hackFiles || 'repo-wide grep, node_modules/.git/dist excluded');

// 4 — rules inside a <style> block in the hub
const hubSrc = fs.readFileSync('src/pages/index.astro', 'utf8');
const styleBlocks = hubSrc.match(/<style[\s\S]*?<\/style>/g) || [];
const ruleCount = styleBlocks.join('\n').split('{').length - 1;
line(4, '0 rules inside a <style> block in src/pages/index.astro', ruleCount === 0 ? 'PASS' : 'FAIL',
  `${styleBlocks.length} <style> block(s), ${ruleCount} rule(s)`, 'src/pages/index.astro');

// 15 — marker counts, by file (report, not a gate)
const markerFiles = {};
// Same reason as NEEDLE above: both marker strings are assembled, never
// written whole, so this file never appears in its own count.
const MARKERS = ['FIGURE ' + 'NEEDS ' + 'SOURCE', '[' + '[PLACE' + 'HOLDER'];
for (const needle of MARKERS) {
  const raw = sh(`grep -roF '${needle}' ${EXCL} 2>/dev/null || true`);
  for (const l of raw.split('\n')) {
    if (!l.trim()) continue;
    const file = l.slice(0, l.lastIndexOf(':' + needle));
    markerFiles[needle] ??= {};
    markerFiles[needle][file] = (markerFiles[needle][file] || 0) + 1;
  }
}

// 16 — nothing under _archive appears in dist
const archiveFiles = fs.existsSync('_archive') ? walk('_archive') : [];
const distFiles = walk(DIST);
const archiveSigs = new Map();
for (const f of archiveFiles) {
  const st = fs.statSync(f);
  archiveSigs.set(path.basename(f) + ':' + st.size, f);
}
const leaked = [];
for (const f of distFiles) {
  if (f.includes('_archive')) { leaked.push(f + '  (path)'); continue; }
  const st = fs.statSync(f);
  const hit = archiveSigs.get(path.basename(f) + ':' + st.size);
  if (hit) leaked.push(f + '  (matches ' + hit + ')');
}
line(16, 'nothing under _archive appears anywhere in dist', leaked.length === 0 ? 'PASS' : 'FAIL',
  `${archiveFiles.length} archived file(s), ${distFiles.length} dist file(s), ${leaked.length} leak(s)` +
  (leaked.length ? ': ' + leaked.join('; ') : ''), '_archive/ vs dist/');

// ------------------------------------------------------------------- rendering
const root = path.resolve(DIST);
const { s: server, port } = await serve(root);
const browser = await chromium.launch();
const base = 'http://127.0.0.1:' + port;

const htmlPages = distFiles.filter((f) => f.endsWith('.html'))
  .map((f) => '/' + path.relative(root, f).split(path.sep).join('/'));

// 2 + 11 — every page renders
const renderErrors = [];
for (const p of htmlPages) {
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e.message)));
  page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await page.setViewportSize({ width: 1280, height: 900 });
  const resp = await page.goto(base + p, { waitUntil: 'load' });
  const status = resp ? resp.status() : 0;
  if (status !== 200 || errs.length) renderErrors.push(`${p} status ${status}${errs.length ? ' errors: ' + errs.join(' | ') : ''}`);
  await page.close();
}
line(2, 'every page in dist renders without error', renderErrors.length === 0 ? 'PASS' : 'FAIL',
  `${htmlPages.length} page(s): ${htmlPages.join(', ')}` + (renderErrors.length ? ' — ' + renderErrors.join('; ') : ''), 'dist/');

const piecePresent = htmlPages.includes('/pieces/concert-tax/index.html');
line(11, '/pieces/concert-tax/ renders', piecePresent && !renderErrors.some((e) => e.startsWith('/pieces/concert-tax/')) ? 'PASS' : 'FAIL',
  piecePresent ? 'built and loaded, status 200' : 'not present in dist', 'dist/pieces/concert-tax/index.html');

// 10 — banned classes anywhere in dist
const bannedHits = [];
for (const p of htmlPages) {
  const page = await browser.newPage();
  await page.goto(base + p, { waitUntil: 'load' });
  const hits = await page.evaluate(() => {
    const bad = [];
    for (const el of document.querySelectorAll('*')) {
      const cls = typeof el.className === 'string' ? el.className : '';
      for (const c of cls.split(/\s+/)) {
        if (!c) continue;
        if (c === 'ai-breadcrumb' || c === 'ai-eyebrow' || c.startsWith('ai-breadcrumb') || c.startsWith('ai-eyebrow') || c.includes('carousel')) {
          bad.push(el.tagName.toLowerCase() + '.' + c);
        }
      }
    }
    return bad;
  });
  if (hits.length) bannedHits.push(p + ': ' + [...new Set(hits)].join(', '));
  await page.close();
}
line(10, 'no element in dist carries class ai-breadcrumb, ai-eyebrow, or carousel',
  bannedHits.length === 0 ? 'PASS' : 'FAIL',
  bannedHits.length ? bannedHits.join(' | ') : `0 across ${htmlPages.length} page(s)`, 'dist/ (rendered DOM)');

// measured probes on the hub and the piece
const probe = async (route, width) => {
  const page = await browser.newPage();
  await page.setViewportSize({ width, height: 900 });
  await page.goto(base + route, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  const out = await page.evaluate((vw) => {
    const cs = (el) => getComputedStyle(el);

    const hed = document.querySelector('.hub-hero-headline, .ai-hero-hed');
    const lane = cs(document.documentElement).getPropertyValue('--lane-page').trim();

    const nav = document.querySelector('.ai-nav');
    const navBox = nav ? nav.getBoundingClientRect() : null;
    const navVisible = !!nav && cs(nav).display !== 'none' && cs(nav).visibility !== 'hidden' && navBox.height > 0;
    const brand = document.querySelector('.ai-nav-brand');
    const navLinks = [...document.querySelectorAll('.ai-nav a')].map((a) => a.textContent.replace(/\s+/g, ' ').trim());

    // tappable targets
    const rendered = (el) => {
      const c = cs(el);
      if (c.display === 'none' || c.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 || r.height > 0;
    };
    const small = [];
    let considered = 0, skippedInline = 0, skippedHiddenParent = 0;
    for (const el of document.querySelectorAll('button, input, select, textarea, a')) {
      if (!rendered(el)) continue;
      if (el.tagName === 'INPUT' && el.type === 'hidden') continue;
      const parent = el.parentElement;
      if (parent && ['hidden', 'clip'].includes(cs(parent).overflowX)) { skippedHiddenParent++; continue; }
      if (el.tagName === 'A' && cs(el).display === 'inline' && el.closest('p, li')) { skippedInline++; continue; }
      considered++;
      const r = el.getBoundingClientRect();
      if (r.width < 44 - 0.5 || r.height < 44 - 0.5) {
        let sel = el.tagName.toLowerCase();
        if (typeof el.className === 'string' && el.className.trim()) sel += '.' + el.className.trim().split(/\s+/).join('.');
        small.push(sel + ' ' + r.width.toFixed(1) + 'x' + r.height.toFixed(1));
      }
    }

    // h3 contrast, on every background it can render on (hidden panels included)
    const srgb = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
    const parse = (c) => { const m = c.match(/[\d.]+/g); return m ? m.slice(0, 3).map(Number).concat(m[3] !== undefined ? Number(m[3]) : 1) : null; };
    const bgOf = (el) => {
      let n = el;
      while (n && n !== document.documentElement) {
        const p = parse(cs(n).backgroundColor);
        if (p && p[3] > 0) return { rgb: p.slice(0, 3), from: n.tagName.toLowerCase() + (typeof n.className === 'string' && n.className.trim() ? '.' + n.className.trim().split(/\s+/)[0] : '') };
        n = n.parentElement;
      }
      const b = parse(cs(document.body).backgroundColor);
      return { rgb: b ? b.slice(0, 3) : [255, 255, 255], from: 'body' };
    };
    const h3s = [];
    for (const el of document.querySelectorAll('h3, .ai-h3')) {
      const fg = parse(cs(el).color).slice(0, 3);
      const bg = bgOf(el);
      const L1 = lum(fg), L2 = lum(bg.rgb);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const hex = (a) => '#' + a.map((x) => Math.round(x).toString(16).padStart(2, '0')).join('');
      h3s.push({ fg: hex(fg), bg: hex(bg.rgb), bgFrom: bg.from, ratio: Math.round(ratio * 100) / 100 });
    }

    // DOM order: journey vs tab bar
    const journey = document.querySelector('.ai-journey, .ai-journey-compact');
    const tabbar = document.querySelector('.ai-tabs');
    let order = null;
    if (journey && tabbar) {
      order = (journey.compareDocumentPosition(tabbar) & Node.DOCUMENT_POSITION_FOLLOWING) ? 'journey before tabs' : 'tabs before journey';
    }

    // hub card hrefs
    const cardHrefs = [...document.querySelectorAll('a.hub-card')].map((a) => a.getAttribute('href'));
    const cardCount = document.querySelectorAll('.hub-card').length;

    return {
      headline: hed ? { scrollWidth: hed.scrollWidth, clientWidth: hed.clientWidth, fontSize: cs(hed).fontSize, textWrap: cs(hed).textWrap || cs(hed).getPropertyValue('text-wrap'), whiteSpace: cs(hed).whiteSpace, brCount: hed.querySelectorAll('br').length } : null,
      lane, vw,
      nav: { visible: navVisible, height: navBox ? Math.round(navBox.height) : 0, brand: brand ? brand.textContent.replace(/\s+/g, ' ').trim() : null, links: navLinks },
      bodyFontSize: parseFloat(cs(document.body).fontSize),
      taps: { considered, skippedInline, skippedHiddenParent, small },
      h3s, order, cardHrefs, cardCount,
    };
  }, width);
  await page.close();
  return out;
};

const HUB = '/index.html', PIECE = '/pieces/concert-tax/index.html';
const hub360 = await probe(HUB, 360);
const hub1280 = await probe(HUB, 1280);
const pc360 = await probe(PIECE, 360);
const pc1280 = await probe(PIECE, 1280);

await browser.close();
server.close();

// 5 + 6 — headline width
const lanePx = parseFloat(hub1280.lane) || 0;
line(5, 'hub headline scrollWidth <= lane width at 1280',
  hub1280.headline.scrollWidth <= lanePx ? 'PASS' : 'FAIL',
  `scrollWidth ${hub1280.headline.scrollWidth}px, lane ${lanePx}px (--lane-page), font ${hub1280.headline.fontSize}, text-wrap ${hub1280.headline.textWrap}, ${hub1280.headline.brCount} <br>`,
  'dist/index.html .hub-hero-headline @1280');
line(6, 'hub headline scrollWidth <= viewport at 360',
  hub360.headline.scrollWidth <= 360 ? 'PASS' : 'FAIL',
  `scrollWidth ${hub360.headline.scrollWidth}px, viewport 360px, font ${hub360.headline.fontSize}, text-wrap ${hub360.headline.textWrap}, ${hub360.headline.brCount} <br>`,
  'dist/index.html .hub-hero-headline @360');

// 7 — nav at 360
const navOk = hub360.nav.visible && /Alterrell/.test(hub360.nav.brand || '') && hub360.nav.links.some((t) => /All pieces/i.test(t));
line(7, 'nav visible at 360, wordmark and All pieces both present', navOk ? 'PASS' : 'FAIL',
  `visible ${hub360.nav.visible}, height ${hub360.nav.height}px, wordmark "${hub360.nav.brand}", links [${hub360.nav.links.join(' | ')}]`,
  'dist/index.html .ai-nav @360');

// 8 — tap targets at 360
const taps = [...hub360.taps.small.map((s) => 'hub: ' + s), ...pc360.taps.small.map((s) => 'piece: ' + s)];
line(8, 'every tappable target >= 44px at 360', taps.length === 0 ? 'PASS' : 'FAIL',
  `hub ${hub360.taps.considered} considered / piece ${pc360.taps.considered} considered; ` +
  `excluded: ${hub360.taps.skippedHiddenParent + pc360.taps.skippedHiddenParent} overflow-x hidden parent, ` +
  `${hub360.taps.skippedInline + pc360.taps.skippedInline} inline link in p/li (check.js G3); ` +
  (taps.length ? 'under 44: ' + taps.join('; ') : '0 under 44px'),
  'dist/index.html + dist/pieces/concert-tax/index.html @360');

// 9 — body font size
const fs9 = [hub360.bodyFontSize, hub1280.bodyFontSize, pc360.bodyFontSize, pc1280.bodyFontSize];
line(9, 'computed body font-size >= 16px at both widths', fs9.every((v) => v >= 16) ? 'PASS' : 'FAIL',
  `hub ${hub360.bodyFontSize}px @360 / ${hub1280.bodyFontSize}px @1280; piece ${pc360.bodyFontSize}px @360 / ${pc1280.bodyFontSize}px @1280`,
  'computed style on <body>');

// 12 — DOM order on the piece
line(12, 'journey block precedes the tab bar in DOM order on the piece',
  pc1280.order === 'journey before tabs' ? 'PASS' : 'FAIL',
  pc1280.order ?? 'journey or tab bar absent', 'dist/pieces/concert-tax/index.html');

// 13 — hub card hrefs resolve
const unresolved = [];
for (const href of hub1280.cardHrefs) {
  const rel = href.replace(/^\//, '');
  const target = path.join(root, rel, rel.endsWith('/') || rel === '' ? 'index.html' : '');
  const candidate = fs.existsSync(target) ? target : path.join(root, rel);
  if (!fs.existsSync(candidate)) unresolved.push(href);
}
line(13, 'every card that HAS an href resolves to a file present in dist',
  unresolved.length === 0 ? 'PASS' : 'FAIL',
  `${hub1280.cardCount} card(s), ${hub1280.cardHrefs.length} with href: ${hub1280.cardHrefs.join(', ') || 'none'}` +
  (unresolved.length ? ' — unresolved: ' + unresolved.join(', ') : ' — all resolve'),
  'dist/index.html a.hub-card');

// 14 — h3 contrast (report)
const allH3 = [...pc360.h3s, ...pc1280.h3s];
const worst = allH3.length ? Math.min(...allH3.map((h) => h.ratio)) : null;
const combos = [...new Set(allH3.map((h) => `${h.fg} on ${h.bg} (${h.bgFrom}) = ${h.ratio}:1`))];
line(14, 'h3 contrast >= 4.5:1 on every background it renders on',
  allH3.length === 0 ? 'NOT RUN' : (worst >= 4.5 ? 'PASS' : 'FAIL'),
  allH3.length ? `${pc1280.h3s.length} h3 on the piece; distinct fg/bg pairs: ${combos.join(' | ')}; worst ${worst}:1` : 'no h3 found',
  'computed colours in dist/pieces/concert-tax/index.html, WCAG 2.1 relative luminance, computed here (render-readout.mjs does not compute contrast)');

// 15 — markers (report)
const markerLines = [];
let ctCount = 0;
for (const needle of MARKERS) {
  const files = markerFiles[needle] || {};
  const total = Object.values(files).reduce((a, b) => a + b, 0);
  markerLines.push(`"${needle}": ${total} total` + (total ? ' — ' + Object.entries(files).map(([f, c]) => `${f} ${c}`).join(', ') : ''));
  if (needle === MARKERS[0]) ctCount = files['./src/content/pieces/concert-tax.mdx'] || 0;
}
line(15, `count of ${MARKERS[0]} and of ${MARKERS[1]}, listed by file`,
  ctCount > 0 ? 'REPORT' : 'FAIL (grep is wrong — concert-tax.mdx cannot be clean)',
  markerLines.join(' || '), 'repo-wide grep, node_modules/.git/dist excluded');

// ------------------------------------------------------------------- print
R.sort((a, b) => a.n - b.n);
let text = 'ACCEPTANCE LIST — hub rewrite, ' + new Date().toISOString().slice(0, 10) + '\n';
for (const r of R) {
  text += `\n${String(r.n).padStart(2)}  ${r.verdict}  ${r.label}\n      value:  ${r.value}\n      source: ${r.source}\n`;
}
const gates = R.filter((r) => r.n <= 13 || r.n === 16);
const failed = gates.filter((r) => r.verdict !== 'PASS');
text += `\nGATES (1-13, 16): ${gates.length + 1} lines, ${failed.length} FAIL\n`;
if (failed.length) text += 'FAILING: ' + failed.map((r) => r.n).join(', ') + '\n';
console.log(text);
fs.mkdirSync('../alterrell-hq/reports', { recursive: true });
fs.writeFileSync('../alterrell-hq/reports/2026-08-13-hub-rewrite-acceptance.txt', text);
