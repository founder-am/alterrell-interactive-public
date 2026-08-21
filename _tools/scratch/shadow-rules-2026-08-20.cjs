/* SHADOW RULES, 2026-08-20. REPORT ONLY. ENFORCES NOTHING.
 *
 * Five defects shipped past twelve acceptance lines and a clean check.js on
 * 2026-08-20 (R1-R5, plus the token finding). None of the five was a check.js
 * rule. This file writes the rules that would have caught the generalisable
 * ones, as a SEPARATE script, so the check.js rule hash cannot move: this
 * file does not import, read, execute or modify _tools/check.js.
 *
 * Runs against dist/ at 360, 768 and 1280 on all four built pages. Every tab
 * on a page is clicked before text is collected, because .ai-section:not(.active)
 * is display:none and an unclicked panel contributes no innerText — a scan of
 * the landing tab alone would have reported "clean" on copy it never saw.
 *
 * EXIT CODE IS ALWAYS 0. A finding here is a finding for AMA, not a gate.
 */
const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const ROOT=process.cwd()+'/dist';
const TOKENS='/Users/alterrellmills/Documents/GitHub/alterrell-hq/reference/design-tokens.md';
const MT={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2'};

/* S-C's stamp size is READ from design-tokens.md, never hardcoded. */
const tokensSrc=fs.readFileSync(TOKENS,'utf8');
const stampM=tokensSrc.match(/stamp\s+`([0-9.]+)rem`/);
if(!stampM){console.error('S-C: could not read the stamp size out of design-tokens.md — aborting');process.exit(0);}
const STAMP_REM=parseFloat(stampM[1]);
console.log(`S-C stamp size READ FROM design-tokens.md: ${STAMP_REM}rem`);

const PAGES=[['/404.html','404'],['/','index'],
             ['/pieces/concert-tax/','pieces-concert-tax'],
             ['/pieces/fast-food-sodium/','pieces-fast-food-sodium']];

(async()=>{
  const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';
    const p=path.join(ROOT,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end('nf');}
    r.writeHead(200,{'Content-Type':MT[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(r);});
  await new Promise(r=>srv.listen(0,'127.0.0.1',r));const port=srv.address().port;
  const b=await chromium.launch();
  const rows=[];

  for(const [url,slug] of PAGES){
    for(const W of [360,768,1280]){
      const ctx=await b.newContext({viewport:{width:W,height:900}});
      const page=await ctx.newPage();
      await page.goto(`http://127.0.0.1:${port}${url}`,{waitUntil:'load'});
      await page.evaluate(()=>document.fonts.ready);
      await page.waitForTimeout(150);

      /* Click every tab so every panel lays out at least once. */
      const targets=await page.evaluate(()=>
        [...document.querySelectorAll('[role=tab][data-target]')].map(t=>t.getAttribute('data-target')));
      for(const t of targets){ await page.click(`[data-target="${t}"]`); await page.waitForTimeout(60); }

      const found=await page.evaluate(({STAMP_REM,targets})=>{
        const out={A:[],B:[],C:[],D:[],E:[]};
        const rootPx=parseFloat(getComputedStyle(document.documentElement).fontSize);
        const STAMP_PX=STAMP_REM*rootPx;
        const COMPONENTS=['.ai-concert','.ai-sodium-picker','.ai-ticket'];
        const sel=e=>{let s=e.tagName.toLowerCase();
          if(e.id)s+='#'+e.id;
          if(e.classList.length)s+='.'+[...e.classList].join('.');
          return s;};

        /* ---- S-A: a <p> carrying .ai-label immediately above a heading. ---- */
        document.querySelectorAll('p.ai-label').forEach(p=>{
          const n=p.nextElementSibling;
          if(n&&/^H[1-6]$/.test(n.tagName)){
            const comp=COMPONENTS.find(c=>p.closest(c))||'(page)';
            out.A.push(`${comp} ${sel(p)} "${p.textContent.trim().slice(0,44)}" immediately above <${n.tagName.toLowerCase()}>`);
          }
        });

        /* ---- S-B: a :focus-visible outline colour equal to a selected-state fill. ---- */
        const probe=document.createElement('div');
        probe.style.display='none';document.body.appendChild(probe);
        const resolve=v=>{probe.style.color='';probe.style.color=v;
          return getComputedStyle(probe).color;};
        const fvRules=[];
        /* A rule written `outline: 2px solid var(--teal)` is a shorthand
           carrying a var(), which CSSOM cannot expand: the outlineColor
           LONGHAND getter returns "". Reading only the longhand collected
           zero rules and made this check pass vacuously. Both the longhand
           and the shorthand are read, and the colour is pulled out of
           whichever one carries it. */
        const colourOf=r=>{
          const long=r.style.outlineColor;
          if(long) return long;
          const short=r.style.outline||'';
          const v=short.match(/var\(\s*--[A-Za-z0-9-]+\s*\)/);
          if(v) return v[0];
          const c=short.match(/#[0-9a-fA-F]{3,8}|rgba?\([^)]*\)|\b(?:currentColor|transparent)\b/);
          return c?c[0]:'';
        };
        for(const sheet of document.styleSheets){
          let rules;try{rules=sheet.cssRules;}catch(e){continue;}
          /* Chrome 151 supports CSS nesting, so a plain CSSStyleRule now
             exposes an EMPTY .cssRules list. A truthiness guard on .cssRules
             therefore treated every style rule as a group and skipped it,
             which is why this check first collected zero rules from a sheet
             that demonstrably contains three. Recurse only on a NON-EMPTY
             list, and never skip the rule's own selector. */
          const walk=list=>{for(const r of list){
            if(r.cssRules&&r.cssRules.length)walk(r.cssRules);
            if(!r.selectorText||!r.selectorText.includes(':focus-visible'))continue;
            const raw=colourOf(r); if(!raw)continue;
            /* Scope to this page: a rule whose base selector matches nothing
               here cannot collide with anything here. */
            const base=r.selectorText.replace(/:focus-visible/g,'');
            let present=false;
            try{present=!!document.querySelector(base);}catch(e){present=false;}
            if(!present)continue;
            fvRules.push({sel:r.selectorText,raw,resolved:resolve(raw)});
          }};
          walk(rules);
        }
        /* Fills that signal "selected" on this page, measured off real elements. */
        const selectedSel=['[aria-pressed="true"]','.ai-sodium-mode-btn--on','.ai-tab.active','.carousel__dot.active'];
        const fills=[];
        selectedSel.forEach(ss=>document.querySelectorAll(ss).forEach(e=>{
          const bg=getComputedStyle(e).backgroundColor;
          if(bg&&bg!=='rgba(0, 0, 0, 0)'&&bg!=='transparent')fills.push({sel:ss,el:sel(e),bg});
        }));
        /* Counts, so a "pass" is legible: zero rules or zero fills is a
           vacuous pass, not evidence of a clean page. */
        out.Bmeta=`compared ${fvRules.length} :focus-visible rule(s) [${fvRules.map(r=>r.sel+'='+r.resolved).join(', ')||'none'}] against ${fills.length} selected-state fill(s) [${[...new Set(fills.map(f=>f.sel+'='+f.bg))].join(', ')||'none'}]`;
        fvRules.forEach(r=>fills.forEach(f=>{
          if(r.resolved===f.bg)
            out.B.push(`${r.sel} outline ${r.raw} -> ${r.resolved} EQUALS selected fill on ${f.sel} (${f.el})`);
        }));
        probe.remove();

        /* ---- S-C: every mono element must compute to the stamp size. ---- */
        const monoStack=getComputedStyle(document.documentElement).getPropertyValue('--font-mono').trim();
        const norm=s=>s.replace(/["']/g,'').replace(/\s+/g,' ').trim().toLowerCase();
        const MONO=norm(monoStack);
        document.querySelectorAll('body *').forEach(e=>{
          if(e.tagName==='SCRIPT'||e.tagName==='STYLE')return;
          const c=getComputedStyle(e);
          if(norm(c.fontFamily)!==MONO)return;
          if(!e.getClientRects().length)return;              /* not laid out */
          if(!(e.textContent||'').trim())return;             /* no text of its own */
          const fs=parseFloat(c.fontSize);
          if(Math.abs(fs-STAMP_PX)>0.51)
            out.C.push(`${sel(e)} mono at ${fs}px, stamp is ${STAMP_PX}px`);
        });

        /* ---- S-D: one class, one type, inside one component. ---- */
        COMPONENTS.forEach(cs=>{
          document.querySelectorAll(cs).forEach(root=>{
            const byClass={};
            root.querySelectorAll('*').forEach(e=>{
              if(!e.getClientRects().length)return;
              const c=getComputedStyle(e);
              const sig=`${norm(c.fontFamily)}|${c.fontSize}|${c.fontWeight}`;
              e.classList.forEach(k=>{(byClass[k]=byClass[k]||[]).push({sig,el:sel(e)});});
            });
            Object.entries(byClass).forEach(([k,list])=>{
              const sigs=[...new Set(list.map(x=>x.sig))];
              if(sigs.length>1)
                out.D.push(`${cs} .${k} has ${sigs.length} type signatures: ${sigs.join('  VS  ')}`);
            });
          });
        });
        return out;
      },{STAMP_REM,targets});

      /* ---- S-E: editorial-note shape in reader-visible text, every tab. ---- */
      const NEEDLES=['before publish','tbd requires','verify before','placeholder'];
      const seenE=new Set();
      for(const t of (targets.length?targets:[null])){
        if(t) await page.click(`[data-target="${t}"]`);
        await page.waitForTimeout(50);
        const hits=await page.evaluate(needles=>{
          const txt=document.body.innerText||'';
          const low=txt.toLowerCase();
          const res=[];
          needles.forEach(n=>{let i=low.indexOf(n);
            while(i!==-1){res.push({n,ctx:txt.slice(Math.max(0,i-40),i+n.length+40).replace(/\s+/g,' ')});
              i=low.indexOf(n,i+1);}});
          return res;
        },NEEDLES);
        hits.forEach(h=>{const k=h.n+'|'+h.ctx;if(!seenE.has(k)){seenE.add(k);
          found.E.push(`"${h.n}" in tab ${t}: ...${h.ctx}...`);}});
      }

      rows.push({slug,W,found});
      await ctx.close();
    }
  }
  await b.close();srv.close();

  const NAMES={A:'S-A  p.ai-label immediately above a heading (the eyebrow shape)',
               B:'S-B  :focus-visible outline colour == a selected-state fill',
               C:'S-C  mono element whose computed size != the stamp size',
               D:'S-D  one class, two type signatures, inside one component',
               E:'S-E  editorial-note shape in reader-visible text'};
  console.log('\n================ SHADOW RULE RESULTS, per rule / page / width ================');
  for(const K of ['A','B','C','D','E']){
    console.log(`\n${NAMES[K]}`);
    for(const r of rows){
      const list=r.found[K]||[];
      const uniq=[...new Set(list)];
      console.log(`  ${r.slug.padEnd(26)} ${String(r.W).padStart(4)}  ${uniq.length?'FAIL '+uniq.length:'pass'}`);
      if(K==='B'&&r.found.Bmeta)console.log(`      ${r.found.Bmeta}`);
      uniq.forEach(x=>console.log(`      - ${x}`));
    }
  }
  console.log('\n================ WHAT EACH RULE CAN AND CANNOT DETECT ================');
  console.log(`S-A CAN: a <p class="ai-label"> whose NEXT ELEMENT SIBLING is h1-h6.
    CANNOT: an eyebrow followed by anything else (a <div>, a <p>), and cannot
    see an eyebrow FUSED into the same element as its question — which is
    exactly the Sodium Picker's shape, so S-A is silent there by construction.
S-B CAN: a :focus-visible rule whose outline colour, resolved through the
    cascade, is byte-equal to a background-color measured off a real element
    that is currently signalling selection on that page at that width.
    CANNOT: see a selected state that is not rendered at scan time (nothing is
    pressed on first load, so fills are only found where markup ships pressed),
    and cannot judge whether two DIFFERENT colours are too close to tell apart.
S-C CAN: any laid-out element with text whose computed font-family equals the
    resolved --font-mono stack and whose computed font-size differs from the
    stamp size read out of design-tokens.md at run time.
    CANNOT: decide whether a given element SHOULD be mono. It reports the
    token-scope mismatch; the ruling on each one is AMA's. It also never
    clicks a picker option, so DYNAMICALLY RENDERED mono — notably
    .ai-concert-card-stat-val, which only exists once a cell is occupied — is
    never scanned. And it fires on nav and footer chrome on all four pages,
    which by CLAUDE.md's own standard ("a rule failing on most pieces is a
    wrong rule, not many broken pieces") means S-C as written is too broad to
    promote as-is: the platform uses mono at 9, 10 and 13px deliberately.
S-D CAN: two laid-out elements sharing a class inside one component root whose
    computed family, size or weight differ.
    CANNOT: see drift between a component and the platform outside it, or
    drift on any property other than those three.
S-E CAN: the four editorial-note substrings anywhere in innerText, on every
    tab, at every width.
    CANNOT: recognise an editor's note phrased any other way. It is a
    fixed-string scan, not a judgement about register or audience. CRITICALLY,
    it clicks tabs but never clicks a picker option, so it never sees text the
    Concert Builder renders into its result — and the R1 defect this rule was
    written to catch ("Gross figures marked TBD require source verification
    before publish") lived in exactly that dynamic result. S-E PASSING HERE IS
    THEREFORE NOT EVIDENCE THAT S-E WOULD HAVE CAUGHT R1. To cover that path
    it would have to drive the picker the way the acceptance script does.`);
  console.log('\nREPORT ONLY. Nothing above was enforced and nothing was fixed by this script.');
  process.exitCode=0;
})();
