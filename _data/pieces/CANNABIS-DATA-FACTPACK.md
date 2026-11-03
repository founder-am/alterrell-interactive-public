# CANNABIS DATA FACTPACK

**Status: research data, interim. No proper copy of record exists for this piece.** Bible COPY-06 (D-111) says copy of record is a `*-COPY.md` file only and a factpack is never copy of record. No `CANNABIS-*-COPY.md` exists, and no brief exists (AMA, 10-26/10-29-26: do not write one). This file holds research findings only. It contains no Overview copy, no essay copy, no voice slots and no editorial lines.

Claim under test, as AMA ruled it: *dispensaries opened where past convictions were.* Unit: NYPD precinct (RULED 10-26/10-29-26). This file reports what the data shows. It does not rule on the claim.

Tags: **MEASURED** means pulled and computed this session, with the source given. **RULED (date)** means set by AMA. **PLACEHOLDER** means not yet known.

---

## Research 2026-11-03 (cloud)

All accesses were on 2026-11-03 (UTC). Data files, queries and scripts are in `_data/cannabis/`, and its `README.md` names every query.

### 1. Source inventory

| # | Source | URL | Years | Geography | Offense codes | Refreshed | Gaps |
|---|---|---|---|---|---|---|---|
| 1a | NYPD Arrests Data (Historic) | https://data.cityofnewyork.us/resource/8h9b-rp9u | 2006-01-01..2025-12-31 (MEASURED, `SELECT min(arrest_date), max(arrest_date)`) | `arrest_precinct`, lat/lon | `law_code` (PL 221xxxx = Art. 221 marijuana; PL 222xxxx = Art. 222 cannabis), `pd_cd`, `ky_cd` | rowsUpdatedAt 2026-04-28T15:56Z (MEASURED, `/api/views/8h9b-rp9u.json`) | Records arrest location, not residence. No disposition. 6,264,978 rows (MEASURED). |
| 1b | NYPD Arrest Data (Year to Date) | https://data.cityofnewyork.us/resource/uip8-fykc | 2026-01-01..2026-06-30 (MEASURED) | same | same | 2026-07-27T15:25Z (MEASURED) | Half year only. 141,870 rows (MEASURED). |
| 2a | NYPD Criminal Court Summons (Historic) | https://data.cityofnewyork.us/resource/sv2w-rv3k | 2006-01-01..2025-12-31 (MEASURED) | `precinct_of_occur`, lat/lon | Free-text `offense_description` plus `law_section_number` (221.05, 222.25, 222.45, Park Regs 1-04/1-05). Misspelled variants exist. | 2026-04-28T14:54Z (MEASURED) | Coding is inconsistent. 6 rows carry precinct 174, which does not exist (MEASURED). No outcome field. 5,758,424 rows (MEASURED). |
| 2b | NYPD Criminal Court Summons (YTD) | https://data.cityofnewyork.us/resource/mv4k-y93f | 2026-01-01..2026-06-30 (MEASURED) | same | same | 2026-07-27T15:36Z (MEASURED) | 58,415 rows (MEASURED). |
| 3a | DCJS Adult Arrests 18+ by County | https://data.ny.gov/resource/rikd-mt35 | 1970..2025 (MEASURED, `SELECT min(year), max(year)`) | County | Categories only: drug felony, drug misdemeanor, and others. **No marijuana column** (MEASURED, `/api/views/rikd-mt35.json`). | 2026-09-22T15:40Z (MEASURED) | No precinct. Marijuana cannot be separated from other drug offenses. |
| 3b | DCJS Dispositions of Adult Arrests by County/Region | https://criminaljustice.ny.gov/adult-arrests-by-county | Not read | County / region | Page text: "felony, violent felony, drug felony, and misdemeanor offenses" (MEASURED, page text 2026-11-03) | PLACEHOLDER | The page has no static download (MEASURED: no xlsx/pdf/csv link in its HTML). The tables were not opened. None of the 1,149 URLs in https://criminaljustice.ny.gov/sitemap.xml matches a marijuana arrest or disposition table (MEASURED). |
| 3c | DCJS Adult Arrests and Convictions dashboards | https://mypublicdashboard.ny.gov/t/OJRP_PUBLIC/views/NYSArrestsbyCounty/LandingPage and .../NYSConvictionsbyCounty/LandingPage | Not read | County (named "by County") | PLACEHOLDER | PLACEHOLDER | Tableau dashboards, not read by script. |
| 4 | OCA public data | https://www.nycourts.gov/division-technology-court-research (linked from https://criminaljustice.ny.gov/data) | PLACEHOLDER | PLACEHOLDER | PLACEHOLDER | PLACEHOLDER | **Not inventoried.** nycourts.gov returned HTTP 403 to scripted requests on 2026-11-03 (MEASURED). No OCA case-level dataset is on data.ny.gov (MEASURED: catalog search "court administration" and "pretrial release"). |
| 5a | OCM Current OCM Licenses (licences plus CAURD) | https://data.ny.gov/resource/jskf-tt3q | Current snapshot | Street address, county, region | License type (CAURD, AURD, ROD, Microbusiness, and others), status, operational status, `retail_date_opened_to_public` | rowsUpdatedAt 2026-11-02T23:30Z (MEASURED) | 302 rows statewide have a null county (MEASURED). 34 NYC microbusiness rows have no address (MEASURED). 28 licence numbers appear twice among NYC-candidate retail-type rows (MEASURED). Some rows carry an NYC county with a non-NYC address (Remsen, Farmingdale, Palenville, New Rochelle) (MEASURED). Closed stores appear only if still listed. No history of relocations. |
| 5b | OCM Dispensary Location Verification page | https://cannabis.ny.gov/dispensary-location-verification | Current | Address | None (no licence type, no dates) | Not stated on page | The page states "757 adult-use cannabis dispensaries". 755 table rows parsed (MEASURED). |
| 6 | Police Precincts boundaries | https://data.cityofnewyork.us/resource/y76i-bdw7 | Version 26c (MEASURED, dataset description) | 78 precinct polygons, including 116 and 121 (MEASURED) | n/a | 2026-11-02T20:23Z (MEASURED) | Current boundaries only. Precinct 116 first appears in arrests on 2024-12-19, and 121 on 2013-07-01 (MEASURED). |
| 7a | ACS 2020–2024 5-year, B01003 total population, tracts | https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b01003.dat | 2020–2024 | 2,327 NYC tracts (MEASURED) | n/a | Release file | Estimates carry margins of error, which are not propagated. api.census.gov now requires a key (MEASURED: redirect to missing_key.html). |
| 7b | Tract-to-precinct crosswalk, built from 2020 blocks | https://www2.census.gov/geo/tiger/TIGER2020/TABBLOCK20/tl_2020_36_tabblock20.zip | 2020 | 37,984 NYC blocks; POP20 total 8,804,190 (MEASURED) | n/a | 2020 vintage | 555 blocks holding 1,760 POP20 residents fall outside every precinct polygon (MEASURED). |

