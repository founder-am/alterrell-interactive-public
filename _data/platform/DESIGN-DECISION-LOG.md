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
# DESIGN DECISION LOG — MAY 18, 2026 UPDATE
# Session type: Type 1 Editorial (claude.ai)
# Scope: Staleness audit + template standardization + process improvements
# Method: Dual audit (Claude.ai decision audit + Claude Code structural audit)
# Append this below existing DESIGN-DECISION-LOG.md content

---
---

# PART 4 — STALENESS AUDIT RESULTS (May 18, 2026)

---

## DOCUMENT ACTIONS

### Files deleted
- `GAY-UNCLES-FACTPACK.md` — described wrong piece. Canonical: `BLACK-GAY-GEOGRAPHY-BRIEF.md`
- `WHERE-ARE-THEY-BRIEF.md` — broken pointer, wrong title, wrong lane. Canonical: `WHERES-BEYONCE-FACTPACK.md`. Built HTML shell exists at `where-are-they/index.html`
- Duplicate v2 brief inside `concert-tax/` folder

### Files retired (moved to `_data/archive/` with SUPERSEDED header)
- `CONGRESS-BRIEF.md` → superseded by `CONGRESS-1A-FACTPACK.md`
- `HBS-BRIEF.md` → superseded by `HBS-FACTPACK.md`
- `CONCERT-TAX-BRIEF.md` → piece is 99% done. Brief describes wrong lane, wrong tabs, wrong centerpiece. Add SUPERSEDED header pointing to `concert-tax/index.html` and this decision log

### One canonical file per piece (standing rule — NEW)
Named `[PIECE]-BRIEF.md`. When a research session produces deeper material, it replaces the brief. Old version moves to `_data/archive/` with date suffix. No piece should have both a brief and a factpack in active folders.

---

## `_data/` FOLDER RESTRUCTURE

```
_data/
├── platform/          ← Claude Code reads this folder every session
│   ├── BRAND-BRIEF.md
│   ├── PLATFORM-BRIEF.md
│   ├── DEPLOY-CHECKLIST.md
│   ├── DESIGN-DECISION-LOG.md
│   ├── VOICE-GUIDE.md
│   ├── CONTENT-TAXONOMY.md
│   ├── SESSION-PROMPTS.md
│   ├── CHART-LIBRARY-SPEC.md
│   └── TAG-AND-SHARE-BUILD-SPEC.md
│
├── pieces/            ← one canonical file per piece + status tracker
│   ├── PROJECT-STATUS.md
│   ├── CONCERT-TAX-BRIEF.md
│   ├── WHERES-BEYONCE-FACTPACK.md
│   ├── COPAGANDA-PIECE-BRIEF.md
│   ├── CONGRESS-1A-FACTPACK.md
│   ├── SODIUM-FACTPACK.md
│   ├── NAMING-SERIES-BRIEF.md
│   ├── HBS-FACTPACK.md
│   ├── BLACK-GAY-GEOGRAPHY-BRIEF.md
│   ├── BLACK-SITCOMS-BRIEF.md
│   ├── FRAMESHIFT-BRIEF.md
│   └── FOREVER-LOVED-FACTPACK.md
│
├── archive/           ← superseded files, old index snapshots
│   └── (versioned with date suffixes)
│
└── templates/         ← built in Type 3 session after Concert Tax deploys
    ├── piece-template.html
    ├── pre-build-checklist.md
    └── partials/
```

Session prompts reference folders, not individual files: "read everything in `_data/platform/`" is sufficient. Claude Code can list and read subfolder contents without enumerated filenames.

---

## LANE / DESIGN SYSTEM DECISIONS

### Lanes retired — OF is a per-piece CSS treatment
- All pieces are Alterrell Interactive. Obsidian Futures is a tag, not a design system.
- "Dark treatment" = piece-local `<style>` block overriding CSS custom properties. "Standard treatment" = default. The term "lane" is retired as a structural concept.
- AMA approves or declines dark treatment at build step per piece.
- Override properties for dark treatment: `--piece-bg`, `--piece-accent`, `--piece-card-bg`, `--piece-text`, `--piece-muted`, `--piece-border`
- CSS must support a clear mechanism to "turn on" dark background per piece.

