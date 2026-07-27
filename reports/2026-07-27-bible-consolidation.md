# Bible Consolidation — Session Report
2026-07-27 · Batch A, documentation only

This report supersedes the same-named report from the earlier pass this session. That pass logged D-93–D-108; this one corrects and extends it with D-109 and two ruling reversals (D-100, D-102) that the corrected instructions carried.

## Files created
- `ALTERRELL-INTERACTIVE-BIBLE.md` — canonical rules file. 16 sections (LANE, SKEL, HERO, JRNY, TABS, PROSE, GALL, CARD, CHART, SHARE, SRC, FOOT, COPY, A11Y, BUILD, SHIP), plus Appendix A (decision history), Appendix B (non-enforceable guidance), Appendix C (conflict register with resolutions). Logs D-93 through D-109.
- `CLAUDE.md` — rewritten (unchanged from the prior pass — already matched spec). Read list points to the Bible, root `piece-template.html`, `alterrell-interactive.css`, `PROJECT-STATUS.md`, and the two `_design/` reference HTML files (chart/visual work only). D-107 stated as a session rule.
- `reports/` directory — already existed from the prior pass.
- This report (overwrites the prior version).

## Files retired (git mv to `old/`, nothing deleted)
Already retired in the prior pass this session; re-verified, not re-moved:
- `_data/platform/AI-MASTER-RULES.md` → `old/AI-MASTER-RULES.md`
- `_data/platform/DESIGN-DECISION-LOG.md` → `old/DESIGN-DECISION-LOG.md`
- `_data/platform/DEPLOY-CHECKLIST.md` → `old/DEPLOY-CHECKLIST.md`
- `_data/platform/CHART-LIBRARY-SPEC.md` → `old/CHART-LIBRARY-SPEC.md`
- `_data/platform/TAG-AND-SHARE-BUILD-SPEC.md` → `old/TAG-AND-SHARE-BUILD-SPEC.md`
- `_design/DESIGN-PRINCIPLES.md` → `old/DESIGN-PRINCIPLES.md`
- `_workbench/CARD-INVENTORY.md` → `old/CARD-INVENTORY.md`
- `_data/templates/piece-template.html` → `old/piece-template-stub.html`

Retirement gate: every rule from the Phase 1 census was reconfirmed present in the revised Bible's main body or Appendix B after applying this pass's corrections (D-100 reversal, D-102 grandfather, D-109 addition, D-98 note) — no rule became unaccounted for, so nothing needed to move or unmove.

## Rule count by section (main body — script-evaluable FAILS IF)

| Section | Count |
|---|---|
| LANE | 5 |
| SKEL | 6 |
| HERO | 4 |
| JRNY | 5 |
| TABS | 11 |
| PROSE | 5 |
| GALL | 4 |
| CARD | 12 |
| CHART | 8 |
| SHARE | 4 |
| SRC | 3 |
| FOOT | 1 |
| COPY | 5 |
| A11Y | 4 |
| BUILD | 4 |
| SHIP | 4 |
| **Total** | **85** |

## Moved to Appendix B (non-enforceable guidance)
29 rules, by section: LANE 1 · SKEL 1 · HERO 2 · JRNY 1 · TABS 1 · PROSE 2 · GALL 1 (n/a note) · CARD 2 · CHART 3 · SHARE 1 (n/a note) · SRC 1 · FOOT 1 (n/a note) · COPY 2 · A11Y 1 (n/a note) · BUILD 6 · SHIP 3. BUILD grew by one from the prior pass (D-109 added alongside D-95 as a governance principle, not a piece-level check).

Combined main body + Appendix B = 114 rules total.

## What changed from the prior pass this session
- **D-100 reversed.** Previously: no prose cap anywhere, D-73's grandfather retired. Now: no prose cap only on pieces built/rebuilt 2026-07 forward; pieces live as of 2026-07-01 keep their existing caps; D-73's grandfather **stands** and is explicitly **extended to Naming Part 3**. PROSE-01 and Appendix C's C-f were rewritten. Naming Parts 0–3's `.win-inner: max-width: 860px` is **not** a violation — it's grandfathered, same as Concert Tax's and Sodium's own legacy prose treatment.
- **D-102 gained a named grandfather.** Concert Tax and Sodium keep the "Spread the Word" tab label; every other piece built/rebuilt 2026-07 forward uses "Share to Social." TABS-02 and SHARE-03 updated accordingly.
- **D-109 added.** Forward-only is now the stated default for any ruling that doesn't declare its own scope. Applied explicitly to GALL-01 (D-93), TABS-06 (D-98), and SHARE-02 (D-104), each of which previously read as unscoped.
- **D-98 verified against the live repo, not just logged.** Grepped `gay-uncles/index.html`, `gay-uncles/index.new.html`, and `gay-uncles/index.new-2026-07-21.html` for `.bbl-subtabs`. All three contain the "Audience navigation" sub-tab block (For the Big Men / For the Chasers / For the Friend Group). The live file is grandfathered clean by D-109 (predates 2026-07-01); neither rebuild draft is, since a rebuild is by definition happening forward. Recorded as new conflict-register item C-m.

## Appendices
- Appendix A: 74 rows. Covers D-20, D-21, D-40 through D-109 individually, plus two collapsed gap rows: D-1–D-19 (out of scope — cross-project `canonical/DECISIONS.md`, never read for this Bible) and D-22–D-39 (a gap in `DESIGN-DECISION-LOG.md`'s own source text, not explained there, not invented here).
- Appendix B: 29 guidance rules, none with a machine-checkable FAILS IF.
- Appendix C: 13 conflicts. C-a through C-l carry forward the Phase 1 register (all six required checks plus the five additional conflicts, plus the seven resolutions this session's instructions specified verbatim). C-m is new this pass — the D-98 live/draft sub-tab finding above.

## Anything unresolved
- **D-1 through D-19**: not reconstructed — cross-project `canonical/DECISIONS.md`, out of scope for this Bible. Recorded, not invented.
- **D-22 through D-39**: a gap in the source log itself, with no explanation given there. Recorded as a gap, not invented.
- **Gay Uncles rebuild still carries `.bbl-subtabs`** in both drafts (see C-m above). Whichever draft becomes the live `index.html` must remove the sub-tab pattern and move audience segmentation into the card eyebrow before that swap, per D-98. Not fixed here — this pass is documentation only, no piece rebuilds.
- **D-72 / Crowning Achievements**: D-108 leaves this deferred, not settled. CARD-04 has no live enforcement surface until Crowning Achievements actually builds.
- **`gay-uncles/index.new.html` collision**: resolved in the prior pass this session (moved the older `old/gay-uncles/index.new.html` to `gay-uncles/index.new-2026-07-21.html` rather than overwriting the newer WIP, per user decision). No change needed this pass; noted here for continuity since this report supersedes that pass's report.
