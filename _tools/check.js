#!/usr/bin/env node
/*
 * check.js - platform conformance instrument for alterrell-interactive-public.
 *
 * Opens every piece in real Chromium at three viewport widths and evaluates
 * structure, duplication, and geometry rules against the live DOM.
 *
 * READ ONLY. This tool never writes to a piece file or to the stylesheet.
 * Its only writes are PNG screenshots under reports/shots/ and a JSON dump.
 *
 *   node check.js [--json <path>] [--no-shots]
 */

const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');

const REPO = path.resolve(__dirname, '..');
const PLATFORM_CSS = path.join(REPO, 'alterrell-interactive.css');
// Screenshots are binaries and never belong in the public piece repo.
// They live in alterrell-hq, the sibling checkout. Override with --shots.
const HQ = path.resolve(REPO, '..', 'alterrell-hq');
const DEFAULT_SHOTS_DIR = path.join(HQ, 'reports', 'shots');
const WIDTHS = [
  { w: 360, h: 780 },
  { w: 768, h: 1024 },
  { w: 1280, h: 900 },
];
const STRUCTURE_WIDTH = 1280;
const TOL = 1; // px tolerance for subpixel rounding

const args = process.argv.slice(2);
const jsonOut = argValue('--json') || path.join(__dirname, 'results.json');
const SHOTS_DIR = argValue('--shots') || DEFAULT_SHOTS_DIR;
const takeShots = !args.includes('--no-shots');

function argValue(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : null;
}

/* ------------------------------------------------------------------ *
 * 1. Discovery
 * ------------------------------------------------------------------ */

const EXCLUDED_DIRS = new Set(['node_modules', '.git', '_tools', 'old']);

function discover(dir, rel = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      if (relPath === '_data/archive') continue;
      out.push(...discover(path.join(dir, entry.name), relPath));
    } else if (entry.isFile()) {
      if (entry.name === 'index.html' || entry.name.endsWith('.new.html')) {
        out.push(relPath);
      }
    }
  }
  return out;
}

/* Static server. Pieces reference root-absolute assets (/_data/config.js),
 * which only resolve over http, not file://. */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.csv': 'text/csv',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

function serveRepo() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let file = path.join(REPO, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
      if (!file.startsWith(REPO)) {
        res.writeHead(403).end('forbidden');
        return;
      }
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
        file = path.join(file, 'index.html');
      }
      if (!fs.existsSync(file)) {
        res.writeHead(404, { 'content-type': 'text/plain' }).end('not found');
        return;
      }
      res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

function slugFor(relPath) {
  const s = relPath.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  return s === 'index.html' || s === '' ? 'root' : s.replace(/\//g, '-');
}

/* ------------------------------------------------------------------ *
 * 2. CSS selector extraction (for D1)
 * ------------------------------------------------------------------ */

const NESTED_AT_RULES = /^@(media|supports|layer|container|scope|document)\b/i;

// Brace-walking selector extractor. Descends into conditional at-rules,
// skips the bodies of @keyframes / @font-face / etc.
function extractSelectors(css) {
  const text = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const found = new Set();
  let prelude = '';
  let depth = 0;
  const skipStack = []; // true == inside a block whose selectors do not count

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') {
      const p = prelude.trim();
      let skip;
      if (p.startsWith('@')) {
        // Conditional at-rules wrap real rules; everything else does not.
        skip = !NESTED_AT_RULES.test(p);
      } else {
        skip = skipStack.some(Boolean);
        if (!skip && p) {
          for (const sel of splitSelectorList(p)) found.add(sel);
        }
        skip = true; // declaration block: ignore anything inside
      }
      skipStack.push(skip);
      depth++;
      prelude = '';
    } else if (ch === '}') {
      skipStack.pop();
      depth = Math.max(0, depth - 1);
      prelude = '';
    } else if (ch === ';' && depth === 0) {
      prelude = ''; // @import / @charset
    } else {
      prelude += ch;
    }
  }
  return found;
}

// Split on top-level commas only (commas inside :is(), [attr=","] are safe).
function splitSelectorList(prelude) {
  const parts = [];
  let cur = '';
  let paren = 0;
  let quote = null;
  for (const ch of prelude) {
    if (quote) {
      cur += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '(' || ch === '[') paren++;
    if (ch === ')' || ch === ']') paren--;
    if (ch === ',' && paren === 0) { parts.push(cur); cur = ''; continue; }
    cur += ch;
  }
  parts.push(cur);
  return parts
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .filter((s) => s.length > 0 && !s.startsWith('@'));
}

