/* Phase 3, part two. getComputedStyle(el,'::-webkit-slider-thumb') does NOT
   resolve in Chromium — it returned the host input's own box (width 266px,
   background rgba(0,0,0,0)), which is the element, not the thumb. So the thumb
   fill is measured off PAINTED PIXELS instead: the slider element is captured
   and every distinct colour in the clip is counted.

   CAN detect: the exact RGB the thumb is painted in, and how many device
   pixels carry it.
   CANNOT detect: anything about the thumb in a non-Chromium engine, or at a
   width other than 360. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2','.json':'application/json'};
function decodePNG(buf){
  let o=8,w=0,h=0,bd=0,ct=0;const idat=[];
  while(o<buf.length){const len=buf.readUInt32BE(o);const type=buf.toString('ascii',o+4,o+8);
    const data=buf.subarray(o+8,o+8+len);
    if(type==='IHDR'){w=data.readUInt32BE(0);h=data.readUInt32BE(4);bd=data[8];ct=data[9];}
    else if(type==='IDAT')idat.push(data);
    else if(type==='IEND')break;
    o+=12+len;}
  if(bd!==8)throw new Error('bit depth '+bd+' not handled');
  const ch=({0:1,2:3,4:2,6:4})[ct];if(!ch)throw new Error('colour type '+ct+' not handled');
  const raw=zlib.inflateSync(Buffer.concat(idat));
  const stride=w*ch,out=Buffer.alloc(h*stride);
  let p=0;
  for(let y=0;y<h;y++){
    const f=raw[p++];const line=raw.subarray(p,p+stride);p+=stride;
    const cur=out.subarray(y*stride,(y+1)*stride);const prev=y?out.subarray((y-1)*stride,y*stride):null;
    for(let x=0;x<stride;x++){
      const a=x>=ch?cur[x-ch]:0, b=prev?prev[x]:0, c=(x>=ch&&prev)?prev[x-ch]:0;
      let v=line[x];
      if(f===1)v+=a; else if(f===2)v+=b; else if(f===3)v+=(a+b)>>1;
      else if(f===4){const pa=Math.abs(b-c),pb=Math.abs(a-c),pc=Math.abs(a+b-2*c);v+=(pa<=pb&&pa<=pc)?a:(pb<=pc?b:c);}
      cur[x]=v&255;}
  }
  return {w,h,ch,px:out};
}
(async()=>{
  const ROOT=process.cwd()+'/dist';
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:360,height:900},deviceScaleFactor:1});
  const page=await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.evaluate(()=>document.querySelectorAll('.ai-section').forEach(s=>s.classList.add('active')));
  await page.evaluate(()=>document.fonts.ready);
  const el=await page.$('.ai-ticket-slider');
  await el.scrollIntoViewIfNeeded();
  const out=process.argv[2]||'/tmp/by-p3-thumb.png';
  await el.screenshot({path:out});
  const {w,h,ch,px}=decodePNG(fs.readFileSync(out));
  const tally=new Map();
  for(let i=0;i<w*h;i++){const k=`rgb(${px[i*ch]}, ${px[i*ch+1]}, ${px[i*ch+2]})`;tally.set(k,(tally.get(k)||0)+1);}
  const top=[...tally.entries()].sort((a,b)=>b[1]-a[1]).slice(0,6);
  console.log(`clip ${w} x ${h}, ${ch} channels, ${w*h} pixels — ${out}`);
  console.log('most common painted colours:');
  top.forEach(([k,n])=>console.log(`   ${k.padEnd(22)} ${String(n).padStart(6)} px  ${(100*n/(w*h)).toFixed(1)}%`));
  const teal=tally.get('rgb(10, 124, 114)')||0;
  console.log(`\nrgb(10, 124, 114) [var(--teal) #0a7c72]: ${teal} px in this clip`);
  await b.close();srv.close();
})();
