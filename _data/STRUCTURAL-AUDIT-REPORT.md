# STRUCTURAL AUDIT REPORT
# Alterrell Interactive — Repo vs. Briefs
# Generated: May 15, 2026
# Session type: Audit only — no files modified except this one.

---

## SCOPE

Files read:
- All .md files in `_data/`
- `alterrell-interactive.css`
- `index.html` (hub)
- `what-in-a-name/index.html`
- `fast-food-sodium/index.html`
- `big-black-love/index.html`
- `concert-tax/index.html` (rebuilt May 14)

---

## SECTION A — FILE INVENTORY

All .md files in `_data/`. Last-modified dates from `git log`.

| File | Last Git Commit | Governs | Duplicate/Overlap |
|---|---|---|---|
| BRAND-BRIEF.md | 2026-05-07 | Platform design — color, type, spacing, components | Overlaps with DESIGN-DECISION-LOG on nearly all decisions. DDL is more current. |
| DEPLOY-CHECKLIST.md | 2026-05-05 | Build-time rules, structure order, pre-commit gate | Conflicts with DESIGN-DECISION-LOG on journey block count |
| PLATFORM-BRIEF.md | 2026-05-05 | Roles (AMA / ChatGPT / Claude), workflow, Claude limits | Duplicates some BRAND-BRIEF rules |
| PROJECT-STATUS.md | 2026-05-05 | Production tracking per piece | Stale — Concert Tax and Big Black Love statuses don't match reality |
| CONTENT-TAXONOMY.md | 2026-05-07 | Tag system, content modes, tag-to-piece assignments | Accurate |
| DESIGN-DECISION-LOG.md | 2026-05-14 | Cumulative platform + piece decisions — most current source | Partially overlaps every other doc |
| SESSION-PROMPTS.md | 2026-05-05 | Session type templates and pre-build check | Accurate |
| VOICE-GUIDE.md | 2026-05-05 | AMA writing voice — only used in editorial sessions | Accurate |
| ALTERRELL-CLAUDE-DESIGN-HANDOFF.md | 2026-05-07 | Card component system — tokens, components, locked rules | Overlaps CHART-LIBRARY-SPEC on component definitions |
| CHART-LIBRARY-SPEC.md | 2026-05-07 | Chart component spec (alterrell-charts.css) | Overlaps ALTERRELL-CLAUDE-DESIGN-HANDOFF |
| TAG-AND-SHARE-BUILD-SPEC.md | 2026-05-07 | Tag system + shareable assets tab build spec | Not yet built — still relevant |
| CONCERT-TAX-BRIEF.md | 2026-04-16 | Concert Tax piece — April 16 state | **STALE.** Wrong lane, wrong tabs, wrong interactive target. Superseded by DDL + FACTPACK. |
| CONCERT-TAX-FACTPACK.md | 2026-05-05 | Concert Tax verified data | Accurate for data |
| concert-tax-card-workbench.html | 2026-05-14 | Approved card HTML for Concert Tax | Not a .md, but source of truth for in-piece cards |
| concert-tax-COPY-DRAFT-2026-04-27.md | 2026-04-27 | Editorial copy draft | Pre-dates tab structure finalization — check before voice pass |
| NAMING-SERIES-BRIEF.md | 2026-04-16 | Naming series argument + data infrastructure | Lane says "Obsidian Futures" — now non-compliant with May 6 rebrand |
| NAMING-SERIES-FACTPACK.md | 2026-05-08 | Naming series data | Accurate |
| CONGRESS-BRIEF.md | 2026-04-16 | Congress Part 1A — architecture + locked decisions | Accurate for scope; timing still valid (Sept 2026) |
| CONGRESS-1A-FACTPACK.md | 2026-05-08 | Congress Part 1A data | Accurate |
| HBS-BRIEF.md | 2026-04-16 | HBS Digital Museum — architecture | Timing alert: June 2026 target. If missed, piece loses impact. |
| HBS-FACTPACK.md | 2026-05-08 | HBS data | Accurate |
| WHERE-ARE-THEY-BRIEF.md | 2026-04-16 | Pointer to WHERES-BEYONCE-FACTPACK | Accurate pointer only |
| WHERES-BEYONCE-FACTPACK.md | 2026-05-07 | Where's Beyoncé? data + decisions | Accurate — most recent beyoncé file |
| BLACK-SITCOMS-BRIEF.md | 2026-04-16 | Black Sitcoms piece — concept stage | Accurate for concept stage |
| FRAMESHIFT-BRIEF.md | 2026-04-16 | FrameShift health tool — MVP + validation plan | Accurate |
| FRAMESHIFT-FACTPACK.md | 2026-05-08 | FrameShift data | Accurate |
| BLACK-GAY-GEOGRAPHY-BRIEF.md | 2026-04-26 | Advice From Your Thick Gay Uncles — tab map | Lane says "Obsidian Futures" — now non-compliant with May 6 rebrand |
| GAY-UNCLES-FACTPACK.md | 2026-05-08 | Gay Uncles data | Accurate |
| SODIUM-FACTPACK.md | 2026-05-08 | Sodium data | Accurate |
| FOREVER-LOVED-FACTPACK.md | 2026-05-08 | Forever Loved data | Accurate |
| COPAGANDA-PIECE-BRIEF.md | 2026-04-25 | Copaganda — full research brief | Accurate; listed as PARKED in PROJECT-STATUS |

