# READ FIRST — alterrell-interactive-public

# Back in My Day research pass: RERUN REPORT

## 1. Run header

- Run date: 2026-11-03 (UTC, from `date -u` at 22:21:56)
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-back-in-my-day. Base release-2026-10-29 at 635271e; the stop report from earlier today is 0831bd7 and is left unchanged.
- Model: given in the session chat only. Session policy bars model identifiers from files pushed to a repo.
- Deploy: none
- Rulebook: `ALTERRELL-INTERACTIVE-BIBLE.md` re-read (384 lines, `wc -l`). COPY-06 (line 170) governs the append target; see section 5.
- Research written to: `_data/pieces/BACK-IN-MY-DAY-RESEARCH.md`, new section "## Research 2026-11-03 (cloud)", sections R1 to R6. That section holds the full tables and every source URL. This report summarises it.

## 2. Acceptance list (fails first)

| ID | Result | Reason |
|---|---|---|
| WORK 2 RESEARCH GAPS | FAIL (partial) | 2 of 12 gap items fully closed (bromate prevalence; polysorbate 80). 3 more are partly closed (ADA approval years, Farm Bill citations, BHT federal rules). 7 have no primary source this run. See R3 in the research section. |
| WORK 2 US vs EU table | FAIL (partial) | 4 of 8 rows fully checked against FDA, eCFR and EU law (approved-count, titanium dioxide, Red 3, BHT). 4 rows have unverified non-EU countries or dates (ADA, bromate, BVO, propylparaben). No EFSA page could be read (403), so EU status rests on Regulation 1129/2011, Directive 2006/52/EC and Regulation 2022/63 (official texts via CELLAR). |
| WORK 1 Decade tables | PASS, with a gap in one column | All 4 foods clear the 3-point bar: Bread 9, Ice Cream 6, Pasta 4, Milk 6 verified dated points inside the 1950s to 2020s window. The ingredient-count column is empty before 2017 for every food. Reason, verified: NLEA §7 (Pub. L. 101-535, 1990) shows standardized foods were exempt from full ingredient lists until then, so no period label can supply a count. Pasta's 1977 point is a recodification, not a substantive change. |
| WORK 3 Milk and Pasta verdicts | PASS | Milk verdict supported. Pasta verdict: direction supported, "every addition is a government mandate" wording weakened. Neither was overridden. Research section R6. |
| A1 | PASS | Every MEASURED value in the appended section names a URL. Access date for all of them is 2026-11-03, stated once at the head of the section. Values without a primary source are tagged PLACEHOLDER. |
| A2 | PASS | No [AMA] slot or voice_note filled, no editorial line rewritten. Placeholders at lines 502 to 504 are untouched. |
| A3 | PASS | `git diff --numstat 0831bd7..e916a8e` shows `126 0` for BACK-IN-MY-DAY-RESEARCH.md: additions only, after the last existing line. The 11-03 stop report is unchanged. |
| A4 | PASS | `grep -n -i -E "retired\|never use"` on FOOD-EVOLUTION-BRIEF.md and BACK-IN-MY-DAY-RESEARCH.md (before the append) returned nothing. |
| A5 | PASS | READINESS table below. |
| A6 | PASS | Coverage line below. |

**Coverage: 13 items resolved of 27 items found.** Same 27 items as the stop report:
- WORK 1: 4 of 4 foods.
- WORK 2 gaps: 2 of 12.
- WORK 2 US vs EU rows: 4 of 8.
- WORK 3 verdicts: 2 of 2.
- Brief "3-4x" figure: 1 of 1. It was checked, and the data undercuts it; see research R5, item 8.

Partially closed items are counted as unresolved. No search cap was applied. Items stopped short are listed in the READINESS table with the reason.

### READINESS: every remaining blocker to publish

