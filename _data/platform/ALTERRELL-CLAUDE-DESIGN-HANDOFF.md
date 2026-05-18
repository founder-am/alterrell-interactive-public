# ALTERRELL INTERACTIVE — CLAUDE DESIGN HANDOFF
## Card Component System · Updated May 7, 2026

This document is the single source of truth for card component generation.
Read this before generating any card. Every token, rule, and pattern here
is locked. The CHART-LIBRARY-REFERENCE.html file is the canonical visual
reference — if this doc and that file conflict, the HTML file wins.

**What changed from v1 (May 4):**
- Obsidian Futures dark lane is RETIRED as a card surface. All cards use
  the Alterrell Interactive teal/white/paper system.
- Card format is 1080×1080 square (share cards). Not full-width editorial.
- Visual standard is now CHART-LIBRARY-REFERENCE.html, not the OF dark spec.
- Concert Tax piece cards use the same system as all other pieces.

---

## 1. PLATFORM CONTEXT

**Alterrell Interactive** (interactive.alterrell.com) is a civic and
cultural data journalism platform. Philosophy: "Data as Dignity" — data
reveals structural systems, never judges individuals.

**Tagline (locked):** "See the architecture. The data was always there —
now it's yours."

**All pieces are Alterrell Interactive.** There are no separate lanes.
Content is organized by tags. The "Obsidian Futures" label may appear on
hub cards as a content mode tag (cultural/celebratory) but it does NOT
trigger a separate dark design system. All pieces use the same tokens.

**GitHub repo:** https://github.com/founder-am/alterrell-interactive-public/
**Canonical CSS:** `alterrell-interactive.css` at repo root.
**Visual reference:** `CHART-LIBRARY-REFERENCE.html` — read before building.

---

## 2. DESIGN SYSTEM TOKENS

### Typography (Google Fonts — required import)
```
Spectral 800         → hero headlines, large stat numbers, artist/subject
                       names in bar charts, delta/multiplier callouts
DM Serif Display     → h2/h3, section headers, pull quote text,
                       chart titles, editorial lines
DM Sans 400/500/800  → all body copy, interface, labels, annotations
DM Mono 400/700      → nav labels, source stamps, methodology,
                       comp-tags, captions, data values ONLY
```

