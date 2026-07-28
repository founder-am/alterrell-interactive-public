# Gay Uncles rebuild — Batch B, 2026-07-27

## What happened

Archived both prior files (`gay-uncles/index.html` → `_data/archive/gay-uncles-index-2026-05.html`,
`gay-uncles/index.new.html` → `_data/archive/gay-uncles-draft-2026-07.html`). Built a new
`gay-uncles/index.new.html` from `piece-template.html` — a shell rebuild only. Per D-94, this
does not ship live: `gay-uncles/index.html` was not created or touched, and the hub /
Explore-link flip (D-82) was not touched.

`gay-uncles/index.new-2026-07-21.html` (an older, untouched snapshot draft already sitting in
`gay-uncles/`) was left in place — it was not named in this session's instructions.

## Tab list (8, in order)

1. Overview
2. My Story
3. The Map
4. The Data
5. Hold Your Ground
6. Supporting Us
7. Share to Social
8. Sources

All labels are AMA's own, unchanged. Bare `id` in every `data-target`, matching `aria-controls`,
no hash (TABS-08). `role="tabpanel"` on all 8 sections (TABS-09).

## Card count per tab

| Tab | Cards | Shell |
|---|---|---|
| Overview | O-1, O-2 | A (stat), D (comparison) |
| My Story | none | — |
| The Map | M-1a, M-1b, M-1c, M-2, M-3 | B×3 (split, "N of 3"), D×2 |
| The Data | W-1a, W-1b, W-2a, W-2b | B×4 (split, "N of 2") |
| Hold Your Ground | none | — |
| Supporting Us | none | — |
| Share to Social | SC-1, SC-2 | `<img>` per D-77/SHARE-04, not carousel cards |
| Sources | none | — |

