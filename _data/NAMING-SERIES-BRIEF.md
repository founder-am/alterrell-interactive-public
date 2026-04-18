# WHAT'S IN A NAME — SERIES BRIEF
**Platform:** Obsidian Futures · Cultural data storytelling lane
**Status:** Series in production · Parts 0, 1, 2 built · Part 3 planned
**Last updated:** April 16, 2026
**Series URL:** interactive.alterrell.com/what-in-a-name/
**Series landing page:** Builds after Part 3 ships. At that point
  /what-in-a-name/ becomes the index. Part 1 moves to
  /what-in-a-name/part-1/. Plan URL redirect in advance.

---

## THE SERIES ARGUMENT

Names aren't neutral. They carry race, class, religion, aspiration,
and history. For Black Americans specifically, the first name became
the primary site of cultural reclamation after enslavement stripped
the naming infrastructure — lineage surnames, regional identifiers,
tribal connections — that other cultures take for granted.

This series uses Social Security Administration baby name data
(1880–2020, with analysis focused on 1960–2019) to track how names
move in response to cultural events. The data records what parents
chose. It cannot record why. That tension — between what we can
measure and what we can only infer — is part of the argument.

**The thesis in one sentence:**
It's only ghetto until you're famous. The data agrees.
It just also shows you how long that takes, and how rarely
the structural penalty disappears entirely, even then.

---

## DATA INFRASTRUCTURE

**Primary source:** Social Security Administration baby name dataset
ssa.gov/oact/babynames/limits.html
Records names given to at least 5 babies per year in the US.
Covers 1880–2022. Analysis uses 1960–2019 for consistency.
Data cutoff: 2020. This is intentional and locked.
Do not incorporate post-2020 trends (e.g. Jaylen/Jalen NBA trend)
even when tempted. The cutoff protects editorial integrity.

**Raw files:** _data/naming/raw/yob{year}.txt
Format: Name,Gender,Count per line
Always read raw files for chart data. Never approximate from tier lists.

**Key reference files in _data/naming/:**
- tier1_master_list_COMPLETE.md — canonical rankings
- complete_tier_system.md — three-bucket framework
- sitcom_actor_crossreference.md — full cast analysis
- sitcom_names_analysis.md — character/actor data

---

## CONTEXTUALIZING THE NUMBERS

**Total US births by era (approximate):**
- 1986: ~3.7M total · ~500K Black births · ~250K Black baby girls
- 1990s: ~4M total · ~550K Black births · ~275K Black baby girls
- 2000s: ~4M total · ~550K Black births · ~275K Black baby girls

Black births = approximately 13.6% of total US births (CDC/March of Dimes)

**Standard framing for all episodes (locked):**
Express name peaks as "1 in X Black baby girls/boys" rather than
claiming or denying crossover. This is the more powerful frame
and does not require proving white family adoption.

| Name | Peak | Approx 1 in X Black baby girls |
|---|---|---|
| Whitney (1986) | 9,536 | 1 in 26 — one per elementary school class |
| Mariah (1996) | 5,446 | 1 in 46 — one per high school graduating class |
| Khadijah (1994) | 1,615 | 1 in 155 — one per large high school |
| Tatyana (1999) | 1,161 | 1 in 215 |
| Latifah (1990) | 300 | 1 in ~800 |
| Kobe (1996) — boys | 87 | 1 in ~2,500 Black baby boys |

**For male names:** Total Black baby boys ~275K-300K per year in peak eras.

---

## THE ARABIC/MUSLIM NAMES FOOTNOTE (required on all relevant episodes)

Names marked with Arabic or Muslim origin require this editorial note:

*"This name has Arabic/Muslim origins. Given that the total US Muslim
population was under 2 million in the early 1990s — with the majority
of Muslim immigration arriving after 1990 — and that 64% of American
converts to Islam are African American (Pew Research), the naming
spikes documented here are attributable primarily to Black American
communities, both Muslim and non-Muslim, choosing these names
for their cultural and spiritual resonance."*

