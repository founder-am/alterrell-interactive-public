# READ FIRST — alterrell-interactive-public

# Copaganda research pass: STOP REPORT (preflight failed)

## 1. Run header

- Run date: 2026-11-03 (UTC, from `date -u` at 03:47:18). The branch name says 11-02 because the prompt named it that way.
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-copaganda, cut from release-2026-10-29 at 635271e527f7b60f7ec8664cd1ead20f43094078
- Model: given in the session chat only. Session policy bars model identifiers from files pushed to a repo (see section 5).
- Deploy: none

This is a stop report. All 4 preflight hosts failed on proxy or DNS, which is more than the one-third stop threshold. No research was done, no CSV was written, and nothing was appended to the brief.

## 2. Acceptance list (fails first)

| ID | Result | Reason |
|---|---|---|
| W1 Hours per show | FAIL (not delivered) | Stopped at preflight. 0 of 22 shows sourced. |
| W2 Cohort CSVs | FAIL (not delivered) | Depends on W1. `_data/copaganda/` was not created. |
| W3 Layer 2 perception gap | FAIL (not delivered) | bjs.ojp.gov, cde.ucr.cjis.gov and news.gallup.com are all blocked. |
| W4 Layers 3 to 5 sources | FAIL (not delivered) | Stopped at preflight. |
| W5 Brief figures | FAIL (not delivered) | 0 of 21 flagged figure instances verified. |
| A1 | PASS | No figure is marked verified. This report contains no research figures. |
| A2 | PASS | No voice slot was filled and no editorial line was touched. |
| A3 | PASS | The only change on the branch is this new file. `git diff --stat 635271e..HEAD` lists one added file. |
| A4 | PASS | `grep -n -i -E 'RETIRED\|NEVER USE' _data/pieces/COPAGANDA-BRIEF.md` returns nothing, so there is no retired figure to reintroduce. |
| A5 | PASS | READINESS table below. |
| A6 | PASS | Coverage line below. |

