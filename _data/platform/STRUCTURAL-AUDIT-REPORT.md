# STRUCTURAL AUDIT REPORT
**Alterrell Interactive — _data/ briefs vs. repo state**
**Audit date:** May 17, 2026
**Session type:** Read-only audit. No files modified except this report.
**Auditor:** Claude Code (claude-sonnet-4-6)

---

## SCOPE

Files read:
- All .md files in `_data/` (including subdirectories)
- `index.html` (hub)
- `alterrell-interactive.css`
- `big-black-love/index.html`
- `concert-tax/index.html`
- `fast-food-sodium/index.html`
- `what-in-a-name/index.html`
- `copaganda/` (no index.html present — HTML partials only)

---

## SECTION A: FILE INVENTORY

### Root _data/ files

| File | Last committed | Governs | Duplicate / overlap |
|---|---|---|---|
| ALTERRELL-CLAUDE-DESIGN-HANDOFF.md | May 7, 2026 | Card component system (tokens, surface options, approved components) | Overlaps CHART-LIBRARY-SPEC.md significantly — both define tokens and component rules |
| BLACK-GAY-GEOGRAPHY-BRIEF.md | Apr 26, 2026 | Gay Uncles piece (v1 brief) | SUPERSEDED by v2 in _data/ |
| BLACK-GAY-GEOGRAPHY-BRIEF-v2.md | May 17, 2026 | Gay Uncles piece (v2 brief — locked) | Duplicate exists at `concert-tax/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md` (untracked — delete it) |
| BLACK-SITCOMS-BRIEF.md | Apr 16, 2026 | Black Sitcoms piece (concept stage) | None |
| BRAND-BRIEF.md | May 7, 2026 | Platform visual identity, color system, typography (LOCKED) | Overlaps DESIGN-DECISION-LOG.md; conflicts documented in Section F |
| CHART-LIBRARY-SPEC.md | May 7, 2026 | Chart component specs (A1–E2) | Overlaps ALTERRELL-CLAUDE-DESIGN-HANDOFF.md on tokens and component definitions |
| CONCERT-TAX-BRIEF.md | Apr 16, 2026 | Concert Tax piece (original brief — STALE) | Superseded by CONCERT-TAX-FACTPACK.md; describes wrong lane, wrong chart type, wrong tab names |
| concert-tax-COPY-DRAFT-2026-04-27.md | Apr 27, 2026 | Concert Tax copy draft (April) | Superseded by the actual concert-tax/ build |
| CONCERT-TAX-FACTPACK.md | May 2026 | Concert Tax data, quotes, tab structure | Tab names and title differ from live HTML — partially stale |
| CONGRESS-1A-FACTPACK.md | May 2026 | Congress Part 1A data and structure | Overlaps CONGRESS-BRIEF.md — factpack is more current |
| CONGRESS-BRIEF.md | Apr 16, 2026 | Congress Part 1A architecture | Partially superseded by factpack; still useful for slug/timing decisions |
| CONTENT-TAXONOMY.md | May 6, 2026 | Tag system and lanes (LOCKED) | Overlaps BRAND-BRIEF.md on lane retirement |
| COPAGANDA-PIECE-BRIEF.md | Apr 25, 2026 | Copaganda two-part piece | No factpack exists yet |
| DEPLOY-CHECKLIST.md | May 2026 | Pre-deploy gates for all pieces | None |
| DESIGN-DECISION-LOG.md | May 14, 2026 | Session-by-session decision log (platform + visual library) | Most comprehensive single source — overlaps BRAND-BRIEF, CHART-LIBRARY-SPEC, DESIGN-HANDOFF |
| FOREVER-LOVED-FACTPACK.md | unknown | Forever Loved tool | No corresponding brief in _data/ |
| FRAMESHIFT-BRIEF.md | Apr 16, 2026 | FrameShift tool | No factpack |
| FRAMESHIFT-FACTPACK.md | unknown | FrameShift tool data | No brief in same update cycle |
| GAY-UNCLES-FACTPACK.md | May 2026 | **CRITICAL: Describes a DIFFERENT PIECE than what was built.** See Section F. | Conflicts with BLACK-GAY-GEOGRAPHY-BRIEF-v2.md on piece identity |
| HBS-BRIEF.md | Apr 16, 2026 | HBS Digital Museum piece | No factpack in same cycle |
| HBS-FACTPACK.md | unknown | HBS piece data | — |
| NAMING-SERIES-BRIEF.md | Apr 16, 2026 | What's in a Name series | Overlaps naming/ subfolder |
| NAMING-SERIES-FACTPACK.md | unknown | Naming series data | Overlaps naming/ subfolder |
| PLATFORM-BRIEF.md | May 2026 | Platform workflow, roles, output priorities | Overlaps BRAND-BRIEF and DDL on Claude's role |
| PROJECT-STATUS.md | May 2026 | Production tracking (PARTIALLY STALE — see Section B) | — |
| SESSION-PROMPTS.md | May 2026 | Session type prompts (T1/T2/T3) | None |
| SODIUM-FACTPACK.md | May 2026 | Fast Food Sodium piece data | No corresponding brief file |
| STRUCTURAL-AUDIT-REPORT.md | May 17, 2026 | This document | — |
| TAG-AND-SHARE-BUILD-SPEC.md | May 6, 2026 | Tag system + shareable assets tab build spec | Overlaps CONTENT-TAXONOMY.md on tag rules |
| VOICE-GUIDE.md | May 2026 | AMA's writing voice (editorial sessions only) | None |
| WHERE-ARE-THEY-BRIEF.md | Apr 16, 2026 | POINTER FILE — references a nonexistent file | Points to `WHERES-BEYONCE-PIECE-BRIEF.md` which does not exist in repo |
| WHERES-BEYONCE-FACTPACK.md | May 7, 2026 | Where's Beyoncé? full fact pack | WHERE-ARE-THEY-BRIEF.md is a stale pointer to a nonexistent file |

