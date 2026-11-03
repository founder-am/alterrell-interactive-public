# READ FIRST — alterrell-interactive-public

# Back in My Day research pass: STOP REPORT (preflight failed)

## 1. Run header

- Run date: 2026-11-03 (UTC, from `date -u` at 03:50:54). The branch name says 11-02 because the prompt named it that way.
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-back-in-my-day, cut from release-2026-10-29 at 635271e527f7b60f7ec8664cd1ead20f43094078 (`git rev-parse HEAD` after `git checkout -b`)
- Model: given in the session chat only. Session policy bars model identifiers from files pushed to a repo.
- Deploy: none

This is a stop report. All 5 preflight hosts failed on proxy (curl) and on DNS (WebFetch). 5 of 5 is above the one-third stop threshold. No research was done and nothing was appended to any file in `_data/pieces/`. The only change on this branch is this file.

Rulebook read and confirmed: `ALTERRELL-INTERACTIVE-BIBLE.md`, 384 lines (`wc -l`), header "Last updated: 2026-10-29". COPY-06 (line 170) applies to the append target; see section 5, item 2.

## 2. Acceptance list (fails first)

| ID | Result | Reason |
|---|---|---|
| WORK 1 Phase 1 decade tables | FAIL (not delivered) | Stopped at preflight. 0 of 4 foods have a 1950s to 2020s table from period sources. |
| WORK 2 RESEARCH GAPS | FAIL (not delivered) | 0 of 12 gap bullets closed. 0 of 8 US vs EU table rows checked against EFSA and FDA (ecfr.gov and efsa.europa.eu both blocked). |
| WORK 3 Milk and Pasta verdicts | FAIL (not delivered) | No new data was gathered, so there is nothing to weigh against the verdicts. The verdicts are unchanged. |
| A1 | PASS | No figure is marked verified in this run. This report contains no research figures, only file counts and line numbers. |
| A2 | PASS | No voice slot filled, no editorial line touched. |
| A3 | PASS | No existing file changed. The branch adds one file (`git diff --stat 635271e..HEAD`). |
| A4 | PASS | `grep -n -i -E "retired\|never use"` on FOOD-EVOLUTION-BRIEF.md, BACK-IN-MY-DAY-RESEARCH.md and _workbench/back-in-my-day-cards.html returns nothing, so there is no retired figure to reintroduce. |
| A5 | PASS | READINESS table below. |
| A6 | PASS | Coverage line below. |

**Coverage: 0 items resolved of 27 items found.** Breakdown:
- WORK 1: 4 foods (Bread, Ice Cream, Pasta, Milk; FOOD-EVOLUTION-BRIEF.md lines 17 to 20).
- WORK 2: 12 gap bullets (BACK-IN-MY-DAY-RESEARCH.md lines 215 to 233; `sed -n 213,234p ... | grep -c '^- '` returns 12) plus 8 US vs EU rows (the approved-additive count at line 157 and the 7 banned-elsewhere rows at lines 165 to 171). Total 20.
- WORK 3: 2 verdicts (Milk at line 274, Pasta at line 316).
- Brief figures to verify: 1. FOOD-EVOLUTION-BRIEF.md line 4, "3-4x the ingredients" (a range). Line 28, "10,000 vs. 411", carries no hedge marker but conflicts with the research file (section 5, item 4).
- Reason for 0: the run stopped at preflight, so nothing was looked up.

### READINESS: every remaining blocker to publish

