# BRAND-BRIEF.md
# Alterrell Interactive
# Last updated: May 6, 2026
# Status: LOCKED — do not modify without explicit AMA approval

---

## PLATFORM IDENTITY

**Name:** Alterrell Interactive
**URL:** interactive.alterrell.com
**Tagline:** Unravel the Data (under review — may be retired from nav)
**Mission:** Data as Dignity — data reveals systems, never judges individuals
**Voice register:** Magazine cover. Confident friend who did the research. Implicates the reader without attacking them.
**Audience:** Mobile-first. Short time frame. Not analytical by default. Needs to skim, feel something, and know what to do next.
**Channels:** Website (interactive tools + visuals) → Substack (long-form source essay) → YouTube (personality engine)

---

## DESIGN PHILOSOPHY (LOCKED)

These are not preferences. They are rules.

**Weight does the work.**
Hierarchy comes from letterform weight and scale. Heavy is confident. Thin is uncertain. Never use opacity or color variation to create hierarchy — use weight and size.

**Color is a commitment.**
When a color appears it owns its entire surface. No partial opacity. No color on body text or headlines. Color lives only on filled surfaces: buttons, active tabs, tags. One color used fully means something. The same color used everywhere means nothing.

**Negative space is earned, not defaulted.**
Every gap must do one of three jobs: separate two competing ideas, give a visual moment room to breathe, or signal a section transition. Padding is never decorative.

**Full width is a rule.**
Any element that introduces another element must span the same width as what it introduces. A rule, subhead, or label that stops at 60% of a full-width container is a layout error.

**Comparable things occupy equal visual weight.**
Side-by-side elements must share the same height, the same title area, the same starting Y position for body content. The grid is non-negotiable.

**Simplicity is discipline.**
Every element has a job and does only that job. Nothing decorative. Nothing hedging.

**Two registers, one system.**
Civic/policy pieces use the evidence register. Cultural/celebration pieces use the energy register. Same typographic system, same structural rules, same nav — accent color may rotate by piece category. The platform reads as one masthead regardless of register.

---


## VISUAL LANGUAGE — LOCKED (updated May 7, 2026)

These principles govern all data visualization and editorial components.
Derived from reference brands: Delta, AmEx, Starbucks, WB.
The CHART-LIBRARY-REFERENCE.html is the source of truth for rendering.
When brief and reference conflict, the reference wins.

**Color as field, not accent.**
Color owns its surface completely. In Option 1, teal owns the entire
card. In Option 2, teal owns the left border — 7px, full saturation,
no opacity reduction. Neither is an accent. Both are commitments.
Once AMA locks a surface option per piece, it is applied consistently
throughout that piece — never mixed.

**Tonal depth within a single hue.**
Color must feel like it has material body, not a flat fill. Depth comes
from the hue itself — darker shadows, lighter relief — not from mixing
multiple colors. Reference: Starbucks green, WB gold, AmEx blue,
Delta navy. Each owns one hue completely and earns depth within it.
The only permitted non-hue texture is the danger zone hatch pattern
(diagonal stripe, used exclusively on bars exceeding a defined
threshold). All other depth is achieved through hue manipulation only.

**Numbers fill their container.**
A stat is not a data point. It is the headline. It takes up 40–60% of
the vertical space of its component. Context text below is small by
comparison, which makes the number feel massive and important. Never
treat a number as supporting evidence — it is the argument.

