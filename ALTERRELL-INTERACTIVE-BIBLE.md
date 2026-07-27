# Alterrell Interactive Bible

**Last updated:** 2026-07-27

This file is canonical because it is the only file at this path. It does not declare rank.

---

## LANE

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| LANE-01 | Every piece has 1–4 tags, listed by editorial weight; the tag list on the hub card and on the piece page must match, in order. | AMR §11; DDL (Lanes retired May 6); D-64; D-65 | Piece has 0 or more than 4 tags, or the hub-card tag list differs from the piece-page tag list. |
| LANE-02 | There are no lanes as a navigation structure. "Dark treatment" (Obsidian Futures) is a per-piece CSS override, not a lane. One lane (light/teal or dark) per piece — a single piece's cards do not mix light-lane and dark-lane treatments. | DDL (Lanes retired); D-93 | A single piece's card gallery contains both light-interior (teal-lane) and dark-interior (dark-lane) cards. |
| LANE-03 | Hub card left border: electric blue `#2563EB` for every active (non-Coming-Soon) piece. No tag-based border color differentiation. | TSS Feature 1 | An active hub card's left border color is not `#2563EB`. |
| LANE-04 | The Naming series has exactly one hub card, linking to `/naming/` (the series index). No per-part hub cards. | DDL D-80 | The hub contains more than one card whose link target starts with `/naming/`. |
| LANE-05 | Tag pills: navy fill, white text, DM Sans 800, 9–10px, uppercase, tracked, `border-radius: 2px`. | AMR §11, TSS | A `.tag-pill`-equivalent element's computed style deviates from this spec. |

---

## SKEL

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| SKEL-01 | DOM order is fixed: `<head>` → breadcrumb nav → platform nav → hero header → journey section → tab bar → N tab sections → footer → script. | AMR §5; DC DOM ORDER | Elements appear out of this order in source. |
| SKEL-02 | Breadcrumb element precedes the platform nav element in source. | AMR §5; DC Zone 1–2 | `.ai-nav` appears before `.ai-breadcrumb` in source order. |
| SKEL-03 | `<body class="has-breadcrumb">` is present. | DC Zone 1–2 | `<body>` lacks `has-breadcrumb` in its class list. |
| SKEL-04 | The breadcrumb is a `<nav class="ai-breadcrumb">` element, not a `<div>`. | DC Zone 1–2; piece-template.html | Breadcrumb is implemented as `<div class="ai-breadcrumb">`. |
| SKEL-05 | `alterrell-interactive.css` is canonical. Piece files never rebuild or duplicate its rules inline; piece-local styles live in a `<style>` block or `[slug].css`, extending — never replacing — the platform stylesheet. | AMR §9; DDL T-14 | A piece's `<style>` block redefines a platform selector (e.g. `.ai-hero`, `.ai-tab`) with conflicting rules instead of scoping to a piece-local prefix. |
| SKEL-06 | No `bbl-`-prefixed structural class in any piece built or rebuilt after 2026-07-20. | DDL D-88; AID AI-D-1 | A piece file with a build/rebuild date after 2026-07-20 contains a `bbl-`-prefixed class on a structural element. |

---

## HERO

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| HERO-01 | Hero background is always `var(--dark-section)` (`#16141f`). No exceptions, no piece-level override. | AMR §5; DC Zone 3; DDL | Hero element's background is not `var(--dark-section)`. |
| HERO-02 | Hero headline: Spectral, weight 700. | AMR §6 (resolved); CSS `.ai-hero-hed { font-weight: 700 }` | Hero headline has an inline or piece-local weight override ≠ 700. |
| HERO-03 | No font-size override on `.ai-hero-hed` — use `var(--text-hero)` only. | AMR §6; DC Typography | A piece's `<style>` sets `font-size` on `.ai-hero-hed` or its piece-local equivalent. |
| HERO-04 | Hero lane label reads "ALTERRELL INTERACTIVE" only, unless a sub-label is locked in the piece brief. Naming series retains "Obsidian Futures" hero eyebrow and footer wordmark as a standing, named exception. | AMR §5; DDL D-60 | Hero eyebrow text is neither "ALTERRELL INTERACTIVE" nor "Obsidian Futures" (Naming only), with no brief citation. |

---

## JRNY

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| JRNY-01 | Exactly one journey block per page: 3 items (Watch / Read / Support), positioned above the tab bar and below the hero. | AMR §5; DC Zone 4; DDL T-6 | Count of `.ai-journey` / `.ai-journey-compact` elements ≠ 1, or item count within it ≠ 3. |
| JRNY-02 | The journey block does not appear on the action tab, does not appear in the footer, and is not duplicated anywhere else on the page. | AMR §5; DC Zone 4 | A `.ai-journey`-class element is found inside the last three tabs' panels or inside `<footer>`. |
| JRNY-03 | All journey URLs are live — no `#` placeholders. A Ko-fi link is present; it is a deploy gate. | AMR §5; DC Zone 4 | Any journey `<a href="#">`, or no `ko-fi.com` link present in the journey block. |
| JRNY-04 | Journey action labels are DM Mono, uppercase. | AMR §6; DDL D-20 | `.ai-journey-label` / `.ai-journey-cta` font-family is not the platform mono stack. |
| JRNY-05 | Compact journey layout: two-line stacked, 8px gap, action label 15px/600, destination label 9px, 36px divider. | DDL D-20 | `.ai-journey-compact` CSS values differ from these. |