### _data/copy-drafts/ (4 files)
Old April 27 bullets for big-black-love and naming Parts 0, 1, 2. All superseded by later builds and briefs.

### _data/naming/ (18 files)
Production content for Naming Series — scripts, captions, tier lists, validation files. Piece-specific research subfolder. Not in scope for this platform-level audit.

---

## SECTION B: PROJECT-STATUS.md ACCURACY

### Hub — LIVE
**Reality:** ✓ Correct. Hub index.html exists and renders.

---

### Naming Series Part 1 — LIVE
**Reality:** ✓ Partially correct. `what-in-a-name/` exists with full index.html. Hub card is `hub-card--active` and linked.
**Discrepancy:** The Part 0 / Part 1 / Part 2 naming from the brief does not map clearly to what's built. The `what-in-a-name/` piece contains all content — it is not labeled "Part 1" in the HTML. No separate folders for Parts 0 or 2.

### Naming Series Parts 0 and 2 — BUILT
**Reality:** ⚠ Ambiguous. No `/what-in-a-name/part-0/` or `/what-in-a-name/part-2/` folders exist. These appear as "Coming Soon" cards on the hub with no linked folders. Needs AMA clarification on whether Parts 0 and 2 are sections inside the current index.html or separate pages to be built.

---

### Concert Tax — IN PROGRESS
**Reality:** ⚠ Status conflict. `concert-tax/index.html` is a fully built 6-tab piece. The hub card is `hub-card--active` with a working link. Concert Tax is functionally live on the hub but PROJECT-STATUS marks it IN PROGRESS. Either the hub card should not be active until a voice pass is complete, or status should be updated to LIVE.

---

### Big Black Love — IN PROGRESS
**Reality:** ✓ Accurate. `big-black-love/index.html` exists (restructured May 17 this session). Hub card is "Coming Soon" — not linked. AMA rewrite pending.
**Note:** Hub card has `[AMA TO CONFIRM]` placeholders in stat block and stakes — must be resolved before status change.

