# REPO AUDIT — July 5, 2026
Alterrell Interactive · `founder-am/alterrell-interactive-public`
Method: raw.githubusercontent.com fetches (HTTP status + content grep). GitHub API rate-limited; not used.
Suggested repo location: `_data/platform/audits/REPO-AUDIT-2026-07-05.md`

---

## HEADLINE FINDING

Session output is outrunning uploads. At least six sessions in June produced
deliverables (edited files, workbench copy, research docs) that were never
uploaded via the GitHub web UI. The repo's platform docs describe a state
roughly six weeks old. Nothing is lost — everything exists in chat records —
but the repo is not the source of truth it's supposed to be right now.

---

## CLASS 1 — SESSION OUTPUT NEVER COMMITTED

| # | Item | Session record says | Repo says | Recovery path |
|---|------|--------------------|-----------|---------------|
| 1 | Hub Batch A (June 24) | index.html edited: naming series card (D-80), HBS card + Coming Next divider removed, Gay Uncles flipped to Explore (D-81). DESIGN-DECISION-LOG.md updated. | Hub links only /concert-tax/, /fast-food-sodium/, /naming/part-0/, /naming/part-1/. Log ends at D-79 (header still says May 22). | Re-run Type 3 with the existing June 26 handoff prompt (updated version in HANDOFF-PROMPTS-2026-07.md). |
| 2 | Where's Beyoncé copy | All 11 editorial slots filled; 600-word Overview essay written (June sessions). | `_workbench/beyonce-cards.html` has 10 cards ✓ but 47 `[AMA...]` placeholders remain. No essay file anywhere in `_data/`. | Type 1 recovery session: extract filled copy + essay from June chats, produce updated workbench + essay .md for upload. |
| 3 | Concert Tax cards | 16 cards; hub card updated to new title. | Workbench committed with **14** cards per CARD-INVENTORY; 7 `[AMA EDITORIAL LINE]` slots open. Hub card unverified (likely old, pre-Batch-A). | Reconcile count in the Beyoncé-style recovery pass; hub card rides with Batch A re-run. |
| 4 | Crowning Achievements facts | Verified facts file at `_data/pieces/CROWNING-ACHIEVEMENTS-FACTS.md` incl. retired-stats register (Diana Ross "70 Hot 100" = UK figure; Donna Summer 42→32; Tina Turner 38→18; "74% crossover" permanently retired). | **404.** Workbench is a 0-card stub. Retired-stats documentation exists nowhere in the repo. | HIGH PRIORITY — data-integrity exposure. Recovery session to reconstruct and commit the facts file from the source chat. |
| 5 | BTU research | Five clusters researched; 13 ODs resolved; Soaps 5-tab structure; Beyond the Gates NAACP spine. | Only `_workbench/btu-cards.html` stub. No BTU-*.md files at all. | Type 1 recovery: package cluster research into `_data/pieces/BTU-*.md` files before any build. Soaps first. |
| 6 | Copaganda V2 + brief | V2 redesign across 4 HTML files; 12-card producer map; five-visual suite data-locked. | Workbench is a 0-card stub. Brief 404 at both `_data/COPAGANDA-PIECE-BRIEF.md` and `_data/pieces/COPAGANDA-BRIEF.md`. | Type 1 recovery: commit brief + V2 spec before the V3→V5→V4→V2→V1 build sequence starts. |
| 7 | Back in My Day cards | 7 macro cards + per-food A/B/C rounds in one HTML file (chat 2f421f20). Option C cascade pills = first build task. | `BACK-IN-MY-DAY-RESEARCH.md` committed ✓. Workbench exists (8.4KB) but appears partial — 0 card-class markers. No brief. | Verify workbench contents vs chat 2f421f20; extract + commit before Option C build. |

## CLASS 2 — STALE PLATFORM DOCS (replacements generated today)

| Doc | Repo state | Fix |
|---|---|---|
| `_data/platform/PROJECT-STATUS.md` | Last updated May 22. HBS still marked URGENT (deferred June 9). No BTU / Crowning / Back in My Day entries. | Full replacement generated: PROJECT-STATUS.md (this batch). |
| `_data/platform/DESIGN-DECISION-LOG.md` | Ends at D-79; header date stale. | Append block generated: DECISION-LOG-APPEND-2026-07-05.md. Text reconstructed from session record — confirm wording before paste. |
| `_workbench/CARD-INVENTORY.md` | Missing Back in My Day row; Concert Tax count unreconciled; Gay Uncles "0" misleading (cards live in the piece file by design). | Full replacement generated: CARD-INVENTORY.md (this batch). |
| Stale brief pointers | PROJECT-STATUS references `_data/BLACK-GAY-GEOGRAPHY-BRIEF.md` (404); actual brief is `_data/pieces/GAY-UNCLES-BRIEF.md` ✓. Several `_data/`-root factpack paths are 404 (WHERES-BEYONCE, CONGRESS-1A, HBS, COPAGANDA). | Corrected in the PROJECT-STATUS replacement. Missing factpacks flagged as recovery items, not silently re-pathed. |

## CLASS 3 — VERIFIED HEALTHY (no action)

- `_data/platform/AI-MASTER-RULES.md`, `VOICE-MASTER.md`, `SESSION-PROMPTS.md` — present
- `_design/DESIGN-PRINCIPLES.md`, `CHART-LIBRARY-REFERENCE.html`, `VISUAL-REFERENCE.html` — present (DESIGN-BIBLE.html not yet built, as expected)
- `alterrell-interactive.css` — present
- Piece files: `concert-tax/` ✓, `fast-food-sodium/` ✓ (107KB), `gay-uncles/` ✓ (57KB, 15 AMA slots as expected), `naming/part-0..3/` ✓, `naming/index.html` ✓, `where-are-they/` ✓ (Beyoncé shell, 50KB)
- `_data/pieces/`: GAY-UNCLES-BRIEF ✓, NAMING-SERIES-BRIEF ✓, SODIUM-FACTPACK ✓, BACK-IN-MY-DAY-RESEARCH ✓
- Committed Concert Tax workbench is teal/paper (no dark/gold tokens) — the rebuild direction IS what's committed ✓
- Beyoncé workbench 10 cards committed June 9 ✓ (copy slots aside)

## NOTES

- `naming/part-3/` ("The Academy Effect", 47KB) is built and in the repo but
  unlinked from the hub — it ships visibility via the Batch A re-run.
- Beyoncé shell lives at `/where-are-they/` — slug decision pending (see
  decision list, chat of July 5).
- Monthly staleness check was scheduled July 9; this audit supersedes it.
  Propose next check Aug 1, pending AMA confirmation.
