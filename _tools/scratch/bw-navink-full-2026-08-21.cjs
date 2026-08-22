/* Full-height scan for full-width nav-ink (#111111) rows.
 * CAN DETECT: every device row that is >=95% nav ink across the full width.
 * CANNOT DETECT: which element painted it. On a clipped builder shot, whose
 * content is paper-on-paper, a full-width #111 band has no other candidate;
 * on an unclipped page shot the real nav, hero and footer all qualify. */
const { chromium } = require('playwright'); const fs=require('node:fs');
(async()=>{
  const b=await chromium.launch(); const page=await (await b.newContext()).newPage();
  for(const f of process.argv.slice(2)){
    const r=await page.evaluate(async(src)=>{
      const i=new Image(); i.src=src; await i.decode();
      const c=document.createElement('canvas'); c.width=i.width; c.height=i.height;
      c.getContext('2d').drawImage(i,0,0);
      const d=c.getContext('2d').getImageData(0,0,i.width,i.height).data;
      const hits=[];
      for(let y=0;y<i.height;y++){ let dark=0;
        for(let x=0;x<i.width;x++){ const k=(y*i.width+x)*4;
          if(Math.abs(d[k]-17)<14&&Math.abs(d[k+1]-17)<14&&Math.abs(d[k+2]-17)<14) dark++; }
        if(dark/i.width>=0.95) hits.push(y); }
      const ranges=[];let st=null,prev=null;
      for(const y of hits){ if(st===null)st=y; else if(y!==prev+1){ranges.push([st,prev]);st=y;} prev=y;}
      if(st!==null)ranges.push([st,prev]);
      return{w:i.width,h:i.height,rows:hits.length,ranges};
    },'data:image/png;base64,'+fs.readFileSync(f).toString('base64'));
    console.log(`${f.split('/').slice(-1)[0].padEnd(34)} ${r.w}x${r.h}  nav-ink rows: ${String(r.rows).padStart(4)}  ranges: ${JSON.stringify(r.ranges)}`);
  }
  await b.close();
})();