| # | Blocker | Class |
|---|---|---|
| R1 | Bread decade table, 1950s to 2020s, from period sources (1960s Wonder Bread list, ADA adoption year, bromate prevalence) | DATA UNAVAILABLE (this run only: hosts blocked. This is not a finding that the data does not exist.) |
| R2 | Ice Cream decade table (Breyers corn syrup year, 1965 vs today composition, polysorbate 80 date) | DATA UNAVAILABLE (this run) |
| R3 | Pasta decade table. The dossier's in-window points are 1998 and the current label only (section 5, item 5). | DATA UNAVAILABLE (this run) |
| R4 | Milk decade table. Same in-window gap: 1978 and the current label only. | DATA UNAVAILABLE (this run) |
| R5 | US vs EU additive table: 8 rows against eCFR, Federal Register and EFSA | DATA UNAVAILABLE (this run) |
| R6 | Policy gaps: corn subsidy dollars by decade, Farm Bill provisions, 1960 additive baseline count | DATA UNAVAILABLE (this run) |
| R7 | Cereal gaps (3 bullets). Cereal is Phase 2 (RESEARCH.md line 352) but the gaps list still carries them. | DATA UNAVAILABLE (this run) |
| R8 | Brief line 4 "3-4x" and line 28 "411" | DATA UNAVAILABLE (this run) |
| R9 | Copy of record. No `BACK-IN-MY-DAY-COPY.md` exists (`ls _data/pieces \| grep -i copy` returns only GAY-UNCLES-COPY.md). | AMA RULING |
| R10 | Which tabs are in or out, which macro cards are in or out, which centerpiece first (brief lines 33 to 40) | AMA RULING |
| R11 | Card format: generation cards, Option B, Option C all on Hold (RESEARCH.md lines 401 to 405) | AMA RULING |
| R12 | All [AMA EDITORIAL LINE] slots and the three placeholder framings at RESEARCH.md lines 502 to 504; Overview and essay copy | AMA VOICE |
| R13 | Workbench macro and per-food cards were never received. Both sections of `_workbench/back-in-my-day-cards.html` say BLOCKED and ask AMA to re-paste from chat 2f421f20. | AMA RULING (re-paste) then BUILD (Type 2) |
| R14 | No `.mdx` in `src/content/pieces/` (`ls src/content/pieces \| grep -i -E "back\|food"` returns nothing), so the piece has no route | BUILD (Type 2) |

## 3. Stop conditions fired

1. **Missing input file.** `_data/pieces/BACK-IN-MY-DAY-RESEARCH-2.md` does not exist on release-2026-10-29. Resolved without stopping: `git log --all --name-status` shows commit df22391 (2026-10-16) deleted it and rewrote BACK-IN-MY-DAY-RESEARCH.md. `diff` of `git show a567aad:_data/pieces/BACK-IN-MY-DAY-RESEARCH-2.md` against the current BACK-IN-MY-DAY-RESEARCH.md is empty. The canonical RESEARCH-2 content is now the file named BACK-IN-MY-DAY-RESEARCH.md. Its RESEARCH GAPS section is also identical to the pre-df22391 RESEARCH.md gaps section (same diff, empty). Both files the prompt names were therefore read, as one file.
2. **PREFLIGHT.** Fired and not resolved. Run stopped.

| Host | curl (`curl -sS -o /dev/null -m 25 -w "%{http_code}"`, bare and www.) | WebFetch tool |
|---|---|---|
| ecfr.gov | 000; proxy log: "gateway answered 403 to CONNECT" | getaddrinfo ENOTFOUND www.ecfr.gov |
| federalregister.gov | 000; proxy 403 to CONNECT | ENOTFOUND www.federalregister.gov |
| archive.org | 000; proxy 403 to CONNECT | ENOTFOUND archive.org |
| usda.gov | 000; proxy 403 to CONNECT | ENOTFOUND www.usda.gov |
| efsa.europa.eu | 000; proxy 403 to CONNECT | ENOTFOUND www.efsa.europa.eu |