---

### Sodium — PARKED
**Reality:** ✓ Accurate. `fast-food-sodium/index.html` exists with full content. "Coming Soon" on hub, not linked. Factpack confirms ready to re-activate.

---

### Copaganda — PARKED
**Reality:** ✓ Status is accurate, but incomplete. `copaganda/` folder exists with 4 visual HTML partials (`visual-2-producers.html`, `visual-3.html`, etc.) — no index.html. No hub card. PROJECT-STATUS should note that visual partials exist in the folder.

---

### Congress — PARKED
**Reality:** ✓ Accurate. No `congress/` or `congress-salary/` folder exists.

---

### Missing from PROJECT-STATUS.md

**Where's Beyoncé? / where-are-they** — Not listed as a separate entry. WHERES-BEYONCE-FACTPACK.md is fully researched and the piece is hub-ready as "Coming Soon." No `where-are-they/` folder exists in the repo. The hub has a "Coming Soon" card titled "Who Do We Call During a Disaster" which appears to represent this piece.

---

## SECTION C: BRIEF-TO-REPO STRUCTURAL CHECKS

### big-black-love/ — Advice From Your Thick Gay Uncles

| Check | Brief (v2) | HTML | Match? |
|---|---|---|---|
| Tab count | 5 | 5 | ✓ |
| Tab names | Overview / My Story / The Map / Why These Cities / Your Move | Overview / My Story / The Map / Why These Cities / Your Move | ✓ |
| URL slug | implied `big-black-love` | `big-black-love/` | ✓ |
| Background | #0a0a12 dark | body { background: #0a0a12 } | ✓ |
| Accent (UI) | Gold #E8B923 tabs/eyebrows | .ai-tab.active { color: #E8B923 } | ✓ |
| Card border | 7px teal #0a7c72 on white | .bbl-card { border: 7px solid #0a7c72 } | ✓ |
| Journey block | 4-item (Watch/Read/Explore/Ko-fi) | 4-item present | ✓ |
| Ko-fi | Required | Present in journey block + share block | ✓ |
| Share block | Overview tab | Present on Overview tab | ✓ |
| OG tags | Required | og:title, og:description, og:url, og:image, twitter:* all present | ✓ |
| Breadcrumb | Required | Present | ✓ |

**Flags:**
- "My Story" section carries h2 heading "I Wasn't Always This Size" — carryover from pre-v2 build. Not in v2 brief. AMA should decide on voice pass.
- Hub card has `[AMA TO CONFIRM]` placeholders — must be resolved before Going Live.
- Dead CSS present (`.bbl-scatter-wrap`, `.bbl-accordion-wrap`) — no HTML uses it, harmless.

---

### concert-tax/ — Female Musicians Earn Less But Share More

| Check | Factpack | HTML | Match? |
|---|---|---|---|
| Tab count | 6 (per Section 14) | 6 | ✓ |
| Tab names | Overview / The Data / The Double Standard / The Burden of Breaking the Ceiling / How We Got Here / Sources | Overview / The Data / The Double Standard / History / Take Action / Spread the Word | ✗ 3 of 6 differ |
| Title | "The Male Laziness Epidemic" | "Female Musicians Earn Less But Share More" | ✗ |
| Hub card title | "The Male Concert Laziness Surcharge" | — | ✗ Three different titles across three files |
| URL slug | `concert-tax` | `concert-tax/` | ✓ |
| Background | Rebuilt to teal/paper per DDL | White/paper sections | ✓ |
| Journey block | Required | 3-item present (Watch/Read/Ko-fi) | ✓ |
| Ko-fi | Required | Present | ✓ |
| Share block | "Overview tab only" per factpack | Dedicated "Spread the Word" tab | ⚠ moved to separate tab |
| OG tags | Required | All present | ✓ |
| Breadcrumb | Required | Present | ✓ |

---

### fast-food-sodium/ — Fast Food's Hidden Sodium Tax

