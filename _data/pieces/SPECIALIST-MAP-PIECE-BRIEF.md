# PIECE BRIEF: The Appointment You Didn't Know to Make
**Platform:** Alterrell Interactive — Civics & Policy lane
**Status:** Research complete · Brief locked · Not yet in build
**Last updated:** March 19, 2026
**Series:** Standalone (soft setup for Therapy Navigator, Piece 2)

---

## Tagline
*How specialist care works, who learns to use it, and how to make your benefits count.*

---

## Editorial North Star
This piece does not indict a system. It hands people a map they were never given.
The argument: navigating specialist care is a learned skill, and who teaches you is not random.
Being without resources meant you didn't have access to that knowledge — not that the system
was designed to exclude you. Here's us showing you the way.

**Emotional arc:** Recognition → Revelation → Action
**User outcome:** "I am going to schedule an appointment to better my health."

---

## Voice Seed
AMA's Substack post "Annual Benefits Enrollment is Here" is the emotional rough cut.
The "I called my mother" moment is the recognition beat. The McDonald's/Applebee's/fine
dining tier observation is the structural argument in plain language. Both carry forward.

---

## Tab Structure (locked)

### Tab 1 — The Map Nobody Gave You
Editorial entry point. Short, personal, punchy.
- The knowledge-as-inheritance frame: who you know determines what you know to do
- Plain statement of the argument: specialist navigation is a class and social capital issue
- One visceral stat: TBD — needs research pass on specialist utilization by income
- The tier observation (McDonald's → Applebee's → fine dining) reframed as system, not complaint
- Transition into the tool: "Here's the map."

### Tab 2 — Find Your Concern (The Tool)
Self-directed explorer. Non-linear. People move at their own pace.
No invasive questions. Full landscape visible at once.
Built as accordion cards, one per concern category — modeled on sodium franchise build.

**Concern card structure (each accordion):**
- Relatable symptom signal as the header (conversational, not clinical)
- Who you see
- What they typically do
- Tests to ask for by name
- What to expect at the appointment
- Referral note: plan-dependent — prompt to call benefits line
- Family history layer: embedded inside each card, not a separate entry point
  ("This also applies if you have a family history of X")

**Concern categories (draft — to be confirmed with research):**
1. "People tell you that you snore" → Pulmonologist / Sleep specialist
2. "You have a mole you've been avoiding" → Dermatologist
3. "You're sometimes constipated, sometimes not" → Gastroenterologist
4. "You're tired all the time even when you sleep enough" → Endocrinologist / PCP
5. "Your vision has changed but you haven't updated your glasses" → Ophthalmologist vs. Optometrist
6. "You've been having headaches or ear issues" → ENT
7. "Your weight has changed and you don't know why" → Endocrinologist
8. "You've been wanting to talk to someone but don't know where to start" → Therapist/Psychiatrist
   (Soft handoff to Piece 2 — no deep dive here)

**Family history layer triggers (embedded per card):**
- Diabetes → Endocrinologist, fasting blood panel annually
- Heart disease / hypertension → Cardiologist, PCP monitoring
- Cancer (skin, colon, breast) → Dermatologist, Gastroenterologist, OB/GYN
- Mental health conditions → Therapist / Psychiatrist

### Tab 3 — Before You Call (Benefits Checklist)
Sits between concern finder and action. The empowerment move.
We give people the exact words to find out what their plan covers.
Prompt: call your member services number (on the back of your insurance card).

**Checklist questions to ask:**
- Do I need a referral to see a [specialist]?
- Is [specialist name] in my network?
- What is my current deductible and how much have I met?
- What is my out-of-pocket maximum?
- Does my plan cover [specific test — e.g. colonoscopy, sleep study]?
- Is telehealth covered for this specialist type?

Note on referrals: not all plans require them. PPOs typically do not.
HMOs typically do. This varies — call to confirm.

After the call: return to Tab 2 with your answers and book.

**Results storage guidance (embedded here):**
Where to keep your results if you're seeing multiple doctors:
- A shared notes doc or folder (Google Drive, Apple Notes, etc.)
- What to track: test name, date, result, ordering doctor
- Why it matters: specialists often don't share records automatically

### Tab 4 — The Cost of Not Going
The structural argument. Quiet, not accusatory.
- The deductible front-loading insight: hitting your deductible in January vs. December
  means the same care costs you radically different amounts
- The urgent care vs. primary care cost gap (data needed)
- The cost-of-inaction narrative: the diabetes example
  Frame: "The person who went routinely got a heads up two years before it became a problem.
  Here's what that appointment looks like." Not: "you should have gone sooner."
