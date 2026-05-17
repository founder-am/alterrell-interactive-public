# DESIGN-DECISION-LOG.md
# Alterrell Interactive — Platform & Visual Library
# Compiled: May 14, 2026
# Source: Full project conversation history (Jan 2026–May 2026)
# Purpose: Prevent drift. Every entry is what AMA decided, not what Claude interpreted.

---

# PART 1 — PLATFORM DESIGN DECISIONS

These apply to every piece, every session, every build.

---

## TYPOGRAPHY (locked March 2026)

| Decision | What | Do NOT |
|---|---|---|
| Hero headlines | Spectral 700 (serif). Full opacity always. | Do not use DM Serif Display for heroes — AMA flagged it as "matrixy and too cold on mobile." |
| Section headers / h2 / stat numbers / pull quotes | DM Serif Display | Do not use for hero headlines. |
| Body copy / interface / labels | DM Sans 400 (body), 500 (emphasis) | Do not use weight 300 — moved to 400 for mobile legibility. Do not use 800 except for tab labels and tags. |
| Nav labels / source stamps / methodology | DM Mono | Do not use DM Mono for interface labels, data labels, or body text. Overuse creates "computery" feeling. |
| Body copy weight | 400 minimum | Do not use 300. Decided after mobile legibility review. |

Source: March 12 session (design audit + font comparison one-sheeter with 9 numbered decisions).

---

## COLOR SYSTEM

### Chart Library Tokens (active — scoped to chart components ONLY)
| Token | Value | Use | Do NOT |
|---|---|---|---|
| Teal | #0a7c72 | Option 1 field, bar fill, left border | Do not use on piece page backgrounds, nav, or UI elements — retired from those contexts per May 6 brand brief. |
| Paper | #f8f6f1 | Deferred Option 3 surface | Not in active use for piece backgrounds — retired per May 6. Active as chart token only. |
| Orange | #c95f1a | Available accent token | Decision needed per piece on whether/how to use. |
| Danger red | #c0392b | Over-limit hatch zone ONLY | Do not use for general emphasis. Only on bars exceeding a defined threshold. |
| Ink | #111111 | All primary labels/values on white surface | |
| Ink muted | #888888 | Source stamps and comp-tag labels ONLY | Do not use on primary labels, values, editorial lines, or annotations. |
| Border | #e0dcd4 | Track background, section dividers | |

### Platform UI Tokens (active — nav, tabs, hub, piece pages)
| Token | Value | Use |
|---|---|---|
| Navy | #0F172A | Nav wordmark, active tab fill, button fill, tag fill, stat band bg, hub card left border |
| Electric blue | #2563EB | Word "Interactive" in nav wordmark ONLY. Not used anywhere else. |
| White | #FFFFFF | All content backgrounds. |
| Ink | #0F172A | All body text, headlines, subheads. No grey. No opacity reduction. |
| Muted | #64748B | Italic aside text beside CTA buttons ONLY. |
| Border | #E2E0DC | Section dividers, card borders, CTA row top border. |

### INCONSISTENCY FLAG:
The BRAND-BRIEF.md says "Paper #f8f6f1 is retired" from piece page backgrounds. The CHART-LIBRARY-SPEC.md lists paper as an active chart token. The chart library reference HTML uses paper as track background color #e8e5e0 (slightly different value). The body background in the reference is #e8e4de (different again). These three paper-adjacent values need reconciliation. AMA decision needed: is there one paper value for charts, or are the reference HTML values canonical?

### Highlight Color — OPEN
Candidates: Deep Crimson #C41230, Forest #1B6B3A, Burgundy #7D1D3F. Deferred until after Congress Part 1A ships. Do not use any candidate color until AMA decides.

