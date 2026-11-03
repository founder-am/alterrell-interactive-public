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

---

## Research 2026-11-03 (cloud)

Appended by a cloud research run on branch cloud/11-02-black-graduates. No existing line above was changed. **No proper copy of record exists:** there is no BLACK-GRADUATES-COPY.md (COPY-06), so this brief is an **interim** target for this append. Tags: MEASURED = read from the fetched URL on the access date shown. SECONDARY = not the organization's own record. PLACEHOLDER = found only in a search-engine snippet, or the fetch failed. Nothing here is copy, and no claim above has been rewritten.

### W3. Attainment trend: one series

**Series:** U.S. Census Bureau, CPS Historical Time Series, Table A-2, "Percent of People 25 Years and Over Who Have Completed High School or College, by Race, Hispanic Origin and Sex: Selected Years 1940 to 2025". Column: Black, Total. Section: "25 Years and Over, Completed 4 Years of College or more".
**URL:** https://www2.census.gov/programs-surveys/demo/tables/educational-attainment/time-series/cps-historical-time-series/hst_attain02.xlsx (linked from https://www.census.gov/data/tables/time-series/demo/educational-attainment/cps-historical-time-series.html). Accessed 2026-11-03. Server last-modified 2026-10-28.
**Command:** `curl -sSL -o a2.xlsx <URL>`, then openpyxl reading rows 77–145, column K. MEASURED 2026-11-03.

Series breaks, from the table's own notes (rows 287–297):
- 1940 and 1950 are from the decennial census. 1947 and 1952–2002 are from the March CPS. 2003–2025 are from the CPS ASEC.
- "Black" includes Black and other races from 1940 to 1962, and is Black only from 1963. From 2003 it is Black alone.
- From 1992, "4 years of college or more" is measured as bachelor's degree or higher.

Brief table vs. this series (no brief line edited):

| Brief year | Brief value | Table A-2 value | Note |
|---|---|---|---|
| 1940 | ~1% | 1.3 | Black and other races |
| 1970 | ~4.3% | 4.5 | 4.3 is the 1968 value |
| 1990 | ~9.5–11% | 11.3 | 9.5 is the 1983 value; the brief range does not match one year |
| 2010 | ~18% | 19.8 | 18.5 is the 2006 and 2007 value |
| 2022 | ~27.6% | 27.6 | matches |
| 2024 | ~29.6% | 29.6 | matches |
| (not in brief) | | 2025: 29.9 | latest point |

Full series (69 points, MEASURED 2026-11-03):

| Year | Black, 25+, 4 yrs college or more (%) |
|---|---|
| 1940 | 1.3 |
| 1947 | 2.5 |
| 1950 | 2.3 |
| 1952 | 2.4 |
| 1957 | 2.9 |
| 1959 | 3.3 |
| 1962 | 4 |
| 1964 | 3.9 |
| 1965 | 4.7 |
| 1966 | 3.8 |
| 1967 | 4 |
| 1968 | 4.3 |
| 1969 | 4.6 |
| 1970 | 4.5 |
| 1971 | 4.5 |
| 1972 | 5.1 |
| 1973 | 6 |
| 1974 | 5.5 |
| 1975 | 6.4 |
| 1976 | 6.6 |
| 1977 | 7.2 |
| 1978 | 7.2 |
| 1979 | 7.9 |
| 1980 | 7.9 |
| 1981 | 8.2 |
| 1982 | 8.8 |
| 1983 | 9.5 |
| 1984 | 10.4 |
| 1985 | 11.1 |
| 1986 | 10.9 |
| 1987 | 10.7 |
| 1988 | 11.2 |
| 1989 | 11.8 |
| 1990 | 11.3 |
| 1991 | 11.5 |
| 1992 | 11.9 |
| 1993 | 12.2 |
| 1994 | 12.9 |
| 1995 | 13.2 |
| 1996 | 13.6 |
| 1997 | 13.3 |
| 1998 | 14.7 |
| 1999 | 15.4 |
| 2000 | 16.5 |
| 2001 | 15.7 |
| 2002 | 17 |
| 2003 | 17.3 |
| 2004 | 17.6 |
| 2005 | 17.6 |
| 2006 | 18.5 |
| 2007 | 18.5 |
| 2008 | 19.6 |
| 2009 | 19.3 |
| 2010 | 19.8 |
| 2011 | 19.9 |
| 2012 | 21.2 |
| 2013 | 21.8 |
| 2014 | 22.2 |
| 2015 | 22.5 |
| 2016 | 23.3 |
| 2017 | 23.9 |
| 2018 | 25.2 |
| 2019 | 26.1 |
| 2020 | 27.8 |
| 2021 | 28.1 |
| 2022 | 27.6 |
| 2023 | 28.7 |
| 2024 | 29.6 |
| 2025 | 29.9 |

