#!/usr/bin/env node
/*
 * _generate.js — writes the rule fixtures.
 *
 * Two fixtures per pass/fail rule: <RULE>-pass.html where the rule
 * passes, <RULE>-fail.html where it fails. The point of a fixture is
 * isolation, so each one is built from a family base that satisfies
 * every rule in its family, with exactly one deviation applied.
 *
 * Families are scoped deliberately:
 *   structure fixtures link the platform stylesheet (S10 needs it) and
 *   their geometry results are ignored;
 *   geometry fixtures are self-contained (no platform CSS) so their
 *   geometry is fully controlled, and their structure results are
 *   ignored.
 *
 * All fixtures are authored to be evaluated at 1280.
 *   node _generate.js
 */

const fs = require('fs');
const path = require('path');

const OUT = __dirname;

/* ---------------- structure family ---------------- */

const sDoc = (o = {}) => {
  const bodyClass = o.bodyClass ?? 'has-breadcrumb';
  // S10 asserts that a linked stylesheet resolves to a real file containing
  // .ai-inner — not that its filename says "alterrell-interactive.css",
  // which a bundler rewrites. The default fixture stylesheet carries the
  // marker; o.cssNoMarker swaps in a valid file that does not.
  const sheet = o.cssNoMarker ? 'assets/no-ai-inner.css' : 'assets/has-ai-inner.css';
  const css = o.noCss ? '' : `\n  <link rel="stylesheet" href="${sheet}">`;
  const crumb = '<nav class="ai-breadcrumb" aria-label="Breadcrumb"><span>Alterrell Interactive</span></nav>';
  const nav = '<nav class="ai-nav" role="navigation" aria-label="Platform navigation"><a href="/">Alterrell Interactive</a></nav>';
  const order = o.navFirst ? `${nav}\n${crumb}` : `${crumb}\n${nav}`;
  const firstLabel = o.firstTab ?? 'Overview';
  const lastLabel = o.lastTab ?? 'Sources';
  const dt = (id) => (o.hashTarget ? `#${id}` : id);
  const ac = (id) => (o.noAriaControls ? '' : ` aria-controls="${id}"`);
  const extraBar = o.secondBar
    ? `\n<div class="ai-tabs" role="tablist" aria-label="Second bar">\n  <button class="ai-tab" role="tab" aria-selected="false" aria-controls="tab-overview" data-target="tab-overview">Overview</button>\n</div>`
    : '';
  const orphan = o.orphanPanel ? `\n<section id="tab-orphan" role="tabpanel"><p>Unreachable panel.</p></section>` : '';
  const bbl = o.bbl ? ' bbl-legacy' : '';
  const placeholder = o.placeholder ? '<p>[AMA — section headline]</p>' : '<p>Settled copy.</p>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fixture</title>${css}
</head>
<body class="${bodyClass}">
${order}
<div class="ai-tabs${bbl}" role="tablist" aria-label="Sections">
  <button class="ai-tab" role="tab" aria-selected="true"${ac('tab-overview')} data-target="${dt('tab-overview')}">${firstLabel}</button>
  <button class="ai-tab" role="tab" aria-selected="false"${ac('tab-sources')} data-target="${dt('tab-sources')}">${lastLabel}</button>
</div>${extraBar}
<section id="tab-overview" role="tabpanel">${placeholder}</section>
<section id="tab-sources" role="tabpanel"><p>Source list.</p></section>${orphan}
</body>
</html>
`;
};

const STRUCTURE = {
  S1: { fail: { bodyClass: '' } },
  S2: { fail: { navFirst: true } },
  S3: { fail: { secondBar: true } },
  S4: { fail: { hashTarget: true } },
  S5: { fail: { noAriaControls: true } },
  S6: { fail: { orphanPanel: true } },
  S7: { fail: { firstTab: 'Introduction' } },
  S8: { fail: { lastTab: 'Notes' } },
  S9: { fail: { bbl: true } },
  // Negative case is the one a filename check cannot see: a stylesheet that
  // links fine and resolves fine but is not the platform's.
  S10: { fail: { cssNoMarker: true } },
  S11: { fail: { placeholder: true } },
};

/* ---------------- geometry family ---------------- */

const gDoc = (o = {}) => {
  const extraCss = o.css ?? '';
  const body = o.body ?? '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fixture</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #ffffff; color: #111111;
           font-family: Arial, Helvetica, sans-serif; }
    .wrap { width: 1000px; margin: 0 auto; padding: 16px; }
    h1 { font-size: 32px; color: #111111; margin: 0 0 16px; }
    p  { font-size: 16px; color: #111111; margin: 0 0 12px; }
    .ai-tabs { display: flex; gap: 4px; margin: 0 0 16px; }
    .ai-tab { flex: 1 1 auto; height: 48px; min-width: 48px; border: 0;
              background: #eeeeee; color: #111111; font-size: 14px; }
    a.btn { display: inline-block; width: 140px; height: 48px; line-height: 48px;
            text-align: center; background: #eeeeee; color: #111111;
            text-decoration: none; }
${extraCss}  </style>
</head>
<body>
<div class="wrap">
  <h1>Fixture heading</h1>
  <div class="ai-tabs" role="tablist" aria-label="Sections">
    <button class="ai-tab" role="tab" aria-selected="true" aria-controls="p1" data-target="p1">One</button>
    <button class="ai-tab" role="tab" aria-selected="false" aria-controls="p2" data-target="p2">Two</button>
  </div>
  <section id="p1" role="tabpanel"><p>Body copy at a comfortable contrast.</p></section>
  <section id="p2" role="tabpanel"><p>More body copy at a comfortable contrast.</p></section>
  <a class="btn" href="#target">Action</a>
${body}</div>
</body>
</html>
`;
};

