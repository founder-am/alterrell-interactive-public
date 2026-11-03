# BLACK GRADUATES: TELEVISION — PIECE BRIEF
**Platform:** Obsidian Futures (dark lane, indigo #1e1040)
**Status:** Research pass in progress. Concept locked. Not yet in build.
**Last updated:** May 27, 2026
**URL target:** interactive.alterrell.com/black-graduates/

---

## THESIS (celebratory, not argumentative)

Choose your school and see which of your favorite real and fictional Black actors and creatives attended. Black characters have been going to college on television for fifty years. The people who created them went too. This is the inventory no one has assembled — a celebration of Black educational life on and off screen.

---

## OVERVIEW EDITORIAL FRAME

In 1940, 1% of Black adults had a bachelor's degree. In 2024, nearly 30% do. That line is one of the most dramatic attainment arcs in American education. The cities where attainment is highest — Atlanta, DC, Raleigh — overlap with HBCU infrastructure and the metro areas where Black creative industries are concentrated. Visibility matters. Television didn't cause this rise, but it participated in it: A Different World is credited with contributing to a 25% increase in HBCU enrollment during its run. The piece also honors the actors who went straight to work — who were on set at 15, who came back to school later, who built careers without degrees. And it names what television rarely showed: technical programs, trade schools, community colleges — paths that are real, valid, and almost invisible in Black TV.

The attainment graph is a simple trend line (Black bachelor's degree rate, 1940–2024, sourced from Census/NCES). No comparison to white attainment rates — this is celebratory, not systemic critique. Geographic callout: Atlanta (28 census tracts that are simultaneously majority-Black and majority college-educated, 50–74% attainment), DC (32.2%), Raleigh (29.3%) — all tied to HBCU presence. The editorial posits that visibility is part of how attainment climbs, without asserting causation.

---

## TAB STRUCTURE

- **Tab 1 — Overview:** Attainment graph (Black bachelor's degree rate, 1940–2024, simple trend). Geographic callout (Atlanta, DC as high-attainment metros tied to HBCU presence). Editorial on both paths. A Different World enrollment stat. Carousel of show cards as preview. Share block.
- **Tab 2 — By Decade:** Decade cards (70s, 80s, 90s, 2000s, 2010s, 2020s). Each card shows the top 5 schools most mentioned on screen or attended by leads/creators for that decade's inventoried shows. Honest about the data — framed as "the shows we've inventoried," not as complete.
- **Tab 3 — The Tool:** Dropdown school picker (Sodium piece pattern). Select a school, see every connected show card — fiction and real life. Schools listed with HBCU/PWI tag. Default state shows all schools with a count next to each.
- **Tab 4 — The Connections:** Orbital/solar system diagrams. Rashad at the center of the Howard network (Rashad → Allen → Henson → Boseman, all Howard — scholarship chain, College of Fine Arts renamed). Possible second orbital for Morehouse/Spike Lee cluster if data supports it.
- **Tab 5 — Spread the Word**
- **Tab 6 — Sources**

---

## CARD TYPES

**Decade Card (300×280):**
Decade label, show count for that era, top 5 schools with connection count, HBCU vs. PWI indicator. Based only on the shows inventoried — does not claim completeness.

**Show Card (300×280):**
Show title, years, network, medium tag (sitcom/drama/dramedy). Two sections: "On Screen" (schools depicted or referenced in fiction) and "Behind the Scenes" (schools attended by leads, recurring cast, and key creators). This is the primary shareable unit.

**Connection Card (full-width, not standard 300×280 shell):**
Orbital/solar system diagram, SVG-based. Rashad at center, nodes for connected people with relationship labels on the connecting lines ("created scholarship," "sister," "fictional alma mater," "College of Fine Arts renamed"). D3 force-directed or hand-built SVG. Emotional centerpiece of the piece.

---

## INTERACTIVE TOOL

Dropdown picker (Sodium piece pattern). Schools listed with HBCU/PWI tag. When selected, filters the show card gallery to show only connected shows. Top 5–8 schools visually prominent as big tappable buttons, with "see all schools" expansion for the long tail. Recognition before exploration.

---

## DATA AVAILABLE — ATTAINMENT TREND (Census/NCES, confirmed)

| Year | Black bachelor's degree rate |
|---|---|
| 1940 | ~1% |
| 1970 | ~4.3% |
| 1990 | ~9.5–11% |
| 2010 | ~18% |
| 2022 | ~27.6% |
| 2024 | ~29.6% |

Geographic data (Social Explorer / Census ACS / BlackDemographics): San Jose 36.1%, Washington DC 32.2%, Raleigh 29.3%, Atlanta 26.9%. In Atlanta, Fulton and DeKalb Counties have 28 census tracts simultaneously majority-Black and majority college-educated (50.2%–73.8% attainment).

---

## DATA AVAILABLE — REAL-LIFE ALMA MATERS (initial pass)

### HBCUs

**Howard University**
- Phylicia Rashad (Cosby Show) — BFA, magna cum laude; later Dean of Fine Arts
- Debbie Allen (A Different World director/producer) — BA Classical Greek Lit, Speech & Theater
- Taraji P. Henson (Empire) — Theater Arts, 1995; funded by Rashad/Allen scholarship
- Chadwick Boseman — BFA Directing, 2000; College of Fine Arts renamed for him
- Lance Gross (House of Payne) — Film Production, 2004
- Anthony Anderson (Black-ish) — returned to complete degree

**Morehouse College**
- Spike Lee (She's Gotta Have It series) — BA, 1979
- Samuel L. Jackson — attended

**Spelman College**
- Keshia Knight Pulliam (Cosby Show) — Sociology with Film concentration, 2001

**Clark Atlanta University**
- Kenya Barris (creator, Black-ish / grown-ish) — Class of 1996

**Hampton University**
- Wanda Sykes — BA Marketing

### PWIs

**Stanford University**
- Issa Rae (Insecure) — BA African & African-American Studies, 2007

**Harvard University**
- Yara Shahidi (Black-ish, grown-ish) — BA Social Studies / African-American Studies, 2022

**Brown University**
- Tracee Ellis Ross (Girlfriends, Black-ish) — BA Theater, 1994

**NYU Tisch School of the Arts**
- Donald Glover (Atlanta) — BA Dramatic Writing, 2006

**Temple University**
- Quinta Brunson (Abbott Elementary) — attended

### No Formal Degree / Went Straight to Work
- Will Smith — turned down MIT scholarship
- Martin Lawrence — no college degree
- Tisha Campbell — went to Hollywood after high school
- Tichina Arnold — no college degree (career from childhood)
- Queen Latifah — briefly attended BMCC
- Jamie Foxx — attended USIU on classical piano scholarship

---

## DATA AVAILABLE — FICTIONAL COLLEGE REFERENCES (partial)

| Show | Character(s) | School | Real/Fictional |
|---|---|---|---|
| The Cosby Show | Cliff & Clair Huxtable, Denise | Hillman College | Fictional (modeled on Spelman/Hampton) |
| The Cosby Show | Sondra Huxtable | Princeton | Real |
| A Different World | Whitley, Dwayne, Ron, Freddie, Kim, Jaleesa | Hillman College | Fictional |
| The Fresh Prince | Will Smith | ULA (University of Los Angeles) | Fictional |
| The Fresh Prince | Carlton Banks | Princeton | Real |
| The Parkers | Kim and Nikki Parker | Santa Monica College | Real |
| Black-ish | Dre Johnson | Howard University | Real |
| Black-ish | Bow Johnson | Brown University | Real |
| grown-ish | Zoey, Junior Johnson | Cal U | Fictional |
| Insecure | Issa and Molly | Stanford | Real |
| Atlanta | Earn | Princeton (dropped out) | Real |
| Empire | Andre Lyon | Wharton (Penn) | Real |
| Scandal | Olivia Pope | Georgetown Law | Real |
| Dear White People | Full cast | Winchester University | Fictional (Ivy-coded PWI) |
| Bel-Air | Will | College aspirations central | TBD |

---

## SHOWS INVENTORIED (Phase 1 — television, 3+ seasons, primetime)

### 1970s
Sanford and Son, Good Times, The Jeffersons, What's Happening!!, Diff'rent Strokes

### 1980s
The Cosby Show, A Different World, 227, Amen, Family Matters

### 1990s
The Fresh Prince of Bel-Air, Martin, Living Single, The Jamie Foxx Show, Moesha, The Parkers, Sister Sister, The Steve Harvey Show, The Wayans Bros., Smart Guy, The Hughleys, Girlfriends, Everybody Hates Chris, My Wife and Kids, The Bernie Mac Show, One on One, Half & Half, Roc, In the House, Hangin' with Mr. Cooper, Kenan & Kel

### 2000s
The Game, Tyler Perry's House of Payne, The Boondocks

### 2010s–2020s
Black-ish, grown-ish, Insecure, Atlanta, Abbott Elementary, Empire, Scandal, Power, Queen Sugar, The Chi, Dear White People, Pose, Snowfall, P-Valley, All American, Bel-Air, The Ms. Pat Show

---

## RESEARCH STILL NEEDED

- 90s UPN/WB cast alma maters (Brandy, Countess Vaughn, Kim Fields, Kim Coles, Erika Alexander, Tia/Tamera Mowry, Jaleel White, Alfonso Ribeiro, the Wayans family)
- Creator/showrunner alma maters (Yvette Lee Bowser, Mara Brock Akil, Ralph Farquhar, Tyler Perry, Shonda Rhimes)
- Fictional college references for ~15 shows where unverified
- Census/NCES attainment data — specific year-by-year points for the trend line graph

---

## DESIGN

- Obsidian Futures: dark background (#0a0a12 or #1e1040), gold accent (#E8B923)
- Orbital diagram: D3 force-directed or hand-built SVG
- Dropdown: matches Sodium piece pattern
- Show cards: 300×280 standard shell with gold or indigo accent per OF lane

---

## RELATIONSHIP TO OTHER PIECES

This piece shares the same show inventory as **Black Television Universe** (BTU). The actor-show matrix built for BTU feeds this piece too. The geographic piece (where shows were set) also draws from the same inventory. Together these form the **Obsidian Futures Black Television series** — education, geography, people — each looking at the same data from a different angle.

---

## DO NOT

- Do not draw attention to specific actors who didn't attend college — honor the path editorially without naming
- Do not make causal claims about TV and attainment — posit the pattern, don't assert causation
- Do not present the data as complete — frame as "the shows we've inventoried" and invite additions
- Do not conflate HBCU and PWI as interchangeable — the distinction is meaningful and should be visible
- Do not build before the 90s cast research pass is complete — that era is the densest and most-loved

---

## NEXT SESSION

Complete the 90s cast/creator alma mater research pass. Then verify fictional college references for unconfirmed shows. Then AMA writes the Overview editorial. Then Type 2 build.
