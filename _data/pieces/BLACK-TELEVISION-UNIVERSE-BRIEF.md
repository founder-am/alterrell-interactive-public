# BLACK TELEVISION UNIVERSE — PIECE BRIEF
**Platform:** Obsidian Futures (dark lane, indigo #1e1040)
**Status:** Concept locked. First-pass network map complete. Research pass in progress.
**Last updated:** May 27, 2026
**URL target:** interactive.alterrell.com/black-television-universe/

---

## WORKING TITLE

The Black Television Universe

Working subhead: TBD — something about degrees of separation or "everyone knows everyone"

---

## THESIS (celebratory, not argumentative)

Black television was built by a remarkably small group of people who kept showing up. The same actors, writers, and producers appear across decades of shows — connecting the 70s to the 90s to the 2020s through a web of recurring collaborations, spinoffs, and crossovers. Start at any node and you can reach almost any other within a few steps. This piece maps that universe — not to argue that the ecosystem was too small, but to celebrate the people who carried it.

---

## ELIGIBILITY

An actor qualifies for the BTU if they meet either threshold:

- Appeared as a main or recurring cast member on **1 Black television series for 3+ seasons**, OR
- Appeared as a recurring cast member on **3+ Black television series** regardless of season count

Track **decade started** (decade of their first qualifying BTU appearance), not decades active.

---

## THE INTERACTIVE CONCEPT

### The Web Map (primary visual)

A spider-web / constellation-style network diagram. Actors are nodes (circles). Lines between them represent shared shows, labeled with the show name. Node size reflects how many shows that actor connects to. Line color reflects the decade of the shared show. Dense clusters reveal which shows and eras are most interconnected. Isolated nodes (Will Smith, Issa Rae, Donald Glover) float at the edges — their isolation is itself a finding.

Proof of concept completed: `btu-web-map.html` — 25 actors, hand-positioned SVG, no libraries. Demonstrates the concept works visually.

The full production version (D3 force-directed, interactive, tap-to-highlight) lives on a **separate sub-page** of the platform (`interactive.alterrell.com/black-television-universe/explore/` or similar). This is a **desktop-forward** experience. The main piece page is mobile-friendly with cards and editorial; the sub-page is where the D3 build lives.

### Path Cards (shareable units)

Person-to-person chains traced through the network. Each link is an actor who was cast on both shows. The start and end points are people, not shows. Shows are where they met.

**Format:** Person A → (Show 1) → Person B → (Show 2) → Person C → (Show 3) → Person D

**The best path cards meet three criteria:**
1. They cross generational buckets
2. They have multiple valid pathways between start and end
3. The connection is genuinely surprising

Every link must be a person who appeared on both shows. **No shared-universe connections.** No "they were both on NBC." Spinoffs where characters cross over (Cosby → A Different World) count as direct connections.

**Generational buckets:**
- Bucket 1: 1980s and prior (Redd Foxx, Marla Gibbs, Sherman Hemsley)
- Bucket 2: 1990s–2000s (Tichina Arnold, Tisha Campbell, Jackée Harry)
- Bucket 3: 2010s–2020s (Quinta Brunson, Cedric the Entertainer, Issa Rae)

### "Most Connected Shows" stat

For each show: how many BTU-qualifying actors passed through its cast. Cosby Show and 227 as launching pads. Half & Half as a crossroads (connects to 7 other BTU shows through just 2 cast members and 1 creator). This becomes a ranked list or a card set.

---

## VERIFIED PATHS (from first-pass map)

**Redd Foxx → Cedric the Entertainer**
Redd Foxx → (Sanford and Son) → Hal Williams → (227) → Jackée Harry → (Everybody Hates Chris) → Tichina Arnold → (The Neighborhood) → Cedric the Entertainer
*5 people, 4 shows, 1972 to present, all 3 buckets*

**Redd Foxx → Regina King**
Redd Foxx → (Sanford and Son) → Hal Williams → (227) → Regina King
*3 people, 2 shows. Redd Foxx to an Oscar winner in two steps.*

**Sherman Hemsley → Quinta Brunson**
Sherman Hemsley → (The Jeffersons) → Marla Gibbs → (227) → Jackée Harry → (Everybody Hates Chris) → Tyler James Williams → (Abbott Elementary) → Quinta Brunson
*6 people, 5 shows, 1975 to present, all 3 buckets*

**Sherman Hemsley → Tia Mowry**
Sherman Hemsley → (The Jeffersons) → Marla Gibbs → (227) → Jackée Harry → (Sister Sister) → Tia Mowry
*4 people, 3 shows*

**Brandy → Quinta Brunson**
Brandy → (Moesha) → Sheryl Lee Ralph → (Abbott Elementary) → Quinta Brunson
*3 people, 2 shows. Clean and short.*

**Jaleel White → Quinta Brunson (multiple pathways)**
Path A: Jaleel White → (Family Matters) → Telma Hopkins → (Half & Half) → Essence Atkins → (Are We There Yet?) → Terry Crews → (Everybody Hates Chris) → Tyler James Williams → (Abbott Elementary) → Quinta Brunson
Path B: Jaleel White → (Family Matters) → Telma Hopkins → (Are We There Yet?) → Terry Crews → (Everybody Hates Chris) → Tyler James Williams → (Abbott Elementary) → Quinta Brunson

---

## KEY FINDINGS (from first-pass map)

- **Jackée Harry** is the most connected actor in the BTU. 4 qualifying shows across 4 decades (227, Sister Sister, Everybody Hates Chris, The Ms. Pat Show). She connects the 80s NBC block to the 90s WB block to the 2000s UPN block to the 2020s BET+ block.
- **Essence Atkins** is tied at 4 shows (Smart Guy, Half & Half, Are We There Yet?, Marlon) but connects a completely different cluster — the WB 90s to the TBS/NBC 2010s.
- **Hal Williams** is the invisible bridge. Officer Smitty on Sanford and Son (1972–76) and Lester Jenkins on 227 (1985–90). Without him, the 1970s founding era of Black television is an island.
- **Half & Half** is the most connected show relative to its cast size. Through Essence Atkins and Telma Hopkins alone it reaches 7 other BTU shows. Its creator (Yvette Lee Bowser) also created Living Single, adding another connection.
- **Abbott Elementary** and **Insecure** represent generational breaks where new creators built outside the traditional BTU network. Their isolation in the web is a visual finding, not a gap in the data.
- **The Fresh Prince** cast is surprisingly isolated — Will Smith, Alfonso Ribeiro, and Tatyana Ali don't have strong cast connections to other BTU shows in the current map.
- **Martin** and **Living Single**, despite both being Fox 90s shows, are disconnected in the cast network — no verified shared cast member bridges them directly.

---

## ANCHOR ACTORS (initial list — research will expand)

**Jackée Harry** — 227 (1985–90), Sister Sister (1994–99), Everybody Hates Chris (2005–09), The Ms. Pat Show (2022–present). Four decades.

**Essence Atkins** — Smart Guy (1997–99), Half & Half (2002–06), Are We There Yet? (2010–13), Marlon (2017–18). Four shows across three decades.

**Tichina Arnold** — Martin (1992–97), Everybody Hates Chris (2005–09), The Neighborhood (2018–present). Three decades of recurring roles.

**Marla Gibbs** — The Jeffersons (1975–85), 227 (1985–90), The Hughleys (1998–2002). Bridges the 70s to the 2000s.

**Telma Hopkins** — Family Matters (1989–98), Half & Half (2002–06), Are We There Yet? (2010–13). Three shows across three decades.

**Kim Fields** — The Facts of Life (1979–88), Living Single (1993–98), The Upshaws (2021–present). Four decades.

**Tisha Campbell** — Martin (1992–97), My Wife and Kids (2001–05). Two shows, childhood friends with Arnold since Little Shop of Horrors (1986).

**Hal Williams** — Sanford and Son (1972–76), 227 (1985–90). The single person who connects the 1970s founding era to the late 80s/90s explosion. The bridge no one thinks of.

**Tyler James Williams** — Everybody Hates Chris (2005–09), Abbott Elementary (2021–present). Bridges the 2000s to the 2020s.

**Sheryl Lee Ralph** — Moesha (1996–2001, recurring), Abbott Elementary (2021–present). Bridges the UPN 90s to the ABC 2020s.

---

## TAB STRUCTURE

- **Tab 1 — Overview:** The editorial frame — who carried Black television. Not just trailblazers (Diahann Carroll) but people who earned icon status through persistence (Jenifer Lewis, Jackée Harry, Marla Gibbs, Tichina Arnold). Names them and says what the industry never did: you built this. Preview of hub cards. A simplified version of the web map as a teaser. Share block.
- **Tab 2 — The Universe:** The static web map (mobile-friendly SVG version). Link to the full interactive sub-page for desktop exploration. Color-coded by decade.
- **Tab 3 — The Hubs:** Profile cards for the most-connected actors. Black Music Royalty card format — collectible/playing card style, dark background, gold accent, typographic. No photos. Each card shows: actor name (DM Serif Display), decade started, number of qualifying shows, show list with years, a signature stat or fact, card number in the set.
- **Tab 4 — Degrees:** The path cards. Cross-generational chains. Multiple pathways highlighted where they exist. The fun, shareable discovery tab. Goal is for people to guess how actors connect and be surprised by the answer.
- **Tab 5 — Spread the Word:** Framing is "give flowers" / "show your pride." Shareable units are the profile cards and path cards. "These people built something and never got a monument. Share the card. That's the monument."
- **Tab 6 — Sources**

---

## CARD TYPES

**Hub / Profile Card (300×280, Black Music Royalty format):**
- Actor name (DM Serif Display, prominent)
- Decade started
- Number of qualifying shows
- Show list with years
- Signature stat or fact ("4 decades of primetime" / "the invisible bridge from the 70s")
- Card number within the set (1 of N)
- Dark background, gold (#E8B923) accent. No photos. Typography carries the card.

**Path Card (shareable, may exceed standard shell):**
- Start and end person with the full chain between them
- Shows labeled at each link
- Decade color coding
- Multiple pathways noted where they exist
- These are the social media cards

---

## DESIGN

- Obsidian Futures: dark background (#0a0a12 or #1e1040), gold accent (#E8B923)
- Web map: hand-positioned SVG for the in-page version; D3 force-directed for the sub-page
- Profile cards: Black Music Royalty format (collectible/playing card)
- D3 sub-page builds are a separate dedicated build session, not part of the standard piece build
- Mobile consideration: the full network graph links to a desktop sub-page rather than attempting to render a force-directed layout on small screens

---

## RELATIONSHIP TO OTHER PIECES

The BTU shares the same show inventory as **Black Graduates: Television**. The actor-show matrix built for this piece feeds both. The geographic piece (where shows were set) also draws from the same inventory. Together these form the **Obsidian Futures Black Television series** — education, geography, people — each looking at the same data from a different angle.

---

## RESEARCH STILL NEEDED

**Phase 1 — Expand the actor-show matrix:**
Pull main and recurring cast for shows not yet mapped: The Steve Harvey Show, The Jamie Foxx Show, The Bernie Mac Show, The Game, Hangin' with Mr. Cooper, In the House, One on One, Roc, House of Payne (full cast), The Boondocks, Empire, Insecure, Atlanta. Each likely adds new nodes and connections.

**Phase 2 — Identify more hubs and close gaps:**
The 90s UPN/WB cluster is underdeveloped. Verify: Living Single cast connections beyond Erika Alexander and Kim Fields. Steve Harvey Show cast (Cedric the Entertainer was on this — that may connect The Neighborhood back to the 90s directly). Jamie Foxx Show cast. These fills will likely reveal new bridges.

**Phase 3 — Build more path cards:**
Once the matrix is fuller, trace 15–20 strong path cards. Prioritize cards with multiple valid pathways. Test the hardest reaches: Sanford and Son to Abbott Elementary. The Jeffersons to Insecure. A Different World to The Neighborhood.

---

## DO NOT

- Do not frame the small ecosystem as a problem — frame it as a testament to the people who built it
- Do not include film connections in Phase 1 — television only, film is a future expansion
- Do not build the full D3 interactive before the actor-show matrix is substantially complete
- Do not attempt the full force-directed graph on mobile — design a simplified mobile experience or link to sub-page
- Do not present guest appearances as equivalent to lead/recurring roles — weight matters in the network
- Do not build before the Black Graduates research pass is complete — same inventory feeds both pieces
- Do not use "shared universe" connections in path cards — every link must be a person who was cast on both shows
- Do not ship mediocre path cards — a weak connection undermines the concept

---

## NEXT SESSION

Complete the actor-show matrix by pulling cast for the ~12 unmapped shows. This is a Type 1 research session. Then identify the top 20 hubs, trace 15+ path cards, and refine the web map positions. Then AMA writes the Overview editorial. Then Type 2 build (starting with hub cards and path cards, web map SVG, D3 sub-page last).
