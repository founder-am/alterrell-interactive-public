/* Measurement harness for the 2026-08-19 M-run (BLOCK Y). Uncommitted byproduct. */
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path');

const MODE = process.argv[2] || 'all';
const ROOT = process.cwd() + '/dist';
const TYPES = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.json':'application/json'};

function serve() {
  const s = http.createServer((req,res)=>{
    let f = decodeURIComponent(req.url.split('?')[0]);
    if (f.endsWith('/')) f += 'index.html';
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end('nf'); }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream'});
    fs.createReadStream(p).pipe(res);
  });
  return new Promise(r => s.listen(0,'127.0.0.1',()=>r(s)));
}

/* Injected: selector path + per-line text via Range, so "the text on the last
   rect" is measured, not guessed. */
const HELPERS = () => {
  window.__cssPath = function (el) {
    const parts = [];
    while (el && el.nodeType === 1 && parts.length < 6) {
      let s = el.tagName.toLowerCase();
      if (el.id) { s += '#' + el.id; parts.unshift(s); break; }
      const cls = (el.getAttribute('class')||'').trim().split(/\s+/).filter(Boolean);
      if (cls.length) s += '.' + cls.join('.');
      parts.unshift(s);
      el = el.parentElement;
    }
    return parts.join(' > ');
  };
  /* Group the element's words into visual lines by the top of each word's rect. */
  window.__lines = function (el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const groups = new Map();
    let n;
    while ((n = walker.nextNode())) {
      const txt = n.textContent;
      const re = /\S+/g; let m;
      while ((m = re.exec(txt))) {
        const r = document.createRange();
        r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
        const rect = r.getBoundingClientRect();
        if (!rect.width && !rect.height) continue;
        const key = Math.round(rect.top);
        if (!groups.has(key)) groups.set(key, { top: key, words: [], left: rect.left, right: rect.right });
        const g = groups.get(key);
        g.words.push(m[0]);
        g.left = Math.min(g.left, rect.left);
        g.right = Math.max(g.right, rect.right);
      }
    }
    return [...groups.values()].sort((a,b)=>a.top-b.top)
      .map(g => ({ top: g.top, text: g.words.join(' '), width: +(g.right-g.left).toFixed(1) }));
  };
  window.__contentWidth = function (el) {
    const cs = getComputedStyle(el);
    return +(el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)).toFixed(2);
  };
};

async function openTab(page, id) {
  await page.click(`[data-target="${id}"]`);
  await page.waitForTimeout(80);
}

