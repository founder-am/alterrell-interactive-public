/* Extracts the Concert Builder dataset from the archive, by parsing, never by
   transcription. ARTISTS is lifted as the literal source text and evaluated so
   the objects are byte-identical to the archive's. STEPS is parsed out of the
   picker markup so the two spans per option come from the markup, not memory. */
const fs=require('fs');
const SRC='_archive/legacy-2026-08-13/concert-tax/index.html';
const html=fs.readFileSync(SRC,'utf8');

// ---- ARTISTS: the literal, order preserved (dataset order is the tiebreak) ----
const a0=html.indexOf('var ARTISTS = [');
const lit=html.slice(a0+'var ARTISTS = '.length);
let depth=0,end=-1;
for(let i=0;i<lit.length;i++){const c=lit[i];if(c==='[')depth++;else if(c===']'){depth--;if(!depth){end=i+1;break;}}}
const ARTISTS=eval(lit.slice(0,end));

// ---- STEPS: parsed from the picker markup ----
const STEPS=[];
for(const n of [1,2,3]){
  const qre=new RegExp('id="cb-step-'+n+'"[\\s\\S]*?<div class="cb-question">([^<]+)</div>');
  const question=(html.match(qre)||[])[1];
  const gre=new RegExp('id="cb-step-'+n+'"([\\s\\S]*?)</div>\\s*</div>');
  const block=(html.match(gre)||[])[1]||'';
  const aria=(block.match(/role="group" aria-label="([^"]+)"/)||[])[1];
  const opts=[...block.matchAll(/data-step="\d+" data-value="([^"]+)"[^>]*>\s*<span class="cb-option-num">([^<]*)<\/span>\s*<span class="cb-option-label">([^<]*)<\/span>/g)]
    .map(m=>({value:m[1],num:m[2],label:m[3]}));
  /* ariaLabel dropped 2026-08-22, ruled by AMA that date. The field was written
     into src/data/concert-artists.json by this script and read by nothing:
     ConcertBuilder.astro labels each group with aria-labelledby pointing at the
     question element (line 74), never with step.ariaLabel. The live data file
     carries 0 occurrences of it, so re-running this extractor over src/data/
     would have INJECTED a field the shipped data does not have. `aria` above is
     still parsed and left in place: it is a read of the archive markup and
     costs nothing, and removing the parse is a separate change nobody ruled. */
  STEPS.push({step:n,key:['dancers','costumes','staging'][n-1],question,options:opts});
}

// ---- derivations ----
const fields=[...new Set(ARTISTS.flatMap(Object.keys))];
const totalCells=STEPS.reduce((p,s)=>p*s.options.length,1);
let occupied=0;const cells=[];
for(const d of STEPS[0].options)for(const c of STEPS[1].options)for(const s of STEPS[2].options){
  const hits=ARTISTS.filter(a=>a.dancers===d.value&&a.costumes===c.value&&a.staging===s.value);
  if(hits.length)occupied++;
  cells.push({d:d.value,c:c.value,s:s.value,n:hits.length});
}
console.log('SOURCE: '+SRC);
console.log('records (ARTISTS.length): '+ARTISTS.length);
console.log('fields: '+fields.join(', '));
console.log('per-step option counts: '+STEPS.map(s=>s.key+'='+s.options.length).join(' , '));
console.log('total cells (product): '+totalCells);
console.log('occupied: '+occupied+'   unoccupied: '+(totalCells-occupied));
console.log('\nSTEPS spans (num | label):');
STEPS.forEach(s=>{console.log('  step '+s.step+' ['+s.key+'] "'+s.question+'"');
  s.options.forEach(o=>console.log('     '+o.value.padEnd(8)+' num="'+o.num+'"  label="'+o.label+'"'));});
console.log('\noccupied cells:');
cells.filter(c=>c.n).forEach(c=>console.log('  '+[c.d,c.c,c.s].join('/')+'  n='+c.n));

fs.writeFileSync('src/data/concert-artists.json',JSON.stringify({STEPS,ARTISTS},null,2)+'\n');
console.log('\nwrote src/data/concert-artists.json');