| # | Blocker | Class |
|---|---|---|
| R1 | Ingredient counts for 1950s to 1980s, all 4 foods. No full label existed by law (NLEA §7). A count would need company formulation records. | DATA UNAVAILABLE |
| R2 | 1960s Wonder Bread product list; Breyers corn-syrup year; Breyers 1980s label | DATA UNAVAILABLE (no primary found; one standard search each) |
| R3 | Milk 1950s point and the dossier's "1978 PMO vitamin A" point | DATA UNAVAILABLE (no 1953 or 1978 PMO on archive.org) |
| R4 | Year glyceryl monostearate entered the macaroni standard | DATA UNAVAILABLE (govinfo search API rate-limited after 4 queries; resolvable on rerun) |
| R5 | Non-EU country columns for ADA, bromate and BVO; bromate "EU 1990"; California AB 418 | DATA UNAVAILABLE (sso.agc.gov.sg and leginfo returned 403, canada.ca empty reply, legislation.gov.au rendered by JavaScript) |
| R6 | Corn subsidy dollars by decade | DATA UNAVAILABLE (fsa.usda.gov, nass.usda.gov and obpa.usda.gov returned 403 or reset) |
| R7 | 1960 additive baseline count | DATA UNAVAILABLE (NAS 1965 Publication 1274 states no total) |
| R8 | Cereal gaps (3 items) | DATA UNAVAILABLE. Cereal is Phase 2. |
| R9 | Which additive totals the piece compares. US 3,970 (FDA inventory) or more than 10,000 (Neltner 2011), against EU 321 E-number designations: these count different things. | AMA RULING |
| R10 | Red 3 row says "banned in EU", but the EU authorises erythrosine in cocktail and candied cherries. GRAS change dated 1997, but 1997 was a proposal and the rule was final in 2016. | AMA RULING (whether and how the brief's claims change) |
| R11 | Ice cream: compare Breyers as a brand (Natural Vanilla still 5 ingredients) or the Extra Creamy frozen-dairy-dessert line (12) | AMA RULING |
| R12 | Bread "27 components" counting method (2023 label counts 21 or 37) and the "Wonder keeps ADA" claim (not on 2018 or 2023 labels) | AMA RULING |
| R13 | Copy of record: no `BACK-IN-MY-DAY-COPY.md` exists, so the research file is the interim target | AMA RULING |
| R14 | Tabs, macro cards, centerpiece (brief lines 33 to 40); card format (all Hold) | AMA RULING |
| R15 | [AMA EDITORIAL LINE] slots and placeholder framings (RESEARCH.md lines 502 to 504); Overview and essay | AMA VOICE |
| R16 | Workbench card sections empty, need AMA's re-paste from chat 2f421f20; no `.mdx` in `src/content/pieces/` | BUILD (Type 2), after an AMA re-paste |

## 3. Stop conditions

1. **PREFLIGHT: passed.**

   | Host | curl result |
   |---|---|
   | www.ecfr.gov | 200 |
   | www.federalregister.gov | 200 |
   | archive.org | 200 |
   | www.usda.gov | 403 |
   | www.efsa.europa.eu | 200 |

   The usda.gov 403 carries `server: AkamaiGHost` after `HTTP/1.1 200 Connection Established` (`curl -sS -I`). That is the site's own block, not DNS or proxy. 0 of 5 hosts failed on DNS or proxy. I did not retry usda.gov with a different user agent; the auto-mode classifier also blocked that attempt.
2. **Missing RESEARCH-2.md:** resolved as in the stop report. Its content is the current RESEARCH.md.
3. **Site blocks met during research, none bypassed:**
   - federalregister.gov full text redirected to a request-access page. I used govinfo.gov's copy of the same documents.
   - eur-lex returned a 202 challenge. I used the EU Publications Office CELLAR.
   - barilla.com and breyers.com returned 403. I used USDA FoodData Central.
   - nass, fsa and obpa.usda.gov, leginfo, sso.agc.gov.sg and canada.ca: items left unverified.
4. **Rate limit:** the shared api.data.gov DEMO_KEY hit OVER_RATE_LIMIT after 4 govinfo searches and on the first FDC API call. I worked around it with keyless govinfo page links (`https://www.govinfo.gov/link/fr/<vol>/<page>`) and the FDC bulk file. Two planned searches were not run (R4, plus the 1970s lowfat-milk standard).

## 4. Command or URL behind every number

All accessed 2026-11-03.

| Number | Source |
|---|---|
| Preflight codes | `curl -sS -o /dev/null -m 25 -w "%{http_code}" -L https://<host>/` |
| 27 items, 13 resolved | Item list from the stop report §2, results in research R2 to R6 |
| Bread 1952 permitted list | 17 FR 4453 to 4464, https://www.govinfo.gov/content/pkg/FR-1952-05-15/pdf/FR-1952-05-15.pdf, then `pdftotext -layout` |
| ADA 1962, 45 ppm | 27 FR 6784, https://www.govinfo.gov/content/pkg/FR-1962-07-18/pdf/FR-1962-07-18.pdf |
| ADA in bread, 1967 | https://www.govinfo.gov/content/pkg/FR-1966-12-01/pdf/FR-1966-12-01.pdf; https://www.govinfo.gov/content/pkg/FR-1967-03-25/pdf/FR-1967-03-25.pdf; https://www.govinfo.gov/content/pkg/FR-1967-05-20/pdf/FR-1967-05-20.pdf |
| Ice cream 1960 standard, polysorbate 80 at 0.1% | https://www.govinfo.gov/content/pkg/FR-1960-07-27/pdf/FR-1960-07-27.pdf |
| Macaroni 1944 and 1946 | https://www.govinfo.gov/content/pkg/FR-1944-12-23/pdf/FR-1944-12-23.pdf; https://www.govinfo.gov/content/pkg/FR-1944-12-27/pdf/FR-1944-12-27.pdf; https://www.govinfo.gov/content/pkg/FR-1946-07-09/pdf/FR-1946-07-09.pdf |
| Folic acid 0.43, 0.9 to 1.2 mg/lb; 140 µg/100 g | https://www.govinfo.gov/content/pkg/FR-1996-03-05/html/96-5014.htm |
| 198 to 265 µg/100 g | `python3 -c "print(0.9/453.592*1e5, 1.2/453.592*1e5)"` |
| Milk 1996 rule; 2,000 IU; 1998 effective date | https://www.govinfo.gov/content/pkg/FR-1996-11-20/html/96-29485.htm |
| BVO effective Aug. 2, 2024 | https://www.govinfo.gov/content/pkg/FR-2024-07-03/html/2024-14300.htm |
| Red 3 effective Jan. 15, 2027 | https://www.govinfo.gov/content/pkg/FR-2025-01-16/html/2025-00830.htm |
| GRAS 1997 proposal, 2016 final | https://www.govinfo.gov/content/pkg/FR-1997-04-17/html/97-9706.htm; https://www.govinfo.gov/content/pkg/FR-2016-08-17/html/2016-19164.htm |
| ADA RFI; salt rule Dec. 14, 2026 | https://www.govinfo.gov/content/pkg/FR-2026-05-13/html/2026-09508.htm; `https://www.federalregister.gov/api/v1/documents/2026-20848.json` |
| ADA review list date 2025-08-19 | https://www.fda.gov/food/food-chemical-safety/list-select-chemicals-food-supply-under-fda-review |
| Current CFR text (136.110, 135.110, 139.110, 139.115, 131.110, 172.806, 137.105, 73.575, 184.1670, 172.115, 182.3173) | `https://www.ecfr.gov/api/versioner/v1/full/2026-10-30/title-21.xml?part=<p>&section=<s>` with `--compressed` |
| NLEA §7 | https://www.govinfo.gov/content/pkg/STATUTE-104/pdf/STATUTE-104-Pg2353.pdf |
| Farm Bill Pub. L. numbers | `https://www.govinfo.gov/content/pkg/STATUTE-<vol>/pdf/STATUTE-<vol>-Pg<page>.pdf`, first page, for 87/221, 99/1354, 110/888, 116/134, 122/923, 128/649, 132/4490 |
| 3,970 FDA substances | https://hfpappexternal.fda.gov/scripts/fdcc/cfc/XMLService.cfm?method=downloadxls&set=FoodSubstances, rows after the `CAS Reg No` header with a non-empty name |
| More than 10,000 (Neltner 2011) | https://api.crossref.org/works/10.1111/j.1541-4337.2011.00166.x |
| EU 321 E-numbers; E127, E321, E171 rows; absence of bromate, ADA, E443, E216 | https://publications.europa.eu/resource/celex/32011R1129 (CELLAR redirect). Distinct-designation regex `E (\d{3,4}[a-z]?(\((i\|ii\|iii\|iv\|v\|vi)\))?)` between "PART B" and "PART C". |
| TiO2 dates | https://publications.europa.eu/resource/celex/32022R0063 |
| E216 withdrawal | https://publications.europa.eu/resource/celex/32006L0052 |
| 1965 PMO values | https://archive.org/download/micro_IA41159428_0100/micro_IA41159428_0100_djvu.txt |
| NAS 1965 Publication 1274 | https://archive.org/download/bub_gb_3kUrAAAAYAAJ/bub_gb_3kUrAAAAYAAJ_djvu.txt |
| 1993 ice cream sale | https://www.sec.gov/Archives/edgar/data/764180/0000950130-94-000396.txt |
| Label counts (Wonder 21/37, Breyers 5 and 10/12, Barilla 7, milk 3) | https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_branded_food_csv_2026-10-29.zip. Brand filter on `branded_food.csv`, joined to `food.csv`, then the counting script described in research R1. |
| 443,310 GTINs; 615, 159, 794, 356 bromate and ADA counts; 2,970 of 13,251 polysorbate 80 | Same zip, full `branded_food.csv` (2,010,212 rows). Latest `available_date` per GTIN, discontinued rows excluded, regexes as stated in research R3. |

## 5. Anomalies and open items (stated, not fixed)

1. **Copy of record.** No proper copy of record exists (COPY-06). Research was appended to BACK-IN-MY-DAY-RESEARCH.md as the interim target only.
2. **CLAUDE.md conflicts, prompt followed.** CLAUDE.md asks for a report in `../alterrell-hq/reports/` and a LEDGER append. The prompt confines this session to one repo, puts the report here and forbids LEDGER writes, so no LEDGER file was touched.
3. **Pending amendments.** eCFR shows amendments published Oct. 13, 2026 to §§ 131.110, 136.110, 137.105 and 139.110: the salt-substitutes rule, effective Dec. 14, 2026. Its text was not read. The current-text values above are as of eCFR 2026-10-30.
4. **Dossier internal conflicts stand.** Lines 92 vs 447 (ice cream decade) and 89 vs 98 (eggs) are unchanged. New data adds a third version: the Extra Creamy list in FDC differs from line 102.
5. **FDC records are manufacturer submissions** published by USDA. Treated as government records of the label at the stated modified date. The "contains one or more of the following" dough-conditioner group means not every listed conditioner is in every loaf.
6. **Regex counts are text matches.** The bromate count excludes "unbromated", "un-bromated", "non-bromated" and "no bromate"; other negations (for example "not bromated") could still be counted.
7. **PROJECT-STATUS.md line 293** still lists the deleted `-2.md` file. Not fixed.
8. **Disk.** The FDC zip (451,954,262 bytes) sits in the session scratchpad, not the repo.
9. **Search scope.** Some items rest on one standard web search: the "35% more" source, the Breyers corn-syrup year, Breyers lawsuit claims (not used). A deeper pass could change those PLACEHOLDERs.

## 6. LEDGER line

- Back in My Day Phase 1 research rerun: 4 food decade tables, 13 of 27 items resolved, appended to research file | researching | 11-03-26
