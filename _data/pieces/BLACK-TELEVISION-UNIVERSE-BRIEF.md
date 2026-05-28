BLACK TELEVISION UNIVERSE — PIECE BRIEF
Platform: Obsidian Futures (dark lane, indigo #1e1040)
Status: Concept locked. First-pass network map complete. Research pass in progress.
Last updated: May 27, 2026
URL target: interactive.alterrell.com/black-television-universe/

WORKING TITLE
The Black Television Universe
Working subhead: TBD — something about degrees of separation or "everyone knows everyone"

THESIS (celebratory, not argumentative)
Black television was built by a remarkably small group of people who kept showing up. The same actors, writers, and producers appear across decades of shows — connecting the 70s to the 90s to the 2020s through a web of recurring collaborations, spinoffs, and crossovers. Start at any node and you can reach almost any other within a few steps. This piece maps that universe — not to argue that the ecosystem was too small, but to celebrate the people who carried it.

ELIGIBILITY
An actor qualifies for the BTU if they meet either threshold:

Appeared as a main or recurring cast member on 1 Black television series for 3+ seasons, OR
Appeared as a recurring cast member on 3+ Black television series regardless of season count

Track decade started (decade of their first qualifying BTU appearance), not decades active.

THE INTERACTIVE CONCEPT
The Web Map (primary visual)
A spider-web / constellation-style network diagram. Actors are nodes (circles). Lines between them represent shared shows, labeled with the show name. Node size reflects how many shows that actor connects to. Line color reflects the decade of the shared show. Dense clusters reveal which shows and eras are most interconnected. Isolated nodes (Will Smith, Issa Rae, Donald Glover) float at the edges — their isolation is itself a finding.
Proof of concept completed: btu-web-map.html — 25 actors, hand-positioned SVG, no libraries. Demonstrates the concept works visually.
The full production version (D3 force-directed, interactive, tap-to-highlight) lives on a separate sub-page of the platform (interactive.alterrell.com/black-television-universe/explore/ or similar). This is a desktop-forward experience. The main piece page is mobile-friendly with cards and editorial; the sub-page is where the D3 build lives.
Path Cards (shareable units)
Person-to-person chains traced through the network. Each link is an actor who was cast on both shows. The start and end points are people, not shows. Shows are where they met.
Format: Person A → (Show 1) → Person B → (Show 2) → Person C → (Show 3) → Person D
The best path cards meet three criteria:

They cross generational buckets
They have multiple valid pathways between start and end
The connection is genuinely surprising

Every link must be a person who appeared on both shows. No shared-universe connections. No "they were both on NBC." Spinoffs where characters cross over (Cosby → A Different World) count as direct connections.
Generational buckets:

Bucket 1: 1980s and prior (Redd Foxx, Marla Gibbs, Sherman Hemsley)
Bucket 2: 1990s–2000s (Tichina Arnold, Tisha Campbell, Jackée Harry)
Bucket 3: 2010s–2020s (Quinta Brunson, Cedric the Entertainer, Issa Rae)

"Most Connected Shows" stat
For each show: how many BTU-qualifying actors passed through its cast. Cosby Show and 227 as launching pads. Half & Half as a crossroads (connects to 7 other BTU shows through just 2 cast members and 1 creator). This becomes a ranked list or a card set.

VERIFIED PATHS (from first-pass map)
Redd Foxx → Cedric the Entertainer
Redd Foxx → (Sanford and Son) → Hal Williams → (227) → Jackée Harry → (Everybody Hates Chris) → Tichina Arnold → (The Neighborhood) → Cedric the Entertainer
5 people, 4 shows, 1972 to present, all 3 buckets
Redd Foxx → Regina King
Redd Foxx → (Sanford and Son) → Hal Williams → (227) → Regina King
3 people, 2 shows. Redd Foxx to an Oscar winner in two steps.
Sherman Hemsley → Quinta Brunson
Sherman Hemsley → (The Jeffersons) → Marla Gibbs → (227) → Jackée Harry → (Everybody Hates Chris) → Tyler James Williams → (Abbott Elementary) → Quinta Brunson
6 people, 5 shows, 1975 to present, all 3 buckets
Sherman Hemsley → Tia Mowry
Sherman Hemsley → (The Jeffersons) → Marla Gibbs → (227) → Jackée Harry → (Sister Sister) → Tia Mowry
4 people, 3 shows
Brandy → Quinta Brunson
Brandy → (Moesha) → Sheryl Lee Ralph → (Abbott Elementary) → Quinta Brunson
3 people, 2 shows. Clean and short.
Jaleel White → Quinta Brunson (multiple pathways)
Path A: Jaleel White → (Family Matters) → Telma Hopkins → (Half & Half) → Essence Atkins → (Are We There Yet?) → Terry Crews → (EHC) → Tyler James Williams → (Abbott) → Quinta Brunson
Path B: Jaleel White → (Family Matters) → Telma Hopkins → (Are We There Yet?) → Terry Crews → (EHC) → Tyler James Williams → (Abbott) → Quinta Brunson

KEY FINDINGS (from first-pass map)

Jackée Harry is the most connected actor in the BTU. 4 qualifying shows across 4 decades (227, Sister Sister, Everybody Hates Chris, The Ms. Pat Show). She connects the 80s NBC block to the 90s WB block to the 2000s UPN block to the 2020s BET+ block.
Essence Atkins is tied at 4 shows (Smart Guy, Half & Half, Are We There Yet?, Marlon) but connects a completely different cluster — the WB 90s to the TBS/NBC 2010s.
Hal Williams is the invisible bridge. Officer Smitty on Sanford and Son (1972–76) and Lester Jenkins on 227 (1985–90). Without him, the 1970s founding era of Black television is an island.
Half & Half is the most connected show relative to its cast size. Through Essence Atkins and Telma Hopkins alone it reaches 7 other BTU shows. Its creator (Yvette Lee Bowser) also created Living Single, adding another connection.
Abbott Elementary and Insecure represent generational breaks where new creators built outside the traditional BTU network. Their isolation in the web is a visual finding, not a gap in the data.
The Fresh Prince cast is surprisingly isolated — Will Smith, Alfonso Ribeiro, and Tatyana Ali don't have strong cast connections to other BTU shows in the current map.
Martin and Living Single, despite both being Fox 90s shows, are disconnected in the cast network — no verified shared cast member bridges them directly.


TAB STRUCTURE

Tab 1 — Overview: The editorial frame — who carried Black television. Not just trailblazers (Diahann Carroll) but people who earned icon status through persistence (Jenifer Lewis, Jackée Harry, Marla Gibbs, Tichina Arnold). Names them and says what the industry never did: you built this. Preview of hub cards. A simplified version of the web map as a teaser. Share block.
Tab 2 — The Universe: The static web map (mobile-friendly SVG version). Link to the full interactive sub-page for desktop exploration. Color-coded by decade.
Tab 3 — The Hubs: Profile cards for the most-connected actors. Black Music Royalty card format — collectible/playing card style, dark background, gold accent, typographic. No photos. Each card shows: actor name (DM Serif Display), decade started, number of qualifying shows, show list with years, a signature stat or fact, card number in the set.
Tab 4 — Degrees: The path cards. Cross-generational chains. Multiple pathways highlighted where they exist. The fun, shareable discovery tab. Goal is for people to guess how actors connect and be surprised by the answer.
Tab 5 — Spread the Word: Framing is "give flowers" / "show your pride." Shareable units are the profile cards and path cards. "These people built something and never got a monument. Share the card. That's the monument."
Tab 6 — Sources


CARD TYPES
Hub / Profile Card (300×280, Black Music Royalty format):

Actor name (DM Serif Display, prominent)
Decade started
Number of qualifying shows
Show list with years
Signature stat or fact ("4 decades of primetime" / "the invisible bridge from the 70s")
Card number within the set (1 of N)
Dark background, gold (#E8B923) accent. No photos. Typography carries the card.

Path Card (shareable, may exceed standard shell):

Start and end person with the full chain between them
Shows labeled at each link
Decade color coding
Multiple pathways noted where they exist
These are the social media cards


DESIGN

Obsidian Futures: dark background (#0a0a12 or #1e1040), gold accent (#E8B923)
Web map: hand-positioned SVG for the in-page version; D3 force-directed for the sub-page
Profile cards: Black Music Royalty format (collectible/playing card)
D3 sub-page builds are a separate dedicated build session, not part of the standard piece build


RELATIONSHIP TO OTHER PIECES
The BTU shares the same show inventory as Black Graduates: Television. The actor-show matrix built for this piece feeds both. The geographic piece (where shows were set) also draws from the same inventory. Together these form the Obsidian Futures Black Television series — education, geography, people — each looking at the same data from a different angle.

RESEARCH STILL NEEDED
Phase 1 — Expand the actor-show matrix:
Pull main and recurring cast for shows not yet mapped: The Steve Harvey Show, The Jamie Foxx Show, The Bernie Mac Show, The Game, Hangin' with Mr. Cooper, In the House, One on One, Roc, House of Payne (full cast), The Boondocks, Empire, Insecure, Atlanta. Each likely adds new nodes and connections.
Phase 2 — Identify more hubs and close gaps:
The 90s UPN/WB cluster is underdeveloped. Verify: Living Single cast connections beyond Erika Alexander and Kim Fields. Steve Harvey Show cast (Cedric the Entertainer was on this — that may connect The Neighborhood back to the 90s). Jamie Foxx Show cast. These fills will likely reveal new bridges.
Phase 3 — Build more path cards:
Once the matrix is fuller, trace 15–20 strong path cards. Prioritize cards with multiple valid pathways. Test the hardest reaches: Sanford and Son to Abbott Elementary. The Jeffersons to Insecure. A Different World to The Neighborhood.

DO NOT

Do not frame the small ecosystem as a problem — frame it as a testament to the people who built it
Do not include film connections in Phase 1 — television only, film is a future expansion
Do not build the full D3 interactive before the actor-show matrix is substantially complete
Do not attempt the full force-directed graph on mobile — design a simplified mobile experience or link to sub-page
Do not present guest appearances as equivalent to lead/recurring roles — weight matters in the network
Do not build before the Black Graduates research pass is complete — same inventory feeds both pieces
Do not use "shared universe" connections in path cards — every link must be a person who was cast on both shows
Do not ship mediocre path cards — a weak connection undermines the concept


NEXT SESSION
Complete the actor-show matrix by pulling cast for the ~12 unmapped shows. This is a Type 1 research session. Then identify the top 20 hubs, trace 15+ path cards, and refine the web map positions. Then AMA writes the Overview editorial. Then Type 2 build (starting with hub cards and path cards, web map SVG, D3 sub-page last).


__
Visuals created

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BTU Network Map — Spider Web</title>
<style>
body {
  background: #0a0a12;
  margin: 0;
  padding: 20px;
  font-family: sans-serif;
}
h1 {
  color: #E8B923;
  font-size: 1.2rem;
  margin: 0 0 4px;
}
p.sub {
  color: #666;
  font-size: 0.65rem;
  margin: 0 0 16px;
}
svg {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
}
</style>
</head>
<body>
<h1>The Black Television Universe</h1>
<p class="sub">First-pass web &middot; ~20 actors &middot; lines = shared show</p>

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">

  <!-- EDGES (show connections) -->
  <!-- Color key: 70s=#e8944a 80s=#6aafe8 90s=#b88ae8 00s=#6ae8a0 10s=#e8d86a 20s=#e86a9a -->

  <!-- Sanford and Son -->
  <line x1="80" y1="120" x2="200" y2="200" stroke="#e8944a" stroke-width="1.5" opacity="0.5"/>
  <text x="130" y="152" fill="#e8944a" font-size="7" opacity="0.7">Sanford &amp; Son</text>

  <!-- The Jeffersons -->
  <line x1="120" y1="280" x2="200" y2="200" stroke="#e8944a" stroke-width="1.5" opacity="0.5"/>
  <text x="145" y="248" fill="#e8944a" font-size="7" opacity="0.7">Jeffersons</text>

  <!-- 227: Marla—Hal Williams -->
  <line x1="200" y1="200" x2="200" y2="200" stroke="#6aafe8" stroke-width="0" opacity="0"/>
  <!-- 227: Marla—Jackée -->
  <line x1="200" y1="200" x2="370" y2="180" stroke="#6aafe8" stroke-width="1.5" opacity="0.5"/>
  <text x="275" y="183" fill="#6aafe8" font-size="7" opacity="0.7">227</text>
  <!-- 227: Marla—Regina King -->
  <line x1="200" y1="200" x2="140" y2="380" stroke="#6aafe8" stroke-width="1.5" opacity="0.5"/>
  <text x="155" y="295" fill="#6aafe8" font-size="7" opacity="0.7">227</text>
  <!-- 227: Jackée—Regina King -->
  <line x1="370" y1="180" x2="140" y2="380" stroke="#6aafe8" stroke-width="1.5" opacity="0.5"/>
  <!-- 227: Hal—Jackée -->
  <line x1="80" y1="120" x2="370" y2="180" stroke="#6aafe8" stroke-width="1" opacity="0.3"/>
  <!-- 227: Hal—Marla -->
  <line x1="80" y1="120" x2="200" y2="200" stroke="#6aafe8" stroke-width="1" opacity="0.3"/>

  <!-- Hughleys: Marla—DL Hughley -->
  <line x1="200" y1="200" x2="100" y2="460" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="135" y="335" fill="#b88ae8" font-size="7" opacity="0.7">Hughleys</text>

  <!-- Sister Sister: Jackée—Tia Mowry -->
  <line x1="370" y1="180" x2="480" y2="100" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="418" y="132" fill="#b88ae8" font-size="7" opacity="0.7">Sister Sister</text>

  <!-- EHC: Jackée—Tichina -->
  <line x1="370" y1="180" x2="540" y2="300" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <text x="448" y="232" fill="#6ae8a0" font-size="7" opacity="0.7">EHC</text>
  <!-- EHC: Jackée—Tyler James Williams -->
  <line x1="370" y1="180" x2="680" y2="400" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <!-- EHC: Jackée—Terry Crews -->
  <line x1="370" y1="180" x2="560" y2="460" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <!-- EHC: Tichina—Tyler James Williams -->
  <line x1="540" y1="300" x2="680" y2="400" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <!-- EHC: Tichina—Terry Crews -->
  <line x1="540" y1="300" x2="560" y2="460" stroke="#6ae8a0" stroke-width="1" opacity="0.3"/>
  <!-- EHC: Terry—Tyler -->
  <line x1="560" y1="460" x2="680" y2="400" stroke="#6ae8a0" stroke-width="1" opacity="0.3"/>

  <!-- Martin: Tichina—Tisha -->
  <line x1="540" y1="300" x2="620" y2="200" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="572" y="244" fill="#b88ae8" font-size="7" opacity="0.7">Martin</text>

  <!-- Neighborhood: Tichina—Cedric -->
  <line x1="540" y1="300" x2="700" y2="260" stroke="#e8d86a" stroke-width="1.5" opacity="0.5"/>
  <text x="615" y="273" fill="#e8d86a" font-size="7" opacity="0.7">Neighborhood</text>

  <!-- My Wife and Kids: Tisha—Damon Wayans -->
  <line x1="620" y1="200" x2="760" y2="140" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <text x="685" y="162" fill="#6ae8a0" font-size="7" opacity="0.7">My Wife &amp; Kids</text>

  <!-- Ms. Pat Show: Jackée -->
  <line x1="370" y1="180" x2="310" y2="80" stroke="#e86a9a" stroke-width="1.5" opacity="0.5"/>
  <text x="330" y="122" fill="#e86a9a" font-size="7" opacity="0.7">Ms. Pat Show</text>

  <!-- Abbott: Tyler James Williams—Quinta -->
  <line x1="680" y1="400" x2="820" y2="460" stroke="#e86a9a" stroke-width="1.5" opacity="0.5"/>
  <text x="742" y="423" fill="#e86a9a" font-size="7" opacity="0.7">Abbott</text>
  <!-- Abbott: Sheryl Lee Ralph—Quinta -->
  <line x1="680" y1="560" x2="820" y2="460" stroke="#e86a9a" stroke-width="1.5" opacity="0.5"/>
  <!-- Abbott: Sheryl Lee Ralph—Tyler -->
  <line x1="680" y1="560" x2="680" y2="400" stroke="#e86a9a" stroke-width="1" opacity="0.3"/>

  <!-- Moesha: Sheryl Lee Ralph—Brandy -->
  <line x1="680" y1="560" x2="540" y2="600" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="600" y="586" fill="#b88ae8" font-size="7" opacity="0.7">Moesha</text>
  <!-- Moesha: Brandy—Countess Vaughn -->
  <line x1="540" y1="600" x2="420" y2="560" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>

  <!-- Parkers: Countess Vaughn—Mo'Nique -->
  <line x1="420" y1="560" x2="340" y2="480" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="368" y="526" fill="#b88ae8" font-size="7" opacity="0.7">Parkers</text>

  <!-- Cosby: Erika Alexander—Lisa Bonet -->
  <line x1="280" y1="380" x2="280" y2="290" stroke="#6aafe8" stroke-width="1.5" opacity="0.5"/>
  <text x="284" y="338" fill="#6aafe8" font-size="7" opacity="0.7">Cosby</text>
  <!-- Cosby: Malcolm-Jamal Warner -->
  <line x1="280" y1="290" x2="420" y2="380" stroke="#6aafe8" stroke-width="1" opacity="0.3"/>

  <!-- A Different World: Lisa Bonet -->
  <!-- (Lisa Bonet is the bridge from Cosby to ADW) -->
  <line x1="280" y1="290" x2="220" y2="500" stroke="#6aafe8" stroke-width="1.5" opacity="0.5"/>
  <text x="236" y="400" fill="#6aafe8" font-size="7" opacity="0.7">A Different World</text>

  <!-- Living Single: Erika Alexander—Kim Fields -->
  <line x1="280" y1="380" x2="160" y2="540" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="206" y="466" fill="#b88ae8" font-size="7" opacity="0.7">Living Single</text>

  <!-- Upshaws: Kim Fields -->
  <line x1="160" y1="540" x2="80" y2="600" stroke="#e86a9a" stroke-width="1.5" opacity="0.5"/>
  <text x="105" y="576" fill="#e86a9a" font-size="7" opacity="0.7">Upshaws</text>

  <!-- Family Matters: Telma Hopkins -->
  <line x1="460" y1="480" x2="460" y2="480" stroke="#6aafe8" stroke-width="0"/>
  <!-- Half & Half: Telma—Essence -->
  <line x1="460" y1="480" x2="600" y2="540" stroke="#6ae8a0" stroke-width="1.5" opacity="0.5"/>
  <text x="522" y="516" fill="#6ae8a0" font-size="7" opacity="0.7">Half &amp; Half</text>

  <!-- Are We There Yet: Telma—Essence -->
  <line x1="460" y1="480" x2="600" y2="540" stroke="#e8d86a" stroke-width="1" opacity="0.3"/>
  <!-- Are We There Yet: Terry Crews—Essence -->
  <line x1="560" y1="460" x2="600" y2="540" stroke="#e8d86a" stroke-width="1.5" opacity="0.5"/>
  <text x="574" y="506" fill="#e8d86a" font-size="7" opacity="0.7">Are We There Yet?</text>
  <!-- Are We There Yet: Terry—Telma -->
  <line x1="560" y1="460" x2="460" y2="480" stroke="#e8d86a" stroke-width="1" opacity="0.3"/>

  <!-- Marlon: Essence—Marlon Wayans -->
  <line x1="600" y1="540" x2="820" y2="140" stroke="#e8d86a" stroke-width="1.5" opacity="0.5"/>
  <text x="718" y="340" fill="#e8d86a" font-size="7" opacity="0.7">Marlon</text>

  <!-- Wayans Bros: Marlon Wayans -->
  <line x1="820" y1="140" x2="900" y2="80" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="854" y="104" fill="#b88ae8" font-size="7" opacity="0.7">Wayans Bros</text>

  <!-- Malcolm & Eddie: MJW—Eddie Griffin -->
  <line x1="420" y1="380" x2="480" y2="420" stroke="#b88ae8" stroke-width="1.5" opacity="0.5"/>
  <text x="440" y="406" fill="#b88ae8" font-size="7" opacity="0.7">Malcolm &amp; Eddie</text>

  <!-- Girlfriends—Black-ish: Tracee Ellis Ross -->
  <line x1="860" y1="320" x2="860" y2="320" stroke="#e8d86a" stroke-width="0"/>

  <!-- ISOLATED NODES (no cast connections in current map) -->
  <!-- Will Smith, Issa Rae, Donald Glover float alone -->


  <!-- ===================== -->
  <!-- NODES (actors)        -->
  <!-- ===================== -->

  <!-- Hal Williams -->
  <circle cx="80" cy="120" r="6" fill="#e8944a"/>
  <text x="80" y="108" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Hal Williams</text>

  <!-- Redd Foxx -->
  <circle cx="80" cy="55" r="5" fill="#e8944a"/>
  <text x="80" y="45" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Redd Foxx</text>
  <line x1="80" y1="60" x2="80" y2="114" stroke="#e8944a" stroke-width="1.5" opacity="0.5"/>

  <!-- Sherman Hemsley -->
  <circle cx="55" cy="280" r="5" fill="#e8944a"/>
  <text x="55" y="270" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Sherman Hemsley</text>
  <line x1="55" y1="280" x2="120" y2="280" stroke="#e8944a" stroke-width="1.5" opacity="0.5"/>

  <!-- Isabel Sanford -->
  <circle cx="120" cy="280" r="4" fill="#e8944a" opacity="0.6"/>
  <text x="120" y="300" text-anchor="middle" fill="#888" font-size="7">Isabel Sanford</text>

  <!-- MARLA GIBBS — big hub -->
  <circle cx="200" cy="200" r="10" fill="#E8B923"/>
  <text x="200" y="220" text-anchor="middle" fill="#E8B923" font-size="9" font-weight="700">Marla Gibbs</text>

  <!-- Regina King -->
  <circle cx="140" cy="380" r="5" fill="#6aafe8"/>
  <text x="140" y="396" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Regina King</text>

  <!-- D.L. Hughley -->
  <circle cx="100" cy="460" r="4" fill="#b88ae8"/>
  <text x="100" y="478" text-anchor="middle" fill="#bbb" font-size="7">D.L. Hughley</text>

  <!-- JACKÉE HARRY — biggest hub -->
  <circle cx="370" cy="180" r="12" fill="#E8B923"/>
  <text x="370" y="165" text-anchor="middle" fill="#E8B923" font-size="9" font-weight="700">Jackée Harry</text>

  <!-- Ms. Pat -->
  <circle cx="310" cy="80" r="4" fill="#e86a9a"/>
  <text x="310" y="70" text-anchor="middle" fill="#bbb" font-size="7">Ms. Pat</text>

  <!-- Tia Mowry -->
  <circle cx="480" cy="100" r="5" fill="#b88ae8"/>
  <text x="480" y="90" text-anchor="middle" fill="#fff" font-size="8">Tia Mowry</text>

  <!-- TICHINA ARNOLD — big hub -->
  <circle cx="540" cy="300" r="10" fill="#E8B923"/>
  <text x="540" y="320" text-anchor="middle" fill="#E8B923" font-size="9" font-weight="700">Tichina Arnold</text>

  <!-- Tisha Campbell -->
  <circle cx="620" cy="200" r="7" fill="#b88ae8"/>
  <text x="620" y="190" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Tisha Campbell</text>

  <!-- Cedric the Entertainer -->
  <circle cx="700" cy="260" r="5" fill="#e8d86a"/>
  <text x="700" y="250" text-anchor="middle" fill="#fff" font-size="8">Cedric the Entertainer</text>

  <!-- Damon Wayans -->
  <circle cx="760" cy="140" r="5" fill="#6ae8a0"/>
  <text x="760" y="130" text-anchor="middle" fill="#fff" font-size="8">Damon Wayans</text>

  <!-- Tyler James Williams -->
  <circle cx="680" cy="400" r="7" fill="#6ae8a0"/>
  <text x="680" y="390" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Tyler James Williams</text>

  <!-- Terry Crews -->
  <circle cx="560" cy="460" r="6" fill="#6ae8a0"/>
  <text x="560" y="450" text-anchor="middle" fill="#fff" font-size="8">Terry Crews</text>

  <!-- Quinta Brunson -->
  <circle cx="820" cy="460" r="6" fill="#e86a9a"/>
  <text x="820" y="480" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Quinta Brunson</text>

  <!-- Sheryl Lee Ralph -->
  <circle cx="680" cy="560" r="6" fill="#b88ae8"/>
  <text x="680" y="580" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Sheryl Lee Ralph</text>

  <!-- Brandy -->
  <circle cx="540" cy="600" r="5" fill="#b88ae8"/>
  <text x="540" y="618" text-anchor="middle" fill="#fff" font-size="8">Brandy</text>

  <!-- Countess Vaughn -->
  <circle cx="420" cy="560" r="5" fill="#b88ae8"/>
  <text x="420" y="578" text-anchor="middle" fill="#fff" font-size="8">Countess Vaughn</text>

  <!-- Mo'Nique -->
  <circle cx="340" cy="480" r="4" fill="#b88ae8"/>
  <text x="340" y="498" text-anchor="middle" fill="#bbb" font-size="7">Mo'Nique</text>

  <!-- Lisa Bonet -->
  <circle cx="280" cy="290" r="5" fill="#6aafe8"/>
  <text x="295" y="283" fill="#fff" font-size="8">Lisa Bonet</text>

  <!-- Erika Alexander -->
  <circle cx="280" cy="380" r="6" fill="#b88ae8"/>
  <text x="295" y="376" fill="#fff" font-size="8">Erika Alexander</text>

  <!-- Jasmine Guy (ADW only) -->
  <circle cx="220" cy="500" r="4" fill="#6aafe8"/>
  <text x="220" y="516" text-anchor="middle" fill="#bbb" font-size="7">Jasmine Guy</text>

  <!-- Kim Fields -->
  <circle cx="160" cy="540" r="6" fill="#b88ae8"/>
  <text x="160" y="558" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Kim Fields</text>

  <!-- Wanda Sykes -->
  <circle cx="80" cy="600" r="4" fill="#e86a9a"/>
  <text x="80" y="618" text-anchor="middle" fill="#bbb" font-size="7">Wanda Sykes</text>

  <!-- Malcolm-Jamal Warner -->
  <circle cx="420" cy="380" r="5" fill="#6aafe8"/>
  <text x="435" y="376" fill="#fff" font-size="8">MJ Warner</text>

  <!-- Eddie Griffin -->
  <circle cx="480" cy="420" r="4" fill="#b88ae8"/>
  <text x="495" y="416" fill="#bbb" font-size="7">Eddie Griffin</text>

  <!-- Telma Hopkins -->
  <circle cx="460" cy="480" r="7" fill="#6aafe8"/>
  <text x="460" y="498" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Telma Hopkins</text>

  <!-- ESSENCE ATKINS — big hub -->
  <circle cx="600" cy="540" r="9" fill="#E8B923"/>
  <text x="600" y="558" text-anchor="middle" fill="#E8B923" font-size="9" font-weight="700">Essence Atkins</text>

  <!-- Marlon Wayans -->
  <circle cx="820" cy="140" r="5" fill="#b88ae8"/>
  <text x="820" y="130" text-anchor="middle" fill="#fff" font-size="8">Marlon Wayans</text>

  <!-- Shawn Wayans -->
  <circle cx="900" cy="80" r="4" fill="#b88ae8"/>
  <text x="900" y="70" text-anchor="middle" fill="#bbb" font-size="7">Shawn Wayans</text>

  <!-- Tracee Ellis Ross — connected to Girlfriends + Black-ish -->
  <circle cx="860" cy="320" r="6" fill="#e8d86a"/>
  <text x="860" y="340" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Tracee Ellis Ross</text>

  <!-- ISOLATED: Will Smith -->
  <circle cx="920" cy="560" r="5" fill="#b88ae8" opacity="0.5"/>
  <text x="920" y="578" text-anchor="middle" fill="#666" font-size="7">Will Smith</text>
  <text x="920" y="588" text-anchor="middle" fill="#444" font-size="6">(Fresh Prince — isolated)</text>

  <!-- ISOLATED: Issa Rae -->
  <circle cx="920" cy="620" r="4" fill="#e8d86a" opacity="0.5"/>
  <text x="920" y="638" text-anchor="middle" fill="#666" font-size="7">Issa Rae</text>
  <text x="920" y="648" text-anchor="middle" fill="#444" font-size="6">(Insecure — isolated)</text>

  <!-- ISOLATED: Donald Glover -->
  <circle cx="920" cy="670" r="4" fill="#e8d86a" opacity="0.5"/>
  <text x="920" y="688" text-anchor="middle" fill="#666" font-size="7">Donald Glover</text>
  <text x="920" y="698" text-anchor="middle" fill="#444" font-size="6">(Atlanta — isolated)</text>

</svg>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BTU Network Map — First Pass</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0a0a12;
  color: #e8e8e8;
  font-family: 'DM Sans', sans-serif;
  padding: 40px 24px 80px;
}

h1 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem;
  color: #E8B923;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 32px;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  margin-bottom: 24px;
  font-size: 0.65rem;
  color: #999;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.legend-swatch {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* --- MATRIX TABLE --- */
.matrix-section {
  margin-bottom: 48px;
}

.matrix-section h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  color: #E8B923;
  margin-bottom: 4px;
}

.matrix-section .section-sub {
  font-size: 0.65rem;
  color: #666;
  margin-bottom: 16px;
}

.matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.72rem;
}