**Bar values are fixed, not dynamic.**
All bar values are right-aligned to the right edge of the full track —
never inside the colored bar fill, never inside the hatch zone. Values
sit in a fixed column outside the bar in full ink (#111 on white/paper,
#fff on teal field). No value ever moves horizontally based on bar
length. Color inside the bar encodes the argument. The value is always
readable at a fixed position.

**Bar scaling formula.**
Longest bar = 90% of track width always. All other bars calculated as
(value / max_value) * 90. Never hardcode widths from raw data
percentages. Maximum empty track on longest bar: 10%. All other rows
have proportionally more empty space — that gap IS the argument.
The formula governs calculation. A minimum visible width (44px) governs
rendering floor — bars never collapse below legibility regardless of
formula output.

**Primary labels are headlines.**
Franchise names, decade labels, city names, subject names are headlines.
Minimum 24px, target 28–32px, Spectral 800. Size the column to fit the
label — never shrink the font to fit the column. Label column: 40% of
card. Minimum 20px gap between label column and track always. If the
longest label wraps, expand the column and compress the track.

**Benchmark and value labels at equal weight.**
Benchmark labels (e.g. "Daily limit: 1,500mg") and bar values must be
the same size and weight: DM Mono 700, 14px minimum. Never lighter than
the values they contextualize.

**Type scale as the entire visual.**
For some arguments, the typography IS the visualization. No chart
needed. A massive number at 40–60% vertical height with small context
text below communicates faster than any bar. Text size is not
standardized across components — scale serves the argument of each
component individually.

**Two surface options per component.**
Every chart component ships in two variants:
Option 1 — Teal field (#0a7c72), white as relief
Option 2 — White surface (#fff), 7px solid teal left border (#0a7c72)
AMA locks one option per component per piece before deploy. The library
maintains both until locked. Full commitment applies at the piece level.

**Empty space cap.**
No more than 5–10% empty space in any component, excluding left/right
padding. If space is empty, scale up bars, increase font, or widen the
label column. Never leave unearned empty space.

**Reference images (on file with AMA):**
- Board Composition vertical bars — color as field, proportional fill
- Fiverr/Colors Foundation 800+ stat — number fills container
- Pew bar chart — label left, value right-aligned outside bar
- Pew 59% Latino stat — type scale as visual, field as surface
- Pew 1-in-3 gold field — single hue, full commitment
- Pew 85% dark field — texture subordinate to number
- Florida gerrymandering navy field — type only, field owns surface

---

## COLOR SYSTEM (LOCKED EXCEPT WHERE NOTED)

**Primary — Navy**
`#0F172A`
Used on: nav wordmark, active tab fill, button fill, tag fill, stat band background, left border accent on hub cards.
Never used on: body text, headlines, decorative elements.

**Accent — Electric Blue (wordmark only)**
`#2563EB`
Used exclusively on: the word "Interactive" in the nav wordmark (italic).
Not used anywhere else in the system.

**Highlight — TBD**
One deep fully-saturated color. Candidates: Deep Crimson `#C41230`, Forest `#1B6B3A`, Burgundy `#7D1D3F`.
Used on: CTA buttons, active state indicators when navy is not appropriate, celebration register accents.
Decision required from AMA before CSS is updated.

**Base — White**
`#FFFFFF`
All content backgrounds. Paper `#f8f6f1` is retired.

**Ink — Full black**
`#0F172A` (same as navy)
All body text, headlines, subheads. No grey. No opacity reduction. Full contrast always.

**Muted — for aside text only**
`#64748B`
Used only on: italic aside text beside CTA buttons. Nowhere else.

**Border**
`#E2E0DC`
Section dividers, card borders, CTA row top border.

## CHART LIBRARY TOKENS (ACTIVE — SCOPED TO CHART COMPONENTS ONLY)

These tokens are active for use in chart components only. They are
retired from piece page backgrounds, nav, and UI elements.

- Teal: `#0a7c72` — Option 1 field color, bar fill, teal border
- Paper: `#f8f6f1` — Option 3 surface (deferred, not in active use)
- Danger red: `#c0392b` — over-limit hatch zone color
- Ink: `#111111` — all primary labels and values on white surface
- Ink muted: `#888888` — source stamps and comp-tag labels only
- Border: `#e0dcd4` — track background, section dividers in white cards

The canonical token source for chart components is
CHART-LIBRARY-REFERENCE.html. Never derive chart tokens from the
main color system above — they are scoped separately.

---

## TYPOGRAPHY (LOCKED)

**Display / Headlines**
Font: Spectral 800 (serif)
Weight: 800 — never lighter for headlines
Opacity: 1 — always full
Color: `#0F172A` — always full ink, never colored
Use: piece headlines, hub card titles, hero moments

**Body**
Font: DM Sans 400
Weight: 400
Opacity: 1
Color: `#0F172A`
Use: paragraph copy, subheads, body text

**Interface / Labels**
Font: DM Sans 700–800
Weight: 700 minimum for all interface elements
Use: tab labels, button text, tag text, nav wordmark

**Mono**
Font: DM Mono
Use: source stamps, methodology text, nav labels only
Never use for body copy or headlines

**Scale contrast rule:**
Two sizes per component — large/heavy for the primary element, small/light for supporting text. No gradual scale. The gap between headline and body must be wide enough to read at a glance.

---

## COMPONENT RULES (LOCKED)

### Navigation
- White background
- Wordmark centered horizontally
- "ALTERRELL" in navy `#0F172A`, weight 800, uppercase, tracked
- "Interactive" in electric blue `#2563EB`, italic, weight 800
- No tagline in nav (under review)
- Bottom border: `1px solid #E2E0DC`
- Height: 50px

### Tab Bar
- White background
- Full width — grid layout, each tab takes equal share, no clipping
- Active tab: full navy `#0F172A` fill, white text
- Inactive tabs: white background, full black text `#0F172A`, weight 800
- No opacity reduction on inactive tabs — the filled active background does all differentiation work
- Height: 36–40px
- Font: DM Sans 800, 9–10px, uppercase, tracked

### Content Area
- White background `#FFFFFF`
- Padding: 18–20px
- No dark bands unless the content explicitly earns it

### Headline Row (LOCKED ORDER — DO NOT CHANGE)
1. Headline left (Spectral 800, 20–22px, width capped at 44% of container)
2. Subhead right (DM Sans 400, 13px, fills remaining width)
3. Both on the same row, aligned to baseline/top
4. No stacking — subhead never goes below headline

### Element Order Within a Piece Page (LOCKED — DO NOT CHANGE)
1. Nav
2. Tab bar
3. Headline + subhead inline row
4. Tags (immediately below headline row)
5. Body copy
6. CTA row (always last)

### Element Order Within a Hub Card (LOCKED — DO NOT CHANGE)
1. Stat band (navy background, number dominant, context text beside with divider)
2. Headline + subhead inline row
3. Tags (immediately below headline row)
4. CTA row (always last)

### Tags
- Navy filled `#0F172A`, white text
- DM Sans 800, 9–10px, uppercase, tracked
- Border radius: 2px
- Padding: 3px 8px
- Position: immediately below headline row — NEVER below CTA
- Multiple tags sit in a flex row, wrap if needed
- A piece can carry more than one tag

### CTA Row
- Always the last element in any component
- Left: navy filled button, white text, DM Sans 800, uppercase, tracked, border-radius 2px
- Right: italic aside text in muted ink `#64748B`
- Separated from content above by `1px solid #E2E0DC`
- Button label uses action language: "Explore the Data", "Read the Argument", "See the Numbers" — never just "Explore" or "Click Here"

### Stat Band (Hub Cards Only)
- Navy background `#0F172A`
- Number: Spectral 800, large (32–36px), white, full opacity
- Unit: smaller size, white at reduced opacity (45%)
- Divider: 1px vertical line, white at 20% opacity
- Context text: DM Sans 500, 11px, white at 60% opacity
- Height: tight to content — no excess padding
- Padding: 12–14px vertical, 18–20px horizontal

### Hub Card Body
- Left border: 3px solid electric blue `#2563EB` — signals live/active piece
- Padding: 16–18px
- Follows same element order as piece page minus nav and tabs

---

## SPACING RULES (LOCKED)

Every gap earns its place. Default padding is not a design choice.

- Nav height: 50px — no taller
- Tab bar height: 36–40px — no taller
- Content padding: 18–20px — consistent across all pieces
- Between headline row and tags: 10–12px
- Between tags and body: 12–14px
- Between body and CTA: 14–16px + top border

No component may have internal padding that makes the color-to-content ratio feel wasteful. If a dark band has more empty space than content, reduce the padding or reconsider whether the dark band belongs.

---

## WHAT IS NOT PERMITTED (HARD RULES)

- Grey text anywhere in the content hierarchy
- Opacity below 1.0 on any primary content (headlines, body, tags, buttons)
- Color applied to headline or body text
- Teal `#0a7c72` — retired from piece page backgrounds, nav, and UI
  elements. Active as chart library token only (see Chart Library
  Tokens below).
- Paper background `#f8f6f1` — retired from piece page backgrounds.
  Active as chart library token only (see Chart Library Tokens below).
- Dark full-width bands unless the content explicitly earns it
- Tab bar that does not span full container width
- Tags positioned below CTA
- Subhead stacked below headline (must be inline)
- Unearned whitespace — every gap has a job
- Side-by-side elements of unequal visual weight
- Any element that does not span the same width as the content it introduces

---

## CONTENT LANES → TAGS (MIGRATION IN PROGRESS)

Lanes (Alterrell Interactive / Obsidian Futures) are retired.
All pieces are Alterrell Interactive.
Content is organized by tags. A piece can have multiple tags.

Tag categories include but are not limited to:
- Civic
- Food Systems
- Entertainment
- Culture
- Housing
- Health
- Labor
- Identity
- Politics
- History

Tag colors: all navy for now. Color differentiation by tag category is deferred until the highlight color is decided.

---

## CHANNEL ROUTING RULE

If an argument requires more than 3 paragraphs to establish its premise, it belongs on Substack first. The web piece is the translation — simplified visuals, 2–3 paragraphs per tab, action-oriented. When AMA or Claude identifies long-form essay mode creeping into a web piece, the correct response is: "This argument at this complexity belongs on Substack. The web version might include A, B, or C — you choose."

---

## KO-FI INTEGRATION (REQUIRED PRE-DEPLOY)

Every piece must include a Ko-fi support block specific to that piece. The block must explain why continued support matters in the context of that specific argument — not a generic tip jar message. This is a deploy gate item. No piece ships without it.

Ko-fi URL: ko-fi.com/alterrell

---

## OPEN DECISIONS (NOT LOCKED)

1. Highlight accent color — TBD from: Deep Crimson `#C41230`,
   Forest `#1B6B3A`, Burgundy `#7D1D3F`. Decision required before
   CSS is updated. Deferred until after Congress Part 1A ships.

2. Celebration register accent — deferred. Concert Tax is currently
   running the Obsidian Futures dark treatment (#0a0a12 bg, #E8B923
   gold). This is acceptable for now because shareable assets are
   decoupled from the overall brand treatment. Musical Queens and
   Gay Uncles will need a warm accent decision before they build —
   flag in the Type 1 session for each piece.

3. Tab bottom-nav CTA behavior — moved to build decisions. Ships
   with Concert Tax (first piece with show/hide tabs). Component
   spec: each tab ends with a next-section nudge (text link, button,
   or directional arrow — TBD in Concert Tax Type 2 session).

4. /tools sub-area — FrameShift and Forever Loved will migrate to
   interactive.alterrell.com/tools eventually. Repos remain separate
   for now. No build work until migration is explicitly scoped.
   Do not combine repos without AMA decision.

---

## SESSION RULES FOR CLAUDE CODE

Before any build session touches CSS or HTML:
1. Read this file (BRAND-BRIEF.md)
2. Read PLATFORM-BRIEF.md
3. Read DEPLOY-CHECKLIST.md
4. Read CHART-LIBRARY-REFERENCE.html if the session involves
   any chart component
5. State which locked decisions apply to the current task
6. State which open decisions need AMA input before proceeding

Never modify alterrell-interactive.css directly.
Chart component styles live in alterrell-charts.css only.
Never change elements not specified in the current task.
If a decision is not in this brief, surface it to AMA before acting.
When brief and CHART-LIBRARY-REFERENCE.html conflict, the reference
HTML wins — it reflects approved decisions made after the brief.
