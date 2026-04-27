# PROJECT-STATUS.md

**Read this file at the start of every Claude Code session.**
**Update this file before every deploy commit.**
Last updated: 2026-04-27 — T2 build session (Concert Tax structural fix: hero + journey block extracted to canonical position)

---

## Pipeline legend

Steps: `brief` → `data-audit` → `tab-map` → `copy-draft` → `voice-pass` → `ama-rewrite` → `build` → `qa` → `deploy` → `live`

Session types: `T1` = editorial (claude.ai) · `T2` = build (Claude Code) · `T3` = platform (Claude Code)

Gates: `[AMA]` = decision or approval needed from AMA before next step

Status: `done` · `current` · `next` · `blocked` · `parked`

---

## PLATFORM

### Hub (index.html)
- [x] Brief
- [x] Build
- [x] Live
- [x] Sodium → flipped to coming soon (T3 session, April 2026)
- [x] Shared URL config (_data/config.js) created + rolled out to all pieces (T3 session, April 2026)
- [x] Left border color system — 6px, data-lane: teal AI / gold OF (T3 session, April 2026)
- [x] **Batch A (2026-04-27):** Ko-fi icon ♥ → $ in journey block (line 150) and footer (line 402)
- [x] Hub stat Part 2 corrected: 3 sitcoms + 1 counter-example (was "4 sitcoms")
- [x] Where's Beyoncé? coming soon hub card — complete (T3, April 2026): lane AI, title, lede, stat label, stakes all confirmed
- [x] Sodium hub card moved to COMING SOON section (T3, April 2026) — was incorrectly first in grid before active cards
- [x] Concert Tax hub card title updated: "The Male Laziness Epidemic" (was "The Male Laziness Surcharge") (T3, April 2026)
- [x] Naming Part 0 hub card → coming soon (T3, April 2026)
- [x] Naming Part 2 hub card → coming soon (T3, April 2026)
- **Next session:** T3 push — all hub card changes ready, no remaining gates
- **Blocking:** Nothing

### alterrell-interactive.css
- [x] Platform-wide contrast fix — `.ai-nav-meta a` + `.ai-footer-journey-name` updated to rgba(248,246,241,0.88) font-weight 500 (T3 session, April 2026)

---

## ACTIVE — needs work

### Concert Tax (`/concert-tax/`)
- [x] Brief
- [x] Build
- [x] Hub card title: "The Male Laziness Epidemic" (T3, April 2026) — piece title decision still pending `[AMA]`
- [x] Piece `<h1>` updated: "The Male Laziness Epidemic" (was "The Hidden Concert Tax") (T3, April 2026)
- [x] D3 diagnostic (T2 session, April 2026) — root cause: img placeholders, no library loaded, no init code
- [x] D3 build (T2 session, April 2026):
  - `<body class="has-breadcrumb">` added
  - Nav markup fixed to `.ai-nav-brand` / `.ai-nav-meta` canonical classes
  - `.ai-nav-meta a` color override added for dark OF background
  - Static img tags replaced with `#ct-chart-bubble` and `#ct-chart-historical` divs
  - D3 v7 loaded from CDN at end of `<body>`
  - `initBubbleChart()` and `initHistoricalChart()` implemented with dimension guard + re-init flag
  - `showTab()` triggers charts via `requestAnimationFrame` when `idx === 1`
- [x] Data tables build (T2 session, April 2026):
  - Collapsible `<details class="ct-data-table">` added under each chart (collapsed by default)
  - Table 1 (bubble): 16 rows matching D3 bubble data array exactly
  - Table 2 (historical): 33 rows matching D3 historical artists array exactly
  - Female rows gold left border `#E8B923`, male rows teal `#0a7c72`
  - `'Mid'` → `'Standard'` production tier label replaced in JS tierLabels array and all HTML table cells
  - Note: tables use dark `#0a0a12` background per AMA instruction (deploy checklist deviation)