**Total: 11 carousel cards** (all 300×280, dark lane, gold `#E8B923` border, `.carousel--dark`
throughout — CARD-03) **+ 2 pre-rendered share images.** All 10 M-1 poll-city bars and all 7
W-1/W-2 bars use the CHART-01 formula (longest bar = 90% of track, others scaled proportionally
against that same card's dataset max) rather than hardcoded widths.

Note on the sample commit-message text given for this session ("12 cards"): the actual built
count is 11 carousel cards. The commit message below states 11 to stay accurate to the diff
(BUILD instruction: "message must accurately describe the diff").

## Placeholder count: 9

- `[AMA — Section headline]` × 4 (My Story, The Map, The Data — brief explicitly calls these
  pending; a 4th also left on Overview for consistency, since no headline distinct from the
  hero was ever locked)
- `[AMA — O-2 EDITORIAL LINE]`, `[AMA — M-2 EDITORIAL LINE]`, `[AMA — M-3 EDITORIAL LINE]`,
  `[AMA — W-2 EDITORIAL LINE]` — brief marks all four as unfilled
- `[AMA — Share to Social intro, 1-2 sentences]`

Two additional bracketed gaps ship as-is because they are already inside `GAY-UNCLES-COPY.md`
verbatim (The Data tab, paragraph 2): `[Did the data back this up?]` and `[insert validated
claim and/or point to the gallery card]`. These are AMA's own unresolved copy, not something
built here — harvested verbatim per instruction, not edited.

Per instruction, the nine corrected typos in `GAY-UNCLES-COPY.md` were kept as corrected, and
items 5 and 6 (both in My Story) were left exactly as-is, unresolved, no replacement text
supplied.

One thing intentionally **not** carried into the shipped page: COPY.md's My Story section
contains an inline note — `[OPEN — DO NOT BUILD CARDS HERE YET]` — that is an instruction to
the builder, not reader-facing copy. Per COPY-04 (no build notes in production HTML), this note
was read and obeyed (no cards were built for My Story) but excluded from the rendered page. Same
treatment for the italic bracket notes at the top of The Map and The Data sections in COPY.md
(`*[M-1 cards: ...]*`, `*[W-1 cards: ...]*`) — read as build directives, not shipped as text.

## Self-check.sh output

```
=== self-check.sh — 2026-07-27 ===

ROT: DEGRADED: DESK.md missing

--- 1. DIVERGENCE ---
PASS: DIVERGENCE — Where's Beyoncé build status: no disagreement across tracked files
PASS: DIVERGENCE — Lecturer + writer CVs status: no disagreement across tracked files
PASS: DIVERGENCE — weekly reset-day cadence: no contradiction found across tracked files

--- 2. STALENESS ---
FLAG: STALENESS — DESK.md does not exist
  fix: generate DESK.md (see reference/FRIDAY-PROMPT.md)
FLAG: STALENESS — BOARD.html does not exist
  fix: generate BOARD.html (see reference/FRIDAY-PROMPT.md)

--- 3. ORPHAN ARTIFACT ---
PASS: ORPHAN ARTIFACT — outputs/ and capture/ are fully committed

--- 4. ORPHAN DECISION ---
PASS: ORPHAN DECISION — no unresolved escalations found in capture/*.md

--- 5. UNRECONCILED CONFLICT ---
FLAG: UNRECONCILED CONFLICT — no DECISIONS.md found (expected DECISIONS.md)
  fix: create DECISIONS.md
PASS: UNRECONCILED CONFLICT — STATUS-*.md files agree with each other on tracked fields

--- 6. TOUCHPOINT CREEP ---
FLAG: TOUCHPOINT CREEP — audits/baseline-touchpoints.txt does not exist; current count is 0
  fix: echo 0 > audits/baseline-touchpoints.txt

=== 4 flag(s) ===
```

All 4 flags are pre-existing, repo-wide conditions (`DESK.md`, `BOARD.html`, `DECISIONS.md`,
`audits/baseline-touchpoints.txt` — none exist anywhere in the repo) unrelated to this piece
build. Nothing in this script checks the piece file itself.

## Screenshots

16 files in `reports/gay-uncles-2026-07-27/`: one `[tab]-1280.png` and one `[tab]-390.png` per
tab (8 tabs × 2 widths).

## Clipped cards: none

Checked all 11 cards at 1280px and 390px, with particular attention to the three M-1 splits
and both W-2 cards (the densest, 4-row Shell B instances). All bar rows, labels, and source
stamps render inside the fixed 300×280 card with no visible clipping at either width.

One build-time-only rendering artifact, not a card clip: the Share to Social tab's two `<img>`
tags (SC-1/SC-2) point at `/og/gay-uncles-sc1.png` and `-sc2.png`, which **do not exist yet**.
Per instruction these tags were emitted anyway. Browsers reserve the declared `width="1080"
height="1080"` box for a broken image, which pushes the share-destination grid and platform
CTAs (both confirmed present and correctly styled) well below the fold in a 3000px-tall capture.
Confirmed via a 6000px-tall screenshot that both zones render correctly once you scroll past the
two broken-image placeholders. This resolves on its own once the real PNGs are in place.

A second, real gap this build caught and fixed: `.share-block`/`.share-btn` (Overview tab) and
`.pt-share-grid`/`.pt-share-dest` (Share to Social tab) are piece-local conventions per
`piece-template.html`'s own comments — they carry no styling from `alterrell-interactive.css`.
The first draft of this file omitted a piece-local `<style>` block entirely; that left the
Share to Social destination grid rendering as unstyled inline text. Added a minimal piece-local
`<style>` block (dark-lane colors only, modeled on `concert-tax/index.html`'s `.ct-share-grid`
pattern) scoped to exactly these four class families — no platform selector is redefined
(SKEL-05 compliant). Re-screenshotted after the fix; confirmed correct.

## Bible rules this build could not fully satisfy, and why

1. **TABS-05 / D-97 conflict with the 8-tab, Hold-Your-Ground-included instruction.**
   `ALTERRELL-INTERACTIVE-BIBLE.md` (read at the top of this session, dated 2026-07-27 — the
   same date as this build) states as its own rule: "Gay Uncles ships exactly 7 tabs...
   'Hold Your Ground' is cut" (TABS-05, citing D-97), and TABS-04/D-101 requires any 7+ tab
   count to have "a logged, AMA-confirmed decision entry" in Appendix A. The build instruction
   for this session calls for 8 tabs including Hold Your Ground, citing "D-110" as that
   exception. **D-110 does not appear anywhere in the Bible file read for this session** —
   the log runs D-1 through D-109. This build proceeded on the 8-tab instruction as given
   (treating it as AMA issuing a new ruling in the act of giving this instruction), but the
   Bible itself has not been updated to record D-110, and TABS-05 as currently written still
   says 7. Until the Bible's Appendix A gets a D-110 row and TABS-05 is amended, this shell
   is out of compliance with the Bible's own current text on tab count.

2. **TABS-03 / D-103 default for the *n*−2 tab.** D-102/D-103 set the *n*−2 tab (here,
   position 6 of 8) to "Take Action" for any piece not live as of 2026-07-01, with named
   exceptions only for Concert Tax and Sodium (which keep "Spread the Word"). This build's
   *n*−2 tab is "Supporting Us" per this session's explicit tab list — a third name not
   covered by any grandfather or exception on record. No decision number was given for this
   specific deviation (only the tab-*count* exception cited D-110). Flagging this as a second,
   separate open item alongside D-110 rather than assuming it's covered by the same exception.

3. **TABS-06 sub-tabs.** Not a violation, but worth confirming explicitly since Appendix C
   (C-m) calls it out by name: the old `.bbl-subtabs` "Audience navigation" pattern (For the
   Big Men / For the Chasers / For the Friend Group) is gone from this rebuild. Supporting Us
   ships as two plain `<h3>` headings, no nested `role="tablist"`, per this session's explicit
   instruction and per TABS-06/D-98.

Everything else checked against the Bible's SKEL/HERO/JRNY/TABS/PROSE/GALL/CARD/CHART/SHARE/
SRC/FOOT/COPY/A11Y sections passed against this shell as built (dark lane throughout via
`.ai-section--dark` and `.carousel--dark`, no `bbl-` classes, no accordions, no prose-width cap,
journey block exactly once with 3 real-URL items and a live Ko-fi link, Overview share block at
exactly 2 destinations, Share to Social tab's 4-zone order, Sources as a visible tab with a
numbered, DM-Mono-labeled source list).
