# READ FIRST — alterrell-interactive-public

# Cannabis data run: STOP REPORT

The PREFLIGHT stop condition fired. 4 of 4 preflight hosts were refused by the
egress proxy. Per the session STANDARD, no research ran, no data files were
created and no factpack was written. This report is the only file this session
added.

---

## 1. Run header

| Field | Value |
|---|---|
| Run date | 2026-11-03 (UTC, from `date -u`: `Tue Nov  3 03:53:38 UTC 2026`) |
| Repo | founder-am/alterrell-interactive-public |
| Branch | `cloud/11-02-cannabis-data`, created from `release-2026-10-29` at `635271e` |
| Model | claude-opus-5-5 (configured session model) |
| Deploy | none |

---

## 2. Acceptance list (fails first)

No acceptance item fails.

| ID | Result | Reason |
|---|---|---|
| A1 | PASS | No figure is marked verified anywhere. No figures were produced. |
| A2 | PASS | No voice slot was filled and no editorial line was touched. No brief or copy file was opened for writing. |
| A3 | PASS | No existing line in any file changed. The only change is this new file, `reports/2026-11-03-cannabis-data.md`. |
| A4 | PASS | No brief exists for this piece (AMA, 10-26/10-29), so there are no RETIRED or NEVER USE figures. Nothing was reintroduced. |
| A5 | PASS | READINESS table is in section 5. |
| A6 | PASS | Coverage is printed below. |

**Coverage: 0 of 6 WORK items resolved.** Items found = the 6 numbered WORK
items in the session prompt. Sub-count for WORK item 1: **0 of 7 named sources
inventoried** (NYPD Arrests Historic, NYPD Arrests YTD, NYPD criminal court
summonses, DCJS arrest and disposition tables, OCA public data, OCM licensed
dispensary and CAURD lists, precinct boundaries + ACS with tract-to-precinct
crosswalk). All are MEASURED from the prompt text. Why the run stopped: the
PREFLIGHT stop condition (section 3).

---

## 3. Stop conditions that fired

**PREFLIGHT: more than a third of hosts failed on proxy. FIRED, 4 of 4.**

| Host | Result | Command |
|---|---|---|
| data.cityofnewyork.us | `curl: (56) CONNECT tunnel failed, response 403` | `curl -sS -o /dev/null -w "%{http_code}\n" --max-time 20 https://data.cityofnewyork.us/` |
| cannabis.ny.gov | `curl: (56) CONNECT tunnel failed, response 403` | same, host substituted |
| criminaljustice.ny.gov | `curl: (56) CONNECT tunnel failed, response 403` | same, host substituted |
| census.gov | `curl: (56) CONNECT tunnel failed, response 403` | same, host substituted |

The proxy status endpoint (`curl -sS "$HTTPS_PROXY/__agentproxy/status"`, read
2026-11-03) logged each one as `connect_rejected`: "gateway answered 403 to
CONNECT (policy denial or upstream failure)". The failure is the environment's
network policy, not DNS. The proxy README says not to retry policy denials, so
none were retried. No other fetch route was tried, because the stop rule had
already fired.

**How it resolved:** the run stopped. The branch was pushed without new commits
to get the push result. Then this report was written, committed and pushed.

**To unblock (AMA):** open this cloud environment's settings (environment menu
in the session title bar, then Edit). Under Network access, either pick a
broader level or add these to Allowed domains, keeping Allow package managers
ticked. The steps are at https://code.claude.com/docs/en/cloud-environments#network-access.

- `data.cityofnewyork.us`
- `cannabis.ny.gov`
- `criminaljustice.ny.gov`
- `census.gov` and `www.census.gov`, `api.census.gov`

The WORK list will also need these hosts, which were not part of preflight and
were not tested:

- `geocoding.geo.census.gov` or NYC Planning Geoclient, for geocoding
- `www.nycourts.gov`, for OCA data

---

## 4. Command or URL behind every number

