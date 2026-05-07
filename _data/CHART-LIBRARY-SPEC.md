# ALTERRELL INTERACTIVE — CHART LIBRARY SPEC
# alterrell-charts.css + component reference
# Locked: May 7, 2026
# Status: SPEC ONLY — no build until AMA confirms session type

---

## OVERVIEW

This spec governs all data visualization components across Alterrell Interactive.
Every component exists in two versions:

- **Mobile-first** — one idea at a time, no legend required, pattern visible before
  format is understood. This is the version that ships in every piece.
- **Substack/YouTube analytical** — full chart with axes, legends, comparisons,
  richer data density. Built as standalones or embedded in long-form Substack posts.

**Standing rules (apply to every component):**
1. Every component that displays a data point must include a source stamp.
   No number ships without a source. DM Mono, small, always visible — never collapsed.
2. No boxes on mobile. White space and type scale do the container work.
3. Editorial lines are always AMA voice. Claude suggests after data exploration.
   AMA finalizes. Claude Code never fills an editorial line slot.
4. Filter and sort labels are editorial, not technical. Written in Type 1 sessions.
5. Mobile tables do not exist. Every table becomes a sorted bar list or
   expandable card list on mobile.
6. The CTA is part of every D-group component. Never a data point alone.
7. Color split rule (applies to all bar components): teal fill up to limit/benchmark,
   danger red past it. No legend needed — color does the work.

---

## DESIGN TOKENS (inherits from alterrell-interactive.css)

```css
/* Inherit from alterrell-interactive.css — never redefine */
--teal: #0a7c72;
--orange: #c95f1a;
--paper: #f8f6f1;
--ink: #111111;
--ink-secondary: #444444;
--ink-muted: #888888;
--border: #e0dcd4;
--dark-section: #16141f;

/* Chart-specific tokens — defined in alterrell-charts.css */
--chart-danger: #c0392b;
--chart-safe: var(--teal);
--chart-track: #e8e5e0;
--chart-stamp: var(--ink-muted);
--chart-bar-height: 24px;
--chart-row-gap: 10px;
--chart-pad: 0 0 6px 0;
```

---

## GROUP A — COMPARISON

### A1 — Horizontal Bar with Color Split

**Mobile version:**
- Label above or left of bar (DM Sans 500, 13px)
- Bar always full container width
- Color split: teal fill up to benchmark, danger red past it
- Value sits right of bar (DM Mono, 12px)
- Benchmark marker: a small labeled tick at the exact pixel position of the limit
- Source stamp: DM Mono, 10px, --chart-stamp, below the full component
- No axis. No gridlines. No legend — color does the work.

**Structure:**
```
[LABEL]
[████ TEAL ████][██ RED ██████]  VALUE
[LABEL]
[████ TEAL ████░░░░░░░░░░░░░░]  VALUE
                ↑ limit marker
Source: [SOURCE]
```

**CSS class:** `.ac-hbar`
**JS required:** No — pure CSS with inline width values
**Substack/YouTube:** Grouped bar with axis, gridlines, multiple metrics, legend

---

### A2 — Segmented Bar (Decade Timeline variant)

**Mobile version:**
- One row per decade or category
- Each row is a single filled block — total value only, no segments
- Plain sentence annotation below each row when needed
- Rows grow longer over time to show expansion
- Source stamp below full component

**Structure:**
```
[DECADE/LABEL]  [████████████████████]  TOTAL
                One sentence. Plain language.
[DECADE/LABEL]  [████████████████████████████]  TOTAL
```

**CSS class:** `.ac-segbar`
**JS required:** No for mobile version. Yes for network color segments (Substack variant)
**Substack/YouTube:** Full segmented bar with network color coding, legend, hover labels

---

### A3 — City Budget (Mobile butterfly reframe)

**Mobile version:**
- One city per block, stacked vertically
- Police always row 1, Services always row 2
- Same left edge, both rows — length difference is the argument
- City name as section header (DM Serif Display, 16px)
- Values right of bar (DM Mono, 12px)
- Source stamp below full component

