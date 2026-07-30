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
const crypto = require('crypto');
const { chromium } = require('playwright');

const REPO = path.resolve(__dirname, '..');
const DIST = path.join(REPO, 'dist');
// Canonical stylesheet moved under src/styles/ in the Astro migration.
// Read-only here; used only to measure D1 duplication.
const PLATFORM_CSS = [
  path.join(REPO, 'src', 'styles', 'alterrell-interactive.css'),
  path.join(REPO, 'alterrell-interactive.css'),
].find((p) => fs.existsSync(p)) || path.join(REPO, 'alterrell-interactive.css');

/* Web root for the harness server.
 *
 * dist/ pages reference their assets root-absolutely (/_astro/...), so when
 * scoring build output the server must be rooted at dist/ — serving from the
 * repo root would 404 every stylesheet and silently turn every geometry and
 * contrast measurement into a measurement of unstyled HTML. */
let SERVE_ROOT = REPO;
// Screenshots are binaries and never belong in the public piece repo.
// They live in alterrell-hq, the sibling checkout. Override with --shots.
const HQ = path.resolve(REPO, '..', 'alterrell-hq');
const DEFAULT_SHOTS_DIR = path.join(HQ, 'reports', 'shots');
// Pinned browser build. Geometry, line breaking, and contrast are only
// comparable across runs of the same engine build, so a mismatch is
// reported loudly rather than silently absorbed.
const PINNED_CHROMIUM = '151.0.7922.34';
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
// --deterministic omits wall-clock and environment-varying fields so two
// runs over an unchanged tree produce byte-identical JSON.
const deterministic = args.includes('--deterministic');
// --file <path> tests one shell directly, bypassing discovery. Needed for
// fixtures and any shell not named index.html.
const singleFile = argValue('--file');
// Source directory scanned by the content family (T7b). Overridable so the
// fixtures can point it at a controlled directory.
const contentDir = path.resolve(argValue('--content-dir') || path.join(REPO, 'src', 'content'));

function argValue(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : null;
}

/* ------------------------------------------------------------------ *
 * 1. Discovery
 * ------------------------------------------------------------------ */

const EXCLUDED_DIRS = new Set(['node_modules', '.git', '_tools', 'old']);

// Discovered, but not pieces. The site hub and the Naming series landing
// page carry no hero/breadcrumb/tab contract, so piece rules cannot be
// scored against them without manufacturing failures.
const NON_PIECE = new Set(['index.html', 'naming/index.html']);

/* Discovery is build output. The instrument scores what ships, not what is
 * authored: an .astro source file is not a page, and a page can fail a rule
 * for reasons no source file shows. Every .html under dist/ is in scope,
 * excluding nothing — including the hub and 404.html. */
function discover(dir, rel = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...discover(path.join(dir, entry.name), relPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(relPath);
    }
  }
  return out;
}

/* Drop anything .gitignore excludes. Build output (dist/) and scratch
 * directories contain index.html files that are not pieces; auditing
 * them reports defects in generated copies of the real thing. Filtering
 * on git rather than a hardcoded list means the checker follows the
 * repo's own definition of what is not source. */