/* ------------------------------------------------------------------ *
 * 3. In-page evaluation
 * ------------------------------------------------------------------ */

// Serialised into the browser. Returns raw measurements; PASS/FAIL is
// decided in Node so the rule logic stays in one readable place.
function collect(TOL) {
  const cssPath = (el) => {
    if (!el || el.nodeType !== 1) return '(none)';
    if (el === document.body) return 'body';
    if (el === document.documentElement) return 'html';
    let s = el.tagName.toLowerCase();
    if (el.id) return `${s}#${el.id}`;
    const cls = (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean);
    if (cls.length) s += '.' + cls.slice(0, 3).join('.');
    const parent = el.parentElement;
    if (parent) {
      const sibs = [...parent.children].filter((c) => c.tagName === el.tagName);
      if (sibs.length > 1) s += `:nth-of-type(${sibs.indexOf(el) + 1})`;
    }
    return s;
  };

  const rendered = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 || r.height > 0;
  };

  const all = [...document.querySelectorAll('*')];
  const tabs = [...document.querySelectorAll('[role=tab]')];
  const tablists = [...document.querySelectorAll('[role=tablist]')];
  const panels = [...document.querySelectorAll('[role=tabpanel]')];

  // Primary tab bar: first tablist in document order that actually holds tabs.
  const primary = tablists.find((tl) => tl.querySelector('[role=tab]')) || null;
  const primaryTabs = primary ? [...primary.querySelectorAll('[role=tab]')] : [];

  /* ---------- structure ---------- */
  const linkEls = [...document.querySelectorAll('link[rel~=stylesheet]')];
  const bblEls = all.filter((el) =>
    (el.getAttribute('class') || '').split(/\s+/).some((c) => c.startsWith('bbl-'))
  );

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const placeholders = [];
  let node;
  while ((node = walker.nextNode())) {
    const t = node.nodeValue || '';
    if (t.includes('[[PLACEHOLDER') || t.includes('[AMA ')) {
      placeholders.push({
        selector: cssPath(node.parentElement),
        value: t.trim().slice(0, 90),
      });
    }
  }

  const breadcrumb = document.querySelector('.ai-breadcrumb');
  const nav = document.querySelector('.ai-nav');
  let breadcrumbOrder = null;
  if (breadcrumb && nav) {
    const pos = breadcrumb.compareDocumentPosition(nav);
    breadcrumbOrder = !!(pos & Node.DOCUMENT_POSITION_FOLLOWING);
  }

  const structure = {
    bodyClasses: [...document.body.classList],
    hasBreadcrumbEl: !!breadcrumb,
    hasNavEl: !!nav,
    breadcrumbBeforeNav: breadcrumbOrder,
    tablistCount: tablists.length,
    tablistSelectors: tablists.map(cssPath),
    tabCount: tabs.length,
    panelCount: panels.length,
    badDataTarget: tabs
      .filter((t) => !t.dataset.target || t.dataset.target.startsWith('#'))
      .map((t) => ({ selector: cssPath(t), value: t.dataset.target ?? '(absent)' })),
    badAriaControls: tabs
      .filter((t) => {
        const ac = t.getAttribute('aria-controls');
        return !ac || !document.getElementById(ac);
      })
      .map((t) => ({
        selector: cssPath(t),
        value: t.getAttribute('aria-controls') ?? '(absent)',
      })),
    orphanPanels: panels
      .filter((p) => !tabs.some((t) => t.getAttribute('aria-controls') === p.id || t.dataset.target === p.id))
      .map((p) => ({ selector: cssPath(p), value: p.id || '(no id)' })),
    firstTabText: primaryTabs.length ? primaryTabs[0].textContent.trim() : null,
    lastTabText: primaryTabs.length ? primaryTabs[primaryTabs.length - 1].textContent.trim() : null,
    bblEls: bblEls.slice(0, 20).map((el) => ({
      selector: cssPath(el),
      value: el.getAttribute('class'),
    })),
    bblCount: bblEls.length,
    stylesheetHrefs: linkEls.map((l) => l.getAttribute('href')),
    placeholders,
    inlineStyleText: [...document.querySelectorAll('style')].map((s) => s.textContent).join('\n'),
  };

  /* ---------- G1: horizontal overflow past parent ---------- */
  const g1 = { real: [], scrollableParent: [] };
  for (const el of all) {
    const parent = el.parentElement;
    if (!parent || parent === document.documentElement) continue;
    if (!rendered(el)) continue;
    if (el.scrollWidth <= parent.clientWidth + TOL) continue;
    const ox = getComputedStyle(parent).overflowX;
    const rec = {
      selector: cssPath(el),
      parent: cssPath(parent),
      value: `scrollWidth ${el.scrollWidth} > parent clientWidth ${parent.clientWidth}`,
      overflowX: ox,
    };
    if (ox === 'auto' || ox === 'scroll') g1.scrollableParent.push(rec);
    else g1.real.push(rec);
  }

  /* ---------- G2: silent vertical clipping on a fixed height ---------- */
  const g2 = [];
  for (const el of all) {
    if (!rendered(el)) continue;
    if (el.scrollHeight <= el.clientHeight + TOL) continue;
    const cs = getComputedStyle(el);
    const heightIsFixed = cs.height !== 'auto' && /px$/.test(cs.height);
    const capped = heightIsFixed || (cs.maxHeight !== 'none' && /px|%/.test(cs.maxHeight));
    if (!capped) continue;
    const silent = cs.overflowY === 'hidden' || cs.overflowY === 'clip';
    if (!silent) continue;
    if (!el.textContent.trim()) continue;
    g2.push({
      selector: cssPath(el),
      value: `scrollHeight ${el.scrollHeight} > clientHeight ${el.clientHeight} (height ${cs.height}, max-height ${cs.maxHeight}, overflow-y ${cs.overflowY})`,
    });
  }

  /* ---------- G3: 44x44 minimum target ---------- */
  const g3 = { inline: [], control: [] };
  const targets = [...document.querySelectorAll('button, a, input')];
  let g3Considered = 0;
  for (const el of targets) {
    if (!rendered(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden') continue;
    if (el.tagName === 'INPUT' && el.type === 'hidden') continue;
    g3Considered++;
    const r = el.getBoundingClientRect();
    if (r.width >= 44 - TOL && r.height >= 44 - TOL) continue;
    const isInlineText =
      el.tagName === 'A' &&
      cs.display.startsWith('inline') &&
      !!el.closest('p, li, td, figcaption, blockquote');
    const rec = {
      selector: cssPath(el),
      value: `${r.width.toFixed(1)}x${r.height.toFixed(1)}`,
      text: el.textContent.trim().slice(0, 40),
    };
    (isInlineText ? g3.inline : g3.control).push(rec);
  }

  /* ---------- G4: tabs outside a non-scrollable tab bar ---------- */
  const g4 = [];
  for (const tab of tabs) {
    const tl = tab.closest('[role=tablist]');
    if (!tl || !rendered(tab) || !rendered(tl)) continue;
    const tr = tab.getBoundingClientRect();
    const lr = tl.getBoundingClientRect();
    const outside =
      tr.right <= lr.left + TOL ||
      tr.left >= lr.right - TOL ||
      tr.bottom <= lr.top + TOL ||
      tr.top >= lr.bottom - TOL;
    if (!outside) continue;
    const ox = getComputedStyle(tl).overflowX;
    const scrollable = (ox === 'auto' || ox === 'scroll') && tl.scrollWidth > tl.clientWidth + TOL;
    if (scrollable) continue;
    g4.push({
      selector: cssPath(tab),
      value: `tab [${tr.left.toFixed(0)},${tr.right.toFixed(0)}] outside tablist [${lr.left.toFixed(0)},${lr.right.toFixed(0)}] overflow-x:${ox}`,
      text: tab.textContent.trim().slice(0, 30),
    });
  }

  /* ---------- G5: widest paragraph ---------- */
  let widest = null;
  for (const p of document.querySelectorAll('p')) {
    if (!rendered(p)) continue;
    const text = p.textContent.replace(/\s+/g, ' ').trim();
    if (!text) continue;
    const w = p.getBoundingClientRect().width;
    if (!widest || w > widest.widthPx) {
      widest = { widthPx: Math.round(w), chars: text.length, selector: cssPath(p) };
    }
  }

  /* ---------- G6: tab bar offset from top of document ---------- */
  let tabBarOffset = null;
  if (primary && rendered(primary)) {
    tabBarOffset = Math.round(primary.getBoundingClientRect().top + window.scrollY);
  }

  return {
    structure,
    g1,
    g2,
    g3,
    g3Considered,
    g4,
    g5: widest,
    g6: tabBarOffset,
    docHeight: document.documentElement.scrollHeight,
  };
}

/* ------------------------------------------------------------------ *
 * 4. Rule evaluation
 * ------------------------------------------------------------------ */

const P = (note = '') => ({ status: 'PASS', note });
const F = (note, offenders = []) => ({ status: 'FAIL', note, offenders });
const NA = (note) => ({ status: 'NA', note });

function fmt(list, n = 5) {
  return list.slice(0, n).map((o) => `\`${o.selector}\` — ${o.value}`);
}

function evalStructure(d, relPath) {
  const s = d.structure;
  const r = {};

  r.S1 = s.bodyClasses.includes('has-breadcrumb')
    ? P()
    : F(`body class="${s.bodyClasses.join(' ') || '(none)'}"`);

  if (!s.hasBreadcrumbEl || !s.hasNavEl) {
    r.S2 = F(
      `missing ${!s.hasBreadcrumbEl ? '.ai-breadcrumb' : ''}${!s.hasBreadcrumbEl && !s.hasNavEl ? ' and ' : ''}${!s.hasNavEl ? '.ai-nav' : ''}`
    );
  } else {
    r.S2 = s.breadcrumbBeforeNav ? P() : F('.ai-nav precedes .ai-breadcrumb');
  }

  r.S3 =
    s.tablistCount === 1
      ? P()
      : F(`${s.tablistCount} tablists`, s.tablistSelectors.map((sel) => ({ selector: sel, value: 'role=tablist' })));

  if (s.tabCount === 0) {
    r.S4 = NA('no tabs');
    r.S5 = NA('no tabs');
    r.S7 = NA('no tabs');
    r.S8 = NA('no tabs');
  } else {
    r.S4 = s.badDataTarget.length === 0 ? P() : F(`${s.badDataTarget.length} bad data-target`, s.badDataTarget);
    r.S5 = s.badAriaControls.length === 0 ? P() : F(`${s.badAriaControls.length} unresolved aria-controls`, s.badAriaControls);
    r.S7 = s.firstTabText === 'Overview' ? P() : F(`first tab is "${s.firstTabText}"`);
    r.S8 = s.lastTabText === 'Sources' ? P() : F(`last tab is "${s.lastTabText}"`);
  }

  r.S6 =
    s.panelCount === 0
      ? NA('no tabpanels')
      : s.orphanPanels.length === 0
        ? P()
        : F(`${s.orphanPanels.length} orphan panels`, s.orphanPanels);

  r.S9 = s.bblCount === 0 ? P() : F(`${s.bblCount} bbl- elements`, s.bblEls);

  const linksCss = s.stylesheetHrefs.some((h) => h && h.includes('alterrell-interactive.css'));
  r.S10 = linksCss ? P() : F(`stylesheets: ${s.stylesheetHrefs.join(', ') || '(none)'}`);

  r.S11 =
    s.placeholders.length === 0
      ? P()
      : F(`${s.placeholders.length} placeholder strings`, s.placeholders);

  return r;
}

function evalGeometry(d) {
  const r = {};

  r.G1 =
    d.g1.real.length === 0
      ? P(d.g1.scrollableParent.length ? `${d.g1.scrollableParent.length} in scrollable parents (excluded)` : '')
      : F(`${d.g1.real.length} overflowing`, d.g1.real);

  r.G2 = d.g2.length === 0 ? P() : F(`${d.g2.length} clipped`, d.g2);

  const g3Total = d.g3.inline.length + d.g3.control.length;
  r.G3 =
    d.g3Considered === 0
      ? NA('no interactive elements rendered')
      : g3Total === 0
        ? P()
        : F(
            `${g3Total}/${d.g3Considered} under 44x44 (${d.g3.control.length} controls, ${d.g3.inline.length} inline text links)`,
            [...d.g3.control, ...d.g3.inline]
          );

  r.G4 =
    d.structure.tabCount === 0
      ? NA('no tabs')
      : d.g4.length === 0
        ? P()
        : F(`${d.g4.length} tabs out of bounds`, d.g4);

  return r;
}

/* ------------------------------------------------------------------ *
 * 5. Driver
 * ------------------------------------------------------------------ */

(async () => {
  if (!fs.existsSync(PLATFORM_CSS)) {
    console.error(`FATAL: ${PLATFORM_CSS} not found`);
    process.exit(1);
  }

  const pieces = discover(REPO).sort();
  if (!pieces.length) {
    console.error('FATAL: no pieces discovered');
    process.exit(1);
  }
  console.log(`Discovered ${pieces.length} pieces:`);
  pieces.forEach((p) => console.log(`  ${p}`));

  const platformSelectors = extractSelectors(fs.readFileSync(PLATFORM_CSS, 'utf8'));
  console.log(`\nPlatform stylesheet: ${platformSelectors.size} distinct selectors\n`);

  if (takeShots) fs.mkdirSync(SHOTS_DIR, { recursive: true });

  const { server, port } = await serveRepo();
  console.log(`Serving repo at http://127.0.0.1:${port}\n`);
  const browser = await chromium.launch();
  const results = {
    generated: new Date().toISOString(),
    repo: REPO,
    widths: WIDTHS.map((v) => v.w),
    platformSelectorCount: platformSelectors.size,
    pieces: [],
  };

  for (const rel of pieces) {
    const slug = slugFor(rel);
    const url = `http://127.0.0.1:${port}/${rel}`;
    const piece = { path: rel, slug, widths: {}, structure: null, d1: null, errors: [] };
    console.log(`\n=== ${rel} (${slug})`);

    for (const { w, h } of WIDTHS) {
      const ctx = await browser.newContext({
        viewport: { width: w, height: h },
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      const failedReqs = [];
      page.on('requestfailed', (req) => failedReqs.push(req.url()));
      page.on('pageerror', (err) => piece.errors.push(`[${w}] pageerror: ${err.message}`));

      try {
        await page.goto(url, { waitUntil: 'load', timeout: 45000 });
        await page.waitForTimeout(1200); // let tab/carousel init settle
        const data = await page.evaluate(collect, TOL);

        piece.widths[w] = {
          geometry: evalGeometry(data),
          g5: data.g5,
          g6: data.g6,
          docHeight: data.docHeight,
          failedRequests: failedReqs.filter((u) => !u.startsWith('data:')),
        };

        if (w === STRUCTURE_WIDTH) {
          piece.structure = evalStructure(data, rel);
          const inline = extractSelectors(data.structure.inlineStyleText);
          const shared = [...inline].filter((sel) => platformSelectors.has(sel)).sort();
          piece.d1 = {
            inlineSelectorCount: inline.size,
            duplicateCount: shared.length,
            duplicates: shared,
          };
        }

        if (takeShots) {
          await page.screenshot({
            path: path.join(SHOTS_DIR, `${slug}-${w}.png`),
            fullPage: true,
          });
        }
        console.log(`  ${w}px  ok`);
      } catch (err) {
        piece.errors.push(`[${w}] ${err.message}`);
        console.log(`  ${w}px  ERROR ${err.message.split('\n')[0]}`);
      } finally {
        await ctx.close();
      }
    }
    results.pieces.push(piece);
  }

  await browser.close();
  server.close();

  // Summary
  let fails = 0;
  const byRule = {};
  for (const piece of results.pieces) {
    const bump = (rule) => {
      fails++;
      byRule[rule] = byRule[rule] || new Set();
      byRule[rule].add(piece.slug);
    };
    for (const [rule, res] of Object.entries(piece.structure || {})) {
      if (res.status === 'FAIL') bump(rule);
    }
    for (const wd of Object.values(piece.widths)) {
      for (const [rule, res] of Object.entries(wd.geometry || {})) {
        if (res.status === 'FAIL') bump(rule);
      }
    }
  }
  results.summary = {
    totalFailCells: fails,
    totalDuplicateSelectors: results.pieces.reduce((n, p) => n + (p.d1 ? p.d1.duplicateCount : 0), 0),
    rulesByPieceCount: Object.entries(byRule)
      .map(([rule, set]) => ({ rule, pieces: set.size, cells: 0 }))
      .sort((a, b) => b.pieces - a.pieces),
  };

  fs.mkdirSync(path.dirname(jsonOut), { recursive: true });
  fs.writeFileSync(jsonOut, JSON.stringify(results, null, 2));
  console.log(`\n--- totals ---`);
  console.log(`FAIL cells: ${results.summary.totalFailCells}`);
  console.log(`D1 duplicate selectors: ${results.summary.totalDuplicateSelectors}`);
  console.log(`Most-failed: ${results.summary.rulesByPieceCount.slice(0, 5).map((r) => `${r.rule}(${r.pieces})`).join(' ')}`);
  console.log(`JSON: ${jsonOut}`);
})();
