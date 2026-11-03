# READ FIRST — alterrell-interactive-public

# Copaganda research pass: RERUN REPORT

## 1. Run header

- Run date: 2026-11-03. The session clock read 22:21:25 UTC at preflight (`date -u`).
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-copaganda, continuing from c3842de (the 11-03 stop report, which is left unchanged)
- Model: given in the session chat only. Session policy bars model identifiers from files pushed to a repo.
- Deploy: none
- Files changed by this run:
  - `_data/pieces/COPAGANDA-BRIEF.md`: append only, 288 lines added, 0 removed.
  - `_data/copaganda/hours-by-show.csv`: new file.
  - `_data/copaganda/cohorts.csv`: new file.
  - This report: new file.

## 2. Acceptance list (fails first)

No acceptance item failed. Partial results are listed first.

| ID | Result | Reason |
|---|---|---|
| W4 Layers 3 to 5 | PASS, partial data | Layer 3 and Layer 5 sources were found, and every unmeasured question is named. Layer 4 has two open items: the Comcast NBCUniversal Foundation's grant recipient list, and the identity of Dick Wolf's foundation. Both are classed DATA UNAVAILABLE in the READINESS table. |
| W5 Brief figures | PASS, partial data | 24 of 29 figure items resolved from a primary source. Not resolved: line 46 (secondary source only), line 98 ("largest in history" part), line 119, line 150, line 334. |
| W1 Hours per show | PASS, with one provisional row | 28 series covering all 22 show lines in the brief. NCIS: Sydney (line 70) is provisional: TVmaze uses Australian air dates, and its S3 episode count does not match US listings. |
| W2 Cohort CSVs | PASS | `_data/copaganda/cohorts.csv` covers birth years 1960 to 2000, with 28 shows plus 2 total rows per year. Birth years 1960 to 1971 return 0 hours at ages 8 to 18 (see R9). |
| W3 Layer 2 | PASS | 32 Gallup poll years, each matched to the FBI rate (and the NCVS rate where it exists) for the same year. |
| A1 | PASS | Every MEASURED value has a URL in brief section 3, 4 or 5, or in the section 6 URL key. Section 6 also states the 2026-11-03 access date for all of them. |
| A2 | PASS | No voice slot was filled and no editorial line was changed. Claims undercut by the research are reported, not rewritten: lines 69, 182 and 241. |
| A3 | PASS | `md5sum <(head -472 _data/pieces/COPAGANDA-BRIEF.md) <(git show c3842de:_data/pieces/COPAGANDA-BRIEF.md)` gives fbfe0052f0cb5337aac3ef12383c0a03 for both. `git diff 635271e..7a48bed` shows 0 removed lines. The 11-03 stop report is unchanged. |
| A4 | PASS | The brief contains no RETIRED or NEVER USE figures (`grep -n -i -E 'RETIRED\|NEVER USE'` returns nothing). |
| A5 | PASS | READINESS table below. |
| A6 | PASS | Coverage line below. |

**Coverage: 49 items resolved of 56 items found.**

| Work item | Found | Resolved | What is unresolved |
|---|---|---|---|
| W1 | 22 brief show lines | 21 | Line 70 (NCIS: Sydney) is provisional |
| W2 | 1 | 1 | — |
| W3 | 1 | 1 | — |
| W4 | 3 layers | 2 | Layer 4 has open items |
| W5 | 29 figure items | 24 | See the W5 row above |

The stop report counted 48 items. The difference is W5: the stop report counted only the 21 hedged figures. This run counts every figure in the brief, as WORK item 5 asks, at lines 46, 47, 59 to 66, 69, 71 to 81, 98, 101, 114, 117, 119, 149, 150, 151, 327 and 334.

### READINESS: every remaining blocker to publish

