# BLACK SITCOMS — PIECE BRIEF
**Platform:** Obsidian Futures (cultural lane)
**Status:** Data collected · Concept stage · Not yet in research
**Last updated:** April 16, 2026
**URL target:** interactive.alterrell.com/black-sitcoms/

## OPEN QUESTIONS / ASSUMPTIONS TO VERIFY BEFORE BUILD
- [ ] The sitcom list compiled in session is broadcast-only.
  Is the piece broadcast-only or does it include cable/streaming?
  This decision changes the scope significantly.
  Recommendation: Part 1 = broadcast. Part 2 = cable/streaming.
- [ ] "90s UPN/WB boom" framing — is it accurate that UPN and
  The WB actively courted Black audiences to build brand?
  Source needed beyond general industry knowledge.
- [ ] The city data (LA, NYC, Chicago dominating) —
  is this based on show setting or production location?
  These are different claims. Clarify before using.
- [ ] "Rise and fall" framing — what is the evidence
  of the "fall"? The CW merger? Streaming fragmentation?
  The Tyler Perry consolidation to OWN/BET?
  Need a clear definition of what "fall" means here.
- [ ] Cable era scope: Tyler Perry library alone is enormous.
  How much of the cable era do we want to cover in Part 2?
- [ ] The creative family tree angle (mentioned in research) —
  actors from 90s sitcoms becoming prestige cable leads.
  This is a strong thread. Is it Part 1, Part 2, or its own piece?

## THESIS (working, not locked)
Black sitcoms didn't just entertain.
They named cities, created community, launched careers,
and built a map of Black American geography that
broadcast TV had never attempted before.
The data shows where that world was built,
when it collapsed, and what came after.

## DATA AVAILABLE
Full broadcast sitcom list compiled in session:
- 1950s–present, broadcast networks only
- Organized by: title, premiere year, seasons, network, city
- Covers ABC, CBS, NBC, FOX, UPN, The WB, The CW
- Cable/streaming list also compiled separately

City frequency analysis (from data):
Top 10 broadcast: LA, NYC, Chicago, Baltimore, DC,
Philadelphia, Detroit, Atlanta, San Francisco, Charlotte

Notable patterns:
- 90s boom driven by FOX, UPN, The WB courting Black audiences
- Chicago and Baltimore as "working class" sitcom hubs
- Brooklyn shift from Cosby Show (Heights) to later shows (Flatbush)
- Atlanta dominates cable era (tax credits + Tyler Perry Studios)
- Rural South almost invisible in broadcast, appears in OWN cable era

## INTERACTIVE CONCEPT (not yet locked)
Option A: Timeline + map
  Show where Black sitcoms were set by decade.
  Map lights up cities. Timeline shows volume by network era.
  Filters: decade, network, city.
Option B: Network era comparison
  FOX era vs. UPN/WB era vs. streaming era.
  What changed about Black representation in each?
Option C: Family tree
  Which shows spawned spinoffs, which actors crossed over,
  which cities kept appearing.

Recommendation: Option A as the core.
The map + timeline is visually distinctive and
tells the geographic story clearly.

## DESIGN
Obsidian Futures: #0a0a12 bg, #E8B923 gold.
Map would need a US map library (D3.js topojson).
This is technically more complex than naming piece charts.
Plan for 2-3 build sessions.

## DO NOT
- Do not conflate broadcast and cable in Part 1
- Do not claim a "fall" without defining what fell
- Do not start build without resolving broadcast vs.
  cable scope decision
- Do not underestimate the map build complexity