# READ FIRST — alterrell-interactive-public

# Specialist Map research pass: rerun

## (1) Run

- Run date: 2026-11-03 (UTC; rerun started 22:22Z).
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-specialist-map. The branch tip at rerun start was c732d32, the 11-03 stop report, which this rerun leaves unchanged.
- Model: claude-opus-5-5 (configured for this session).
- Deploy: none. No merge.
- Bible: ALTERRELL-INTERACTIVE-BIBLE.md (last updated 2026-10-29) was read at the start of this session and confirmed as the rulebook.
- Copy of record: **no proper copy of record exists** for Specialist Map; there is no `*-COPY.md` (Bible COPY-06). Findings were appended to `_data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md` as an **interim** target, because the session prompt names the prose file in `_data/pieces/`.
- Files written this run:
  - the appended section `## Research 2026-11-03 (cloud)` at the end of the brief
  - `reports/2026-11-03-specialist-map-rerun-data/` (2 scripts, 2 output files)
  - this report

## (2) Acceptance list (fails first)

No check failed.

| ID | Result | Reason |
|---|---|---|
| A1 | PASS | Every MEASURED figure has a URL. Every URL was accessed 2026-11-03, as stated in the appendix header and in §4. Figures I could not check against a primary source are tagged SECONDARY, not verified. |
| A2 | PASS | No voice slot was filled and no editorial line was rewritten. The "heads up two years before" frame line is flagged for AMA, not edited. |
| A3 | PASS | `git diff c732d32 0e539ea -- _data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md` shows 68 insertions and 0 deletions. The 11-03 stop report is untouched. |
| A4 | PASS | The brief has no RETIRED or NEVER USE figures. `grep -n -i -E 'RETIRED\|NEVER USE' _data/pieces/SPECIALIST-MAP-PIECE-BRIEF.md` on the pre-append file returned nothing (rc=1). |
| A5 | PASS | The READINESS table is in §5. |
| A6 | PASS | Coverage is printed below. |

**Coverage: 6 items resolved of 10 items found.** "Resolved" means answered from a primary source, or labelled SECONDARY where no primary source exists. Nothing was skipped. The 4 unresolved items are open because a primary source was blocked, not checked, or does not exist.

| # | Item (from the brief) | Status |
|---|---|---|
| 1 | Tab 1 visceral stat (WORK 1) | RESOLVED: 5 candidates, AMA picks |
| 2 | Urgent care vs. primary care cost (WORK 2) | RESOLVED: the gap is $4 or smaller in both claims sources |
| 3 | Wait times by specialist type | OPEN: AMN primary PDF returned 403; SECONDARY values recorded |
| 4 | PPO vs. HMO referral requirement prevalence, and the brief's claim about it | RESOLVED: plan shares and definitions found; the HMO referral share is not published in the sources found |
| 5 | Colonoscopy "currently 45" | RESOLVED: confirmed (USPSTF 2021) |
| 6 | Ophthalmologist vs. optometrist scope by state | OPEN: state list is SECONDARY; statutes not checked one by one |
| 7 | "6–10 month waits" | OPEN: SECONDARY only. These waits occur only at metro extremes; specialty averages are 12–42 days |
| 8 | Provider shortage projection (Tab 4) | RESOLVED: AAMC, up to 86,000 by 2036 |
| 9 | "heads up two years before" (diabetes frame) | OPEN: no primary source found; editorial line, AMA |
| 10 | "fasting blood panel annually" (family history of diabetes) | RESOLVED: undercut. USPSTF and ADA say every 3 years after a normal result; yearly only for prediabetes |

### WORK 1: Tab 1 candidates

All are MEASURED; the full method is in the brief appendix.