Source: Pew Research Center 2011/2017; Islam in the United States Wikipedia

**Names requiring this footnote:**
Latifah, Khadijah, Aaliyah, Shaquille, Hakeem, Kareem, Kadeem,
Jamal, Malik, Kwame (Ghanaian/African origin — different note needed)

---

## KIDS TV / ANIMATION — EDITORIAL RULING (locked)

Kids TV and animation did not move names at the scale adult sitcoms did.
Reason: the audience watching (ages 8–14) was not yet naming children.
The lag between watching and naming is untestable without parental
intent data the SSA does not capture.

**Specific rulings:**
- Keesha (Magic School Bus 1994): Goes in Part 3 decline story.
  Name was already in freefall before the show. Show didn't move it.
- Kwame (Captain Planet 1990): Pull from SSA raw data in research pass.
  Likely small absolute numbers. Footnote in Part 9 if confirmed.
- Kenan (Kenan & Kel 1996): Pull from SSA raw data in research pass.
  Arabic origin. Footnote in Part 9 if confirmed.
- Gerald, Susie, Penny: Too common to track. Skip.
- Barney cast names: Generic. Not useful.
- Gullah Gullah Island (1994-1998): Cultural interest but reach
  likely too small to move SSA data. Research pass before committing.
- Lisa Turtle (Saved by the Bell): Lisa peaked 1962. Already in
  long decline before show aired 1989. Not attributable.

**No standalone animated/kids TV episode.** Material folds into
decline episode (Part 3) or Arabic names episode (Part 9) as
supporting footnotes only.

---

## FULL SERIES ARC (locked April 16, 2026)

### Part 0 — The Name Was Always Yours
**Status:** Built, pending deploy
**URL:** /what-in-a-name/part-0/
**Type:** Editorial essay, no charts
**Argument:** Context for the entire series. Black Americans were
stripped of the naming infrastructure other cultures take for granted.
The first name became the only available site of reclamation.
**Key beats:** Roots/Kunta Kinte → AMA's own name (Alterrell/Al) →
Mills as a locked door → -son/-dóttir traditions → name approval laws
→ first name as freedom → SSA methodology note
**Builds before:** Part 2 deploys

---

### Part 1 — The Fame Effect
**Status:** LIVE at /what-in-a-name/
**Type:** Data essay with 3 charts
**Argument:** Fame doesn't just make stars. It makes names safe
to give your child. Two mechanisms introduced: mainstream crossover
(Whitney, Mariah) vs. community authority (Latifah).
**Key data:** Whitney 9,536/16×, Mariah 5,446/25×, Latifah 300/26×
**Charts built:** whitney_houston.html, mariah_final.html,
living_single_indexed.html (Latifah line)
**Known fix pending:** Footer ☕ → $, duplicate sources

---

### Part 2 — The Living Room
**Status:** Built, pending deploy
**URL:** /what-in-a-name/part-2/
**Type:** Data essay with 3 charts
**Argument:** Sitcoms created two distinct patterns: character identity
moving a name (Whitley — the role's aspirational coding moved it,
not the actress) vs. actor fame moving a name (Alfonso — the person,
not the character Carlton). Counter-examples included and not
explained away.
**Key data:** Whitley 390×, Tatyana 111×, Kadeem 47×,
Khadijah 47×, Alfonso 2×, Carlton declining
**Charts:** living_single_indexed.html, jasmine_whitley_comparison.html,
alfonso_carlton_comparison.html
**Counter-examples:** Tisha Campbell (peaked 1971, Martin 1992 — no spike),
Tichina Arnold (same)
**Reader CTA:** "Were you named after one of these? Tell us on Substack."
No data collection on platform.

---

