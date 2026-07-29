# READ FIRST — alterrell-interactive-public

# old/ MANIFEST

Files demoted out of the live tree. Nothing here was deleted: every row
arrived by `git mv`, so `git log --follow` reads straight through the
move into the file's full history.

A file is here because it was superseded, because it duplicated or
contradicted a value `alterrell-interactive.css` already owns, or
because nothing referenced it and nothing was pending on it. Demotion
is reversible — `git mv` it back.

Entries above the 2026-07-29 block predate this manifest and were
retired by earlier sessions; they are listed for completeness without
a demotion date.

## 2026-07-29 — demotion pass (27 files)

| Original path | Demoted | Reason | Replacement |
|---|---|---|---|
| `_data/naming/direction1_statement.html` | 2026-07-29 | Early direction study for the Naming series; the built page is the answer | `naming/part-0/index.html` |
| `_data/naming/direction2_name_chart.html` | 2026-07-29 | Early direction study | `naming/part-1/index.html` |
| `_data/naming/direction3_evidence_wall.html` | 2026-07-29 | Early direction study | `naming/part-2/index.html` |
| `_data/naming/direction4_before_after.html` | 2026-07-29 | Early direction study | `naming/part-3/index.html` |
| `_data/naming/option_a_narrative_chart.html` | 2026-07-29 | Layout option A, not chosen | `naming/part-1/index.html` |
| `_data/naming/option_b_chart_hero.html` | 2026-07-29 | Layout option B, not chosen | `naming/part-1/index.html` |
| `_data/naming/option_c_cascade.html` | 2026-07-29 | Layout option C, not chosen | `naming/part-1/index.html` |
| `_data/naming/mariah_option1_obsidian.html` | 2026-07-29 | Single-name study variant, not chosen | `_data/naming/mariah_final.html` |
| `_data/naming/mariah_option2_slate.html` | 2026-07-29 | Single-name study variant, not chosen | `_data/naming/mariah_final.html` |
| `_data/naming/mariah_visualization.html` | 2026-07-29 | Single-name study, superseded by the final cut | `_data/naming/mariah_final.html` |
| `_data/naming/FINAL_DELIVERABLES_SUMMARY.md` | 2026-07-29 | Point-in-time build summary; decisions now live in the Bible | `ALTERRELL-INTERACTIVE-BIBLE.md` Appendix A |
| `_data/naming/CHARTS_FIXED_SUMMARY.md` | 2026-07-29 | Point-in-time build summary | `ALTERRELL-INTERACTIVE-BIBLE.md` Appendix A |
| `_data/platform/COMPLIANCE-MATRIX.md` | 2026-07-29 | Prose rule/compliance table; superseded by the Bible and by the fact that a rule now exists only if `_tools/check.js` evaluates it | `ALTERRELL-INTERACTIVE-BIBLE.md` |
| `_data/platform/alterrell_platform_decision_tree.html` | 2026-07-29 | Decision flow superseded by the consolidated decision history | `ALTERRELL-INTERACTIVE-BIBLE.md` Appendix A |
| `_data/platform/STRUCTURAL-AUDIT-REPORT.md` | 2026-07-29 | Hand-written structural audit; the checker now produces this against the live DOM instead of from reading source | `_tools/check.js` |
| `_design/VISUAL-REFERENCE.html` | 2026-07-29 | **Contradicted the platform.** Its `:root` redefined `--ink` `#0F172A`, `--ink-secondary` `#64748B`, `--ink-muted` `#94a3b8`, `--border` `#E2E0DC`, `--paper-warm` `#f5f3ee` — a slate palette against the platform's warm neutral. Removed from the CLAUDE.md UPLOAD GATE in the same commit | `alterrell-interactive.css` `:root` |
| `concert-tax/assets/chart-bubble.html` | 2026-07-29 | Generator for an exported image; the piece links neither, but the PNG is the shipped artifact | `concert-tax/assets/chart-bubble.png` |
| `concert-tax/assets/chart-historical.html` | 2026-07-29 | Generator for an exported image | `concert-tax/assets/chart-historical.png` |
| `_workbench/btu-cards.html` | 2026-07-29 | Card mockup hardcoding 300/280 and platform hexes; card generation is now a tool, not a per-piece mockup | `tools/ai-card-studio.html` |
| `_workbench/concert-tax-cards.html` | 2026-07-29 | Card mockup, same | `tools/ai-card-studio.html` |
| `_workbench/copaganda-cards.html` | 2026-07-29 | Card mockup, same | `tools/ai-card-studio.html` |
| `_workbench/crowning-achievements-cards.html` | 2026-07-29 | Card mockup, same | `tools/ai-card-studio.html` |
| `_workbench/gay-uncles-cards.html` | 2026-07-29 | Card mockup, same | `tools/ai-card-studio.html` |
| `_workbench/naming-cards.html` | 2026-07-29 | Card mockup, same | `tools/ai-card-studio.html` |
| `_workbench/btu-network-map.html` | 2026-07-29 | Earlier BTU map variant, unreferenced | `_workbench/btu-web-map.html` |
| `gay-uncles/index.new-2026-07-21.html` | 2026-07-29 | Older rebuild snapshot; the current draft has already dropped the `.bbl-subtabs` pattern Bible C-m flags | `gay-uncles/index.new.html` |
| `protein-efficiency-calculator.html` | 2026-07-29 | Standalone tool at repo root, unreferenced since 2026-03-12, not in the hub roster, no successor planned | NONE |

