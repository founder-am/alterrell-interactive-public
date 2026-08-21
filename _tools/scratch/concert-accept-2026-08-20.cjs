/* Concert Builder acceptance. Enumerates all cells programmatically.

   WHAT THIS CAN DETECT: a JS error on any cell; a rendered sentence that
   differs by even one character from the template in concert-builder-copy.md;
   a descriptive span leaking into a sentence; a step hidden before a choice;
   a non-paper background.
   WHAT IT CANNOT DETECT: a shared wrong idea of distance. The expected string
   is built by re-implementing selection here, independently of the component,
   from the same dataset -- so it catches template and token drift, but if both
   implementations were wrong the same way it would agree. The occupancy count
   is pinned separately against the archive by extract-concert-2026-08-20.cjs. */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const HQ='/Users/alterrellmills/Documents/GitHub/alterrell-hq';
const data=JSON.parse(fs.readFileSync('src/data/concert-artists.json','utf8'));
const {STEPS,ARTISTS}=data;

// ---- templates lifted from the copy file, not from memory ----
const copy=fs.readFileSync(HQ+'/reference/concert-builder-copy.md','utf8').split('\n');
const blk=(a,b)=>copy.slice(a-1,b).map(s=>s.trim()).filter(Boolean).join(' ').replace(/\s+/g,' ');
const T={framing:blk(30,31),l1:blk(37,37),l2:blk(41,42),A:blk(46,47),B:blk(52,54),C:blk(58,62),D:blk(72,77)};

const NUM={};STEPS.forEach(s=>{NUM[s.key]={};s.options.forEach(o=>NUM[s.key][o.value]=o.num);});
const NW={1:'One',2:'Two',3:'Three'};
const fill=(t,m)=>t.replace(/\[([A-Z_0-9]+)\]/g,(x,k)=>k in m?m[k]:x);
const spans=a=>({d:NUM.dancers[a.dancers],c:NUM.costumes[a.costumes],s:NUM.staging[a.staging]});
function clause(a,i){const r=spans(a);const sfx=i?'_'+i:'';const m={};
  m['REC_ARTIST'+sfx]=a.name;m['REC_DANCERS'+sfx]=r.d;m['REC_CHANGES'+sfx]=r.c;m['REC_STAGING'+sfx]=r.s;return m;}
function expected(sel){
  const dist=a=>(a.dancers!==sel.dancers)+(a.costumes!==sel.costumes)+(a.staging!==sel.staging);
  const exact=ARTISTS.filter(a=>dist(a)===0);
  if(exact.length)return{occupied:true,names:exact.map(a=>a.name)};
  const min=Math.min(...ARTISTS.map(dist));
  const tied=ARTISTS.filter(a=>dist(a)===min);
  const l2=fill(T.l2,{TOTAL_TOURS:String(ARTISTS.length),SEL_DANCERS:NUM.dancers[sel.dancers],
    SEL_CHANGES:NUM.costumes[sel.costumes],SEL_STAGING:NUM.staging[sel.staging]});
  let l3,branch;
  const same=tied.every(a=>a.dancers===tied[0].dancers&&a.costumes===tied[0].costumes&&a.staging===tied[0].staging);
  if(tied.length===1){branch='A';l3=fill(T.A,clause(tied[0]));}
  else if(tied.length<=3&&same){branch='B';const r=spans(tied[0]);
    const m={N_WORD:NW[tied.length],REC_DANCERS:r.d,REC_CHANGES:r.c,REC_STAGING:r.s};
    tied.forEach((a,i)=>m['REC_ARTIST_'+(i+1)]=a.name);
    // branch B names up to three; the template shows three
    l3=fill(T.B,m);}
  else if(tied.length<=3){branch='C';const m={N_WORD:NW[tied.length]};
    tied.forEach((a,i)=>Object.assign(m,clause(a,i+1)));l3=fill(T.C,m);}
  else{branch='D';const m={N:String(tied.length)};
    tied.slice(0,3).forEach((a,i)=>Object.assign(m,clause(a,i+1)));l3=fill(T.D,m);}
  return{occupied:false,branch,tie:tied.length,lines:[T.l1,l2,l3]};
}
const DESC=STEPS.flatMap(s=>s.options.map(o=>o.label));

