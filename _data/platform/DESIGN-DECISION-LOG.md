# DESIGN-DECISION-LOG.md
# Alterrell Interactive — Platform & Visual Library
# Compiled: May 14, 2026 | Last updated: May 22, 2026
# Source: Full project conversation history (Jan 2026–May 2026)
# Purpose: Prevent drift. Every entry is what AMA decided, not what Claude interpreted.
# Format: D-## (YYYY-MM-DD) | STATUS | Title

---

# SECTION 1 — PLATFORM DESIGN SYSTEM (locked unless noted)

These apply to every piece, every session, every build.

---

## TYPOGRAPHY (locked March 2026)

| Element | Font | Do NOT |
|---|---|---|
| Hero headlines | Spectral 700, full opacity | Do not use DM Serif Display for heroes |
| h2 / stat numbers / pull quotes | DM Serif Display | Do not use for hero headlines |
| Body / interface / labels | DM Sans 400 (body), 500 (emphasis) | Do not use 300. Do not use 800 except tab labels and tags |
| Nav labels / source stamps / methodology | DM Mono | Do not use for interface labels, data labels, or body text |

## COLOR SYSTEM

### Chart Library Tokens (chart components ONLY)
| Token | Value | Use | Do NOT |
|---|---|---|---|
| Teal | #0a7c72 | Bar fill, left border, Option 1 field | Not on piece page backgrounds, nav, or UI elements (May 6) |
| Paper | #f8f6f1 | Chart token only | Retired from piece backgrounds (May 6) |
| Orange | #c95f1a | Accent token | Per-piece decision |
| Danger red | #c0392b | Over-limit hatch zone ONLY | Not for general emphasis |
| Ink | #111111 | All primary labels/values on white | |
| Ink muted | #888888 | Source stamps and comp-tag labels ONLY | Not on primary content |
| Border | #e0dcd4 | Track bg, section dividers | |

### Platform UI Tokens
| Token | Value | Use |
|---|---|---|
| Navy | #0F172A | Nav wordmark, active tab fill, button fill, stat band bg |
| Electric blue | #2563EB | Word "Interactive" in nav wordmark ONLY |
| White | #FFFFFF | All content backgrounds |
| Ink | #0F172A | All body text, headlines, subheads. No grey. No opacity reduction. |
| Muted | #64748B | Italic aside text beside CTA buttons ONLY |
| Border | #E2E0DC | Section dividers, card borders |

### OPEN: Paper color reconciliation
#f8f6f1 (spec), #e8e5e0 (reference track bg), #e8e4de (reference body bg). AMA decision needed.

### OPEN: Teal scope clarification
Teal retired as background/fill per BRAND-BRIEF. Still used as piece-level accent (tab indicators, card borders, bar fills). AMA to clarify: retired as bg only, or also as accent?

### Highlight accent color — VOIDED
Crimson/Forest/Burgundy candidates voided. No longer tracked.

### Lanes — RETIRED (May 6, 2026)
All pieces are Alterrell Interactive. "Obsidian Futures" is a per-piece dark CSS treatment, not a lane. "Dark treatment" = piece-local `<style>` overriding CSS custom properties. Override properties: `--piece-bg`, `--piece-accent`, `--piece-card-bg`, `--piece-text`, `--piece-muted`, `--piece-border`.

---

## TAB ARCHITECTURE

| Rule | Detail |
|---|---|
| Show/hide tabs (new pieces) | display:flex; flex-direction:column. Section-floor nav at bottom via margin-top:auto. |
| Scroll-spy (legacy) | Sodium and Naming use scroll-spy. Retrofit is separate session. |
| Mobile tab bar | Horizontal scroll, DM Sans 800, 9–10px, uppercase |
| Active tab | Navy #0F172A fill, white text |
| Inactive tabs | White bg, full black text, weight 800, no opacity reduction |
| Tab bar height | 36–40px |

## PIECE PAGE STRUCTURE (locked order)

1. Nav → 2. Tab bar → 3. Headline + subhead → 4. Tags → 5. Body copy → 6. CTA row

## HUB CARD SYSTEM (locked)