### Pieces using dark treatment
- Concert Tax — dark bg `#0a0a12`, teal accents. CONFIRMED still dark (prior log entry saying "rebuilds in teal/paper" was incorrect).
- Naming Series Parts 0–2 — dark bg `#0a0a12`, gold `#E8B923`. Staying dark, no retrofit.
- Big Black Love / Gay Uncles Geography — dark bg `#0a0a12`, gold `#E8B923` (from brief).
- Black Sitcoms — expected dark treatment.
- Future Naming Series parts — expected dark treatment.

### Teal color status — OPEN, needs AMA decision
- BRAND-BRIEF says teal retired from "piece page backgrounds, nav, and UI elements."
- Concert Tax shipped with teal as accent in tab indicators, section borders, card components on piece page.
- Specific locations where teal appears: tab active states, left borders on cards, bar chart fills, section accents. Does NOT appear in hub/nav (navy there).
- Question: is teal retired only as a background/fill color, or also as a piece-level accent?
- **AMA to decide. Add clarification to BRAND-BRIEF when resolved.**

### Highlight accent color — VOIDED
- Deep Crimson `#C41230`, Forest `#1B6B3A`, Burgundy `#7D1D3F` candidates are voided.
- No longer being tracked. If needed in future, scope fresh.
- Remove from BRAND-BRIEF open decisions.

---

## TITLE / NAMING DECISIONS

### Concert Tax
- **Display title (from index file, May 17):** "Female Musicians Earn Less But Share More"
- **Subhead:** "Men set the ceiling. Women are bounded by it and required to deliver more to justify their place beneath it."
- Hub card: still says "The Male Concert Laziness Surcharge" — Batch A update pending.
- URL slug: `concert-tax` (unchanged).

### Where's Beyoncé
- **Working title:** "Where's Beyoncé?" — not necessarily the final piece title.
- URL slug: `where-are-they` (stays as-is, slug does not need to match title).

### Big Black Love / Gay Uncles Geography
- Brief title: "Advice From Your Thick Gay Uncles"
- "Big Black Love" retired as working title in status tracking.
- Display title may change after essay is finalized.

### Title tracking standard (NEW — all pieces)
Every piece brief must include:
```
Working title: [internal reference name]
Display title: [h1 text — LOCKED or TBD]
Hub card title: [matches display title unless intentionally different]
URL slug: [locked separately]
```
When display title changes, brief + index h1 + OG tags + hub card all update in same commit.

---

## JOURNEY BLOCK

- **Pieces:** 3 items — Watch / Read / Support. "Explore It" retired from piece journey blocks.
- **Hub:** keeps 4 items. The 4th item ("Explore") earns its place when `/explore/` sub-area exists for deeper D3 interactives. Until then, hub keeps it as the platform-level explore function.
- Ko-fi addition to Sodium: apply before piece is pushed back to live (not retroactively now).
- YouTube/Substack link contrast fix (font-weight 500–600): confirmed pending, apply in next Batch A.

### `/explore/` sub-area concept (OPEN — not blocking any builds)
- Standalone interactive pages at `interactive.alterrell.com/explore/[piece]-[chart]/`
- Houses D3 interactives, filters, hover states — the "go deeper" versions
- Pieces stay card-gallery clean. Explore pages are the analytical layer.
- The hub's 4th journey block item links here when content exists.
- Not scoped for build yet. Decision logged for when D3 interactives are ready.

---

## TAGLINE

- **Locked tagline:** "Unravel the Data." Lives in BRAND-BRIEF only.
- "See the architecture. The data was always there — now it's yours." = platform description/mission statement, NOT tagline. Label differently in future documents.
- Do not repeat tagline in piece briefs. Reference BRAND-BRIEF.
- Footer tagline retired (per T-9 below). Tagline may appear on hub and about page.