| Number | Tag | Source |
|---|---|---|
| 4 of 4 hosts failed | MEASURED | The four curl commands in section 3, run 2026-11-03 |
| 403 response code | MEASURED | curl stderr and the proxy status endpoint, 2026-11-03 |
| 6 WORK items, 7 named sources | MEASURED | Counted from the session prompt text |
| 0 resolved | MEASURED | This session's diff: `git status` shows only this report |
| Base commit `635271e` | MEASURED | `git log --oneline -3` on `release-2026-10-29` |

No research figures exist in this report.

---

## 5. Anomalies and open items (stated, not fixed)

1. **Copy of record.** The prompt says the copy of record is the prose file in
   `_data/pieces/`. Bible COPY-06 (D-111) says it must be a `*-COPY.md` file
   and that a factpack is never copy of record. No cannabis file of any kind
   exists in `_data/pieces/`: `grep -ri "cannabis|marijuana|MRTA"` over
   `_data _workbench _design src old` returned nothing. **No proper copy of
   record exists.** The planned `CANNABIS-DATA-FACTPACK.md` would have been
   **interim**. The "append `## Research <date> (cloud)`" rule has no target
   file for this piece. AMA RULING needed on where research appends next run.
2. **CLAUDE.md vs session prompt.** CLAUDE.md says to append to
   `../alterrell-hq/LEDGER.md` and write reports to `../alterrell-hq/reports/`.
   This session has one repo attached and the prompt forbids LEDGER writes, so
   the prompt was followed. alterrell-hq got no LEDGER line from this session.
3. **Upload gate partially read.** Read in full: the Bible and the
   `PROJECT-STATUS.md` head. The other files were only line-counted or not
   opened: `src/pages/pieces/[slug].astro` and `alterrell-interactive.css`
   were line-counted only, and the chart reference and `ai-card-studio.html`
   were not opened. This was a research-only run that stopped at preflight,
   and no build work was in scope.
4. **PROJECT-STATUS.md is stale.** Its header reads "Updated: 2026-08-27",
   which is earlier than the 10-29 release branch. It was not edited.
5. **Branch name and run date differ.** The branch name says 11-02 and the UTC
   run date is 11-03, likely because of a timezone difference. Recorded only.
6. **AI-MASTER-RULES.md** is present in `old/` (`ls old`), consistent with the
   prompt.
7. **Claim and unit as ruled, untested.** The unit is precinct (RULED 10-26/10-29-26).
   The claim to test is "dispensaries opened where past convictions were."
   Precinct-level open data covers arrests and summonses, not convictions. The
   conviction leg depends on DCJS dispositions (county-level in the public
   tables, as far as is known before testing) and on the unfiled OCA FOIL. This
   is a design risk to check next run. It is not a finding.

### READINESS (every remaining blocker to publish)

| # | Blocker | Class |
|---|---|---|
| R1 | Network policy blocks all four data hosts | DATA UNAVAILABLE (environment; AMA fixes in settings) |
| R2 | Source inventory (WORK 1), 0 of 7 sources | DATA UNAVAILABLE this run |
| R3 | Marijuana-coded arrests by precinct by year, pre/post 03-31-21 MRTA | DATA UNAVAILABLE this run |
| R4 | Dispensary list, geocode, precinct assignment | DATA UNAVAILABLE this run |
| R5 | Per-precinct rates and rank correlation | DATA UNAVAILABLE this run (depends on R3, R4) |
| R6 | Conviction data at precinct level (OCA/OCM FOIL drafted, not filed) | AMA RULING (file or not) |
| R7 | No copy of record and no target for Research appends (COPY-06) | AMA RULING |
| R8 | No brief exists (AMA: do not write one) | AMA RULING |
| R9 | Overview and essay copy | AMA VOICE |
| R10 | Piece build (gated on verified data) | BUILD (Type 2) |

No blocker is DATA DONE.

---

## 6. LEDGER line

- Cannabis precinct data run stopped at preflight, 4 of 4 data hosts blocked by network policy, stop report pushed | parked | 11-03-26
