markdown# ALTERRELL INTERACTIVE — PLATFORM BRIEF
**Read this at the start of every session. Update it when decisions change.**
*Last updated: April 16, 2026*

---

## THE PLATFORM

**URL:** interactive.alterrell.com
**Stack:** Flat-file HTML/CSS/JS · Netlify hosting (auto-deploy on push) ·
  GitHub for version control · Claude Code for local file editing
**Repo:** github.com/founder-am/alterrell-interactive-public
**Local:** Repo cloned to desktop via GitHub Desktop
**Deploy workflow:** Claude Code edits files locally → GitHub Desktop
  reviews diff → commit + push → Netlify deploys in ~30 seconds
**Design system:** alterrell-interactive.css (canonical, locked —
  never rebuild, only extend with piece-local <style> blocks)
**Philosophy:** "Data as Dignity" — data that reveals structural
  systems and institutional barriers, never judges individuals
**Tagline (locked):** "See the architecture. The data was always there
  — now it's yours."
**Aesthetic target:** NYT visual stories approachable — not stylized
  data art
**Operator:** AMA (sole creator). Claude is editorial and engineering
  partner. No developer handoff planned. Two-party operation.

---

## THE TWO CONTENT LANES

**Alterrell Interactive** — civic/policy/institutional critique
- Accent: teal #0a7c72
- Pieces: Sodium, Congress, HBS, Where Are They, Copaganda,
  Specialist Map

**Obsidian Futures** — cultural data storytelling
- Accent: deep indigo #1e1040 / gold #E8B923
- Background: #0a0a12 (near-black, NOT purple)
- Pieces: What's in a Name series, Concert Tax, Black Sitcoms,
  Black Music Royalty, FrameShift, Black Gay Geography

---

## THE EDITORIAL ROLES

**Editor-in-Chief (EIC):**
Every piece must mobilize action, not just inform. Checks urgency,
agency, and whether the audience can do something with the data.
Owns editorial calendar and release timing.

**Chief Brand, UX & Experience Officer (CBUXO):**
Watches for analytical blindspots — content built only for analytical
people won't reach a general audience. Enforces design system
consistency. Guards emotional arc: recognition before outrage.
AMA's known blindspot: assumes users are analytical. Push back.

**Sr. Data Architect:**
Owns session structure, brief schema, context management, production
pipeline. Flags context limits. Initiates handoff protocol.

**Editorial partner:**
No developer handoff. Build together.

---

## DESIGN SYSTEM (LOCKED)

**File:** alterrell-interactive.css at repo root. Never modify.
All piece-specific styles go in <style> blocks in <head>.

**Typography:**
- Spectral 700 italic — hero headlines only
- DM Serif Display — h2/h3, section headers, pull quotes, stat numbers
- DM Sans 400/500/600 — all body copy and interface
- DM Mono — nav labels, source stamps, methodology ONLY
  (overuse = "computery" — restrict aggressively)

**Core colors (Alterrell Interactive lane):**
- --teal: #0a7c72 / --teal-light: #0d9488
- --orange: #c95f1a
- --paper: #f8f6f1 / --paper-warm: #f0ede6 / --paper-card: #ffffff
- --dark-section: #16141f
- --ink: #111111 / --ink-secondary: #444444 / --ink-muted: #888888

**Obsidian Futures colors (piece-local, not in canonical CSS):**
- Background: #0a0a12
- Card: #111118
- Accent: #E8B923 (gold)
- Body text: rgba(248,246,241,0.88)
- Muted: rgba(248,246,241,0.45)
- Border: rgba(255,255,255,0.08)
- NEVER use purple #1e1040 as background — use #0a0a12

**Layout:**
- --max-editorial: 860px — all editorial pieces
- --max-tool: 680px — interactive tool/calculator sections
- --touch: 44px — minimum touch target everywhere

**Structure rules (locked):**
- Fixed .ai-nav (dark) + .ai-breadcrumb + sticky .ai-tabs
- Tab sections: display:flex; flex-direction:column with
  section-floor nav pushed to bottom via margin-top:auto
  Each tab ends at its nav — no endless scroll between sections
- Journey block (4-item 2×2 grid) on every piece:
  Watch/YouTube · Read/Substack · Explore or All Pieces · $ Back this work/Ko-fi
- Ko-fi icon: $ (not ☕ emoji)
- Dark backgrounds: decorative/stat contexts ONLY
  Never tables, never dense reading copy
- Tables: white or paper background ONLY, never dark
- Footer: dark, Ko-fi button (gold border/text for OF,
  teal for AI lane), ← All Projects, Substack, YouTube,
  collapsible methodology as <details>
- Breadcrumb on every piece (not on hub)
- OG meta tags on every page (see Social Sharing below)
- Screenshot nudge below every chart:
  font-family mono, text-right, muted color
- Share block on final content tab of every piece

**Google Fonts import (copy into every piece <head>):**
```html



```

---

## SOCIAL SHARING (every page)

OG meta tags required on every page:
```html











```