**Non-.md files in `_data/` worth noting:**
- `alterrell_platform_decision_tree.html` — visual decision tree, unclear how current
- `CHART-LIBRARY-REFERENCE.html` — canonical visual reference for chart components; authoritative per BRAND-BRIEF
- `concert-tax-card-workbench.html` — source of truth for Concert Tax card HTML
- `where-are-they.html` — appears to be a build artifact or prototype
- `sodium index.html` — legacy sodium file (note: space in filename); superseded by `/fast-food-sodium/index.html`
- `config.js` — platform config, linked from naming and sodium pieces
- `naming/` subdirectory — raw SSA data files + naming analysis references

---

## SECTION B — PROJECT-STATUS.md ACCURACY

### Hub
**STATUS FILE SAYS:** LIVE
**REALITY:** LIVE ✓ — `index.html` exists and renders.

---

### Naming Series — Part 1
**STATUS FILE SAYS:** LIVE
**REALITY:** LIVE ✓ — `what-in-a-name/index.html` exists. Hub links to it with `data-status="live"`.

### Naming Series — Part 0
**STATUS FILE SAYS:** BUILT
**REALITY:** BUILT ✓ — `what-in-a-name/part-0/index.html` exists.
**Gap:** Hub does not directly link to Part 0. Hub card links to `/what-in-a-name/` only. Internal linking from Part 1 presumably handles navigation.

### Naming Series — Part 2
**STATUS FILE SAYS:** BUILT
**REALITY:** BUILT ✓ — `what-in-a-name/part-2/index.html` exists.
**Gap:** Same as Part 0 — hub does not directly surface it.

---

### Concert Tax
**STATUS FILE SAYS:** IN PROGRESS — Blocker: visual review + copy finalization
**REALITY:** Rebuilt May 14, 2026. Six tabs, all 14 cards transferred. Hub card updated to `data-lane="ai"` and correct title. Voice pass placeholders (`[AMA EDITORIAL LINE]`, `[AMA VOICE PASS]`) remain — 11 total.
**Recommended status update:** `IN PROGRESS — Voice pass remaining (11 placeholders). Do not mark LIVE until AMA completes editorial lines and voice pass paragraphs.`

---

### Big Black Love
**STATUS FILE SAYS:** IN PROGRESS — Blocker: AMA rewrite of tabs
**REALITY:** IN PROGRESS ✓ — `big-black-love/index.html` exists with 6 tabs. Content is partially placeholder.
**Gap:** Hub card for "Advice From Your Thick Gay Uncles" shows `data-status="soon"` with `[AMA TO CONFIRM]` placeholder stat block. The piece folder exists but hub does not link to it. Status is consistent with blocking state.

---

### Sodium
**STATUS FILE SAYS:** PARKED
**REALITY:** `fast-food-sodium/index.html` exists with full content (7 tabs, all data, live Ko-fi). Hub card shows `data-status="soon"` — piece is not linked as active from hub. The piece is functionally complete but intentionally parked.
**Flag:** A fully-built piece with `data-status="soon"` on the hub is easily mistaken for "not built." Consider using a dedicated status like `READY — awaiting hub activation` in PROJECT-STATUS rather than "PARKED."
**Note:** There is also a `sodium index.html` file directly in `_data/` (with a space in the filename). Unclear if this is a legacy version or a draft. Requires AMA confirmation — do not delete without checking.

