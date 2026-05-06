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
- Teal `#0a7c72` — retired
- Paper background `#f8f6f1` — retired
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

1. Highlight accent color — TBD from: Deep Crimson `#C41230`, Forest `#1B6B3A`, Burgundy `#7D1D3F`
2. "Unravel the Data" tagline — under review, may be retired from nav
3. Celebration register accent — warm color for Musical Queens, Concert Tax, Gay Uncles pieces. Separate from civic accent. TBD.
4. Tab bottom-nav CTA behavior — each tab ends with a next-section CTA rather than endless scroll. Component not yet built.
5. /tools sub-area — FrameShift, Forever Loved, future tools. Same site, /tools path. Not yet built.

---

## SESSION RULES FOR CLAUDE CODE

Before any build session touches CSS or HTML:
1. Read this file (BRAND-BRIEF.md)
2. Read PLATFORM-BRIEF.md
3. Read DEPLOY-CHECKLIST.md
4. State which locked decisions apply to the current task
5. State which open decisions need AMA input before proceeding

Never modify alterrell-interactive.css directly.
All color and typography changes live in theme-v2.css as overrides.
Never change elements not specified in the current task.
If a decision is not in this brief, surface it to AMA before acting on it.
