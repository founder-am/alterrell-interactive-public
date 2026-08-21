const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  const s=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>s.listen(0,'127.0.0.1',r)); const port=s.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:2});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.click('[data-target="tab-share"]'); await page.waitForTimeout(80);
  const r=await page.evaluate(()=>{
    const card=document.querySelector('.ai-share-card');
    const cs=getComputedStyle(card);
    const content=card.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
    const foot=card.querySelector('.ai-share-card-footer');
    const [brand,url]=[...foot.querySelectorAll('span')];
    const probe=(el,w)=>{const c=el.cloneNode(true);c.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;width:auto';
      document.body.appendChild(c);const x=c.getBoundingClientRect().width;c.remove();return +x.toFixed(1);};
    const brandMax=probe(brand), urlMax=probe(url);
    const rects=el=>[...el.getClientRects()].map(x=>+x.width.toFixed(1));
    return {content:+content.toFixed(1),
      brand:{text:brand.textContent,rects:rects(brand),box:+brand.getBoundingClientRect().width.toFixed(1),maxContent:brandMax},
      url:{text:url.textContent,rects:rects(url),box:+url.getBoundingClientRect().width.toFixed(1),maxContent:urlMax}};
  });
  console.log(JSON.stringify(r,null,2));
  await b.close(); s.close();
})();
