# FAST FOOD SODIUM — PIECE BRIEF
**Read this before touching any sodium piece file. Update before ending any session.**
*Last updated: March 2026*

---

## STATUS
**Substantially built and deployed. Two tasks remain before Q1 2026 ship is complete:**
1. Substack early access post — not drafted
2. Slides 11–13 — calculator screenshots still needed

---

## WHAT THIS PIECE IS

**Thesis:** Fast food delivers affordable protein at a hidden sodium cost, disproportionately affecting communities with the least access to alternatives. This is an infrastructure and systems failure, not an individual willpower problem.

**Series:** Fast Food / Nutrition (standalone for now)
**Format:** Interactive piece with calculator + data tables + editorial essay sections
**URL:** `interactive.alterrell.com/fast-food-sodium/`

---

## LOCKED DECISIONS

**Navigation order (locked):**
Overview → The System → Systemic Issues → Compare Your Order → Data → By Franchise → Sources

**Note on tab naming:** "The System" is tab 2 (moved up from tab 5 — editorial decision March 2026). Systemic Issues is tab 3. This was a deliberate EIC decision to put population-level consequences before mechanism explanation.

**The System sub-sections (accordions, all open by default):**
Where You Live | Zip Code Exposure | The Healthcare Bill | Fiber as Counter-Metric

**Systemic Issues sub-sections (accordions, all open by default):**
The Formula | The Advertising | The Cost | The Wages

**Calculator design (locked):**
- Chain dropdown (19 chains) + item dropdown filtered by chain
- Swap mode: Show both / Same chain / Any chain
- Output: Your order stats + swap card(s) + sodium meter + savings callout
- Editorial tone in outputs (not clinical)
- 19-chain database embedded as JSON in the HTML

**Key verified data (locked — do not change without re-sourcing):**
- McNuggets 6-piece US: 540mg sodium
- McNuggets 10-piece US: 900mg sodium
- McNuggets 6-piece UK: ~228mg (calculated from CMAJ per-100g data)
- US vs UK ratio (6-piece): ~2.4×
- CEO pay ratio: 1,212:1 (McDonald's 2023, proxy statement)
- Rudd Center: 75% more fast-food TV ads seen by Black youth vs white peers
- Healthcare cost: $219.2B (CDC/AHA, Am J Prev Med 2024, 2019 data)
- AHA projection: costs triple to $1.3T by 2050
- Food deserts: 18.8M Americans / 6.1% of US population (USDA FARA)
- Third Ward Houston: 1.8 miles to nearest grocery, 2–3hr round trip by bus
- 61% of Houston residents in food desert (1.3M+ people)

**Zip code comparisons (locked):**
- NYC: Central Harlem (10037, ~$36K median income) vs Upper East Side (10021, ~$130K)
- Houston: Third Ward (77004) vs River Oaks (77019)

**Design:**
- Max-width: `--max-editorial` (860px) for editorial sections
- Max-width: `--max-tool` (680px) for calculator section
- All on white/paper backgrounds — no dark sections with tables
- Accordions open by default, collapsible
- Section-floor nav at bottom of every tab section

---

## CURRENT BUILD STATE

| Component | Status |
|-----------|--------|
| 7-tab structure | ✅ Built and deployed |
| Hero + stat cards | ✅ Built |
| Journey block (Watch/Read/Explore, icon-left) | ✅ Built |
| Overview tab | ✅ Built — 5 systemic points, CEO framing, fiber context, V2 callout |
| The System tab — all 4 accordions | ✅ Built |
| Systemic Issues tab — all 4 accordions | ✅ Built |
| Compare Your Order — calculator | ✅ Built, 19 chains |
| Data tab — auto-populated table | ✅ Built |
| By Franchise — 7 chains | ✅ Built |
| Sources + methodology | ✅ Built |
| Section-floor navigation | ✅ All 7 sections |
| Footer | ✅ Rebuilt (tight single bar) |
| Slide deck (17 slides) | ✅ Complete except slides 11–13 |
| Slides 11–13 screenshots | ⚠️ Pending — calculator screenshots needed |
| Substack early access post | ⚠️ Not drafted |
| Final editorial DAS pass | ⚠️ Not done |

---

## OPEN ITEMS (priority ordered)

**1. Draft Substack early access post**
- "Behind the data" methodology post — publishes same day as early access
- Paid subscribers get 2-week early access window
- Should cover: key data decisions, stats that didn't make the cut, the UK sodium discovery process

**2. Take calculator screenshots → replace slides 11–13**
- Slide 11: Calculator empty state (before selection)
- Slide 12: Popeyes Spicy Chicken Sandwich selected — danger red sodium bar (~77% daily limit)
- Slide 13: Swap result showing − 1,210mg / 53% daily limit saved (same state as 12 with swap populated)
- Crop to calculator shell only, remove nav and footer

**3. Final editorial pass**
- Check all copy against DAS framing: reveals systems, does not judge individuals
- Particular attention to By Franchise swap card notes — some are borderline individual-advice framing

**4. Deploy + smoke test confirmation**
- Confirm scroll-spy works on all 7 tabs
- Confirm accordions open/close correctly
- Confirm calculator swap logic on mobile
- Confirm section-floor nav scroll behavior

---

## FILES

| File | Location | State |
|------|----------|-------|
| `index.html` (interactive piece) | GitHub `/fast-food-sodium/` | ✅ Deployed March 2026 |
| `sodium-slides.html` (17-slide deck) | GitHub `/fast-food-sodium/` or outputs | ⚠️ Slides 11–13 are placeholders |
| `sodium-calculator-v1.html` | GitHub `/fast-food-sodium/` | ✅ Standalone calculator (superseded by embedded version in index.html) |

---

## KEY SOURCES (verified and locked)

- McDonald's US nutrition calculator — item sodium data
- McDonald's UK published nutrition data — international comparison
- CMAJ peer-reviewed research (2013) — UK per-100g sodium calculation
- McDonald's 2024 Proxy Statement (SEC) — CEO compensation 2023
- AFL-CIO Executive PayWatch — pay ratio confirmation
- Rudd Center Fast Food FACTS 2021 (Nielsen/UConn) — advertising disparity
- Wang et al., Am J Prev Med 2024 (CDC/AHA) — $219B healthcare cost
- AHA Presidential Advisory 2024 — $1.3T projection by 2050
- USDA Food Access Research Atlas (2019) — food desert statistics
- Houston Landing (Gordon, 2023) — Third Ward food access reporting
- Moore et al. (2019) — Third Ward grocery shopping behavior
- Block et al., Am J Prev Med 2004 — fast food density by race/income
- Arcaya et al., Health & Place 2016 — fast food access and race nationally

---

## DO NOT

- Do not put tables or dense copy on dark backgrounds
- Do not change verified data without re-sourcing and flagging
- Do not rebuild the calculator database — it is embedded in index.html
- Do not revert accordions to sub-tabs
- Do not change the tab order (Overview → The System is locked)
- Do not skip the Substack post before calling this shipped
