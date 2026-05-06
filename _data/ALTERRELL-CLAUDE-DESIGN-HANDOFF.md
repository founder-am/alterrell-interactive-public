# ALTERRELL INTERACTIVE — CLAUDE DESIGN HANDOFF
## Card Component System · May 2026

This document is the single source of truth for Claude Design onboarding.
Read this before generating any card component. Every token, rule, and
pattern here is locked — do not invent alternatives.

---

## 1. PLATFORM CONTEXT

**Alterrell Interactive** (interactive.alterrell.com) is a civic and
cultural data journalism platform. Philosophy: "Data as Dignity" — data
reveals structural systems, never judges individuals.

**Tagline (locked):** "See the architecture. The data was always there —
now it's yours."

**Two content lanes:**
- **Alterrell Interactive** — civic/policy/institutional critique
  (teal `#0a7c72` accent, paper `#f8f6f1` background)
- **Obsidian Futures** — cultural data storytelling
  (gold `#E8B923` accent, dark `#0a0a12` background)

**GitHub repo:** https://github.com/founder-am/alterrell-interactive-public/
**Canonical CSS:** `alterrell-interactive.css` at repo root — never modify,
only extend with piece-local styles.

---

## 2. DESIGN SYSTEM TOKENS

### Typography (Google Fonts)
```
Spectral 700 italic     → hero headlines ONLY (one per page)
DM Serif Display        → h2/h3, section headers, pull quotes,
                          stat numbers, chart titles, subject names
DM Sans 400/500/600     → all body copy, interface, labels
DM Mono 400             → nav labels, source stamps, methodology,
                          eyebrows, captions, monospaced data ONLY
```

**Google Fonts import (every piece):**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&family=Spectral:ital,wght@1,700&display=swap" rel="stylesheet">
```

### Colors — Alterrell Interactive lane
```
--teal:           #0a7c72   (primary accent)
--teal-light:     #0d9488
--teal-bg:        #f0faf9
--orange:         #c95f1a   (secondary accent)
--orange-bg:      #fff4ee
--ink:            #111111
--ink-secondary:  #444444
--ink-muted:      #888888
--paper:          #f8f6f1   (page background)
--paper-warm:     #f0ede6
--paper-card:     #ffffff
--border:         #e0dcd4
--dark-section:   #16141f
```

### Colors — Obsidian Futures lane
```
--of-bg:          #0a0a12   (page background — NOT #1e1040)
--of-card:        #111118   (card background)
--of-gold:        #E8B923   (primary accent)
--of-gold-dk:     #9a7200   (gold on white backgrounds)
--of-teal:        #0a7c72   (secondary, same as AI lane)
--of-body:        rgba(248,246,241,0.88)
--of-muted:       rgba(248,246,241,0.45)
--of-border:      rgba(255,255,255,0.08)
```

### Layout
```
--max-editorial:  860px
--max-tool:       680px
--nav-height:     52px
--tab-height:     44px
--touch:          44px (minimum touch target everywhere)
--radius:         6px
--radius-sm:      3px
```

---

## 3. STRUCTURAL RULES (NON-NEGOTIABLE)

### Background rules
- **White or paper backgrounds:** ALL tables, dense copy, charts,
  comparison grids, receipts, calculators
- **Dark backgrounds:** hero sections, decorative stat callouts,
  nav, footer ONLY — NEVER tables or dense reading copy
- **Obsidian Futures pieces:** outer card is dark `#111118`,
  chart/table content inside card is white `#ffffff`

### Typography rules
- Gray text on dark backgrounds: FORBIDDEN. Use white or gold.
- Text minimum on white: `#333333`. Never use muted gray on white.
- Chart titles: DM Serif Display, 14–16px, `#111111`
- Chart index labels/captions: DM Mono 500, 12px, `#333333`
- Artist/subject names in charts: DM Serif Display, 14px minimum
- Eyebrows: DM Mono, 9px, letter-spacing 0.16em, uppercase,
  gold at 55% opacity (Obsidian Futures) or teal (AI lane)