| Check | Factpack | HTML | Match? |
|---|---|---|---|
| Navigation type | Scroll-spy (legacy) | Scroll-spy | ✓ |
| Tab count | Not locked in factpack | 7 tabs | N/A |
| URL slug | `fast-food-sodium` | `fast-food-sodium/` | ✓ |
| Background | Teal/paper civic lane | Dark hero + paper content sections | ✓ |
| Journey block | Required | 3-item (Watch/Read/Explore) — NO Ko-fi | ✗ Ko-fi missing from journey block |
| Ko-fi | BRAND-BRIEF: required deploy gate | Present in share block but not journey block | ⚠ |
| Share block | Required | Present | ✓ |
| OG tags | Required | All present | ✓ |
| Breadcrumb | Required | Present | ✓ |

---

### what-in-a-name/ — What's in a Name: The Fame Effect

| Check | Brief | HTML | Match? |
|---|---|---|---|
| Tab count | Not specified for Part 1 HTML | 5 tabs | N/A |
| URL slug | `/what-in-a-name/` | `what-in-a-name/` | ✓ |
| Background | Obsidian Futures dark (#0a0a12) | --of-bg: #0a0a12 | ✓ |
| Accent | Gold #E8B923 | Yes | ✓ |
| Journey block | 4-item | 4-item (Watch/Read/All Pieces/Ko-fi) | ✓ |
| Ko-fi | Required | Present in journey block | ✓ |
| Share block | Required | Not confirmed present in quick audit | ⚠ |
| OG tags | Required | Present — but includes "Obsidian Futures" in OG title | ⚠ Retired brand label in metadata |
| Breadcrumb | Required | Present | ✓ |

**Flag:** NAMING-SERIES-BRIEF.md notes that `what-in-a-name/` will become a series index when Part 3 ships, and Part 1 will move to `/what-in-a-name/part-1/`. That URL migration has not happened. Plan a redirect before Part 3 deploys.

---

## SECTION D: DESIGN SYSTEM COMPLIANCE

### big-black-love/index.html

| Check | Spec | Actual | Compliant? |
|---|---|---|---|
| Background | #0a0a12 (piece-specific OF, grandfathered) | #0a0a12 | ✓ |
| Fonts | Spectral 700, DM Serif Display, DM Sans, DM Mono | All four loaded at correct weights | ✓ |
| alterrell-interactive.css linked | Required | Yes | ✓ |
| Local overrides | Permitted in `<style>` block | Yes, bbl- prefixed | ✓ |
| Structure order | head → nav → breadcrumb → journey → tabs → sections → footer → scripts | Same | ✓ |
| Unauthorized colors | None | Gold #E8B923, teal #0a7c72 — both spec'd | ✓ |
| D3 dependency | Should be absent | Absent (removed this session) | ✓ |

---

### concert-tax/index.html

| Check | Spec | Actual | Compliant? |
|---|---|---|---|
| Background | White/paper (teal lane) | White/paper | ✓ |
| Fonts | Four-font system | All four, including DM Sans 800 | ✓ |
| alterrell-interactive.css linked | Required | Yes | ✓ |
| Local overrides | Permitted | Yes, ct- prefixed | ✓ |
| Structure order | head → breadcrumb → nav → hero → journey → tabs → sections → footer → scripts | Correct | ✓ |
| Undocumented color | None allowed | `--surface: #f0ede8` not in any spec document | ⚠ |

---

### fast-food-sodium/index.html

| Check | Spec | Actual | Compliant? |
|---|---|---|---|
| Background | Paper/teal | Dark hero + paper content | ✓ |
| Fonts | Four-font system | All four | ✓ |
| alterrell-interactive.css linked | Required | Yes | ✓ |
| Ko-fi in journey block | Required per BRAND-BRIEF | Missing from journey block | ✗ |

---

### what-in-a-name/index.html

| Check | Spec | Actual | Compliant? |
|---|---|---|---|
| Background | #0a0a12 (OF, grandfathered) | --of-bg: #0a0a12 | ✓ |
| Fonts | Four-font system | All four | ✓ |
| alterrell-interactive.css linked | Required | Yes | ✓ |
| OG title brand label | "Obsidian Futures" retired | OG title includes "— Obsidian Futures" | ✗ Retired label in metadata |

---

## SECTION E: CSS AUDIT — alterrell-interactive.css

### Color values in CSS vs. BRAND-BRIEF

| CSS token | Value | BRAND-BRIEF status | Status |
|---|---|---|---|
| `--teal: #0a7c72` | Teal | "Retired from piece page backgrounds, nav, UI." Still used for active tab color, link colors, journey icons throughout. | ⚠ Not yet migrated — awaiting highlight color decision |
| `--paper: #f8f6f1` | Paper warm | "Retired from piece page backgrounds. Active as chart token only." Still in root CSS and used in concert-tax. | ⚠ Not yet migrated |
| Active tab: `var(--teal)` | #0a7c72 | BRAND-BRIEF says active tab = full navy #0F172A fill, white text. CSS uses teal text, no fill. | ✗ Not implemented |
| Hub card left border (in hub local CSS) | Teal or gold by data-lane (6px) | BRAND-BRIEF says electric blue #2563EB, 3px | ✗ Not implemented |
| `--orange: #c95f1a` | Orange | Not in main color system, but in chart library tokens — acceptable | ✓ |

### Font families
All four correct: Spectral, DM Serif Display, DM Sans, DM Mono. No unauthorized fonts.

**Note:** Google Fonts imports across all pieces load `Spectral:ital,wght@0,700;1,700` — only weight 700. BRAND-BRIEF says 800, DESIGN-DECISION-LOG says 700 (AMA's actual decision). Weight 700 is what was decided in the March 12 design audit. BRAND-BRIEF has not been updated to reflect this.

### Hub card element order vs. BRAND-BRIEF LOCKED ORDER

BRAND-BRIEF locked order: (1) Stat band, (2) Headline + subhead inline row, (3) Tags below headline, (4) CTA row last.

Hub actual: (1) `.hub-card-stat-block` ✓, (2) `.hub-card-title` ✓, (3) `.hub-card-lede` (body — stacked below title, not inline with headline), (4) `.hub-card-footer` with pill + stakes.

**Gap 1:** Headline and subhead are stacked, not inline on the same row. BRAND-BRIEF explicitly says "never stacked."
**Gap 2:** No tag pills are rendered on hub cards. TAG-AND-SHARE-BUILD-SPEC.md is a planned but unbuilt feature.

---

## SECTION F: CROSS-DOCUMENT CONFLICTS

### CONFLICT 1 — Gay Uncles piece identity (CRITICAL)
**Decision:** What piece is "Advice From Your Thick Gay Uncles"?
**GAY-UNCLES-FACTPACK.md:** Intergenerational mentorship piece about AIDS crisis survivors, chosen family structures, LGBTQ+ youth outcomes, "gay uncle" archetype. Lane: Obsidian Futures deep indigo `#1e1040`.
**BLACK-GAY-GEOGRAPHY-BRIEF-v2.md:** Personal data essay about where bigger Black gay men find romantic partners, TikTok poll, socioeconomic analysis of top cities. Lane: #0a0a12 dark, gold accent.
**big-black-love/index.html reflects:** The dating geography thesis.
**Which is current:** v2 brief is authoritative — it was the basis for the May 17 build session. GAY-UNCLES-FACTPACK.md appears to be an earlier, now-abandoned concept that shared a title before the piece pivoted to the dating geography argument.
**Risk:** A Claude session reading GAY-UNCLES-FACTPACK.md without the v2 brief will build the wrong piece.

---

### CONFLICT 2 — Concert Tax title (three different values)
**CONCERT-TAX-BRIEF.md:** "Male Concert Laziness Surcharge" (working title)
**CONCERT-TAX-FACTPACK.md Section 1:** "The Male Laziness Epidemic" (locked)
**concert-tax/index.html `<title>`:** "Female Musicians Earn Less But Share More"
**Hub card:** "The Male Concert Laziness Surcharge"
**Which is current:** The deployed HTML is the live artifact. "Female Musicians Earn Less But Share More" is the current live piece title. Hub card and factpack are stale. AMA must lock one title and update all files.

---

### CONFLICT 3 — Spectral font weight: 700 vs. 800
**BRAND-BRIEF.md:** "Spectral 800 — never lighter for headlines"
**DESIGN-DECISION-LOG.md (March 12 session):** "Hero headlines: Spectral 700 (serif). Full opacity always. Do not use DM Serif Display for heroes — AMA flagged it as 'matrixy and too cold on mobile.'"
**All HTML files load:** `Spectral:ital,wght@0,700;1,700` (700 only).
**Which is current:** DDL records AMA's actual decision from a design audit. DDL is more recent and more authoritative than BRAND-BRIEF for this specific decision. 700 is what's built.
**Action needed:** Update BRAND-BRIEF.md: change Spectral 800 → 700.

---

### CONFLICT 4 — Teal active status
**BRAND-BRIEF.md:** Teal `#0a7c72` "retired from piece page backgrounds, nav, and UI elements. Active as chart library token only."
**alterrell-interactive.css:** Teal is still used for active tab color, link colors, journey block icons, stat callout numbers throughout all pieces.
**Which is current:** The CSS migration away from teal in UI elements has not happened. It is blocked on the highlight color decision. Teal is functionally still the active UI color. Neither is wrong — this is a transition in progress.

---

### CONFLICT 5 — Paper background status
**BRAND-BRIEF.md:** Paper `#f8f6f1` "retired from piece page backgrounds."
**concert-tax/index.html:** Uses paper throughout as section background.
**CHART-LIBRARY-SPEC.md + DESIGN-DECISION-LOG.md:** Paper flagged as an active chart token with three conflicting values (#f8f6f1, #e8e5e0, #e8e4de).
**Which is current:** The retirement has not been enforced in any build. Awaiting AMA decision on paper value unification.

---

### CONFLICT 6 — Obsidian Futures: retired or grandfathered
**BRAND-BRIEF.md (May 7):** "Lanes (Alterrell Interactive / Obsidian Futures) are retired. All pieces are Alterrell Interactive."
**DESIGN-DECISION-LOG.md (May 14):** Confirmed retired, but "Concert Tax dark/gold treatment acceptable for now" — then immediately overridden by "AMA confirmed Concert Tax rebuilds in teal/paper from scratch."
**what-in-a-name/index.html:** Still uses `--of-bg: #0a0a12` and `#E8B923` gold.
**big-black-love/index.html:** Still uses `#0a0a12` and `#E8B923` gold.
**Which is current:** OF dark is retired for new builds and card components. Existing pieces (what-in-a-name, big-black-love) are grandfathered — no retrofit scheduled. Concert Tax was explicitly rebuilt to teal/paper. This is a managed transition.

---

### CONFLICT 7 — Hub card left border color
**BRAND-BRIEF.md:** "Left border: 3px solid electric blue `#2563EB` — signals live/active piece"
**hub index.html:** `hub-card[data-lane="ai"]{ border-left: 6px solid #0a7c72 }` and `hub-card[data-lane="of"]{ border-left: 6px solid #E8B923 }` — teal or gold by lane, 6px not 3px.
**Which is current:** The hub HTML is the live artifact. BRAND-BRIEF describes an aspirational rebrand state that has not been implemented. Electric blue `#2563EB` currently only appears in the nav wordmark ("Interactive").

---

### CONFLICT 8 — WHERE-ARE-THEY-BRIEF.md broken pointer
**WHERE-ARE-THEY-BRIEF.md:** "Full brief in WHERES-BEYONCE-PIECE-BRIEF.md — do not duplicate here."
**Repo state:** `WHERES-BEYONCE-PIECE-BRIEF.md` does not exist anywhere in the repo.
**Which is current:** WHERES-BEYONCE-FACTPACK.md is the full authoritative file. The pointer is permanently broken.

---

### CONFLICT 9 — Concert Tax background at build time
**CONCERT-TAX-BRIEF.md (Apr 16):** "Lane: Obsidian Futures (gold #E8B923, dark #0a0a12 bg)"
**CONCERT-TAX-FACTPACK.md:** "Lane: Obsidian Futures" / "Background: #0a0a12"
**DESIGN-DECISION-LOG.md (May 14):** "Concert Tax rebuilds in teal/paper from scratch"
**concert-tax/index.html:** Built in teal/paper.
**Which is current:** DDL (May 14) is definitive. Both brief and factpack are stale on the lane decision.

---

## SECTION G: RECOMMENDED FILE ACTIONS

| File | Action | Reason |
|---|---|---|
| ALTERRELL-CLAUDE-DESIGN-HANDOFF.md | UPDATE | Section 7 references May 7 conversation history and Beyoncé cards not in repo. Update "What the Visual Standard Is Now" to reflect current approved cards. Note grandfathered pieces. |
| BLACK-GAY-GEOGRAPHY-BRIEF.md (v1) | RETIRE | v2 is locked and authoritative. v1 served its April 26 purpose. Archive label or delete. |
| BLACK-GAY-GEOGRAPHY-BRIEF-v2.md | KEEP | Locked May 17. Authoritative for big-black-love/ build. Delete the untracked duplicate at `concert-tax/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md`. |
| BLACK-SITCOMS-BRIEF.md | KEEP | Concept stage brief. No urgency. |
| BRAND-BRIEF.md | UPDATE | Three specific changes: (1) Spectral 800 → 700. (2) Add note that teal retirement from UI is pending highlight color decision — CSS migration deferred. (3) Add note that OF dark treatment is grandfathered in pre-existing pieces (big-black-love, what-in-a-name) — no retrofit scheduled. |
| CHART-LIBRARY-SPEC.md | KEEP | Well-structured. Paper color discrepancy flag already documented inside it. |
| CONCERT-TAX-BRIEF.md | RETIRE | Describes wrong lane (OF dark), wrong centerpiece (D3 bubble chart), wrong tab names. A stale brief this far wrong is a hazard in future build sessions. |
| concert-tax-COPY-DRAFT-2026-04-27.md | RETIRE | Superseded by the actual build. |
| CONCERT-TAX-FACTPACK.md | UPDATE | Three changes: (1) Lock the title — update from "The Male Laziness Epidemic" to the live HTML title or confirm a new one. (2) Update tab names in Section 11 and Section 14 to match live HTML. (3) Update lane from "Obsidian Futures" to "teal/paper (rebuilt per DDL May 14)." |
| CONGRESS-1A-FACTPACK.md | KEEP | Current. No build started. |
| CONGRESS-BRIEF.md | KEEP | Useful for timing and framing. Factpack is more detailed. |
| CONTENT-TAXONOMY.md | UPDATE | Add Gay Uncles to the piece tag assignment table: `Gay Uncles | Culture · Health · Identity`. Currently absent. |
| COPAGANDA-PIECE-BRIEF.md | KEEP | Current as of Apr 25. No build started. |
| copy-drafts/ folder (4 files) | RETIRE | All superseded. No value retained. |
| DEPLOY-CHECKLIST.md | KEEP | Accurate, lightweight, used every session. |
| DESIGN-DECISION-LOG.md | KEEP + UPDATE | Most comprehensive document in the repo. Add: May 17 Gay Uncles restructure decisions (5 tabs, D3 removed, v2 poll data, card map locked). Update after every session per the file's own rule. |
| FOREVER-LOVED-FACTPACK.md | KEEP | Self-contained factpack. No brief needed urgently. |
| FRAMESHIFT-BRIEF.md | KEEP | Not urgent. |
| FRAMESHIFT-FACTPACK.md | KEEP | Not urgent. |
| GAY-UNCLES-FACTPACK.md | REWRITE | **Critical.** Describes a completely different piece (AIDS crisis/intergenerational mentorship) than what was built (dating geography). Will mislead any future build session for big-black-love/. Either rename it to signal it is a different concept (`OF-THICK-UNCLES-LEGACY-CONCEPT.md`) or rewrite it to describe the actual built piece. |
| HBS-BRIEF.md | KEEP | Not urgent. No build started. |
| HBS-FACTPACK.md | KEEP | Not urgent. |
| NAMING-SERIES-BRIEF.md | UPDATE | Add note: Part 0/1/2 folder split has not been implemented. All content at `what-in-a-name/`. URL migration to `/what-in-a-name/part-1/` must be planned before Part 3 deploys. |
| NAMING-SERIES-FACTPACK.md | KEEP | Internal research reference. |
| PLATFORM-BRIEF.md | KEEP | Accurate. Lightweight. |
| PROJECT-STATUS.md | UPDATE | Three changes: (1) Concert Tax: update from IN PROGRESS to LIVE (or "Hub card live — pending voice pass"). (2) Add `Where's Beyoncé?` as a separate entry — status NOT STARTED, no folder. (3) Add note under Copaganda: "visual partials exist in copaganda/ folder." |
| SESSION-PROMPTS.md | KEEP | Lightweight and functional. |
| SODIUM-FACTPACK.md | KEEP | Status accurate. Piece complete and parked. |
| STRUCTURAL-AUDIT-REPORT.md | KEEP | This document. |
| TAG-AND-SHARE-BUILD-SPEC.md | KEEP | Tag system not yet built. Spec remains relevant. Note: the file list includes `where-are-they/index.html` — that folder does not yet exist. |
| VOICE-GUIDE.md | KEEP | Accurate, correctly scoped. |
| WHERE-ARE-THEY-BRIEF.md | RETIRE | Broken pointer to a nonexistent file. All useful content is in WHERES-BEYONCE-FACTPACK.md. Remove or replace with a one-line pointer to the factpack. |
| WHERES-BEYONCE-FACTPACK.md | KEEP | Updated May 7. Comprehensive. Authoritative. |

---

## CRITICAL ISSUES — ACTION REQUIRED BEFORE NEXT BUILD SESSION

1. **GAY-UNCLES-FACTPACK.md describes the wrong piece.** Any future Claude session reading this file without the v2 brief will plan and possibly build a fundamentally different piece. Must be renamed or rewritten before the next big-black-love/ build session.

2. **Concert Tax has three different titles across three files.** Hub card, factpack, and live HTML all say different things. AMA must lock one title and update all files before the piece is considered truly shipped.

3. **WHERE-ARE-THEY-BRIEF.md points to a nonexistent file.** The file it cites (`WHERES-BEYONCE-PIECE-BRIEF.md`) does not exist. The pointer is permanently broken.

4. **Sodium journey block missing Ko-fi.** BRAND-BRIEF says Ko-fi is a required deploy gate. `fast-food-sodium/` journey block has Watch, Read, Explore — no Ko-fi. It exists in the share block, but not the journey block. Decision needed before the piece re-activates.

5. **Big Black Love hub card has `[AMA TO CONFIRM]` placeholders** in the stat number, stat label, and stakes fields. Must be resolved before the hub card status changes from Coming Soon.

6. **Duplicate v2 brief.** `concert-tax/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md` is an untracked copy of the v2 brief. Delete it — the authoritative copy is in `_data/`.

7. **CONCERT-TAX-BRIEF.md is actively wrong.** It describes OF dark styling, D3 bubble chart as centerpiece, and wrong lane. It is a hazard if read in any future session without the factpack.

---

*End of report. Written May 17, 2026. Read-only audit session — no other files were modified.*