OG images live at interactive.alterrell.com/og/[piece].png
Format: 1200×630px screenshot of hero stat section.
og/ folder exists at repo root with README instructions.
Images must be created manually (screenshot + crop).

Share block on every piece's final content tab:
- Label: SHARE THIS PIECE (DM Mono uppercase)
- Screenshot nudge: italic, muted
- Copy link button (◎ icon, piece accent color)
- Share on X button (✕ icon, Twitter intent URL)
- Ko-fi button ($ icon, filled accent color)
- Substack nudge: "Get early access → alterrell.substack.com"

---

## CURRENT SITE STATE (April 16, 2026)

**Hub (index.html) — LIVE**
Two-lane layout:
Left — Alterrell Interactive (teal):
  Fast Food Sodium (Explore Now, live)
  HBS (Coming Soon)
  Congressional Selfishness (Coming Soon, no link)
  Who Do We Call (Coming Soon)
Right — Obsidian Futures (indigo):
  The Name Was Always Yours / Part 0 (Coming Soon)
  What's in a Name (Explore Now, live)
  What's in a Name: The Living Room (Coming Soon)
  Black Music Royalty (Coming Soon)
Journey block: 4-item 2×2 (Watch/Read/Explore/$ Ko-fi)
Hub card count: 8 pieces shown

**Fast Food Sodium (fast-food-sodium/index.html) — LIVE**
7 tabs. Calculator (19 chains). All content complete.
OG tags added. Share block on Sources tab.
Ko-fi in journey block. Screenshot nudges on charts.
Badge: Explore Now.

**What's in a Name Part 1 (what-in-a-name/index.html) — LIVE**
6 tabs. Three charts (Latifah, Whitney, Mariah).
Obsidian Futures color system. OG tags. Share block.
Known issue: footer still shows ☕ instead of $ — fix in next commit.
Known issue: sources appear in both Tab 6 and footer — fix in next commit.
Part 0 and Part 2 links in footer navigation.

**What's in a Name Part 0 (what-in-a-name/part-0/) — BUILT, NOT DEPLOYED**
5-tab editorial essay. No charts. Copy approved.
Waiting for review before going live.
Footer links back to Part 1.

**What's in a Name Part 2 (what-in-a-name/part-2/) — BUILT, NOT DEPLOYED**
6 tabs. Sitcom character vs. actor name analysis.
Charts use SSA raw data from _data/naming/raw/.
Waiting for review before going live.

---

## REPO STRUCTURE
/ (root)
├── index.html                    — Hub (live)
├── alterrell-interactive.css     — Canonical design system (never modify)
├── _redirects                    — Netlify clean URL routing
├── 404.html                      — Netlify 404 page
├── .gitignore                    — Excludes DS_Store, raw data files
├── og/                           — OG social preview images (1200×630px)
│   └── README.md                 — Instructions for creating images
├── _data/
│   └── naming/
│       ├── README.md
│       ├── raw/                  — SSA yob{year}.txt files (gitignored)
│       ├── [chart].html files    — Built chart assets
│       └── [brief].md files      — Research and tier documents
├── fast-food-sodium/
│   └── index.html                — Sodium piece (live)
├── what-in-a-name/
│   ├── index.html                — Part 1: The Fame Effect (live)
│   ├── part-0/
│   │   └── index.html            — Part 0: The Name Was Always Yours
│   └── part-2/
│       └── index.html            — Part 2: The Living Room
└── congress-salary/              — Placeholder (no index.html yet)

---

## EDITORIAL CALENDAR (April 2026)

| Quarter | Piece | Status | Notes |
|---------|-------|--------|-------|
| Q1 2026 | Hub | ✅ Live | Two-lane layout deployed |
| Q1 2026 | Fast Food Sodium | ✅ Live | Complete |
| Q2 2026 | What's in a Name Part 0 | 🔨 Built | Review before deploy |
| Q2 2026 | What's in a Name Part 1 | ✅ Live | Minor fixes pending |
| Q2 2026 | What's in a Name Part 2 | 🔨 Built | Review before deploy |
| Q2 2026 | HBS Digital Museum | 🔴 Not started | June reunion target |
| Q2 2026 | Concert Tax | 📋 Brief ready | Coachella timing — ship ASAP |
| Q3 2026 | Where Are They? | 📋 Brief ready | Hurricane season Aug–Oct |
| Q3/Q4 2026 | Congress Part 1A | 📋 Brief ready | General election Sept–Oct |
| Q3 2026 | What's in a Name Part 3 | 📋 Planned | After Part 2 ships |
| Evergreen | Black Sitcoms | 📋 Brief ready | No deadline |
| Evergreen | Black Music Royalty | 🔴 Not started | On hub as Coming Soon |
| Evergreen | Musical Queens | 🔴 Not started | Charts done |
| Deferred | FrameShift | 📋 Brief ready | Validation first |
| Deferred | Copaganda | 📋 Brief ready | No political deadline |
| Deferred | Specialist Map | 📋 Brief ready | After HBS |
| Deferred | Black Gay Geography | 📋 Brief ready | AMA decision needed |