---

## CONCERT TAX — FINAL STATUS

- **Status:** 99% done. Final file: May 17.
- **Remaining:** Hub card title + tagline update (Batch A) to match "Female Musicians Earn Less But Share More."
- **Editorial lines:** Cards 5, 8, 10, 12 have AMA-written lines. Cards 9 and 18 intentionally deleted.
- **Tab prose:** Voice pass complete on all 6 tabs.
- **Tab structure (locked):** Overview / The Data / The Double Standard / History / Take Action / Spread the Word.

### Concert Tax inconsistencies — resolved
- Card 2 (iceberg): CUT permanently (May 14)
- Card 6 (hardware vs human): CUT permanently (May 14)
- Card 3 (tier grid): PARKED pending AMA roster reconfirmation
- Card 5 (Cardi B): accepted as piece-specific D2 variant with stats
- Tab names: locked per built file (see above)
- A4 side-by-side: permanent platform override (not stacked vertical)

### Concert Tax inconsistencies — still open
- Paper color values reconciliation
- The Weeknd gross (single tour vs career)
- Card 11 quote source verification
- Card 15 component type (AMA decision needed)
- Card 16 component type (AMA decision needed)

---

## EDITORIAL CALENDAR — confirmed May 18

- **HBS:** Q2 2026, June reunion. URGENT — almost nothing locked. AMA gathering materials. Force Type 1 session.
- **Copaganda:** No change. Research complete. AMA exploring what can be built pre-essay.
- **Where's Beyoncé:** Q3, Aug–Oct hurricane season.
- **Congress 1A:** Q3/Q4, Sept–Oct general election.

---

## DEPLOY CHECKLIST ADDITIONS

Add to `_data/platform/DEPLOY-CHECKLIST.md`:

1. Ko-fi block present (deploy gate per Brand Brief)
2. `data-tags` attribute on hub cards (visible pills deferred until design approved)
3. Share block on most emotionally compelling tab (typically Overview)
4. Chart source stamps: every data point has visible source (DM Mono). Pull quotes exempt.
5. File versioning: never overwrite — always v1, v2, v3
6. Context limit protocol: flag, update brief, confirm handoff before closing
7. Before full piece rebuild: copy current index.html to `_data/archive/[piece]-index-[date].html`

---

## PLATFORM-BRIEF.md

- Four-role system (EIC / CBUXO / SDA / Editorial Partner) does not work reliably on Sonnet. Only reliable on Opus.
- Voice/copy work handled by ChatGPT and other mechanisms, not Claude.
- Revise PLATFORM-BRIEF to describe Claude's actual operating mode: build engine, design system enforcer, structural auditor. Point to BRAND-BRIEF as authoritative reference.
- Revision deferred to future session.

---

## FRAMESHIFT

- Free tier MVP built: Navy circumference calculator, BMI comparison, framing layer.
- Paid tier features NOT BUILT: JSON download/re-upload, batch lab entry, time horizon dropdown, four delivery methods, trend engine, sparklines, radar chart, movement guide. All gated on waitlist validation.
- Add BUILT / NOT BUILT status markers per feature in FRAMESHIFT-BRIEF.md.

---
---

# PART 5 — TEMPLATE STANDARDIZATION (May 18, 2026)

All decisions below apply to every new piece going forward unless explicitly overridden in a piece brief.

---

### T-1. Color system is CSS, not HTML
**LOCKED.** All pieces use identical HTML structure. Visual treatment (standard vs. dark) controlled through piece-local `<style>` block overriding CSS custom properties. No separate HTML templates per treatment. Override properties for dark treatment: `--piece-bg`, `--piece-accent`, `--piece-card-bg`, `--piece-text`, `--piece-muted`, `--piece-border`.

