/* BT accessible-name probe, 2026-08-20. Read-only, writes no file.
   Reads computed accessible names from Chromium's own AX engine over CDP
   (DOM.querySelectorAll -> Accessibility.queryAXTree), not from markup, so
   aria-labelledby and aria-label are resolved the way a screen reader
   resolves them, at 360, 768 and 1280.

   Usage: node bt-ax-2026-08-20.cjs <page-path> <selector> [tab-data-target]
   Exit code 0 when every matched element has a non-empty name at every width.

   CAN detect: an empty, missing or unresolved accessible name on each
   matched element at each of the three widths, and the case where the
   selector matches nothing at all.
   CANNOT detect: whether a non-empty name is the CORRECT name, whether it
   reads sensibly aloud, duplicate names across controls, focus order, or
   anything at a width it was not run at. */
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path');
const PAGE = process.argv[2], SEL = process.argv[3], TAB = process.argv[4] || '';
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
  let seen = 0, bad = 0;

  for (const W of [360, 768, 1280]) {
    const ctx = await b.newContext({ viewport: { width: W, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}${PAGE}`, { waitUntil: 'load' });
    if (TAB) await page.click(`[data-target="${TAB}"]`);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);

    const cdp = await ctx.newCDPSession(page);
    await cdp.send('DOM.enable');
    await cdp.send('Accessibility.enable');
    const doc = await cdp.send('DOM.getDocument', { depth: -1 });
    const { nodeIds } = await cdp.send('DOM.querySelectorAll', { nodeId: doc.root.nodeId, selector: SEL });

    if (!nodeIds.length) { console.log(`AX ${W}  NO ELEMENTS MATCHED  selector=${SEL}`); bad++; }

    for (const nodeId of nodeIds) {
      const { nodes } = await cdp.send('Accessibility.queryAXTree', { nodeId });
      const node = (nodes || []).find(n => n.ignored === false) || (nodes || [])[0];
      const nm   = node && node.name ? String(node.name.value ?? '') : '';
      const role = node && node.role ? String(node.role.value ?? '') : '?';
      const ignored = node ? !!node.ignored : true;
      const { outerHTML } = await cdp.send('DOM.getOuterHTML', { nodeId });
      const tag = (outerHTML.match(/^<\s*([a-zA-Z0-9-]+)/) || [,'?'])[1];
      seen++;
      const ok = nm.trim().length > 0 && !ignored;
      if (!ok) bad++;
      console.log(`AX ${W} ${ok ? 'ok   ' : 'EMPTY'} <${tag}> role=${role} ignored=${ignored} name=${JSON.stringify(nm)}`);
    }
    await ctx.close();
  }
  await b.close(); srv.close();
  console.log(`AX SUMMARY  selector=${SEL}  elements=${seen}  empty-or-missing=${bad}  ${bad === 0 ? 'PASS' : 'FAIL'}`);
  process.exit(bad === 0 ? 0 : 1);
})();