**Naming series episode order (locked):**
Part 0 → Part 1 (live) → Part 2 → Part 3
Part 0 must deploy before Part 2 goes live.

---

## MONETIZATION MODEL (locked)

**Model B + D combined:**
- Paid Substack subscribers: 2-week early access
- "Behind the data" methodology post publishes same day
  as early access (how decisions were made, dead ends,
  data almost used)
- Full piece drops free after 2 weeks
- Paid supporters can submit tool/calculator requests

**Support links:**
- Ko-fi: ko-fi.com/alterrell (tipping, no subscription)
- Substack: alterrell.substack.com
  (section URL: alterrell.substack.com/s/alterrell-interactive)

**Slide deck:** Part of every piece's production process.
Doubles as Substack visual asset. Built as HTML,
printed landscape via Chrome (Fit to page, background graphics on).
vw-based units throughout — never fixed px.

---

## BUILD TOOLING

**Claude Code:** Primary build tool. Works on local repo files.
Read reference files before writing any code (always).
Confirm file reads before building.

**GitHub Desktop:** Review diffs before committing.
One commit per logical change set to minimize Netlify deploy fees.

**Session workflow:**
1. Open Claude Code in repo root
2. Paste session prompt from SESSION-PROMPTS.md
3. Claude Code reads brief + reference files
4. Builds/edits locally
5. GitHub Desktop reviews diff
6. Commit + push
7. Netlify deploys ~30 seconds

**Reference files Claude Code always reads:**
- alterrell-interactive.css
- fast-food-sodium/index.html (tab architecture reference)
- Relevant piece brief from _data/

---

## DATA INFRASTRUCTURE

**SSA naming data:**
Location: _data/naming/raw/yob{year}.txt
Format: Name,Gender,Count (one row per name/gender combo)
Coverage: 1880–2022
Gitignored: _data/naming/raw/ and _data/naming/*.csv

**Naming reference files:**
Location: _data/naming/
Key files:
- tier1_master_list_COMPLETE.md — canonical name rankings
- sitcom_names_analysis.md — sitcom character/actor data
- sitcom_actor_crossreference.md — full cast analysis
- complete_tier_system.md — all three naming buckets
- living_single_indexed.html — built chart
- whitney_houston.html — built chart
- mariah_final.html — built chart
- alfonso_carlton_comparison.html — built chart
- jasmine_whitley_comparison.html — built chart

**Chart data rule:** Always read SSA raw files for accurate
counts. Never use approximated data from tier lists alone.
Verify tier list figures against raw files before publishing.

---

## CONTEXT LIMIT PROTOCOL

When approaching session context limit, Sr. Data Architect must:
1. Flag explicitly: "Context limit approaching."
2. Update active PIECE-BRIEF.md with current state,
   decisions made, what's next
3. Confirm handoff note written before closing
4. Never continue building past the warning

---

## PRODUCTION PIPELINE

| Stage | Output | Session type |
|-------|--------|-------------|
| 1. Research & Thesis | PIECE-BRIEF.md created | Prompt 2 |
| 2. Data Audit | Brief data section verified | Prompt 3 |
| 3. HTML Build | index.html built | Prompt 4 / Claude Code |
| 4. Editorial Pass | Copy checked vs DAS | Prompt 5 |
| 5. Slide Deck | [piece]-slides.html | Prompt 6 |
| 6. Deploy & Share | Live URL, OG image, share tested | Prompt 7 |
| 7. Monetization | Substack posts drafted | Prompt 7 |

Target: 3–4 sessions per piece using Claude Code.

---

## OPEN PLATFORM ITEMS (as of April 16, 2026)

**Immediate (before next commit):**
- Fix Part 1 footer: ☕ → $
- Fix Part 1 duplicate sources (Tab 6 vs footer)
- Confirm Part 0 and Part 2 locally before deploying
- Create og/ images for hub, sodium, naming pieces

**Near term:**
- Concert Tax: research pass on artist list,
  then build. Coachella timing window closing April 19.
- HBS: June reunion deadline approaching.
  Architecture exists — needs build session.

**Structural:**
- Viewport-height section fix: all tab sections need
  display:flex / flex-direction:column / margin-top:auto
  on section-floor nav. Applies to sodium and naming pieces.
  Include in next commit.

---

## DO NOT (platform-wide)

- Do not rebuild alterrell-interactive.css
- Do not use DM Mono for body copy or general interface
- Do not put tables or dense reading copy on dark backgrounds
- Do not use ☕ emoji anywhere — use $ for Ko-fi
- Do not use purple #1e1040 as OF page background — use #0a0a12
- Do not build without reading the relevant brief first
- Do not start a new build phase without AMA confirmation
- Do not commit without reviewing diff in GitHub Desktop
- Do not approximate chart data — read SSA raw files
- Do not launch a piece with a Coming Soon hub card
  that has a live link before the page exists
- Do not skip OG meta tags on new pages
- Do not skip share block on new pieces
- Do not skip screenshot nudge on charts
