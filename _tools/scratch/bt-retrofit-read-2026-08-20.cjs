/* PHASE 12 — RETROFIT SHARED READ. MEASUREMENT ONLY. ZERO EDITS.
 *
 * Reads five pieces: the three coming-soon ones with no built page (naming,
 * wheres-beyonce, gay-uncles) and the two live ones as a baseline
 * (concert-tax, fast-food-sodium).
 *
 * It RECOMMENDS NO BUILD ORDER. AMA rules that after reading this.
 *
 * CAN detect: what is literally in each .mdx and whether each ai- class it
 * uses has a matching rule in the stylesheet.
 * CANNOT detect: whether a piece is editorially ready, whether its copy has
 * had a voice pass, whether its data is sourced, or how much work any missing
 * artifact actually represents. Class use is read from static .mdx text, so a
 * class a component injects at runtime is invisible here. */
const fs=require('node:fs'),path=require('node:path');
const SRC='src/content/pieces', CSS='src/styles/alterrell-interactive.css';
const PIECES=['naming','wheres-beyonce','gay-uncles','concert-tax','fast-food-sodium'];
const COMING=['naming','wheres-beyonce','gay-uncles'];
const css=fs.readFileSync(CSS,'utf8');
const hub=fs.readFileSync('src/lib/hub.ts','utf8');

/* Every class selector the stylesheet declares a rule for. */
const declared=new Set();
css.replace(/\/\*[\s\S]*?\*\//g,' ')            /* strip comments first */
   .replace(/\.([A-Za-z_][A-Za-z0-9_-]*)/g,(m,c)=>{declared.add(c);return m;});

const out=[];
const P=s=>out.push(s);
const use={};

for(const slug of PIECES){
  const f=path.join(SRC,slug+'.mdx');
  const txt=fs.readFileSync(f,'utf8');
  const lines=txt.split('\n');
  P(`\n${'='.repeat(74)}\n${slug}   (${COMING.includes(slug)?'COMING SOON — no built page':'LIVE'})\n${'='.repeat(74)}`);

  /* frontmatter, whole */
  const fmEnd=lines.indexOf('---',1);
  P(`\n--- FRONTMATTER (lines 1-${fmEnd+1}), whole ---`);
  lines.slice(0,fmEnd+1).forEach((l,i)=>P(`${String(i+1).padStart(4)}| ${l}`));

  P(`\n--- MDX LINE COUNT --- ${lines.length}`);

  /* tab sections in order, with heading text */
  P(`\n--- TAB SECTIONS, in order ---`);
  const tabs=[];
  lines.forEach((l,i)=>{const m=l.match(/<TabSection\s+id="([^"]+)"/);
    if(m)tabs.push({id:m[1],line:i+1,active:/\bactive\b/.test(l)});});
  if(!tabs.length)P('  (none)');
  tabs.forEach((t,n)=>{
    /* first heading inside this tab */
    const end=n+1<tabs.length?tabs[n+1].line-1:lines.length;
    let hed='(no heading found)';
    for(let i=t.line;i<end;i++){
      const h=lines[i].match(/<h[23][^>]*>(.*?)<\/h[23]>/);
      if(h){hed=h[1].replace(/<[^>]+>/g,'').trim();break;}
    }
    P(`  ${String(n+1).padStart(2)}. ${t.id.padEnd(22)} line ${String(t.line).padStart(4)}  ${t.active?'[active]':'        '}  first heading: "${hed}"`);
  });
  /* frontmatter tab labels, which are what the tab BAR renders */
  const fmTabs=lines.slice(0,fmEnd+1).filter(l=>/^\s*-\s*(id|label):/.test(l));
  if(fmTabs.length){P('  frontmatter tab list:');fmTabs.forEach(l=>P('    '+l.trim()));}

  /* every ai- class used */
  const used=new Set();
  txt.replace(/class(?:Name)?="([^"]*)"/g,(m,cl)=>{cl.split(/\s+/).forEach(c=>{if(/^ai-/.test(c))used.add(c);});return m;});
  use[slug]=used;
  const orphans=[...used].filter(c=>!declared.has(c)).sort();
  P(`\n--- ai- CLASSES USED --- ${used.size} distinct`);
  P('  '+[...used].sort().join('  '));
  P(`\n--- OF THOSE, ZERO RULES IN THE STYLESHEET --- ${orphans.length}`);
  P(orphans.length?'  '+orphans.join('  '):'  (none)');
  orphans.forEach(o=>{
    const at=[];lines.forEach((l,i)=>{if(l.includes(o))at.push(i+1);});
    P(`    ${o}  first used at line ${at[0]}, ${at.length} occurrence(s)`);
  });

  /* components imported */
  const imports=[];
  txt.replace(/^import\s+(\w+)\s+from\s+'([^']+)'/gm,(m,n,p)=>{imports.push(`${n}  <- ${p}`);return m;});
  P(`\n--- COMPONENTS IMPORTED --- ${imports.length}`);
  imports.forEach(i=>P('  '+i));

  /* ai-table tables */
  P(`\n--- <table class="ai-table"> OCCURRENCES ---`);
  let nt=0;
  lines.forEach((l,i)=>{if(/<table[^>]*class="[^"]*\bai-table\b/.test(l)){nt++;P(`  line ${String(i+1).padStart(4)}: ${l.trim().slice(0,90)}`);}});
  if(!nt)P('  (none)');
  P(`  total: ${nt}`);

  /* og image */
  const og=`public/og/${slug}.png`;
  P(`\n--- OG IMAGE --- ${fs.existsSync(og)?'EXISTS  '+og:'ABSENT  (expected '+og+')'}`);

  /* hub presence */
  /* Match the ARRAY, not the prose. "BUILT_SLUGS" also appears several times
     in this file's own doc comment, and splitting on the bare word matched the
     comment first — which reported both LIVE pieces as absent. Anchor on the
     export and read to the closing bracket. */
  const arrM=hub.match(/export const BUILT_SLUGS\s*=\s*\[([\s\S]*?)\]/);
  const arr=arrM?arrM[1]:'';
  const inBuilt=new RegExp(`'${slug}'`).test(arr);
  P(`--- HUB DATA SOURCE (src/lib/hub.ts) --- ${inBuilt?'PRESENT in BUILT_SLUGS/LINKED_SLUGS -> builds a route and carries a card':'ABSENT from BUILT_SLUGS and LINKED_SLUGS -> no route, no card'}`);
}