**Structure:**
```
CITY NAME

  Police    [████████████████████]  $VALUE
  Services  [████████]              $VALUE

CITY NAME
  ...
```

**CSS class:** `.ac-budget`
**JS required:** No
**Substack/YouTube:** Full butterfly chart with center spine, city labels, axis

---

### A4 — Stacked Comparison (T-chart reframe)

**Mobile version:**
- One comparison point per block
- Both sides stacked vertically, not side by side
- Comparison point label as header (DM Sans 800, 11px, uppercase, tracked)
- Two rows below: Left subject / Right subject, value right-aligned
- Visual separation between blocks: 1px border-top, --border
- Source stamp below full component

**Structure:**
```
COMPARISON POINT LABEL
  Subject A    VALUE
  Subject B    VALUE

COMPARISON POINT LABEL
  Subject A    VALUE
  Subject B    VALUE
```

**CSS class:** `.ac-compare`
**JS required:** No
**Substack/YouTube:** Full T-chart with two columns, header row filled navy

---

### A5 — Named Quadrants (2×2 reframe)

**Mobile version:**
- No grid, no axes, no dots
- Each quadrant is a named card with roster examples below it
- Primary quadrant (the argument) renders first, largest
- Roster: real names, comma-separated, DM Sans 500, 12px
- Editorial line below roster (AMA voice — slot left empty until Type 1 session)
- Source stamp below full component

**Structure:**
```
QUADRANT NAME
High [axis]. Low [axis]. [Demographic skew].
  ● Name  ● Name  ● Name

QUADRANT NAME
...

[AMA EDITORIAL LINE]
Source: [SOURCE]
```

**CSS class:** `.ac-quadrant`
**JS required:** No
**Substack/YouTube:** Full 2×2 with plotted dots, axis labels, hover name tooltips

---

## GROUP B — MAGNITUDE & PROPORTION

### B1 — Before/After Bar (vertical bar reframe)

**Mobile version:**
- Two rows only: before state and after state
- Year/label left, bar middle, value right
- Bar length proportional to value — same scale both rows
- Plain editorial statement below (AMA voice)
- Source stamp below statement

**Structure:**
```
COMPONENT TITLE

  [YEAR/LABEL]  [████]               $VALUE
  [YEAR/LABEL]  [█████████████]      $VALUE

  [AMA EDITORIAL LINE]
  Source: [SOURCE]
```

**Note:** This component is reusable for budget comparisons, cost projections,
and any before/after argument. It is distinct from the vertical column chart
which is Substack/YouTube only.

**CSS class:** `.ac-beforeafter`
**JS required:** No
**Substack/YouTube:** Full column chart with axis, gridlines, annotation arrows

---

### B2 — Ranked List (treemap reframe)

**Mobile version:**
- Items ranked by value, largest first
- Label left, bar middle, value right
- Single fill color — no segments on mobile
- Annotation line below specific rows when editorially significant
- Source stamp below full component

**Structure:**
```
COMPONENT TITLE

[LABEL]  [████████████████████████████]  VALUE
         One annotation sentence.

[LABEL]  [████████████████████]          VALUE

[LABEL]  [██]                            VALUE
         Annotation when warranted.

Source: [SOURCE]
```

**CSS class:** `.ac-ranked`
**JS required:** No
**Substack/YouTube:** Full treemap with D3, proportional tiles, hover states

---

### B3 — Nutrition/Progress Row

**Mobile version:**
- One metric per row
- Label left, bar middle, value + plain verdict right
- Color split: teal under limit, danger red over
- Verdict in plain language — never "over 100%" or technical language
- Source stamp below full component

**Structure:**
```
MEAL/ITEM NAME

[METRIC]  [████ TEAL ████][██ RED]  VALUE  · Verdict
[METRIC]  [████████░░░░░░░░░░░░░░]  VALUE  · Verdict
[METRIC]  [██░░░░░░░░░░░░░░░░░░░░]  VALUE  · Verdict

Source: [SOURCE]
```