(async () => {
  const server = await serve();
  const port = server.address().port;
  const browser = await chromium.launch();
  const url = `http://127.0.0.1:${port}/pieces/concert-tax/`;
  const out = {};

  /* ---------------- M0 + M1 : tab-share at 360, DPR 2 ---------------- */
  if (MODE === 'all' || MODE === 'share') {
    const ctx = await browser.newContext({ viewport:{width:360,height:900}, deviceScaleFactor:2 });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.addInitScript(HELPERS);
    await page.evaluate(HELPERS);
    await openTab(page, 'tab-share');

    const m0 = await page.evaluate(() => {
      const card = document.querySelector('.ai-share-card');
      if (!card) return { missing: true };
      const cr = card.getBoundingClientRect();
      if (cr.width === 0) return { zero: true, w: cr.width, h: cr.height };
      const cs = getComputedStyle(card);
      const parent = card.parentElement;
      const pr = parent.getBoundingClientRect();
      const ps = getComputedStyle(parent);
      const pContentLeft  = pr.left + parseFloat(ps.paddingLeft) + parseFloat(ps.borderLeftWidth);
      const pContentRight = pr.right - parseFloat(ps.paddingRight) - parseFloat(ps.borderRightWidth);
      const clippers = [];
      let a = card.parentElement;
      while (a && a !== document.documentElement) {
        const s = getComputedStyle(a);
        if (['hidden','clip','scroll','auto'].includes(s.overflowX)) {
          clippers.push({ sel: window.__cssPath(a), overflowX: s.overflowX });
        }
        a = a.parentElement;
      }
      return {
        computedWidth: cs.width, computedPadding: cs.padding,
        offsetWidth: card.offsetWidth, scrollWidth: card.scrollWidth,
        clientWidth: card.clientWidth,
        contentWidth: window.__contentWidth(card),
        rectLeft: +cr.left.toFixed(2), rectRight: +cr.right.toFixed(2),
        parentSel: window.__cssPath(parent),
        pContentLeft: +pContentLeft.toFixed(2), pContentRight: +pContentRight.toFixed(2),
        clippers,
        docScrollWidth: document.documentElement.scrollWidth,
        viewport: window.innerWidth
      };
    });
    out.m0 = m0;

    if (!m0.missing && !m0.zero) {
      out.m1 = await page.evaluate(() => {
        const card = document.querySelector('.ai-share-card');
        const cardContent = window.__contentWidth(card);
        const els = [...card.querySelectorAll('*')];
        return { cardContentWidth: cardContent, items: els.map(el => {
          const rects = [...el.getClientRects()].map(r => +r.width.toFixed(1));
          const lines = window.__lines(el);
          const hasChildEl = el.children.length > 0;
          return {
            sel: window.__cssPath(el),
            text: (el.textContent||'').trim(),
            clientWidth: el.clientWidth, clientHeight: el.clientHeight,
            rectCount: rects.length, rectWidths: rects,
            lineCount: lines.length,
            lines: lines.map(l => ({ text: l.text, width: l.width })),
            hasChildEl
          };
        })};
      });
    }
    await ctx.close();
  }

  /* ---------------- M3 : tab-the-data at 360 ---------------- */
  if (MODE === 'all' || MODE === 'slider') {
    const ctx = await browser.newContext({ viewport:{width:360,height:900}, deviceScaleFactor:2 });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(HELPERS);
    await openTab(page, 'tab-the-data');

    out.m3 = await page.evaluate(() => {
      const input = document.getElementById('ai-ticket-price');
      if (!input) return { missing: true };
      const r = input.getBoundingClientRect();
      if (r.width === 0) return { zero: true };
      const touch = getComputedStyle(document.documentElement).getPropertyValue('--touch').trim();
      const ids = ['ai-ticket-ticketing','ai-ticket-production','ai-ticket-artist-share','ai-ticket-promoter'];
      const num = t => Math.round(parseFloat(t.replace(/[$,]/g,'')) * 100);

      const min = +input.min, max = +input.max, step = +input.step;
      const stops = Math.floor((max - min) / step) + 1;
      const failures = [];
      for (let p = min; p <= max; p += step) {
        input.value = String(p);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        const sum = ids.map(i => num(document.getElementById(i).textContent)).reduce((a,b)=>a+b,0);
        if (sum !== p*100) failures.push({ p, sum, expected: p*100 });
      }

      const sample = {};
      for (const p of [25,100,500]) {
        input.value = String(p);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        sample[p] = {
          rows: ids.map(i => document.getElementById(i).textContent),
          derived: document.getElementById('ai-ticket-derived').textContent.replace(/\s+/g,' ').trim()
        };
      }
      input.value = '100'; input.dispatchEvent(new Event('input',{bubbles:true}));

      /* row labels, M1 orphan rule */
      const table = document.querySelector('.ai-ticket-table');
      const labels = [...table.querySelectorAll('tbody td:first-child')].map(td => ({
        sel: window.__cssPath(td), text: td.textContent.trim(),
        contentWidth: window.__contentWidth(td),
        lines: window.__lines(td).map(l => ({ text: l.text, width: l.width }))
      }));

      return {
        touch,
        box: { w: +r.width.toFixed(1), h: +r.height.toFixed(1) },
        stops, failureCount: failures.length, failures: failures.slice(0,5),
        sample, labels,
        min, max, step
      };
    });

    /* webkit thumb rendered width, measured via the shadow pseudo-element */
    out.thumb = await page.evaluate(() => {
      const el = document.getElementById('ai-ticket-price');
      const cs = getComputedStyle(el, '::-webkit-slider-thumb');
      return { width: cs.width, height: cs.height };
    });
    await ctx.close();
  }

  await browser.close(); server.close();
  console.log(JSON.stringify(out, null, 2));
})();