- Stat block: 88px fixed height, #16141f bg, paper-colored text at full opacity
- Coming Soon: #2a2a2a stat block, text at 0.7 opacity
- Stat label: 2-line clamp max
- Title: 2-line max. Lede: 2-line max (~18 words, present tense)
- Stakes label: ≤6 words, present tense
- Grid: 3-across desktop, 2 tablet, 1 mobile
- Coming Soon always sorts after active
- data-position for manual pinning

## SPACING (locked)

- Nav: 50px. Tab bar: 36–40px. Content padding: 18–20px.
- 44px minimum touch targets. 860px max editorial. 680px max tools.
- No component with more empty space than content.

## DARK BACKGROUNDS RULE
Dark restricted to sections with no tables and no dense copy. Tables and dense copy: white or paper ONLY.

## SESSION RULES (locked)
- Type 1 = Editorial (claude.ai, no code)
- Type 2 = Build (Claude Code, one piece)
- Type 3 = Platform (Claude Code, CSS/hub only)
- Batches: A = platform, B = new piece + hub card, C = copy updates. Never mix.

## VOICE RULES (locked)
- All copy rewritten by AMA before deploy
- Em dashes: 2–3 per piece max
- Do not use: choppy declaratives in sequence, "it is worth noting," fragments as complete thoughts

---

# SECTION 2 — TEMPLATE STANDARDS (locked May 18, 2026)

### T-1. Color system is CSS, not HTML
Piece-local `<style>` overrides CSS custom properties. No separate templates per treatment.

### T-2. Default tab count is 6
Tab 1 = Overview. Tabs 2–4 = argument. Tab 5 = Take Action. Tab 6 = Spread the Word.

### T-3. Card gallery + prose (not accordions by default)
Accordions ONLY when 4+ discrete expandable data entries on one tab.

### T-4. Card gallery is default visual unit
1:1 cards, max-width 400px, full teal border all sides, white interior. Mobile: horizontal scroll-snap. Desktop: CSS grid auto-fill.

### T-5. Share block: always Tab 1 (Overview)
LOCKED. Enforced universally as of May 22, 2026. 6 destinations: X, Facebook, WhatsApp, LinkedIn, Email, Copy Link.

### T-6. Journey block: Watch / Read / Support
Three items on pieces. Hub keeps 4. "Explore It" retired from pieces.

### T-7. Take Action tab (Tab 5)
Brief must answer: who, ask, tool, lowest-friction action. Sources accordion at bottom.

### T-8. Spread the Word tab (Tab 6)
Intro → shareable cards → share grid → platform CTAs.

### T-9. Footer: clean, no tagline
Dark footer. Links: Substack, About, Ko-fi. No tagline.

### T-10. Hero: headline + subhead only (stat cards optional per brief)

### T-11. Upper nav contrast fix (pending platform commit)
Font-weight 500–600 on YouTube/Substack links.

### T-12. Collapsible methodology
`<details>` wrapper. Placement per-piece.

### T-13. Scripts block
One `<script>` at end. Tab switching + accordion + mobile swipe.

### T-14. Piece-local CSS scoping
All piece CSS in `<style>` in `<head>`, scoped with prefix (e.g. `.ct-`). Never modify `alterrell-interactive.css`.

---

# SECTION 3 — VISUAL LIBRARY