### T-2. Default tab count is 6
**LOCKED.** Tab 1 = Overview (constant). Tabs 2–4 = argument tabs (named per piece; Tab 4 cut for 5-tab pieces). Tab 5 = Take Action (constant). Tab 6 = Spread the Word (constant). Reference build: Concert Tax.

### T-3. Tab content pattern: card gallery + prose (not accordions by default)
**LOCKED.** Per-tab layout: section title → 2–4 paragraphs → card gallery (horizontal scroll mobile, grid desktop) → section floor nav. Accordions available ONLY when a tab has 4+ discrete expandable data entries. Test: "Does this tab have 4+ entries that each need their own expandable section?" Yes = accordions. No = card gallery + prose.

### T-4. Card gallery is the default visual unit
**LOCKED.** Cards: 1:1 aspect ratio, max-width 400px, full teal border (all four sides), white interior. Mobile: horizontal scroll with scroll-snap, peek next card, swipe CTA inside gallery div. Desktop: CSS grid auto-fill. Source stamps on every card. Gallery cards ≠ share cards.

### T-5. Share block: always Tab 1 (Overview)
**LOCKED.**

### T-6. Journey block: Watch / Read / Support
**LOCKED.** Three cards on pieces. "Explore It" retired from piece journey blocks. Hub keeps 4 items.

### T-7. Take Action tab (Tab 5) — standardized
**LOCKED.** Brief must answer: who is the reader talking to, what's the ask, what tool do they need, what's the lowest-friction action. Structure: 2–3 action cards with headlines. Sources accordion at bottom.

### T-8. Spread the Word tab (Tab 6) — standardized
**LOCKED.** Structure: intro paragraph → shareable card gallery (duplicated from argument tabs) → share destinations grid (6 buttons) → platform CTAs (3 cards). Reference: Concert Tax.

### T-9. Footer: clean, no tagline
**LOCKED.** Dark footer bar. Links: Substack, About, Ko-fi. No tagline in footer. "The data was always there — now it's yours." retired from footer; may appear on hub/about.

### T-10. Hero: headline + subhead only (stat cards optional)
**LOCKED.** Default: Spectral 700 headline + DM Serif Display subhead. Stat cards optional — piece brief must specify if used.

### T-11. Upper nav contrast fix
**LOCKED (pending platform commit).** Font-weight 500–600 on YouTube/Substack links. Platform-wide Batch A fix.

### T-12. Collapsible methodology
**LOCKED (placement per-piece).** `<details>` wrapper. Lives in Take Action tab or footer — per-piece call. Visual treatment flagged for future review, doesn't block builds.

### T-13. Scripts block
**LOCKED.** One `<script>` block at end. Tab switching + accordion toggle + mobile swipe. Identical across pieces.

### T-14. Piece-local CSS scoping
**LOCKED.** All piece CSS in `<style>` in `<head>`, scoped with piece prefix (e.g. `.ct-`). Never modify `alterrell-interactive.css` in piece builds.

---

## EDITORIAL CHECKLIST PER NEW PIECE (pre-build gate)

Before any Type 2 build, the piece brief must answer all 11. If not all checked, the piece is NOT build-ready. Claude Code must refuse to build.

```
# [PIECE NAME] — Pre-Build Checklist
- [ ] 1. Dark treatment or standard?
- [ ] 2. If dark: accent, bg, card bg colors
- [ ] 3. Headline and subhead (display title LOCKED)
- [ ] 4. Tab 2 label
- [ ] 5. Tab 3 label
- [ ] 6. Tab 4 label (or "cut" for 5-tab)
- [ ] 7. Accordion tabs? Which tab, how many entries?
- [ ] 8. Take Action: who / ask / tool / lowest-friction
- [ ] 9. Spread the Word: share copy
- [ ] 10. Stat cards in hero? (count + data)
- [ ] 11. Card map per tab (component type, data, editorial line)
```

