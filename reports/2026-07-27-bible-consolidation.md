# Bible Consolidation — Session Report
2026-07-27 · Batch A, documentation only

## Files created
- `ALTERRELL-INTERACTIVE-BIBLE.md` — canonical rules file. 16 sections (LANE, SKEL, HERO, JRNY, TABS, PROSE, GALL, CARD, CHART, SHARE, SRC, FOOT, COPY, A11Y, BUILD, SHIP), plus Appendix A (decision history), Appendix B (non-enforceable guidance), Appendix C (conflict register with resolutions). Logs D-93 through D-108.
- `CLAUDE.md` — rewritten. Read list now points to the Bible, root `piece-template.html`, `alterrell-interactive.css`, `PROJECT-STATUS.md`, and the two `_design/` reference HTML files (chart/visual work only). D-107 added as a stated session rule.
- `reports/` directory — created (did not exist).
- This report.

## Files retired (git mv to `old/`, nothing deleted)
- `_data/platform/AI-MASTER-RULES.md` → `old/AI-MASTER-RULES.md`
- `_data/platform/DESIGN-DECISION-LOG.md` → `old/DESIGN-DECISION-LOG.md`
- `_data/platform/DEPLOY-CHECKLIST.md` → `old/DEPLOY-CHECKLIST.md`
- `_data/platform/CHART-LIBRARY-SPEC.md` → `old/CHART-LIBRARY-SPEC.md`
- `_data/platform/TAG-AND-SHARE-BUILD-SPEC.md` → `old/TAG-AND-SHARE-BUILD-SPEC.md`
- `_design/DESIGN-PRINCIPLES.md` → `old/DESIGN-PRINCIPLES.md`
- `_workbench/CARD-INVENTORY.md` → `old/CARD-INVENTORY.md`
- `_data/templates/piece-template.html` → `old/piece-template-stub.html`

Retirement gate: every rule from the Phase 1 census was confirmed present in the Bible's main body or Appendix B before any of the eight files were moved. No rule was unaccounted for, so nothing blocked the move.

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
28 rules, by section: LANE 1 · SKEL 1 · HERO 2 · JRNY 1 · TABS 1 · PROSE 2 · GALL 1 (n/a note) · CARD 2 · CHART 3 · SHARE 1 (n/a note) · SRC 1 · FOOT 1 (n/a note) · COPY 2 · A11Y 1 (n/a note) · BUILD 5 · SHIP 3.

Combined main body + Appendix B = 113 rules total, consolidated from the Phase 1 census (~107 rows) plus new rulings this session (D-93–D-108) and a handful of rules the census had flagged but not fully separated (e.g. hub grid breakpoints, OF texture treatment).

## Appendices
- Appendix A: 73 rows. Covers D-20, D-21, D-40 through D-108 individually, plus two collapsed gap rows: D-1–D-19 (out of scope — belongs to a separate cross-project `canonical/DECISIONS.md` never read for this Bible) and D-22–D-39 (a gap in `DESIGN-DECISION-LOG.md`'s own source text, not explained there, not invented here).
- Appendix B: 28 guidance rules, none with a machine-checkable FAILS IF.
- Appendix C: 12 conflicts carried forward from the Phase 1 conflict register, each with a resolution. Covers all six required checks (card dimensions, tab count/names, the two templates, chart-spec status, tag-and-share spec vs. D-76/D-77, prose width) plus the five additional conflicts found in Phase 1, plus the seven resolutions this session's instructions specified verbatim.

## Anything unresolved
- **D-1 through D-19**: not reconstructed. They are cited elsewhere (`AI-DECISIONS.md` cites D-17, the retired precheck cites D-5) as belonging to a cross-project `canonical/DECISIONS.md` log outside this repo, which was never part of either phase's file list. Recorded as out-of-scope in Appendix A rather than fabricated.
- **D-22 through D-39**: a gap with no explanation in the source `DESIGN-DECISION-LOG.md` itself. Recorded as a gap, not invented.
- **`gay-uncles/index.new.html` collision (step 2)**: the instructed `git mv old/gay-uncles/index.new.html → gay-uncles/index.new.html` could not run as written — a different, newer file already existed at the destination (committed 2026-07-26, containing the un-cut "Hold Your Ground" content that D-97 refers to). Overwriting it would have destroyed that WIP. Per user decision, the older `old/` file was moved to `gay-uncles/index.new-2026-07-21.html` instead, preserving both under distinct names. No content was lost or overwritten.
- **D-72 / Crowning Achievements**: D-108 leaves this deferred, not settled. CARD-04 has no live enforcement surface until Crowning Achievements actually builds — flagged, not resolved, by design.
- **Naming Parts 0–3 `.win-inner: max-width: 860px`**: now uniformly non-compliant with PROSE-01 following D-100's retirement of D-73's grandfather clause. No rebuild was performed this session (Batch A, documentation only, no piece rebuilds) — this is a known, now-unambiguous violation queued for each part's scheduled D-88/D-90 rebuild.