## Component Surface Options (locked)
- Option 1: Teal field (#0a7c72), white as relief
- Option 2: White surface (#fff), 7px solid teal left border

## Approved Components

| ID | Name | Status | Key Rules |
|---|---|---|---|
| A1 | Horizontal Bar with Color Split | Built, approved | Longest bar 90%. Min 44px. Color split for threshold only, not compositional. |
| A2 | Segmented Bar / Decade Timeline | Approved (mobile: single fill) | One row per decade. |
| A3 | City Budget | Built | One city per block, stacked. Police row 1, services row 2. |
| A4 | Stacked Comparison | Specced | AMA override: SIDE BY SIDE, not stacked vertical. Permanent platform decision. |
| B2 | Ranked List | Built, approved | Largest first. Single fill on mobile. |
| B3 | Nutrition/Progress Row | Built | Used in Sodium. |
| C1 | Moment Chart | Built (Option 2 only) | Subject, timeline with dots, value, peak label. |
| C2 | Decade Timeline w/ Toggle | Built | Spectral 800 30px decade labels. Needs defensible metric for bar length. |
| D1 | Stat Callout | Partial | Number large (Spectral 800), editorial line, source stamp, comparison point. |
| D2 | Pull Quote | Built (both options) | DM Serif Display italic 20px. Attribution = piece title. |
| D3 | Annotation Block | Deferred | ✓/✗ structure. Not yet built. |
| D4 | Connector / Two-Beat | Deferred | Two plain sentences. Never more than 2 beats. |

## Deferred/Descoped: B4 (Pictograph), E1 (Sorted Bar List), E2 (Expandable Card List)

## Mobile Tables Rule
"Mobile tables do not exist." Every table → E1 or E2 on mobile.

---

# SECTION 4 — CONCERT TAX STATUS

**Status:** Live. Display title: "Female Musicians Earn Less But Share More."
**Tab structure (locked):** Overview / The Data / The Double Standard / History / Take Action / Spread the Word
**Dark treatment:** #0a0a12 bg, teal accents. Staying dark.

### Widget Status

| Card | Component | Status | Notes |
|---|---|---|---|
| 1 (Bieber vs Carpenter) | A4 | Approved structure | Needs teal/paper rebuild |
| 2 (Iceberg) | — | CUT permanently | May 14 |
| 3 (Tier grid) | B2 | PARKED | Roster needs reconfirmation |
| 4 ("Men set the ceiling") | D2 | Straight build | |
| 5 (Cardi B) | D1/D2 hybrid | Approved as-is | Piece-specific variant |
| 6 (Hardware vs human) | — | CUT permanently | May 14 |
| 7 (Gross table) | Table | Approved | Needs mobile rule resolution |
| 8 (Male vs female rap) | A4 | Approved structure | Needs rebuild |
| 9 (Dua Lipa) | C1 | Not built | Qualitative beats |
| 10 (Double standard) | D3 | Not built | ✓/✗ |
| 11 (Language comparison) | Two-column | Built | Quotes need verification |
| 12 (Standard travels) | D4 | Not built | |
| 13 (History decades) | C2 | Not built | Needs defensible metric |
| 14 ("Men performed") | D2 | Not built | |
| 15 (Genre shift) | TBD | Not built | AMA: A4 or A1? |
| 16 (Listening party) | TBD | Not built | AMA: D2 or D4? |
| 17 ("Longer tables") | D2 | Not built | |
| 18 (Demand asymmetry) | D4 | Not built | |

### Locked Data
Four production tiers: Solo/Minimal · Small · Large Production. Kendrick excluded. The Weeknd = Large. Bruno Mars = Small.

### Open Concert Tax Issues
- Paper color reconciliation
- The Weeknd gross (tour vs career)
- Card 11 quote verification
- Card 15 + 16 component type decisions

---

# SECTION 5 — OTHER PIECE STATUS

**Where's Beyoncé:** Alterrell Interactive lane (teal). 5 tabs. Q3 2026, hurricane season.
**Copaganda:** Two-part. Research complete. Build not started.
**Sodium:** Live. Copy updated May 21. Tab renames + filter pills + sources done.
**Naming P0–P2:** P0 and P1 live with updated copy. P2 Coming Soon.
**Congress 1A:** Built, not deployed. Q3/Q4 general election.
**HBS:** Q2 June — urgent. Reframed to "The Playbook." Decisions open.
**Gay Uncles:** Brief exists. 9/12 cards built. 2 decisions pending.

---

# SECTION 6 — PROCESS RULES

### P-1. Decision capture protocol
Dedicated sweep chat + session opener lookback (7 days).

### P-2. Brief lifecycle states
CONCEPT → RESEARCH → EDITORIAL LOCKED → BUILD READY → BUILT → LIVE

### P-3. Version snapshots before rebuilds
`cp [piece]/index.html _data/archive/[piece]-index-[date].html`

### P-4. Tag system (deferred)
data-tags attributes on hub cards. Visual filter UI deferred.

### P-5. Weekly decision sweep (locked)
Weekly prompt searches project folder, flags decisions not in log.

### P-6. /explore/ sub-area (locked concept, build TBD)
Standalone interactive pages. Pieces stay card-gallery clean. Not scoped yet.

### Editorial checklist (pre-build gate)
11 questions + hub card copy. Claude Code refuses to build if not complete.

---

# SECTION 7 — DECISION LOG (date-stamped)

Format: **D-## (YYYY-MM-DD) | STATUS | Title**

---

### D-20 (2026-05-20) | LOCKED | Journey bar item layout standard
Compact journey bar: two-line stacked, gap 8px, action 15px/600, dest 9px, divider 36px. These values are the AMA-confirmed standard for all pieces.

### D-21 (2026-05-20) | LOCKED | Swipeable carousel is the only gallery layout
`.ct-gallery` (grid) retired. All galleries use `.ct-swipeable-outer` at all viewports. Cards 300px desktop, `calc(100vw - 3rem)` mobile. Arrows on desktop, dots always.

### D-40 (2026-05-21) | LOCKED | Concert Tax "The Receipt" interactive tool
Ticket price slider → NITO revenue split receipt → gender pay comparison. 3 production tier cards below. Placed on The Data tab. Research complete. Do not build granular calculator.

### D-41 (2026-05-21) | COMPLETE | Hub revert to original card format
Reverted from 2-column lane layout to original cards with stat badges, 3-across grid. Lane system parked until 8 published pieces.

### D-42 (2026-05-21) | DECIDED — needs mockups | Naming series title: Option A
Series title in dark header bar, part title as subhead. Candidate: "Our Names Are Traditional Too." Do not build until mockups approved.

### D-43 (2026-05-21) | COMPLETE | Sodium copy rewrite
Final copy applied. Cost + Wages tabs removed. Data tab renamed to "By Franchise" with filter pills. "By Franchise" renamed to "Best Options." Sources jump link added. Compare background fixed.

### D-44 (2026-05-21) | COMPLETE | Naming Part 0 copy update
AMA-approved copy applied. Part 0 live with updated copy.

### D-45 (2026-05-21) | COMPLETE | Naming Part 1 copy update
AMA-approved copy applied. Part 1 live with updated copy.

### D-46 (2026-05-21) | LOCKED | Naming Part 2 remains Coming Soon
Not live. Stays Coming Soon until further notice.

### D-47 (2026-05-21) | COMPLETE | Concert Tax carousel + journey bar confirmed done
Carousel conversion and journey bar fix verified as already complete from May 20 session.

### D-48 (2026-05-21) | IN PROGRESS | HBS reframed to "The Playbook"
Elite institutions absorb advocacy through repeatable tactics. Title candidates: "The Playbook," "They Put You on a Task Force," "Snuffing Out Progress." 5-tab structure proposed. AMA has not confirmed. June deadline. Do not build until confirmed.

### D-49 (2026-05-22) | COMPLETE | Sodium tab renames
Data → "By Franchise." By Franchise → "Best Options." Section IDs unchanged.

### D-50 (2026-05-22) | COMPLETE | Sodium franchise filter pills
Dynamic pills from MENU object. 44px touch targets. Horizontal scroll mobile. Active: #16141f fill, white text.

### D-51 (2026-05-22) | COMPLETE | Sodium: Cost + Wages accordions removed
Systemic Issues tab now has 2 sections: The Formula, The Advertising.

### D-52 (2026-05-22) | COMPLETE | Sodium sources jump link
"Jump to sources" link on Overview. Footer `<details>` gets `id="sources-anchor"`. JS auto-opens on navigation.

### D-53 (2026-05-22) | COMPLETE | Hub: 3 active card content locked
P0: 60+ / years of naming data. Concert Tax: $10M / headliner fee. P1: #1 / name spike.

### D-54 (2026-05-22) | SUPERSEDED by D-58 | Hub: Sodium demoted to Coming Soon
Originally demoted Sodium. Superseded by D-58 which re-activates Sodium.

### D-55 (2026-05-22) | COMPLETE | Status updates for D-43, D-44, D-45
All three copy updates executed and verified.

### D-56 (2026-05-22) | COMPLETE | Sodium Systemic Issues intro text fixed
"Four mechanisms" → "Two mechanisms." Applied in audit fix session.

### D-57 (2026-05-22) | RESOLVED | T-5 share block placement
Ruling: share block on Overview/Tab 1 for all pieces, universally enforced. Share blocks added to all 5 pieces in audit fix session.

### D-58 (2026-05-22) | COMPLETE | Hub card roster update
Sodium activated (Coming Soon → live with link). HBS card removed from hub. Added as Coming Soon: Where's Beyoncé, Benson & Stabler Aren't Coming (Copaganda), Advice From Your Thick Gay Uncles, The Living Room. Final roster: 4 active, 5 Coming Soon.

### D-59 (2026-05-22) | COMPLETE | Hub stat block styling fix
Stat text: #f8f6f1 at full opacity (active), 0.7 opacity (Coming Soon). Fixed 88px height. 2-line clamp on labels. Coming Soon stat block: #2a2a2a. Divider: rgba(248,246,241,0.3).

### D-60 (2026-05-22) | LOCKED | "Obsidian Futures" body labels stay in Naming series
Hero eyebrow and footer wordmark in Naming P0/P1/P2 retain "Obsidian Futures" branding. OG meta tags updated to "Alterrell Interactive" (D-audit). Body labels are intentional per-piece treatment.

### D-61 (2026-05-22) | COMPLETE | Active tab styling: navy fill
Platform CSS updated. `.ai-tab.active`: dark fill (var(--dark-section)), white text (var(--paper)), no underline. 3-line diff to alterrell-interactive.css.

### D-62 (2026-05-22) | COMPLETE | Audit violations: all 6 fixed
Nav/breadcrumb DOM order (Naming P0/P1/P2), OG tag cleanup, 4th journey item removed, Concert Tax footer tagline removed, share blocks enforced on Tab 1, active tab CSS.

D-63 (2026-05-22) | LOCKED — Naming series: 3 parts, A3 card format, "That Name Is So Ghetto" title convention.
D-64 (2026-05-22) | LOCKED — Hub card content constraints: 40 char title, 80 char lede, 2–3 tags from master index.
D-65 (2026-05-22) | LOCKED — Hub card category tags: 10-item master index. Claude proposes, AMA confirms. .hub-card-stat-num retired.
D-66 (2026-05-22) | LOCKED — Single card height: 280px, no tall tier. Shell B caps at 4 items, 5+ splits across cards.
D-67 (2026-05-22) | LOCKED — Four card shells: A (stat), B (chart ≤4), C (quote), D (comparison). Every component maps to one shell.

---

# SECTION 8 — OPEN DECISIONS REQUIRING AMA

| # | Topic | What's needed |
|---|---|---|
| Paper colors | #f8f6f1 vs #e8e5e0 vs #e8e4de — which is canonical for charts? | AMA pick one |
| Teal scope | Retired as bg only, or also as accent? | AMA clarify |
| Card 3 roster | Four-tier artist list from May 5 — still valid? | AMA reconfirm |
| Card 11 quotes | Language comparison quotes need source verification | Research task |
| Card 15 | Genre shift — A4 or A1? | AMA decide |
| Card 16 | "Listening party" — D2 or D4? | AMA decide |
| Card G mobile | Gross table violates mobile tables rule — keep or convert to B2? | AMA decide |
| The Weeknd gross | $300M+ (tour) vs $1B+ (career) — which, and what scope? | AMA clarify |
| Concert Tax `.ct-journey` | Migration to `.ai-journey-compact` still pending | Type 2 task |
| D-48 HBS | 4 open decisions (format, title, tabs, widget) — June deadline | Type 1 session |

---

# SECTION 9 — CURRENT PRIORITY ORDER (as of May 22, 2026)

1. **Hub card fixes** — push pending browser check ← DONE after this commit
2. **Type 1: HBS editorial** — close 4 open decisions (URGENT, June)
3. **Type 1: Naming series title mockups** — Option A, needs visuals before code
4. **Type 2 Batch C: Concert Tax** `.ct-journey` → `.ai-journey-compact`
5. **AMA voice: Sodium** — voice pass before flipping back to active (already live but may want refinement)

---

*End of log. Append new entries in D-## (YYYY-MM-DD) format. Do not create new "Part" sections.*