| # | Blocker | Class |
|---|---|---|
| R1 | Hours per show, 28 series | DATA DONE |
| R2 | Updated Wolf franchise total. Same 7 shows: 1,387 broadcast episodes, or 1,459 on all platforms. | DATA DONE |
| R3 | hours-by-show.csv and cohorts.csv | DATA DONE |
| R4 | Layer 2 perception-gap table | DATA DONE |
| R5 | Layer 3 and Layer 5 sources, with the unmeasured questions named | DATA DONE |
| R6 | Comcast NBCUniversal Foundation grant recipients. They are listed only in Statement 11 of the 990-PF, a PDF attachment that is not in the IRS XML. The ProPublica copy is behind a captcha from this environment. AMA can open it in a browser: https://projects.propublica.org/nonprofits/organizations/510390132 | DATA UNAVAILABLE (this environment) |
| R7 | Which entity is Dick Wolf's foundation. No public filing could be tied to him by name search. | DATA UNAVAILABLE |
| R8 | Current US DNA exoneration count (line 119). innocenceproject.org returns 403. The National Registry of Exonerations provides data by spreadsheet request only. | DATA UNAVAILABLE |
| R9 | Hargitay net worth (line 150). No primary source exists. | DATA UNAVAILABLE |
| R10 | IMDb actor count for calculator panel 2, and advertiser lists (line 334). Neither was in this run's WORK list. | DATA UNAVAILABLE (not attempted) |
| R11 | Calculator hour convention: runtime hours (content only) or slot hours (the original convention, 1 episode = 1 hour) | AMA RULING |
| R12 | Show scope: whether 9-1-1 and its spinoffs, Grimm, all five CSI series, and NCIS: Sydney count; whether the FBI franchise and NCIS: Origins are added | AMA RULING |
| R13 | Birth years 1960 to 1971 get 0 hours at ages 8 to 18, because the show list starts in 1990. Either add pre-1990 shows, or narrow the 1960–2000 input range. | AMA RULING |
| R14 | Claims the research undercuts, which the brief still states: line 47/149 ($600M against Forbes' $1.5B), line 69 (NCIS longest-running), line 114 (clearance is not arrest), line 119 (375 is a 2020 count), line 182 ("Nobody is studying this directly", against NBER w29243), line 241 (CSI Effect on trial outcomes) | AMA RULING |
| R15 | IMDb datasets are licensed for personal and non-commercial use. Runtimes came from them. Publishing derived numbers needs a ruling. TVmaze data is CC BY-SA and needs attribution. | AMA RULING |
| R16 | Seven-tab structure. TABS-04 needs a D-## entry, and none exists. | AMA RULING |
| R17 | "What Could Exist": its own tab, or the close of Overview | AMA RULING |
| R18 | Money tab placeholder framing for a nothing-found result | AMA RULING |
| R19 | Copy of record. No COPAGANDA-COPY.md exists (COPY-06), so the research was appended to the brief as the interim target. | AMA RULING |
| R20 | The brief header still reads "Research pass needed · Do not build yet" | AMA RULING |
| R21 | Overview and essay copy, editorial lines, the McDonald's frame, and the pill-dose wording | AMA VOICE |
| R22 | One placement sentence per Screen Time Report tier, if ruled in | AMA VOICE |
| R23 | No `.mdx` route exists (PROJECT-STATUS.md line 288). The calculator itself is not built. | BUILD (Type 2) |
| R24 | V1 to V5 visuals. The pre-Astro `copaganda/*.html` drafts carry stale or unsourced figures (section 5, item 9). | BUILD (Type 2) |

## 3. Stop conditions

| Condition | Fired | Resolution |
|---|---|---|
| PREFLIGHT: more than a third of hosts fail on DNS or proxy | No | curl reached all 4 hosts: bjs.ojp.gov 200, cde.ucr.cjis.gov 200, news.gallup.com 301 (redirects to the poll pages), www.imdb.com 202. The built-in WebFetch tool still fails DNS for bjs.ojp.gov. The rule counts fetch failures, and curl fetched every host, so this was not treated as a stop. See anomaly 5. |
| `git status` shows a path this run did not create | No | Before each commit, `git status --short --untracked-files=all` showed only the brief and the two CSVs. |

## 4. The command or URL behind every number

The brief append gives a source next to every value, plus a full URL key in its section 6. These are the commands that produced the numbers:

| Numbers | Command or URL |
|---|---|
| Episode counts, air dates, per-season networks | `curl https://api.tvmaze.com/lookup/shows?imdb=<id>`, then `/shows/<id>/episodes?specials=1` and `/shows/<id>/seasons`, 2026-11-03 |
| Runtimes, IMDb episode rows | `curl -O https://datasets.imdbws.com/title.basics.tsv.gz -O https://datasets.imdbws.com/title.episode.tsv.gz` (Last-Modified 2026-11-03 00:47 GMT), filtered with awk on the 28 series ids |
| hours-by-show.csv, cohorts.csv, franchise totals, cohort sample rows | Script `build.py`, run over the files above. It and the other helper scripts below are in the session scratchpad, not in the repo (anomaly 11). |
| FBI violent and property rates, 1979 to 2025 | `curl "https://cde.ucr.cjis.gov/LATEST/s3/signedurl?key=additional-datasets/srs/estimated_crimes_1979_2025.csv"`, then the signed URL. The file is an .xlsx workbook, sha256 e7bf3de96b21d00fc10e9d60fee4d8257cba0a095ce5c5fc992047d46fb76486. |
| FBI clearance rates 2024 and 2025 | Same signed-URL endpoint with `key=cius/<year>/offenses-known-to-le-<year>.zip`, file CIUS_Table_25_…_<year>.xlsx |
| Gallup series | `curl -L https://news.gallup.com/poll/1603/crime.aspx`, table 7 ("More Crime US") and table 45 ("DNA Evidence Reliable") |
| NCVS rates | `curl https://bjs.ojp.gov/document/cv24.pdf`, then `pdftotext -layout`, appendix table for figure 1 |
| Jail unconvicted share, 68% | `curl https://bjs.ojp.gov/document/ji24st.pdf`, text lines 68 and 357 |
| Complaint filing, 13.7% | `curl https://bjs.ojp.gov/content/pub/pdf/cpp08.pdf`, text line 860 |
| Comcast NBCUniversal Foundation and Joyful Heart 990 values | IRS index `https://apps.irs.gov/pub/epostcard/990/xml/2025/index_2025.csv` and `.../2024/index_2024.csv`. XML files were pulled from batches 2025_TEOS_XML_11B and 2024_TEOS_XML_11A with HTTP range reads (script `rangezip.py`, using the zipfile-deflate64 package). |
| Wolf $1.5B | `curl https://www.forbes.com/profile/dick-wolf-1/`, which reads "$1.5B Real Time Net Worth as of 11/3/26" |
| NBER figures (4.6%, 10%) | `curl https://www.nber.org/papers/w29243`, abstract text |
| Paper citations | `https://api.crossref.org/works?query.bibliographic=…` and `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&id=11055262` |
| Coverage counts (49 of 56) | Counted against the brief's line numbers (`grep -n` on COPAGANDA-BRIEF.md at 635271e) and the five WORK items |

## 5. Anomalies and open items (stated, not fixed)

1. **The CSVs had to be force-added.** `.gitignore` line 2 (`_data/**/*.csv`) excludes them. They were staged by explicit path with `git add -f`. `.gitignore` was not edited, because that would change an existing file.
2. **FBI file problems.** The file named `estimated_crimes_1979_2025.csv` is an .xlsx workbook. It has no national rows for 2017 to 2020. Those years were derived by summing the 50 states plus DC, and that method reproduces the published national rows exactly for 2016, 2021 and 2024.
3. **TVmaze network data.** At show level, TVmaze reports only the current network: Organized Crime shows as Peacock, Criminal Minds as Paramount+, Criminal Intent as USA. The per-season network field was used for the broadcast flag instead.
4. **NCIS: Sydney.** TVmaze lists Australian Paramount+ dates and counts 20 episodes in S3, while US listings give 10. All 38 episodes are counted as broadcast, so this row is provisional.
5. **WebFetch still blocked.** With network access set to Full, the WebFetch tool still returns `getaddrinfo ENOTFOUND bjs.ojp.gov`, while curl reaches the host. Every primary fetch in this run used curl.
6. **Bot blocks.** innocenceproject.org returns 403. ProPublica PDF downloads return a captcha page. The Forbes 2026 celebrity billionaires article returns 403, though the Forbes profile page fetched fine. Those items are labelled SECONDARY or NOT VERIFIED.
7. **IMDb license.** The IMDb non-commercial dataset terms may restrict publishing derived runtimes on a public site (R15). Episode counts and air dates come from TVmaze, so the cohort table's episode columns do not depend on IMDb. The runtime-hours columns do.
8. **CLAUDE.md "READ FIRST" rule.** CLAUDE.md asks for a "READ FIRST" first line on files whose names exist in more than one repo. The two CSVs have no such line: it would break CSV parsing, and only this one repo is attached, so the name clash cannot be checked. This report and the stop report carry the line.
9. **Prior drafts are stale.** The pre-Astro `copaganda/*.html` drafts carry figures the research now contradicts or cannot source. Examples: "~150 seasons" Wolf (visual-2); "27 seasons" SVU (visual-3; 28 seasons have now aired); "$0 documented to criminal justice reform" with no traceable source (visual-2). They were not edited.
10. **Calendar-year approximation.** The age window treats every episode aired in a calendar year as seen at that year's age. A reader born in December gets the same window as one born in January.
11. **Helper scripts are not in the repo.** `build.py`, `summ.py` and `rangezip.py` stay in the session scratchpad, so the CSVs can only be regenerated by rerunning the steps in section 4. Committing the scripts was not in WORK.
12. **Magnum P.I.** Its last episode date (2024-01-03) comes from TVmaze and was not cross-checked against NBC.
13. **Conflicts resolved in favor of the prompt.** CLAUDE.md asks for reports in `../alterrell-hq/reports/` and a LEDGER write. The prompt says this repo's `reports/` and no LEDGER writes, and the prompt was followed. The model is named in chat only.
14. **Push order.** The research commit (7a48bed) was pushed before this report was written, so the report could cite a real push result. This report is the final commit.

## 6. LEDGER line

- Copaganda research rerun: hours-by-show and cohort CSVs built (28 series), Layer 2 gap table and Layer 3-5 sources appended to brief, 24 of 29 brief figures resolved, 19 readiness blockers open for AMA or build | waiting | 11-03-26
