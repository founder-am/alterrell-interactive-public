/* BT session probe, 2026-08-20. Read-only. Serves dist/ and measures.
   Argument: a label, "before" or "after", printed with every row.

   MEASURES
     P2  every .ai-concert-option-num: computed font-family, font-size,
         font-weight, and rendered content-box width, at 360/768/1280.
     P2  .ai-concert-card-stat-val font-family in an occupied cell (the
         rule Phase 2 must NOT move).
     P3  at 360: the reset button under real keyboard focus — computed
         outline-color/width/offset and background-color — and the same
         four on a selected option, so the two can be compared.

   CAN detect: the computed values Chromium resolves for these elements at
   these widths, and a numeric difference between two runs of this script.
   CANNOT detect: whether any of those values is the correct one. It has no
   model of the design system; it reports what the browser computed. It also
   cannot see anything about a width it was not run at, and it measures the
   built dist/, so a source edit that did not survive the build is invisible. */
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path');
const LABEL = process.argv[2] || 'run';
const ROOT = process.cwd() + '/dist';
const MT = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
             '.png':'image/png', '.woff2':'font/woff2', '.json':'application/json' };

(async () => {
  const srv = http.createServer((q, r) => {
    let f = decodeURIComponent(q.url.split('?')[0]);
    if (f.endsWith('/')) f += 'index.html';
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end('nf'); }
    r.writeHead(200, { 'Content-Type': MT[path.extname(p)] || 'application/octet-stream' });
    fs.createReadStream(p).pipe(r);
  });
  await new Promise(r => srv.listen(0, '127.0.0.1', r));
  const port = srv.address().port;
  const b = await chromium.launch();

  for (const W of [360, 768, 1280]) {
    const ctx = await b.newContext({ viewport: { width: W, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`, { waitUntil: 'load' });
    await page.click('[data-target="tab-the-data"]');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);

    /* ---- P2: the nine option values ---- */
    const nums = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.ai-concert-option-num')).map(e => {
        const c = getComputedStyle(e), r = e.getBoundingClientRect();
        return { step: e.closest('.ai-concert-option').dataset.step,
                 text: e.textContent,
                 family: c.fontFamily, size: c.fontSize, weight: c.fontWeight,
                 ls: c.letterSpacing, ffs: c.fontFeatureSettings,
                 width: +r.width.toFixed(2) };
      }));
    for (const n of nums)
      console.log(`P2 ${LABEL} ${W} option-num step=${n.step} text=${JSON.stringify(n.text)} family=${JSON.stringify(n.family)} size=${n.size} weight=${n.weight} ls=${n.ls} ffs=${JSON.stringify(n.ffs)} width=${n.width}`);

    /* ---- P2: the stat-val rule that must stay mono. Needs an occupied cell. ---- */
    for (const [k, v] of [['dancers','none'],['costumes','none'],['staging','mid']]) {
      const s = await page.$(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);
      if (s) await s.click();
    }
    await page.waitForTimeout(150);
    const sv = await page.evaluate(() => {
      const e = document.querySelector('.ai-concert-card-stat-val');
      if (!e) return null;
      const c = getComputedStyle(e);
      return { family: c.fontFamily, size: c.fontSize, weight: c.fontWeight, text: e.textContent };
    });
    console.log(`P2 ${LABEL} ${W} stat-val ${sv ? `family=${JSON.stringify(sv.family)} size=${sv.size} weight=${sv.weight} text=${JSON.stringify(sv.text)}` : 'NOT RENDERED (no occupied cell reached)'}`);

    /* ---- P3: focus ring vs selected fill, at 360 only per the phase text ---- */
    if (W === 360) {
      await page.click('#ai-concert-reset');                       /* clears selection */
      await page.click('.ai-concert-option[data-step="dancers"][data-value="full"]');
      const selBox = await page.evaluate(() => {
        const e = document.querySelector('.ai-concert-option[aria-pressed="true"]');
        if (!e) return null;
        const c = getComputedStyle(e);
        return { bg: c.backgroundColor, bc: c.borderColor,
                 oc: c.outlineColor, ow: c.outlineWidth, oo: c.outlineOffset };
      });
      console.log(`P3 ${LABEL} ${W} selected-option ${selBox ? `background=${selBox.bg} border=${selBox.bc} outline=${selBox.oc} ${selBox.ow} offset=${selBox.oo}` : 'NONE'}`);

      /* Real keyboard focus, so :focus-visible actually matches. */
      await page.evaluate(() => document.querySelector('.ai-concert-reset').blur());
      await page.evaluate(() => {
        const opts = document.querySelectorAll('.ai-concert-option');
        opts[opts.length - 1].focus();
      });
      let hops = 0, on = false;
      while (hops < 12) {
        await page.keyboard.press('Tab'); hops++;
        on = await page.evaluate(() => document.activeElement && document.activeElement.id === 'ai-concert-reset');
        if (on) break;
      }
      const reset = await page.evaluate(() => {
        const e = document.getElementById('ai-concert-reset');
        const c = getComputedStyle(e);
        return { focused: document.activeElement === e,
                 fv: e.matches(':focus-visible'),
                 bg: c.backgroundColor, oc: c.outlineColor, ow: c.outlineWidth, oo: c.outlineOffset };
      });
      console.log(`P3 ${LABEL} ${W} reset tabs=${hops} focused=${reset.focused} focus-visible=${reset.fv} background=${reset.bg} outline-color=${reset.oc} outline-width=${reset.ow} outline-offset=${reset.oo}`);
      console.log(`P3 ${LABEL} ${W} VERDICT outline==selected-fill ? ${selBox && reset.oc === selBox.bg ? 'YES, SAME VALUE' : 'no, they differ'}  (outline=${reset.oc} fill=${selBox && selBox.bg})`);
    }
    await ctx.close();
  }
  await b.close(); srv.close();
})();
