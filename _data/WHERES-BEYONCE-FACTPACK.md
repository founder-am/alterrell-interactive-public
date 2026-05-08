# WHERE'S BEYONCÉ? — DATA FACT PACK & EDITORIAL STRUCTURE
**Alterrell Interactive · Civic Lane (Teal)**
**Internal reference only. Not for publication.**
**Compiled: May 2026 · Updated: May 7, 2026**

---

## SECTION 1 — PIECE IDENTITY (LOCKED)

**Title:** Where's Beyoncé?
**Former working title:** Where Are They?
**Subhead:** TBD — lock before Q3 deploy
**URL slug:** `where-are-they`
**Live URL:** `interactive.alterrell.com/where-are-they/`
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
- URL slug: `where-are-they`
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