| | Stat | Source, year, population | Computation |
|---|---|---|---|
| A | Black and White adults see a primary care doctor at the same rate (43.5% vs. 43.2%), but specialists at 32.3% vs. 45.4% | MEPS 2023, US civilian non-institutional adults 18+ | My computation from the HC-251 and HC-248G public-use files. A specialist visit is an office visit (in person or telehealth) with an MD whose DRSPLTY_M18 is not primary care or ambiguous. Weighted by PERWT23F; Taylor-linearized CIs; age-adjusted to the 2000 standard (NCHS Statistical Notes 20, distribution #8) |
| B | 46.2% of adults at 400%+ of poverty saw a specialist in 2023, vs. 33.3% below poverty (1.39 times) | Same as A | Same method. Crude rates 48.9% vs. 34.4%. NHIS 2018 shows the same direction: 31.6% vs. 24.2% |
| C | Uninsured adults 18–64 saw a specialist at 9.6%, vs. 39.2% for privately insured (0.245 times) | MEPS 2023, adults 18–64 (INSCOV23). NHIS 2018 gives 9.6% vs. 26.4% | Crude (no age adjustment within 18–64) |
| D | Black:White dermatology visit rate ratio 0.27, and 0.34 after adjusting for insurance, income, health and education | Cai et al., JAMA Intern Med 2021; MEPS 2015–2018 adults | Authors' negative binomial model |
| E | PCPs shared Black patients with 8.8 cardiologists, vs. 17.5 for White patients | Landon et al., JAMA Netw Open 2021; traditional Medicare 2009–2010, 12 markets | Authors' network analysis; hypothesis-generating |

My recommendation, which is not a ruling: A fits the brief's argument best. It shows the same front door but a different map past it, and it doesn't blame patients. B is the literal ask, "by income". Pair either with D on the dermatology card.

## (3) Stop conditions

- **PREFLIGHT: passed, did not fire.** `curl -sS -o /dev/null -w '%{http_code}' -L --max-time 30 https://<host>/` returned 200 for meps.ahrq.gov, cdc.gov, kff.org, healthcare.gov, www.cdc.gov, www.kff.org and www.healthcare.gov at 2026-11-03T22:22Z. 0 of 4 failed.
- **Other blocks, which did not stop the run:**
  - **WebFetch tool:** failed DNS on healthcostinstitute.org and pmc.ncbi.nlm.nih.gov. Resolved by fetching with curl from the container, which the Full network setting allows.
  - **Sites returning HTTP 403 to curl:** amnhealthcare.com (PDF and web page), globenewswire.com (AMN release), ir.amnhealthcare.com (404), diabetesjournals.org, bhw.hrsa.gov, and two cdc.gov/diabetes pages.
    - `curl -sS "$HTTPS_PROXY/__agentproxy/status"` showed no proxy failures after 22:00Z, so these blocks are the sites' own, not the session's network policy.
    - ADA was reached through PMC instead (PMC12690183). AMN and HRSA were not reached.
- **Copy-of-record conflict:** the prompt rule (append to the prose file in `_data/pieces/`) conflicts with COPY-06 (the copy of record must be a `*-COPY.md`). I appended to the brief as an interim target and printed the COPY-06 sentence in §1 and in the appendix header.

## (4) The command or URL behind every number

All URLs were accessed 2026-11-03. Scratch downloads were not committed. The scripts and outputs are in `reports/2026-11-03-specialist-map-rerun-data/`.

| Numbers | Source |
|---|---|
| Specialist and primary care visit rates by income, race and insurance (MEPS 2023; candidates A–C) | `python3 -I meps2023_specialist.py <dir>` run on https://meps.ahrq.gov/mepsweb/data_files/pufs/h251/h251dta.zip and https://meps.ahrq.gov/mepsweb/data_files/pufs/h248g/h248gdta.zip. Codebooks: https://meps.ahrq.gov/mepsweb/data_stats/download_data/pufs/h248g/h248gcb.pdf and https://meps.ahrq.gov/mepsweb/data_stats/download_data/pufs/h251/h251cb.pdf. Output: `meps2023_out.txt` |
| NHIS 2018 rates (29.5% all adults crude; 24.2% / 31.6% age-adjusted by income; 9.6% / 26.4% by insurance) | `python3 -I nhis2018_specialist.py <dir>` run on https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Datasets/NHIS/2018/samadultcsv.zip, .../2018/personsxcsv.zip and https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Datasets/NHIS/2018_imputed_income/INCMIMP.zip. Variable list: https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/2018/samadult_freq.pdf. Output: `nhis2018_out.txt` |
| No general-specialist item in NHIS 2019–2024 | `grep -c -i 'medical specialist\|seen a specialist\|saw a specialist'` on https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/{2019,2020,2021,2022,2023,2024}/adult-codebook.pdf. The only hits are a cancer-care item (2020, 2021) and a tinnitus item (2023) |
| Age-standard weights 0.128810 / 0.401725 / 0.299194 / 0.170271 | https://www.cdc.gov/nchs/data/statnt/statnt20.pdf, Table 2, distribution #8 |
| Ratios 1.39, 1.42, 1.405, 0.245, 2.75, 0.503, 0.978, 0.982, 9.56 months, 7.59 months | `python3 -c` arithmetic on the values above (MEASURED) |
| Dermatology ratio 0.27 / 0.34; 23 of 29 specialties | https://pmc.ncbi.nlm.nih.gov/articles/PMC8290333/ |
| 17.5 vs. 8.8 cardiologists | https://pmc.ncbi.nlm.nih.gov/articles/PMC7835717/ |
| 66% vs. 11% denied appointments | https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=21675891&rettype=abstract&retmode=text |
| HCCI $220 / $224; $218 / $167; $215 / $216; $83 / $61; $9 / $16 | https://healthcostinstitute.org/all-hcci-reports/urgent-care-spending-increased-by-50-over-5-years-driven-by-higher-use/ |
| FAIR Health $183 / $179 / $138 (2023) | https://mma.prnewswire.com/media/2647389/Eighth_Annual_FAIR_Health_Report.pdf?p=pdf |
| FAIR Health $294 / $242 / $109 (2016) | https://www.fairhealth.org/article/fair-health-identifies-key-indicators-for-changing-venues-of-care |
| USPSTF ages 45–75 for colorectal screening, May 18, 2021 | https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening |
| USPSTF ages 35–70 and 3-year interval for diabetes screening | https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes |
| ADA 3-year interval; prediabetes tested yearly | https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/ |
| Plan shares 46 / 33 / 12 / 9% and plan definitions | https://files.kff.org/attachment/Employer-Health-Benefits-Survey-2025-Annual-Survey.pdf |
| Referral language by plan type | https://www.healthcare.gov/choose-a-plan/plan-types/ |
| 86,000 by 2036; 34.1% growth in ages 65+ | https://www.aamc.org/news/press-releases/new-aamc-report-confirms-growing-physician-shortage |
| AMN wait times: 31 days overall; 42 / 40 / 36.5 / 33 / 23.5 / 12 days by specialty; 291 and 231 days; 65 and 12 days by metro (all SECONDARY) | https://www.techtarget.com/patientengagement/news/366624919/Average-patient-appointment-wait-time-is-31-days-in-2025 |
| 14 optometry laser states (SECONDARY) | the Vermont legislature PDF URL in the brief appendix |
| 8 states (SECONDARY) | https://commerce.utah.gov/wp-content/uploads/2021/10/OPLR-Legislative-Inquiry-Report-Optometrist-Laser-Surgery-Privileges-PDF-for-Publication-Updated-1-29-2024-1.pdf |
| 68 insertions, 0 deletions in the brief | `git diff --stat` |

## (5) Anomalies and open items (stated, not fixed)

1. **Urgent care finding undercuts the premise.** Tab 4 lists "the urgent care vs. primary care cost gap (data needed)". Two commercial claims sources put the gap at $4 or smaller, and one same-diagnosis comparison (UTI) has urgent care $51 higher. Whether the line stays is an AMA ruling. The large gap in the data is urgent care vs. the ER, but adding that would widen scope, so it was not added.
2. **Referral claim is half supported.** "PPOs typically do not" require referrals is supported by KFF and HealthCare.gov. "HMOs typically do" is not stated in either source: KFF defines HMOs only by out-of-network coverage, and the gatekeeper plan type is POS (9% of covered workers). The claim was not rewritten.
3. **"Annually" is undercut.** USPSTF and ADA give 3-year intervals after a normal test, and yearly testing only once someone has prediabetes.
4. **"6–10 month waits"** occur only at metro-specialty extremes in the AMN data (SECONDARY). The brief's "some specialists" wording is consistent with that, but the specialty averages are 12–42 days.
5. **Two survey sources, two levels.** The MEPS 2023 rate (42.4% crude, any specialist) and the NHIS 2018 rate (29.5%) measure different things: event-reported office visits vs. a self-reported 12-month recall item. They should not be shown together as a trend.
6. **Own computations.** Candidates A–C are Alterrell computations from public-use files, not published AHRQ or NCHS statistics. The specialist definition is my choice and is documented in the script. A sensitivity run excluding OB/GYN and psychiatry keeps every gap (`meps2023_out.txt`).
7. **Primary sources not reached:**
   - the AMN 2025 wait-time PDF (403)
   - the AAMC full report PDF (download served an HTML page)
   - HRSA NCHWA projections (403; the dashboard is not machine-readable)
   - per-state optometry statutes (not checked)
   - Tennessee's 2026 law (SECONDARY only)
8. **Date of the HCCI page.** The page shows "January 28, 2026". It covers 2018–2022 data, and I did not confirm whether that is the original publication date.
9. **Brief gate unverified.** The brief says not to build until Hub and Sodium are deployed. Their status was not checked.
10. **CLAUDE.md vs. the prompt.** CLAUDE.md asks for a report and LEDGER write to ../alterrell-hq. The prompt overrides it, so neither was written.
11. **Tool note.** The WebFetch tool cannot resolve hosts in this session even with Full network access; container curl can.

### READINESS (every remaining blocker to publish)

| Blocker | Class |
|---|---|
| Tab 1 stat: research the candidates | DATA DONE |
| Tab 1 stat: pick one of candidates A–E, and accept Alterrell's own MEPS computation as a citable source | AMA RULING |
| Urgent care vs. primary care: data | DATA DONE |
| Urgent care vs. primary care: whether the Tab 4 line survives a $4 gap | AMA RULING |
| Wait times by specialty and the "6–10 months" figure, from AMN's primary document | DATA UNAVAILABLE (403); SECONDARY in hand |
| Accept the SECONDARY wait-time figures, or require the primary | AMA RULING |
| PPO/HMO plan shares and definitions | DATA DONE |
| HMO referral prevalence | DATA UNAVAILABLE |
| "HMOs typically do" wording | AMA RULING |
| Colonoscopy age 45 | DATA DONE |
| Optometry scope by state, checked against statutes | DATA UNAVAILABLE (not completed this run) |
| Provider shortage number (AAMC 86,000 by 2036) | DATA DONE |
| HRSA cross-check of the shortage number | DATA UNAVAILABLE (403) |
| "fasting blood panel annually" for family history | AMA RULING (the research undercuts it) |
| "heads up two years before" frame | AMA VOICE |
| No `*-COPY.md` copy of record; whether the brief can be the interim append target | AMA RULING |
| Tab 1 personal entry, "I called my mother" beat, tier observation, Overview | AMA VOICE |
| Brief's gate on Hub and Sodium deployment | AMA RULING |
| Page build | BUILD (Type 2) |

## (6) LEDGER line

- Specialist Map research rerun: 5 Tab 1 candidates from MEPS 2023 and NHIS 2018, urgent care gap found to be $4 or smaller, 6 of 10 items resolved, appended to brief | waiting | 11-03-26