### Part 3 — The Keisha Effect
**Status:** Planned · Research pass needed
**URL:** /what-in-a-name/part-3/
**Position:** Episode 3 — placed here deliberately to ground the series.
Shows the pattern isn't always upward before the success stories pile up.
**Type:** Data essay with decline charts
**Argument:** Some names peaked in the 1970s-80s and declined as the
cultural moment that created them passed. The résumé callback studies
hit these names hardest. This is the dark side of naming-as-identity:
when the culture penalizes an era, the names carry that penalty.
**Key data:**
- Keisha/Keesha: peak ~1970s, long decline
- Tamika: peak ~1982, declining
- Latoya: peak ~1980s, declining
- Keesha (Magic School Bus 1994): name already declining,
  show did not arrest or reverse it
**Counter to decline:** Are any of these names experiencing revival?
Pull SSA data through 2019 to check. That data point — if it exists —
becomes the close.
**Résumé study connection:** Bertrand & Mullainathan 2003 (Lakisha,
Jamal) + Quillian 2017 meta-analysis. These studies use these names
specifically. Connect explicitly.
**OPEN:** Research pass on Keisha/Tamika/Latoya raw SSA data before build.

---

### Part 4 — Gone But Not Forgotten
**Status:** Planned
**URL:** /what-in-a-name/part-4/
**Type:** Data essay with 2 charts + 1 stat card
**Argument:** Death doesn't end a name's life. Sometimes it begins it.
**Key data:**
- Aaliyah: 471× — died 2001, peaked 2012. Pop culture posthumous effect.
- Zora Neale Hurston: 32× — died 1960, revived 2015–2019 through
  curriculum revival and literary canon. Literary posthumous effect.
- Two women, two completely different mechanisms, same pattern.
  Decades of lag time. The name outlived the person.
- Beyoncé as structural contrast: the only name in the dataset
  created from zero by a living person. The inverse of posthumous.
  A name willed into existence rather than one that outlived its bearer.
**Arabic note required:** Aaliyah is Arabic origin.
**OPEN:** Confirm Zora spike timing aligns with curriculum/canon revival
(likely Hurston Netflix adaptation announcement 2017) not another
confounding factor.

---

### Part 5 — The Big Screen
**Status:** Planned
**URL:** /what-in-a-name/part-5/
**Type:** Data essay with charts
**Argument:** Awards create legitimacy — but the data shows it's the
role, not always the award, that moves the name. Sometimes it's the
film. Sometimes it's neither.
**Key data:**
- Halle: 55× after first Black woman Best Actress win (2002)
- Denzel: peaked during Malcolm X (1992), NOT his Oscar win.
  The film, not the award.
- Viola Davis: sustained pattern, not a spike. What does sustained
  mean vs. spike? Different kind of cultural permanence.
- Supporting: name spikes after major Black film moments.
  Coming to America (1988), Waiting to Exhale (1995) — pull relevant
  names from SSA data.
**OPEN:** Research pass on Halle SSA data. Confirm 55× figure
from tier list against raw files. Pull Coming to America/
Waiting to Exhale name candidates.

---

### Part 6 — The Court
**Status:** Planned
**URL:** /what-in-a-name/part-6/
**Type:** Data essay with charts
**Argument:** Athletes moved names with enormous increase factors
but small absolute numbers. This is Community Authority, not crossover.
The "1 in X" framing is especially important here — Kobe at
1 in 2,500 Black baby boys is a very specific community making
a very specific statement. Not mainstream. Deliberate.
**Key data:**
- Kobe: 522× (highest increase factor in entire dataset), 1996 draft
- Shaquille: 178×, same year. Both Arabic names. Both peak 1996.
  Same draft class. Not coincidence.
- Kareem: 30-year steady climb after 1989 retirement. Legacy vs.
  fame spike distinction. The name kept rising after he stopped playing.
- LeBron: 19× — lower than expected given cultural dominance.
  Why? This is the interesting question.
- Tiger: 170× but peaked in 2010 (scandal year), not championship
  years 1997–2000. What does that mean? Name it, don't resolve it.