const GEOMETRY = {
  // child wider than its non-scrollable parent
  G1: { fail: { body: '  <div class="overflower"><p>Too wide.</p></div>\n', css: '    .overflower { width: 2000px; background: #ffffff; }\n' } },
  // fixed height + overflow hidden clips text with no scrollbar
  G2: { fail: { body: '  <div class="clipper"><p>One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten. Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen.</p></div>\n', css: '    .clipper { height: 32px; overflow: hidden; width: 300px; }\n' } },
  // a control below the 44x44 minimum
  G3: { fail: { body: '  <button class="tiny">x</button>\n', css: '    .tiny { width: 30px; height: 30px; border: 0; background: #eeeeee; color: #111111; }\n' } },
  // a tab rendered fully outside a non-scrollable tab bar
  G4: { fail: { body: '', css: '    .ai-tabs { position: relative; width: 300px; overflow-x: visible; }\n    .ai-tabs .ai-tab:last-child { position: absolute; left: 420px; top: 0; width: 100px; height: 48px; }\n' } },
  // text below the WCAG minimum against its background
  G7: { fail: { body: '  <p class="faint">Low contrast paragraph.</p>\n', css: '    .faint { color: #bbbbbb; background: #ffffff; }\n' } },
};

/* ---------------- emit ---------------- */

let n = 0;
const written = [];
for (const [rule, spec] of Object.entries(STRUCTURE)) {
  fs.writeFileSync(path.join(OUT, `${rule}-pass.html`), sDoc({}));
  fs.writeFileSync(path.join(OUT, `${rule}-fail.html`), sDoc(spec.fail));
  written.push(`${rule}-pass.html`, `${rule}-fail.html`);
  n += 2;
}
for (const [rule, spec] of Object.entries(GEOMETRY)) {
  fs.writeFileSync(path.join(OUT, `${rule}-pass.html`), gDoc({}));
  fs.writeFileSync(path.join(OUT, `${rule}-fail.html`), gDoc(spec.fail));
  written.push(`${rule}-pass.html`, `${rule}-fail.html`);
  n += 2;
}

fs.writeFileSync(
  path.join(OUT, 'MANIFEST.json'),
  JSON.stringify(
    {
      structureRules: Object.keys(STRUCTURE),
      geometryRules: Object.keys(GEOMETRY),
      evaluatedAtWidth: 1280,
      files: written.sort(),
    },
    null,
    2
  )
);
console.log(`wrote ${n} fixtures + MANIFEST.json to ${OUT}`);