### Lanes — RETIRED (May 6, 2026)
Obsidian Futures and Alterrell Interactive as separate visual lanes are retired. All pieces are Alterrell Interactive. Content organized by tags. The Concert Tax dark/gold treatment (#0a0a12 bg, #E8B923 gold) was noted as "acceptable for now" in the brand brief but AMA confirmed in this session (May 14) that Concert Tax rebuilds in teal/paper from scratch.

---

## TAB ARCHITECTURE

| Decision | Detail | Source |
|---|---|---|
| Show/hide tabs (new pieces) | display:flex; flex-direction:column. Section-floor nav pushed to bottom via margin-top:auto. Each tab ends at its nav — no endless scroll between sections. | Platform brief, locked. |
| Scroll-spy (legacy pieces) | Sodium and Naming series use scroll-spy. Retrofit to show/hide is a separate platform session. Do not mix in piece builds. | Standing decision. |
| Mobile tab bar | Horizontal scroll strip showing 2.5 tabs. DM Sans 800, 9–10px, uppercase, tracked. | March 12 session. |
| Active tab | Full navy #0F172A fill, white text. | Brand brief locked. |
| Inactive tabs | White background, full black text #0F172A, weight 800. No opacity reduction. | Brand brief locked. |
| Tab bar height | 36–40px. No taller. | Brand brief locked. |
| Tab-bottom CTA | Each tab ends with a next-section nudge. Format TBD (text link, button, or directional arrow). Ships with Concert Tax as first show/hide piece. | Brand brief open decision #3. |

---

## PIECE PAGE STRUCTURE (locked order)

1. Nav (white bg, 50px height, wordmark centered)
2. Tab bar (full width, equal-share grid)
3. Headline + subhead inline row (headline left 44% max, subhead fills remaining, same row, never stacked)
4. Tags (immediately below headline row, navy filled, never below CTA)
5. Body copy (card gallery + 2–3 paragraphs per tab)
6. CTA row (always last — navy button left, italic aside right, separated by 1px border)

Do not change this order. Do not stack subhead below headline.

---

## CARD GALLERY + PARAGRAPH STRUCTURE (locked)

Each tab contains:
1. A gallery of 3–4 cards
2. 1–2 paragraphs below the gallery (placeholder in build, AMA voice pass before deploy)

This mirrors Sodium and Congress structurally. Decided across multiple sessions, confirmed May 14.

---

## JOURNEY BLOCK (locked)

Present on every piece. Four items ordered by commitment hierarchy:
1. Share (full-width, 6 destinations: X, Facebook, WhatsApp, LinkedIn, Email, Copy Link)
2. YouTube → playlist URL
3. Substack → section-specific URL
4. Ko-fi → ko-fi.com/alterrell

Block title: "Take Action" with subhead framing support and sharing as civic gestures. NPR/PBS tonal register.
Source: April 4 session.

---

## SHARE FORMAT

Cards designed for Instagram screenshot. Square 1080×1080 for share versions. Natural content height for in-piece rendering. Decided May 8.

---

## CHANNEL ROUTING RULE

If an argument requires more than 3 paragraphs to establish its premise → Substack first. Web piece is the translation: 2–3 paragraphs per tab, cards carry the argument. When Claude identifies essay mode creeping into a web piece, flag it.

---

## SPACING RULES (locked)

- Nav height: 50px
- Tab bar height: 36–40px
- Content padding: 18–20px
- Between headline row and tags: 10–12px
- Between tags and body: 12–14px
- Between body and CTA: 14–16px + top border
- No component with more empty space than content
- 44px minimum touch targets throughout
- 860px max-width for editorial pieces
- 680px max-width for tool pieces

---

## DARK BACKGROUNDS RULE

Dark backgrounds restricted to sections with no tables and no dense reading copy. Tables and dense copy: white or paper backgrounds ONLY.

---

## HUB CARD SYSTEM (locked April 2026)

- Dark stat block (88px height, #16141f bg) with large paper-colored statistic, inline divider, readable label
- Coming Soon: #2a2a2a stat block
- 2-line-max title, 2-line-max lede (~18 words, present tense)
- Stakes-forward labels in footer (short, present tense, no subject, under 6 words)
- Pill: "Explore" (shortened from "Explore Now")
- Grid: 3-across desktop, 2-across tablet, 1-across mobile
- Coming Soon always sorts after active pieces
- data-position attribute for manual pinning
- Left border: 3px solid electric blue #2563EB (signals live/active)
- Tags: navy filled, multiple allowed, flex row

---

## SESSION RULES (locked)

- Type 1 = Editorial (claude.ai, no code)
- Type 2 = Build (Claude Code, one piece at a time)
- Type 3 = Platform (Claude Code, CSS/hub only)
- Never mix session types
- Deploy batches: A = platform fixes, B = new piece + hub card same commit, C = copy updates. Never mix batch types.
- Claude Code never outputs to /mnt/user-data/outputs/ — writes directly to repo path
- Never delete previous file versions — version filenames (v1, v2, v3)
- str_replace patches against clean baselines for large HTML files — full rebuilds risk data loss

---

## VOICE RULES (locked)

- All piece copy rewritten by AMA before deploy
- Em dashes: almost none. 2–3 per piece maximum.
- Do not use: choppy declarative sentences in sequence, "it is worth noting," fragments posing as complete thoughts, adverbs modifying weak verbs
- Voice: conversational, full thoughts, personal observation opening into systemic critique, urgency without melodrama

---

# PART 2 — VISUAL LIBRARY DECISIONS

Component-by-component log of what was approved, rejected, and deferred.

---

## COMPONENT SURFACE OPTIONS (locked)

Every chart component has two surface options:
- Option 1: Teal field (#0a7c72), white as relief
- Option 2: White surface (#fff), 7px solid teal left border

AMA locks one option per component per piece before deploy. Never mixed within a piece.
Source: Chart library spec + reference HTML.

---

## A1 — Horizontal Bar with Color Split (.ac-hbar) — APPROVED

Status: Built and approved in reference HTML (both options).
Rules:
- Longest bar = 90% of track width. Formula: (value / max_value) × 90.
- Minimum visible width: 44px (bars never collapse below legibility).
- Values right-aligned to right edge of full track. Never inside the bar. Fixed column.
- Primary labels: Spectral 800, 24px minimum, target 28–32px. Label column 40% of card. 20px gap minimum.
- Color split: teal fill up to benchmark, danger-red hatch past it. No legend needed.
- Benchmark labels: DM Mono 700, 14px minimum. Same weight as values.

### INCONSISTENCY FLAG:
Concert Tax Card 6 (hardware vs. human) attempted to use A1 with a compositional split (teal = hardware, second color = human) rather than a threshold split (teal = safe, red = over limit). AMA rejected this approach on May 14 as "too much mental work." The A1 color split is for threshold arguments only. Compositional arguments need a different component. Do not repurpose A1's color split for non-threshold data.

---

## A2 — Segmented Bar / Decade Timeline (.ac-segbar) — APPROVED (mobile: single fill only)

Status: Mobile version approved. Network color segments are Substack/YouTube only.
Rules: One row per decade/category. Single filled block per row. Plain annotation below when needed.

---

## A3 — City Budget (.ac-budget) — APPROVED

Status: Built in reference HTML.
Rules: One city per block, stacked vertically. Police always row 1, services always row 2.

---

## A4 — Stacked Comparison (.ac-compare) — DEFERRED in reference, SPECCED

Status: Listed as "pending description approval" in reference HTML deferred section. Spec exists.
Spec says: stacked vertically on mobile (not side by side).

### AMA OVERRIDE (May 5 + May 14):
AMA decided A4 renders SIDE BY SIDE, not stacked vertical. "A vertical stack makes no sense for a side by side comparison." Cards are designed for Instagram shareability — the contrast IS the visual and requires two columns. Do not build A4 as stacked vertical regardless of what the spec says. The spec was written by Sonnet and AMA overrides it.

Concert Tax uses A4 for: Card 1 (Bieber vs. Carpenter), Card 8 (male vs. female rap headliners).

---

## B2 — Ranked List (.ac-ranked) — APPROVED

Status: Built and approved in reference HTML.
Rules: Items ranked by value, largest first. Label left, bar middle, value right. Single fill color on mobile. Annotation line below specific rows when editorially significant.

Concert Tax use: Card 3 (production tier grid) — but uses 4 categorical tiers (Solo/Minimal, Small, Large Production) instead of continuous values. Bars show tier position, not magnitude. Artists sorted by production tier high to low, then A–Z within tier. No dividers between tiers. No gender split in ordering. Kendrick excluded.

### INCONSISTENCY FLAG:
Card 3 was pulled by AMA on May 14 because the current session presented it with a fake 1–10 intensity score that AMA didn't recognize. The original Card 3 from May 5 used four categorical tiers which AMA approved. The card concept is parked, not cut — pending AMA reconfirmation of the artist roster against the four-tier system.

---

## B3 — Nutrition/Progress Row (.ac-progress) — APPROVED

Status: Built in reference HTML. Used in Sodium piece.

---

## B4 — Pictograph (.ac-pictograph) — DEFERRED

Status: Listed as "pending Type 1 decision" in reference HTML. Not built.
Concert Tax considered this for hardware vs. human icon visualization but AMA rejected the icon concept on May 14. B4 remains unbuilt.

---

## C1 — Moment Chart (.ac-moment) — APPROVED (Option 2 only)

Status: Built in reference HTML. Option 2 only.
Rules: Subject label, timeline with dots, value at each dot, peak label.

Concert Tax potential use: Card 9 (Dua Lipa performance evolution). Note: Dua Lipa version would be qualitative (narrative beats) not quantitative (revenue values). Labels at each dot replace numerical values. Minor departure from spec — fits the component's structure.

---

## C2 — Decade Timeline with Toggle (.ac-decade) — APPROVED

Status: Built in reference HTML. Requires JS for toggle.
Rules: Decade labels Spectral 800 30px. Toggle buttons for unit switching.

Concert Tax potential use: Card 13 (history tab — expansion of performance obligation by decade). Flag: needs a defensible metric for bar length. Qualitative "performance obligation" is not a number. Options discussed: editorial index score, proxy metric, or toggle between two real metrics. AMA decision needed.

---

## D1 — Stat Callout (.ac-stat) — OPEN

Status: Partially built in reference HTML (Option 2 only). Anchoring visual treatment unresolved (left border color, background tint, or graphic element).
What is locked: Number large (Spectral 800), one editorial line below, source stamp always visible, comparison point always present.

Concert Tax use: Card 5 (Cardi B $300K spent / $70K earned). Rendered as dual-stat on teal field with three figures ($70K fee, ~$300K spend, −$230K net). Built May 8 as widget, iterated through multiple versions. AMA editorial line written: "She didn't break even. She subsidized the standard." Context: 35-min set, 7 months pregnant.

### INCONSISTENCY FLAG:
The Cardi B card was built as a D2 pull quote variant with stat figures, not a D1. The May 8 widget used `.comp-tag` labeled "D2 · Concert Tax · The Data · Tab 2." This is a hybrid — quote + stats — that doesn't cleanly fit either D1 or D2. AMA approved the widget as-is. Recommend treating it as an approved Concert Tax–specific variant rather than forcing it into one component class.

---

## D2 — Pull Quote (.ac-pullquote) — APPROVED (both options)

Status: Built in reference HTML. Both white and teal variants.
Rules: DM Serif Display italic 20px. Quote marks retained. Attribution = piece title, not author. Box retained on mobile. White background default; teal field variant available.

Concert Tax uses:
- Card 4: "Men set the ceiling. Women are required to exceed it just to belong."
- Card 14: "Men performed. Women entertained."
- Card 17: "Women create longer tables. Men often feast alone."

Three D2 cards in one piece. AMA has not flagged this as repetitive but worth noting.

---

## D3 — Annotation Block (.ac-annotation) — DEFERRED (not yet built)

Status: Listed as "not yet built" in reference HTML. Spec exists.
Structure: Subject label header (DM Mono teal), ✓ row (what they did), ✗ row (what they didn't), editorial line, source stamp.

Concert Tax potential use: Card 10 (double standard — what men are forgiven for vs. what women are penalized for). This is exactly the ✓/✗ argument D3 was designed for.

---

## D4 — Connector / Two-Beat (.ac-connector) — DEFERRED (not yet built)

Status: Listed as "not yet built" in reference HTML. Spec exists.
Rules: No boxes, no arrows. Two plain sentences with line break. First beat = fact, second beat = implication. Never more than two beats. Both beats AMA voice. Optional CTA below.

Concert Tax uses:
- Card 12: "Beyoncé sets the standard through extraordinary labor." / "Every woman after her inherits it. None of them inherit the fee."
- Card 18: What audiences demand from women (long list) vs. what they accept from men ("a microphone"). The asymmetry between beat lengths IS the visual argument.

---

## E1 — Sorted Bar List (.ac-sorttable) — DEFERRED

Status: Descoped from mockups. Build in Type 2 with JS. Not built.

---

## E2 — Expandable Card List (.ac-cardlist) — DEFERRED

Status: Descoped from mockups. Build in Type 2 with JS. Not built.

---

## MOBILE TABLES RULE

"Mobile tables do not exist." Every table becomes a sorted bar list (E1) or expandable card list (E2) on mobile. Tables are Substack/YouTube analytical variants only.

### INCONSISTENCY FLAG:
Concert Tax Card G (gross revenue comparison) was built May 8 as a table grid with columns (Artist, Gross, Shows, Tier). This violates the mobile tables rule. Should render as a B2 ranked list with tier badge on each row. AMA has not explicitly addressed this conflict. Decision needed.

---

## CONCERT TAX — WIDGET APPROVAL STATUS

| Card | Old ID | Component | Built | Approved | Notes |
|---|---|---|---|---|---|
| 1 | A | A4 side-by-side | May 5 (dark) | Approved structure, needs teal/paper rebuild | Bieber vs. Carpenter |
| 2 | D | Iceberg | May 5 (dark) | VOIDED by AMA May 14 | Cut permanently |
| 3 | C | B2 tier grid | May 5 (dark) | PARKED — AMA pulled May 14 | Four-tier system is correct; roster needs reconfirmation |
| 4 | — | D2 pull quote | Not yet built as widget | Straight build from reference | "Men set the ceiling" |
| 5 | E | D1/D2 hybrid | May 8 (teal) | Approved as-is | Cardi B $70K/$300K. AMA editorial line written. |
| 6 | — | Hardware vs human | Never built as widget | CUT by AMA May 14 | Bar split rejected. Icon concept also rejected. |
| 7 | G | Gross table | May 8 (teal) | Approved structure | Needs mobile table rule resolution. AMA editorial line: "Same gross tier. Large production costs more every night. Solo doesn't." |
| 8 | 4a | A4 side-by-side | May 5 (dark) | Approved structure, needs teal/paper rebuild | Male vs. female rap headliners |
| 9 | I | C1 moment | Not yet built | — | Dua Lipa arc. Qualitative beats, not revenue. |
| 10 | — | D3 annotation | Not yet built | — | ✓/✗ double standard. First D3 build. |
| 11 | J | Language comparison | May 8 (teal) | Built but needs source verification | Two-column male vs. female review quotes. ⚠ Quotes flagged as needing verification. |
| 12 | — | D4 connector | Not yet built | — | "Standard travels, compensation doesn't." |
| 13 | — | C2 decade | Not yet built | — | History tab. Needs defensible metric. |
| 14 | — | D2 pull quote | Not yet built | — | "Men performed. Women entertained." |
| 15 | — | A4 or A1 | Not yet built | — | Genre shift. AMA has not decided component type. |
| 16 | — | D2 or D4 | Not yet built | — | "I paid Beyoncé prices for a listening party." Not a stat — it's a phrase. |
| 17 | — | D2 pull quote | Not yet built | — | "Women create longer tables." |
| 18 | — | D4 connector | Not yet built | — | Demand asymmetry. Two beats. |

---

## CONCERT TAX — LOCKED DATA (vetted May 5)

Four production tiers: Solo/Minimal · Small · Large Production. "Mid" is retired. Do not add a fifth tier.

Kendrick Lamar excluded from all stadium tour cards (Grand National 2025 is large production, contradicts the pattern).

The Weeknd classified as Large production (AHTD tour).

Bruno Mars classified as Small production — the useful outlier.

Artists sorted by production tier then A–Z within tier. No gender split in ordering.

Gross revenue data (vetted):
- Taylor Swift (Eras): $2.07B, 149 shows
- Ed Sheeran (Mathematics): $876M, 188 shows
- Beyoncé (Renaissance): $580M, 56 shows
- Bad Bunny (World's Hottest): $435M, 65 shows
- Harry Styles (Love on Tour): $400M, 42 shows
- Karol G (Mañana): $280M, 68 shows
- P!nk (Summer Carnival): $249M, 93 shows

The Weeknd gross: $300M+ cited in Card G widget, but factpack says $1B+. INCONSISTENCY — likely $1B+ is career, $300M+ is single tour. Needs resolution.

Cardi B: $70K fee / ~$300K production spend per weekend / 7 months pregnant / SiriusXM 2018. Verified.

---

## WHERE'S BEYONCÉ — DECISIONS (separate from Concert Tax)

Lane: Alterrell Interactive (teal, NOT Obsidian Futures). Confirmed.
Tabs: Overview, Data & Headlines, The Wealthy, The Tool, Sources.
Methodology: strict domicile + birth state (Forbes).
No crowdsource in V1. Static asked/not-asked indicators.
Q3 2026 target, hurricane season timing.

---

## COPAGANDA — DECISIONS

Two-part piece. Alterrell Interactive lane. Full research pass complete, all data verified and locked, five-visual suite designed. Title for full piece TBD after build. Build not yet started.

---

## ALL OTHER PIECES

Sodium: Complete. Flipped to Coming Soon on hub. Ready to re-activate.
Naming (Parts 0–2): All three live. Need AI writing pass + AMA voice rewrite each.
Congress Part 1A: Built but not deployed. General election window.
HBS: Q2 2026. Not yet started.
Gay Uncles: Brief exists. Background color unresolved.
FrameShift: Separate product. Waitlist validation first.
Forever Loved: Fully scoped. Vite/React/Tailwind. Ready to build.

---

# PART 3 — INCONSISTENCIES REQUIRING AMA DECISION

1. Paper color values: #f8f6f1 (spec token), #e8e5e0 (reference track bg), #e8e4de (reference body bg). Which is canonical for charts?

2. Card G (gross revenue table): violates "mobile tables do not exist" rule. Render as B2 ranked list with tier badge, or keep as table?

3. The Weeknd gross: $300M+ (Card G widget) vs. $1B+ (factpack). Which figure, and what's the scope (single tour vs. career)?

4. Card 3 (production tier grid): parked. Does the four-tier roster from May 5 still hold, or does AMA want to revise the artist list?

5. Card 5 (Cardi B): rendered as D2 pull quote with stat figures, not D1 stat callout. Is this a new hybrid component type, or does it stay as a piece-specific variant?

6. Concert Tax tab names: live piece says Overview / The Data / The Surcharge / Double Standard / The Burden / Sources. Card map says Overview / The Performance Burden / The Double Standard / History / Take Action / Spread the Word. Which is the authority for the rebuild?

7. A4 spec says stacked vertical on mobile. AMA says side-by-side. The spec should be updated to reflect AMA's override. Confirm this is a permanent platform decision, not Concert Tax–specific.

8. Card 11 (language comparison): quotes flagged as needing source verification. Cannot deploy until verified.

9. Card 15 (genre shift): no component type assigned. May be A4 (yes/no grid) or A1 (bars). AMA decision needed.

10. Card 16: "I paid Beyoncé prices for a listening party" — this is a phrase, not a stat. D2 pull quote or D4 connector? AMA decision needed.

---

*End of log. Update this file after every session that makes a design decision.*
