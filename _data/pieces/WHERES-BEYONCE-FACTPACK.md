# WHERE'S BEYONCÉ? — DATA FACT PACK & EDITORIAL STRUCTURE
**Alterrell Interactive · Civic Lane (Teal)**
**Internal reference only. Not for publication.**
**Compiled: May 2026 · Updated: May 7, 2026**

---

## SECTION 1 — PIECE IDENTITY (LOCKED)

**Title:** Where's Beyoncé?
**Former working title:** Where Are They?
**Subhead:** TBD — lock before Q3 deploy
**URL slug:** `wheres-beyonce`
**Live URL:** `interactive.alterrell.com/wheres-beyonce/`
**Lane:** Alterrell Interactive (teal — NOT Obsidian Futures)
**Accent color:** `#0a7c72` (teal)
**Background:** `#f8f6f1` (paper)
**Status:** HTML builds completed through two iterations. Five-tab structure with accordion wealth database across nine states/regions. Q3 release — timed to hurricane season (Aug–Oct).
**Platform tagline:** "See the architecture. The data was always there — now it's yours."

---

## SECTION 2 — THE ARGUMENT IN ONE SENTENCE

When disasters hit, celebrity philanthropy gets the headlines — but government-funded systemic response is what actually rebuilds communities, and the cultural narrative around celebrity giving actively substitutes for the political pressure needed to fund that response.

**Two anchor claims (everything orbits these):**
1. Celebrity giving is real but structurally insufficient — it fills gaps that policy should never have created
2. The framing of "Beyoncé gave X million" redirects public attention away from the government failures that made the gap exist in the first place

**Secondary platform argument (applies across civic pieces):**
Celebrity and individual giving should not substitute for government-funded systemic response. This piece makes that argument literal through disaster relief data.

---

## SECTION 3 — DISASTER RELIEF DATA FRAMEWORK

### Hurricane season timing rationale
- Peak Atlantic hurricane season: August–October
- Piece deploys into active news cycle — audiences are already processing disaster imagery when this publishes
- Editorial decision: release window is not incidental, it is the argument in real time

### Disaster states and types — UPDATED May 7, 2026
*Expanded from original nine to reflect map build decisions. All entries need accordion confirmation before Q3 deploy.*

**Hurricane (primary):**
- Texas (Hurricane Harvey, 2017) — also tornado; see multi-type below
- Louisiana (Hurricane Katrina 2005; Hurricane Ida, 2021)
- Florida (multiple hurricane events)
- Puerto Rico (Hurricane Maria, 2017) — shown as callout on map, outside contiguous US boundary
- North Carolina (Hurricane Helene, 2024)
- Georgia (hurricane path, Gulf and Atlantic)
- South Carolina (Atlantic coast storms)
- Alabama (Hurricane Katrina 2005)
- Mississippi (Hurricane Katrina 2005)

**Wildfire (primary):**
- California (LA Wildfires 2025; multiple events)
- Oregon (multiple wildfire events)
- Washington (multiple wildfire events)
- Hawaii / Maui (Lahaina 2023) — *editorial inclusion still open; shown on map as wildfire*

**Tornado (primary):**
- Kansas (tornado alley)
- Oklahoma (tornado alley)
- Nebraska (tornado belt)

**Flood (primary):**
- Iowa
- Illinois
- Wisconsin