### W1. Alma maters: named 90s UPN/WB cast and creators

All accessed 2026-11-03. "Resolved" means a fetched page states the school, or states that the person did not attend college. The DO NOT rule above (do not draw attention to actors who didn't attend college) governs the copy. These rows are research only.

| Person | Finding | Source (accessed 2026-11-03) | Tag |
|---|---|---|---|
| Yvette Lee Bowser (creator, Living Single) | Stanford University, class of '87 | https://bcsc.stanford.edu/2017-yvette-lee-bowser-87 ("Yvette Lee Bowser '87 … A graduate of Stanford University") | MEASURED, primary |
| Mara Brock Akil (creator, Girlfriends) | Northwestern University, Medill, BSJ. **Year conflicts between two Northwestern pages** | https://www.medill.northwestern.edu/about-us/awards/hall-of-achievement/mara-brock-akil.html ("BSJ92"); https://communication.northwestern.edu/news-events/news/2022/showrunner-mara-brock-akil-bsj96-talks-career-successes-and-life-lessons-with-dean-e.-patrick-johnson.html ("BSJ96") | MEASURED, primary (school); year unresolved |
| Ralph Farquhar (co-creator, Moesha, The Parkers) | University of Illinois, 1973, Advertising | https://media.illinois.edu/wp-content/uploads/2024/12/advancingexcellence-2017-web.pdf ("Ralph Farquhar, 1973, Advertising") | MEASURED, primary |
| Shonda Rhimes | Dartmouth '91 (English literature and creative writing); MFA, USC School of Cinematic Arts | https://www.thedartmouth.com/article/2014/04/rhimes-91-to-address-class-of-2014 | MEASURED, SECONDARY (student newspaper) |
| Tyler Perry | No college found. Earned a GED | https://www.georgiaencyclopedia.org/articles/arts-culture/tyler-perry-b-1969/ (search snippet only; curl failed with a TLS self-signed-chain error) | PLACEHOLDER |
| Brandy Norwood | Attended Pepperdine University, began 1996. No degree found | https://pepperdine-graphic.com/humaliwo-gathers-alumni/ ("a former Pepperdine student who began in 1996") | MEASURED, SECONDARY (student newspaper) |
| Countess Vaughn | No college found. Finished high school coursework with tutors | https://encyclopedia.com/education/news-wires-white-papers-and-books/vaughn-countess (quotes a Mike McDaniel interview) | MEASURED, SECONDARY |
| Kim Fields | Pepperdine University, degree in telecommunications. Year not confirmed | https://lapressclub.org/wp-content/uploads/2025/08/2025-KIM-FIELDS.pdf ("receiving her degree in telecommunications from Pepperdine University") | MEASURED, SECONDARY |
| Kim Coles | Attended North Carolina Central University (HBCU). No degree found | https://hbcuconnect.com/content/379423/did-you-know-comedian-and-actress-kim-coles-is-an-hbcu-grad | MEASURED, SECONDARY |
| Erika Alexander | Not college trained, in her own words | https://www.marketplace.org/2020/09/07/an-iconic-role-shapes-a-generation-of-black-women (search snippet only; curl: could not resolve www.marketplace.org) | PLACEHOLDER |
| Tia Mowry | Attended Pepperdine University. Degree (psychology) not confirmed by a fetched source | https://pepperdine-graphic.com/artist-among-us-tahj-mowry/ (Tahj Mowry: "since my sisters went there") | MEASURED, SECONDARY (student newspaper) |
| Tamera Mowry | Same as Tia Mowry | same | MEASURED, SECONDARY |
| Jaleel White | UCLA, film and television, 2001 | Wikipedia (cites Rochester Sentinel, 1999-08-21). UCLA Newsroom list fetched does not name him; https://mojo.dailybruin.com/24-famous-ucla-alumni/ returned HTTP 500 | PLACEHOLDER |
| Alfonso Ribeiro | Attended Cal State LA; New York Film Academy, 1999 | Wikipedia only. The PressReader Sentinel-Record page fetched without the text | PLACEHOLDER |
| Wayans family: Keenen Ivory Wayans | Attended Tuskegee University on an engineering scholarship; left in senior year | https://blackpast.org/aah/wayans-keenen-ivory-1958 | MEASURED, SECONDARY |
| Wayans family: Marlon Wayans | Attended Howard University | https://thedig.howard.edu/all-stories/howard-university-cinema-legends-honored-naacp-image-nominations ("Marlon Wayans, who attended Howard") | MEASURED, primary |
| Wayans family: Kim Wayans | Wesleyan University '83 | Wesleyan UPFRONT PDF (search snippet only; curl failed TLS, "unable to get local issuer certificate") | PLACEHOLDER |
| Wayans family: Damon Wayans | No college found. Left high school in ninth grade | https://www.tvguide.com/celebrities/damon-wayans/bio/3030390812 | MEASURED, SECONDARY |
| Wayans family: Shawn Wayans | No college found. 1989 high school graduate | Wikipedia only | PLACEHOLDER |

Possible connections for the Tool tab, stated not built: Marlon Wayans (Howard) joins the Howard cluster. Kim Fields' 227 character Donna Dalton is a Howard student (see W2). Farquhar's primary source says Advertising, but Wikipedia says communications and West Point; the primary is used here.

### W2. Fictional college references with episodes

Episode data are from Wikipedia episode-list summaries (SECONDARY) unless a primary source is named. Command: `bin/eps.py` reads each list page with `action=raw` and its transcluded season pages, then greps each ShortSummary for college terms. 51 shows and 5,571 episode summaries were parsed (sum of episodes_parsed in eps_final.md) on 2026-11-03.

**Existing table rows (brief lines 124–138)**

| Show | Character(s) | School | Episode(s) | Source | Tag |
|---|---|---|---|---|---|
| The Cosby Show | Cliff | Hillman | S1E6 "Breaking With Tradition" (1984-10-25): Hillman is Russell's and Cliff's alma mater | Wikipedia list | SECONDARY |
| The Cosby Show | Clair | Hillman | S8E20 "Clair's Reunion" (1992-02-20): Clair hosts Hillman alumnae | Wikipedia list | SECONDARY |
| The Cosby Show | Denise | Hillman | S3E2 "Food for Thought" (1986-10-02): leaves for freshman year at Hillman | Wikipedia list | SECONDARY |
| The Cosby Show | Hillman "modeled on Spelman/Hampton" | Hillman | S3E25 "Hillman" (1987-05-07): note on the list page says "Filmed at Spelman College". No source found for Hampton | Wikipedia list | SECONDARY; Hampton PLACEHOLDER |
| The Cosby Show | Sondra | Princeton | Introduced S1E11 "Bonjour, Sondra" (1984-11-22) as a Princeton sophomore; S4E18 "Waterworks" (1988-02-11) names "friends of Sondra and Elvin from Princeton" | Wikipedia (Sondra Huxtable; list) | SECONDARY |
| A Different World | Denise, Jaleesa | Hillman | S1E1 "Reconcilable Differences" | Wikipedia list | SECONDARY |
| A Different World | Whitley | Hillman | S1E17 "Mr. Hillman" (Miss Hillman pageant) | Wikipedia list | SECONDARY |
| A Different World | Dwayne, Ron, Kim, Freddie | Hillman | S2E2 "Two Gentlemen of Hillman" | Wikipedia list | SECONDARY |
| The Fresh Prince of Bel-Air | Will (and Carlton) | University of Los Angeles (ULA) | Season 4 (campus episodes S4E15 "Who's the Boss", S4E16 "I Know Why the Caged Bird Screams"). No episode summary names "ULA" | https://newsone.com/2735627/5-fake-tv-colleges-that-we-wish-really-existed/4 (season-level) | SECONDARY; episode PLACEHOLDER |
| The Fresh Prince of Bel-Air | Carlton | Princeton | S6E16 "I, Bowl Buster" (accepted); S6E24 "I, Done" (transfers to Princeton). Carlton is at ULA first | Wikipedia season 6 | SECONDARY |
| The Parkers | Kim and Nikki | Santa Monica College (real) | S1E5 "The Boomerang Effect" (1999-09-27); S3E12 "The Revolution" (2002-01-21) | Wikipedia list | SECONDARY |
| Black-ish | Dre | Howard (real) | S4E18 "Black Math" (2018-04-03): Howard is "his alma mater" | https://bustle.com/p/junior-chose-howard-university-on-black-ish-after-dre-stood-up-for-the-legacy-of-historically-black-colleges-8688139; https://www.theroot.com/black-ish-explores-the-decision-between-attending-an-hbcu-or-a-pwi-that-so-many-of-us-had-to-make | MEASURED, SECONDARY |
| Black-ish | Bow | Brown (real) | Named in S4E18 coverage ("Brown (Bow's alma mater)"). The S2E7 "Charlie in Charge" campus visit appears only in a search snippet | Bustle (above) | MEASURED, SECONDARY; S2E7 PLACEHOLDER |
| grown-ish | Zoey | Cal U (fictional) | Series premise; Disney press release names Cal U | https://www.wdtvpress.com/freeform/pressrelease/brand-new-year-brand-new-semester-at-cal-u-grown-ish-returns-jan-21/ | MEASURED, primary |
| grown-ish | Junior | Cal U, after Howard | grown-ish season 5 (2022); Black-ish S4E18 (Howard) | https://www.etonline.com/grown-ish-season-5-trailer-old-meets-new-as-junior-joins-zoey-the-gang-at-cal-u-exclusive-186816 | MEASURED, SECONDARY |
| Insecure | Issa and Molly | Stanford (real) | S5E1 "Reunited, Okay?!" (Stanford reunion); S5E2 "Growth, Okay?!" | Wikipedia; https://stanforddaily.com/2021/03/21/hbo-series-insecure-films-on-campus-over-weekend/ (reunion set filmed on campus) | SECONDARY |
| Atlanta | Earn | Princeton | **S4E2** "The Homeliest Little Horse": Earn says he was **kicked out** of Princeton | Wikipedia (Atlanta season 4) | SECONDARY |
| Empire | Andre | Wharton (Penn), MBA | Named by co-producer Carlito Rodriguez on S3E2 ("He got his Wharton MBA"). The on-screen episode is not pinned | https://www.tvline.com/news/empire-recap-season-3-episode-2-andre-arrested-753123/ | MEASURED, SECONDARY; episode PLACEHOLDER |
| Scandal | Olivia Pope | Georgetown Law (also Princeton A.B.) | "One episode" shows a dossier; the episode is not identified | Wikipedia (Olivia Pope) | SECONDARY; episode PLACEHOLDER |
| Dear White People | Full cast | Winchester University (fictional) | Vol. 1 "Chapter VIII" (Netflix synopsis names Winchester); Vol. 1 "Chapter IX" | https://www.netflix.com/title/80095698 | MEASURED, primary |
| **Bel-Air (TBD row)** | Lisa Wilkes | Howard University (real) | S4E1: "going to be a Bison with a full ride to Howard University" | https://thedig.howard.edu/all-stories/catch-glimpse-mecca-9-tv-shows-and-films-reference-howard-university | MEASURED, primary |
| **Bel-Air (TBD row)** | Carlton | Morehouse College (real), over Princeton | Season 4 (finale run) | https://blexmedia.com/4-storylines-bel-airs-final-season; https://widgets.sportskeeda.com/us/shows/bel-air-season-4-finale-recap-what-happens-will-end | MEASURED, SECONDARY; episode PLACEHOLDER |
| **Bel-Air (TBD row)** | Will | UPenn summer business program (real; not a degree enrollment) | S4E8 (series finale) | Sportskeeda (above). Peacock's season 3 recap covers the college-path setup: https://www.peacocktv.com/blog/bel-air-season-3-recap | MEASURED, SECONDARY |

**Inventoried shows with no table row: named colleges found in episode summaries** (Wikipedia, SECONDARY, accessed 2026-11-03)

| Show | School | Episode |
|---|---|---|
| The Jeffersons | Harvard (Lionel lies that George graduated from it) | S3E5 "George's Diploma" (1976-10-23) |
| 227 | Howard University (Donna Dalton, played by Kim Fields) | S3E17 "The Roommate" (1988-02-06) |
| Family Matters | Harvard (Laura's ambition) | S7E20 "Twinkle Toes Faldo" (1996-03-15) |
| Sister, Sister | University of Michigan (Tia and Tamera enter college) | S6E1 "Home Sweet Dorm" (1998-09-13) |
| Sister, Sister | Harvard (Tia awaits acceptance) | S5E15 "Ladies in Waiting" (1998-02-04) |
| Moesha | Maynard University (fictional; cousin Charisse) | S4E7 "A Terrible Thing Happened on My Tour of College" (1998-11-17) |
| Moesha | California University (Moesha's first week) | S5E3 "The Party's Over (Here)" (1999-09-06) |
| Smart Guy | Howard University (Calvin's girlfriend) | S3E7 "T.A. or Not T.A." (1998-11-01) |
| Girlfriends | UCLA (a student at UCLA) | S8E3 "Where Did Lynn-Digo?" (2007-10-15) |
| The Parkers | Harvard (Kim's move) | S4E25 "An Ivy League of Her Own" (2003-05-19) |
| Snowfall | Claremont McKenna College (Franklin enrolled) | S3E10 "Other Lives" |
| The Ms. Pat Show | Howard (did not get in) | S4E8 "The Graduation Party" (2024-05-23) |

Shows whose summaries mention college only generically (no named school): Sanford and Son, Good Times, What's Happening!!, Diff'rent Strokes, Amen, Martin, Living Single, The Jamie Foxx Show, The Steve Harvey Show, The Wayans Bros., The Hughleys, Everybody Hates Chris, My Wife and Kids, The Bernie Mac Show, One on One, Half & Half, Roc, In the House, Hangin' with Mr. Cooper, Kenan & Kel, The Game, Tyler Perry's House of Payne, Abbott Elementary, Pose, All American. Shows with no college term in any summary: The Boondocks, Power, Queen Sugar, The Chi, P-Valley. Summaries are short, so absence here is not evidence that a school is never named on screen.