### Card anatomy (Obsidian Futures)
```
.card (dark #111118, border 0.5px rgba(255,255,255,0.08))
  ├── .card-eyebrow (DM Mono, 9px, gold 55% opacity)
  ├── .card-headline (DM Serif Display, 18px, white)
  ├── .chart-wrap (white #ffffff, border 1px #d4d1cc, radius 8px)
  │     ├── .chart-title (DM Serif Display, 14–16px, #111111)
  │     └── [chart content]
  ├── .verdict (gold left border 3px, bg rgba(232,185,35,0.1))
  │     └── .verdict-text (DM Serif Display italic, 13px,
  │                        rgba(248,246,241,0.9))
  └── .card-caption (DM Mono, 9.5px, rgba(248,246,241,0.45))
```

### Swipe gallery rules (all pieces)
- CSS scroll snap: `scroll-snap-type: x mandatory` on container
- Each card: `scroll-snap-align: start`
- Swipe hint text: **"Swipe for more cards →"** — always this exact text
- No JavaScript for swipe behavior — CSS only
- No dot navigation unless explicitly approved

### Chart color rules
- **Single color for all bars in one chart** — `#0a7c72` teal default
- No gender color coding within a single chart
- Gender is communicated by artist names, not color
- Left border on rows: amber `#9a7200` for female, teal `#0a7c72`
  for male — ONLY when rows are interleaved and color is needed
  to aid scanning. Remove if it feels like over-explanation.
- Categorical data: assign distinct purposeful colors per category
  (not gradient families, not gender-coded families)
- No gray gradients. No amber gradient families. Ever.

### Verdict block rule
Always: gold left border `3px solid #E8B923`, background
`rgba(232,185,35,0.1)`, DM Serif Display italic 13px,
`rgba(248,246,241,0.9)` text. Never omit from a completed card.

### File versioning rule
Never overwrite files. Always version: `filename-v1.html`,
`filename-v2.html`. Keep all iterations.

---

## 4. FIVE-TAB PLATFORM STANDARD

All five-tab pieces follow this structure (locked):
```
Tab 1: Overview
Tab 2: [Piece-specific data name]
Tab 3: [Piece-specific systemic name]
Tab 4: History
Tab 5: Take Action
```
Sources: accordion at bottom of Tab 5, not a separate tab.
Share block: Tab 1 (Overview) only — most emotionally compelling.
Section floor nav: every tab and sub-tab.

---

## 5. APPROVED CARD TYPES

These are the confirmed, approved card types from the concert tax
piece build sessions (April–May 2026). Each includes visual spec,
data pattern, and standing rules.

---

### CARD TYPE A — Side-by-Side Comparison Table

**Use for:** Two-entity direct comparison (festival vs festival,
artist vs artist). The argument is in the contrast.

**Approved instance:** Bieber vs Carpenter, Coachella 2026
`tab1-card2-comparison.html`

**Structure:**
```
White table (border: 1px solid #d4d1cc, radius: 8px)
  ├── Header row (background: #f8f6f1)
  │     Left col:  Context line (DM Mono 8px #888)
  │                First name (DM Sans 700, 18px, 2 lines)
  │                Last name  (DM Sans 700, 18px, 2 lines)
  │     Right col: Same treatment — MUST match layout exactly
  ├── Fee row (background: #ffffff)
  │     Label: DM Mono 8px uppercase #888
  │     Amount: DM Serif Display 30px — teal for male, #9a7200 for female
  ├── Section label row (background: #f0ede8)
  │     DM Mono 8px uppercase #888
  └── Data rows (alternating border-bottom: 1px #eeebe5)
        Dot (5px circle, teal/amber) + DM Sans 12px #333
```

**Rules:**
- Both artist name columns must have identical structure
- First name line 1, last name line 2 — both sides, always
- Fee amount is the dominant visual element
- Max 5–6 rows per column before it becomes unreadable on mobile