.matrix-table th {
  text-align: left;
  font-weight: 700;
  color: #E8B923;
  padding: 6px 10px;
  border-bottom: 1px solid #2a2a3a;
  white-space: nowrap;
}

.matrix-table td {
  padding: 5px 10px;
  border-bottom: 1px solid #16162a;
  vertical-align: top;
  color: #ccc;
}

.matrix-table tr:hover td {
  background: #12122a;
}

.actor-name {
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
}

.show-tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.6rem;
  margin: 1px 2px;
  white-space: nowrap;
}

.decade-70s { background: #3d1a08; color: #e8944a; }
.decade-80s { background: #1a2a3d; color: #6aafe8; }
.decade-90s { background: #2a1a3d; color: #b88ae8; }
.decade-00s { background: #1a3d2a; color: #6ae8a0; }
.decade-10s { background: #3d3a1a; color: #e8d86a; }
.decade-20s { background: #3d1a2a; color: #e86a9a; }

.hub-count {
  font-weight: 700;
  color: #E8B923;
  text-align: center;
}

/* --- CONNECTIONS LIST --- */
.connections-section {
  margin-bottom: 48px;
}

.connections-section h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  color: #E8B923;
  margin-bottom: 4px;
}

.connections-section .section-sub {
  font-size: 0.65rem;
  color: #666;
  margin-bottom: 16px;
}

.show-connections {
  margin-bottom: 20px;
  padding: 14px 16px;
  background: #111128;
  border-left: 3px solid #E8B923;
}

.show-connections h3 {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2px;
}

.show-connections .show-meta {
  font-size: 0.62rem;
  color: #777;
  margin-bottom: 8px;
}

.show-connections .cast-list {
  font-size: 0.7rem;
  color: #bbb;
  line-height: 1.7;
}

.cast-list .also-on {
  color: #E8B923;
  font-weight: 500;
}

/* --- MOST CONNECTED --- */
.top-hubs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 48px;
}

.hub-card {
  background: #111128;
  border-top: 3px solid #E8B923;
  padding: 14px 16px;
}

.hub-card .hub-name {
  font-family: 'DM Serif Display', serif;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 2px;
}

.hub-card .hub-decade {
  font-size: 0.6rem;
  color: #888;
  margin-bottom: 8px;
}

.hub-card .hub-stat {
  font-size: 1.6rem;
  font-weight: 700;
  color: #E8B923;
  line-height: 1;
  margin-bottom: 2px;
}

.hub-card .hub-stat-label {
  font-size: 0.6rem;
  color: #888;
  margin-bottom: 10px;
}

.hub-card .hub-shows {
  font-size: 0.62rem;
  color: #bbb;
  line-height: 1.6;
}

.footnote {
  font-size: 0.6rem;
  color: #555;
  border-top: 1px solid #1e1e3a;
  padding-top: 14px;
  margin-top: 40px;
  line-height: 1.7;
}
</style>
</head>
<body>

<h1>The Black Television Universe</h1>
<p class="subtitle">First-pass network map &middot; Actor-to-show matrix &middot; 28 shows, 45+ actors &middot; 1972&ndash;present</p>

<div class="legend">
  <div class="legend-item"><span class="legend-swatch" style="background:#e8944a"></span> 1970s</div>
  <div class="legend-item"><span class="legend-swatch" style="background:#6aafe8"></span> 1980s</div>
  <div class="legend-item"><span class="legend-swatch" style="background:#b88ae8"></span> 1990s</div>
  <div class="legend-item"><span class="legend-swatch" style="background:#6ae8a0"></span> 2000s</div>
  <div class="legend-item"><span class="legend-swatch" style="background:#e8d86a"></span> 2010s</div>
  <div class="legend-item"><span class="legend-swatch" style="background:#e86a9a"></span> 2020s</div>
</div>

<!-- =========================================
     SECTION 1: TOP HUBS (MOST CONNECTED ACTORS)
     ========================================= -->

<div class="matrix-section">
  <h2>Most Connected Actors</h2>
  <p class="section-sub">Ranked by number of qualifying shows in the BTU network</p>
</div>

<div class="top-hubs">

  <div class="hub-card">
    <div class="hub-name">Jackée Harry</div>
    <div class="hub-decade">Started 1980s</div>
    <div class="hub-stat">4</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">227 &middot; Sister Sister &middot; Everybody Hates Chris &middot; The Ms. Pat Show</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Tichina Arnold</div>
    <div class="hub-decade">Started 1990s</div>
    <div class="hub-stat">3</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Martin &middot; Everybody Hates Chris &middot; The Neighborhood</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Marla Gibbs</div>
    <div class="hub-decade">Started 1970s</div>
    <div class="hub-stat">3</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">The Jeffersons &middot; 227 &middot; The Hughleys</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Telma Hopkins</div>
    <div class="hub-decade">Started 1980s</div>
    <div class="hub-stat">3</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Family Matters &middot; Half &amp; Half &middot; Are We There Yet?</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Essence Atkins</div>
    <div class="hub-decade">Started 1990s</div>
    <div class="hub-stat">4</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Smart Guy &middot; Half &amp; Half &middot; Are We There Yet? &middot; Marlon</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Hal Williams</div>
    <div class="hub-decade">Started 1970s</div>
    <div class="hub-stat">2</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Sanford and Son &middot; 227</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Tisha Campbell</div>
    <div class="hub-decade">Started 1990s</div>
    <div class="hub-stat">2</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Martin &middot; My Wife and Kids</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Kim Fields</div>
    <div class="hub-decade">Started 1970s</div>
    <div class="hub-stat">3</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">The Facts of Life &middot; Living Single &middot; The Upshaws</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Jenifer Lewis</div>
    <div class="hub-decade">Started 2010s (lead)</div>
    <div class="hub-stat">2</div>
    <div class="hub-stat-label">qualifying lead/recurring shows</div>
    <div class="hub-shows">Black-ish &middot; (decades of guest roles across BTU)</div>
  </div>

  <div class="hub-card">
    <div class="hub-name">Terry Crews</div>
    <div class="hub-decade">Started 2000s</div>
    <div class="hub-stat">2</div>
    <div class="hub-stat-label">qualifying shows</div>
    <div class="hub-shows">Everybody Hates Chris &middot; Are We There Yet?</div>
  </div>

</div>

<!-- =========================================
     SECTION 2: FULL ACTOR-SHOW MATRIX
     ========================================= -->

<div class="matrix-section">
  <h2>Actor–Show Matrix</h2>
  <p class="section-sub">Every actor and every qualifying show they appeared on &middot; Main or recurring cast only &middot; Sorted by decade started</p>
</div>

<div style="overflow-x:auto; margin-bottom: 48px;">
<table class="matrix-table">
<thead>
  <tr>
    <th>Actor</th>
    <th>Decade Started</th>
    <th>Shows (with decade tags)</th>
    <th style="text-align:center">Count</th>
  </tr>
</thead>
<tbody>
  <!-- 1970s starters -->
  <tr>
    <td class="actor-name">Redd Foxx</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">Sanford and Son (1972)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Hal Williams</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">Sanford and Son (1972)</span> <span class="show-tag decade-80s">227 (1985)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Sherman Hemsley</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">The Jeffersons (1975)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Isabel Sanford</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">The Jeffersons (1975)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Marla Gibbs</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">The Jeffersons (1975)</span> <span class="show-tag decade-80s">227 (1985)</span> <span class="show-tag decade-90s">The Hughleys (1998)</span></td>
    <td class="hub-count">3</td>
  </tr>
  <tr>
    <td class="actor-name">Kim Fields</td>
    <td>1970s</td>
    <td><span class="show-tag decade-70s">The Facts of Life (1979)</span> <span class="show-tag decade-90s">Living Single (1993)</span> <span class="show-tag decade-20s">The Upshaws (2021)</span></td>
    <td class="hub-count">3</td>
  </tr>
  <!-- 1980s starters -->
  <tr>
    <td class="actor-name">Jackée Harry</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">227 (1985)</span> <span class="show-tag decade-90s">Sister Sister (1994)</span> <span class="show-tag decade-00s">Everybody Hates Chris (2005)</span> <span class="show-tag decade-20s">The Ms. Pat Show (2022)</span></td>
    <td class="hub-count">4</td>
  </tr>
  <tr>
    <td class="actor-name">Regina King</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">227 (1985)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Phylicia Rashad</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">The Cosby Show (1984)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Malcolm-Jamal Warner</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">The Cosby Show (1984)</span> <span class="show-tag decade-90s">Malcolm &amp; Eddie (1996)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Keshia Knight Pulliam</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">The Cosby Show (1984)</span> <span class="show-tag decade-00s">House of Payne (2006)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Lisa Bonet</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">The Cosby Show (1984)</span> <span class="show-tag decade-80s">A Different World (1987)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Jasmine Guy</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">A Different World (1987)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Kadeem Hardison</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">A Different World (1987)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Telma Hopkins</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">Family Matters (1989)</span> <span class="show-tag decade-00s">Half &amp; Half (2002)</span> <span class="show-tag decade-10s">Are We There Yet? (2010)</span></td>
    <td class="hub-count">3</td>
  </tr>
  <tr>
    <td class="actor-name">Jaleel White</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">Family Matters (1989)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Jo Marie Payton</td>
    <td>1980s</td>
    <td><span class="show-tag decade-80s">Family Matters (1989)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <!-- 1990s starters -->
  <tr>
    <td class="actor-name">Will Smith</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Fresh Prince (1990)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Alfonso Ribeiro</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Fresh Prince (1990)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Tatyana Ali</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Fresh Prince (1990)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Martin Lawrence</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Martin (1992)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Tisha Campbell</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Martin (1992)</span> <span class="show-tag decade-00s">My Wife and Kids (2001)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Tichina Arnold</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Martin (1992)</span> <span class="show-tag decade-00s">Everybody Hates Chris (2005)</span> <span class="show-tag decade-10s">The Neighborhood (2018)</span></td>
    <td class="hub-count">3</td>
  </tr>
  <tr>
    <td class="actor-name">Queen Latifah</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Living Single (1993)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Erika Alexander</td>
    <td>1990s</td>
    <td><span class="show-tag decade-80s">The Cosby Show (1990, recurring as Pam)</span> <span class="show-tag decade-90s">Living Single (1993)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Kim Coles</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Living Single (1993)</span> <span class="show-tag decade-90s">In the House (1995)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Tia Mowry</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Sister Sister (1994)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Tamera Mowry</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Sister Sister (1994)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Tim Reid</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Sister Sister (1994)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Brandy</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Moesha (1996)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Sheryl Lee Ralph</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Moesha (1996, recurring)</span> <span class="show-tag decade-20s">Abbott Elementary (2021)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Countess Vaughn</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Moesha (1996)</span> <span class="show-tag decade-90s">The Parkers (1999)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Mo'Nique</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Parkers (1999)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Eddie Griffin</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Malcolm &amp; Eddie (1996)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">D.L. Hughley</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Hughleys (1998)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Damon Wayans</td>
    <td>1990s</td>
    <td><span class="show-tag decade-00s">My Wife and Kids (2001)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Essence Atkins</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Smart Guy (1997)</span> <span class="show-tag decade-00s">Half &amp; Half (2002)</span> <span class="show-tag decade-10s">Are We There Yet? (2010)</span> <span class="show-tag decade-10s">Marlon (2017)</span></td>
    <td class="hub-count">4</td>
  </tr>
  <tr>
    <td class="actor-name">Tahj Mowry</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">Smart Guy (1997)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <!-- 2000s starters -->
  <tr>
    <td class="actor-name">Terry Crews</td>
    <td>2000s</td>
    <td><span class="show-tag decade-00s">Everybody Hates Chris (2005)</span> <span class="show-tag decade-10s">Are We There Yet? (2010)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Tyler James Williams</td>
    <td>2000s</td>
    <td><span class="show-tag decade-00s">Everybody Hates Chris (2005)</span> <span class="show-tag decade-20s">Abbott Elementary (2021)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Marlon Wayans</td>
    <td>2000s</td>
    <td><span class="show-tag decade-90s">The Wayans Bros. (1995)</span> <span class="show-tag decade-10s">Marlon (2017)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Shawn Wayans</td>
    <td>1990s</td>
    <td><span class="show-tag decade-90s">The Wayans Bros. (1995)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <!-- 2010s starters -->
  <tr>
    <td class="actor-name">Anthony Anderson</td>
    <td>2010s</td>
    <td><span class="show-tag decade-10s">Black-ish (2014)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Tracee Ellis Ross</td>
    <td>2010s</td>
    <td><span class="show-tag decade-90s">Girlfriends (2000)</span> <span class="show-tag decade-10s">Black-ish (2014)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Yara Shahidi</td>
    <td>2010s</td>
    <td><span class="show-tag decade-10s">Black-ish (2014)</span> <span class="show-tag decade-10s">grown-ish (2018)</span></td>
    <td class="hub-count">2</td>
  </tr>
  <tr>
    <td class="actor-name">Cedric the Entertainer</td>
    <td>2010s</td>
    <td><span class="show-tag decade-10s">The Neighborhood (2018)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Issa Rae</td>
    <td>2010s</td>
    <td><span class="show-tag decade-10s">Insecure (2016)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <tr>
    <td class="actor-name">Donald Glover</td>
    <td>2010s</td>
    <td><span class="show-tag decade-10s">Atlanta (2016)</span></td>
    <td class="hub-count">1</td>
  </tr>
  <!-- 2020s starters -->
  <tr>
    <td class="actor-name">Quinta Brunson</td>
    <td>2020s</td>
    <td><span class="show-tag decade-20s">Abbott Elementary (2021)</span></td>
    <td class="hub-count">1</td>
  </tr>
</tbody>
</table>
</div>

<!-- =========================================
     SECTION 3: SHOW-BY-SHOW CONNECTIONS
     ========================================= -->

<div class="connections-section">
  <h2>Show-by-Show Cast Connections</h2>
  <p class="section-sub">For each show: who was in the cast, and what other BTU shows they connect to</p>
</div>

<div class="show-connections">
  <h3>Sanford and Son</h3>
  <div class="show-meta">NBC &middot; 1972–1977 &middot; 6 seasons</div>
  <div class="cast-list">
    Redd Foxx (Fred Sanford) &mdash; no other BTU shows<br>
    <strong>Hal Williams</strong> (Officer Smitty) &mdash; <span class="also-on">also on 227</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Jeffersons</h3>
  <div class="show-meta">CBS &middot; 1975–1985 &middot; 11 seasons</div>
  <div class="cast-list">
    Sherman Hemsley (George Jefferson) &mdash; no other qualifying BTU shows<br>
    Isabel Sanford (Louise Jefferson) &mdash; no other qualifying BTU shows<br>
    <strong>Marla Gibbs</strong> (Florence Johnston) &mdash; <span class="also-on">also on 227, The Hughleys</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Cosby Show</h3>
  <div class="show-meta">NBC &middot; 1984–1992 &middot; 8 seasons</div>
  <div class="cast-list">
    Phylicia Rashad (Clair Huxtable)<br>
    <strong>Malcolm-Jamal Warner</strong> (Theo) &mdash; <span class="also-on">also on Malcolm &amp; Eddie</span><br>
    <strong>Lisa Bonet</strong> (Denise) &mdash; <span class="also-on">also on A Different World</span><br>
    <strong>Keshia Knight Pulliam</strong> (Rudy) &mdash; <span class="also-on">also on House of Payne</span><br>
    <strong>Erika Alexander</strong> (Pam Tucker, recurring) &mdash; <span class="also-on">also on Living Single</span><br>
    <strong>Essence Atkins</strong> (guest) &mdash; <span class="also-on">also on Smart Guy, Half &amp; Half, Are We There Yet?, Marlon</span>
  </div>
</div>

<div class="show-connections">
  <h3>227</h3>
  <div class="show-meta">NBC &middot; 1985–1990 &middot; 5 seasons</div>
  <div class="cast-list">
    <strong>Marla Gibbs</strong> (Mary Jenkins) &mdash; <span class="also-on">also on The Jeffersons, The Hughleys</span><br>
    <strong>Hal Williams</strong> (Lester Jenkins) &mdash; <span class="also-on">also on Sanford and Son</span><br>
    <strong>Jackée Harry</strong> (Sandra Clark) &mdash; <span class="also-on">also on Sister Sister, Everybody Hates Chris, The Ms. Pat Show</span><br>
    <strong>Regina King</strong> (Brenda Jenkins) &mdash; launched here, career moved to drama
  </div>
</div>

<div class="show-connections">
  <h3>A Different World</h3>
  <div class="show-meta">NBC &middot; 1987–1993 &middot; 6 seasons</div>
  <div class="cast-list">
    <strong>Lisa Bonet</strong> (Denise Huxtable, season 1) &mdash; <span class="also-on">also on The Cosby Show</span><br>
    Jasmine Guy (Whitley Gilbert)<br>
    Kadeem Hardison (Dwayne Wayne)<br>
    Debbie Allen (director/producer) &mdash; <span class="also-on">also directed Black-ish episodes</span>
  </div>
</div>

<div class="show-connections">
  <h3>Family Matters</h3>
  <div class="show-meta">ABC/CBS &middot; 1989–1998 &middot; 9 seasons</div>
  <div class="cast-list">
    Jaleel White (Steve Urkel)<br>
    Jo Marie Payton (Harriette Winslow)<br>
    <strong>Telma Hopkins</strong> (Aunt Rachel, recurring) &mdash; <span class="also-on">also on Half &amp; Half, Are We There Yet?</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Fresh Prince of Bel-Air</h3>
  <div class="show-meta">NBC &middot; 1990–1996 &middot; 6 seasons</div>
  <div class="cast-list">
    Will Smith (Will)<br>
    Alfonso Ribeiro (Carlton)<br>
    Tatyana Ali (Ashley)
  </div>
</div>

<div class="show-connections">
  <h3>Martin</h3>
  <div class="show-meta">Fox &middot; 1992–1997 &middot; 5 seasons</div>
  <div class="cast-list">
    Martin Lawrence (Martin Payne)<br>
    <strong>Tisha Campbell</strong> (Gina Waters) &mdash; <span class="also-on">also on My Wife and Kids</span><br>
    <strong>Tichina Arnold</strong> (Pam James) &mdash; <span class="also-on">also on Everybody Hates Chris, The Neighborhood</span>
  </div>
</div>

<div class="show-connections">
  <h3>Living Single</h3>
  <div class="show-meta">Fox &middot; 1993–1998 &middot; 5 seasons</div>
  <div class="cast-list">
    Queen Latifah (Khadijah James)<br>
    <strong>Erika Alexander</strong> (Maxine Shaw) &mdash; <span class="also-on">also on The Cosby Show (recurring)</span><br>
    <strong>Kim Fields</strong> (Regine Hunter) &mdash; <span class="also-on">also on The Facts of Life, The Upshaws</span><br>
    <strong>Kim Coles</strong> (Synclaire James) &mdash; <span class="also-on">also on In the House</span>
  </div>
</div>

<div class="show-connections">
  <h3>Sister Sister</h3>
  <div class="show-meta">ABC/WB &middot; 1994–1999 &middot; 6 seasons</div>
  <div class="cast-list">
    Tia Mowry (Tia Landry)<br>
    Tamera Mowry (Tamera Campbell)<br>
    <strong>Jackée Harry</strong> (Lisa Landry) &mdash; <span class="also-on">also on 227, Everybody Hates Chris, The Ms. Pat Show</span><br>
    Tim Reid (Ray Campbell)
  </div>
</div>

<div class="show-connections">
  <h3>Moesha</h3>
  <div class="show-meta">UPN &middot; 1996–2001 &middot; 6 seasons</div>
  <div class="cast-list">
    Brandy (Moesha Mitchell)<br>
    <strong>Sheryl Lee Ralph</strong> (Dee Mitchell, recurring) &mdash; <span class="also-on">also on Abbott Elementary</span><br>
    <strong>Countess Vaughn</strong> (Kim Parker) &mdash; <span class="also-on">also on The Parkers</span>
  </div>
</div>

<div class="show-connections">
  <h3>Malcolm &amp; Eddie</h3>
  <div class="show-meta">UPN &middot; 1996–2000 &middot; 4 seasons</div>
  <div class="cast-list">
    <strong>Malcolm-Jamal Warner</strong> (Malcolm McGee) &mdash; <span class="also-on">also on The Cosby Show</span><br>
    Eddie Griffin (Eddie Sherman)
  </div>
</div>

<div class="show-connections">
  <h3>Smart Guy</h3>
  <div class="show-meta">WB &middot; 1997–1999 &middot; 3 seasons</div>
  <div class="cast-list">
    Tahj Mowry (T.J. Henderson)<br>
    <strong>Essence Atkins</strong> (Tasha Henderson) &mdash; <span class="also-on">also on Half &amp; Half, Are We There Yet?, Marlon</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Hughleys</h3>
  <div class="show-meta">ABC/UPN &middot; 1998–2002 &middot; 4 seasons</div>
  <div class="cast-list">
    D.L. Hughley (Darryl Hughley)<br>
    <strong>Marla Gibbs</strong> (Millie, recurring) &mdash; <span class="also-on">also on The Jeffersons, 227</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Parkers</h3>
  <div class="show-meta">UPN &middot; 1999–2004 &middot; 5 seasons</div>
  <div class="cast-list">
    Mo'Nique (Nikki Parker)<br>
    <strong>Countess Vaughn</strong> (Kim Parker) &mdash; <span class="also-on">also on Moesha</span>
  </div>
</div>

<div class="show-connections">
  <h3>Girlfriends</h3>
  <div class="show-meta">UPN/CW &middot; 2000–2008 &middot; 8 seasons</div>
  <div class="cast-list">
    <strong>Tracee Ellis Ross</strong> (Joan Clayton) &mdash; <span class="also-on">also on Black-ish</span>
  </div>
</div>

<div class="show-connections">
  <h3>My Wife and Kids</h3>
  <div class="show-meta">ABC &middot; 2001–2005 &middot; 5 seasons</div>
  <div class="cast-list">
    Damon Wayans (Michael Kyle)<br>
    <strong>Tisha Campbell</strong> (Jay Kyle) &mdash; <span class="also-on">also on Martin</span>
  </div>
</div>

<div class="show-connections">
  <h3>Half &amp; Half</h3>
  <div class="show-meta">UPN &middot; 2002–2006 &middot; 4 seasons</div>
  <div class="cast-list">
    Rachel True (Mona Thorne)<br>
    <strong>Essence Atkins</strong> (Dee Dee Thorne) &mdash; <span class="also-on">also on Smart Guy, Are We There Yet?, Marlon</span><br>
    <strong>Telma Hopkins</strong> (Phyllis Thorne) &mdash; <span class="also-on">also on Family Matters, Are We There Yet?</span><br>
    Valarie Pettiford (Big Dee Dee Thorne)
  </div>
</div>

<div class="show-connections">
  <h3>Everybody Hates Chris</h3>
  <div class="show-meta">UPN/CW &middot; 2005–2009 &middot; 4 seasons</div>
  <div class="cast-list">
    <strong>Tyler James Williams</strong> (Chris) &mdash; <span class="also-on">also on Abbott Elementary</span><br>
    <strong>Terry Crews</strong> (Julius) &mdash; <span class="also-on">also on Are We There Yet?</span><br>
    <strong>Tichina Arnold</strong> (Rochelle) &mdash; <span class="also-on">also on Martin, The Neighborhood</span><br>
    <strong>Jackée Harry</strong> (recurring) &mdash; <span class="also-on">also on 227, Sister Sister, The Ms. Pat Show</span>
  </div>
</div>

<div class="show-connections">
  <h3>Are We There Yet?</h3>
  <div class="show-meta">TBS &middot; 2010–2013 &middot; 3 seasons</div>
  <div class="cast-list">
    <strong>Terry Crews</strong> (Nick Persons) &mdash; <span class="also-on">also on Everybody Hates Chris</span><br>
    <strong>Essence Atkins</strong> (Suzanne Kingston-Persons) &mdash; <span class="also-on">also on Smart Guy, Half &amp; Half, Marlon</span><br>
    <strong>Telma Hopkins</strong> (Miss Mildred) &mdash; <span class="also-on">also on Family Matters, Half &amp; Half</span>
  </div>
</div>

<div class="show-connections">
  <h3>Black-ish</h3>
  <div class="show-meta">ABC &middot; 2014–2022 &middot; 8 seasons</div>
  <div class="cast-list">
    Anthony Anderson (Dre Johnson)<br>
    <strong>Tracee Ellis Ross</strong> (Bow Johnson) &mdash; <span class="also-on">also on Girlfriends</span><br>
    <strong>Yara Shahidi</strong> (Zoey Johnson) &mdash; <span class="also-on">also on grown-ish</span><br>
    Jenifer Lewis (Ruby Johnson)<br>
    Debbie Allen (director, multiple episodes) &mdash; <span class="also-on">also directed A Different World</span>
  </div>
</div>

<div class="show-connections">
  <h3>grown-ish</h3>
  <div class="show-meta">Freeform &middot; 2018–2024 &middot; 6 seasons</div>
  <div class="cast-list">
    <strong>Yara Shahidi</strong> (Zoey Johnson) &mdash; <span class="also-on">also on Black-ish</span>
  </div>
</div>

<div class="show-connections">
  <h3>Marlon</h3>
  <div class="show-meta">NBC &middot; 2017–2018 &middot; 2 seasons</div>
  <div class="cast-list">
    <strong>Marlon Wayans</strong> (Marlon Wayne) &mdash; <span class="also-on">also on The Wayans Bros.</span><br>
    <strong>Essence Atkins</strong> (Ashley Wayne) &mdash; <span class="also-on">also on Smart Guy, Half &amp; Half, Are We There Yet?</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Wayans Bros.</h3>
  <div class="show-meta">WB &middot; 1995–1999 &middot; 5 seasons</div>
  <div class="cast-list">
    <strong>Marlon Wayans</strong> (Marlon Williams) &mdash; <span class="also-on">also on Marlon</span><br>
    Shawn Wayans (Shawn Williams)
  </div>
</div>

<div class="show-connections">
  <h3>The Neighborhood</h3>
  <div class="show-meta">CBS &middot; 2018–present &middot; 7+ seasons</div>
  <div class="cast-list">
    Cedric the Entertainer (Calvin Butler)<br>
    <strong>Tichina Arnold</strong> (Tina Butler) &mdash; <span class="also-on">also on Martin, Everybody Hates Chris</span>
  </div>
</div>

<div class="show-connections">
  <h3>Abbott Elementary</h3>
  <div class="show-meta">ABC &middot; 2021–present &middot; 4+ seasons</div>
  <div class="cast-list">
    Quinta Brunson (Janine Teagues)<br>
    <strong>Tyler James Williams</strong> (Gregory Eddie) &mdash; <span class="also-on">also on Everybody Hates Chris</span><br>
    <strong>Sheryl Lee Ralph</strong> (Barbara Howard) &mdash; <span class="also-on">also on Moesha</span>
  </div>
</div>

<div class="show-connections">
  <h3>The Upshaws</h3>
  <div class="show-meta">Netflix &middot; 2021–present &middot; 5+ seasons</div>
  <div class="cast-list">
    <strong>Kim Fields</strong> (Regina Upshaw) &mdash; <span class="also-on">also on The Facts of Life, Living Single</span><br>
    Wanda Sykes (Lucretia Turner)
  </div>
</div>

<div class="show-connections">
  <h3>The Ms. Pat Show</h3>
  <div class="show-meta">BET+ &middot; 2022–present &middot; 4+ seasons</div>
  <div class="cast-list">
    Ms. Pat (Patricia Carson)<br>
    <strong>Jackée Harry</strong> (recurring) &mdash; <span class="also-on">also on 227, Sister Sister, Everybody Hates Chris</span>
  </div>
</div>

<!-- =========================================
     SECTION 4: VERIFIED PATHS (from the matrix)
     ========================================= -->

<div class="connections-section" style="margin-top: 48px;">
  <h2>Verified Paths</h2>
  <p class="section-sub">Person-to-person chains, traced through the matrix above. Every link is an actor who appeared on both shows.</p>
</div>

<div class="show-connections">
  <h3>Redd Foxx → Cedric the Entertainer</h3>
  <div class="show-meta">1972 → present &middot; 5 people &middot; 4 shows &middot; all 3 generational buckets</div>
  <div class="cast-list">
    <strong>Redd Foxx</strong> → (Sanford and Son) → <strong>Hal Williams</strong> → (227) → <strong>Jackée Harry</strong> → (Everybody Hates Chris) → <strong>Tichina Arnold</strong> → (The Neighborhood) → <strong>Cedric the Entertainer</strong>
  </div>
</div>

<div class="show-connections">
  <h3>Redd Foxx → Regina King</h3>
  <div class="show-meta">1972 → 1985 &middot; 3 people &middot; 2 shows</div>
  <div class="cast-list">
    <strong>Redd Foxx</strong> → (Sanford and Son) → <strong>Hal Williams</strong> → (227) → <strong>Regina King</strong>
  </div>
</div>

<div class="show-connections">
  <h3>Sherman Hemsley → Tia Mowry</h3>
  <div class="show-meta">1975 → 1994 &middot; 4 people &middot; 3 shows</div>
  <div class="cast-list">
    <strong>Sherman Hemsley</strong> → (The Jeffersons) → <strong>Marla Gibbs</strong> → (227) → <strong>Jackée Harry</strong> → (Sister Sister) → <strong>Tia Mowry</strong>
  </div>
</div>

<div class="show-connections">
  <h3>Sherman Hemsley → Quinta Brunson</h3>
  <div class="show-meta">1975 → 2021 &middot; 6 people &middot; 5 shows &middot; all 3 buckets</div>
  <div class="cast-list">
    <strong>Sherman Hemsley</strong> → (The Jeffersons) → <strong>Marla Gibbs</strong> → (227) → <strong>Jackée Harry</strong> → (Everybody Hates Chris) → <strong>Tyler James Williams</strong> → (Abbott Elementary) → <strong>Quinta Brunson</strong>
  </div>
</div>

<div class="show-connections">
  <h3>Jaleel White → Quinta Brunson</h3>
  <div class="show-meta">1989 → 2021 &middot; 5 people &middot; 4 shows</div>
  <div class="cast-list">
    <strong>Jaleel White</strong> → (Family Matters) → <strong>Telma Hopkins</strong> → (Half &amp; Half) → <strong>Essence Atkins</strong> → (Are We There Yet?) → <strong>Terry Crews</strong> → (Everybody Hates Chris) → <strong>Tyler James Williams</strong> → (Abbott Elementary) → <strong>Quinta Brunson</strong><br>
    <em style="color:#888; font-size: 0.65rem;">Alternate: Jaleel White → (Family Matters) → Telma Hopkins → (Are We There Yet?) → Terry Crews → (EHC) → Tyler James Williams → (Abbott) → Quinta Brunson</em>
  </div>
</div>

<div class="show-connections">
  <h3>Phylicia Rashad → Tracee Ellis Ross</h3>
  <div class="show-meta">1984 → 2014 &middot; 3 people &middot; 3 shows (via Debbie Allen as director)</div>
  <div class="cast-list">
    <strong>Phylicia Rashad</strong> → (The Cosby Show) → <strong>Lisa Bonet</strong> → (A Different World) → <strong>Debbie Allen</strong> (director) → (Black-ish, director) → <strong>Tracee Ellis Ross</strong><br>
    <em style="color:#888; font-size: 0.65rem;">Note: Allen link is as director/producer, not cast. Still valid for the BTU — she shaped both shows.</em>
  </div>
</div>

<div class="show-connections">
  <h3>Brandy → Quinta Brunson</h3>
  <div class="show-meta">1996 → 2021 &middot; 3 people &middot; 2 shows</div>
  <div class="cast-list">
    <strong>Brandy</strong> → (Moesha) → <strong>Sheryl Lee Ralph</strong> → (Abbott Elementary) → <strong>Quinta Brunson</strong>
  </div>
</div>

<div class="show-connections">
  <h3>Martin Lawrence → Kim Fields</h3>
  <div class="show-meta">1992 → 2021 &middot; Multiple pathways</div>
  <div class="cast-list">
    <strong>Path A:</strong> <strong>Martin Lawrence</strong> → (Martin) → <strong>Tichina Arnold</strong> → (Everybody Hates Chris) → <strong>Jackée Harry</strong> → (Sister Sister) → ... needs link to Living Single cast or The Upshaws<br>
    <em style="color:#888; font-size: 0.65rem;">Flag: no clean verified path yet. This gap suggests Martin and Living Single, despite both being Fox 90s shows, are surprisingly disconnected in the cast network.</em>
  </div>
</div>

<div class="show-connections">
  <h3>Half &amp; Half as Crossroads</h3>
  <div class="show-meta">Connects 7 other BTU shows through its cast alone</div>
  <div class="cast-list">
    Via <strong>Essence Atkins</strong>: Smart Guy, Are We There Yet?, Marlon (+ Cosby Show guest)<br>
    Via <strong>Telma Hopkins</strong>: Family Matters, Are We There Yet?<br>
    Via Yvette Lee Bowser (creator): also created Living Single<br>
    <em style="color:#888; font-size: 0.65rem;">Half &amp; Half connects to 7 shows through 2 cast members and 1 creator. It is the most connected show relative to its cast size in the BTU.</em>
  </div>
</div>

<p class="footnote">
  <strong>BTU Network Map — First Pass</strong><br>
  This map is incomplete. It covers ~28 shows and ~45 actors. Major gaps: The Steve Harvey Show cast, The Jamie Foxx Show cast, One on One cast, The Game cast, Hangin' with Mr. Cooper cast, In the House cast, Roc cast, The Bernie Mac Show cast, House of Payne full cast, Insecure cast connections, Atlanta cast connections, Empire cast connections. Each of these shows likely adds new nodes and new connections to the network. The 90s UPN/WB cluster is especially underdeveloped — that era probably has the densest connections of any period in Black television.<br><br>
  Shows included must have 3+ seasons and be primarily Black-cast primetime television. Actors qualify with main or recurring roles (not single guest appearances). Decade started = decade of first qualifying BTU appearance.<br><br>
  Created for Alterrell Interactive &middot; Obsidian Futures &middot; May 2026
</p>

</body>
</html>