**CSS class:** `.ac-progress`
**JS required:** No
**Substack/YouTube:** Full nutrition comparison table across chains, sortable

---

### B4 — Emoji/Pictograph

**Mobile version:**
- Label above each row (DM Sans 800, 11px, uppercase)
- Emoji row — repeating unit, count matches data
- Value right of emoji row (DM Mono, 12px)
- Plain statement below both rows — replaces legend entirely
- Source stamp below statement

**Structure:**
```
[SUBJECT A]
🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔  VALUE

[SUBJECT B]
🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔            VALUE

[PLAIN STATEMENT — AMA voice]
Source: [SOURCE]
```

**Note:** Emoji selection is piece-specific and AMA-approved. Never use
generic chart icons. The emoji must be the argument — it should make the
reader feel something before they count.

**CSS class:** `.ac-pictograph`
**JS required:** No
**Substack/YouTube:** Full isotype grid with precise counts, demographic breakdown

---

## GROUP C — CHANGE OVER TIME

### C1 — Moment Chart (line chart reframe)

**Mobile version:**
- One row per significant moment — before, peak(s), after
- Rows are years, not a curve
- Bar length proportional to value
- Year left, bar middle, value right
- Annotation on peak row only (italicized, DM Sans 400, 11px)
- Multiple peaks supported — as many rows as the data has moments
- Editorial line at bottom (AMA voice — written after data exploration)
- Source stamp below editorial line

**Structure:**
```
NAME — [METRIC] OVER TIME

[YEAR]  [░░░░░░░░░░░░░░░░░░░░]  VALUE
[YEAR]  [████████████████████]  VALUE  ← [ANNOTATION]
[YEAR]  [████████████████████████████████]  VALUE  ← [ANNOTATION]
[YEAR]  [████████████░░░░░░░░]  VALUE
[YEAR]  [████░░░░░░░░░░░░░░░░]  VALUE
[YEAR]  [▌░░░░░░░░░░░░░░░░░░░]  VALUE

[AMA EDITORIAL LINE]
Source: SSA Baby Names Database
```

**Rules:**
- Never reduce to three moments if the data has more story than that
- Decline stories, multi-peak stories, and plateau stories all use this
  same component — the shape of the rows is the argument
- Editorial line slot stays empty until AMA explores the data and
  confirms the takeaway

**CSS class:** `.ac-moment`
**JS required:** No for mobile. Yes for the Substack line chart variant.
**Substack/YouTube:** Full line chart with Chart.js, all years plotted,
multiple names overlaid, hover tooltips

---

### C2 — Decade Timeline

**Mobile version:**
- One row per decade
- Rows grow longer over time — bar length = total volume (seasons or hours)
- Decade label left
- Two variants: by seasons, by hours of airtime — toggle between them
- Network color segments available as Substack variant only
- Mobile version: single fill color, total value right of bar
- Annotation below specific decades when editorially significant
- Source stamp below full component

**Structure — by seasons:**
```
COMPONENT TITLE  [SEASONS ▼]  [HOURS]

1960s  [████]                    ~14 seasons
1970s  [████████]                ~28 seasons
1980s  [████████████]            ~41 seasons
1990s  [████████████████]        ~55 seasons
2000s  [████████████████████]    ~67 seasons
2010s  [████████████████████████]  ~78 seasons
2020s  [████████████████████████████]  ~89 seasons

[AMA EDITORIAL LINE]
Source: [SOURCE]
```

**CSS class:** `.ac-decade`
**JS required:** Yes — toggle between units requires JS state
**Substack/YouTube:** Full segmented bar with network colors, legend, hover labels

---

## GROUP D — EDITORIAL EMPHASIS

### D1 — Stat Callout Block

**Status: OPEN — anchoring visual and comparison format deferred**

**What is locked:**
- Number large (Spectral 800, clamp 2.5rem–4rem)
- One editorial line below (AMA voice, DM Sans 500, 14px)
- Source stamp always visible (DM Mono, 10px)
- Comparison point always present — number alone is never enough
- No box on mobile — anchoring treatment TBD (left border color,
  background tint, or graphic element — decision deferred to AMA)
