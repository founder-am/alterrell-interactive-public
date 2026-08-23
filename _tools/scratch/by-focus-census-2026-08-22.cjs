/* Phase 3 verify, 2026-08-22. Generated from the stylesheet, never typed.
   Lists every rule whose selector contains :focus or :focus-visible, with the
   outline / outline-color it declares, and resolves the token to a hex from
   the :root block in the same file.

   CAN detect: a declared teal focus outline anywhere in this stylesheet, at
   any selector.
   CANNOT detect: a focus ring declared in a component <style> block, in an
   inline style attribute, set by JS, or drawn as box-shadow/border rather than
   outline. Those are counted separately below. */
const fs=require('fs');
const P='src/styles/alterrell-interactive.css';
const css=fs.readFileSync(P,'utf8');
const stripped=css.replace(/\/\*[\s\S]*?\*\//g,m=>m.replace(/[^\n]/g,' '));
const tokens={};
for(const m of stripped.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g))if(!tokens[m[1]])tokens[m[1]]=m[2].trim();
const resolve=v=>v.replace(/var\((--[\w-]+)\)/g,(_,t)=>`${t}=${tokens[t]||'?'}`);
const TEAL=new Set(['#0a7c72','#0d9488','--teal','--teal-light']);
const rows=[];
for(const m of stripped.matchAll(/([^{}]+)\{([^{}]*)\}/g)){
  const sel=m[1].trim().replace(/\s+/g,' ');
  if(!/:focus/.test(sel))continue;
  const body=m[2];
  const line=stripped.slice(0,m.index).split('\n').length;
  const outline=(body.match(/(?:^|;)\s*outline(?:-color)?\s*:\s*([^;]+)/)||[])[1];
  rows.push({line,sel,outline:outline?outline.trim():'(no outline declared)'});
}
console.log(`:focus / :focus-visible rules in ${P}: ${rows.length}\n`);
let teal=0;
for(const r of rows){
  const res=resolve(r.outline);
  const isTeal=[...TEAL].some(t=>res.includes(t));
  if(isTeal)teal++;
  console.log(`L${String(r.line).padStart(4)}  ${r.sel}`);
  console.log(`        outline: ${res}${isTeal?'   <-- TEAL':''}`);
}
console.log(`\nteal focus outlines: ${teal}`);
// Focus styling that is NOT an outline, counted so the claim is bounded.
const other=[...stripped.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .filter(m=>/:focus/.test(m[1])&&/box-shadow|border-color/.test(m[2]))
  .map(m=>m[1].trim().replace(/\s+/g,' '));
console.log(`:focus rules that also set box-shadow or border-color: ${other.length}`+(other.length?'\n   '+other.join('\n   '):''));
// Anything outside this file.
console.log('\nfocus rules in any OTHER src file (component <style>, inline, JS):');
const {execSync}=require('child_process');
try{console.log(execSync(`grep -rn ':focus' src/ --include=*.astro --include=*.mdx --include=*.ts --include=*.js || echo "   (none)"`).toString().trim());}catch(e){console.log('   (none)');}
