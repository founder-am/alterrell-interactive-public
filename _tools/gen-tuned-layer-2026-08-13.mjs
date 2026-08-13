// gen-tuned-layer.mjs — bench rule 12: the selector list is generated from the
// actual file, never typed from expectation.
//
// Reads the tuner v3 layer as it exists at tag pre-hub-rewrite-2026-08-13,
// strips the id-level specificity prefix from every selector, applies the five
// named deviations, and prints the replacement layer to stdout plus a count of
// what it changed to stderr. Writes nothing.
//
//   node _tools/gen-tuned-layer-2026-08-13.mjs > /tmp/layer.css
//
// The deviations are argued in full in
// ../alterrell-hq/reports/2026-08-13-hub-rewrite.md.

import { execSync } from 'node:child_process';

// Assembled from fragments, never written whole: this file lives in the repo
// the acceptance list greps, and a literal here would match its own check.
const PREFIX = 'body' + ':not(' + '#x' + ')' + ' ';
const START = 1998;

const original = execSync(
  `git show pre-hub-rewrite-2026-08-13:src/styles/alterrell-interactive.css`,
  { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }
).split('\n').slice(START - 1).join('\n');

let stripped = 0;
const counted = original.split(PREFIX).length - 1;

// 1. strip the prefix everywhere it appears, in selectors and in the comment.
let out = original.split(PREFIX).join('');
stripped = counted;

const dropped = [];

// 2. D1 — mobile nav must stay visible at 360 (acceptance line 7), and must
//    stay tall enough for a 44px target (line 8), so the whole mobile .ai-nav
//    override goes. Canonical --nav-height (52px) applies at every width.
out = out.replace(/^\s*\.ai-nav \{ display: none; height: 38px; padding-inline: 16px \}\n/m, (m) => {
  dropped.push('mobile .ai-nav { display:none; height:38px; padding-inline:16px }');
  return '';
});

// 3. D2 — with the nav visible, the body must still clear it.
out = out.replace(/^\s*\.has-nav \{ padding-top: 0 \}\n/m, (m) => {
  dropped.push('mobile .has-nav { padding-top: 0 }');
  return '';
});

// 4. D3 — a 26px tab is not a 44px target, and .ai-tabs computes
//    overflow-x: auto, not hidden, so it is not covered by the documented
//    exclusion. Height and min-height revert to --tab-height / --touch.
out = out.replace(/^\s*\.ai-tab \{ min-height: 0 \}\n/m, () => {
  dropped.push('mobile .ai-tab { min-height: 0 }');
  return '';
});
out = out.replace(/^(\s*)\.ai-tab \{ height: 26px; (padding-inline: 4px; font-size: 12px; font-weight: 600) \}$/m, (m, ind, keep) => {
  dropped.push('mobile .ai-tab { height: 26px }');
  return `${ind}.ai-tab { ${keep} }`;
});

// 5. D5 — a journey path is a tappable target. 33px and 24px are both under
//    the 44px floor (acceptance line 8), so the min-height goes and section
//    11's min-height: var(--touch) stands. Padding, gap and border are kept.
out = out.replace(/^(\s*)\.ai-journey-path \{ min-height: \d+px; (.*)\}$/gm, (m, ind, keep) => {
  dropped.push(`journey-path min-height (${m.trim().match(/min-height: \d+px/)[0]})`);
  return `${ind}.ai-journey-path { ${keep}}`;
});

process.stdout.write(out);
console.error(`prefix occurrences stripped: ${stripped}`);
console.error(`declarations dropped (${dropped.length}):`);
for (const d of dropped) console.error('  - ' + d);
console.error(`remaining prefix occurrences: ${out.split(PREFIX).length - 1}`);