## Kept, and why

Considered and deliberately not demoted, so the reasoning is not
re-litigated next pass:

| File | Why kept |
|---|---|
| `_design/CHART-LIBRARY-REFERENCE.html` | Sole source of truth for chart components. CHART-08 keeps chart styles piece-local until `alterrell-charts.css` exists, and Bible C-d names this the live build artifact. Its hardcoded hexes **match** the platform. Stays in the UPLOAD GATE |
| `tools/ai-card-studio.html` | Sole card-export tool, and SHARE-04 requires pre-rendered PNG share cards. Its one redefined token (`--teal`) matches the platform. Highest hardcode count in the repo (45) but actively used — flagged as a drift surface, not demoted |
| `_data/archive/**` | Already the Bible's sanctioned snapshot location (P-3: `cp [piece]/index.html _data/archive/...`). Moving it to `old/` would fight a documented convention and gain nothing |
| `copaganda/visual-*.html` | Live deliverables of an unbuilt piece (D-75 build order V3→V5→V4→V2→V1, CARD-08). Not superseded — not yet shipped |
| `_workbench/back-in-my-day-cards.html`, `_workbench/beyonce-cards.html` | Cited by `_data/platform/SESSION-QUEUE-2026-07.md` and an active research file. Pending work, not residue |
| `_data/naming/aaliyah_rebuilt.html` and 10 siblings | Cited by `_data/pieces/NAMING-SERIES-BRIEF.md`. TABS-07 still contemplates Naming Parts 4–7, so this is working material |
| `concert-tax/assets/*.png` | The piece links neither, but they are exported artifacts that may be in use off-repo. When in doubt, keep |
| `_data/platform/PROJECT-CONTEXT.md`, `SESSION-PROMPTS.md`, `CONTENT-TAXONOMY.md` | No named replacement. Each may be the only record of its subject. When in doubt, keep |
| `reports/**` | The record of what was done. Records are not superseded by later records |

## Retired by earlier sessions

| Path | Note |
|---|---|
| `old/AI-MASTER-RULES.md` | Consolidated into the Bible, 2026-07-27 |
| `old/DESIGN-DECISION-LOG.md` | Consolidated into the Bible, 2026-07-27 |
| `old/DESIGN-PRINCIPLES.md` | Consolidated into the Bible, 2026-07-27 |
| `old/CHART-LIBRARY-SPEC.md` | Consolidated into the Bible CHART section, 2026-07-27 |
| `old/DEPLOY-CHECKLIST.md` | Consolidated into the Bible, 2026-07-27 (Appendix C-g) |
| `old/CARD-INVENTORY.md` | Consolidated into the Bible, 2026-07-27 |
| `old/piece-template-stub.html` | Superseded by root `piece-template.html` (Appendix C-c) |
| `old/alterrell_interactive_editorial_system_prompt_framework.md` | Consolidated into the Bible, 2026-07-27 |
| `old/REPO-AUDIT-2026-07-05.md` | Point-in-time audit |
| `old/copaganda/`, `old/gay-uncles/` | Earlier piece snapshots |