(async()=>{
  const ROOT=process.cwd()+'/dist';
  const T2={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':T2[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const fails=[];const PAPER=['rgb(248, 246, 241)','rgb(240, 237, 230)','rgb(255, 255, 255)'];

  // ---- widths: steps-visible + paper background ----
  for(const W of [360,768,1280]){
    const ctx=await b.newContext({viewport:{width:W,height:900}});const page=await ctx.newPage();
    await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
    await page.click('[data-target="tab-the-data"]');await page.waitForTimeout(200);
    const v=await page.evaluate(()=>{
      const r=document.querySelector('.ai-concert');
      const steps=[...document.querySelectorAll('.ai-concert-step')];
      const bgOf=el=>{let n=el;while(n&&n!==document.documentElement){const c=getComputedStyle(n).backgroundColor;
        if(c&&c!=='rgba(0, 0, 0, 0)'&&c!=='transparent')return c;n=n.parentElement;}return 'none';};
      return{steps:steps.length,visible:steps.filter(s=>s.getBoundingClientRect().height>0).length,
        pressed:[...document.querySelectorAll('.ai-concert-option[aria-pressed="true"]')].length,
        controls:document.querySelectorAll('.ai-concert-option').length+document.querySelectorAll('.ai-concert-reset').length,
        bg:bgOf(r),resultEmpty:document.getElementById('ai-concert-result').innerHTML===''};});
    if(v.visible!==3)fails.push(`A10 @${W}: ${v.visible}/3 steps visible before any choice`);
    if(v.pressed!==0)fails.push(`A10 @${W}: ${v.pressed} options already pressed`);
    if(v.controls!==10)fails.push(`shape @${W}: ${v.controls} controls, expected 10`);
    if(!PAPER.includes(v.bg))fails.push(`A11 @${W}: background ${v.bg} is not paper`);
    console.log(`@${W}  steps visible ${v.visible}/3  pressed ${v.pressed}  controls ${v.controls}  bg ${v.bg}  result empty ${v.resultEmpty}`);
    await ctx.close();
  }

  // ---- all cells, one page, errors captured ----
  const ctx=await b.newContext({viewport:{width:1280,height:900}});const page=await ctx.newPage();
  const errs=[];page.on('pageerror',e=>errs.push(String(e)));
  page.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text());});
  await page.goto(`http://127.0.0.1:${port}/pieces/concert-tax/`,{waitUntil:'load'});
  await page.click('[data-target="tab-the-data"]');await page.waitForTimeout(200);

  let n=0,occ=0,unocc=0;const branches={};
  for(const d of STEPS[0].options)for(const c of STEPS[1].options)for(const s of STEPS[2].options){
    n++;const sel={dancers:d.value,costumes:c.value,staging:s.value};
    const before=errs.length;
    for(const[k,v]of[['dancers',d.value],['costumes',c.value],['staging',s.value]])
      await page.click(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);
    const got=await page.evaluate(()=>{const r=document.getElementById('ai-concert-result');
      const e=r.querySelector('.ai-concert-empty');
      return{empty:!!e,lines:e?[...e.querySelectorAll('p')].map(x=>x.textContent.replace(/\s+/g,' ').trim()):[],
        cards:[...r.querySelectorAll('.ai-concert-card-name')].map(x=>x.textContent),
        hed:(r.querySelector('.ai-concert-results-hed')||{}).textContent||'',
        labels:r.querySelectorAll('.ai-label').length,
        html:r.innerHTML.length};});
    const exp=expected(sel);
    const cell=`${d.value}/${c.value}/${s.value}`;
    if(errs.length>before)fails.push(`A7 ${cell}: JS error ${errs.slice(before).join('|')}`);
    if(!got.html)fails.push(`A7 ${cell}: rendered nothing`);
    // R2, 2026-08-20: eyebrows are gone platform-wide (LEDGER 765 over Q4).
    // Fails if .ai-label reappears in the result on any of the 27 cells.
    if(got.labels)fails.push(`R2 ${cell}: ${got.labels} eyebrow(s) still in the result`);
    if(exp.occupied){
      occ++;
      if(got.empty)fails.push(`${cell}: rendered empty-cell copy on an OCCUPIED cell`);
      if(JSON.stringify(got.cards)!==JSON.stringify(exp.names))
        fails.push(`${cell}: cards ${JSON.stringify(got.cards)} != ${JSON.stringify(exp.names)}`);
      if(got.hed!=='Artists who built this')fails.push(`A8 ${cell}: hed "${got.hed}"`);
    }else{
      unocc++;branches[exp.branch]=(branches[exp.branch]||0)+1;
      if(!got.empty){fails.push(`${cell}: no empty-cell block on an UNOCCUPIED cell`);}
      else if(got.lines.length!==3){
        fails.push(`A8 ${cell}: ${got.lines.length} paragraphs, expected 3`);}
      else{
        for(let i=0;i<3;i++)if(got.lines[i]!==exp.lines[i])
          fails.push(`A8 ${cell} branch ${exp.branch} line ${i+1}\n      got: ${got.lines[i]}\n      exp: ${exp.lines[i]}`);}
      for(const ds of DESC)if(got.lines.join(' ').includes(ds))
        fails.push(`A9 ${cell}: descriptive span "${ds}" in a sentence`);
    }
  }
  // R1, 2026-08-20: the footnote. Read from this file, so it can only prove the
  // rendered string equals THIS string -- it cannot prove this string is what
  // AMA ruled. That tie is human.
  const R1 = '* Gross is carried forward only where the Sources tab attaches that exact figure to a named publication. The rest are marked, not estimated.';
  await page.click('.ai-concert-reset');
  for(const[k,v]of[['dancers','full'],['costumes','many'],['staging','max']])
    await page.click(`.ai-concert-option[data-step="${k}"][data-value="${v}"]`);
  const note=await page.evaluate(()=>{const n=document.querySelector('.ai-concert-tbd-note');
    return n?n.textContent.replace(/\s+/g,' ').trim():null;});
  if(note!==R1)fails.push(`R1: tbd-note is ${JSON.stringify(note)}`);
  console.log('R1 footnote matches: '+(note===R1));

  // reset must clear
  await page.click('.ai-concert-reset');
  const afterReset=await page.evaluate(()=>({html:document.getElementById('ai-concert-result').innerHTML,
    pressed:document.querySelectorAll('.ai-concert-option[aria-pressed="true"]').length}));
  if(afterReset.html!==''||afterReset.pressed!==0)fails.push('reset did not clear');

  console.log(`\ncells enumerated ${n}   occupied ${occ}   unoccupied ${unocc}`);
  console.log('empty-cell branches used: '+JSON.stringify(branches));
  console.log('framing line in copy file: '+(T.framing.length)+' chars');
  const pageHas=await page.evaluate(t=>document.body.textContent.replace(/\s+/g,' ').includes(t),T.framing);
  if(!pageHas)fails.push('framing line not found on the page character for character');
  console.log('framing line present on page: '+pageHas);
  console.log('total JS errors across run: '+errs.length);
  console.log('\n'+(fails.length?'FAILURES ('+fails.length+'):\n  '+fails.join('\n  '):'ALL ACCEPTANCE CHECKS PASSED'));
  await ctx.close();await b.close();srv.close();
  process.exitCode=fails.length?1:0;
})();