Hub card copy also required before build:
```
- [ ] Hub stat number
- [ ] Hub stat label
- [ ] Hub headline (matches display title)
- [ ] Hub lede (≤18 words, present tense)
- [ ] Hub stakes label (≤6 words)
- [ ] Hub CTA label
```

---

## TEMPLATE FILE PLAN

Build in Type 3 session after Concert Tax deploys:

**A. `_data/templates/piece-template.html`** — Single complete HTML file. Token slots marked `{{DOUBLE_BRACES}}`. Both treatment variants with comments.

**B. `_data/templates/partials/`** — Individual component files. When a component changes, update partial, regenerate template. Partials: head, nav, hero, journey-block, tab-bar, tab-panel, card-gallery, share-block, take-action-tab, spread-the-word-tab, footer, methodology, scripts, piece-local-css-dark.

Build order: partials first (B), then assemble template (A).

---
---

# PART 6 — PROCESS IMPROVEMENTS (May 18, 2026)

---

### P-1. Decision capture protocol
**Problem:** Decisions made in chat never get written back to files. Sessions end at context limit without AMA choosing when.
**Solution (two-part):**
1. **Dedicated decision capture chat** in project folder. Only job: AMA opens it periodically, says "search project folder for [piece/topic] and update decision log with anything locked since [date]." Runs on AMA's schedule — same day or weekly.
2. **Session opener lookback.** Every session starts: "search project folder for chats about [piece] in last 7 days, flag decisions not reflected in brief or decision log." Catches drift before new work starts.

Neither depends on sessions ending gracefully.

### P-2. Brief lifecycle states
**Status line at top of every brief:**
```
Brief status: CONCEPT | RESEARCH | EDITORIAL LOCKED | BUILD READY | BUILT | LIVE
Last substantive update: [date]
```
- CONCEPT = idea stage
- RESEARCH = data being gathered
- EDITORIAL LOCKED = argument, tabs, card map set
- BUILD READY = copy exists and passed voice review, pre-build checklist complete
- BUILT = index.html exists, not deployed
- LIVE = deployed

Claude Code must check status before building. If status is not BUILD READY or later, refuse and flag.

### P-3. Version snapshots before rebuilds
Before any full rebuild: `cp [piece]/index.html _data/archive/[piece]-index-[date].html`. One-line command at start of Type 2 session. Always diffable.

### P-4. Tag system — clickable filtering (OPEN, not blocking)
Tags should eventually be clickable on hub for filtering. Timeline TBD. Data attributes (`data-tags`) are the foundation — already specified. Visual filter UI deferred.

---

### P-5. Decision capture — weekly sweep (LOCKED)
**Mechanism:** One dedicated chat in the project folder. Only job is decision log maintenance.
**Frequency:** Start of each week's quota (weekly).
**Process:** AMA opens the chat, pastes the sweep prompt (below). Chat searches project folder for prior week's conversations, flags decisions not yet in the log, AMA confirms, log is updated.
**Opener prompt for the weekly sweep chat:**

```
Weekly decision sweep.

Search the project folder for all chats from the last 7 days.
For each chat that discussed Alterrell Interactive pieces or platform decisions:

1. List every locked decision made (title changes, tab structure changes,
   design decisions, editorial rulings, scope changes, status changes).
2. For each decision, check whether it is already reflected in
   DESIGN-DECISION-LOG.md, the relevant piece brief, and PROJECT-STATUS.md.
3. Produce a numbered list of decisions that are NOT yet written back,
   with the exact text to add and which file it goes in.

I will confirm each item before you write anything.

If no new decisions were made this week, say so and we're done.
```

