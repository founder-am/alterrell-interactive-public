# AI-MASTER-RULES.md
# Alterrell Interactive — Master Rules
**Last updated:** June 1, 2026
**Scope:** All Alterrell Interactive builds, audits, and editorial sessions
**Location:** `~/Documents/GitHub/_master/AI-MASTER-RULES.md`

---

## HOW TO USE THIS FILE

This file is the single source of truth for all Alterrell Interactive platform rules. It consolidates and supersedes rules previously scattered across BRAND-BRIEF.md, DEPLOY-CHECKLIST.md, PLATFORM-BRIEF.md, SESSION-PROMPTS.md, DESIGN-DECISION-LOG.md, and ALTERRELL-CLAUDE-DESIGN-HANDOFF.md.

Those files remain in the repo for reference and context. If any of them conflicts with this file, **this file wins**.

DO NOT begin any build, editorial, or audit session without this file uploaded or present in context.

---

## SECTION 1 — UPLOAD GATES

These gates block output until required files are present. They are non-negotiable.

### Gate 1: Brief Finalization
DO NOT finalize a new piece brief UNTIL the following files are present in this conversation:
- This file (`AI-MASTER-RULES.md`)
- `VOICE-MASTER.md`
- The relevant decision log (`DESIGN-DECISION-LOG.md`)

If any are missing, respond: *"Before we lock this brief, please upload [missing files]. Ideation and research are fine without them, but I need them before we commit."*

### Gate 2: Visual Asset Production
DO NOT generate any card, illustration, data visualization, or HTML component UNTIL the following files are present:
- This file (`AI-MASTER-RULES.md`)
- The approved piece brief
- The piece's decision log entry (if one exists)
- `CHART-LIBRARY-REFERENCE.html` (if the session involves any chart component)

If any are missing, respond: *"Before I build, please upload [missing files]."*

### Gate 3: Frontend Build Completion
DO NOT mark any frontend build as complete UNTIL:
- This file (`AI-MASTER-RULES.md`) and `VOICE-MASTER.md` are present
- The deploy checklist (Section 10) has been run against the output
- All failures have been addressed or flagged for AMA decision

---

## SECTION 2 — ROLES

### AMA (Owner)
- Writes original voice (essays, arguments, lived observation)
- Decides meaning, structure, and editorial direction
- Approves all builds before deploy

### Claude (Builder + Auditor)
- Converts approved structure into HTML, components, and visual specs
- Enforces the design system
- Flags gaps and conflicts — does not fill them
- DO NOT generate new arguments, voice, copy, or scope expansions
- DO NOT rewrite AMA voice in build phase
- DO NOT invent narrative structure

### ChatGPT (Structure + Editorial)
- Compresses AMA writing into tab systems, card systems, and narrative flow maps
- Improves clarity and rhythm
- Does not rewrite voice unless asked

---

## SECTION 3 — SESSION TYPES

### Type 1 — Editorial (claude.ai)
For: essays, argument shaping, tab mapping, card extraction, voice pass
Output: argument structure, tab system, key sections mapped
DO NOT produce: HTML, CSS, code, or visual assets

### Type 2 — Build (Claude Code)
For: implementing approved structure into HTML
Required pre-reads (in this order, confirmed aloud):
1. `PLATFORM-BRIEF.md`
2. `DEPLOY-CHECKLIST.md`
3. `VISUAL-REFERENCE.html` or `piece-template.html`
4. The relevant piece brief
5. The piece's existing `index.html` (if editing)

After reading, state:
- The top 7 deploy checklist items you will enforce
- Which tab structure the piece uses
- Which interactive tool pattern is used on which tab

Rules: no new narrative decisions, no rewriting copy, only implementation.

### Type 3 — Platform (Claude Code)
For: CSS changes, hub updates, global config
DO NOT mix with piece builds in the same session.

### Batch Rules — never mix
- **Batch A:** Platform fixes (CSS, hub, config) — deploy alone
- **Batch B:** New piece (piece folder + hub card in same commit)
- **Batch C:** Copy updates only — no structural changes
- DO NOT mix batch types in one commit.

---

## SECTION 4 — PRE-BUILD MOCKUP GATE

**This is mandatory for all Type 2 sessions.**

Before writing ANY HTML, present a section-by-section mockup showing:
- Which zones are structural (unchanged from template)
- Which zones are piece-specific (what content goes where)
- Which card shells are used and where
- Which interactive tool pattern is used on which tab
- How prose width is maintained (padding-only containers, no max-width)
- Tab names for tabs 2–4