- [x] **Structural fix (T2, 2026-04-27):** Hero section + journey block extracted from Tab 1 to canonical position
  - `<header class="ct-hero-section">` (eyebrow + h1 + subhead) placed between breadcrumb and journey block
  - `.ct-journey-standalone` wrapper placed between hero and tab nav
  - Journey block reduced from 4 → 3 items: removed "Explore / All Pieces" link; kept Watch, Read, Ko-fi
  - YouTube URL updated to canonical playlist URL
  - Substack URL in journey block updated to section URL + UTM param
  - CSS added: `.ct-hero-section` (padding + OF background) and `.ct-journey-standalone` (wrapper + 3-col grid)
- [x] **OG meta fixed (T2, 2026-04-27):** `<title>`, `og:title`, `twitter:title` all updated to "The Male Laziness Epidemic — Obsidian Futures" (was "Gender & Genre: The Hidden Concert Tax")
- [ ] AMA visual review on live server — charts + data tables render correct? `current` `[AMA]`
- [ ] Deploy `blocked until AMA confirms charts + tables render`
- **Remaining deviations (for future sessions):**
  - Journey block items use `background: var(--of-card)` (#111118 dark) — deploy checklist requires white #ffffff for piece journey blocks. Deferred: design decision needed before fix.
  - Data tables use dark `#0a0a12` background — documented AMA override, intentional deviation.
  - Nav meta has 3 items (Substack · YouTube · $ Ko-fi) — standard is 2 items; Ko-fi in nav is non-standard.
  - Nav Substack URL is root `https://alterrell.substack.com` — should be section URL.
  - Part 2 tease Substack link is root URL — should be section URL.
  - Voice pass not yet done — all body copy is AI-drafted and awaiting AMA rewrite.
  - Tab structure (6 tabs) does not match CONCERT-TAX-BRIEF.md (5 tabs) — deferred.
- **Next session:** T3 platform · deploy after AMA confirms visual review · same commit as hub card fix if any
- **Blocking:** AMA visual review

### Naming Series — Part 0 (`/what-in-a-name/part-0/`)
- [x] Build
- [x] Live
- [ ] AI voice pass `current` `T1`
- [ ] AMA rewrite `[AMA]`
- [x] Stale copy fix: "Part 2 coming" → live link (T3 Batch C, April 2026)
- [x] Footer forward link to Part 2 added (T3 Batch C, April 2026)
- [x] config.js rolled out + URLs canonical
- **Next session:** T1 editorial · voice pass all three parts in one session

### Naming Series — Part 1 (`/what-in-a-name/`)
- [x] Build
- [x] Live
- [ ] AI voice pass `current` `T1`
- [ ] AMA rewrite `[AMA]`
- [x] Stale copy fix: "(coming in Part 2)" removed, teaser updated to live link (T3 Batch C, April 2026)
- [x] config.js rolled out + URLs canonical
- **Next session:** T1 editorial · fold into same session as Part 0 voice pass

### Naming Series — Part 2 (`/what-in-a-name/part-2/`)
- [x] Build
- [x] Live
- [ ] AI voice pass `current` `T1`
- [ ] AMA rewrite `[AMA]`
- [x] Part 3 footer href fixed: was self-referencing /part-2/, now /part-3/ (T3 Batch C, April 2026)
- [x] config.js rolled out + URLs canonical
- **Next session:** T1 editorial · fold into same session as Part 0 and Part 1

### Advice From Your Thick Gay Uncles (`/big-black-love/`)
- [x] Brief — complete, updated April 26 2026
- [x] Tab map — locked April 26 2026 (T1 session) · 6 tabs + 3 sub-tabs (Your Move)
- [x] Visual spec — locked April 26 2026 (T1 session)
- [x] Copy draft — Overview + My Story tabs (placeholder, AMA rewrite pending)
- [x] Build scaffold — T2 session April 26 2026
  - `big-black-love/index.html` — OF dark theme (#0a0a12), `.bbl-section[hidden]` pattern
  - Tab 1 (Overview): hero, placeholder copy, share block
  - Tab 2 (My Story): placeholder copy
  - Tab 3 (The Poll): two horizontal bar charts (raw count + %, n=77 corrected), both wired in JS
  - Tab 4 (The Data): scatter/bubble stub — JS data array wired, D3 visual deferred to T2 chart session
  - Tab 5 (Hold Your Ground): 5 accordions (first open), uncle disclaimer in Section 4, pull quote placeholders in all 5
  - Tab 6 (Your Move): 3 sub-tabs (Big Men / Chasers / Friend Group)
  - Journey block 4-item 2×2 grid · methodology accordion open by default · D3 v7 loaded
- [x] Hub card — coming soon, in index.html · `data-lane="of"` · stat/stakes `[AMA TO CONFIRM]`
- [x] Poll data corrected — n=77 (erroneous 97 in T2 prompt; brief updated)
- [ ] AMA rewrite — Overview + My Story tabs `current` `[AMA]`
- [ ] Copy draft — Tabs 3, 4, 5, 6 `T1`
- [ ] Voice pass — all tabs `T1`
- [ ] AMA rewrite — all tabs `[AMA]`
- [ ] Chart refinement — scatter/bubble visual pass (D3 build) `T2`
- [ ] Data sourcing — confirm gay pop estimates, Jack'd claim, CDC proxy `[AMA]`
- [ ] Full build — charts wired, all copy in `T2`
- [ ] QA `T2`
- [ ] Deploy `T2`
- **Current step:** AMA rewrite · Overview + My Story
- **Next session:** T1 editorial · AMA rewrite pass + chart refinement + Tabs 3-6 copy draft
- **Blocking:** Nothing (accent color placeholder #E8B923 acceptable until second OF piece ships)

---

## PARKED — ready when calendar gap opens

### Sodium (`/fast-food-sodium/`)
- [x] Build
- [x] Live (currently hidden as coming soon)
- No action needed. Re-activate by flipping hub card status.
- **Next session:** None until calendar gap

---

## UPCOMING — May 4 window (Beyoncé / Met Gala)

### Where Are They (`/where-are-they/`)
- [x] Brief
- [x] Research locked
- [x] Hub card complete (T3, April 2026): Lane AI (teal), title "Where's Beyoncé?", lede confirmed, stat label + stakes confirmed
  - Stat label: "We only call out the Black women on the Forbes list."
  - Stakes: "The ask is never equal."
  - Stat number: ✦ (visual placeholder — no number needed)
- [ ] Tab / copy map `next` `T1`
- [ ] Build `blocked` `T2` — Q3 2026
- [ ] Deploy `blocked` — Q3 2026
- **Next session:** T3 push — hub card is ready, no remaining gates
- **Hard deadline:** May 4 2026 for hub card push

---

## PIPELINE — not started

### Congress Part 1A
- [x] Brief + editorial locked
- [ ] Copy map `blocked` `T1` — Q3/Q4 2026 window
- [ ] Build `blocked` `T2`
- [ ] Deploy `blocked`
- **Next session:** T1 editorial · Q3 2026

### HBS Digital Museum
- [x] Approach scoped
- [ ] Brief `blocked` `T1` — Q2 2026 · June reunion timing
- [ ] Build `blocked` `T2`
- [ ] Deploy `blocked`
- **Next session:** T1 editorial · May 2026

### Copaganda
- [x] Brief exists in _data/ — fully locked April 25 2026
- [x] Visual suite locked (5 visuals, build order V3→V5→V4→V2→V1)
- [x] Visual 3 (SVU treemap) built — `copaganda/visual-3.html` (T2, April 2026)
  - Treemap: 5 tiles (NBC cop, Wolf, Hargitay, Meloni, Ice-T), locked colors, FLOOR_M=20
  - Actor cards: Hargitay, Meloni, Ice-T with name/role/earnings/years
  - Annotation: "This is one year. SVU has been airing since 1999."
- [x] Visual 5 (butterfly bar) built — `copaganda/visual-5-city-budgets.html` (T2, April 2026)
  - 10 city/country pairings, locked data (SIPRI 2024 + city FY2023-24)
  - Teal #0a7c72 left bars (city police), indigo #1e1040 right bars (country military)
  - DM Serif Display title + ratio labels, DM Sans labels, DM Mono values
  - JS proportional bar sizing against $5.4B max, resize-responsive
  - Two annotation callouts: NYPD/Norway, Dallas/Croatia
  - Screenshot nudge present
- [x] Visual 4 (scale comparison) built — `copaganda/visual-4-scale-comparison.html` (T2, April 2026)
  - Three bands: Band 1 content machine (sqrt compression, indigo #1e1040), Band 2 city police (linear, teal #0a7c72), Band 3 military (linear, coral #993C1D)
  - 3 connector callouts between bands + cumulative stat callout
  - Band 1 entities: Comcast $124B, NBCU $8.6B, CBS/Paramount ~$930M, CBS cop ~$307M, NBC cop ~$220M
- [x] Visual 2 (producer stacked bar) built — `copaganda/visual-2-producers.html` (T2, April 2026)
  - 6 producers: Wolf 150s, Bruckheimer 41s, Bellisario 33s, Spelling 29s, Gordon 23s, Bochco 19s
  - Network colors, segment labels, Wolf $0 annotation, two callout blocks
- [ ] Visual 1 (Gantt timeline) `next` `T2` — most complex, build last
- [ ] Copy drafting `blocked` `T1` — after AMA chooses T1 or T2 priority
- [ ] Full piece build `blocked` `T2` — after all copy AMA-approved
- **Next session:** T2 visual build (Visual 1 Gantt) OR T1 copy (AMA decides)
- **Blocking:** Part 2 Tab 3 copy blocked until Wolf 990 review

---

## DEPLOY QUEUE — what goes in the next commit

**Ready to push (Batch A + C — pending AMA confirmation):**
- [x] Sodium → coming soon on hub card
- [x] Where Are They → coming soon hub card added
- [x] Naming series stale copy fixes (all three parts)
- [x] Part 2 self-referencing footer link fixed
- [x] Hub stat "4 sitcoms" → "3 sitcoms + 1 counter-example"
- [x] Platform-wide contrast fix (nav + journey block links in alterrell-interactive.css)
- [x] Left border 6px lane color system (data-lane: teal AI / gold OF)
- [x] _data/config.js created + rolled out to all pieces
- [x] Naming Part 0 + Part 2 hub cards → coming soon
- [x] _data/PROJECT-STATUS.md updated

**Held for separate commit:**
- Concert Tax D3 + tables deploy (blocked until AMA confirms visual review)
- Concert Tax `<h1>` → "The Male Laziness Epidemic" (ready, holding with concert-tax commit)
- config.js rollout to concert-tax/index.html (holding with concert-tax commit)

---

## STANDING DECISIONS

- Hub ships before any new piece in same deploy
- Batch A (platform) always deploys alone and verified before Batch B or C
- Never mix batch types in one commit
- All copy must pass AI voice pass + AMA rewrite before deploy
- Substack URL: https://alterrell.substack.com/s/alterrell-interactive?utm_source=newsletter_page
- YouTube URL: https://www.youtube.com/playlist?list=PLBmJd1HY9o6YvRW5PDW0jOGJley2AjNYS
- **"Get early access" copy is retired platform-wide (2026-04-27).** Replace with: "Get the story behind the story →" in all share blocks. AMA authorized combined Batch A + C deploy.
- **Substack nudge in share blocks must link to section URL** `/s/alterrell-interactive?utm_source=newsletter_page` — never root URL.

### "Get early access" retirement log (2026-04-27)
Changed in this commit:
- index.html (hub): no instance found — clean
- fast-food-sodium/index.html: share block line 1545 ✓
- what-in-a-name/part-0/index.html: share block line 656 ✓
- what-in-a-name/index.html (Part 1): share block line 1117 ✓
- what-in-a-name/part-2/index.html: share block line 916 ✓
- concert-tax/index.html: share block line 1090 + root URL fixed ✓

**NOT changed — outside session scope:**
- big-black-love/index.html: "Get early access on Substack" in journey block Read item title (line ~500). Fix in next big-black-love build session before deploy.