### P-6. `/explore/` sub-area for deeper interactives (LOCKED concept, build TBD)
**Decision:** Standalone interactive pages at `interactive.alterrell.com/explore/[piece]-[chart]/`. Houses D3 interactives, filters, hover states, dropdowns — the "go deeper" analytical versions.
**Relationship to pieces:** Pieces stay card-gallery clean (no D3). Piece can link to its explore page but does not embed it. Explore pages are a separate build scope.
**Journey block impact:** Pieces ship with 3 journey items (Watch / Read / Support). When a piece has an explore page, the piece brief can optionally add a 4th journey item linking to it — but 3 is the default. Hub keeps 4 items because the hub IS the platform-level explore layer.
**Build timing:** Not scoped yet. Logged for when D3 interactives are ready to build. Do not pre-build the `/explore/` route or folder structure until at least one interactive is ready to ship.

---

*End of May 18, 2026 update. Three parts: staleness audit (Part 4), template standardization (Part 5), process improvements (Part 6).*

---

## 2026-05-20 SESSION DECISIONS — Concert Tax Type 2 (gallery unification + journey fix)

### D-20. Journey bar item layout — LOCKED standard for all pieces

**Decision:** Compact journey bar items are two-line stacked (not inline). All future pieces must use these values.

| Property | Value | Rationale |
|---|---|---|
| `.ct-journey-item` `flex-direction` | `column` | Action word on top, destination stamp below — clear visual hierarchy |
| `.ct-journey-item` `align-items` | `flex-start` | Left-aligned within each item column |
| `.ct-journey-item` `gap` | `8px` | Enough separation between action and destination without crowding |
| `.ct-journey-item` `padding` | `12px 1.25rem` | Top/bottom breathing room; left/right matches content container edge |
| `.ct-journey-action` `font-size` | `15px` | Reads clearly on desktop and mobile without scaling |
| `.ct-journey-action` `font-weight` | `600` | Heavier than the destination stamp — creates weight hierarchy |
| `.ct-journey-dest` `font-size` | `9px` | Mono stamp, secondary — noticeably smaller than action |
| `.ct-journey-divider` `height` | `36px` | Tall enough to visually separate items without reaching card height |

**Captured from:** Concert Tax piece-local `.ct-journey-*` styles, confirmed 2026-05-20.
**Template extraction:** When Type 3 template session runs, these values must be captured into `_templates/piece-template.html` journey bar partial. Do NOT use the `.ai-journey-compact` global values (those are the Batch A defaults; the Concert Tax values are the AMA-confirmed standard).

---

### D-21. Card gallery pattern — swipeable carousel is the only gallery layout

**Decision:** `.ct-gallery` (grid layout, desktop → mobile fallback) is retired. All card galleries use `.ct-swipeable-outer` + `.ct-swipeable` at all viewport widths.

**Standard:** Cards fixed at 300px on desktop, `calc(100vw - 3rem)` on mobile. Arrow buttons on desktop (hidden ≤640px). Dot indicators always visible below carousel.

**Applied to:** Concert Tax — Overview, The Data, The Double Standard, History, Take Action (all converted 2026-05-20). Spread the Word was already correct.

**Do NOT:** Reintroduce grid layout for card galleries in any piece. If a piece needs a grid of non-card elements (metric boxes, stat panels), that is a separate component — not `.ct-gallery`.

---

*End of 2026-05-20 update.*

# DECISION LOG UPDATE — May 21, 2026
# Paste this at the end of _data/platform/DESIGN-DECISION-LOG.md, before the "End of log" line.

---

## PART 7 — May 20–21, 2026 Decisions

Source: May 20 interactive tool session, May 21 production audit and editorial session.

---

### D-40. Concert Tax interactive tool: "The Receipt" (LOCKED)
**Decision:** The Concert Tax piece gets an interactive tool called "The Receipt." User inputs ticket price via slider, sees NITO-sourced revenue split as a receipt visual, then a gender pay comparison line. Below the receipt: 3 production profile tier cards (Solo/Minimal, Band + Staging, Full Production) with documented artist examples showing the structural cost gap.
**Placement:** The Data tab (tab-the-data), after existing card gallery content.
**Data source:** NITO revenue split is the single citable anchor. Production profiles sourced from trade press, tour credits, Wikipedia tour pages.
**Research status:** Complete. Production profiles locked. NITO data locked.
**Do not:** Build a granular per-element calculator (dancers = $X). The data doesn't support that precision. This is a documented comparison, not a calculator.