### 2. Year range and the 03-31-21 MRTA cutover

- Arrest series: 2006-01-01..2026-06-30 (MEASURED, sources 1a and 1b).
- Pre-MRTA: Article 221 codes only, 2006-01-01..2021-03-30.
- Post-MRTA: Article 222 codes only, 2021-03-31..2026-06-30.
- The cutover in the data is clean:
  - 0 Article 221 arrests dated on or after 2021-03-31 (MEASURED, `SELECT count(*) WHERE law_code like 'PL 221%' AND arrest_date >= '2021-03-31'` on 8h9b-rp9u).
  - 0 Article 222 arrests dated before it (MEASURED, same query reversed).
- 2021 is split at 2021-03-31 (MEASURED, `_data/cannabis/mrta_2021_split.csv`):
  - Arrests: 605 pre (2021-01-01..2021-03-30), 67 post.
  - Summonses: 3,728 pre, 68 post.
- The analysis window is 2014-01-01..2021-03-30. It starts in the first full year with precinct 121 and ends the day before MRTA.

### 3. Citywide series (arrests and summonses kept separate)

All MEASURED, summed from `_data/cannabis/precinct_table.csv`. Sources: 1a/1b for arrests and 2a/2b for summonses.

| Year | Marijuana/cannabis arrests | Marijuana/cannabis criminal court summonses |
|---|---|---|
| 2006 | 40,183 | 9,648 |
| 2007 | 48,901 | 9,344 |
| 2008 | 48,976 | 8,910 |
| 2009 | 55,013 | 8,776 |
| 2010 | 59,339 | 8,422 |
| 2011 | 58,913 | 8,712 |
| 2012 | 47,573 | 10,800 |
| 2013 | 36,359 | 13,318 |
| 2014 | 33,314 | 13,384 |
| 2015 | 22,347 | 17,904 |
| 2016 | 23,187 | 20,739 |
| 2017 | 22,653 | 21,058 |
| 2018 | 10,945 | 14,785 |
| 2019 | 3,231 | 14,951 |
| 2020 | 1,645 | 10,460 |
| 2021 | 672 (605 pre / 67 post) | 3,796 (3,728 pre / 68 post) |
| 2022 | 179 | 375 |
| 2023 | 443 | 688 |
| 2024 | 397 | 981 |
| 2025 | 402 | 1,237 |
| 2026 (Jan–Jun) | 211 | 495 |