---

### CARD TYPE B — Stacked Vertical Bar Chart ($100 Index)

**Use for:** Cost composition indexed to a common unit ($100).
Shows what something is made of, not just how big it is.

**Approved instance:** Typical male vs female headliner production costs
`tab1-card3-stacked-bar.html`

**Structure:**
```
Two bars, same height (260px), side by side
Grid: [bar col] [axis col 28px] [bar col]
  ├── Subject name: DM Serif Display 14px, centered above bar
  ├── Bar: flex column (top to bottom = top to bottom visually)
  │     border: 1.5px solid #d4d1cc (the "glow")
  │     border-radius: 4px, overflow: hidden
  │     Each slice: width 100%, height = % of total
  │       Labels inside slice if height ≥ 28px:
  │         Amount: DM Mono 13px 500 weight
  │         Name: DM Mono 8px, 80% opacity
  │         Dark text on light slices, white on dark slices
  └── Center axis: $100/$50/$0 tick labels (DM Mono 8px #aaaaaa)
```

**Slice colors (categorical, not gendered):**
- Dancers/human labor: `#c95f1a` (platform orange)
- Wardrobe/styling: `#534AB7` (purple)
- Crew/logistics: `#185FA5` (blue)
- Venue/promoter: `#444441` (dark charcoal)
- Hardware/production: `#0a7c72` (teal)
- Artist net: tinted version of dominant bar color at 15–18% opacity,
  with `border: 1px solid #d4d1cc`

**Rules:**
- Index to $100 always — not raw figures
- Label as "modeled estimate" in caption
- Same-height bars even if gross amounts differ
- Methodology note always in caption

---

### CARD TYPE C — Horizontal Production Intensity Bar Chart

**Use for:** Ranking multiple entities on a single ordinal scale.
Works for cohorts, tiers, any ranked comparison.

**Approved instances:**
- Cohort rap 2010–2012: `tab1-card4a-cohort-rap.html`
- Cohort pop 2006–2011: `tab1-card4b-cohort-pop.html`
- Stadium production 2022–2025: `tab2-card-optionA-stadium-production-v3.html`

**Structure:**
```
White chart-wrap (border: 1px solid #d4d1cc, radius: 8px)
  ├── Chart title: DM Serif Display 14–16px #111111
  ├── Chart subtitle (optional): DM Mono 9px #888888
  ├── Legend (when gender coding is used):
  │     Swatch 10px + DM Mono 8.5px #555
  ├── Tier header row: [spacer col] [tier label row]
  │     Tier labels: flex space-between, DM Mono 7.5px 500
  │     First=left, middle=center, last=right
  │     Divider: 1px #e8e5e0 below header
  └── Artist rows: grid [name col 58%] [bar col 42%]
        Left border: 2px (amber for female, teal for male)
          — only use when rows are interleaved
          — remove when all one gender or over-complicated
        Artist name: DM Sans 600 12–13px #111111
        Tour/context: DM Mono 8px #aaaaaa
        Bar track: height 14px, bg #f0ede8, border: 1px #d4d1cc
          border-radius: 3px, overflow: hidden
        Bar fill: #0a7c72 (single color for all bars)
          Tier boundaries: 33.33% / 66.66% / 100%
          White tick lines at boundaries: 1.5px #ffffff z-index 3
          Fill snaps to exact boundary — no partial fills
        Row divider: 1px #f0ede8
```

**3 production tiers (locked):**
- Solo / Minimal = 33.33%
- Small production = 66.66%
- Large production = 100%

**Rules:**
- Sort by production intensity high to low, then A–Z within tier
- No empty visual gap between tier groups — let the bars do it
- Artist column at 58% minimum — bar never more than 42%
- Tour names on one line — truncate if needed
- No separate legend when single color is used

---

### CARD TYPE D — Iceberg Visual