AMA confirms the mockup. Only then does the build proceed.

**If you skip the mockup and go straight to code, the session has failed.**

---

## SECTION 5 — PAGE STRUCTURE (universal, never changes)

Every piece page follows this exact DOM order. DO NOT rearrange.

```
1. <head> — meta, OG tags, CSS links
2. <nav class="ai-breadcrumb"> — Alterrell Interactive › [Piece Title]
3. <nav class="ai-nav"> — wordmark + ← All pieces
4. <header class="ai-hero"> — dark background, headline, subhead
5. <section class="ai-journey"> — 3-item journey block
6. <div class="ai-tab-bar"> — tab buttons
7. <section class="ai-section"> × N — tab content sections
8. <footer class="ai-footer"> — wordmark + back link + copyright
9. <script> — tab switching + accordion + mobile swipe
```

### Hero — always dark
- Background: ALWAYS `var(--dark-section)` (#16141f). No light heroes. No exceptions.
- Headline: Spectral 700, white/paper, ONE line at 1280px. DO NOT shrink font.
- Subhead: DM Sans 400, white/paper, full editorial width
- Lane label: "ALTERRELL INTERACTIVE" only. No sub-labels unless locked in piece brief.

**RESOLVED CONFLICT:** Spectral weight is 700, not 800. The BRAND-BRIEF previously said 800; the Design Decision Log and all live HTML files use 700. All new builds use 700.

### Journey Block — one per page
- Exactly 3 items: Watch (YouTube) / Read (Substack) / Support (Ko-fi)
- Position: above the tab bar, below the hero. ONE instance.
- DO NOT place on the Spread the Word tab
- DO NOT place in the footer
- DO NOT duplicate
- All URLs must be live. No `#` placeholders.
- Ko-fi is a deploy gate. No piece ships without it.

### Tab Bar
- Full-span across editorial container width
- Tab labels: DM Sans 800, 9–10px, uppercase, tracked
- Active state: `var(--dark-section)` fill + paper text. No font-size change.
- Tab 1: "Overview" (locked)
- Second-to-last tab: "Spread the Word" (locked)
- Last tab: "Sources" (locked)
- Tabs 2–4: named per piece brief
- Minimum 5, maximum 6 tabs. 7 only with documented exception.
- ARIA: `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`

### Tab Content — the editorial container
- EVERY tab section wraps content in an inner padding container. There is NO max-width constraint. Prose is full editorial width on all pieces, identical to hero width. Width is controlled by padding only, never by max-width.
- ALL elements sit inside this padding container: eyebrows, headlines, prose, card galleries, tools, tables, share blocks
- NOTHING sits outside the padding container — if any element is wider or narrower than the rest, the container is broken
- If any element is wider or narrower than the rest, the container is broken
- All tab backgrounds: `var(--paper)` — no dark sections, no alternating backgrounds
- Tables and dense copy: white or paper ONLY. Never dark.

### Tab 1: Overview
- Share block ALWAYS on this tab (locked May 22, 2026)
- Section eyebrow: DM Sans 800, piece accent color — `var(--teal)` for teal-lane pieces, piece-specific accent (`var(--of-gold)` etc.) for Obsidian Futures pieces
- Section headline: DM Serif Display

### Tab 5: Spread the Word
- NO journey block on this tab
- Shareable social cards/graphics present

### Tab 6: Sources
- Visible tab — NOT a footer accordion
- Methodology note: DM Sans 400, 2–4 sentences
- Source list: numbered, publication names in DM Mono

### Footer
- Wordmark + ← All pieces link + copyright
- No tagline (retired)
- No journey block (lives above tabs)
- No methodology accordion (lives in Sources tab)
- Dark background

---

## SECTION 6 — TYPOGRAPHY

DO NOT deviate from this system. Four fonts only.

| Element | Font | Weight | Notes |
|---|---|---|---|
| Hero headline | Spectral | 700 | `font-size: var(--text-hero)` — no overrides |
| h2, stat numbers, pull quotes | DM Serif Display | — | Per platform CSS |
| Body prose | DM Sans | 400 | — |
| Interface labels | DM Sans | 500 | — |
| Tab labels, section eyebrows | DM Sans | 800 | 9–10px, uppercase, tracked |
| Nav labels, source stamps, methodology, journey action labels | DM Mono | — | ONLY these contexts |

### DO NOT
- Use DM Serif Display for hero headlines
- Use DM Sans 300 (too light)
- Use DM Mono on body copy, card content, tab labels, or headlines
- Use Spectral below 700 weight
- Introduce any fifth font
- Use gray (#666, #999, #aaa) on primary content text — gray only on source stamps
- Use opacity below 1.0 on any primary content
- Override `.ai-hero-hed` font-size — use `var(--text-hero)` only

---

## SECTION 7 — COLOR SYSTEM

### Locked tokens
```
--teal:         #0a7c72   primary accent (charts, card borders, accents)
--orange:       #c95f1a   secondary accent
--paper:        #f8f6f1   content background
--paper-card:   #fff      card interiors, table backgrounds
--dark-section: #16141f   hero, footer
--ink:          #0F172A   all body text, headlines, subheads
--muted:        #64748B   italic aside text beside CTA buttons ONLY
--border:       #e0dcd4   dividers, row separators
```

### Color usage rules
- **Navy #0F172A:** Nav wordmark, active tab fill, button fill, stat band bg
- **Electric blue #2563EB:** The word "Interactive" in the nav wordmark ONLY. Nowhere else.
- **Ink #0F172A:** All body text, headlines, subheads. No grey. No opacity reduction.
- **Muted #64748B:** Italic aside text beside CTA buttons ONLY. Nowhere else.
- **Ink muted #888888:** Source stamps and comp-tag labels ONLY — not on primary content.
- **Danger red #c0392b:** Over-limit hatch zone ONLY — not for general emphasis.

### DO NOT
- Use hardcoded hex colors that bypass platform tokens
- Apply color to headline or body text
- Use grey text anywhere in the content hierarchy
- Put gray text on dark backgrounds
- Use gradients of any kind (except the approved danger zone hatch)
- Gender-code colors within a single chart

### MANAGED TRANSITIONS (not yet resolved)
- Teal is retired from piece page backgrounds, nav, and UI elements per BRAND-BRIEF, but CSS still uses it for active tab color, link colors, and journey block. Migration deferred until highlight color decision. New builds follow the retirement; existing pieces are grandfathered.
- Paper background is retired from piece page backgrounds per BRAND-BRIEF, but Concert Tax still uses it. AMA decision pending on paper value unification (#f8f6f1 vs #e8e5e0 vs #e8e4de).

---

## SECTION 8 — CARDS

### Locked specs
- Size: 300px × 280px. No exceptions. No tall cards.
- Border: 7px solid `var(--teal)` on all four sides
- Interior: white (`var(--paper-card)`)
- Source stamp: bottom-right, DM Mono
- Comp-tag: always present. DM Mono 9px.
- Editorial line: always present. DM Serif Display italic or DM Sans italic 13px. The argument in one sentence. DO NOT omit from a completed card.

### Four shell types
- **Shell A:** Stat (big number + context)
- **Shell B:** Chart (4 items max; 5+ splits across cards with "N of N" indicator)
- **Shell C:** Pull quote
- **Shell D:** Comparison (side-by-side)

### Share cards
- 1080×1080 square. `aspect-ratio: 1/1`. Always.
- No full-width editorial layout. No portrait format unless explicitly approved.

### Share card delivery method (locked)
Share cards on the Spread the Word tab are served as pre-rendered PNG image files (img tags), NOT as HTML divs. PNG files are generated at publish time using the card translator tool and uploaded to the repo. This ensures native long-press save behavior on all mobile devices without custom JS.

Do NOT build Spread the Word share cards as HTML divs. They must be img tags pointing to pre-rendered PNG files.

### Obsidian Futures card-native exception
Pieces in the Obsidian Futures format that are card-native series (e.g. Crowning Achievements, BTU) may use piece-specific card dimensions documented in their piece brief and logged in DESIGN-DECISION-LOG.md.

Locked dimensions for all current Obsidian Futures card-native series:
- Size: 380px × 660px (tarot card proportions)
- Background: #0a0a12 (Obsidian Futures dark)
- Accent: tier-based or piece-specific (defined in piece brief)
- No teal border — Obsidian Futures cards use accent color tokens only
- No photos on any card — typographic format only

The 300×280px spec applies to:
- All Alterrell Interactive (teal lane) pieces
- All non-card-native Obsidian Futures pieces

This exception requires a logged decision entry in DESIGN-DECISION-LOG.md before any Type 2 session builds against it.

### Copaganda visual suite exception
The Copaganda piece ("Benson & Stabler Aren't Coming") uses five full-width chart visuals (V1–V5), not standard 300×280px gallery cards. These are standalone chart components with their own color palette. Do not enforce the 300×280px card spec against Copaganda visuals. Build order: V3→V5→V4→V2→V1.

### Carousel
- 16px gap, ~2.5 cards visible on desktop
- Arrows desktop only, dots always, scroll-snap on mobile
- Cards scroll horizontally within their padding container — never exceed container width

### Chart components
- Bar scaling: longest bar = 90% of track. All bars = (value/max)×90. Never hardcode.
- Value alignment: all bar values right-aligned to track right edge. Never inside the bar.
- Primary label scale: Spectral 700, 24–32px minimum. Never shrink font to fit column.
- Danger zone hatch: only permitted texture. Diagonal stripe on bars exceeding threshold.
- DO NOT approximate from memory — read CHART-LIBRARY-REFERENCE.html first.

---

## SECTION 9 — CSS RULES

- `alterrell-interactive.css` is canonical. NEVER rebuild it. NEVER duplicate its rules inline. Only extend via piece-local `<style>` blocks.
- Chart component styles: intended for `alterrell-charts.css` (file does not yet exist — until created, chart styles go in piece-local `<style>` blocks)
- Each piece gets one piece-local stylesheet: `[piece-slug].css` or `<style>` block in HTML
- `--piece-accent` defined at top of piece-local CSS if piece uses non-teal accent
- No inline styles that override `.ai-*` class rules
- No `!important` declarations in piece-local CSS
- DO NOT change elements not specified in the current task

---

## SECTION 10 — DEPLOY CHECKLIST

Run every item before confirming a build is complete. Report PASS / FAIL / FLAG for each.

### Structure
- [ ] DOM order matches Section 5 exactly
- [ ] Breadcrumb present and before nav in HTML
- [ ] `<body class="has-breadcrumb">` present
- [ ] Hero: dark background, headline on one line at 1280px
- [ ] Journey block: 3 items, live URLs, Ko-fi present, one instance, above tabs
- [ ] Tab bar: full-span, correct labels, ARIA attributes
- [ ] All tab content inside padding container, full editorial width, no max-width
- [ ] Prose width identical across all tabs
- [ ] Sources tab visible (not footer accordion)
- [ ] Footer clean: no tagline, no journey block, no methodology

### Cards
- [ ] All cards 300×280, 7px teal border — OR 380×660, accent color, no photos for Obsidian Futures card-native pieces (D-72)
- [ ] Shell types correct (A/B/C/D)
- [ ] Carousel: scroll within container, dots visible
- [ ] Source stamps and comp-tags present

### Typography and Color
- [ ] No gray on primary content
- [ ] No opacity on primary content
- [ ] No DM Mono on body copy or card content
- [ ] No hardcoded hex bypassing tokens
- [ ] Hero uses `var(--text-hero)` — no font-size override

### Copy
- [ ] No "coming soon" or "V2" language
- [ ] No em dashes in UI copy (buttons, labels, card headers, nav)
- [ ] No build notes or TODO comments in production HTML
- [ ] No unverified data citations without `<!-- UNVERIFIED -->` comment
- [ ] All AI-drafted copy flagged for AMA voice pass

### Meta
- [ ] `<title>` matches locked piece title
- [ ] OG tags: title, description, image, url
- [ ] Twitter tags: card, title, description, image
- [ ] Share block on Tab 1

### Batch discipline
- [ ] Batch type declared (A, B, or C)
- [ ] No batch types mixed in this commit
- [ ] Files in commit listed explicitly

### Final visual verification (1280px browser)
- [ ] Hero readable
- [ ] Journey block not clipped
- [ ] All tabs switch correctly, prose width consistent
- [ ] Cards uniform
- [ ] No visual artifacts

**DO NOT push until AMA confirms.**

---

## SECTION 11 — CONTENT TAXONOMY

All pieces are Alterrell Interactive. There are no lanes. Content is organized by tags.

### Tag rules
- Every piece has at least one tag, no more than four
- Tags listed in order of editorial weight
- Tags appear on both hub card and piece page in the same order
- New tags must be approved in a Type 1 session before use
- Tag pills: navy fill, white text, DM Sans 800, 9–10px, uppercase, tracked, border-radius 2px

### Hub card constraints
- Title: 40 char max
- Lede: 80 char max
- Tags: 2–3 from master index
- Stat block: 88px fixed height, #16141f bg, paper text at full opacity
- Coming Soon stat block: #2a2a2a, text at 0.7 opacity
- Claude proposes hub card tags; AMA confirms

---

## SECTION 12 — DECISION LOG ENFORCEMENT

These locked decisions from DESIGN-DECISION-LOG.md must be enforced. If they are not captured elsewhere in this file, they are captured here.

| ID | Decision | Enforcement |
|---|---|---|
| D-42 | Naming series title: DO NOT build until mockups approved | Block any build |
| D-46 | ~~Naming Part 2 stays Coming Soon~~ SUPERSEDED by D-69 — Part 2 is live | No block |
| D-70 | Series index `/naming/index.html` must exist before Part 3 ships | Block Part 3 deploy until index exists |
| D-71 | No Sources tab for Naming Parts 3–7 — methodology in footer + Part 0 only | Enforce in all naming builds |
| D-48 | HBS: DO NOT build until AMA confirms 4 open decisions | Block any build |
| D-60 | "Obsidian Futures" labels stay in Naming hero eyebrow + footer wordmark | Grandfathered only |
| D-65 | Hub card category tags: Claude proposes, AMA confirms | DO NOT deploy hub card without AMA tag confirmation |
| D-71 | Naming series (Parts 0–7): Sources tab standard does not apply. Methodology lives in footer accordion per series template. Parts 0–2 are grandfathered. Parts 3–7 clone the Part 2 pattern. Do not flag missing Sources tab as a violation on any Naming series file. | Enforce in all Naming builds |
| D-72 | Obsidian Futures card-native exception logged. 380×660px tarot dimensions for Crowning Achievements and BTU. | Enforce in all Obsidian Futures card builds |
| D-76 | Copaganda uses full-width chart visuals V1–V5, not 300×280px cards. Build order V3→V5→V4→V2→V1. | Do not apply card spec to Copaganda |
| D-77 | Share cards on Spread the Word tab are pre-rendered PNGs served as img tags, not HTML divs. | Enforce on all Spread the Word tab builds |

---

## SECTION 13 — KNOWN CONFLICTS AND OPEN DECISIONS

These require AMA resolution. DO NOT assume a default — surface them when relevant.

1. **Em dash limit:** Design Decision Log says 2–3 per piece max. Voice Guide says 1–2 per 1,000 words. **Follow VOICE-MASTER.md** (the stricter standard) until AMA reconciles.
2. **Concert Tax title:** Three different titles across three files. Live HTML title ("Female Musicians Earn Less But Share More") is authoritative. Brief and factpack are stale.
3. **Sodium Ko-fi:** Missing from journey block despite being a deploy gate. AMA decision needed.
4. **Teal scope:** Retired from backgrounds/nav/UI per BRAND-BRIEF, but still active in CSS. Migration deferred.
5. **Paper background:** Retired per BRAND-BRIEF but in use on Concert Tax. Paper value unification pending.
6. **Gay Uncles factpack:** Describes a completely different piece than what was built. DO NOT read GAY-UNCLES-FACTPACK.md for any future build session without verifying it matches the current piece state.
7. **`.ai-inner` retirement:** RESOLVED (2026-05-27). AMA rejected the 860px editorial container. `.ai-inner` class is retired. Prose width uses padding only — full editorial width on all pieces, identical to hero width. Live pieces (Concert Tax, Sodium) grandfathered — do not touch. All new builds use padding-only containers. This file has been updated; DEPLOY-CHECKLIST.md still references `.ai-inner` and should be updated in a future Batch A session.
7. **Spectral font weight:** RESOLVED — 700 is correct. BRAND-BRIEF to be updated.
8. **`alterrell-charts.css`:** Referenced in 3 docs but never created. Until it exists, chart styles go in piece-local `<style>` blocks.

---

## SECTION 14 — CONTEXT LIMIT PROTOCOL

When approaching context limit:
1. Flag it explicitly
2. Update the piece brief with all decisions and next steps
3. Confirm the handoff note with AMA before closing
4. DO NOT continue building past the context warning without completing these steps

---

## SECTION 15 — ANTI-PATTERNS

If you catch yourself doing any of these, STOP:

- Building from memory instead of reading reference files
- Pattern-matching from a different piece instead of the template
- Putting a journey block on the Spread the Word tab
- Using DM Mono on body copy or card content
- Creating dark backgrounds on content tabs
- Making cards taller than 280px
- Skipping the pre-build mockup
- Writing final copy instead of flagging for AMA voice pass
- Mixing batch types in one commit
- Deploying without running the checklist
- Generating new arguments, frameworks, or scope expansions
- Silently fixing voice issues instead of flagging them

---

*End of AI Master Rules. This file supersedes all prior scattered rule documents for Alterrell Interactive.*