---

## TABS

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| TABS-01 | Position 1 is always "Overview." | AMR §5; DC; D-102 | First tab's label is not "Overview." |
| TABS-02 | Tab order, counting from the last tab (position *n*): *n* = Sources, *n*−1 = Share to Social, *n*−2 = Take Action. "Spread the Word" is retired as a tab name — pieces built forward use "Share to Social." | D-102 | Last three tabs, in order, are not [Take Action, Share to Social, Sources] for a piece built 2026-07-27 forward; or any post-D-102 piece uses the label "Spread the Word." |
| TABS-03 | The action tab (*n*−2) is named "Take Action" in any piece not live as of 2026-07-01. Pieces already live as of that date keep their existing action-tab name (or absence of one) as a grandfathered exception. | D-103 | A piece with no live version as of 2026-07-01 has an *n*−2 tab whose label is not "Take Action." |
| TABS-04 | Tab count is what the piece needs. Fewer than 7 is preferred. 7 or more requires a logged, AMA-confirmed decision entry. Binds pieces built 2026-07 forward — not retroactive. | D-101 | A piece built 2026-07 forward has 7+ tabs with no corresponding D-## entry in Appendix A. |
| TABS-05 | Gay Uncles ships exactly 7 tabs. "Hold Your Ground" is cut from the tab set. | D-97 (the D-101 confirmation for this piece) | Gay Uncles ships with a tab count ≠ 7, or with a tab labeled "Hold Your Ground." |
| TABS-06 | No sub-tabs (a `role="tablist"` nested inside a `role="tabpanel"`). Audience segmentation is carried in the card eyebrow, not a second tab layer. | D-98 | A tabpanel contains a nested `role="tablist"`/`role="tab"` element set. |
| TABS-07 | Naming series: no Sources tab for Parts 3–7, pre-rebuild (methodology stays in the footer accordion); Part 0 is the standing exception (Sources content is present in its own tab). This exemption expires piece-by-piece as each Naming part rebuilds per D-88/D-90, at which point sources becomes a tab. | DDL D-71; D-74; D-88; D-90 | A Naming Part 3–7 file, not yet flagged as rebuilt, is scored as failing for lacking a Sources tab; or a rebuilt Naming part lacks one. |
| TABS-08 | Tab switching: `data-target` holds a bare element id (no `#` prefix), paired with a matching `aria-controls` on the same button. Sodium (`#id`-prefixed targets) and the Naming series (`data-tab` index + `#id` targets) are grandfathered to their existing convention. | D-105 | A piece outside the Sodium/Naming grandfather list uses a `#`-prefixed `data-target`, or a tab button's `data-target` has no matching `aria-controls`. |
| TABS-09 | ARIA: `role="tablist"` on the bar, `role="tab"` on each button with `aria-selected` toggled, `role="tabpanel"` on each section, `aria-controls` matching the panel id. | AMR §5; DC Zone 5; D-105 | Any of these attributes is missing on a tab bar / tab button / panel triad. |
| TABS-10 | Tab bar: full-span, `flex: 1` per tab, DM Sans 800, 9–10px, uppercase, tracked. | AMR §5/§6; DC Zone 5 | Tab bar or tab-button CSS deviates from this spec. |
| TABS-11 | Active tab: dark fill (`var(--dark-section)`) + paper text, no font-size change, no underline. | AMR §5; DDL D-61 | `.ai-tab.active` CSS uses a different fill, adds `text-decoration: underline`, or changes `font-size`. |

---