/* ---- cross-cut over the three coming-soon pieces ---- */
P(`\n\n${'='.repeat(74)}\nACROSS THE THREE COMING-SOON PIECES\n${'='.repeat(74)}`);
const [a,b,c]=COMING.map(s=>use[s]);
const shared=[...a].filter(x=>b.has(x)&&c.has(x)).sort();
P(`\n--- ai- CLASSES SHARED BY ALL THREE --- ${shared.length}`);
P('  '+(shared.join('  ')||'(none)'));

P(`\n--- ai- CLASSES UNIQUE TO ONE PIECE ---`);
COMING.forEach((s,i)=>{
  const others=COMING.filter((_,j)=>j!==i).map(x=>use[x]);
  const only=[...use[s]].filter(x=>!others.some(o=>o.has(x))).sort();
  P(`  ${s} (${only.length}): ${only.join('  ')||'(none)'}`);
});

const allComing=new Set([...a,...b,...c]);
const orph=[...allComing].filter(x=>!declared.has(x)).sort();
P(`\n--- THE ORPHAN LIST: every class used by a coming-soon piece with NO stylesheet rule --- ${orph.length}`);
if(!orph.length)P('  (none)');
orph.forEach(o=>{
  const who=COMING.filter(s=>use[s].has(o));
  P(`  ${o.padEnd(34)} used by: ${who.join(', ')}`);
});

P(`\n--- MISSING ARTIFACTS, per piece ---`);
COMING.forEach(s=>{
  const miss=[];
  if(!fs.existsSync(`public/og/${s}.png`))miss.push(`og image public/og/${s}.png`);
  miss.push('entry in BUILT_SLUGS (src/lib/hub.ts) — absent, so no route is generated');
  miss.push('entry in LINKED_SLUGS — absent, so no hub card is rendered');
  const o=[...use[s]].filter(x=>!declared.has(x)).sort();
  if(o.length)miss.push(`stylesheet rules for ${o.length} orphan class(es): ${o.join(', ')}`);
  P(`\n  ${s}:`);
  miss.forEach(m=>P(`    - ${m}`));
});
P(`\nNO BUILD ORDER IS RECOMMENDED. That ruling is AMA's, after reading this.`);

console.log(out.join('\n'));