**Google Fonts import (every piece):**
```html
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@800&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;800&family=DM+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### Color tokens (locked)
```
--teal:      #0a7c72   primary accent, bar fills (Option 1 field + Option 2 bars)
--orange:    #c95f1a   secondary accent, female/contrast values
--paper:     #f8f6f1   page background
--ink:       #111111   all primary text
--muted:     #888888   source stamps, comp-tags ONLY — never on primary content
--border:    #e0dcd4   dividers, row separators
--track-bg:  #e8e5e0   bar track backgrounds (Option 2)
--danger-hatch: repeating-linear-gradient(-45deg, #c0392b 0px, #c0392b 4px,
               #d9645a 4px, #d9645a 10px)   danger zone fill on bars
```

### Two surface options — every component has both
```
Option 1 — Teal field:
  background: #0a7c72
  padding: 26px
  Primary text: #fff
  Bar tracks: rgba(0,0,0,0.25)
  Bar fills: #fff
  Muted/source: rgba(255,255,255,0.45)
  Dividers: rgba(255,255,255,0.2)

Option 2 — White + teal left border:
  background: #fff
  border-left: 7px solid #0a7c72
  padding: 26px
  Primary text: #111
  Bar tracks: #e8e5e0
  Bar fills: #0a7c72
  Muted/source: #888
  Dividers: #e0dcd4
```

AMA locks one surface option per component per piece before deploy.
Never mix surfaces within a single card.

---

## 3. SHARE CARD FORMAT (LOCKED — updated May 7, 2026)

All share cards are **1080×1080 square**. This is non-negotiable.

```css
.card {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  padding: 28px;
}
```

Cards must work at 1080×1080 rendered. Use `aspect-ratio: 1/1` in preview.
No full-width editorial layout. No portrait format unless explicitly approved.
Save/Share mechanic: Camera Roll + native Share Sheet. Square only.

---

## 4. APPROVED COMPONENTS — from CHART-LIBRARY-REFERENCE.html

These are the locked approved components. Every component has Option 1
(teal field) and Option 2 (white + teal border) unless noted.

### A1 — Horizontal Bar with Color Split (.ac-hbar)
Bar chart sorted by value. Danger zone hatch for bars exceeding a threshold.
- Bar labels: Spectral 800, 28px, label column = 40% of card
- Bar tracks: height 38px, fills from left
- Values: DM Mono 700, 14px, right-aligned to track edge always
- Benchmark label: DM Mono 700, 14px, right-aligned above bars
- Scaling rule: longest bar = 90% of track. All bars = (value/max)×90
- Tick mark at threshold: 3px wide, full height of track
- Annotation below row: DM Sans italic 12px, indented to bar start
- Delta/summary at bottom: Spectral 800, 30px + DM Sans 500 13px span

**Reference in this session (May 7):** Used in Beyoncé piece for giving
comparison. Tabled — scaling breaks on extreme wealth gaps. Revisit
component choice before deploy.

### A2 — Decade Timeline (.ac-segbar)
Segmented bars by decade/period with optional toggle.
- Period label: Spectral 800, 30px, width 35%
- Track: width 55%, height 38px
- Value: DM Mono 700, 14px, width 10%
- Toggle buttons: DM Sans 800, 10px uppercase

### A3 — Budget/Gap Multiplier (.ac-budget)
Two-line comparison per entry with multiplier callout.
- Entry name: Spectral 800, 24px
- Labels: DM Sans 800, 12px uppercase
- Amounts: DM Mono 700, 22px
- Multiplier: Spectral 800, 30px + DM Sans 500 13px span
- Entries separated by divider lines
- Last entry: no bottom border

**Reference in this session (May 7):**
- Beyoncé/Where's Beyoncé? — Maria vs Harvey FEMA gap cards (approved)
  Option 2 white. Color adaptation: teal for federal, red for celebrity.
  ⚠ Color adaptation not in original spec — confirm before build.
- Concert Tax Card G — gross revenue per tour. A3 structure adapted to
  show artist name / gross / show count / production tier per entry.
  Teal for male gross, orange for female gross.

### B1 — Before / After Bar (.ac-beforeafter)
Two rows showing change over time with delta multiplier.
Same bar anatomy as A1. Delta at bottom.

### B2 — Ranked List (.ac-ranked)
Bars ranked high to low with annotations on key entries.
Same bar anatomy as A1. Annotations indented to bar start.

### C1 — Moment Timeline (.ac-timeline)
Horizontal dot-and-line timeline with peak stat callout.
Option 2 (white) only.
- Subject label: Spectral 800, 20px
- Timeline line: 3px, full width
- Dots: 14px circles, peak dot 18px with teal ring
- Labels above: DM Sans 800, 11px uppercase, max-width 80px
- Values below: DM Mono 700, 13px
- Years: DM Mono 700, 11px, color #888
- Peak stat: Spectral 800, 28px

### C2 — Decade Segmented Bar (variation of A2)
Same as A2 but used for decade-by-decade data with toggle.

### D1 — Stat Callout (.ac-stat)
Large hero number with unit and explanatory line.
Option 2 (white) only.
- Number: Spectral 800, clamp(64px,12vw,96px)
- Unit: Spectral 800, clamp(28px,5vw,40px), teal color
- Explanatory line: DM Sans 500, 15px, border-top 2px #e0dcd4
- Comp label: DM Mono 700, 12px uppercase, color #888

**Reference in this session (May 7):**
- Beyoncé/Where's Beyoncé? — 0.1% stat card (approved, Option 2 white)

### D2 — Pull Quote (.ac-pullquote)
Quote with attribution. Both Option 1 (teal field) and Option 2 (white).
- Quote text: DM Serif Display italic, 20px, line-height 1.5
- Open/close quote marks via CSS quotes property
- Attribution: DM Sans 800, 11px uppercase, letter-spacing .1em
- Attribution separator: "── " in DM Mono before text
- Divider above attribution: 1px (white version) or rgba white (teal)

**Reference in this session (May 7):**
- Beyoncé/Where's Beyoncé? — Hart quote card (approved, teal field)
- Concert Tax Card E — Cardi B quote. D2 on teal field with three
  stat figures (fee/spend/net) above the quote block. Spectral 800
  for figures, DM Mono for labels.

### Disaster Map (new — approved May 7, 2026)
Static inline SVG using real Census Bureau state boundaries.
Source: us-atlas + topojson-simplify (presimplify 0.05).
Projection: d3.geoAlbersUsa, scale 1280, translate [480, 300].
No external fetch — all paths inline in HTML.
Card wrapper: Option 2 (white + teal border).
Puerto Rico: callout box, not on contiguous map.
Disaster type colors:
  hurricane        #0a7c72
  wildfire         #c95f1a
  tornado          #d4a017
  flood            #2563c4
  hurricane+tornado #7a7a1a
  flood+tornado    #5b5fa0
  not in scope     #e8e4de
⚠ Build session should replace inline paths with proper D3 topology
  render exported as verified static SVG.

---

## 5. COMPONENTS UNDER DEVELOPMENT (not yet in library)

These were specced in prior sessions but are not in CHART-LIBRARY-REFERENCE.html.
Do not build against the OF dark spec. When built, they follow the teal/white system.

### Concert Tax Card G — Gross Revenue Table
Adapted from A3. Per-artist rows: name + tour / gross / show count / tier pill.
Teal for male gross values, orange (#c95f1a) for female gross values.
Tier pills: small colored labels (Large / Small / Solo).
No multiplier callout — argument is in the gross + show count combination.
Sort: gross high to low.
⚠ Not yet approved — current renders don't match the standard. Revisit.

### Concert Tax Card J — Two-Column Language Comparison
Two-column grid: Male artist | Female artist.
Column headers: DM Sans 800, 11px uppercase. Teal for male, orange for female.
Quote pairs: DM Serif Display italic, 16px minimum, color #111. Full column width.
Source below each quote: DM Mono 9px #888.
Editorial line at bottom: DM Serif Display italic.
⚠ Not yet approved — quote text needs to be larger and bolder than current renders.
⚠ All quotes require source verification before deploy.

---

## 6. LOCKED RULES (apply to every component)

1. **Bar scaling:** Longest bar = 90% of track. All bars = (value/max)×90.
   Never hardcode from raw percentages.
2. **Value alignment:** All bar values right-aligned to track right edge.
   Never inside the bar. Never moves based on bar length.
3. **Primary label scale:** Spectral 800, 24–32px minimum. Never shrink
   font to fit column — expand column instead.
4. **Label column:** 40% of card width. 20px minimum gap to track.
5. **No gray on primary content:** #888 permitted only on source stamps
   and comp-tags. Never on labels, values, editorial lines, or annotations.
6. **Tables and dense copy:** white or paper backgrounds ONLY. Never dark.
7. **Dark backgrounds:** hero sections, D2 teal field, decorative stat
   callouts only. Never under tables or dense reading copy.
8. **Share card format:** 1080×1080 square. aspect-ratio: 1/1. Always.
9. **Surface options:** Every component has Option 1 (teal field) and
   Option 2 (white + teal border). AMA locks one per component before deploy.
10. **File versioning:** Never overwrite. Always version: v1, v2, v3.
11. **Four fonts only:** Spectral, DM Serif Display, DM Sans, DM Mono.
    No other fonts introduced.
12. **Comp-tag:** Always present. DM Mono 9px, color #888 (white surface)
    or rgba(255,255,255,0.45) (teal field). States piece + tab + component.
13. **Source stamp:** Always present. DM Mono 10px. Same muted color as comp-tag.
14. **Editorial line:** DM Serif Display italic or DM Sans italic 13px.
    The argument in one sentence. Never omit from a completed card.
15. **Danger zone hatch:** Only permitted texture. Diagonal stripe on bars
    exceeding a defined threshold. No other textures or gradients.

---

## 7. WHAT THE VISUAL STANDARD IS NOW

The approved visual reference for all new card work is the cards built
in this session (May 7, 2026):

**Approved and locked:**
- D1 Stat: Beyoncé 0.1% card — Option 2 white. See conversation history.
- D2 Quote: Beyoncé Hart quote card — teal field. See conversation history.
- A3 Gap: Beyoncé FEMA vs celebrity gap — Option 2 white. See conversation history.
- Disaster Map: Beyoncé disaster states — Option 2 white wrapper, inline SVG.

**Previously approved (Concert Tax, from prior sessions):**
- Tab1 Card A: Bieber/Carpenter comparison — `tab1-card2-comparison.html`
- Tab1 Card B: $100 indexed stacked bar — `tab1-card3-stacked-bar.html`
- Tab1 Card C: Cohort rap — `tab1-card4a-cohort-rap.html`
- Tab1 Card C: Cohort pop — `tab1-card4b-cohort-pop.html`
- Tab2 Card: Stadium production — `tab2-card-optionA-stadium-production-v3.html`

**Not yet approved (needs rebuild against this doc):**
- Concert Tax Card E (Cardi B quote)
- Concert Tax Card G (Gross revenue table)
- Concert Tax Card J (Language comparison)

---

## 8. WHAT NOT TO DO

- Do not use the Obsidian Futures dark system (#111118 bg, #E8B923 gold)
  for card components — that system is retired for cards
- Do not use full-width editorial layout for share cards — square only
- Do not use portrait or landscape format — square only
- Do not put gray text on dark backgrounds
- Do not use gradients of any kind (except the approved danger zone hatch)
- Do not introduce new fonts — four only
- Do not gender-code colors within a single chart
- Do not overwrite previous file versions — always version
- Do not build Concert Tax cards against the v1 handoff doc OF spec
- Do not approximate from memory — read CHART-LIBRARY-REFERENCE.html first

---

## 9. PIECES THIS SYSTEM APPLIES TO

All pieces. No exceptions.

**Currently active:**
- Where's Beyoncé? — civic/teal — cards approved May 7, 2026
- Concert Tax ("The Male Laziness Epidemic") — cultural — cards in progress
- Fast Food's Hidden Sodium Tax — civic/teal — legacy build, retrofit deferred
- Ethnic Naming Series (Parts 0, 1, 2) — identity — needs voice pass first

**Pipeline:**
- HBS Digital Museum — civic/teal
- Congress Part 1A "Senator Selfish" — civic/teal
- Gay Uncles — cultural
- Musical Queens — cultural
- Specialist Map — civic/teal

---

*Updated May 7, 2026. Supersedes v1 (May 4, 2026).*
*Source of truth for visual rendering: CHART-LIBRARY-REFERENCE.html*
*Source of truth for decisions: conversation history May 7, 2026*