**Multi-type:**
- Texas — Hurricane + Tornado (map color: olive #7a7a1a; Harvey is anchor event)
- Missouri — Flood + Tornado (map color: blue-purple #5b5fa0)

---

## SECTION 4 — CELEBRITY GIVING DATABASE (ACCORDION STRUCTURE)

### What the database documents per entry
- Celebrity/entity name
- Disaster event and year
- Reported donation amount
- Source of donation figure
- What the donation funded (if documented)
- Government funding comparison (federal/FEMA response allocation for same event)
- Gap between celebrity giving total and actual rebuilding cost

### Known verified entries (from editorial sessions)
*Full database lives in the HTML accordion build. These are confirmed entries:*

**Beyoncé**
- Hurricane Harvey (Houston, 2017): BeyGOOD foundation response, reported $7M+
- Ongoing Houston community investment through BeyGOOD
- LA Wildfires (2025): $2.5M donation documented
- Source: BeyGOOD foundation / Houston press coverage

**Taylor Swift**
- Multiple disaster and community giving events documented
- Specific figures to be confirmed from accordion build

**Jay-Z / Shawn Carter Foundation**
- Documented disaster-adjacent giving
- Specific figures to be confirmed from accordion build

**Larry Ellison**
- $1M to Red Cross for California wildfires 2018 (only documented disaster donation)
- Net worth: ~$175B at time of donation
- Giving ratio: 0.0006%
- Source: FasterCapital
- Editorial note: Never publicly called out to give more

**General pattern documented:**
- Top celebrity giving per event: typically $1M–$10M range
- FEMA allocation per major disaster: typically $1B–$20B+
- The ratio is the argument — celebrity giving is between 0.05% and 1% of federal disaster response in documented cases
- Source: FEMA disaster declarations / congressional appropriations records

---

## SECTION 5 — THE STRUCTURAL ARGUMENT: WHY CELEBRITY GIVING IS INSUFFICIENT BY DESIGN

### The math frame
- Puerto Rico post-Maria: Congress eventually appropriated ~$20B in disaster relief
- Celebrity giving total documented for Maria response: estimated low tens of millions across all donors
- Delta: celebrity giving covered approximately 0.1%–0.5% of federal allocation
- This is not a criticism of the celebrities — it is evidence of scale
- Hurricane Harvey: federal allocation ~$15B; celebrity giving est. $50M; gap ~300×
- Hurricane Maria: federal allocation ~$20B; celebrity giving est. $30M; gap ~667×

### The narrative displacement mechanism
- When "Beyoncé donates $X to Harvey relief" trends, political pressure on FEMA, HUD, and Congress decreases
- Media frames the story as "community is being taken care of"
- Communities waiting for infrastructure rebuilding remain waiting
- The headline obscures the accountability gap
- Documented ask gap: Kevin Hart publicly called out Beyoncé, Diddy, Jay-Z during Harvey 2017 — Elon Musk (Houston resident, $200B+ net worth at time) was not named

### The FEMA response gap
- Documentation of underfunded FEMA responses by event:
  - Puerto Rico / Maria: widely documented federal underfunding and contract failures
  - Katrina: documented failures of federal levee maintenance, response delays
  - Helene 2024: reported federal response delays — research to confirm for piece
- Source: GAO reports, congressional testimony, investigative journalism (ProPublica, The Guardian, NPR)

---

## SECTION 6 — TAB ARCHITECTURE (LOCKED)

**Five tabs:**
1. Overview — argument entry, emotional hook
2. The Data — giving database by event/region (accordion)
3. The Gap — ratio visualization (celebrity giving vs. federal response)
4. The Pattern — how narrative displacement works
5. Sources

**Accordion structure:** States/regions per Section 3 above. First section open, rest closed.

**Share block:** Overview tab only.

**Section floor nav:** Every tab.

---

## SECTION 7 — DESIGN NOTES

- Lane: Alterrell Interactive (teal `#0a7c72`) — confirmed NOT Obsidian Futures
- This was an explicit decision made in session: despite having cultural figures (Beyoncé) as named subjects, the piece is civic/policy critique, not cultural data storytelling
- Tables and dense copy: paper background only, never dark
- Hero headline: Spectral 700
- Data tables: DM Sans 400/500

### Chart library components approved for this piece — ADDED May 7, 2026
All components from CHART-LIBRARY-REFERENCE.html. Approved for use:

**D1 — Stat Callout (Option 2, white surface)**
- Stat: 0.1%
- Unit: of federal response
- Line: Total celebrity giving after Hurricane Maria covered less than one percent of what Congress eventually appropriated for recovery.
- Comp label: Celebrity giving ~$20M–$40M est. vs. FEMA/Congressional ~$20B
- Source: Congressional appropriations records / Forbes charity estimates

**D2 — Pull Quote (teal field)**
- Quote: Kevin Hart, social media post, Hurricane Harvey 2017 — calling out Beyoncé, Diddy, Jay-Z by name
- Footnote attribution: Elon Musk — Houston resident, $200B+ net worth — was not named.
- Source: documented social media / press coverage

**A3 — Budget Multiplier (Option 2, white surface)**
- Entry 1: Hurricane Maria — Federal $20B / Celebrity est. $30M / Gap 667×
- Entry 2: Hurricane Harvey — Federal $15B / Celebrity est. $50M / Gap 300×
- Color adaptation from original A3 spec: teal for federal allocation, red (#c0392b) for celebrity giving
- ⚠ Flag for build session: this color adaptation is not in the original A3 spec — confirm before deploy

**Disaster Map (static inline SVG)**
- Real Census Bureau state boundaries via us-atlas + topojson-simplify (presimplify 0.05)
- Projection: d3.geoAlbersUsa, scale 1280, translate [480, 300]
- No external fetch dependency — all paths inline
- Disaster type colors: hurricane #0a7c72 · wildfire #c95f1a · tornado #d4a017 · flood #2563c4 · hurricane+tornado #7a7a1a · flood+tornado #5b5fa0 · not in scope #e8e4de
- Puerto Rico shown as callout box (outside contiguous US topology)
- ⚠ Flag for build session: Claude Code should replace inline paths with proper D3 topology fetch rendered server-side and exported as verified static SVG

**Tabled — revisit before Q3 deploy:**
- A1 Horizontal Bar (net worth vs. donation ratio) — scaling logic breaks when wealth gap is extreme; needs different component or custom treatment

---

## SECTION 8 — CBUXO FLAGS

- **Non-analytical reader risk:** The ratio argument (celebrity giving as % of federal response) requires numerical literacy to feel the impact. A visual framing is mandatory — the numbers alone will not land for non-analytical readers.
- **Emotional arc:** Recognition must come before the ratio. Open with a specific, named moment that feels familiar ("You remember when Beyoncé gave to Harvey…") before introducing the structural critique.
- **Title risk:** "Where's Beyoncé?" is the tabloid hook that earns the analytical argument. Do not let the build session soften this title — it is doing essential work for non-analytical readers.
- **Map as entry point (added May 7, 2026):** Disaster map confirmed as non-analytical reader orientation layer — geographic recognition before accordion data. Approved approach. Place before accordion, not after.

---

## SECTION 9 — WHAT THIS PIECE DOES NOT COVER (SCOPE LIMITS)

- International disaster relief (U.S. events only)
- Corporate giving (individual/celebrity giving only — though corporate could be a Part 2)
- Criticism of specific celebrities as individuals — the piece explicitly protects individual dignity while critiquing the structural narrative
- Policy prescriptions beyond "fund the government response" — this is not a wonk piece

---

## SECTION 10 — KNOWN DATA GAPS / FLAGS FOR Q3 DEPLOY

- [ ] Confirm full accordion entry list from HTML build files — now expanded to include GA, SC, AL, MS, OR, WA, KS, OK, NE, IA, IL, WI, MO
- [ ] Confirm all dollar figures against sources (Forbes, foundation press releases, news coverage)
- [ ] Confirm FEMA allocation figures per event — GAO / congressional appropriations
- [ ] Helene 2024 federal response data — research session needed
- [ ] Subhead: not yet locked — needs Type 1 session before deploy
- [ ] Confirm whether Lahaina/Maui is in scope (shown on map as wildfire — editorial decision still open)
- [ ] "Where's Beyoncé?" title confirmed but verify no rights/trademark concerns with direct name use in URL slug
- [ ] Confirm A3 color adaptation (teal/red for federal/celebrity) approved before build session
- [ ] Confirm Missouri, Alabama, SC, GA, and tornado belt states have corresponding accordion entries in build files
- [ ] A1 bar chart (net worth vs. donation) tabled — revisit component choice before Q3 deploy

---

## SECTION 11 — JOURNEY BLOCK LINKS

- **YouTube:** `https://www.youtube.com/playlist?list=PLBmJd1HY9o6YvRW5PDW0jOGJley2AjNYS`
- **Substack:** `https://alterrell.substack.com/s/alterrell-interactive?utm_source=newsletter_page`
- *After 3 pieces ship: update to piece-specific URLs*

---

## SECTION 12 — SUBSTACK SPINE (NOTES ONLY — NOT DRAFTED)

The Substack carries the policy accountability argument: specific documentation of federal underfunding by event, the lobbying and political decisions that drove underfunding, and the accountability question — who benefits when celebrity giving substitutes for government response?

**Potential Part structure:**
- Part 1: The Headline (what we celebrate vs. what we need)
- Part 2: The Ratio (celebrity giving as a fraction of federal allocation — event by event)
- Part 3: The Displacement Effect (how narrative attention moves away from government accountability)
- Part 4: The Federal Record (FEMA, HUD, congressional appropriations — what was promised vs. delivered)
- Part 5: What Accountability Actually Looks Like

---

## SECTION 13 — SESSION AND BUILD DECISION LOG

### Locked decisions
- Title: "Where's Beyoncé?" (formerly "Where Are They?")
- Lane: Alterrell Interactive (teal) — not Obsidian Futures
- URL slug: `wheres-beyonce`
- Five-tab structure with accordion wealth database
- Share block: Overview tab only
- Release window: Q3, timed to hurricane season (Aug–Oct)
- Tab architecture: show/hide tabs + accordions (first open, rest closed)
- Four chart library components approved: D1 stat, D2 pull quote, A3 budget multiplier, disaster map
- Disaster map: four types + two blends; Puerto Rico as callout; static inline SVG for now
- Map surface: Option 2 (white + teal border) for D1 and A3; teal field for D2 and map card wrapper

### Open decisions (resolve before Q3 deploy)
- Subhead: not locked
- Lahaina/Maui inclusion: shown on map, editorial decision still open
- Helene 2024 data: research session needed
- Full accordion entry confirmation against build files (expanded state list)
- A3 color adaptation confirmation
- A1 replacement component: tabled, revisit before Q3
- Map: replace inline SVG with proper D3 topology build in Claude Code session

### Next session type
**Type 1 editorial** (June/July) — subhead lock, Helene data research, Lahaina/Maui decision, accordion entry confirmation against build files, pre-deploy data refresh
**Then Type 2 build** — map SVG replacement, A3 color confirmation, any structural updates before flip to live

---

*End of fact pack. Updated May 7, 2026. Data sourced from BeyGOOD foundation records, FEMA disaster declarations, GAO reports, congressional appropriations, FasterCapital, and named publications unless flagged otherwise.*

---

## Research 2026-11-03 (cloud)

**Interim copy-of-record note (Bible COPY-06).** No proper copy of record exists for this piece: there is no `WHERES-BEYONCE-COPY.md`. This section is appended to the fact pack as an **interim** location because the run prompt names "the prose file in `_data/pieces/`". It does not promote the fact pack to copy of record.

**Rules for this section.**
- Every URL was accessed on 2026-11-03.
- "Fetched" means the page was downloaded with `curl` in this session and the quoted figure was found in its text. "Search only" means the URL came from a web search result and the page itself was not read; those values are never marked CONFIRMED.
- Status tags: CONFIRMED (source named), CORRECTED (source names a different value), CANNOT SOURCE (no primary or acceptable source found or reachable).
- Value tags: MEASURED (read from the named source in this run), PLACEHOLDER (quoted from this repo, unverified).
- This section rewrites no claim, fills no voice slot and adds no argument. Where research undercuts a claim, it says so.

### A. Breaking items found during research

1. **Dolly Parton died on 2026-08-25 in Nashville, aged 80.** Sources:
   - NPR, Jewly Hight and Michel Martin, 2026-08-26, via KALW, fetched: https://www.kalw.org/npr-music/2026-08-26/country-star-dolly-parton-dies-at-80
   - New York Times via Salt Lake Tribune, 2026-08-25, fetched: https://sltrib.com/news/nation-world/2026/08/25/dolly-parton-superstar-whose-songs
   - Forbes profile, which marks her "Deceased", fetched: https://www.forbes.com/profile/dolly-parton/

   MEASURED. The brief's mechanism (Dolly vs Oprah), mdx Case A and cards 6 and 8 present her in the present tense. This is an AMA RULING item; nothing was rewritten.
2. **The "eight names" table matches Hart's own words.** Complex, 2017-08, fetched, quotes Hart: "I challenge The Rock, Steve Harvey, Chris Rock, Dave Chappelle, Jay Z, Beyoncé, Justin Timberlake, Jerry Seinfeld…" (https://www.complex.com/pop-culture/2017/08/kevin-hart-challenged-celebrities-donate-hurricane-harvey-relief). The fact pack's "Diddy" is not in the quote.

### B. Item verification (numbering follows reports/2026-11-03-wheres-beyonce.md, section 5a)

| # | Item (PLACEHOLDER as written) | Status | Finding (MEASURED unless marked) | Source (accessed 2026-11-03) |
|---|---|---|---|---|
| 1 | Beyoncé Harvey "$7M+" | CANNOT SOURCE | ABC13 (2017-09-12): "Beyonce has made a monetary donation, but her pastor would not comment on the amount." BeyGOOD's own Houston page states no figure. | https://abc13.com/2392711 (fetched); https://beygood.org/programs/beygood-houston (fetched) |
| 2 | Beyoncé LA fires "$2.5M" | CONFIRMED | BeyGOOD LA Fire Relief Fund, $2.5M, announced 2025-01-12 by Parkwood Entertainment/BeyGOOD | https://www.prnewswire.com/news-releases/beyonce-announces-the-beygood-la-fire-relief-fund-with-a-donation-of-2-5-million-dollars-through-her-beygood-foundation-302348776.html (fetched) |
| 3 | Taylor Swift giving, no figure | CONFIRMED (figures added) | $5M to Feeding America for Helene and Milton (AP, 2024-10-10); $1M to the Middle Tennessee Emergency Response Fund after the March 2020 tornadoes | https://www.news4jax.com/entertainment/2024/10/10/taylor-swift-donates-5-million-toward-hurricane-relief-efforts/ (fetched); https://www.nbcnews.com/pop-culture/pop-culture-news/taylor-swift-donates-1-million-tennessee-tornado-relief-n1150996 (fetched) |
| 4 | Jay-Z / Shawn Carter Foundation disaster giving, no figure | CANNOT SOURCE (amount) | 2017: Roc Nation auctioned signed jackets for Harvey, Irma and Maria victims, no amount stated. Jay-Z supplied a plane for Fat Joe's Puerto Rico relief (Vibe, search only). | https://www.interlochenpublicradio.org/2017-09-26/labels-and-artists-lending-a-hand-to-those-affected-by-natural-disasters (fetched) |
| 5 | Ellison $1M to Red Cross, CA wildfires 2018 | CANNOT SOURCE | No report found. The only cited source is FasterCapital, which is not an acceptable source. | Searched: "Larry Ellison $1 million Red Cross California wildfires 2018 donation" |
| 6 | Ellison "~$175B at time of donation" | CANNOT SOURCE | Depends on item 5 | — |
| 7 | Ellison ratio "0.0006%" | CANNOT SOURCE | Depends on items 5 and 6. Arithmetic only: $1M / $175B = 0.00057%. | — |
| 8 | Top celebrity giving per event "$1M–$10M" | CANNOT SOURCE | No source is given and none was found for the range as a rule | — |
| 9 | FEMA allocation per major disaster "$1B–$20B+" | CANNOT SOURCE | No source is given. Congress appropriates per bill, not per disaster; see item 14. | — |
| 10 | Celebrity giving "0.05%–1%" of federal response | CANNOT SOURCE | Depends on items 8 and 9 | — |
| 11 | Maria: Congress appropriated "~$20B" | CONFIRMED, scope narrower | HUD CDBG-DR to Puerto Rico: $18.5B (2018-04-10) plus $1.5B (2018-02) = "$20 billion" (HUD). CRS IN11389 gives "$20.2 billion". This is HUD block-grant money for Irma **and** Maria in Puerto Rico, not total federal Maria spending. | https://archives.hud.gov/local/pr-vi/news/pr2018-04-10.cfm (fetched); https://www.everycrsreport.com/files/20200513_IN11389_094ff44745fd27daa4884a994ffa70d566bb824f.html (fetched; CRS text on a mirror) |
| 12 | Maria celebrity giving "low tens of millions" | CANNOT SOURCE (as a total) | Nearest figure: One Voice: Somos Live! raised "over $35 million" for Puerto Rico, Florida, Texas, Mexico "and more" (ET Online, 2017-10-17). That is multi-disaster money and mostly corporate and public, not celebrity giving. | https://www.etonline.com/node/89384 (fetched) |
| 13 | Maria celebrity share "0.1%–0.5%" | CANNOT SOURCE | Depends on item 12 | — |
| 14 | Harvey federal allocation "~$15B" | CORRECTED (scope) | P.L. 115-56 (signed 2017-09-08): $7.4B DRF + $7.4B CDBG-DR + $450M SBA = $15.25B, for "a major disaster declared in 2017", not Harvey alone | https://www.govinfo.gov/content/pkg/PLAW-115publ56/html/PLAW-115publ56.htm (fetched) |
| 15 | Harvey celebrity giving "est. $50M" | CANNOT SOURCE | Nearest figures, both public donations rather than celebrity giving: Hand in Hand telethon (Harvey **and** Irma) "more than $44M" (CBS); J.J. Watt fund closed at $37.1M (ABC13). The "$55M" telethon figure is search only. | https://www.cbsnews.com/news/hand-in-hand-benefit-concert-hurricane-harvey-telethon-live (fetched); https://abc13.com/post/jj-watts-hurricane-harvey-charity-fundraising-closes-with-$37m-plus-in-donations/2421617/ (fetched) |
| 16 | Harvey gap "~300×" | CANNOT SOURCE | Inputs unsourced or mis-scoped (items 14, 15). Arithmetic only: 15,000/50 = 300. | — |
| 17 | Maria celebrity giving "est. $30M" | CANNOT SOURCE | As item 12. The USA Today "$30 million" figure (EMS World reprint) did not load (230 bytes fetched). | https://hmpgloballearningnetwork.com/site/emsworld/news/218894/celebrities-raise-30-million-puerto-rico-recovery-efforts (not readable) |
| 18 | Maria gap "~667×" | CANNOT SOURCE | Inputs unsourced or mis-scoped (items 11, 17). Arithmetic only: 20,000/30 = 666.7. | — |
| 19 | Hart called out "Beyoncé, Diddy, Jay-Z" | CORRECTED | Hart's quoted list does not include Diddy (see A2) | Complex (fetched), URL in A2 |
| 20 | Musk "Houston resident, $200B+ at time" (2017) | CORRECTED | Musk announced his move to Texas on 2020-12-08 (TechCrunch). Forbes lists his residence as Austin, Texas, not Houston. His 2017 Forbes 400 net worth was $20.8B (SECONDARY: readsmarter.de reproduction of Forbes 400 2017, search only). | https://techcrunch.com/2020/12/08/elon-musk-has-made-the-move-to-texas (fetched); https://www.forbes.com/profile/elon-musk/ (fetched) |
| 21 | D1 "0.1% of federal response" | CANNOT SOURCE | Depends on items 11 and 17 | — |
| 22 | D1 label "~$20M–$40M est. vs ~$20B" | CANNOT SOURCE (celebrity range); CONFIRMED with scope ($20B, item 11) | — | — |
| 23 | Katrina federal levee and response failures | CANNOT SOURCE (this run) | Not researched to a primary source; gao.gov returns HTTP 403 to this session | — |
| 24 | Helene federal response delays | CANNOT SOURCE (this run) | AP (2025-12-12): FEMA to send Georgia more than $300M in Helene relief "after accusations of delays" (search only, not fetched) | https://www.news4jax.com/news/politics/2025/12/12/fema-to-send-georgia-more-than-300-million-in-hurricane-helene-relief-after-accusations-of-delays/ (search only) |
| 25 | Maria federal underfunding and contract failures | CONFIRMED (SECONDARY) | CBS News reports GAO-18-472 (Sept 2018) finding FEMA staffing shortfalls in the 2017 response. The GAO PDF returns HTTP 403 to this session. | https://www.cbsnews.com/news/gao-report-criticizes-fema-response-to-hurricane-maria-in-puerto-rico (fetched); https://www.gao.gov/assets/700/694229.pdf (403) |
| 26 | Peak Atlantic season "Aug–Oct" | CONFIRMED | NHC: "The peak of the Atlantic hurricane season is September 10, with most activity occurring between mid-August and mid-October." | https://www.nhc.noaa.gov/climo/ (fetched) |
| 27 | Brief: Beyoncé, Harvey, "$2M", headline "Beyoncé Called Out for $2M…" | CANNOT SOURCE | No such headline or $2M Beyoncé figure found. The amount was undisclosed (item 1). In 2017 coverage "$2 million" was J.J. Watt's fundraising goal (search only). | Searched: "Beyoncé" "called out" Harvey donation headline 2017 |
| 28 | Brief: Oprah, Maui, "$10M", headline "No One Knows if Oprah Has Donated Yet" | CORRECTED (amount); CANNOT SOURCE (headline) | $10M was the **joint** Winfrey + Dwayne Johnson seed for the People's Fund of Maui (NBC News, 2023-08-31). Winfrey personally gave "more than $25 million" (spokesperson Chelsea Hettrick, quoted in a USA Today fact-check). The headline text was not found. | https://www.nbcnews.com/news/asian-america/oprah-winfrey-dwayne-rock-johnson-launch-10-million-maui-relief-fund-rcna102782 (fetched); https://www.aol.com/post-misrepresents-oprah-winfreys-donations-184720945.html (USA Today fact-check, fetched) |
| 29 | Brief: Dolly, "Tennessee floods", "$12.5M", headline "Dolly Parton Hailed for Generous…" | CORRECTED (event); CANNOT SOURCE ($12.5M, headline) | The event was the 2016 Sevier County / Gatlinburg **wildfires**, not floods. NPR (2017-05-08): $8.9M distributed by 2017-05-05, plus a $3M partnership with the Mountain Tough Recovery Team. $12.5M appears only in secondary sources (Cheatsheet, UTK archive, search only). | https://www.npr.org/sections/therecord/2017/05/08/520140609/dolly-parton-issues-final-checks-to-those-displaced-by-smoky-mountain-wildfire (fetched) |
| 30 | Brief: Morgan Wallen, Tennessee floods, "$0" | CORRECTED | morganwallen.com (2021-09-09): "Morgan Wallen raises $725,000 for Humphreys County flood relief" (benefit proceeds, not a personal gift). Headline "Morgan Wallen Has Not Yet Donated…" not found. | https://morganwallen.com/photos-morgan-wallen-raises-725000-for-humphreys-county-flood-relief/ (fetched) |
| 31 | "$12.5M = 11 minutes" (Ellison) | CANNOT SOURCE | No method or source stated. Not recomputed. | — |
| 32 | "$12.5M = 3 hours" (Fertitta) | CANNOT SOURCE | As item 31 | — |
| 33 | "$12.5M = 1 day" (Oprah) | CANNOT SOURCE | As item 31 | — |
| 34 | Peterffy chose Florida | CONFIRMED (domicile); CANNOT SOURCE (motive) | See section D | Forbes profile (fetched) |
| 35 | Dolly and Oprah "same fund structure" | CONFIRMED | See section C | — |
| 36 | Hart challenged "eight celebrities", Aug 2017 | CONFIRMED | Instagram challenge posted Sunday 2017-08-27 (AP via KTVU, 2017-08-28: $25,000 pledge, Beyoncé, Jay Z, Timberlake, Johnson and Seinfeld named). The full eight are in Complex. Search results also report a later second round naming T.I., Nelly, Usher, Ludacris and Chris Brown (search only, unverified). | https://www.ktvu.com/news/kevin-hart-calls-on-fellow-stars-to-help-with-harvey-relief (fetched); Complex (fetched) |
| 37 | The eight names | CONFIRMED | As item 36 | — |
| 38 | Race label per name | CANNOT SOURCE | This is editorial classification; no primary source states it. Not adjudicated. | — |
| 39 | Dwayne Johnson "Donated" | CONFIRMED | ABC11: "The Rock posted a video on Instagram saying he will donate $25,000" | https://abc11.com/amp/post/beyonce-the-rock-and-other-celebs-donate-to-houston/2354482/ (fetched) |
| 40 | "6 Black. 2 white. 0 Houston billionaires." | CONFIRMED (counts follow the table's own labels) | None of the eight is a Houston billionaire. The counts inherit the labels in item 38. | — |
| 41 | "75% … 0 billionaires were named" | CONFIRMED as of Aug 2017 (arithmetic 6/8); time-bound | Forbes now lists Jay-Z at $2.8B and Beyoncé at $1B (real time, 11/3/26), so "0 billionaires" holds only for 2017. Their 2017 net worths were not verified this run. | https://www.forbes.com/profile/jay-z/ ; https://www.forbes.com/profile/beyonce-knowles/ (fetched) |
| 42 | Dolly "Donated $1M through the My People Fund" | CANNOT SOURCE (as a personal gift) | NPR: the stipend was "sourced from outside donations and Parton's own foundation". No personal $1M figure was found. $1,000 a month for six months (WTVR/CNN, 2016-12-01); a final $5,000 check (WCYB/WBIR, May 2017). | NPR (fetched); https://www.wtvr.com/2016/12/01/dolly-parton-to-give-1000-per-month-to-families-who-lost-everything-in-tennessee-wildfires (fetched); https://wcyb.com/news/tennessee-news/dollys-my-people-fund-gives-surprise-amount-for-final-checks (fetched) |
| 43 | Oprah "$25M+", "largest single private donation to Maui relief" | CONFIRMED ($25M+); CANNOT SOURCE ("largest") | Bezos and Sánchez **pledged** $100M (2023-08) and had given $15.5M by 2024-01 (Bloomberg via Robb Report). "Largest" depends on pledge vs paid and was not established. | USA Today fact-check (fetched); https://robbreport.com/lifestyle/news/jeff-bezos-maui-donations-1235481158/amp (fetched) |
| 44 | Newsweek "95M+ monthly" (Similarweb 2024) | CANNOT SOURCE | similarweb.com returns HTTP 403 | — |
| 45 | Atlanta Black Star "14M monthly" | CANNOT SOURCE | Same reason as item 44 | — |
| 46 | People's Fund of Maui "$60M raised, 8,100 recipients" | CONFIRMED | EIF, the fund's sponsor: "More than 8,100 residents received monthly disbursements of $1,200, with $60 million distributed" | https://www.peoplesfundofmaui.org/ (fetched) |
| 47 | "25×" | CANNOT SOURCE | The Dolly $1M input is unsourced (item 42) | — |
| 48 | Blake Shelton, Oklahoma 2013, "Donated" | CORRECTED (form) | Shelton headlined and organized the Healing in the Heartland telethon (2013-05-29) benefiting the United Way of Central Oklahoma. No personal donation amount was found. Carrie Underwood gave $1M to the Red Cross (CMT). | https://www.nbcsandiego.com/news/national-international/natl-healing-the-heartland-blake-shelton-oklahoma-fundraiser/2079029/?amp=1 (fetched); https://www.cmt.com/news/h38v5b/carrie-underwood-donates-1-million-to-tornado-relief-efforts (fetched) |
| 49 | Taylor Swift "Various / Multiple / Celebrated" | CONFIRMED (gifts, item 3); CANNOT SOURCE (framing) | — | — |
| 50 | "nine disaster-prone states" | CONFIRMED (internal) | The archived `STATES` array has 9 entries | `_archive/legacy-2026-08-13/wheres-beyonce/index.html` lines 794–1030 |
| 51 | Newsweek and Atlanta Black Star framings | Atlanta Black Star CONFIRMED; Newsweek CANNOT SOURCE | Atlanta Black Star 2023-08-30 ("Outraged Maui resident blames Oprah Winfrey and Jeff Bezos…") and 2023-09-04 ("Oprah Winfrey accused of hiring firefighters…"). No Newsweek URL was found. | https://atlantablackstar.com/2023/08/30/outraged-maui-resident-blames-oprah-winfrey-and-jeff-bezos-for-deadly-wildfire-following-backlash/ (fetched); https://atlantablackstar.com/2023/09/04/oprah-winfrey-accused-of-hiring-firefighters-to-protect-her-massive-estate-during-maui-wildfire-after-donation-request/ (fetched) |

### C. Dolly Parton vs Oprah Winfrey: both funds (WORK 3)

| | My People Fund (Dolly Parton) | People's Fund of Maui (Oprah Winfrey, with Dwayne Johnson) |
|---|---|---|
| Disaster | Sevier County / Gatlinburg wildfires, late Nov 2016. Fox 35 says the fires killed 14 people and destroyed 2,400 structures. | Maui wildfires, 2023-08-08 (Lahaina, Kula) |
| Launched | Announced 2016-11-30/12-01 (WTVR, 2016-12-01) | 2023-08-31 (NBC News) |
| Administrator | Dollywood Foundation (NPR) | Entertainment Industry Foundation (EIF page) |
| Structure | Direct cash: $1,000 a month for six months to families who lost homes; final payment raised to $5,000 (WCYB, May 2017) | Direct cash: $1,200 a month to adults displaced from Lahaina and Kula (NBC News; EIF) |
| Founders' seed | Not disclosed as a personal figure. Funding came from "outside donations and Parton's own foundation" (NPR). | $10M joint (NBC News). Winfrey personally more than $25M (spokesperson, USA Today fact-check). |
| Totals | $9M+ raised by mid-Dec 2016; $8.9M distributed by 2017-05-05; plus a $3M Mountain Tough partnership (NPR) | $60M distributed to 8,100+ residents (EIF) |
| Stated link | — | "The pair were inspired by a similar fund set up by Dolly Parton after wildfires swept through Gatlinburg" (Fox 35, fetched: https://www.fox35orlando.com/news/oprah-winfrey-dwayne-johnson-launch-fund-10-million-displaced-maui-residents) |
| Press reaction found (contemporaneous) | NPR, 2017-05-08, "Dolly Parton Provides Fire Victims 'Shoulder To Lean On'" (fetched). No negative coverage was found in this run. | Criticism over asking the public to donate and over Winfrey's Maui land (Yahoo/HuffPost "draw criticism, defenders", search only); Atlanta Black Star 2023-08-30 and 2023-09-04 (fetched); conspiracy theories debunked by Snopes and PolitiFact (search only) |

Finding against the brief, stated not rewritten: the funds are structurally the same, and the Maui fund cites Dolly's as its model. But the money sizes in the brief and the mdx ($1M vs $25M+; $12.5M vs $10M) are not like-for-like. See items 28, 29, 42 and 47.

### D. Thomas Peterffy domicile (WORK 5)

CONFIRMED. The Forbes profile (fetched: https://www.forbes.com/profile/thomas-peterffy/) gives:
- Residence: "Palm Beach, Florida".
- "He is a major landowner, with more than 560,000 acres, primarily located in his home state of Florida."
- A 2015 Forbes item on the same page: Peterffy listed his Greenwich, CT estate for $65M.
- Real-time net worth $90.6B as of 11/3/26 (MEASURED). Forbes 400 2026: $107B, #15, state Florida, valued as of 2026-09-04 (Lee Enterprises table, fetched: https://news.lee.net/news/nation-world/business/who-are-the-richest-americans-today-forbes-drops-2026-ranking/article_949accca-08b2-4427-bd60-f5c5d1a667d9.html).

The brief's causal claim that he "chose Florida's no-income-tax structure" is CANNOT SOURCE. No source states his reason. The Florida Senate constitution page returned HTTP 429, so Florida's no-income-tax status was not fetched this run.

### E. State wealth database (WORK 4)

Net worth is the Forbes real-time figure "as of 11/3/26" from each Forbes profile page (`https://www.forbes.com/profile/<slug>/`, fetched 2026-11-03), unless marked otherwise. Bloomberg (bloomberg.com/billionaires) returned HTTP 403 and was not used. "Giving" lists disclosed disaster giving found in this run. "None found" means a search was run and returned nothing; it is not proof of no giving. Flag key: **MOVED** = Forbes residence differs from the database row's state; **DIED** = deceased.

| # | Row (DB value) | Forbes RT 11/3/26 | Forbes residence | Flag | Disclosed disaster giving found (source) |
|---|---|---|---|---|---|
| 52 | Musk (TX, $428B) | $901.7B | Austin, TX | — | Musk Foundation $2.4M to SBP after Helene, Oct 2024 (Snopes, fetched: https://www.snopes.com/fact-check/texas-flood-musk-donation/). Viral $7M Texas-flood claim rated false (same). |
| 53 | Dell (TX, $55B) | $224.8B | Austin, TX | — | Michael & Susan Dell Foundation: $18M plus $18M match ($36M) to the Rebuild Texas Fund, Harvey, 2017-09-01 (fetched: https://www.wmar2news.com/news/national/dell-ceo-pledges-36-million-to-harvey-relief-efforts) |
| 54 | Fertitta (TX, $8B) | $12.3B | Houston, TX | Now U.S. Ambassador to Italy (Forbes PR 2026-09-15, fetched) | Harvey: none found. $1M to the Landry's Employees in Lake Charles Relief Fund, Hurricane Laura 2020 (CultureMap, search only). |
| 55 | Jerry Jones (TX, $14B) | $23.2B | Dallas, TX | — | $1M to the Salvation Army, Harvey, 2017 (ESPN, fetched: https://www.espn.com/nfl/story/_/id/20524546/dallas-cowboys-telethon-hurricane-harvey-raises-more-2-million) |
| 56 | Jim Crane (TX, $3B) | $2.5B | Houston, TX | — | $4M from Crane, Astros ownership and Astros Foundation, Harvey, 2017 (MLB press release, fetched: https://www.mlb.com/press-release/jim-crane-astros-ownership-astros-foundation-make-4-0-million-donation-251140158) |
| 57 | Beyoncé (TX, $500M) | $1B | Los Angeles, CA | MOVED (residence CA; born Houston) | Harvey: undisclosed (item 1). LA fires $2.5M (item 2). |
| 58 | Travis Scott (TX, $80M) | CANNOT SOURCE (Forbes profile last updated 2020-06-04, $39.5M; stale) | — | — | Harvey: none found. Cactus Jack Foundation relief drives: 2021 winter storm, 2024 Beryl (search only). |
| 59 | JJ Watt (TX, $100M) | CANNOT SOURCE (no Forbes/Bloomberg figure) | — | — | Raised $37.1M in public donations, Harvey (ABC13, fetched) |
| 60 | Bezos (FL, $214B, "moved 2023") | $370.5B | Miami, FL | Move CONFIRMED: Instagram announcement 2023-11-02 (Asia Economy, fetched: https://www.asiae.co.kr/en/article/2023110315090516791) | Maui: $100M pledged, $15.5M given by 2024-01 (Robb Report/Bloomberg, fetched). Milton: none found. |
| 61 | Peterffy (FL, $28B) | $90.6B | Palm Beach, FL | — | None found |
| 62 | Griffin (FL, $35B, "moved HQ 2022") | $56.9B | Miami, FL | HQ move June 2022 (search only) | Disaster: none found. $3B to Carnegie Mellon, 2026-09-30, education (CNN, search only). |
| 63 | Jorge Mas (FL, $5B) | $3.2B | Miami, FL | — | Personal: none found. MasTec / Mas Family Foundation Katrina–Rita relief, 2005 (search only). |
| 64 | Steve Cohen (FL home, $18B) | $26.7B | Greenwich, CT | MOVED: Forbes residence CT | None found |
| 65 | Michael Jordan (FL, $3B) | $4.7B | Jupiter, FL | — | $2M ($1M Red Cross, $1M Foundation for the Carolinas), Florence 2018 (Fox Business, fetched: https://www.foxbusiness.com/features/michael-jordan-makes-two-enormous-donation-to-hurricane-florence-victims) |
| 66 | Zuckerberg (CA, $220B) | $213.4B | Palo Alto, CA | — | Maui: $400,000 to the Maui Strong Fund (Fortune 2023-08-16, search only; page 403) |
| 67 | Ellison (CA, $206B) | $167B | Manalapan, FL | MOVED: Forbes residence FL; Forbes 400 2026 lists state Florida | None found (item 5) |
| 68 | Brin (CA, $140B) | $214.4B | Crystal Bay, NV | MOVED: Forbes residence NV (Fortune 2026-01-29 on his Nevada move, search only) | LA fires: none found |
| 69 | Page (CA, $138B) | $232.8B | Miami, FL | MOVED: Forbes residence FL | LA fires: none found |
| 70 | Beyoncé (CA, Malibu) | as 57 | Los Angeles, CA | — | as 57 |
| 71 | Jay-Z (CA, $2.5B) | $2.8B | Los Angeles, CA | — | Item 4 |
| 72 | LeBron James (CA, $1.2B) | $1.4B | Los Angeles, CA | — | Personal: none found. The Lakers were among 11 LA teams pledging more than $8M combined (CNN, search only). |
| 73 | Ellison (HI, "owns 98% of Lanai") | as 67 | Manalapan, FL | as 67 | 98% CONFIRMED: CBS News, 2012 purchase (fetched: https://www.cbsnews.com/news/oracle-corp-ceo-larry-ellison-to-buy-most-of-hawaiian-island-of-lanai/). Maui giving: none found (Fortune, search only, reports no response). |
| 74 | Zuckerberg (HI, "1,400-acre Kauai compound") | as 66 | — | CORRECTED (acreage): holdings now "over 2,300 acres" after a 962-acre 2025 purchase (VnExpress citing Wired, fetched) | as 66 |
| 75 | Bezos (HI) | as 60 | Miami, FL | — | as 60 |
| 76 | Oprah (HI, $2.8B, "gave $25M+") | $3.4B | Montecito, CA | — | Items 28, 43 |
| 77 | Todd Graves (LA, $22B) | $20B | Baton Rouge, LA | — | $1M personal to the Red Cross, Texas floods July 2025 (KTVU, fetched: https://www.ktvu.com/news/raising-canes-founder-donates-1m-assist-texans-impacted-flooding). Company fundraisers for Laura 2020 and Katrina 2005 (search only). |
| 78 | Gayle Benson (LA, $7.9B) | $11.2B | New Orleans, LA | — | $1M to the Gulf Coast Renewal Fund, Ida, 2021-08-30 (PFT, fetched: https://profootballtalk.nbcsports.com/2021/08/30/saints-owner-gayle-benson-donates-1-million-in-hurricane-relief/) |
| 79 | Lil Wayne (LA, $170M) | CANNOT SOURCE (no Forbes/Bloomberg figure) | — | — | $200K to rebuild Harrell Park, a Katrina-era trailer site (St. Louis American, fetched: https://www.stlamerican.com/entertainment/lil-wayne-gives-200k-back-to-the-community/) |
| 80 | Peyton Manning (LA, $350M) | CANNOT SOURCE | — | — | Katrina 2005: Peyton and Eli flew a plane of supplies to Baton Rouge (CNN, fetched: https://edition.cnn.com/2005/US/09/04/mannings.relief/index.html) |
| 81 | Beyoncé (LA editorial row) | as 57 | — | — | as 57 |
| 82 | Goodnight (NC, $12B) | $10.9B | Cary, NC | — | Helene: none found |
| 83 | "Jim Holding" (NC, $3.5B) | CANNOT SOURCE | — | No Forbes profile under this name. Forbes has Robert Holding (deceased, 2013 list) and Frank Holding Jr. ($1.5B RT, Raleigh, NC). Not substituted. | — |
| 84 | Tepper (NC, $20B) | $28.5B | Palm Beach, FL | MOVED: Forbes residence FL | David & Nicole Tepper Foundation, initial $3M, Helene, 2024 (AP via NFL.com, fetched: https://www.nfl.com/news/buccaneers-panthers-owners-pledge-contributions-to-hurricane-helene-disaster-relief). Plus $750K (WCNC, search only). |
| 85 | Michael Jordan (NC, "born Wilmington") | as 65 | Jupiter, FL | CANNOT SOURCE (birthplace): the fetched Fox Business page ties Jordan to Wilmington through high-school basketball; no birthplace source was fetched this run. | Item 65. Helene: Hornets and his NASCAR team each $1M (search only). |
| 86 | Jim Kennedy (GA, $10B) | $7.2B | Atlanta, GA | — | Helene: none found |
| 87 | Arthur Blank (GA, $9B) | $13.4B | Atlanta, GA | — | Blank Family Foundation $2M to World Central Kitchen, Helene, 2024-09-29 (fetched: https://blankfoundation.org/the-arthur-m-blank-family-foundation-grants-2-million-to-world-central-kitchen-for-hurricane-relief/) |
| 88 | Ballmer (GA, "Hawks minority stake") | $161.5B | Hunts Point, WA | CANNOT SOURCE (Hawks stake): available ownership lists name Tony Ressler as principal owner and do not list Ballmer (search only). Ballmer owns the Clippers. | $15M, LA fires, Jan 2025 (CBS LA, fetched: https://www.cbsnews.com/losangeles/news/clippers-owner-steve-ballmer-and-his-wife-are-donating-15-million-to-california-wildfires-relief-2/) |
| 89 | Usher (GA, $180M) | CANNOT SOURCE | — | — | Harvey: none found (performed at Hand in Hand, search only) |
| 90 | Ballmer (PNW) | as 88 | Hunts Point, WA | — | as 88 |
| 91 | Bezos (PNW, "Seattle origin") | as 60 | Miami, FL | MOVED (2023) | as 60 |
| 92 | Gates (PNW, $107B) | $120.2B | Medina, WA | — | PNW wildfire: none found |
| 93 | MacKenzie Scott (PNW, $37B) | $27.4B | Seattle, WA | — | $60M disaster-relief gift (Fortune 2025-10-29, search only; page 403) |
| 94 | Blake Shelton (Tornado, $100M) | CANNOT SOURCE | — | — | Item 48 |
| 95 | Carrie Underwood (Tornado, $200M) | CANNOT SOURCE | — | — | $1M to the Red Cross, Moore 2013 (CMT, fetched) |
| 96 | Harold Hamm (OK, $20B) | $19B | Oklahoma City, OK | — | Continental Resources (his company) $2.5M, Moore 2013 (Oil & Gas Journal, fetched: https://www.ogj.com/home/article/17293075/energy-companies-support-oklahoma-tornado-relief-efforts). Personal: none found. |
| 97 | Shahid Khan (FL/TN, $11B) | $16.3B | Naples, FL | — | $1M to Florida's First Coast Relief Fund, Irma 2017 (News4Jax, fetched: https://www.news4jax.com/sports/2017/09/12/jaguars-khan-help-in-relief-effort/) |

Died: none of the 46 database entries is deceased per Forbes (fetched). Dolly Parton, the piece's Case A, died 2026-08-25; see A1.

### F. 2026 Atlantic hurricane season (WORK 6)

Season status: NHC 2026 North Atlantic summary "as of 21 UTC 3 November 2026" (fetched: https://www.nhc.noaa.gov/data/tcr/index.php?season=2026&basin=atl). It counts 10 named storms, 1 hurricane, 1 major hurricane, ACE 19.7 (-83% vs 1991–2020), 0 direct deaths, and $400M U.S. damage. The season runs to 2026-11-30. MEASURED.

| Storm | NHC classification (summary table) | U.S. landfall per NHC advisory | Federal declarations (OpenFEMA) |
|---|---|---|---|
| Arthur | TS, 17–18 Jun, 40 kt | Advisories describe the center moving inland over southeastern Texas; none carries a "made landfall" statement (al012026 public 001–008) | LA DR-4927 (2026-06-30) and MS DR-4930 (2026-08-03), both titled "TROPICAL STORM ARTHUR" |
| Bertha | TS, 19–23 Jul, 50 kt; $400M U.S. damage; TCR final | "made landfall near the Biloxi Wildlife Management Area in St. Bernard Parish, Louisiana", 200 PM CDT 2026-07-22, 45 mph | None found titled Bertha |
| Edouard | TS, 31 Aug–02 Sep, 50 kt | "made landfall near Johnson Bayou, Louisiana, at 220 PM CDT", 2026-09-01, 60 mph | None found titled Edouard |
| Isaias | MH, 06–10 Oct, peak 105 kt | "made landfall near Destin, Florida, around 830 PM CDT (0130 UTC) with maximum sustained winds of 105 mph", 2026-10-09 (Category 2 at landfall) | FL EM-3655, AL EM-3656, GA EM-3657 (all 2026-10-09); FL DR-4955 (2026-10-27) covering Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton and Washington counties (WJHG, fetched: https://www.wjhg.com/2026/10/29/federal-disaster-aid-approved-8-florida-panhandle-counties-following-hurricane-isaias/) |
| Cristobal, Dolly, Fay, Gonzalo, Hanna, Josephine | TS/SS | No landfall statement found in their public advisories | — |

Sources:
- NHC advisories: https://www.nhc.noaa.gov/archive/2026/ (all 193 public advisories and updates for AL01–AL10 fetched; landfall lines grepped). Isaias: al092026.update.10100129. Edouard: al052026.update.09011924. Bertha: al022026.update.07221900.
- Declarations: OpenFEMA `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=declarationDate ge '2026-06-01'`, rundate 2026-11-03T22:22Z, 665 rows, latest declaration 2026-10-27.

Celebrity-giving headlines for 2026 Atlantic storms: none found. One extended search was run: "Hurricane Isaias October 2026 celebrity donation relief Florida Panhandle". The coverage it found was corporate or nonprofit, for example Walmart's $1M commitment (Florida Politics, fetched: https://floridapolitics.com/archives/824732-walmart-commits-1m-free-meals-and-showers-for-isaias-victims-in-panhandle/) and Hancock Whitney's $100,000 (search only).

Also in 2026, outside the Atlantic scope and listed only so the tool's Hawaii row stays current: HI EM-3652 and DR-4951 (Hurricane Lala), HI DR-4952 (Hurricane Lowell), HI EM-3654 (TS Nolo) — all OpenFEMA.

### G. Sources (rebuilt citation list; WORK 7)

Primary first. All accessed 2026-11-03. "SECONDARY" marks a non-primary source used because no primary was reachable.

**Government and official**
1. P.L. 115-56, Supplemental Appropriations for Disaster Relief Requirements Act, 2017 — https://www.govinfo.gov/content/pkg/PLAW-115publ56/html/PLAW-115publ56.htm
2. HUD, "HUD awards $18.5 billion…" (Puerto Rico), 2018-04-10 — https://archives.hud.gov/local/pr-vi/news/pr2018-04-10.cfm
3. HUD, No. 18-010, $1.5B to Puerto Rico, 2018-02-01 — https://archives.hud.gov/news/2018/pr18-010.cfm
4. Congressional Research Service IN11389 (mirror) — https://www.everycrsreport.com/files/20200513_IN11389_094ff44745fd27daa4884a994ffa70d566bb824f.html
5. National Hurricane Center, 2026 Atlantic TCR index and season summary — https://www.nhc.noaa.gov/data/tcr/index.php?season=2026&basin=atl
6. NHC 2026 advisory archive — https://www.nhc.noaa.gov/archive/2026/
7. NHC climatology — https://www.nhc.noaa.gov/climo/
8. OpenFEMA Disaster Declarations Summaries v2 — https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries
9. GAO-18-472 — https://www.gao.gov/assets/700/694229.pdf (HTTP 403 this run; findings cited via CBS News, no. 30)

**Organizations' own records**
10. Entertainment Industry Foundation, People's Fund of Maui — https://www.peoplesfundofmaui.org/
11. BeyGOOD Houston — https://beygood.org/programs/beygood-houston
12. Parkwood/BeyGOOD LA Fire Relief Fund release, 2025-01-12 — https://www.prnewswire.com/news-releases/beyonce-announces-the-beygood-la-fire-relief-fund-with-a-donation-of-2-5-million-dollars-through-her-beygood-foundation-302348776.html
13. Houston Astros / MLB press release, $4M Harvey — https://www.mlb.com/press-release/jim-crane-astros-ownership-astros-foundation-make-4-0-million-donation-251140158
14. Arthur M. Blank Family Foundation, $2M WCK — https://blankfoundation.org/the-arthur-m-blank-family-foundation-grants-2-million-to-world-central-kitchen-for-hurricane-relief/
15. morganwallen.com, $725,000 Humphreys County, 2021-09-09 — https://morganwallen.com/photos-morgan-wallen-raises-725000-for-humphreys-county-flood-relief/
16. Forbes, Forbes 400 2026 press release, 2026-09-15 — https://www.forbes.com/sites/pr/2026/09/15/forbes-releases-its-45th-annual-forbes-400-ranking-of-richest-americans/
17. Forbes real-time profiles, `https://www.forbes.com/profile/<slug>/` (41 URLs requested, 34 returned a profile; section E)

**Peer-reviewed**
18. Howell, Ratliff & Smith (2026), "Comparing White and Black athlete racial activism…", *Group Processes & Intergroup Relations* 29(2) — https://journals.sagepub.com/doi/10.1177/13684302251378039 (HTTP 403 this run; existence from search index only)
19. University of Minnesota Gender Policy Report, "The Black Tax" — CANNOT SOURCE: no URL found in this run

**Contemporaneous reporting (SECONDARY to the events, used where no primary exists)**
20. NPR, "Dolly Parton Provides Fire Victims 'Shoulder To Lean On'", 2017-05-08 — https://www.npr.org/sections/therecord/2017/05/08/520140609/dolly-parton-issues-final-checks-to-those-displaced-by-smoky-mountain-wildfire
21. WTVR/CNN, Dolly $1,000 a month, 2016-12-01 — https://www.wtvr.com/2016/12/01/dolly-parton-to-give-1000-per-month-to-families-who-lost-everything-in-tennessee-wildfires
22. WCYB/WBIR, final $5,000 checks — https://wcyb.com/news/tennessee-news/dollys-my-people-fund-gives-surprise-amount-for-final-checks
23. NBC News, Winfrey/Johnson $10M fund, 2023-08-31 — https://www.nbcnews.com/news/asian-america/oprah-winfrey-dwayne-rock-johnson-launch-10-million-maui-relief-fund-rcna102782
24. Fox 35 Orlando, fund modeled on Dolly's — https://www.fox35orlando.com/news/oprah-winfrey-dwayne-johnson-launch-fund-10-million-displaced-maui-residents
25. USA Today fact-check (AOL syndication), Winfrey more than $25M — https://www.aol.com/post-misrepresents-oprah-winfreys-donations-184720945.html
26. Atlanta Black Star, 2023-08-30 — https://atlantablackstar.com/2023/08/30/outraged-maui-resident-blames-oprah-winfrey-and-jeff-bezos-for-deadly-wildfire-following-backlash/
27. Atlanta Black Star, 2023-09-04 — https://atlantablackstar.com/2023/09/04/oprah-winfrey-accused-of-hiring-firefighters-to-protect-her-massive-estate-during-maui-wildfire-after-donation-request/
28. Complex, Hart challenge quote, 2017-08 — https://www.complex.com/pop-culture/2017/08/kevin-hart-challenged-celebrities-donate-hurricane-harvey-relief
29. AP via KTVU, Hart $25,000, 2017-08-28 — https://www.ktvu.com/news/kevin-hart-calls-on-fellow-stars-to-help-with-harvey-relief
30. CBS News on GAO-18-472 — https://www.cbsnews.com/news/gao-report-criticizes-fema-response-to-hurricane-maria-in-puerto-rico
31. ABC13, Beyoncé Harvey amount undisclosed, 2017-09-12 — https://abc13.com/2392711
32. ABC11, The Rock $25,000 — https://abc11.com/amp/post/beyonce-the-rock-and-other-celebs-donate-to-houston/2354482/
33. CBS News, Hand in Hand more than $44M — https://www.cbsnews.com/news/hand-in-hand-benefit-concert-hurricane-harvey-telethon-live
34. ABC13, J.J. Watt $37.1M — https://abc13.com/post/jj-watts-hurricane-harvey-charity-fundraising-closes-with-$37m-plus-in-donations/2421617/
35. ET Online, Somos Live! over $35M — https://www.etonline.com/node/89384
36. TechCrunch, Musk moves to Texas, 2020-12-08 — https://techcrunch.com/2020/12/08/elon-musk-has-made-the-move-to-texas
37. NPR via KALW, Dolly Parton dies at 80, 2026-08-26 — https://www.kalw.org/npr-music/2026-08-26/country-star-dolly-parton-dies-at-80
38. Lee Enterprises, Forbes 400 2026 Top 50 table — https://news.lee.net/news/nation-world/business/who-are-the-richest-americans-today-forbes-drops-2026-ranking/article_949accca-08b2-4427-bd60-f5c5d1a667d9.html
39. The disaster-giving sources in section E (each URL is in its row)

**Removed from the archived Sources list as unverifiable this run**
- "Forbes Billionaires List 2025 — net worth figures for all named individuals": superseded by Forbes real-time 11/3/26 (section E)
- "Wired / Hawaii Public Radio — Zuckerberg Kauai": replaced by section E row 74 (VnExpress citing Wired, fetched)
- "Publication reach … Similarweb 2024": CANNOT SOURCE (items 44, 45)
- "Billboard — Kevin Hart Hurricane Harvey Challenge documentation, August 2017": no Billboard URL found; replaced by nos. 28–29
- "Newsweek — Oprah Maui backlash coverage": no URL found
- "Spectrum News Hawaii — People's Fund of Maui": replaced by EIF (no. 10)