Proxy log from `curl -sS "$HTTPS_PROXY/__agentproxy/status"`, field `recentRelayFailures`, all entries kind `connect_rejected`, 2026-11-03T03:50:54Z. Fix: allow these hosts under Network access in the environment settings (https://code.claude.com/docs/en/cloud-environments#network-access), then re-run.

## 4. Command or URL behind every number

| Number | Source |
|---|---|
| 384 lines in the Bible | `wc -l ALTERRELL-INTERACTIVE-BIBLE.md` |
| 507 lines in RESEARCH.md; 269 lines in the pre-df22391 RESEARCH.md | `grep -c "" _data/pieces/BACK-IN-MY-DAY-RESEARCH.md`; `git show a567aad:_data/pieces/BACK-IN-MY-DAY-RESEARCH.md \| wc -l` |
| 12 gap bullets | `sed -n 213,234p _data/pieces/BACK-IN-MY-DAY-RESEARCH.md \| grep -c '^- '` |
| 8 US vs EU rows, 4 foods, 2 verdicts, 1 brief range | Read of RESEARCH.md lines 157, 165 to 171, 274, 316 and FOOD-EVOLUTION-BRIEF.md lines 4, 17 to 20 (`cat -n`) |
| 27 items found, 0 resolved | Sum of the four rows above |
| 5 of 5 hosts failed | Preflight table, section 3 |
| 285 lines in the workbench file | `grep -c "" _workbench/back-in-my-day-cards.html` |
| Base commit 635271e | `git rev-parse HEAD` |

## 5. Anomalies and open items (stated, not fixed)

1. **Prompt framing is stale.** It names RESEARCH-2.md (canonical) and RESEARCH.md as two files. Since df22391 there is one file. `_data/platform/PROJECT-STATUS.md` line 293 also still lists "BACK-IN-MY-DAY-RESEARCH.md and -2.md".
2. **Copy of record.** No proper copy of record exists. COPY-06 (Bible line 170) requires a `*-COPY.md` file and none exists for this piece. The prompt names "the prose file in `_data/pieces/`". If research is appended next run, BACK-IN-MY-DAY-RESEARCH.md would be the interim target only. That needs AMA's ruling (R9).
3. **Existing "verified" figures without URLs.** RESEARCH.md's VERIFIED DATA POINTS table (lines 239 to 255) lists 15 claims as cleared, each with a source name and no URL or access date. Pre-existing, not marked by this run, but they would fail A1 if carried forward unchanged.
4. **EU additive count conflict.** Brief line 28 says 411. RESEARCH.md line 157 says "~400" and line 242 marks "~400" as verified. These are PLACEHOLDER until checked against EFSA.
5. **Phase 1 bar versus the prompt's window.** RESEARCH.md line 347 clears Milk on 3 points, one of them in the 1930s. Line 346 clears Pasta on 3 points, one of them in the 1940s. Inside a 1950s to 2020s table, each has 2 dated points (Milk: 1978, current label; Pasta: 1998, current label). Both may fall short of the prompt's 3-point bar even before new research.
6. **Ice cream timing conflict.** Line 92 dates corn syrup and gums to the 2000s. Line 447 puts 4 processed ingredients in the 1990s ("post-Unilever 1993").
7. **Breyers baseline conflict.** Line 89 gives 4 to 5 ingredients including eggs. Line 98 gives 4 without eggs.
8. **Bread 1960s count.** Line 49 gives 7 to 9. Line 440 uses 7. Line 63 gives "~7 components (plus ~8 added vitamins)" and cites snackhistory.com, which is secondary.
9. **Hedged values in RESEARCH.md** (out of WORK scope, listed only): lines 67 ("approximately 500"), 116 ("approximately 18%"), 138 ("approximately 50% cheaper"), 188 ("approximately 42% more"), 200 ("~15%"), 204 ("40-42%"), 268 ("by 1978").
10. **Workbench is empty of cards.** Both content sections of `_workbench/back-in-my-day-cards.html` are BLOCKED placeholders asking AMA to re-paste from chat 2f421f20.
11. **Instruction conflict, prompt followed.** CLAUDE.md says to write reports to `../alterrell-hq/reports/` and append a line to `../alterrell-hq/LEDGER.md`. The prompt limits this session to one repo, puts the report in `reports/` here and says not to write any LEDGER file. The prompt was followed. The LEDGER line below has not been written anywhere else.
12. **Same block on sibling runs.** Sibling branch cloud/11-02-copaganda committed a stop report (`reports/2026-11-03-copaganda.md`) for the same proxy and DNS failures. This looks like an environment network policy, not a per-host outage.

## 6. LEDGER line

- Back in My Day research pass stopped at preflight, 5 of 5 hosts blocked; stop report only | parked | 11-03-26