Window totals for 2014-01-01..2021-03-30 (MEASURED): **117,927 arrests** and **117,009 summonses**. Post-MRTA arrests, 2021-03-31..2026-06-30: **1,699** (MEASURED).

Summons offense descriptions matched by the filter included "MARIJUANA, POSSESSION OF" (167,043 all-years), "MARIJUANA, UNLAWFUL POSSESSION 2ND DEGREE" (18,397), "POSS OF MARIJUANA" (8,706), "UNLAWFUL POSSESSION OF CANNABIS" (2,753), "UNLAWFUL SALE OF CANNABIS" (528), and misspelled variants. Excluded: "UNLAWFUL POSSESSION SYTHETIC CANNABINOIDS" (892 + 61 + 14) and Admin Code "NO TRIP SHEET" rows coded 222 (MEASURED, distinct-description query on sv2w-rv3k).

### 4. Dispensaries

All MEASURED from `_data/cannabis/dispensaries_geocoded.csv`. Sources: 5a, geocoders as listed in the README, and boundaries v26c.

- 660 NYC-candidate retail-type licence rows. 626 have an address. Census geocoder results on those 626: 615 Match, 5 Tie, 6 No_Match.
- NYC DCP GeoSearch placed 5 more rows. 1 was rejected.
- 562 rows fall inside a 26c precinct polygon.
- **Open dispensaries in NYC (CAURD + AURD + ROD, operational status Active): 300.** Of these, 171 are CAURD and 129 are AURD. 0 ROD rows are Active/Active.
  - Reconciliation against the county field: AURD Active/Active by NYC county = 132. Placed = 129, plus 3 not placed: Farmingdale and Palenville addresses carrying county "New York", and 270-01 Hillside Ave, which neither geocoder matched.
- Ever-opened (`retail_date_opened_to_public` set): 320.
- Microbusinesses with a retail opening date and Active status: 6, counted separately.
- OCM verification page (source 5b), geocoded the same way: 326 of 755 rows fall in NYC precincts.
- 7 of 77 units have 0 open dispensaries: 22, 32, 42, 66, 69, 73, 113.

### 5. Per-precinct comparison