**Editorial beat (locked):** "There are no white Kobes or Shaquilles."
The data supports this instinct. Name it explicitly.
**Arabic note required:** Shaquille, Kareem, Hakeem are Arabic origin.
**Jaylen/Jalen note:** Post-2020 NBA naming trend documented and
deliberately excluded. Data cutoff at 2020 is the protection.
**OPEN:** Pull LeBron from SSA raw data. Confirm 19× figure.
Pull Hakeem (Olajuwon) — tier list shows 4× from 1989.

---

### Part 7 — The Runway
**Status:** Planned
**URL:** /what-in-a-name/part-7/
**Type:** Data essay with charts
**Argument:** Modeling and fashion operate at the intersection of
beauty standards and visibility. Who defines what's aspirational
enough to name your child after — and does the runway reach
Black communities the way music and TV do?
**Key data:**
- Tyra: 5.9× (1998)
- Naomi: 4.6× but peaked 2019 — long after modeling prime (1990s).
  Why the lag? TV resurgence (America's Next Top Model, etc.)?
  Research needed.
- Iman: 8.8× (1996) — David Bowie marriage era. Cross-cultural
  visibility moment. Arabic name.
- Kimora Lee Simmons: 0→1,145 — brand new name, fashion mogul
  creating a name from scratch. Parallel to Beyoncé.
- Serena Williams placed here, not in sports. Her name pattern
  (Roman origin, 3.6× growth, broader appeal) reads like
  runway/mainstream crossover not community athlete authority.
**Arabic note required:** Iman is Arabic origin.
**OPEN:** Research Naomi's 2019 peak — what drove the resurgence?
Confirm Kimora data from SSA raw files (0 pre-1990s, spike after
Kimora Lee Simmons visibility).

---

### Part 8 — Bougie by Design
**Status:** Planned · Research pass needed
**URL:** /what-in-a-name/part-8/
**Type:** Data essay with charts
**Argument:** A specific subset of Black naming choices is
aspirational by design — names coded as upper-class, educated,
or deliberately "fancy." This is not incidental. When Black families
named their daughters Whitley or Regine, they were choosing a name
that signaled something about who that child could be.
This is naming as aspiration architecture.
**Key data (confirmed):**
- Whitley: 390× — callback from Part 2, deeper treatment here
- Regine: 10× (1994) — French, deliberately upscale
- Hilary: Fresh Prince character — traditionally white upper-class
  name given to a Black character unapologetically. Check SSA
  for spike during Fresh Prince run 1990–1996.
- Jada: 29× (2005) — Jada Pinkett Smith carries aspirational signal
**Candidates needing research pass:**
- Camille: French, elegant. Needs cultural anchor — who moved it
  in Black communities? Camille Winbush (Bernie Mac Show 2001–2006)
  is possible. Pull SSA data for spike around 2001–2006.
  If no clear anchor found, Camille is a Black Classic candidate
  not a Fame Effect candidate.
- Simone, Vivienne, Chloe: Pull from SSA data before committing.
  Need evidence of Black community adoption not just general
  popularity to include in this episode.
- Chanel: Luxury brand as first name. Check SSA data.
**OPEN:** Full research pass on aspirational name candidates
before build. Needs both SSA data pull AND cultural anchor
identification for each name.

---

### Part 9 — The Arabic Claim
**Status:** Planned
**URL:** /what-in-a-name/part-9/
**Type:** Data essay — connects back to Part 0 thematically
**Argument:** Arabic names in Black America are not incidental.
They represent a deliberate tradition of cultural and spiritual
reclamation that runs from the Nation of Islam through the
post-civil rights movement through today. The data shows Black
communities chose these names consistently across six decades —
including in a country that has grown more openly hostile to Islam.
**Key data:**
- Muhammad Ali name change 1964 as political anchor
- Kareem Abdul-Jabbar 1971
- Latifah (music, 1990), Khadijah (sitcom, 1994),
  Aaliyah (music/posthumous), Shaquille (NBA, 1996),
  Kadeem (sitcom, 1991), Hakeem (NBA, 1989)
- Jamal, Malik as Black Classics with Arabic origin
- Muslim US population context:
  Under 1M in 1990, ~2.6M by 2011, ~3.45M by 2017
  64% of US converts to Islam are African American (Pew 2001)
  This is why name spikes are primarily Black American adoption
  not Muslim immigrant naming practices
**Kids TV footnote:**
- Kwame (Captain Planet 1990): Ghanaian not Arabic — different
  note needed. Pull SSA data. If spike confirmed, fold here
  as African name reclamation distinct from Arabic/Muslim tradition.
- Kenan (Kenan & Kel 1996): Arabic origin. Pull SSA data.
  If spike confirmed, footnote here.
**Islamic context:** Given current Islamophobia, frame as
"these names were — and remain — an act of claiming.
The data shows the community chose them anyway."
**Sources:** Pew Research Center 2011/2017, Islam in the US Wikipedia

---

### Part 10 — The Page
**Status:** Planned
**URL:** /what-in-a-name/part-10/
**Type:** Data essay with charts
**Argument:** Literary authority moves names differently than pop fame.
Slower. Smaller in absolute numbers. Concentrated in communities
that read — which is its own kind of specificity. The Pulitzer
Prize turns out to be a naming event.
**Key data:**
- Colson Whitehead: 75× — two back-to-back Pulitzers 2016 and 2020.
  Each award is a separate spike. Remarkable. Very small absolute
  numbers but the mechanism is clean and attributable.
- Maya Angelou: 8× — sustained over decades, not a spike.
  Different pattern from single-event names. Legacy accumulation.
- Zora Neale Hurston: 32× — potentially here OR in Part 4
  (posthumous). Decision: if the revival is primarily driven by
  literary curriculum (schools adding Their Eyes Were Watching God),
  she belongs here. If driven more by cultural pop moment,
  she belongs in Part 4. Confirm before building.
- Octavia: confounded — Octavia Butler (author, posthumous revival)
  AND Octavia Spencer (actress, 2011 Oscar). Name it as limitation,
  use it editorially as an example of the data's honest constraints.
**OPEN:** Confirm Zora placement (Part 4 vs Part 10).
Pull Colson from SSA raw data — verify 75× figure.
Confirm Maya sustained pattern from raw data.

---

### Part 11 — Black Classics
**Status:** Planned — series finale
**URL:** /what-in-a-name/part-11/
**Type:** Data essay — thematic series close
**Argument:** The most powerful naming act is the one that doesn't
need permission from a famous person. Jamal, Malik, Darius —
these names grew because of a cultural moment, not a celebrity moment.
The community was the driver. This circles back to Part 0's core
argument: naming as reclamation without waiting for someone famous
to make it safe.
**Key data:**
- Jamal: 1,230 peak (1994), 154× growth. Arabic origin.
  No single celebrity driver. Post-civil rights reclamation.
- Malik: 1,659 peak (2002). Late surge. Not celebrity-driven.
- Darius: 1,703 peak (1999). Sustained. Multiple references.
- Kareem: 30-year climb after retirement — if not used in Part 6,
  belongs here as the clearest example of name outlasting career.
- Ebony: 2,279 peak (1982). Ebony magazine as potential driver.
  Research needed — is this the magazine or broader cultural moment?
**Connection to Arabic/Muslim thread:** Jamal, Malik are Arabic.
Nation of Islam influence on Black naming is the cultural context.
Connect to Part 9 explicitly.
**Series close:** The series ends here because this is the argument
Part 0 was building toward. You don't need a celebrity. The community
decides. The data records it. The name was always yours.

---

## WHAT'S NOT AN EPISODE

**Animated/Kids TV:** Not a standalone episode. Keesha folds into
Part 3 decline story. Kwame/Kenan fold into Part 9 Arabic names
as footnotes if SSA data confirms spikes.

**The Oscars as standalone:** Absorbed into Part 5 (The Big Screen).
The Oscar is a proxy for visibility, not the primary driver.

**Political names:** Barack (71 babies at peak, ∞ increase but tiny
absolute number) is a footnote in Part 11 or Part 9, not an episode.
Fame did not scale that name. Why? Worth naming.

---

## SERIES DESIGN SYSTEM

**All episodes:** Obsidian Futures color system
- Background: #0a0a12 (near-black, NOT purple/indigo)
- Card: #111118
- Accent: #E8B923 (gold)
- Body text: rgba(248,246,241,0.88)
- Muted: rgba(248,246,241,0.45)
- Border: rgba(255,255,255,0.08)

**All episodes share:**
- Same tab architecture as Part 1 (sticky tab bar, section-floor nav,
  flex layout so sections end cleanly at nav)
- 4-item 2×2 journey block (Watch/Read/All Pieces/$ Ko-fi)
- Screenshot nudge below every chart
- Share block on final content tab
- Breadcrumb: Alterrell Interactive › Obsidian Futures ›
  What's in a Name › Part [N]
- Footer navigation linking to adjacent parts

**Chart standards:**
- Chart.js 4.4.0 + chartjs-plugin-annotation 3.0.1
- Canvas in position:relative height:260px container
- responsive:true, maintainAspectRatio:false
- Gold lines (#E8B923), near-black fill, rgba(255,255,255,0.05) grid

---

## PRODUCTION ORDER

Build in this sequence. Do not skip ahead.
Each part must be reviewed and deployed before the next begins.

1. ✅ Part 0 — built, deploy after review
2. ✅ Part 1 — live (fix footer icon + duplicate sources)
3. ✅ Part 2 — built, deploy after Part 0
4. Part 3 — research pass first, then build
5. Series landing page — builds after Part 3 ships
   (URL restructure: /what-in-a-name/ becomes index)
6. Parts 4–11 — sequential, one research session per part minimum

**No part should be built without:**
- A research pass confirming SSA data supports the argument
- Raw SSA file verification of all key data points
- Cultural anchor confirmed for any celebrity-driven name

---

## OPEN RESEARCH TASKS (priority ordered)

1. **Part 3:** Pull Keisha/Tamika/Latoya from SSA raw files.
   Confirm peak years and decline curve. Check for any post-2000 revival.

2. **Part 8:** Pull Camille, Hilary, Chanel, Simone from SSA raw files.
   Identify cultural anchors for each. Determine which are
   Fame Effect vs. Black Classics.

3. **Part 5:** Pull Halle from SSA raw files. Confirm 55× figure.
   Research Coming to America (1988) and Waiting to Exhale (1995)
   name candidates.

4. **Part 4:** Confirm Zora Neale Hurston spike timing.
   Research what drove the 2015–2019 revival specifically
   (curriculum? Netflix announcement? Both?).

5. **Part 9:** Pull Kwame and Kenan from SSA raw files.
   Confirm if spikes exist and are attributable.

6. **Part 7:** Research Naomi Campbell's 2019 peak.
   What drove the resurgence decades after her modeling prime?

7. **Part 10:** Confirm Zora placement (Part 4 vs. Part 10).
   Pull Colson and Maya from SSA raw files to verify figures.

---

## DO NOT

- Do not build any part without a research pass confirming
  SSA data supports the argument
- Do not incorporate post-2020 naming trends (Jaylen/Jalen etc.)
  Data cutoff at 2020 is locked and intentional
- Do not claim crossover without evidence — use "1 in X Black
  baby girls/boys" framing instead
- Do not omit the Arabic/Muslim footnote on relevant names
- Do not claim causation — SSA data shows correlation.
  "The name moved when X happened" not "X caused the name to move"
- Do not use purple #1e1040 as background — use #0a0a12
- Do not modify alterrell-interactive.css
- Do not build the series landing page until Part 3 is live
- Do not collect "were you named after" data on the platform —
  that CTA belongs on Substack and YouTube only