- Comparison format flexible by piece:
  Sodium → "vs. daily limit"
  Congress → "vs. national average"
  Naming → "vs. baseline year"

**What is not yet locked:**
- Anchoring visual treatment
- Whether comparison label follows fixed format or is free-form per piece

**CSS class:** `.ac-stat` (partial — complete after anchoring decision)

---

### D2 — Pull Quote / Statement Card

**Mobile version (ORIGINAL — locked):**
```
┌─────────────────────────────┐
│                             │
│  "Men set the ceiling.      │
│   Women are required to     │
│   exceed it just to         │
│   belong."                  │
│                             │
│  ── The Hidden Concert Tax  │
└─────────────────────────────┘
```

- Box retained on mobile
- Quote marks retained
- Attribution line retained (piece title, not author)
- DM Serif Display, italic, 16px
- Left and right border: 1px solid --border
- No color fill — white background only
- Source stamp: piece title as attribution — not a data source stamp

**CSS class:** `.ac-pullquote`
**JS required:** No
**Note:** Reframe was rejected. Original is locked as-is.

---

### D3 — Annotation Block

**Mobile version (REFRAME — locked):**
- Subject label header (DM Mono, 10px, uppercase, tracked, teal)
- ✓ row: what they did give to (DM Sans 500, 13px)
- ✗ row: what they did not give to + dollar amount (DM Sans 800, 13px)
- Visual gap between ✓ and ✗ rows
- Editorial line below (AMA voice)
- Source stamp below editorial line

**Structure:**
```
[SUBJECT] — [CATEGORY LABEL]

  ✓  [What they did]. [Context].

  ✗  [What they didn't].  $VALUE or qualifier.

     [AMA EDITORIAL LINE]
     Source: [SOURCE]
```

**CSS class:** `.ac-annotation`
**JS required:** No
**Substack/YouTube:** Full annotation block with source links, amounts, org names listed

---

### D4 — Connector / Two-Beat Statement

**Mobile version (REFRAME — locked):**
- No boxes, no arrows, no visual scaffolding
- Two plain sentences with a line break as the connector
- First beat: the fact
- Second beat: the implication
- Optional CTA below second beat: "The data is in the next tab"
- Source stamp below if first beat is a data claim

**Structure:**
```
[FACT STATED PLAINLY]
[IMPLICATION — the "therefore"]

[OPTIONAL CTA — pulls reader forward]
Source: [SOURCE if first beat is data]
```

**Rules:**
- Both beats are AMA voice
- Second beat must not repeat the first beat — it must advance it
- CTA is optional but recommended on Overview tab components
- Never more than two beats — if the argument needs three, it belongs
  in body copy, not a connector component

**CSS class:** `.ac-connector`
**JS required:** No
**Substack/YouTube:** Full connector diagram with sourced fact blocks, arrows,
supporting data points

---

## GROUP E — DATA REFERENCE

### E1 — Sorted Single-Metric Bar List (table reframe)

**Mobile version:**
- Sort buttons at top: one per metric (DM Sans 800, 10px, uppercase)
- Active sort button: navy fill, white text
- Inactive: white, full ink text
- One bar per item — color split applies
- Value right of bar (DM Mono, 12px)
- Tapping a sort button reranks list and redraws bars for that metric
- Source stamp below full component

**Structure:**
```
SORT BY:  [METRIC A ▼]  [METRIC B]  [METRIC C]

[ITEM]    [████ TEAL ████][██ RED]  VALUE
[ITEM]    [████ TEAL ████░░░░░░░]  VALUE
[ITEM]    [████░░░░░░░░░░░░░░░░░]  VALUE

Source: [SOURCE]
```

**CSS class:** `.ac-sorttable`
**JS required:** Yes — sort/rerank on button tap
**Substack/YouTube:** Full multi-column sortable table, all metrics visible,
hover states, download option