- One forward-looking number: provider shortage projections — why finding someone good now matters
- The wait time reality: some specialists have 6–10 month waits for good providers.
  The best time to book was last year. The second best time is now.

### Tab 5 — Sources & Methodology
Standard Alterrell footer treatment. Collapsible.

---

## The Interactive Tool — Full Spec

**What it is:** Self-directed concern explorer. Not a quiz. Not a decision tree.
People see the full accordion landscape and open what's relevant to them.

**What it is not:**
- A spend calculator (requires saved data — out of scope for v1)
- A diagnostic tool (explicitly disclaimed)
- A quiz with invasive health questions

**Build reference:** Sodium piece franchise accordion. Same interaction model.

**Tool does not require saved data.** Checklist is copyable/printable.
Family history layer is embedded inside concern cards, not a separate entry.

---

## Data Still Needed (Research Pass Required Before Build)

- Specialist utilization rates by income bracket (Tab 1 stat)
- Urgent care vs. primary care average cost differential
- Average wait times by specialist type
- Referral requirement breakdown: PPO vs. HMO by prevalence
- Colonoscopy age recommendation (currently 45 — confirm current guideline)
- Ophthalmologist vs. optometrist distinction — scope of practice by state

---

## Piece 2 Handoff Note
The therapy navigator lives inside Tab 2 as one concern card only.
It does not go deep. It names the entry point and points forward.
Full Piece 2 brief to be written in a separate session.

Piece 2 user outcome (locked for reference):
"I understand what a therapist does and does not do. I know it will take me
X tries to find someone. I know what I want and under what conditions.
I will give it 3 sessions and if the vibe is off, I start over."

---

## Design System Notes
- Tab structure: anchor-scroll with scroll-spy (standard Alterrell pattern)
- Accordion build: modeled on sodium franchise cards
- Typography: DM Serif Display for concern card headers, DM Sans for body
- Colors: teal for action prompts, orange for cost/urgency signals
- No dark backgrounds on any tab with dense copy or the tool
- 44px minimum touch targets on all accordion triggers
- Mobile-first: accordion stacks cleanly at 375px
- Breadcrumb nav: standard Alterrell pattern
- Journey block: Interactive / YouTube / Substack (every piece)
- Collapsible methodology footer: standard

---

## Editorial Calendar Placement
Not yet scheduled. Hub and Sodium ship first (Q1 2026).
This piece is in research/brief phase only.
Do not begin build until Hub and Sodium are deployed and confirmed.

---

## DO NOT
- Do not build a spend calculator in v1 — requires persistent storage
- Do not ask invasive health questions in the tool
- Do not frame the cost-of-inaction argument as blame or shame
- Do not go deep on therapy — one card only, Piece 2 owns that story
- Do not begin build without a research pass on the data gaps listed above
- Do not use dark backgrounds under the accordion tool or any dense copy tab


## Research 2026-11-03 (cloud)

Appended by a cloud research session on branch cloud/11-02-specialist-map. Nothing above this heading was changed. No proper copy of record exists for Specialist Map: there is no `*-COPY.md` file (Bible COPY-06). This brief is used as the **interim** append target because the session prompt names it. All URLs were accessed 2026-11-03. Tags: MEASURED means read or computed this session from the source named. SECONDARY means a primary source exists but could not be fetched or does not exist, so the value comes from a report of it. Full method, commands and coverage are in `reports/2026-11-03-specialist-map-rerun.md`.

### 1. Tab 1 stat: candidates (AMA picks)

Computations A–C use public-use survey files. The scripts and their raw output are in `reports/2026-11-03-specialist-map-rerun-data/`. They are Alterrell computations from federal microdata, not figures AHRQ or NCHS publish. The credit line would read "Alterrell analysis of AHRQ MEPS 2023" (or "NCHS NHIS 2018").

- **A. Same front door, different back door (race). MEASURED.** MEPS 2023, adults 18+, age-adjusted to the 2000 US standard population. Saw a primary care doctor in the office: Black 43.5%, White 43.2%. Saw a specialist: Black 32.3% (95% CI 29.8–34.9), White 45.4% (95% CI 43.8–47.1). Hispanic adults: 29.6% specialist, 36.6% primary care.
  - Sources: https://meps.ahrq.gov/mepsweb/data_files/pufs/h251/h251dta.zip (full-year consolidated file) and https://meps.ahrq.gov/mepsweb/data_files/pufs/h248g/h248gdta.zip (office-based visits). Specialty comes from DRSPLTY_M18 on visits where the person saw a medical doctor (SEEDOC_M18=1).
  - Specialist = every coded specialty except family practice, general practice, geriatrics, internal medicine and pediatrics (primary care), and hospital residence, osteopathy and "other" (ambiguous). OB/GYN and psychiatry count as specialists.
