#!/usr/bin/env node
/*
 * meta-test.js — tests the rules, not the pieces.
 *
 * Two things are asserted:
 *
 *  1. COVERAGE. Every pass/fail rule check.js can emit has both a
 *     -pass and a -fail fixture. A rule with no fixture is an untested
 *     rule, and this exits non-zero for it.
 *
 *  2. ISOLATION. On <RULE>-fail the target rule FAILs and every other
 *     rule in the same family PASSes; on <RULE>-pass every rule in the
 *     family PASSes. Cross-family results are ignored by design: a
 *     geometry fixture carries no breadcrumb, and a structure fixture's
 *     geometry is whatever the platform stylesheet does.
 *
 * Isolation is the part that matters. A rule that fires on its own
 * fixture proves nothing if it also fires on the other fourteen.
 *
 *   node meta-test.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const TOOLS = __dirname;
const FIXTURES = path.join(TOOLS, 'fixtures');
const STRUCTURE = ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11'];
const GEOMETRY = ['G1','G2','G3','G4','G7'];
const ALL = [...STRUCTURE, ...GEOMETRY];

const jsonOut = path.join(os.tmpdir(), `fixture-run-${process.pid}.json`);
console.log(`Running check.js over ${FIXTURES} at width 1280...\n`);
execFileSync(
  process.execPath,
  [path.join(TOOLS, 'check.js'), '--file', FIXTURES, '--width', '1280', '--no-shots', '--deterministic', '--json', jsonOut],
  { stdio: ['ignore', 'pipe', 'inherit'] }
);
const run = JSON.parse(fs.readFileSync(jsonOut, 'utf8'));
fs.unlinkSync(jsonOut);

const bySlug = new Map(run.pieces.map((p) => [path.basename(p.path, '.html'), p]));
const failures = [];

/* ---- 1. coverage ---- */
for (const rule of ALL) {
  for (const kind of ['pass', 'fail']) {
    const name = `${rule}-${kind}`;
    if (!fs.existsSync(path.join(FIXTURES, `${name}.html`))) {
      failures.push(`COVERAGE  ${rule} has no ${kind} fixture (${name}.html missing)`);
    } else if (!bySlug.has(name)) {
      failures.push(`COVERAGE  ${name}.html exists but produced no result`);
    }
  }
}

/* ---- 2. isolation ---- */
const statusOf = (piece, rule) => {
  if (STRUCTURE.includes(rule)) return piece.structure ? (piece.structure[rule] || {}).status : undefined;
  const w = piece.widths[1280];
  return w && w.geometry ? (w.geometry[rule] || {}).status : undefined;
};

for (const rule of ALL) {
  const family = STRUCTURE.includes(rule) ? STRUCTURE : GEOMETRY;
  for (const kind of ['pass', 'fail']) {
    const piece = bySlug.get(`${rule}-${kind}`);
    if (!piece) continue;
    const want = kind === 'fail' ? 'FAIL' : 'PASS';
    const got = statusOf(piece, rule);
    if (got !== want) {
      failures.push(`TARGET    ${rule}-${kind}: expected ${rule}=${want}, got ${got}`);
    }
    for (const other of family) {
      if (other === rule) continue;
      const s = statusOf(piece, other);
      if (s !== 'PASS') {
        failures.push(`ISOLATION ${rule}-${kind}: ${other} should be PASS, got ${s}`);
      }
    }
  }
}

/* ---- report ---- */
console.log(`\nRule hash: ${run.ruleHash}`);
console.log(`Chromium:  ${run.chromium} (pinned ${run.chromiumPinned})`);
console.log(`Fixtures:  ${run.pieces.length} evaluated, ${ALL.length} rules covered\n`);

if (failures.length) {
  console.error(`META-TEST FAILED — ${failures.length} problem(s):\n`);
  failures.forEach((f) => console.error('  ' + f));
  process.exit(1);
}
console.log(`META-TEST PASSED — all ${ALL.length} rules have a passing and a failing fixture, each isolated within its family.`);