**Use for:** Above/below threshold metaphor. What's visible vs
what's hidden. Coachella = tip, touring economy = body.

**Approved instance:** `tab1-card1-iceberg.html`
*Note: Still needs visual refinement to match TMM deck iceberg style.
Refer to TMM_April_2026_Overview.html for the reference treatment.*

**Structure:**
```
Dark card background
  ├── Eyebrow + headline (standard card anatomy)
  └── Iceberg visual:
        Above waterline:
          Zone label: DM Mono 9px uppercase, gold (#E8B923)
          SVG polygon (narrow triangle): gold stroke/fill at 16% opacity
        Waterline:
          Flex row: [rule] [label] [rule]
          Rule: flex-1, height 1px, rgba(248,246,241,0.4)
          Label: DM Mono 8px uppercase, rgba(248,246,241,0.75)
        Below waterline:
          Zone label: DM Mono 9px uppercase, teal (#0a7c72)
          SVG polygon (wide trapezoid): teal stroke/fill at 13% opacity
          Economy rows: border 0.5px rgba(10,124,114,0.3),
            each row: dot (teal) + DM Mono 10.5px rgba(248,246,241,0.82)
```

**Rules:**
- Labels outside shapes — never inside the polygon
- Text inside shapes only if shape is large enough for 13px+
- Waterline label must be white/near-white — never gray

---

### CARD TYPE E — Quote Card

**Use for:** Primary source quotes where the words themselves are
the data. Named source + outlet + year always required.

**Approved instance:** Cardi B Coachella 2018 (Tab 2, not yet built
as HTML but approved in session)

**Structure:**
```
White chart-wrap (same border/radius as other cards)
  ├── Context header: Artist name (DM Serif Display large),
  │     event + year (DM Mono 9px #888)
  ├── Key figures (if applicable):
  │     Fee: DM Serif Display 28–30px, teal
  │     Spend: DM Serif Display 28–30px, orange
  │     Net: DM Serif Display 28–30px with +/- sign
  ├── Quote block:
  │     Left border: 3px solid #0a7c72 (AI lane) or #E8B923 (OF)
  │     Quote text: DM Serif Display italic 14px #111111
  │     Attribution: DM Mono 9px #888888 — Source · Publication · Year
  └── Net result callout (if applicable):
        Bold figure + plain language explanation
```

**Rules:**
- Quote must be primary source — no paraphrase
- Attribution always: Name · Publication · Year
- If quote + figures: figures above quote, never below
- Net loss shown as negative number with explanation

---

### CARD TYPE F — Badge/Signal Row List

**Use for:** Multiple entities ranked by a categorical signal.
Inspired by TMM Decision Rights Status list (Image 3 in session).
Clean rows, signal badge on right, no chart needed.

**Not yet built — approved direction from May 4 session.**

**Structure:**
```
White chart-wrap
  └── Rows: [Entity name left] [Badge right]
        Entity: DM Sans 600 14px #111111
        Sub-context: DM Mono 8px #aaaaaa
        Badge: DM Mono 9px 500 uppercase, padding 3px 8px,
          border-radius 3px
        Badge colors:
          LARGE: bg #0a7c72, text white
          SMALL: bg #c95f1a, text white
          SOLO: bg #444441, text white
          (Or: OVERLAP/CLEAR/ABDICATE from TMM for other pieces)
        Row divider: 1px #f0ede8
```

**Rules:**
- No bars — badge IS the signal
- Works when the category is binary or has 3 clear options
- Stronger than bars when the number of categories is small
- Sort by badge value, then A–Z within badge group

---

### CARD TYPE G — Gross Revenue Table with Production Indicator

**Use for:** Multiple entities, showing both a quantitative figure
(gross) and a qualitative signal (production tier) in one view.

**Approved direction from May 4 session (Option C). Not yet built.**