Population: ACS 2020–2024 allocated through the crosswalk. Total allocated is 8,482,225 against an ACS NYC total of 8,483,844 (MEASURED). Rates are window totals per 10,000 residents, not annual figures. The arrest data records where the arrest happened, not where the arrested person lived.

**Rank correlations** (MEASURED, `_data/cannabis/correlations.csv`). Method for every row: Spearman rank, `scipy.stats.spearmanr`, average ranks for ties, two-sided p from the t-approximation.

| Test | x | y | n | rho | p |
|---|---|---|---|---|---|
| A | arrests per 10k, 2014-01-01..2021-03-30 | open dispensaries per 10k | 76 | -0.254 | 0.027 |
| B | arrest count, same window | open dispensary count | 77 | -0.451 | 3.8e-05 |
| C | arrests per 10k | ever-opened dispensaries per 10k | 76 | -0.267 | 0.02 |
| D | arrests per 10k | open CAURD per 10k | 76 | -0.188 | 0.1 |
| G | arrests per 10k | OCM verification-page dispensaries per 10k | 76 | -0.28 | 0.014 |
| E | summonses per 10k, same window (summonses only) | open dispensaries per 10k | 76 | -0.125 | 0.28 |
| F (sensitivity) | arrests per 10k, 2006-01-01..2021-03-30, with 120/121/122 merged | open dispensaries per 10k | 74 | -0.267 | 0.021 |

**Quintiles of the 76 rated units by pre-MRTA arrest rate** (MEASURED, computed from `precinct_table.csv`):

| Quintile (by arrest rate) | Units | Residents | Arrests 2014-01-01..2021-03-30 | Arrests per 10k | Open dispensaries | per 10k | Verification-page dispensaries | per 10k |
|---|---|---|---|---|---|---|---|---|
| Q1 (highest) | 15 | 1,179,105 | 41,881 | 355.2 | 32 | 0.271 | 34 | 0.288 |
| Q2 | 15 | 1,665,833 | 35,230 | 211.5 | 44 | 0.264 | 44 | 0.264 |
| Q3 | 15 | 1,511,392 | 19,668 | 130.1 | 68 | 0.450 | 73 | 0.483 |
| Q4 | 15 | 1,826,819 | 14,115 | 77.3 | 67 | 0.367 | 77 | 0.421 |
| Q5 (lowest) | 16 | 2,299,077 | 6,917 | 30.1 | 89 | 0.387 | 98 | 0.426 |

**Highest 15 units by pre-MRTA arrest rate** (MEASURED). Together they hold 35.5% of window arrests.

| Rank | Precinct | Residents | Arrests | per 10k | Open dispensaries | per 10k |
|---|---|---|---|---|---|---|
| 1 | 25 | 51,149 | 3,763 | 735.69 | 1 | 0.196 |
| 2 | 14 | 24,070 | 1,338 | 555.89 | 10 | 4.155 |
| 3 | 40 | 98,273 | 4,681 | 476.33 | 2 | 0.204 |
| 4 | 23 | 76,361 | 2,826 | 370.09 | 1 | 0.131 |
| 5 | 33 | 75,636 | 2,781 | 367.68 | 2 | 0.264 |
| 6 | 42 | 92,192 | 3,312 | 359.25 | 0 | 0.0 |
| 7 | 41 | 53,352 | 1,759 | 329.7 | 2 | 0.375 |
| 8 | 48 | 87,799 | 2,752 | 313.44 | 2 | 0.228 |
| 9 | 73 | 98,818 | 3,086 | 312.29 | 0 | 0.0 |
| 10 | 5 | 43,766 | 1,360 | 310.74 | 4 | 0.914 |
| 11 | 52 | 132,397 | 4,032 | 304.54 | 1 | 0.076 |
| 12 | 32 | 84,562 | 2,565 | 303.33 | 0 | 0.0 |
| 13 | 44 | 146,011 | 4,357 | 298.4 | 1 | 0.068 |
| 14 | 30 | 64,270 | 1,847 | 287.38 | 2 | 0.311 |
| 15 | 28 | 50,449 | 1,422 | 281.87 | 4 | 0.793 |

