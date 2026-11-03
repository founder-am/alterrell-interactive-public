# READ FIRST — alterrell-interactive-public

# STOP REPORT: Specialist Map research pass

## (1) Run

- Run date: 2026-11-03 (UTC). The branch name says 11-02 because the prompt named it that way.
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-specialist-map, created from release-2026-10-29 at 635271e
- Model: claude-opus-5-5 (configured for this session)
- Deploy: none

**Outcome:** the run stopped at PREFLIGHT. 4 of 4 preflight hosts were refused by the environment's egress proxy. The limit was more than one third. No research was done, and no file other than this report was written.

## (2) Acceptance list (fails first)

| ID | Result | Reason |
|---|---|---|
| A6 | FAIL | Coverage is printed (0 of 8 resolved, see below), but this is a stop run: none of the 8 items found was resolved. It is marked FAIL so a stop run does not read as clean. |
| A5 | PASS | The READINESS table is below. |
| A1 | PASS | No figure is marked verified. No figures were gathered. |
| A2 | PASS | No voice slot was filled and no editorial line was touched. |
| A3 | PASS | No existing file was changed. The only write is this new file. |
| A4 | PASS | No figure was introduced. The brief has no RETIRED or NEVER USE markers (`grep -n -i -E 'RETIRED\|NEVER USE' _data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md` returned nothing). |

**Coverage: 0 items resolved of 8 items found.** The run stopped early because the PREFLIGHT stop condition fired.

Items found in `_data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md`, read from the file on 2026-11-03:

1. Tab 1 visceral stat: specialist use by income (WORK 1; the brief marks it "TBD")
2. Urgent care vs. primary care cost differential (WORK 2)
3. Average wait times by specialist type (data gap)
4. Referral requirement breakdown, PPO vs. HMO by prevalence, including the brief's claim "PPOs typically do not. HMOs typically do." (data gap)
5. Colonoscopy screening age "currently 45" (data gap, and a figure already in the brief)
6. Ophthalmologist vs. optometrist scope of practice by state (data gap)
7. "6–10 month waits" (a figure already in the brief, written as a range, so it needs verifying)
8. Provider shortage projection. Tab 4 asks for "one forward-looking number", but the brief gives no value and the data-gap list does not include it.

## (3) Stop conditions that fired

**PREFLIGHT: fired, run stopped.**

- Command: `curl -sS -o /dev/null -w '%{http_code}' -L --max-time 30 https://<host>/`. It was run once for each host's www form and once for the bare host the prompt names, at 2026-11-03T03:49Z.
- Result, MEASURED:

| Host | Result |
|---|---|
| meps.ahrq.gov | `curl: (56) CONNECT tunnel failed, response 403` |
| www.cdc.gov / cdc.gov | `curl: (56) CONNECT tunnel failed, response 403` |
| www.kff.org / kff.org | `curl: (56) CONNECT tunnel failed, response 403` |
| www.healthcare.gov / healthcare.gov | `curl: (56) CONNECT tunnel failed, response 403` |

- Proxy record (`curl -sS "$HTTPS_PROXY/__agentproxy/status"`): each host shows `connect_rejected`, "gateway answered 403 to CONNECT (policy denial or upstream failure)".
- Failure type: proxy denial. These are not DNS errors.
- Resolution: I stopped as the prompt directs. I did not retry the hosts or route around the denial. I did not try the WebFetch tool or a search tool, because using them would get around the network policy the environment sets.

**Branch instruction conflict: resolved by following the prompt.** The session's harness said to develop and push on release-2026-10-29. The prompt said never to commit to release-2026-10-29 and to use cloud/11-02-specialist-map. I followed the prompt.

## (4) The command or URL behind every number

| Number | Source |
|---|---|
| 4 of 4 hosts failed | the curl preflight in §3 (MEASURED, 2026-11-03T03:49Z) |
| 8 items found, 0 resolved | my reading of `_data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md` (183 lines, `wc -l`, 2026-11-03), counted as in §2 |
| Base commit 635271e | `git log --oneline -3` on release-2026-10-29 |

## (5) Anomalies and open items (stated, not fixed)

1. **Network policy.** To unblock the run, allow meps.ahrq.gov, cdc.gov, kff.org and healthcare.gov in the environment's Network access setting. The setting is in the cloud environment menu in the session title bar, under Edit, then Allowed domains. Steps: https://code.claude.com/docs/en/cloud-environments#network-access. WORK also needs these hosts: meps.ahrq.gov's data tools, cdc.gov/nchs (NHIS), fairhealth.org, healthcostinstitute.org, uspreventiveservicestaskforce.org, aamc.org, and PubMed or PMC (ncbi.nlm.nih.gov) for the peer-reviewed referral papers.
2. **Copy of record conflict (COPY-06).** The prompt names the copy of record as "the prose file in _data/pieces/". For this piece, that file is SPECIALIST-MAP-PIECE-BRIEF.md. Bible COPY-06 (D-111) says a copy of record must be a `*-COPY.md` file and that a brief is never one. No proper copy of record exists for Specialist Map (`ls _data/pieces | grep -i specialist` returns only the brief). The next run would have to append its research section to the brief as an interim target. AMA has to rule on that.
3. **CLAUDE.md vs. the prompt.** CLAUDE.md says to write reports to ../alterrell-hq/reports/ and to append to ../alterrell-hq/LEDGER.md. The prompt says to write to reports/ in this repo, to write no LEDGER file, and to use one repo only. I followed the prompt. The LEDGER line in §6 has not been appended anywhere.
4. **Brief is out of date.** The brief is dated March 19, 2026. It says "Do not begin build until Hub and Sodium are deployed and confirmed." I did not check whether that is true now.
5. **Brief claims to check next run:** "6–10 month waits", "PPOs typically do not / HMOs typically do", and "currently 45" for colonoscopy. All three are unverified.

### READINESS (every remaining blocker to publish)

| Blocker | Class |
|---|---|
| Network access to the research hosts (prevents every DATA item) | BUILD (Type 2) |
| Tab 1 visceral stat: research the candidates | DATA UNAVAILABLE (blocked this run) |
| Tab 1 stat: pick one of the candidates | AMA RULING |
| Urgent care vs. primary care cost gap | DATA UNAVAILABLE (blocked this run) |
| Wait times by specialist type, and the "6–10 month" figure | DATA UNAVAILABLE (blocked this run) |
| PPO vs. HMO referral prevalence | DATA UNAVAILABLE (blocked this run) |
| Colonoscopy age 45 | DATA UNAVAILABLE (blocked this run) |
| Ophthalmologist vs. optometrist scope by state | DATA UNAVAILABLE (blocked this run) |
| Provider shortage projection (Tab 4) | DATA UNAVAILABLE (blocked this run) |
| No `*-COPY.md` copy of record (COPY-06); whether the brief can be an interim append target | AMA RULING |
| Tab 1 personal entry, "I called my mother" beat, tier observation, Overview | AMA VOICE |
| Brief's gate on Hub and Sodium deployment | AMA RULING |
| Page build in src/content/pieces/ | BUILD (Type 2) |

## (6) LEDGER line

- Specialist Map research pass stopped at preflight, all 4 health data hosts blocked by proxy | parked | 11-03-26