function dropIgnored(relPaths) {
  if (!relPaths.length) return { kept: relPaths, ignored: [] };
  let out = '';
  try {
    out = require('child_process').execSync('git check-ignore --stdin', {
      cwd: REPO,
      input: relPaths.join('\n'),
      encoding: 'utf8',
    });
  } catch (e) {
    // exit 1 simply means nothing matched; anything else is a real error
    if (e.status !== 1) throw e;
    out = e.stdout || '';
  }
  const ignored = new Set(out.split('\n').map((s) => s.trim()).filter(Boolean));
  return { kept: relPaths.filter((p) => !ignored.has(p)), ignored: [...ignored] };
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
      let file = path.join(SERVE_ROOT, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
      if (!file.startsWith(SERVE_ROOT)) {
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

/* === RULE DEFINITIONS BEGIN ===
 * Everything between this marker and RULE DEFINITIONS END is the rule
 * logic: what is measured and what counts as PASS/FAIL. It is hashed
 * (SHA-256, see ruleHash()) and the hash is printed on every run and
 * carried in every report, so a report can be tied to the exact rule
 * text that produced it. Changing anything in this block changes the
 * hash by design. Changing the driver, discovery, or output format
 * below does not. */

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
  const tablists = [...document.querySelectorAll('[role=tablist]')];

  /* The primary tab bar is the piece's `.ai-tabs` container. Carousel dot
   * strips are also role=tablist / role=tab, and correctly so per ARIA —
   * they are slide pickers, not the piece's section navigation. Structure
   * rules S3-S8 describe the section navigation only, so everything
   * outside the primary bar is explicitly out of scope. */
  const TAB_BAR = '.ai-tabs[role=tablist]';
  const primaryBars = [...document.querySelectorAll(TAB_BAR)];
  const primary =
    primaryBars[0] ||
    tablists.find((tl) => !tl.closest('.carousel') && tl.querySelector('[role=tab]')) ||
    null;
  const primaryTabs = primary ? [...primary.querySelectorAll('[role=tab]')] : [];
  const tabs = primaryTabs;

  // Panels belonging to the section navigation, not carousel slides.
  const panels = [...document.querySelectorAll('[role=tabpanel]')].filter(
    (p) => !p.closest('.carousel')
  );

  const outOfScope = tablists
    .filter((tl) => tl !== primary)
    .map((tl) => ({
      selector: cssPath(tl),
      value: `${tl.querySelectorAll('[role=tab]').length} role=tab children`,
      label: tl.getAttribute('aria-label') || '(no aria-label)',
    }));
  const scope = {
    primaryBar: primary ? cssPath(primary) : null,
    primaryBarMatchedBy: primaryBars.length ? TAB_BAR : primary ? 'fallback: non-carousel tablist' : 'none',
    primaryTabCount: primaryTabs.length,
    primaryTabLabels: primaryTabs.map((t) => t.textContent.trim()),
    outOfScope,
    totalTablists: tablists.length,
  };

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
    scope,
    primaryBarCount: primaryBars.length || (primary ? 1 : 0),
    primaryBarSelectors: (primaryBars.length ? primaryBars : primary ? [primary] : []).map(cssPath),
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

  /* ---------- G3: 44x44 minimum target ----------
   * Hard scope boundary. Only real controls are evaluated: button, input,
   * select, textarea, and links that compute to block or inline-block. An
   * inline link inside a p or li inherits its line box and cannot reach
   * 44px tall without breaking the paragraph, so it is not a control and
   * is not evaluated or counted at all. */
  const g3 = { control: [] };
  const targets = [...document.querySelectorAll('button, input, select, textarea, a')];
  let g3Considered = 0;
  let g3SkippedInline = 0;
  for (const el of targets) {
    if (!rendered(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden') continue;
    if (el.tagName === 'INPUT' && el.type === 'hidden') continue;

    if (el.tagName === 'A') {
      const blockish = cs.display === 'block' || cs.display === 'inline-block';
      const inlineInText = !blockish && !!el.closest('p, li');
      if (inlineInText) { g3SkippedInline++; continue; }
      if (!blockish) { g3SkippedInline++; continue; }
    }

    g3Considered++;
    const r = el.getBoundingClientRect();
    if (r.width >= 44 - TOL && r.height >= 44 - TOL) continue;
    g3.control.push({
      selector: cssPath(el),
      value: `${r.width.toFixed(1)}x${r.height.toFixed(1)}`,
      text: el.textContent.trim().slice(0, 40),
    });
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

  /* ---------- G5: widest paragraph, measured per LINE ----------
   * Total paragraph length is width-invariant and therefore useless as a
   * measure. What matters for readability is characters per rendered line.
   * Range.getClientRects() returns one rect per line box, so grouping
   * rects by their top edge gives a true rendered line count. */
  const lineMetrics = (p) => {
    const text = p.textContent.replace(/\s+/g, ' ').trim();
    if (!text) return null;
    const range = document.createRange();
    range.selectNodeContents(p);
    const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
    if (!rects.length) return null;
    const tops = new Set(rects.map((r) => Math.round(r.top)));
    const lines = Math.max(1, tops.size);
    const widestLine = Math.max(...rects.map((r) => r.width));
    return {
      widthPx: Math.round(p.getBoundingClientRect().width),
      widestLinePx: Math.round(widestLine),
      chars: text.length,
      lines,
      charsPerLine: Math.round(text.length / lines),
      selector: cssPath(p),
    };
  };

  let widest = null;   // widest rendered paragraph box (the spec's target)
  let longestLine = null; // highest chars-per-line anywhere on the page
  for (const p of document.querySelectorAll('p')) {
    if (!rendered(p)) continue;
    const m = lineMetrics(p);
    if (!m) continue;
    if (!widest || m.widthPx > widest.widthPx) widest = m;
    if (!longestLine || m.charsPerLine > longestLine.charsPerLine) longestLine = m;
  }

  /* ---------- G7: WCAG contrast on headings and paragraphs ----------
   * Composites alpha correctly and walks ancestors for the first opaque
   * background. Where a background-image or gradient is in play the true
   * backdrop is not computable from styles alone, so the element is
   * reported as UNKNOWN rather than guessed at. */
  const parseColor = (str) => {
    const m = String(str).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    const [r, g, b] = parts;
    const a = parts.length > 3 ? parts[3] : 1;
    return { r, g, b, a };
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };

  const backdrop = (el) => {
    let layers = [];
    let node = el;
    let image = null;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== 'none' && !image) {
        image = { selector: cssPath(node), value: cs.backgroundImage.slice(0, 60) };
      }
      const c = parseColor(cs.backgroundColor);
      if (c && c.a > 0) {
        layers.push(c);
        if (c.a >= 1) break;
      }
      node = node.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
    return { color: base, image };
  };

  const g7 = { fails: [], unknown: [], considered: 0 };
  for (const el of document.querySelectorAll('h1, h2, h3, h4, h5, h6, p')) {
    if (!rendered(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    // Only elements holding their own visible text.
    const own = [...el.childNodes]
      .filter((n) => n.nodeType === 3)
      .map((n) => n.nodeValue.trim())
      .join('');
    if (!own) continue;
    const fg = parseColor(cs.color);
    if (!fg) continue;
    g7.considered++;

    const bd = backdrop(el);
    const fgOn = fg.a < 1 ? over(fg, bd.color) : fg;
    const cr = ratio(fgOn, bd.color);
    const size = parseFloat(cs.fontSize);
    const required = size >= 24 ? 3 : 4.5;

    const rec = {
      selector: cssPath(el),
      value: `${cr.toFixed(2)}:1 (need ${required}:1) — ${cs.color} on rgb(${Math.round(bd.color.r)}, ${Math.round(bd.color.g)}, ${Math.round(bd.color.b)}) at ${size}px`,
      text: own.slice(0, 40),
      ratio: Number(cr.toFixed(2)),
      required,
    };
    if (bd.image) {
      rec.value += ` [background-image on ${bd.image.selector}, backdrop not computable]`;
      g7.unknown.push(rec);
      continue;
    }
    if (cr < required) g7.fails.push(rec);
  }
  g7.fails.sort((a, b) => a.ratio - b.ratio);

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
    g3SkippedInline,
    g4,
    g5: widest,
    g5LongestLine: longestLine,
    g6: tabBarOffset,
    g7,
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

  // Scoped: exactly one primary tab bar. Carousel dot strips are excluded.
  const oos = s.scope.outOfScope.length;
  r.S3 =
    s.primaryBarCount === 1
      ? P(oos ? `${oos} carousel tablist(s) out of scope` : '')
      : F(
          `${s.primaryBarCount} primary tab bars${oos ? ` (+${oos} carousel tablists, out of scope)` : ''}`,
          s.primaryBarSelectors.map((sel) => ({ selector: sel, value: 'primary tab bar' }))
        );

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

  r.G3 =
    d.g3Considered === 0
      ? NA('no controls in scope')
      : d.g3.control.length === 0
        ? P(`${d.g3Considered} controls checked, ${d.g3SkippedInline} inline links out of scope`)
        : F(
            `${d.g3.control.length}/${d.g3Considered} controls under 44x44 (${d.g3SkippedInline} inline links out of scope)`,
            d.g3.control
          );

  r.G4 =
    d.structure.tabCount === 0
      ? NA('no tabs')
      : d.g4.length === 0
        ? P()
        : F(`${d.g4.length} tabs out of bounds`, d.g4);

  r.G7 =
    d.g7.considered === 0
      ? NA('no text elements')
      : d.g7.fails.length === 0
        ? P(d.g7.unknown.length ? `${d.g7.unknown.length} not computable (background-image)` : '')
        : F(
            `${d.g7.fails.length}/${d.g7.considered} below WCAG minimum${d.g7.unknown.length ? `, ${d.g7.unknown.length} not computable` : ''}`,
            d.g7.fails
          );

  return r;
}

/* ---------- content family ----------
 *
 * T7b: no content file under src/content/ contains a <style> block.
 *
 * A source rule, not a DOM rule. It is evaluated once per run against the
 * content directory rather than per page, because by the time a piece is
 * rendered a piece-local <style> block is indistinguishable from platform
 * CSS — the defect is only visible in the source. Content files carry copy;
 * styling belongs to the canonical stylesheet, which is read-only, so a
 * <style> block in an .mdx is how the canonical CSS gets forked in practice.
 */
function evalContent(contentDir) {
  if (!fs.existsSync(contentDir)) {
    return { T7b: NA(`no content directory at ${contentDir}`) };
  }
  const files = [];
  (function walk(d, rel = '') {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) walk(path.join(d, e.name), r);
      else if (/\.mdx?$/.test(e.name)) files.push({ rel: r, full: path.join(d, e.name) });
    }
  })(contentDir);

  if (!files.length) return { T7b: NA('no .md/.mdx content files') };

  const offenders = [];
  for (const f of files) {
    const text = fs.readFileSync(f.full, 'utf8');
    const hits = [...text.matchAll(/<style[\s>]/gi)];
    if (hits.length) {
      const line = text.slice(0, hits[0].index).split('\n').length;
      offenders.push({
        selector: f.rel,
        value: `${hits.length} <style> block(s), first at line ${line}`,
      });
    }
  }
  return {
    T7b:
      offenders.length === 0
        ? P(`${files.length} content files clean`)
        : F(`${offenders.length}/${files.length} content files carry a <style> block`, offenders),
  };
}

/* === RULE DEFINITIONS END === */

/* ------------------------------------------------------------------ *
 * 4b. Rule hash + font vendoring
 * ------------------------------------------------------------------ */

// SHA-256 over the rule-definition block only. Normalises line endings
// so the hash does not depend on checkout settings.
function ruleHash() {
  const src = fs.readFileSync(__filename, 'utf8').replace(/\r\n/g, '\n');
  const b = src.indexOf('/* === RULE DEFINITIONS BEGIN ===');
  const e = src.indexOf('/* === RULE DEFINITIONS END === */');
  if (b < 0 || e < 0) throw new Error('rule-definition markers not found');
  return crypto.createHash('sha256').update(src.slice(b, e), 'utf8').digest('hex');
}

const FONTS_DIR = path.join(__dirname, 'fonts');

/* Serve the vendored webfonts instead of letting the page reach the
 * network. Text geometry (G1, G3, G5, G7 line boxes) is meaningless if
 * the font that rendered it was a fallback because a CDN was slow. */
async function routeFonts(page) {
  const cssPath = path.join(FONTS_DIR, 'fonts.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error(`vendored fonts missing at ${FONTS_DIR} — run: node fetch-fonts.js`);
  }
  const css = fs.readFileSync(cssPath, 'utf8');
  await page.route('https://fonts.googleapis.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/css; charset=utf-8', body: css })
  );
  await page.route('https://fonts.gstatic.com/**', (route) => {
    const file = path.join(FONTS_DIR, 'woff2', path.basename(new URL(route.request().url()).pathname));
    if (!fs.existsSync(file)) return route.abort();
    return route.fulfill({ status: 200, contentType: 'font/woff2', body: fs.readFileSync(file) });
  });
}

/* ------------------------------------------------------------------ *
 * 5. Driver
 * ------------------------------------------------------------------ */

(async () => {
  if (!fs.existsSync(PLATFORM_CSS)) {
    console.error(`FATAL: ${PLATFORM_CSS} not found`);
    process.exit(1);
  }

  const RULE_HASH = ruleHash();
  const onlyWidth = argValue('--width') ? Number(argValue('--width')) : null;
  let pieces, excludedPieces = [];

  if (singleFile) {
    // Bypass discovery entirely. Path may be absolute or relative to cwd;
    // it is converted to a repo-relative path so the static server can
    // reach it and relative asset paths still resolve.
    const abs = path.resolve(singleFile);
    if (!fs.existsSync(abs)) {
      console.error(`FATAL: --file not found: ${abs}`);
      process.exit(1);
    }
    if (!abs.startsWith(REPO + path.sep)) {
      console.error(`FATAL: --file must live inside ${REPO}`);
      process.exit(1);
    }
    // --file serves from the repo root, so a target anywhere in the tree
    // (fixtures, scratch, a single dist page) resolves its assets.
    SERVE_ROOT = REPO;
    // A directory is accepted too: every .html directly inside it is
    // tested. The fixture meta-test uses this to run one browser instead
    // of one per fixture.
    if (fs.statSync(abs).isDirectory()) {
      pieces = fs
        .readdirSync(abs)
        .filter((f) => f.endsWith('.html'))
        .sort()
        .map((f) => path.relative(REPO, path.join(abs, f)).split(path.sep).join('/'));
      if (!pieces.length) {
        console.error(`FATAL: no .html files in ${abs}`);
        process.exit(1);
      }
      console.log(`Directory (discovery bypassed), ${pieces.length} files:`);
      pieces.forEach((p) => console.log(`  + ${p}`));
    } else {
      pieces = [path.relative(REPO, abs).split(path.sep).join('/')];
      console.log(`Single file (discovery bypassed):\n  + ${pieces[0]}`);
    }
  } else {
    if (!fs.existsSync(DIST)) {
      console.error(`FATAL: no build output at ${DIST}. Run: npm run build`);
      process.exit(1);
    }
    // Serve dist/ as the web root so its root-absolute /_astro/ asset paths
    // resolve exactly as they will in production.
    SERVE_ROOT = DIST;
    const only = argValue('--only');
    pieces = discover(DIST).sort();
    if (only) pieces = pieces.filter((p) => p.includes(only));
    if (!pieces.length) {
      console.error(`FATAL: no .html found under ${DIST}`);
      process.exit(1);
    }
    console.log(`Build output (${pieces.length} pages, nothing excluded):`);
    pieces.forEach((p) => console.log(`  + dist/${p}`));
  }
  console.log(`\nRule hash (SHA-256 of rule-definition block):\n  ${RULE_HASH}`);

  const platformSelectors = extractSelectors(fs.readFileSync(PLATFORM_CSS, 'utf8'));
  console.log(`\nPlatform stylesheet: ${platformSelectors.size} distinct selectors\n`);

  if (takeShots) fs.mkdirSync(SHOTS_DIR, { recursive: true });

  const { server, port } = await serveRepo();
  console.log(`Serving ${path.relative(REPO, SERVE_ROOT) || '.'}/ at http://127.0.0.1:${port}\n`);
  const browser = await chromium.launch();
  const CHROMIUM = browser.version();
  const PLAYWRIGHT = require('playwright/package.json').version;
  if (CHROMIUM !== PINNED_CHROMIUM) {
    console.warn(
      `\n!! Chromium ${CHROMIUM} does not match the pinned ${PINNED_CHROMIUM}.\n` +
      `   Geometry and contrast results are only comparable within one build.\n` +
      `   Update PINNED_CHROMIUM deliberately, and say so in the report.\n`
    );
  }
  console.log(`Chromium ${CHROMIUM} (pinned ${PINNED_CHROMIUM}), Playwright ${PLAYWRIGHT}\n`);
  const results = {
    ...(deterministic ? {} : { generated: new Date().toISOString() }),
    repo: REPO,
    chromium: CHROMIUM,
    chromiumPinned: PINNED_CHROMIUM,
    playwright: PLAYWRIGHT,
    ruleHash: RULE_HASH,
    fontsVendored: fs.existsSync(path.join(FONTS_DIR, 'manifest.json')),
    contentDir: path.relative(REPO, contentDir) || '.',
    // Content family (T7b) is a source rule, evaluated once per run.
    contentRules: evalContent(contentDir),
    widths: WIDTHS.map((v) => v.w),
    platformSelectorCount: platformSelectors.size,
    pieces: [],
  };

  for (const rel of pieces) {
    const slug = slugFor(rel);
    const url = `http://127.0.0.1:${port}/${rel}`;
    const piece = { path: rel, slug, widths: {}, structure: null, d1: null, errors: [] };
    console.log(`\n=== ${rel} (${slug})`);

    for (const { w, h } of WIDTHS.filter((v) => !onlyWidth || v.w === onlyWidth)) {
      const ctx = await browser.newContext({
        viewport: { width: w, height: h },
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      const failedReqs = [];
      page.on('requestfailed', (req) => failedReqs.push(req.url()));
      page.on('pageerror', (err) => piece.errors.push(`[${w}] pageerror: ${err.message}`));

      try {
        await routeFonts(page);
        await page.goto(url, { waitUntil: 'load', timeout: 45000 });
        // Never measure text before its font is the font it will be.
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(1200); // let tab/carousel init settle
        await page.evaluate(() => document.fonts.ready); // re-settle after JS
        const data = await page.evaluate(collect, TOL);

        piece.widths[w] = {
          geometry: evalGeometry(data),
          g5: data.g5,
          g6: data.g6,
          docHeight: data.docHeight,
          // Strip the ephemeral port so output does not vary per run.
          failedRequests: failedReqs
            .filter((u) => !u.startsWith('data:'))
            .map((u) => u.replace(/127\.0\.0\.1:\d+/g, '127.0.0.1:PORT')),
        };

        if (w === STRUCTURE_WIDTH) {
          piece.structure = evalStructure(data, rel);
          piece.scope = data.structure.scope;
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
        piece.errors.push(`[${w}] ${err.message}`.replace(/127\.0\.0\.1:\d+/g, '127.0.0.1:PORT'));
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
  for (const [rule, res] of Object.entries(results.contentRules || {})) {
    if (res.status === 'FAIL') {
      fails++;
      byRule[rule] = byRule[rule] || new Set();
      byRule[rule].add('(repo)');
    }
  }
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
  console.log(`Rule hash: ${RULE_HASH}`);
  console.log(`Chromium: ${CHROMIUM} (pinned ${PINNED_CHROMIUM})`);
  console.log(`FAIL cells: ${results.summary.totalFailCells}`);
  console.log(`D1 duplicate selectors: ${results.summary.totalDuplicateSelectors}`);
  console.log(`Most-failed: ${results.summary.rulesByPieceCount.slice(0, 5).map((r) => `${r.rule}(${r.pieces})`).join(' ')}`);
  console.log(`JSON: ${jsonOut}`);
})();