- **B. Income. MEASURED.** MEPS 2023, adults 18+, age-adjusted. Saw a specialist at least once in 2023: 46.2% at 400%+ of poverty, 33.3% below poverty. That is 1.39 times. Crude rates: 48.9% vs. 34.4%.
  - NHIS 2018 shows the same direction: 31.6% vs. 24.2% age-adjusted. NHIS 2018 is the last NHIS year that asked about seeing a medical specialist; the 2019 redesign dropped the item. Source: https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Datasets/NHIS/2018/ (samadult, personsx) and https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Datasets/NHIS/2018_imputed_income/ (variable AHCSYR8; income from 5 imputations combined by Rubin's rules).
- **C. Insurance. MEASURED.** MEPS 2023, adults 18–64. Saw a specialist: uninsured all year 9.6%, any private insurance 39.2%, public only 33.1%. Uninsured adults saw a specialist at 0.245 times the rate of privately insured adults.
  - NHIS 2018, adults 18–64: uninsured 9.6%, private 26.4%.
- **D. Dermatology gap (fits the mole card). MEASURED, peer-reviewed.** Cai C, Gaffney A, McGregor A, et al. *Racial and Ethnic Disparities in Outpatient Visit Rates Across 29 Specialties.* JAMA Intern Med 2021;181(11):1525–1527. doi:10.1001/jamainternmed.2021.3771. https://pmc.ncbi.nlm.nih.gov/articles/PMC8290333/
  - Data: MEPS 2015–2018, adults.
  - Black:White dermatology visit rate ratio 0.27 (95% CI 0.21–0.34), adjusted for age. It is 0.34 after also adjusting for sex, self-reported health, insurance, income and education.
  - Black adults had lower visit rates to 23 of 29 specialties.
- **E. Referral networks. MEASURED, peer-reviewed.** Landon BE, Onnela J-P, Meneades L, O'Malley AJ, Keating NL. *Assessment of Racial Disparities in Primary Care Physician Specialty Referrals.* JAMA Netw Open 2021;4(1):e2029238. doi:10.1001/jamanetworkopen.2020.29238. https://pmc.ncbi.nlm.nih.gov/articles/PMC7835717/
  - Data: traditional Medicare, 2009–2010, 12 markets.
  - Mean number of cardiologists a PCP shared patients with: 17.5 for White patients, 8.8 for Black patients.
  - The authors say some of the gap may come from patient-initiated visits, and call the study hypothesis-generating.
- Supporting, older: Bisgaier J, Rhodes KV. NEJM 2011;364:2324–33. doi:10.1056/NEJMsa1013285. PubMed record: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=21675891&rettype=abstract&retmode=text
  - Design: secret-shopper calls to specialty clinics in Cook County, IL, in 2010, posing as parents of children.
  - Result: 66% of Medicaid-CHIP callers were denied an appointment vs. 11% of privately insured callers (MEASURED).

Caveat for every candidate: these are use rates, not need-adjusted rates. Lower-income adults report worse health, so an equal use rate would still mean less care relative to need.

### 2. Urgent care vs. primary care cost

- **HCCI** (page dated January 28, 2026): https://healthcostinstitute.org/all-hcci-reports/urgent-care-spending-increased-by-50-over-5-years-driven-by-higher-use/. Population: employer-sponsored insurance, under 65. MEASURED:
  - Average price, 2022: urgent care visit $220, primary care office visit $224.
  - Same diagnosis, 2022: UTI $218 urgent care vs. $167 primary care. Infectious-disease exposure $215 vs. $216.
  - Out of pocket, 2022: UTI $83 vs. $61. Infectious-disease exposure $9 vs. $16.
  - HCCI's own words: "The average prices of urgent care visits were similar to the average prices for primary care visits."
- **FAIR Health**, FH Healthcare Indicators and FH Medical Price Index 2025: https://mma.prnewswire.com/media/2647389/Eighth_Annual_FAIR_Health_Report.pdf?p=pdf (FAIR Health's report, hosted on its press-release distributor). Commercial claims, 2023. Median allowed amount for CPT 99204: office $183, urgent care center $179, retail clinic $138. MEASURED.
  - Earlier FAIR Health page: https://www.fairhealth.org/article/fair-health-identifies-key-indicators-for-changing-venues-of-care. 2016 median charge for CPT 99203: office $294, urgent care $242, retail clinic $109. MEASURED.
- **KFF:** no KFF analysis comparing urgent care and primary care prices was found this session.
- **Finding:** the research undercuts the premise of a large urgent-care-vs-primary-care price gap. In both claims sources the commercial price gap is $4 or smaller. The brief has no claim text on this, so nothing here contradicts written copy.

### 3. Other data gaps and figures in this brief

- **Colonoscopy "currently 45": confirmed.** USPSTF final recommendation, May 18, 2021: screen adults 45–75; grade B for ages 45–49, grade A for 50–75. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening. MEASURED. Note: the USPSTF age of 45 is the start of screening, by any recommended test. It is not a colonoscopy-specific age.
- **"PPOs typically do not / HMOs typically do" (require referrals).**
  - KFF EHBS 2025 (https://files.kff.org/attachment/Employer-Health-Benefits-Survey-2025-Annual-Survey.pdf) shares of covered workers: PPO 46%, HDHP/SO 33%, HMO 12%, POS 9%, conventional under 1%. MEASURED.
  - KFF definitions: a PPO has "no requirement for a primary care referral". A POS plan "requires a primary care gatekeeper". An HMO is defined only by not covering out-of-network care.
  - HealthCare.gov (https://www.healthcare.gov/choose-a-plan/plan-types/) says "POS plans require you to get a referral" and that PPO out-of-network use is "without a referral". Its HMO definition does not mention referrals.
  - The PPO half of the claim is supported. The HMO half is not stated in either primary source. No primary source found gives the share of HMO enrollees who need a referral.
- **"6–10 month waits": SECONDARY.** AMN Healthcare (formerly Merritt Hawkins) 2025 Survey of Physician Appointment Wait Times, 15 large metros. The AMN PDF returned HTTP 403 to this session, so the values come from TechTarget's report of it: https://www.techtarget.com/patientengagement/news/366624919/Average-patient-appointment-wait-time-is-31-days-in-2025
  - Average new-patient wait across specialties: 31 days.
  - Specialty averages: OB/GYN 42 days, gastroenterology 40, dermatology 36.5, cardiology 33, family medicine 23.5, orthopedic surgery 12.
  - Waits of 6–10 months appear only at metro extremes: dermatology in Portland, OR, 291 days (9.56 months); OB/GYN in Boston, 231 days (7.59 months).
  - The specialty averages are 12–42 days.
- **Wait times by specialist type:** same AMN source and same SECONDARY status as above.
- **Provider shortage projection.** AAMC press release, March 21, 2024: "a physician shortage of up to 86,000 physicians by 2036". https://www.aamc.org/news/press-releases/new-aamc-report-confirms-growing-physician-shortage. MEASURED.
  - The low end of the range (13,500) appears only in SECONDARY reports. The AAMC report PDF did not download.
  - HRSA NCHWA projections: bhw.hrsa.gov returned 403, and the data.hrsa.gov dashboard is not machine-readable. Not retrieved.
- **Ophthalmologist vs. optometrist scope by state: SECONDARY.** A Vermont Senate Health and Welfare witness document titled "States with Laser Surgical Privileges, September 2025" lists 14 states where optometrists may perform laser procedures: AK, AR, CO, IN, KY, LA, MS, MT, OK, SD, VA, WV, WI, WY. https://legislature.vermont.gov/Documents/2026/Workgroups/Senate%20Health%20and%20Welfare/Bills/S.64/Witness%20Documents/S.64~Dean%20Barcelow~States%20with%20Laser%20Surgical%20Privileges%20September%202025~1-30-2026.pdf
  - Healio reports that Tennessee added laser authority in April 2026 (SECONDARY).
  - A Utah OPLR report (updated 1-29-2024) counts 8 states at its own date.
  - Primary state statutes were not checked one by one.
- **"fasting blood panel annually" (family history of diabetes).** Undercut.
  - USPSTF (August 24, 2021) recommends screening adults 35–70 with overweight or obesity and says "screening every 3 years may be a reasonable approach" after a normal result. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes
  - ADA Standards of Care 2026, Section 2 (Diabetes Care 2026;49(Suppl 1):S27–S49, doi:10.2337/dc26-S002; https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/) lists a first-degree relative with diabetes as a risk factor for testing adults with overweight. It says normal results should be repeated "at a minimum of 3-year intervals". Yearly testing is for people with prediabetes.
  - MEASURED.
- **"heads up two years before" (diabetes frame):** no primary source found for a two-year lead time. This is an editorial frame line and is left to AMA.