## PROSE

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| PROSE-01 | No prose width cap anywhere, on any piece, with no grandfathered exceptions. Every tab wraps content in a padding-only container, full editorial width identical to the hero. Width and height caps apply to cards only, never to prose containers. | D-100 (retires D-73's Parts 0–2 grandfather clause) | Any prose container (`.ai-inner` or a piece-local equivalent) has an explicit `max-width` set to a value below its natural container width. |
| PROSE-02 | Prose width is visually consistent across every tab of a piece. | DC Zone 6 | Not machine-checkable — visual verification only. *(Retained here because PROSE-01 gives it a checkable proxy: if no tab-content container has a max-width, this holds by construction.)* |
| PROSE-03 | All tab-content backgrounds are `var(--paper)` — no dark sections, no alternating backgrounds — except a piece's declared dark-lane treatment (LANE-02), applied consistently across all of that piece's tabs. | AMR §5; DC Zone 6 | A non-dark-lane piece has a dark-background content tab; or a dark-lane piece has some tabs dark and others paper. |
| PROSE-04 | Tables and dense copy render on white or paper background only, never dark. | AMR §5/§7; DC Zone 6 | A `<table>` or dense-copy block sits inside a dark-background container. |
| PROSE-05 | Nav 50px, tab bar 36–40px, content padding 18–20px. | DDL SPACING | Declared CSS values for these zones fall outside range. |

---

## GALL

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| GALL-01 | The gallery is the platform carousel. Fixed card size, no content-driven sizing. One lane (card treatment) per piece. | D-93 | A gallery is implemented as a CSS grid instead of `.carousel`/`.carousel__track` markup; or a card's height/width grows to fit its content instead of clipping to the fixed size; or one piece's carousel mixes light- and dark-lane cards. |
| GALL-02 | Carousel: 16px gap, ~2.5 cards visible on desktop, arrows desktop-only, dots always visible, scroll-snap on mobile. | AMR §8; DC Zone 6a; CSS `--carousel-gap: 16px` | Declared gap ≠ 16px, or arrows render at mobile widths. |
| GALL-03 | Cards scroll horizontally within their padding container and never exceed the container's width. | AMR §8; DC Zone 6a | Carousel track overflows its parent container's width. |
| GALL-04 | Accordions (`<details>`) for structural page content are retired for any piece built or rebuilt after 2026-07-20. Existing accordions on pre-D-88 pieces stay until that piece is rebuilt. | DDL T-3; D-88 | A piece built/rebuilt after 2026-07-20 uses `<details>` for structural (non-card) content. |

---

## CARD

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| CARD-01 | Cards are 300×280px by default, for every piece. Dimension exceptions apply only to pieces that were already shipped (live) before July 2026. | D-99 (narrows D-72; reconciles D-91) | A piece with no live version before 2026-07 has a `.carousel__card` whose declared size is not 300×280. |
| CARD-02 | Card border: 7px solid `var(--teal)`, all sides, white interior — for light-lane (teal) pieces. Dark-lane pieces use an accent-color border (no teal) with dark interior, at the same 300×280 default size (CARD-01) unless a pre-2026-07 legacy exception applies. | AMR §8; DDL D-68; D-96 (amended); D-99 | Light-lane card border is not 7px solid teal with white interior; or a post-2026-07 dark-lane piece's card is not 300×280. |
| CARD-03 | Gay Uncles is a dark-lane piece. Its cards are 300×280, not 380×660. | D-96, AMENDED | Gay Uncles ships a card whose size is 380×660, or a card that is not on a dark background. |
| CARD-04 | The D-72 exception (380×660 tarot cards, dark bg `#0a0a12`, tier accent, no teal border, no photos) for Crowning Achievements and BTU specifically is **deferred, not retired**. It is decided when Crowning Achievements builds — until then it has no live enforcement surface. | DDL D-72; D-108 | Crowning Achievements or BTU ships a live `index.html` with cards sized 300×280 *without* a logged decision entry re-affirming CARD-01 over the deferred D-72 exception at build time. |
| CARD-05 | Row cap: ranked/comparison/list content inside a card caps at 5 rows. 6+ rows require a split across multiple cards with an "N of N" indicator. `.card-square` (and the platform card shell generally) is height-fixed with `overflow: hidden` — exceeding the row cap clips silently rather than erroring. The first ranked card of any piece needs a visual pass to confirm it isn't silently clipped. | DDL D-66; D-91 (row-cap portion retained); this session | A card contains more than 5 rows of ranked/list/comparison content without an "N of N" indicator. |
| CARD-06 | Every card maps to exactly one of four shells: A (stat), B (chart, ≤4 items), C (pull quote), D (comparison). Shell B caps at 4 items; 5+ splits across cards with an "N of N" indicator. | AMR §8; DDL D-66; D-67; D-78 | A `.carousel__card` lacks a `card--a`/`card--b`/`card--c`/`card--d` class, or a `card--b` instance has more than 4 bar rows without a split indicator. |
| CARD-07 | Source stamp bottom-right, DM Mono. Comp-tag always present, DM Mono 9px. Editorial line always present — never omitted from a completed card. | AMR §8 | Card lacks a source-stamp element, lacks a comp-tag element, or lacks an editorial-line element. |
| CARD-08 | Copaganda uses five full-width chart visuals (V1–V5), not 300×280 gallery cards. Own color palette. Build order V3→V5→V4→V2→V1. The 300×280 spec does not apply to these visuals. | AMR §8; DDL D-75 (see Appendix C for the AMR-vs-DDL numbering conflict) | The 300×280 card spec (CARD-01) is scored as failing against a Copaganda visual, V1–V5. |
| CARD-09 | Hub card: title ≤40 characters, lede ≤80 characters, 2–3 tags, stat block 88px fixed height, `#16141f` background, paper-colored text at full opacity. | AMR §11; DDL D-59; D-64; D-65 | Rendered hub-card title/lede text exceeds the character limit, or stat block height/background/opacity deviates. |
| CARD-10 | Coming Soon stat block: `#2a2a2a` background, text at 0.7 opacity. (Currently unexercised — no Coming Soon cards remain in the hub roster as of D-81/D-82.) | AMR §11; DDL D-59 | A Coming Soon hub card's stat block deviates from this spec. |
| CARD-11 | Hub grid: 3-across desktop, 2 tablet, 1 mobile. | DDL HUB CARD SYSTEM | Hub grid `grid-template-columns` does not resolve to 3/2/1 at the respective breakpoints. |
| CARD-12 | OF card-native hero/display type (where CARD-04 is active) uses stroke-outline texture: `-webkit-text-stroke: 1px rgba(248,246,241,0.6)`, `paint-order: stroke fill`, `text-shadow: 0 2px 6px rgba(0,0,0,0.5)`. Teal-lane pieces use flat rendering, no texture. | DDL D-79; DP P-09 | A teal-lane piece applies this stroke treatment, or (while CARD-04 is deferred) any live card uses it. |

---

## CHART

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| CHART-01 | Bar scaling: longest bar = 90% of track; every bar = `(value/max) × 90`. Never hardcoded. | AMR §8; CLS | A bar's declared width doesn't match the formula given adjacent data in the same component. |
| CHART-02 | Bar values are right-aligned to the track's right edge — never rendered inside the bar. | AMR §8 | Value element is positioned inside the bar's fill area. |
| CHART-03 | Primary chart label scale: Spectral 700, 24–32px minimum. Never shrunk to fit a column. | AMR §8 | Label font-size below 24px, or a font-size override present that shrinks it to fit. |
| CHART-04 | The danger-zone hatch (diagonal stripe on bars exceeding a threshold) is the only permitted texture on chart components. | AMR §8; CLS | A chart component uses a texture other than the danger hatch. |
| CHART-05 | Every component that displays a data point includes a visible, never-collapsed DM Mono source stamp. | CLS standing rule 1 | A `.ac-*` chart component has a data point with no adjacent source-stamp element. |
| CHART-06 | Color split rule for bar components: teal fill up to the limit/benchmark, danger red past it. No legend needed. | CLS standing rule 7; AMR §8 | A bar component past its threshold is not danger-red, or a legend is present where the color split alone should carry the meaning. |
| CHART-07 | Every table becomes a sorted bar list (E1) or expandable card list (E2) on mobile — "mobile tables do not exist." | DDL Mobile Tables Rule; CLS standing rule 5 | A raw `<table>` renders (is not hidden/replaced) at mobile viewport width without a documented per-piece exception logged against this rule. |
| CHART-08 | `alterrell-charts.css` does not exist. Until it is created, all chart component styles live in piece-local `<style>` blocks, never inline redefinitions of platform CSS. | AMR §9/§13.8; CLS SESSION RULES; Appendix C | A piece links to `alterrell-charts.css` before the file exists in the repo. |

---

## SHARE

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| SHARE-01 | The share block is always present on Tab 1 (Overview). | AMR §5; DC; DDL T-5; D-57 | Overview tabpanel contains no share-block-equivalent element. |
| SHARE-02 | The Overview share block carries exactly 2 destinations: X and Copy Link. | D-104 (retires the 6-destination rule) | Overview share block has a destination count ≠ 2, or a destination other than X/Copy Link. |
| SHARE-03 | The action-tab-minus-one tab (position *n*−1) is "Share to Social" (see TABS-02). It contains, in order: intro copy → shareable cards → share destination grid → platform CTAs. No journey block on this tab. | DDL T-8 (renamed by D-102) | Tab labeled "Share to Social" is missing one of these zones, or contains a `.ai-journey` element. |
| SHARE-04 | Share cards on the Share to Social tab are pre-rendered PNG files served as `<img>` tags — never built as live HTML divs. | AMR §8; DC; DDL D-76/D-77 (see Appendix C for citation numbering) | Share to Social tab contains a styled `.share-card`-type `<div>` instead of, or in addition to, an `<img>` pointing at a pre-rendered PNG. |

---

## SRC

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| SRC-01 | The Sources tab is visible — never a footer accordion — as the universal default, at position *n* (see TABS-02). Naming Parts 3–7, pre-rebuild, are the standing exception (TABS-07). | AMR §5; DC; D-102 | Last tab's label is not "Sources" outside the Naming pre-rebuild exemption. |
| SRC-02 | Methodology note: DM Sans 400, 2–4 sentences, plain language. | AMR §5; DC | Methodology paragraph count is 0, 1, or 5+. |
| SRC-03 | Source list is numbered; publication names render in DM Mono. | AMR §5; DC | Source list is an unordered list, or publication-name spans are not DM Mono. |

---

## FOOT

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| FOOT-01 | Footer: wordmark + "← All pieces" link + copyright only. No tagline. No journey block. No methodology accordion. Dark background. | AMR §5; DC; DDL T-9 | Footer contains a `.ai-journey` element, a `<details>` methodology block, or tagline text — except the Naming-series footer methodology accordion, which is the documented standing exception for that series only (TABS-07). |

---

## COPY

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| COPY-01 | No "coming soon" or "V2" language anywhere in shipped copy. | AMR §10; DC | String "coming soon" or "V2" (case-insensitive) present in visible copy. |
| COPY-02 | No em dashes in UI copy (buttons, labels, card headers, nav). Editorial prose is exempt from this specific rule. | AMR §10; DC | An em dash appears inside a button, label, card-header, or nav text node. |
| COPY-03 | Em dash budget in editorial prose: 1–2 per 1,000 words (VOICE-MASTER.md's stricter standard governs over the Decision Log's 2–3-per-piece figure until AMA reconciles the two). | DDL; VOICE-MASTER.md; AMR §13.1 | Em dash count in a piece's editorial prose exceeds 1–2 per 1,000 words. |
| COPY-04 | No build notes or TODO comments in production HTML. | AMR §10; DC | `TODO`, `FIXME`, or an HTML comment describing build state is present in a shipped file. |
| COPY-05 | Nothing ships live with a visible placeholder. Placeholders (`[[PLACEHOLDER: ...]]`, `[BRACKETED CAPS]`, `[AMA ...]`) never block a *build* — they only block a *ship*. | D-94 | A live (non-draft, non-`.new.html`) `index.html` contains `[[PLACEHOLDER`, a `[AMA` marker, or an unresolved `[BRACKETED CAPS]` token. |

---

## A11Y

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| A11Y-01 | ARIA roles/attributes per TABS-09. | AMR §5; DC | See TABS-09. |
| A11Y-02 | 44px minimum touch target on every interactive element. | DDL SPACING; DC Zone 6b | Computed min-height or min-width of an interactive element is below 44px. |
| A11Y-03 | No gray (`#666`, `#999`, `#aaa`) on primary content text. Gray is reserved for source stamps only. | AMR §6/§10; DC; DDL | A primary body/headline element's color is `#666`, `#999`, or `#aaa`. |
| A11Y-04 | No opacity below 1.0 on primary content text. | AMR §6/§10; DC | A primary text element's `opacity` is set below 1, or its color uses an alpha channel below 1. |

---

## BUILD

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| BUILD-01 | Structure is the build gate. A build does not start on a scaffold that fails SKEL/TABS/GALL/CARD structural checks. Copy (voice, final wording) is the *ship* gate, not the build gate — placeholders never block a build (see COPY-05 for the ship-side check). | D-94; DDL D-88 "PRE-BUILD CHECK" | A build proceeds on a non-compliant scaffold (fails a SKEL/TABS/GALL/CARD rule) — independent of whether copy is final. |
| BUILD-02 | No `bbl-`-prefixed structural class in any post-2026-07-20 piece (cross-reference SKEL-06). | DDL D-88 | See SKEL-06. |
| BUILD-03 | A path/slug rename touches no copy, no data, no structure — it is not a "build" for the purposes of any queued-item block. | DDL D-89 | n/a — process exemption, not itself a scored condition. *(Retained for cross-reference from BUILD-04.)* |
| BUILD-04 | Upload-queue protocol: a build session does not start on a piece whose prior outputs are still listed in `PROJECT-STATUS.md`'s Upload Queue — except pure renames (BUILD-03). | DDL D-85; D-89 | A Type 2 build session begins work on a piece with an open Upload Queue entry that is not a rename. |

---

## SHIP

| ID | RULE | SOURCE | FAILS IF |
|---|---|---|---|
| SHIP-01 | Nothing ships live with a visible placeholder (cross-reference COPY-05). | D-94 | See COPY-05. |
| SHIP-02 | The essay/long-read companion is never a ship gate. Platform copy ships on slots first; the Substack long-read follows when ready. | DDL D-87 | A build is blocked or delayed pending a Substack essay that isn't itself part of the piece's shipped page. |
| SHIP-03 | A read-only audit/documentation session writes exactly two things: one report file under `reports/`, and one `LEDGER.md` line. Nothing else. | D-106 | A session flagged read-only has a diff touching any file other than one file under `reports/` and one line appended to `LEDGER.md`. |
| SHIP-04 | Batch discipline: Batch A (platform), Batch B (new piece + hub card), Batch C (copy-only) are never mixed in one commit. Files in the commit are listed explicitly. | AMR §3; DC Batch Rules | n/a at the file level — evaluated against a commit's file list, not a single file's content. |

---

# Appendix A — Decision History (D-1 through D-108)

**Scope note:** D-1 through D-19 do not appear in any Alterrell Interactive-scoped source file read for this Bible. `AI-DECISIONS.md` cites D-17 and `INTERACTIVE-BUILD-PRECHECK.md` cites D-5 as belonging to a separate, cross-project `canonical/DECISIONS.md` log outside this repo. They are out of scope here — not fabricated, not retired, simply not sourced from any file this Bible consolidates. D-22 through D-39 likewise never appear in `DESIGN-DECISION-LOG.md`'s date-stamped section (the log jumps from D-21 to D-40 with no explanation given in the source); they are recorded below as a gap, not invented.

| D-# | One-line summary | Section |
|---|---|---|
| D-1–D-19 | Out of scope — cross-project `canonical/DECISIONS.md`, not read for this Bible. | n/a |
| D-20 | Journey bar item layout standard locked. | JRNY |
| D-21 | Swipeable carousel is the only gallery layout; grid gallery retired. | GALL |
| D-22–D-39 | Gap in the source log — no entries found under these numbers. | n/a |
| D-40 | Concert Tax "Receipt" interactive tool locked; no granular calculator. | n/a — piece-specific |
| D-41 | Hub reverted to original card format, 3-across grid. | CARD |
| D-42 | Naming series title: don't build until mockups approved. | n/a — piece-specific |
| D-43 | Sodium copy rewrite complete. | n/a — piece status |
| D-44 | Naming Part 0 copy update complete. | n/a — piece status |
| D-45 | Naming Part 1 copy update complete. | n/a — piece status |
| D-46 | Naming Part 2 stays Coming Soon — superseded by D-69. | n/a — piece status |
| D-47 | Concert Tax carousel + journey bar confirmed done. | n/a — piece status |
| D-48 | HBS reframed to "The Playbook" — later removed from hub (D-81). | n/a — piece status |
| D-49 | Sodium tab renames. | n/a — piece status |
| D-50 | Sodium franchise filter pills. | n/a — piece status |
| D-51 | Sodium Cost + Wages accordions removed. | n/a — piece status |
| D-52 | Sodium sources jump link. | n/a — piece status |
| D-53 | Hub 3 active-card content locked. | n/a — piece status |
| D-54 | Hub Sodium demoted — superseded by D-58. | n/a — piece status |
| D-55 | Status rollup for D-43/44/45. | n/a — piece status |
| D-56 | Sodium Systemic Issues intro text fix. | n/a — piece status |
| D-57 | Share block placement: Overview/Tab 1, universal. | SHARE |
| D-58 | Hub card roster update (Sodium activated, HBS removed). | n/a — piece status |
| D-59 | Hub stat block styling fix (88px, opacity rules). | CARD |
| D-60 | "Obsidian Futures" body labels stay in Naming series. | HERO |
| D-61 | Active tab styling: navy fill, white text. | TABS |
| D-62 | Audit violations batch fix (6 items). | n/a — fix log |
| D-63 | Naming series: 3 parts, A3 card format, title convention. | n/a — piece-specific, superseded by D-90's Part 4–7 expansion |
| D-64 | Hub card content constraints: 40/80 char, 2–3 tags. | CARD |
| D-65 | Hub card category tags: 10-item master index, Claude proposes/AMA confirms. | LANE |
| D-66 | Card height 280px; Shell B caps at 4 items. | CARD |
| D-67 | Four card shells: A/B/C/D. | CARD |
| D-68 | Carousel component added to platform CSS. | GALL |
| D-69 | Naming Part 2 live — supersedes D-46. | n/a — piece status |
| D-70 | Naming series index must exist before Part 3 ships. | n/a — piece-specific |
| D-71 | No Sources tab for Naming Parts 3–7. | SRC |
| D-72 | OF card-native exception: 380×660 for Crowning Achievements + BTU. | CARD — deferred by D-108 |
| D-73 | `.ai-inner` retired; padding-only prose containers. | PROSE — retired/generalized by D-100 |
| D-74 | Naming Sources tab exemption — footer methodology is the standard. | SRC |
| D-75 | Copaganda visual suite exception (V1–V5, not 300×280 cards). | CARD |
| D-76 | Share cards: pre-rendered PNGs as `<img>`, not HTML divs. | SHARE |
| D-77 | American diet evolution piece — pre-brief status, not on calendar. | n/a — piece status |
| D-78 | 9 deferred chart components approved and moved to active. | CHART |
| D-79 | Display type texture: Option C stroke outline, OF card-native only. | CARD |
| D-80 | Naming hub architecture: single series card. | LANE |
| D-81 | Hub roster cleanup: HBS removed, Gay Uncles flipped. | n/a — piece status |
| D-82 | Gay Uncles hub flip sequencing, option (a). | n/a — piece status; reaffirmed by D-94 ("D-82 stands") |
| D-83 | Where's Beyoncé slug renamed to `/wheres-beyonce/`. | n/a — piece-specific rename |
| D-84 | Sodium OG/Twitter meta variant — pending. | n/a — piece status |
| D-85 | Upload-queue protocol. | BUILD |
| D-86 | Voice harvest protocol. | COPY |
| D-87 | Essay is not a ship gate. | SHIP |
| D-88 | `piece-template.html` is canonical; `bbl-` retired; accordions retired forward; Naming rebuild queued. | BUILD |
| D-89 | A path rename is not a build. | BUILD |
| D-90 | Naming Parts 4–7 build compliant to the D-88 standard. | BUILD |
| D-91 | Card-format law: 380×660, 5-row max. | CARD — dimension portion reversed by D-99; row-cap portion retained |
| D-92 | Doc authority and numbering: log outranks rules file. | BUILD — superseded by D-95's positional-authority model |
| D-93 | Gallery is the platform carousel. Fixed size, no content sizing. One lane per piece. | GALL |
| D-94 | Shell before voice: structure is the build gate, copy is the ship gate. Placeholders never block a build; nothing ships with a visible one. D-82 stands. | SHIP |
| D-95 | Positional authority: a file is canonical because it is the only file at its path. No file declares its own rank. | BUILD (Appendix B — governance principle, not a piece-level check) |
| D-96 | AMENDED. Gay Uncles is dark lane. Cards 300×280, not 380×660 — dimension half reversed by D-99. | CARD |
| D-97 | Gay Uncles ships 7 tabs. Hold Your Ground is cut. | TABS |
| D-98 | No sub-tabs. Audience segmentation lives in the card eyebrow. | TABS |
| D-99 | Cards are 300×280 by default. Dimension exceptions apply only to pieces shipped before July 2026. | CARD |
| D-100 | No prose width cap anywhere. Width/height caps apply to cards only. Retires D-73's Parts 0–2 grandfather clause. | PROSE |
| D-101 | Tab count is what the piece needs. Under 7 preferred; 7+ needs logged AMA confirmation. Binds July 2026 forward. | TABS |
| D-102 | Tab order: *n*=Sources, *n*−1=Share to Social, *n*−2=Take Action, position 1=Overview. "Spread the Word" retired as a name. | TABS |
| D-103 | Action tab named "Take Action" for any piece not live as of 2026-07-01. | TABS |
| D-104 | Overview share block: 2 destinations, X and Copy Link. Retires the 6-destination rule. | SHARE |
| D-105 | Tab switching: bare id in `data-target` + matching `aria-controls`, no hash. Sodium and Naming grandfathered. | TABS |
| D-106 | A read-only session writes exactly two things: one report file, one LEDGER line. Nothing else. | SHIP |
| D-107 | A turn with a question has no writes. A turn with writes has no questions. | BUILD (session rule — also stated in CLAUDE.md) |
| D-108 | D-72's 380×660 exception for Crowning Achievements/BTU is deferred, not retired. Decided when Crowning Achievements builds. | CARD |

---

# Appendix B — Guidance (non-enforceable)

Rules kept for record and judgment calls, with no condition a script can evaluate. Grouped by section.

**LANE**
- New tags require Type 1 (editorial) session approval before use. (AMR §11)

**SKEL**
- `alterrell-interactive.css` is never rebuilt from memory; extend, don't duplicate. Judgment call on what counts as "duplication" vs. legitimate piece-local scoping. (AMR §9)

**HERO**
- Subhead is full editorial width and never visually clipped — verify in browser. (AMR §5)
- Headline renders on one line at 1280px; if a title is too long, natural wrap is acceptable, shrinking the font is not — this is a visual judgment, not a source check. (AMR §6, DC)

**JRNY**
- Migration of Concert Tax's legacy `.ct-journey` to `.ai-journey-compact` remains an open, unscheduled task. (DDL §8 open items)

**TABS**
- Tabs 2 through *n*−3 are named per the piece's brief — content-dependent, not a platform check. (AMR §5)

**PROSE**
- Prose width consistency across tabs is a visual verification step, though PROSE-01's structural check (no max-width present) gives it a reliable proxy. (DC Zone 6)
- "No component with more empty space than content" — a design judgment, not a measurable ceiling beyond DP's P-16/P-06 exception logic. (DDL SPACING, DP)

**GALL**
- n/a — GALL's rules are fully covered by main-body checks.

**CARD**
- Editorial line content quality (is it actually "the argument in one sentence") is an AMA voice judgment; only its *presence* is checkable (CARD-07). (AMR §8)
- Comp-tag content correctness is a judgment call; only its presence/font-size is checkable. (AMR §8)

**CHART**
- Editorial line slots in chart components are always AMA voice; Claude Code never fills them. Presence of an unfilled placeholder is a COPY-05/SHIP-01 check; authorship quality is not machine-checkable. (CLS rule 3)
- "No boxes on mobile" — whitespace and type scale should do the container work; a design judgment more than a hard rule. (CLS rule 2)
- Read `CHART-LIBRARY-REFERENCE.html` before approximating a chart component from memory. Process discipline, not a file-level check. (AMR §8)

**SHARE**
- n/a — SHARE's rules are fully covered by main-body checks.

**SRC**
- No unverified data citation ships without an `<!-- UNVERIFIED -->` comment — requires fact-checking judgment the Bible cannot automate. (AMR §10, DC)

**FOOT**
- n/a — FOOT's rule is fully covered by the main-body check.

**COPY**
- All AI-drafted copy is flagged for an AMA voice pass before deploy — a provenance/process fact, not stored in the shipped file. (AMR §10, DC)
- Avoid "it is worth noting," fragments-as-complete-thoughts, and choppy declarative sequences. Partially checkable by phrase search; the rhythm judgment underneath is not. (DDL VOICE RULES)

**A11Y**
- n/a — A11Y's rules are fully covered by main-body checks (with A11Y-02 noted as requiring computed, not just declared, styles).

**BUILD**
- D-95, positional authority: a file is canonical because it's the only file at its path; no file declares its own rank. This is the governance principle behind this Bible's own header line — not a condition to run against piece HTML. (D-95)
- The pre-build mockup gate: present a section-by-section mockup, AMA confirms before code is written. A session-level process step, not a file-content check. (AMR §4, DC)
- Template compliance is a pre-build gate, not a post-hoc audit — a process ordering rule. (DDL D-88)
- Version snapshot before rebuilds: `cp [piece]/index.html _data/archive/[piece]-index-[date].html`. Process step; presence of prior snapshots is retrospectively checkable but not a pass/fail condition on the piece itself. (DDL P-3)
- Run `_data/platform/self-check.sh` before build and before any `index.new.html → index.html` swap. Process step; the script's correct current path is `_data/platform/self-check.sh` (see Appendix C, C-j, for the dangling path reference in the retired precheck doc). (piece-template.html header; PRE, retired)

**SHIP**
- Run every check in this Bible before confirming a build complete; report PASS/FAIL/FLAG for each; do not push until AMA confirms. The meta-process wrapping every other check here — not itself a single condition. (AMR §10, DC)
- Every session ends with an explicit "files to upload" list when it produces files not yet committed. (DDL D-85, CARD-INVENTORY.md rule)
- Every session appends one line to `alterrell-hq/LEDGER.md` under the current week, then commits and pushes `alterrell-hq`. Session-level protocol, stated in full in `CLAUDE.md`, not a piece-file condition. (CLAUDE.md LEDGER clause)

---

# Appendix C — Conflict Register (from Phase 1), with Resolutions

| # | Conflict | Resolution |
|---|---|---|
| C-a | Card dimensions disagreed across AMR (300×280 teal-lane / 380×660 OF-card-native-only), DC (mirrors AMR), DDL D-72 (380×660 scoped to Crowning Achievements + BTU), DDL D-91 (380×660 stated as a blanket rule for "carousel cards," dropping the OF-only scope), CLS (silent), and CSS (`--carousel-card-w/h: 300px/280px` only, no 380×660 token anywhere). | Resolved by D-99 + D-108: 300×280 is the default for every piece; the 380×660 exception is narrowed back to Crowning Achievements/BTU specifically and held *deferred* (not active) until Crowning Achievements builds. D-91's blanket phrasing was imprecise, not a deliberate supersession — its row-cap clause (5 rows, N of N) survives as CARD-05. |
| C-b | Tab count/order disagreed: AMR/DC/templates lock Overview → [2–4] → Spread the Word → Sources (max 6, 7 w/ exception). DDL T-2/T-7/T-8 describe a different, never-updated model: Overview → [2–4] → Take Action(5) → Spread the Word(6), with no Sources tab in the model at all. | Resolved by D-101, D-102, D-103: tab count is need-based (prefer <7, 7+ logged); trailing order is fixed at Take Action → Share to Social → Sources; "Spread the Word" is retired as a name for pieces built forward. DDL T-2/T-7/T-8 are superseded going forward; pre-existing pieces (Concert Tax's literal "Take Action" tab) are read as historical, not as an active alternate model. |
| C-c | The two `piece-template.html` files diverge structurally: root (PT1, D-88-era, fully worked carousel/share markup, padding-only prose comment) vs. `_data/templates/piece-template.html` (PT2, pre-D-73/D-68, placeholder-only drop-in comments, stale 860px-max-width comment, `../../` relative CSS path). | Resolved in step 5 of this session: `_data/templates/piece-template.html` is retired to `old/piece-template-stub.html`. The root `piece-template.html` is the sole, explicitly canonical template (CLAUDE.md read-list item 2). |
| C-d | `CHART-LIBRARY-SPEC.md`'s header status line ("SPEC ONLY — no build until AMA confirms session type," locked May 7, 2026) was contradicted by the existence of a fully built `CHART-LIBRARY-REFERENCE.html` (69,749 bytes) from June 9, 2026 — the same date as DDL D-78's chart-component activation. | The chart spec's "SPEC ONLY, no build" status was false starting 2026-06-09. Recorded as fact; `CHART-LIBRARY-SPEC.md` is retired into this Bible's CHART section, and `CHART-LIBRARY-REFERENCE.html` remains the live build artifact (CLAUDE.md read-list item 5). |
| C-e | `TAG-AND-SHARE-BUILD-SPEC.md`'s Feature 2 specs live HTML `.share-card` divs with an html2canvas "Copy Image" button — the opposite delivery model from DDL D-76/D-77 (pre-rendered PNGs as `<img>` tags, explicitly "not as HTML divs"), which postdate TSS by a month and are the version `piece-template.html` implements. | The tag-and-share spec's live-div share cards are superseded by D-76/D-77's pre-rendered-PNG model. SHARE-04 in this Bible states the PNG/`<img>` rule as the only enforced one; TSS is retired with no live-div variant carried forward. |
| C-f | Prose-width max-widths existed inconsistently: `.ai-inner` (platform CSS) carries none (compliant with D-73); Naming Parts 0–3 each define a piece-local `.win-inner { max-width: 860px }` — the exact figure D-73 rejected. D-73's own text grandfathered Parts 0–2 by name but not Part 3, leaving Part 3's 860px cap unauthorized by any document. | Resolved by D-100: no prose width cap anywhere, on any piece, and D-73's Parts 0–2 grandfather clause is itself retired. Naming Parts 0–3's `.win-inner` 860px caps are now uniformly non-compliant (PROSE-01) and queued for removal at each part's D-88/D-90 rebuild — no part is grandfathered any longer. |
| C-g | Deploy Checklist Zone 3 said "Headline: Spectral 800," contradicting AMR §6's resolved ruling (700) and the live CSS (`font-weight: 700`). | The resolved value is 700 (HERO-02). Deploy Checklist's stale "800" does not carry forward — `DEPLOY-CHECKLIST.md` is retired into this Bible with the corrected value. |
| C-h | AMR §12's enforcement table cites "D-76 = Copaganda visual suite" and "D-77 = pre-rendered PNG share cards" — off by one against DDL's own numbering, where DDL Section 7 logs D-75 = Copaganda and D-76 = PNG share cards. | The log's numbers are authoritative (D-92's log-outranks-rules principle, itself superseded in spirit by D-95, still settles this specific citation dispute since DDL is the original source of both numbers). Appendix A above uses D-75 = Copaganda, D-76 = PNG share cards. |
| C-i | `AI-DECISIONS.md`'s own header asked for D-80-series DDL entries to be reconciled *into* `AI-DECISIONS.md` at the next sweep; instead DDL D-88 folded `AI-DECISIONS.md`'s sole entry (AI-D-1) *into DDL* — the opposite direction. | Moot as of this session: `AI-DECISIONS.md` was already superseded by this consolidation; its one entry (AI-D-1 / D-88) is captured in Appendix A. No further reconciliation needed — both source files retire together. |
| C-j | `INTERACTIVE-BUILD-PRECHECK.md` (retired, in `old/`) names its proposed self-check script's home as `alterrell-hq/audits/self-check.sh` — that directory is empty. | The live script is at `_data/platform/self-check.sh`. The retired precheck doc's path reference is dangling and stays uncorrected in `old/` as a historical artifact; this Bible records the correct current path here. |
| C-k | AMR §3's Type 2 pre-read list names `PLATFORM-BRIEF.md`, a file that does not exist anywhere in the repo — AMR's own header (line 11) says it already consolidated and superseded a file by that description. | `PLATFORM-BRIEF.md` does not exist and is removed from every pre-read list. CLAUDE.md's rewritten read list (step 6, this session) does not name it. |
| C-l | `alterrell-charts.css` is referenced as a planned file in AMR, DDL, and CLS (3+ documents) but has never been created. | Recorded as an open, unscheduled build item. Chart styles stay piece-local (in each piece's own `<style>` block) until the file is created (CHART-08). |

---

*End of Bible. This file governs. Sections cite sources for history, not for authority.*
