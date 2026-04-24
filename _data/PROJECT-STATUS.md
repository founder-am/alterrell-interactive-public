# PROJECT-STATUS.md

**Read this file at the start of every Claude Code session.**
**Update this file before every deploy commit.**
Last updated: 2026-04-23 — T3 platform session (naming series hub cards + concert-tax h1)

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
- [ ] AMA visual review on live server — charts + data tables render correct? `current` `[AMA]`
- [ ] Hub card title decision resolved `[AMA]`
- [ ] Deploy `blocked until AMA confirms charts + tables render`
- **Next session:** T3 platform · deploy after AMA confirms · same commit as hub card fix
- **Blocking:** Nothing

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

### Gay Uncles / Bigger Black Men Advice
- [x] Brief exists in _data/
- [ ] Copy map `blocked` `T1` — not calendared
- [ ] Build `blocked` `T2`
- [ ] Deploy `blocked`
- **Next session:** T1 editorial · calendar TBD

### Copaganda
- [x] Brief exists in _data/
- [ ] Sketch / explore session `next` `T1` — AMA wants to develop further
- [ ] Build `blocked` `T2` — not calendared
- **Next session:** T1 editorial · exploratory

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