---

### Copaganda
**STATUS FILE SAYS:** PARKED
**REALITY:** No folder exists. Only `COPAGANDA-PIECE-BRIEF.md` in `_data/`. Consistent with PARKED status.

---

### Congress
**STATUS FILE SAYS:** PARKED
**REALITY:** No folder exists. Only `CONGRESS-BRIEF.md` and `CONGRESS-1A-FACTPACK.md` in `_data/`. Consistent with PARKED status.

---

### Pieces in repo NOT listed in PROJECT-STATUS.md
None. All folders accounted for.

### Hub cards for pieces without folders
The hub has "Coming Soon" cards for: What's in a Name Parts 1B/1C, Congressional Selfishness, Who Do We Call During a Disaster, Harvard Business School & Race, Black Music Royalty, Where's Beyoncé?, Advice From Your Thick Gay Uncles. None have corresponding piece folders — this is expected for unbuilt pieces.

---

## SECTION C — BRIEF-TO-REPO STRUCTURAL CHECKS

### What's in a Name (Part 1) — `what-in-a-name/index.html`

| Check | Brief says | HTML has | Match? |
|---|---|---|---|
| Tab count | Not specified in brief | 5 tabs | — |
| Tab names | Not listed in brief | Overview · The System · Queen Latifah · Whitney & Mariah · What the Data Shows | — |
| URL slug | `/what-in-a-name/` | `/what-in-a-name/` | ✓ |
| Lane/accent | "Obsidian Futures" (April brief) | Dark bg + gold (#E8B923) active tabs | ✓ for brief; ✗ per May 6 rebrand decision |
| Journey block | — | YES — custom `win-journey`, 4 items: YouTube, Substack, All Pieces, Ko-fi | — |
| Ko-fi block | — | YES — in journey + footer | ✓ |
| Share block | — | YES | ✓ |
| OG tags | — | YES — all 4 (title, description, image, url) | ✓ |
| Breadcrumb | — | YES — line 777 | ✓ |

**Structure order issue:** `<nav class="ai-nav">` appears at line 767, `<div class="ai-breadcrumb">` at line 777. Deploy checklist requires breadcrumb before nav. These two are both `position: fixed` so visual rendering is identical, but DOM order does not match the checklist.

**Journey block item count:** 4 items (YouTube, Substack, All Pieces, Ko-fi). Deploy checklist says "Pieces: 3 items only." The "All Pieces" item replaces the Support/Ko-fi pattern — Ko-fi is a separate fourth item. This is a checklist deviation.

---

### Fast Food's Hidden Sodium Tax — `fast-food-sodium/index.html`

| Check | Brief says | HTML has | Match? |
|---|---|---|---|
| Tab count | No brief file (factpack only) | 7 tabs | — |
| Tab names | — | Overview · The System · Systemic Issues · Compare Your Order · Data · By Franchise · Sources | — |
| URL slug | — | `/fast-food-sodium/` | — |
| Lane/accent | — | Teal accent, dark section hero | ✓ |
| Journey block | — | YES — custom `sodium-journey`, 3 items: Watch, Read, Explore (internal anchor) | ✓ count |
| Ko-fi block | — | YES — in footer and share section | ✓ |
| Share block | — | YES | ✓ |
| OG tags | — | YES — all 4 | ✓ |
| Breadcrumb | — | YES — line 808 | ✓ |

**Structure order issue:** `<nav class="ai-nav">` at line 798, `<div class="ai-breadcrumb">` at line 808. Same DOM-order deviation as naming piece.

**Journey "Explore" item:** The third journey item links to `#compare` (an anchor within the same page) rather than Ko-fi. Checklist says pieces have Watch / Read / Support. Sodium's third item is "Explore" (internal link). Deviation from checklist; Ko-fi appears in other locations.

**No brief file:** No `SODIUM-BRIEF.md` exists — only `SODIUM-FACTPACK.md`. If a brief was written, it was not committed.

---

### Big Black Love (Advice From Your Thick Gay Uncles) — `big-black-love/index.html`

| Check | Brief says | HTML has | Match? |
|---|---|---|---|
| Tab count | 6 (Overview, My Story, The Poll, The Data, Hold Your Ground, Your Move) | 6 tabs | ✓ |
| Tab names | Overview · My Story · The Poll · The Data · Hold Your Ground · Your Move | Overview · My Story · The Poll · The Data · Hold Your Ground · Your Move | ✓ |
| URL slug | Not in brief | `/big-black-love/` | — |
| Lane/accent | "Obsidian Futures" (April 26 brief) | Dark bg + gold (#E8B923) active tabs | ✓ for brief; ✗ per May 6 rebrand decision |
| Journey block | — | YES — 3 items: YouTube, Substack, Ko-fi | ✓ |
| Ko-fi block | — | YES | ✓ |
| Share block | — | YES | ✓ |
| OG tags | — | YES — all 4 | ✓ |
| Breadcrumb | — | YES — line 477 | ✓ |

**Structure order:** `<nav class="ai-nav">` at line 468, `<div class="ai-breadcrumb">` at line 477. Same DOM-order deviation.

**Hub card status:** Hub card for this piece has `data-status="soon"` and `[AMA TO CONFIRM]` placeholder stat numbers. Piece is partially complete per PROJECT-STATUS blocker.

---

### Concert Tax (rebuilt May 14) — `concert-tax/index.html`

| Check | Brief says | HTML has | Match? |
|---|---|---|---|
| Tab count | CONCERT-TAX-BRIEF: 5 tabs (stale) | 6 tabs | ✗ brief; ✓ DESIGN-DECISION-LOG |
| Tab names | BRIEF: Overview · The Double Standard · The Chart · Genre by Genre · Sources | Overview · The Data · The Double Standard · History · Take Action · Spread the Word | ✗ brief; ✓ DDL |
| URL slug | `/concert-tax/` | `/concert-tax/` | ✓ |
| Lane/accent | BRIEF: Obsidian Futures / gold | Teal/paper (Alterrell Interactive) | ✗ brief; ✓ DDL (May 14 confirmed) |
| Journey block | DDL: 4 items / Checklist: 3 items | 3 items: Watch, Read, Support (Ko-fi) | ✓ checklist |
| Ko-fi block | BRAND-BRIEF: required | YES — journey block + Spread the Word tab | ✓ |
| Share block | — | YES — Spread the Word tab (6 destinations) | ✓ |
| OG tags | — | YES — all 4 | ✓ |
| Breadcrumb | — | YES — line 315 | ✓ |

**Structure order:** Breadcrumb at line 315 → nav at line 322 → hero at line 332 → journey at line 347 → tabs at line 380 → sections → footer → scripts. **CORRECT** — matches deploy checklist order.

**Tab names in CONCERT-TAX-BRIEF are stale.** The brief was written April 16, 2026 before the tab structure was finalized. The DESIGN-DECISION-LOG (May 14) is authoritative.

**11 voice pass placeholders remain:** 5 `[AMA EDITORIAL LINE]` in cards (Cards 5, 9, 10, 12, 18) and 6 `[AMA VOICE PASS]` paragraph blocks (one per tab). This is expected — piece is IN PROGRESS.

---

## SECTION D — DESIGN SYSTEM COMPLIANCE

### What's in a Name — `what-in-a-name/index.html`
1. **Background:** `#0a0a12` (dark). BRAND-BRIEF (May 6) says "All content backgrounds: White `#FFFFFF`. Paper retired." Non-compliant per current brief — but this piece was built before the May 6 decision. Retrofit is a separate Type 2 session.
2. **Fonts loaded:** Spectral 700/italic, DM Serif Display italic, DM Sans 400/500/600, DM Mono 400/500. Missing: DM Sans 800 (needed for tab labels per brand brief). Weight 600 loaded instead of 800 in some pieces.
3. **Off-spec inline colors:** `#0a0a12`, `#111118`, `#E8B923`, `rgba(232,185,35,*)`, `#3d2480` (indigo — not in any brief), `rgba(248,246,241,*)`. All are Obsidian Futures tokens not in the master CSS token list. Acceptable as piece-local overrides.
4. **CSS linked:** YES — `../alterrell-interactive.css` ✓. Does not modify master CSS ✓.
5. **Structure order:** Nav before breadcrumb — does not match deploy checklist (breadcrumb should be first).

### Fast Food's Hidden Sodium Tax — `fast-food-sodium/index.html`
1. **Background:** Dark section for hero (`var(--dark-section)` = `#16141f`), white/paper for content sections. Compliant with "dark bands only where content earns it" rule ✓.
2. **Fonts loaded:** Same as naming piece — DM Sans 600 loaded, 800 not loaded. Same gap.
3. **Off-spec inline colors:** `rgba(255,255,255,0.08)` for borders — reasonable dark-on-dark treatment. Multiple `rgba(255,255,255,*)` for dark section text — acceptable.
4. **CSS linked:** YES ✓. Does not modify master CSS ✓.
5. **Structure order:** Nav before breadcrumb — same deviation.

### Big Black Love — `big-black-love/index.html`
1. **Background:** `#0a0a12` (dark). Same non-compliance as naming piece per May 6 brief.
2. **Fonts loaded:** Same four fonts, same weight gap (no DM Sans 800).
3. **Off-spec inline colors:** `#0a0a12`, `#111118`, `#E8B923`, `#0d0b18`, `rgba(248,246,241,*)` — all Obsidian Futures tokens.
4. **CSS linked:** YES ✓. Does not modify master CSS ✓.
5. **Structure order:** Nav before breadcrumb — same deviation.

### Concert Tax (rebuilt May 14) — `concert-tax/index.html`
1. **Background:** Hero uses `var(--paper)` = `#f8f6f1`. Content areas white. BRAND-BRIEF says paper retired, but DESIGN-DECISION-LOG explicitly says "teal/paper rebuild." No conflict with intent — but creates tension with the BRAND-BRIEF rule.
2. **Fonts loaded:** Spectral 700/italic, DM Serif Display italic, DM Sans 400/500/600/800, DM Mono 400/500. **Best font load of all pieces** — DM Sans 800 included ✓.
3. **Off-spec colors:** None. Uses only master CSS tokens and workbench card tokens (`--surface`, `--white`, etc.) defined locally ✓.
4. **CSS linked:** YES ✓. Does not modify master CSS ✓.
5. **Structure order:** Correct — breadcrumb → nav → hero → journey → tabs → sections → footer → scripts ✓.

---

## SECTION E — CSS AUDIT (`alterrell-interactive.css`)

### Colors not in BRAND-BRIEF
The following hardcoded values appear in the master CSS but have no token in BRAND-BRIEF:

| Value | Where used | Impact |
|---|---|---|
| `#1a1a1a` | Breadcrumb background | Reasonable dark variant; not blocking |
| `#1e1e1e` | Nav bottom border | Minor; not blocking |
| `#9896b0` | Dark section body text, pull quote | Not in any brief; used widely in dark-section contexts |
| `#504d68` | Footer wordmark, footer source stamps | Not in brief; purple-grey footer tone |
| `#6e6a88` | Footer text, methodology | Not in brief |
| `#2a2838` | Footer border, footer journey divider | Not in brief |
| `#1e1c2a` | Footer journey item background | Not in brief |
| `#252333` | Footer journey item hover | Not in brief |
| `#9a6b00` | OF-piece journey label on white | Dark gold fallback for contrast; reasonable but undocumented |
| `--dark-section: #16141f` | Dark section backgrounds | Brief has `#0F172A` (navy) and pieces use `#0a0a12` (OF dark) — this is a third dark value |

**None of these are blocking issues.** They are footer, dark-section, and breadcrumb utility colors not covered by the brand brief. However, they represent undocumented design decisions.

### Font families
Four fonts only: Spectral, DM Serif Display, DM Sans, DM Mono. No extra fonts ✓.

### Hub card structure in CSS
- `.hub-card-stat-block`: height 88px, `#16141f` bg — matches DESIGN-DECISION-LOG ✓
- Hub card left border: `data-lane="ai"` → teal `#0a7c72`; `data-lane="of"` → gold `#E8B923`
- **CONFLICT:** BRAND-BRIEF and DESIGN-DECISION-LOG both specify electric blue `#2563EB` for active hub card left borders. CSS uses lane-based teal/gold. This is a meaningful disagreement — see Section F, item 4.

### Nav background
- CSS: `background: var(--ink)` = `#111111` (dark)
- BRAND-BRIEF: "White background" for nav
- This conflict has existed since the first build — the nav has always been dark. The BRAND-BRIEF's "white background" rule is either aspirational or an error.

---

## SECTION F — CROSS-DOCUMENT CONFLICTS

Each conflict is flagged with which source is likely more current and why.

---

**Conflict 1: Nav background color**
- Decision: What color is the nav bar?
- BRAND-BRIEF (May 6) says: "White background"
- CSS (all dates) says: `background: var(--ink)` = `#111111` (dark)
- Every piece HTML says: Dark nav (either inheriting from CSS or overriding to darker)
- **More current:** The CSS and all rendered pieces — the nav has always been dark. The BRAND-BRIEF may have been written describing a planned redesign that was never built. Do not update CSS without AMA decision.

---

**Conflict 2: Spectral weight**
- Decision: What weight is Spectral for headlines?
- BRAND-BRIEF (May 6) says: "Spectral 800"
- DESIGN-DECISION-LOG (May 14) says: "Spectral 700 (serif). Full opacity always."
- CSS says: Loads Spectral 700. All piece hero headlines use weight 700.
- ALTERRELL-CLAUDE-DESIGN-HANDOFF (May 7) says: "Spectral 800" in the token table but also loads `Spectral:wght@800` in the recommended import
- **More current:** DESIGN-DECISION-LOG (May 14) and actual CSS. BRAND-BRIEF and DESIGN-HANDOFF are wrong on this point. Update BRAND-BRIEF to say 700.

---

**Conflict 3: Paper background retirement**
- Decision: Is `#f8f6f1` (paper) permitted on piece pages?
- BRAND-BRIEF (May 6) says: "Paper `#f8f6f1` is retired from piece page backgrounds"
- DESIGN-DECISION-LOG (May 14) says: "Concert Tax rebuilds in teal/paper from scratch"
- CSS body default says: `background: var(--paper)` = `#f8f6f1`
- Concert Tax rebuild (May 14) uses paper for hero background
- **More current:** DESIGN-DECISION-LOG. The BRAND-BRIEF's retirement appears to apply to pieces using Obsidian Futures dark system, not to teal-lane pieces where paper is part of the "teal/paper" identity. The CSS body default has always been paper. Needs explicit AMA clarification in BRAND-BRIEF.

---

**Conflict 4: Hub card active left border color**
- Decision: What color is the left border on active hub cards?
- BRAND-BRIEF (May 6) says: "Left border: 3px solid electric blue `#2563EB`"
- TAG-AND-SHARE-BUILD-SPEC (May 6) says: "Hub card left border color: electric blue `#2563EB` for all active pieces"
- DESIGN-DECISION-LOG (May 14) says: "Left border: 3px solid electric blue #2563EB (signals live/active)"
- CSS says: `data-lane="ai"` → teal `#0a7c72`; `data-lane="of"` → gold `#E8B923`
- **More current on intent:** BRAND-BRIEF, TAG-AND-SHARE-BUILD-SPEC, and DESIGN-DECISION-LOG all agree electric blue. The CSS is out of sync. **This is an actionable discrepancy** — the CSS needs to be updated in a Type 3 session to use electric blue for active cards.

---

**Conflict 5: Concert Tax lane and tab structure**
- Decision: What lane and tabs does Concert Tax use?
- CONCERT-TAX-BRIEF (April 16) says: Obsidian Futures, gold accent, 5 tabs (Overview, The Double Standard, The Chart, Genre by Genre, Sources), bubble chart as centerpiece
- DESIGN-DECISION-LOG (May 14) says: Alterrell Interactive, teal/paper, 6 tabs (Overview, The Data, The Double Standard, History, Take Action, Spread the Word)
- Concert Tax HTML (May 14) matches: DESIGN-DECISION-LOG ✓
- **More current:** DESIGN-DECISION-LOG and the rebuilt HTML. CONCERT-TAX-BRIEF.md is fully superseded and should be retired.

---

**Conflict 6: Journey block item count for pieces**
- Decision: How many items in the piece journey block?
- DEPLOY-CHECKLIST (May 5) says: "Pieces: 3 items only (Watch / Read / Support)"
- DESIGN-DECISION-LOG (May 14) says: "Four items ordered by commitment hierarchy: Share, YouTube, Substack, Ko-fi"
- What's in a Name HTML: 4 items (YouTube, Substack, All Pieces, Ko-fi) — inconsistent with both specs
- Sodium HTML: 3 items (Watch, Read, Explore-internal) — 3rd item is not Support/Ko-fi
- Big Black Love HTML: 3 items (YouTube, Substack, Ko-fi) — matches checklist
- Concert Tax HTML: 3 items (Watch, Read, Support/Ko-fi) — matches checklist
- **Unresolved.** DEPLOY-CHECKLIST and DESIGN-DECISION-LOG conflict. DESIGN-DECISION-LOG says Share should be item 1 (a full-width share grid) — this was implemented as a tab (Spread the Word) in Concert Tax rather than a journey block item. No piece has implemented the DDL's 4-item pattern as described. **AMA decision needed** before any piece journey blocks are standardized.

---

**Conflict 7: Tab bar active state**
- Decision: How does the active tab look?
- BRAND-BRIEF (May 6) says: "Active tab: full navy `#0F172A` fill, white text"
- CSS says: `.ai-tab.active { color: var(--teal); border-bottom-color: var(--teal); }` — teal underline only, no fill
- All piece HTMLs: Use teal underline (inheriting from CSS) for teal-lane pieces; gold underline for OF pieces
- **More current:** CSS and all rendered pieces. The BRAND-BRIEF's "full navy fill" has never been implemented. If AMA wants full navy fill, this requires a Type 3 CSS update.

---

**Conflict 8: DOM order — breadcrumb vs. nav**
- Decision: Which appears first in the HTML: breadcrumb or nav?
- DEPLOY-CHECKLIST (May 5) says: Structure order #2 = breadcrumb, #3 = nav
- What's in a Name, Sodium, Big Black Love: nav appears before breadcrumb in DOM
- Concert Tax (rebuilt May 14): breadcrumb before nav ✓ — correctly follows checklist
- **More current (intent):** DEPLOY-CHECKLIST. Concert Tax is correct. Legacy pieces need DOM order update in future build sessions (visual rendering is identical since both are `position: fixed`; this is a semantic/accessibility concern).

---

**Conflict 9: Tagline**
- Decision: What is the platform tagline?
- BRAND-BRIEF (May 6) says: "Tagline: Unravel the Data (under review — may be retired)"
- ALTERRELL-CLAUDE-DESIGN-HANDOFF (May 7) says: "Tagline (locked): 'See the architecture. The data was always there — now it's yours.'"
- Hub HTML says: "Data unravels the structure." (hero) and "The data was always there — now it's yours." (footer)
- **More current:** ALTERRELL-CLAUDE-DESIGN-HANDOFF (May 7) and hub HTML. Update BRAND-BRIEF.

---

**Conflict 10: DM Sans weight for body copy**
- Decision: What weight is DM Sans for body copy?
- BRAND-BRIEF (May 6) says: "Body: DM Sans 400"
- CSS body default says: `font-weight: 500`
- DESIGN-DECISION-LOG says: "DM Sans 400 (body), 500 (emphasis)"
- **Effectively resolved:** 500 is the default as-built. BRAND-BRIEF is technically wrong on this. Minor.

---

## SECTION G — RECOMMENDED FILE ACTIONS

| File | Recommendation | Reason |
|---|---|---|
| BRAND-BRIEF.md | **UPDATE** | Stale on: nav color (dark not white), Spectral weight (700 not 800), hub card border (teal/gold not electric blue), tagline, paper retirement clarification, tab active state (teal not navy fill), DM Sans body weight (500 not 400) |
| DEPLOY-CHECKLIST.md | **UPDATE** | Journey block count conflict with DESIGN-DECISION-LOG unresolved. Also: sodium index.html in _data/ should be noted or removed. |
| PLATFORM-BRIEF.md | **KEEP** | Accurate. Roles and workflow rules still valid. |
| PROJECT-STATUS.md | **UPDATE** | Concert Tax: change to "IN PROGRESS — voice pass remaining." Sodium: clarify distinction between "parked" and "built but not hub-activated." Add Big Black Love note about tab rewrite status. |
| CONTENT-TAXONOMY.md | **KEEP** | Accurate and current. Tag assignments reflect active piece state. |
| DESIGN-DECISION-LOG.md | **KEEP** | Most current source of truth on all platform and piece decisions. Should be updated at the end of every session. |
| SESSION-PROMPTS.md | **KEEP** | Accurate. |
| VOICE-GUIDE.md | **KEEP** | Accurate. |
| ALTERRELL-CLAUDE-DESIGN-HANDOFF.md | **UPDATE** | Spectral weight listed as 800 in token table but CSS and DDL say 700. Fix this one field. Otherwise accurate and current. |
| CHART-LIBRARY-SPEC.md | **KEEP** | Accurate spec. Note: `alterrell-charts.css` referenced but does not exist yet. |
| TAG-AND-SHARE-BUILD-SPEC.md | **KEEP** | Unbuilt — spec still needed. Feature is not yet implemented on any piece. |
| CONCERT-TAX-BRIEF.md | **RETIRE** | Fully superseded. Wrong lane, wrong tabs, wrong interactive target (bubble chart never built and not planned). Replace pointer with: "See DESIGN-DECISION-LOG and CONCERT-TAX-FACTPACK.md." |
| CONCERT-TAX-FACTPACK.md | **KEEP** | Data is verified. Weeknd gross discrepancy flagged in DDL — resolve before voice pass. |
| concert-tax-COPY-DRAFT-2026-04-27.md | **KEEP** (review) | Pre-dates final tab structure. AMA should verify which copy is still usable for the voice pass. |
| NAMING-SERIES-BRIEF.md | **UPDATE** | Lane field says "Obsidian Futures" — now non-compliant with May 6 rebrand. Update lane to Alterrell Interactive. |
| NAMING-SERIES-FACTPACK.md | **KEEP** | Accurate. |
| CONGRESS-BRIEF.md | **KEEP** | Scope accurate. Timing still valid (Sept 2026). |
| CONGRESS-1A-FACTPACK.md | **KEEP** | Accurate. Data verification items still open. |
| HBS-BRIEF.md | **KEEP** ⚠ | **TIMING ALERT:** June 2026 reunion target. If not already in active planning, this piece is at risk of missing its window. |
| HBS-FACTPACK.md | **KEEP** | Accurate. |
| WHERE-ARE-THEY-BRIEF.md | **KEEP** | Accurate pointer. No content duplication needed. |
| WHERES-BEYONCE-FACTPACK.md | **KEEP** | Most recent and complete beyoncé file. |
| BLACK-SITCOMS-BRIEF.md | **UPDATE** | Lane says "Obsidian Futures" — update to Alterrell Interactive per May 6 decision. Design section still says `#0a0a12 bg, #E8B923 gold` — remove or flag as superseded. |
| BLACK-GAY-GEOGRAPHY-BRIEF.md | **UPDATE** | Lane says "Obsidian Futures." Big Black Love piece uses it — update lane field and background color to Alterrell Interactive when piece design is locked. |
| FRAMESHIFT-BRIEF.md | **KEEP** | Accurate. Separate product — not in platform repo scope. |
| FRAMESHIFT-FACTPACK.md | **KEEP** | Accurate. |
| GAY-UNCLES-FACTPACK.md | **KEEP** | Accurate. |
| SODIUM-FACTPACK.md | **KEEP** | Accurate. |
| FOREVER-LOVED-FACTPACK.md | **KEEP** | Accurate. |
| COPAGANDA-PIECE-BRIEF.md | **KEEP** | Detailed brief. Piece is parked — no urgency but brief is well-formed for when it activates. |

---

## PRIORITY ACTION LIST (ordered by impact)

**Immediate (before next build session):**
1. **Hub card left border:** Update CSS and hub HTML to use electric blue `#2563EB` for active piece borders — BRAND-BRIEF, TAG-AND-SHARE-BUILD-SPEC, and DESIGN-DECISION-LOG all agree. CSS is the only holdout. Type 3 session.
2. **CONCERT-TAX-BRIEF.md:** Retire or add a clear header: "SUPERSEDED — see DESIGN-DECISION-LOG.md." Prevents future sessions from reading stale lane/tab info.
3. **PROJECT-STATUS.md:** Update Concert Tax and add sodium distinction.

**Before next piece deploys:**
4. **Journey block standard:** AMA decision needed on 3 vs. 4 items. Resolve the DEPLOY-CHECKLIST / DESIGN-DECISION-LOG conflict so all pieces follow the same pattern.
5. **BRAND-BRIEF.md:** Update Spectral weight (800→700), tagline, nav background note, hub border color, tab active state description.

**Lower priority (housekeeping):**
6. **DOM order in legacy pieces:** Update naming, sodium, and big-black-love to put breadcrumb before nav per checklist. Visual impact: none. Semantic/audit impact: cleanliness.
7. **DM Sans 800 weight:** Load it in naming, sodium, and big-black-love Google Fonts imports (currently only loading up to 600).
8. **`_data/sodium index.html`:** Confirm what this file is. If superseded by `fast-food-sodium/index.html`, archive or delete.

---

*Report generated: 2026-05-15. Read-only audit — no production files modified.*
*Files read: 28 .md files in _data/, alterrell-interactive.css, index.html (hub), 4 piece index.html files.*