**Coverage: 0 items resolved of 48 items found.** Breakdown:
- W1: 22 shows. The brief lists 7 Wolf shows at lines 59 to 65 and 15 non-Wolf show lines at 68 to 81. A franchise line counts as one item.
- W2: 1 deliverable (the cohort table plus its CSVs).
- W3: 1 comparison.
- W4: 3 layers (literacy, accountability, deployment).
- W5: 21 hedged figure instances. These are the brief lines with +, ~, about, est. or a range: 47, 59, 60, 66, 71, 72, 74, 75, 76, 77, 78, 81, 98, 101, 114, 117, 119, 149, 150, 327, 334. Two pairs repeat the same figure: 66 and 327 (1,174+), and 47 and 149 (Wolf's $600M).
- Reason for 0: the run stopped at preflight, so nothing was looked up.

### READINESS: every remaining blocker to publish

| # | Blocker | Class |
|---|---|---|
| R1 | Hours per show, all 22 shows, from an episode guide of record (W1) | DATA UNAVAILABLE (this run only: hosts blocked. This is not a finding that the data does not exist.) |
| R2 | Updated Dick Wolf franchise total, replacing the stale 1,174+ at lines 66 and 327 | DATA UNAVAILABLE (this run) |
| R3 | hours-by-show.csv and cohorts.csv for ages 8 to 18 by birth year (W2) | DATA UNAVAILABLE (this run, depends on R1) |
| R4 | FBI/BJS crime trend against the Gallup perception series, same years (W3) | DATA UNAVAILABLE (this run) |
| R5 | Measurable sources for Layer 3 literacy, Layer 4 accountability and Layer 5 deployment, and where none exists (W4) | DATA UNAVAILABLE (this run) |
| R6 | 21 hedged figure instances in the brief (W5) | DATA UNAVAILABLE (this run) |
| R7 | IMDb actor count per cohort (calculator panel 2) | DATA UNAVAILABLE (this run: imdb.com is blocked) |
| R8 | Advertiser lists and viewership demographics (brief, OPEN) | DATA UNAVAILABLE (outside this run's WORK; still OPEN in the brief) |
| R9 | Seven-tab structure: proposed 10-15, not ruled. TABS-04 needs a logged D-## entry for 7 or more tabs, and Appendix A ends at D-111 with no Copaganda entry. | AMA RULING |
| R10 | "What Could Exist": its own tab, or the close of Overview (brief line 471) | AMA RULING |
| R11 | Money tab placeholder framing for a nothing-found result (brief line 472) | AMA RULING |
| R12 | Copy of record. COPY-06 requires a `*-COPY.md` file and no `COPAGANDA-COPY.md` exists. The prompt names the prose file in `_data/pieces/` as copy of record. No proper copy of record exists, so `COPAGANDA-BRIEF.md` is the interim target only. | AMA RULING |
| R13 | Overview and essay copy, editorial lines, and the McDonald's personal frame | AMA VOICE |
| R14 | One placement sentence per Screen Time Report tier (proposed 10-15) | AMA VOICE (if ruled in) |
| R15 | No `.mdx` exists in `src/content/pieces/`, so the piece has no route (PROJECT-STATUS.md line 288) | BUILD (Type 2) |
| R16 | V1 to V5 visuals. The pre-Astro drafts in `copaganda/*.html` carry unsourced ~ figures (section 5). | BUILD (Type 2), after R1 to R6 |

## 3. Stop conditions fired

| Condition | Fired | Resolution |
|---|---|---|
| PREFLIGHT: more than a third of hosts fail on DNS or proxy | Yes, 4 of 4 | Branch pushed, stop report written and pushed, run ended. The fix belongs to AMA: allow `bjs.ojp.gov`, `cde.ucr.cjis.gov`, `news.gallup.com` and `imdb.com` (plus `www.imdb.com`) under Network access, Allowed domains, in the cloud environment settings. Steps: https://code.claude.com/docs/en/cloud-environments#network-access. A control host, `en.wikipedia.org`, was also refused (403), so the policy appears to deny general web access, not just these four. |
| `git status` shows a path not created by this run | No | The tree was clean at branch creation and after the first push. |

## 4. Command or URL behind every number

| Number | Source |
|---|---|
| 4 of 4 hosts failed, curl | `for h in bjs.ojp.gov cde.ucr.cjis.gov news.gallup.com imdb.com; do curl -sS -o /dev/null -w "%{http_code}\n" --max-time 25 "https://$h/"; done`, run 2026-11-03 03:47 UTC. Each returned `curl: (56) CONNECT tunnel failed, response 403`, http_code 000. MEASURED. |
| 4 of 4 hosts failed, WebFetch | WebFetch of https://bjs.ojp.gov/, https://cde.ucr.cjis.gov/, https://news.gallup.com/poll/1603/crime.aspx and https://www.imdb.com/, accessed 2026-11-03. Each returned `getaddrinfo ENOTFOUND`. MEASURED. |
| Proxy relay failures | `curl -sS "$HTTPS_PROXY/__agentproxy/status"`, 2026-11-03. Its `recentRelayFailures` lists `connect_rejected`, "gateway answered 403 to CONNECT", for each host. MEASURED. |
| 48 items found, 0 resolved | Counted from `_data/pieces/COPAGANDA-BRIEF.md` at 635271e, plus `grep -n -E '\+\|~\|about\|approx\|est\.\|estimated\|[0-9]{4}–[0-9]{4}' _data/pieces/COPAGANDA-BRIEF.md`. The calculator input range at line 287 and non-figure matches were excluded. MEASURED. |
| 22 shows | Brief lines 59 to 65 (7) and 68 to 81 (15), read directly. MEASURED. |
| D-111 is the last decision | `ALTERRELL-INTERACTIVE-BIBLE.md` Appendix A, read 2026-11-03. MEASURED. |
| 8 files, 102,019 bytes in copaganda/ | `_data/platform/PROJECT-STATUS.md` line 294. Not re-measured here. RULED (as recorded in that file). |

## 5. Anomalies and open items (stated, not fixed)

1. **Instruction conflicts, resolved in favor of the prompt.**
   - CLAUDE.md says to write reports to `../alterrell-hq/reports/` and append to `../alterrell-hq/LEDGER.md`. The prompt says this repo's `reports/`, one repo only, and no LEDGER writes. The prompt was followed.
   - CLAUDE.md says to state the model in the summary, and the prompt asks for it in section 1. Session policy keeps model identifiers out of pushed files, so the model is given in chat.
2. **Report-then-push ordering.** The prompt asks for the report to be written after the push result is in hand and also committed as the final commit. The branch was pushed first, with no commits, to get a push result. This report was then committed and pushed a second time. That second push's output is printed in chat only.
3. **Prior-generation figures conflict with the brief.** These files (`copaganda/*.html`, pre-Astro) were not edited. Every value below is hedged or unsourced, so each needs verification before reuse.
   - `visual-2-producers.html` says "~150 seasons" for Wolf and "~$4B+ career earnings est.". It also says "$0 documented to criminal justice reform", citing a "Wolf Family Foundation official statement" without a URL.
   - The brief's Layer 4 lists Wolf's giving as OPEN and says "do not assert without sourcing". The $0 claim has no URL or access date in the repo.
   - `visual-2a-producer-treemap.html` says Wolf "~125 corrected from earlier ~150", so visual-2 is stale against visual-2a.
   - `visual-2b1` and `2b2` count Chicago Fire, Chicago Med and Chicago Justice as Wolf "cop content". Chicago Fire and Med are not cop shows, and the brief does not name them. That is a scope question for AMA.
   - `visual-3.html` gives SVU as 27 seasons for Hargitay. The brief, line 151, says 26.
   - `visual-3.html` actor salaries (~$15M, ~$10M, ~$5.5M) and `visual-4` "~$527M/yr" are labelled estimates without per-figure URLs.
4. **The copy-of-record rule conflicts with the prompt.** See R12. No append was made this run, so the conflict did not bite. It will on the next run.
5. **TABS-04.** The seven-tab proposal would need a D-## entry. None exists. See R9.
6. **Open item for the rerun.** Once the network allowlist is changed, rerun the same prompt. Nothing on this branch needs to be undone first.

## 6. LEDGER line

- Copaganda research pass stopped at preflight: 4 of 4 hosts blocked by environment network policy, no research done, stop report pushed | waiting | 11-03-26