**Structure:**
```
White chart-wrap
  ├── Chart title: DM Serif Display 15px
  └── Table rows: [Artist + year] [Gross] [Shows] [Tier bar]
        Column widths: 50% / 20% / 15% / 15%
        Artist: DM Sans 600 12px #111111
        Year/tour: DM Mono 8px #aaaaaa
        Gross: DM Mono 500 11px #333333
        Shows: DM Mono 11px #888888
        Tier bar: narrow (15% col width), height 10px,
          same fill logic as Card Type C
          Solo=33%, Small=66%, Large=100% of column width
```

**Rules:**
- Sort by gross high to low
- Show count always shown — it contextualizes gross
- Tier bar is narrow — argument is in gross + shows, not bar
- No legend needed — Solo/Small/Large legible from bar length

---

### CARD TYPE H — Loop/Feedback Diagram

**Use for:** Cyclical processes where each stage feeds the next.
The Dua Lipa feedback loop (criticism → escalation → expectation).

**Not yet built — approved from May 4 card map.**

**Structure:**
```
Dark card (OF lane)
  └── Loop visual (CSS/SVG, no JS):
        Central label: "go girl give us nothing" (DM Mono, gold)
        4 nodes around it, connected by curved arrows:
          Criticism → More production → Higher expectations
          → More criticism risk → (back to start)
        Each node: small rounded rect, DM Mono 10px
        Arrows: gold (#E8B923), thin stroke
```

**Rules:**
- No animation — static only
- Center label must be legible at mobile size
- Gold accent throughout (OF lane)

---

### CARD TYPE I — Timeline (3-Step Arc)

**Use for:** Documented before/after arcs with named dates.
The Dua Lipa arc: 2018 comment → 2021 acknowledgment → 2022 tour.

**Not yet built — approved from May 4 card map.**

**Structure:**
```
White chart-wrap
  └── 3-step horizontal timeline:
        Step number: DM Mono 9px gold/teal circle
        Year: DM Serif Display 18px bold
        Event: DM Sans 500 12px #333333 (1–2 lines max)
        Connector: thin horizontal rule between steps
        Source: DM Mono 8px #888888 below event
```

**Rules:**
- Max 3 steps per timeline card — more belongs in accordion
- Year is the hero — larger than the event text
- Source required on each step
- No decorative flourishes

---

### CARD TYPE J — Two-Column Language Comparison

**Use for:** Same behavior described differently by gender/context.
Media language gap: "authentic" vs "not enough."

**Not yet built — approved from May 4 card map.**

**Structure:**
```
White chart-wrap
  ├── Column headers: Male / Female (DM Sans 600 12px, teal/amber)
  └── Quote rows:
        Each row: [quote left] [quote right]
        Quote: DM Serif Display italic 13px #111111
        Source: DM Mono 8px #888888 below quote
        Row divider: 1px #f0ede8
```

**Rules:**
- Quotes must be from named publications — no social media
- Source logo or outlet name on each quote
- 3–4 rows maximum — brevity is the point
- The contrast is the argument — no explanatory text needed

---

## 6. CARD COMPONENT REQUESTS FOR CLAUDE DESIGN

When opening Claude Design, provide this as the generation prompt:

```
Read the Alterrell Interactive design system from this document.
Then generate 10–20 card component options using the approved
card types (A through J). Each card should:

1. Use Obsidian Futures lane tokens (dark #111118 outer card,
   white #ffffff inner chart, gold #E8B923 accent)
2. Follow the exact typography rules — DM Serif Display for
   chart titles and subject names, DM Mono for labels/captions,
   DM Sans for body and artist names
3. Include a swipe hint "Swipe for more cards →" at top
4. Include an eyebrow, headline, chart-wrap, verdict block,
   and caption — in that order
5. Have a visible border on bar tracks (1.5px solid #d4d1cc)
   to create the "glow" effect on white backgrounds

Generate these specific card variants:
- Card Type A: Artist comparison table (2 artists, 6 data rows)
- Card Type B: $100 indexed stacked bar (2 bars, 4–5 slices)
- Card Type C: Production intensity bars (8 artists, 3 tiers)
- Card Type D: Iceberg metaphor (2 zones, labeled rows)
- Card Type E: Quote card with figures (1 quote, 3 figures)
- Card Type F: Badge signal list (8 rows, 3 badge types)
- Card Type G: Gross + production table (7 rows, 4 columns)
- Card Type H: Feedback loop diagram (4 nodes, center label)
- Card Type I: 3-step timeline arc (3 steps, sources)
- Card Type J: Two-column language comparison (4 quote pairs)

Also generate these variants for the Alterrell Interactive
lane (light/paper background, teal accent):
- Card Type C variant: teal accent, paper background
- Card Type F variant: teal badges, paper background
- Stat card: large number + label + source
- Callout card: left border teal, pull quote treatment
```