**Most open dispensaries** (MEASURED):

| Precinct | Residents | Open dispensaries | per 10k | Arrests per 10k (rank of 76) |
|---|---|---|---|---|
| 105+116 | 217,404 | 11 | 0.506 | 70.33 (55) |
| 14 | 24,070 | 10 | 4.155 | 555.89 (2) |
| 18 | 61,378 | 10 | 1.629 | 157.06 (33) |
| 19 | 200,290 | 10 | 0.499 | 8.64 (75) |
| 9 | 73,653 | 9 | 1.222 | 152.47 (34) |
| 94 | 75,020 | 9 | 1.2 | 39.59 (64) |
| 104 | 176,694 | 9 | 0.509 | 39.28 (65) |
| 111 | 119,880 | 9 | 0.751 | 20.77 (73) |
| 1 | 77,104 | 8 | 1.038 | 61.35 (58) |
| 13 | 90,851 | 8 | 0.881 | 132.42 (39) |

### 6. What the data shows (descriptive, not a ruling)

- In every arrest-based test, precincts that ranked higher on pre-MRTA marijuana arrests per resident ranked lower, on average, on dispensaries per resident.
  - With open dispensaries: rho -0.254 (n 76).
  - With ever-opened dispensaries: rho -0.267.
  - With the OCM verification-page list: rho -0.28.
  - With the 2006–2021 window: rho -0.267 (n 74).
- On raw counts the inverse ranking is stronger: rho -0.451 (n 77).
- The highest-arrest-rate fifth of precincts has 0.271 open dispensaries per 10k residents. The lowest fifth has 0.387.
- CAURD-only (rho -0.188, p 0.1) and summons-based (rho -0.125, p 0.28) tests point the same direction, but are weaker.
- The precinct with the second-highest arrest rate (14, Midtown South) also has the highest dispensary rate (4.155 per 10k). Its residential denominator is small: 24,070 residents.
- None of these tests measures convictions. The claim names convictions. At precinct level, open data covers arrests and summonses only (section 7).

### 7. What the FOIL requests would add that open data cannot

Drafted, not filed (AMA, 10-26/10-29-26). This section says what each request could fill. It does not say whether the records exist in that form, which is PLACEHOLDER until a response.

- **OCA.**
  - Dispositions (convictions, dismissals, ACDs, pleas to violations) for Article 221 and Article 222 arraignments, keyed to arresting precinct or arrest number, by year. Open data has no disposition at any geography below county (sources 3a, 3b). This is the only route to the "convictions" leg of the claim at precinct level.
  - Outcomes of criminal court summonses (source 2a has no outcome field).
  - Counts sealed or expunged under MRTA. Whether expunged cases can be released even in aggregate is PLACEHOLDER.
- **OCM.**
  - Historical licence and location records: relocations, closed stores, and opening and closing dates. Source 5a is a current snapshot.
  - Proposed-location and proximity-protection histories.
  - CAURD applicant eligibility geography, if recorded: where the qualifying conviction occurred.
  - The reconciliation behind the verification page's 757 count.
- **Open data cannot supply these at all:** conviction geography, residence of the arrested, and any record of where dispensaries applied but did not open.

### 8. Limits on these numbers

- Arrest location, not residence. The denominator is residents, which inflates rates in commercial precincts (14, 18, 1).
- ACS margins of error are not propagated.
- Dispensary counts are a 2026-11-02 snapshot, compared against arrests from 2014–2021.
- Precinct boundaries are current (26c). Arrests carry the precinct as recorded at the time. 105/116 is merged. Other boundary edits during 2014–2021 are PLACEHOLDER (not checked).
- OCA and the DCJS disposition tables were not read (sources 3b, 3c, 4).