### D-41. Hub layout: revert to original card format (COMPLETE 2026-05-21)
**Decision:** Revert index.html from the May 19 two-column lane layout (Industry/Culture columns, filter pills) back to the original card format with stat badges, dual CTAs, and 3-across grid.
**Reason:** The lane system creates unearned visual complexity at 4 published pieces. Revisit the lane/category system at 8 published pieces.
**Status:** Complete. Executed in Type 3 Batch A session 2026-05-21. 3 active + 4 coming-soon cards. TBD placeholders on Sodium, HBS, Gay Uncles.

### D-42. Naming series: serial title architecture — Option A (DECIDED, needs mockups)
**Decision:** Naming series hub cards use Option A: series title in the dark header bar, part title as subhead. Series title candidate: "Our Names Are Traditional Too."
**Do not:** Build until mockups are reviewed and approved by AMA.
**Status:** Mockups needed before any code.

### D-43. Sodium piece: copy rewrite provided, not yet applied
**Decision:** AMA provided final approved copy for Sodium with marked deletions: remove Cost tab entirely, remove Wages tab entirely, restructure Data tab (currently too long — needs franchise-level view options), fix white vs paper background inconsistency on compare-your-order tool. Remove "Coming in V2" note from overview.
**Status:** Copy is final. Sodium is currently Coming Soon on hub. Copy update is a Type 2 Batch C session. Hub status flip is a separate decision (deferred until hub revert is resolved).

### D-44. Naming Part 0: final copy provided
**Decision:** AMA provided final approved copy for Part 0 ("Our Names Are Traditional Too"). Ready to paste via Type 2 Batch C session.
**Status:** Part 0 is live with old copy. Update is Priority 1.

### D-45. Naming Part 1: final copy provided
**Decision:** AMA provided final approved copy for Part 1 ("The Fame Effect"). Ready to paste via Type 2 Batch C session.
**Status:** Part 1 is live with old copy. Update is Priority 1.

### D-46. Naming Part 2: remains Coming Soon
**Decision:** Part 2 ("The Living Room") is not live and should remain Coming Soon until further notice.

### D-47. Concert Tax carousel + journey bar: already complete
**Decision:** Confirmed May 21 that the carousel conversion (.ct-gallery → .ct-swipeable) and journey bar spacing fix were already completed in the May 20 build session. No work needed.
**Status:** Done. SESSION-PROMPTS file updated to remove this as a pending task.

### D-48. HBS piece: reframed from "Digital Museum" to "The Playbook" (IN PROGRESS)
**Decision in progress:** Primary argument reframed: elite institutions use a repeatable set of documented tactics to absorb advocacy and neutralize progress. Title candidates: "The Playbook," "They Put You on a Task Force," "Snuffing Out Progress." 5-tab structure proposed (Overview, The Playbook, Recognize It, The Evidence, Sources). Diagnostic widget proposed as interactive centerpiece.
**Status:** AMA has not yet reacted to the reframe. Decisions 2–4 (format, title, tab architecture) remain open. Q2 June reunion deadline makes this urgent.
**Do not:** Build anything until AMA confirms.

---

### SESSION PRIORITY ORDER (as of May 21, 2026)

1. **Session A — Type 2 Batch C:** Naming Part 0 + Part 1 copy updates (live pieces, final copy ready)
2. **Session B — Type 2 Batch B:** Concert Tax Receipt interactive tool build
3. **Type 3 Batch A:** Hub revert to original card format
4. **Type 1:** HBS editorial — close the four open decisions (URGENT, June deadline)
5. **Type 1:** Naming series title mockups (Option A)
6. **Type 2 Batch C:** Sodium copy updates (when hub status is resolved)

---

*End of May 21, 2026 update.*

*End of log. Update this file after every session that makes a design decision.*
