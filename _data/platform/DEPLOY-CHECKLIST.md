# DEPLOY CHECKLIST
**Alterrell Interactive · Run before every commit. No exceptions.**
**Reference: _data/templates/piece-template.html and VISUAL-REFERENCE.html**

---

## PRE-BUILD GATE (Type 2 sessions only)

Before writing ANY HTML, Claude must present a section-by-section mockup showing:
- Which zones are structural (unchanged from template)
- Which zones are piece-specific (what content goes where)
- Which card shells are used and where
- Which interactive tool pattern is used on which tab
- How prose width is maintained (single .ai-inner container)
- Tab names for tabs 2–4

**AMA confirms the mockup. Only then does the build proceed.**

---

## ZONE-BY-ZONE WIREFRAME COMPLIANCE

### Zone 1–2: Nav + Breadcrumb
- [ ] Breadcrumb present: `Alterrell Interactive › [Piece Title]`
- [ ] Breadcrumb uses `.ai-breadcrumb` class
- [ ] Nav uses `.ai-nav` class with wordmark + ← All pieces link
- [ ] DOM order: breadcrumb BEFORE nav in HTML
- [ ] `<body class="has-breadcrumb">` present

### Zone 3: Hero
- [ ] Background: `var(--dark-section)` (#16141f) — ALWAYS dark, no exceptions
- [ ] Headline: Spectral 800, white/paper text
- [ ] Headline: `font-size: var(--text-hero)` — no overrides
- [ ] Headline renders on ONE line at 1280px viewport (if title is too long, natural wrap is acceptable — do NOT shrink font)
- [ ] Subhead: DM Sans 400, white/paper, full editorial width, never clipped
- [ ] Lane label: "ALTERRELL INTERACTIVE" only — no "CIVIC" or other sub-labels unless locked in piece brief
- [ ] No custom hero background colors, no light heroes, no piece-level overrides

### Zone 4: Journey Block
- [ ] ONE journey block per page — above the tabs, below the hero
- [ ] NOT on the Spread the Word tab
- [ ] NOT in the footer
- [ ] NOT duplicated anywhere
- [ ] Exactly 3 items: Watch (YouTube) / Read (Substack) / Support (Ko-fi)
- [ ] All URLs are live — no # placeholders
- [ ] Three columns, equal width, vertical dividers between
- [ ] Teal top border spans full width
- [ ] Action labels: DM Mono, uppercase
- [ ] CTA links: font-weight 600, high contrast
- [ ] Not clipped or overflowing its container on any edge

### Zone 5: Tab Bar
- [ ] Full-span across container width — `display: flex` on bar, `flex: 1` on each tab
- [ ] Tab labels: DM Sans 800, all same font-size (~13-14px) — matches platform CSS `.ai-tab { font-weight: 800; }`
- [ ] Active state: dark background + paper text — NO font-size change
- [ ] Tab 1: "Overview" (locked)
- [ ] Second-to-last tab: "Spread the Word" (locked)
- [ ] Last tab: "Sources" (locked)
- [ ] Tabs 2–4: named per piece brief
- [ ] Minimum 5 tabs, maximum 6 (7 only with documented exception)
- [ ] ARIA: `role="tablist"` on bar, `role="tab"` on each button, `aria-selected` toggled, `role="tabpanel"` on each section

### Zone 6: Tab Content — The Editorial Container
- [ ] **EVERY tab section wraps content in `.ai-inner`** (max-width: 860px, margin: 0 auto)
- [ ] **All elements** sit inside `.ai-inner`: eyebrows, headlines, prose, card galleries, tools, tables, share blocks
- [ ] **Nothing sits outside `.ai-inner`** — if any element is wider or narrower than the rest, the container is broken
- [ ] **Prose width is consistent across all tabs** — visually verify by switching tabs and checking alignment
- [ ] All tab section backgrounds: `var(--paper)` — no dark sections, no alternating backgrounds
- [ ] Tables and dense copy: white or paper background ONLY, never dark

### Zone 6a: Cards (inside tab content)
- [ ] **Size: 300px × 280px — no exceptions**
- [ ] No card taller than 280px — if content doesn't fit, split across cards with "N of N" indicator
- [ ] **Border: 7px solid `var(--teal)` on all four sides**
- [ ] Interior: white (`var(--paper-card)`)
- [ ] Source stamp: bottom-right, DM Mono
- [ ] Shell types used correctly: A (stat), B (chart ≤4 items), C (quote), D (compare)
- [ ] Carousel: 16px gap between cards
- [ ] Carousel: ~2.5 cards visible on desktop
- [ ] Carousel: arrows on desktop only, dots always, scroll-snap on mobile
- [ ] Cards scroll horizontally within `.ai-inner` — never exceed container width

### Zone 6b: Interactive Tools (inside tab content)
- [ ] White/paper background ONLY (dark workbench is a flagged exception requiring documentation)
- [ ] One interactive tool per tab maximum
- [ ] Tool uses platform form elements (`.ai-select`, `.ai-input`, `.ai-btn`) where possible
- [ ] 44px minimum touch targets on all interactive elements

### Tab 1: Overview — Structural Requirements
- [ ] Section eyebrow: DM Sans 800, teal — matches platform CSS `.ai-eyebrow { font-family: var(--font-body); font-weight: 800; }`
- [ ] Section headline: DM Serif Display
- [ ] Share block present on this tab (most emotionally compelling)
- [ ] Prose and cards both inside `.ai-inner` at same width

### Tab 5: Spread the Word — Structural Requirements
- [ ] Section eyebrow + headline present
- [ ] Shareable social cards/graphics present (downloadable)
- [ ] NO journey block on this tab
- [ ] Share copy present

### Tab 6: Sources — Structural Requirements
- [ ] **Visible tab** — NOT a footer accordion
- [ ] Methodology note: DM Sans 400, 2-4 sentences, plain language
- [ ] Source list: numbered, publication names in DM Mono
- [ ] Background: paper

### Zone 7: Footer
- [ ] Wordmark + ← All pieces link + copyright
- [ ] **No tagline** (retired)
- [ ] **No journey block** (lives above tabs)
- [ ] **No methodology accordion** (lives in Sources tab)
- [ ] Footer is dark background

---

## TYPOGRAPHY COMPLIANCE

- [ ] Spectral 800: hero headline ONLY — nowhere else
- [ ] DM Serif Display: h2, stat numbers, pull quotes ONLY — not body copy
- [ ] DM Sans 400: all body prose
- [ ] DM Sans 500: interface labels
- [ ] DM Sans 800: tab labels, section eyebrows
- [ ] DM Mono: nav labels, source stamps, methodology labels, journey block action labels ONLY
- [ ] **DM Mono NOT used on:** body copy, card content, tab labels, headlines
- [ ] No gray (#666, #999, #aaa) on primary content text — gray only on source stamps
- [ ] No opacity on primary content text — weight does the work
- [ ] No font-size overrides on `.ai-hero-hed` — use `var(--text-hero)` only

---

## COLOR COMPLIANCE

- [ ] `--piece-accent` defined in piece-local CSS if piece uses non-teal accent
- [ ] No hardcoded hex colors that bypass platform tokens (check for #666, #555, #999, #aaa)
- [ ] Teal (`var(--teal)`) used as primary accent unless piece-accent is documented
- [ ] Orange (`var(--orange)`) used as secondary accent only
- [ ] No off-brand colors outside documented piece-accent usage

---

## COPY COMPLIANCE

- [ ] No "coming soon" or "V2" language anywhere in the file
- [ ] No em dashes in UI copy (buttons, labels, card headers, nav) — editorial prose is fine
- [ ] No build notes or TODO comments in production HTML
- [ ] No unverified data citations in visible copy — flag with `<!-- UNVERIFIED -->` comment if unresolved
- [ ] All AI-drafted copy flagged for AMA voice pass before deploy

---

## META AND OG TAGS

- [ ] `<title>` matches locked piece title
- [ ] `og:title`, `og:description`, `og:image`, `og:url` present
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` present
- [ ] `og:title` matches locked piece title exactly
- [ ] `meta name="description"` present

---

## DOM ORDER (verify in source, not browser)

```
1. <head> — meta, OG tags, CSS links
2. <nav class="ai-breadcrumb">
3. <nav class="ai-nav">
4. <header> (hero)
5. <section class="ai-journey">
6. <div class="ai-tabs"> (tab bar)
7. <section class="ai-section"> × N (tab content)
8. <footer class="ai-footer">
9. <script>
```

- [ ] All elements in this exact order — no rearranging

---

## CSS COMPLIANCE

- [ ] Links to `alterrell-interactive.css` — does NOT rebuild platform CSS inline
- [ ] Piece-local styles in `<style>` block or `[piece-slug].css` — not scattered inline
- [ ] `--piece-accent` defined at top of piece-local styles (if applicable)
- [ ] No inline styles that override `.ai-*` class rules
- [ ] No `!important` declarations in piece-local CSS

---

## BATCH RULES

- [ ] Batch type declared: A (platform), B (new piece), or C (copy/structural updates)
- [ ] No batch types mixed in this commit
- [ ] Files in this commit listed explicitly
- [ ] Files intentionally excluded listed with reason

---

## FINAL VISUAL VERIFICATION

Before confirming the commit, visually verify in browser at 1280px:

- [ ] Hero headline visible and readable (white on dark)
- [ ] Journey block: all 3 items visible, not clipped on any edge
- [ ] Switch through ALL tabs — prose width is identical on every tab
- [ ] Cards are uniform height (280px), uniform border (7px teal), horizontal scroll
- [ ] No element is wider than the editorial container
- [ ] Sources tab is visible and contains methodology + source list
- [ ] Footer is clean — no orphaned components
- [ ] No visual artifacts from the fix (broken layouts, missing content, overlapping elements)

---

## AUDIT PROMPT (for read-only audit sessions)

When running an audit against an existing piece, use every section above as the checklist. For each item, report:
- ✅ PASS
- ❌ FAIL (state what's wrong and the line number)
- ⚠️ FLAG (ambiguous or needs AMA decision)

Produce a summary at the end: total passes, total failures, total flags. Rank all failures by severity (critical visual issues first, minor compliance issues last).

---

*End of checklist. Run every item. Report every result. Do not push until AMA confirms.*