---

### E2 — Expandable Card List (filtered)

**Mobile version:**
- Filter buttons at top (DM Sans 800, 10px, uppercase)
- Each item is a collapsed card: name + two key stats visible
- Tap to expand: reveals C1 moment chart inline + editorial line
- Editorial line slot empty until AMA confirms after data exploration
- Filter labels are editorial — written in Type 1 session, not generated
- Source stamp on each expanded card

**Structure — collapsed:**
```
FILTER: [ALL ▼]  [FILTER A]  [FILTER B]  [FILTER C]

[NAME]
Peak: VALUE · YEAR
After: VALUE · YEAR
▼ See the pattern
```

**Structure — expanded:**
```
[NAME]
Peak: VALUE · YEAR
After: VALUE · YEAR

[C1 MOMENT CHART INLINE]

[AMA EDITORIAL LINE]
Source: [SOURCE]
▲ Close
```

**CSS class:** `.ac-cardlist`
**JS required:** Yes — expand/collapse, filter state
**Substack/YouTube:** Full sortable table with all columns, downloadable CSV,
methodology footnote

---

## COMPONENT HIERARCHY SUMMARY

| Class | Group | JS needed | D1 open |
|---|---|---|---|
| `.ac-hbar` | A — Comparison | No | — |
| `.ac-segbar` | A — Comparison | No (mobile) | — |
| `.ac-budget` | A — Comparison | No | — |
| `.ac-compare` | A — Comparison | No | — |
| `.ac-quadrant` | A — Comparison | No | — |
| `.ac-beforeafter` | B — Magnitude | No | — |
| `.ac-ranked` | B — Magnitude | No | — |
| `.ac-progress` | B — Magnitude | No | — |
| `.ac-pictograph` | B — Magnitude | No | — |
| `.ac-moment` | C — Time | No (mobile) | — |
| `.ac-decade` | C — Time | Yes | — |
| `.ac-stat` | D — Editorial | TBD | OPEN |
| `.ac-pullquote` | D — Editorial | No | — |
| `.ac-annotation` | D — Editorial | No | — |
| `.ac-connector` | D — Editorial | No | — |
| `.ac-sorttable` | E — Reference | Yes | — |
| `.ac-cardlist` | E — Reference | Yes | — |

---

## BUILD SEQUENCING

**Phase 1 — CSS-only components (no JS)**
Build first. These cover ~70% of piece needs.
`.ac-hbar` · `.ac-budget` · `.ac-compare` · `.ac-quadrant` ·
`.ac-beforeafter` · `.ac-ranked` · `.ac-progress` · `.ac-pictograph` ·
`.ac-moment` · `.ac-pullquote` · `.ac-annotation` · `.ac-connector`

**Phase 2 — JS components**
Build after Phase 1 ships and is verified.
`.ac-segbar` (Substack variant) · `.ac-decade` · `.ac-sorttable` · `.ac-cardlist`

**Phase 3 — Deferred**
`.ac-stat` — build after D1 anchoring and comparison format decisions are locked.

---

## OPEN DECISIONS (resolve in Type 1 before Phase 1 build)

1. D1 anchoring visual — left border color, background tint, or graphic element
2. D1 comparison format — fixed "vs. [benchmark]" or free-form per piece
3. `/engage` section — desktop-optimized heavy interactive standalones.
   Scoped but not yet built. Pieces link out to it. Grows over time.
   Substack/YouTube analytical variants live here.

---

## SESSION RULES FOR THIS LIBRARY

- `alterrell-charts.css` is a new file — it extends `alterrell-interactive.css`,
  never replaces or modifies it
- Every component is built mobile-first — desktop/Substack variants are separate
- No component ships without a source stamp slot in the HTML
- Editorial line slots are always empty placeholders in the build —
  Claude Code never fills them
- Filter and sort labels are provided by AMA in the Type 1 session brief
  before Claude Code builds the component
- Build session type: Type 3 for the CSS file itself ·
  Type 2 for piece-level component implementation
