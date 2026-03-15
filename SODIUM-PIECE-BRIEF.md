# FAST FOOD SODIUM — PIECE BRIEF
**Read this before touching any sodium piece file. Update before ending any session.**
*Last updated: March 2026*

---

## STATUS
**Substantially built. Two gaps remain before Q1 2026 ship:**
1. "The System" tab (5th tab) — not built
2. Overview tab — currently one paragraph + table; systemic argument lives only in the video script

Hub must ship first. After hub is live, this is the next build.

---

## WHAT THIS PIECE IS

**Thesis:** Fast food delivers affordable protein at a hidden sodium cost, disproportionately affecting communities with the least access to alternatives. This is an infrastructure and systems failure, not an individual willpower problem.

**Series:** Fast Food / Nutrition (standalone for now)
**Format:** Interactive piece with calculator + data tables + editorial essay sections
**URL target:** `interactive.alterrell.com/fast-food-sodium/`

---

## LOCKED DECISIONS

**Navigation order (locked):**
Overview → Systemic Issues → Compare Your Order → Data → By Franchise → Sources

**Systemic Issues sub-tabs (locked):**
Formula | Ads | Cost | Wages

**Calculator design (locked):**
- Chain dropdown (25 chains) + item dropdown filtered by chain + optional protein type filter (Beef/Chicken/Plant/Any)
- Output: Your order stats + rank + 3 swap cards (More Efficient, Lower Sodium, Same Chain)
- Sodium severity warning scale
- Editorial tone in outputs (not clinical)
- 185-item database across 25 chains embedded as JSON

**Key verified data (locked — do not change without re-sourcing):**
- McNuggets sodium: 900mg (6-piece) / 660mg (comparable international)
- CEO pay gap: capped bar + 1,212:1 ratio label
- Rudd Center: 75% more fast-food TV ads seen by target demographic vs. peers
- Healthcare cost: $219B with context

**Design:**
- Max-width: `--max-editorial` (860px) for editorial sections
- Max-width: `--max-tool` (680px) for calculator section
- All on white/paper backgrounds — no dark sections with tables

**Slide deck (complete):**
- 17 slides at `/mnt/user-data/outputs/sodium-slides.html`
- vw-based units throughout
- Print: Landscape, Fit to page, Background graphics on
- Slides 11–13 are placeholders awaiting calculator screenshots

---

## OPEN ITEMS (priority ordered)

**1. Build "The System" tab (5th tab)**
Contents:
- Zip code sodium premium analysis
- Healthcare cost visualization ($219B with context)
- Food desert density data
- Fiber as counter-metric
Note: This is where the systemic argument lives. Currently only in the video script. Violates "the systemic argument must live on the page" principle.

**2. Thicken the Overview tab**
Current state: one paragraph + table
Needed: Full systemic argument intro, 5 systemic points, CEO taste test framing, fiber context, V2 callout

**3. Take calculator screenshots → replace slides 11–13 placeholders**
After calculator is confirmed working, screenshot the 3 swap card outputs and embed in slides.

**4. Final editorial pass**
Check all copy against DAS framing: reveals systems, does not judge individuals.

**5. Deploy + test share mechanic**
Confirm scroll-spy works on all 6 tabs. Test share modal. Test mobile tab overflow fade.

---

## FILES

| File | Location | State |
|------|----------|-------|
| `index.html` (interactive piece) | GitHub `/fast-food-sodium/` | ⚠️ Missing System tab + thin Overview |
| `sodium-slides.html` (17-slide deck) | `/mnt/user-data/outputs/` | ✅ Complete except slides 11–13 screenshots |

---

## KEY SOURCES (verified)

- USDA / nutrition databases — item data
- CEO proxy statements (2023) — compensation figures
- Rudd Center advertising research — 75% ad disparity stat
- $219B healthcare cost — verify source before citing in System tab

---

## DO NOT

- Do not put tables or dense copy on dark backgrounds
- Do not change verified data (McNuggets sodium, CEO ratio, Rudd stat) without re-sourcing and flagging
- Do not rebuild the calculator database from scratch — it exists in the HTML, extend it
- Do not ship without the System tab — it's the editorial heart of the piece
- Do not skip the journey block below the hero