---

## 7. PIECES THIS SYSTEM APPLIES TO

All current and pipeline pieces use these components:

**Live pieces (Alterrell Interactive lane — teal):**
- Fast Food Sodium ("Fast Food's Hidden Sodium Tax")
- Ethnic Naming Series (Parts 0, 1, 2 — needs voice pass)
- Hub (interactive.alterrell.com)

**In build (Obsidian Futures lane — gold):**
- Concert Tax ("The Gendered Burden of Women on Stage")
  Cards approved: A (Bieber/Carpenter), B ($100 index),
  C (cohort rap + pop, stadium tours), D (iceberg)
  Cards pending: E (Cardi B), F (stadium badges),
  G (gross table), H (loop), I (Dua Lipa arc), J (language gap)

**Pipeline pieces:**
- Where's Beyoncé? (Alterrell Interactive lane, teal)
- HBS Digital Museum (Alterrell Interactive lane)
- Congress Part 1A "Senator Selfish" (Alterrell Interactive lane)
- Gay Uncles (Obsidian Futures lane, gold)
- Musical Queens (Obsidian Futures lane, gold)

---

## 8. WHAT NOT TO DO IN CLAUDE DESIGN

- Do not build a new design system from scratch — this one exists
- Do not use purple `#1e1040` as a background — use `#0a0a12`
- Do not use amber/gold gradients as categorical data colors
- Do not put text inside shapes unless the shape is large enough
- Do not use gray text on dark backgrounds
- Do not add animation or JavaScript to card components
- Do not use dots, scatter plots, or pie/donut charts
- Do not introduce new font families — four fonts only
- Do not gender-code colors within a single chart
- Do not add left borders to rows unless gender interleaving
  requires it and it doesn't feel like over-explanation
- Do not overwrite previous versions — version all files

---

## 9. STANDING RULES LOCKED THIS SESSION (May 4, 2026)

These were established through iteration and must be applied
proactively — not reactively after AMA flags them:

1. White charts inside dark cards — always
2. No gray text on dark backgrounds — ever
3. Labels inside bars if slice height ≥ 28px; outside otherwise
4. DM Serif Display for all chart subject/artist names, 14px min
5. Chart index labels: DM Sans 500, 12px, #333333
6. No gradient color families for categorical data
7. Verdict block: gold left border, DM Serif Display italic,
   rgba(248,246,241,0.9) — every completed card
8. Swipe hint: "Swipe for more cards →" exact text, always
9. Single color for all bars in one chart (#0a7c72 default)
10. Bar tracks: border 1.5px solid #d4d1cc (the glow)
11. Tier boundaries snap exactly: 33.33% / 66.66% / 100%
12. Artist names: two-line treatment (first / last) when
    side-by-side — both sides must match exactly
13. File versioning: v1, v2, v3 — never overwrite
14. No JavaScript for swipe/gallery behavior — CSS scroll snap only
15. Five-tab platform standard: Overview / [Data] / [Systemic] /
    History / Take Action — Sources accordion in Tab 5

---

*Generated May 4, 2026 · Alterrell Interactive project folder*
*For use in Claude Design onboarding — read before generating*
