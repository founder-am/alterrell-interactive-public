# Local Asset Inventory — alterrell-interactive-public

Read-only inventory. Every block below is actual command output, captured in a
single run. No file in the repo was modified by this run except this report.

- Repo: `founder-am/alterrell-interactive-public`
- Working dir: `/Users/alterrellmills/Documents/GitHub/alterrell-interactive-public`
- Branch: `main`
- Run date: 2026-09-01 (report named `existing-assets-2026-09-01.md` per the
  instruction as issued; the filename date and the run date do not match)

---

## STEP 0 — LOCATION CONFIRMED

```
$ pwd
/Users/alterrellmills/Documents/GitHub/alterrell-interactive-public

$ git remote -v
origin	https://github.com/founder-am/alterrell-interactive-public.git (fetch)
origin	https://github.com/founder-am/alterrell-interactive-public.git (push)

$ ls -a
_archive
_data
_design
_tools
_workbench
.
..
.astro
.claude
.DS_Store
.git
.gitignore
404.html
ALTERRELL-INTERACTIVE-BIBLE.md
alterrell-interactive.css
astro.config.mjs
CLAUDE.md
CODE_OF_CONDUCT.md
copaganda
crowning-achievements
dist
LEDGER.md
license
netlify.toml
node_modules
og
old
package-lock.json
package.json
public
README.md
reports
src
tools
tsconfig.json
```

Remote matches `founder-am/alterrell-interactive-public`. Proceeded.

---

## STEP 1 — FULL GAY UNCLES INVENTORY

### 1a. The three search commands, raw output

```
### CMD: find . -path ./node_modules -prune -o -iname "*gay*uncle*" -print
./old/gay-uncles
./reports/gay-uncles-2026-07-27
./reports/2026-07-27-gay-uncles-rebuild.md
./src/content/pieces/gay-uncles.mdx
./old/_workbench/gay-uncles-cards.html
./_data/archive/GAY-UNCLES-FACTPACK.md
./_data/archive/gay-uncles-index-2026-05.html
./_data/archive/gay-uncles-draft-2026-07.html
./_data/pieces/GAY-UNCLES-COPY.md
./_data/pieces/GAY-UNCLES-BRIEF.md
./_data/pieces/GAY-UNCLES-DATA-FACT-PACK.md
./_archive/legacy-2026-08-13/gay-uncles

### CMD: find . -path ./node_modules -prune -o -iname "*gay-uncles*" -print
./old/gay-uncles
./reports/gay-uncles-2026-07-27
./reports/2026-07-27-gay-uncles-rebuild.md
./old/_workbench/gay-uncles-cards.html
./src/content/pieces/gay-uncles.mdx
./_archive/legacy-2026-08-13/gay-uncles
./_data/archive/GAY-UNCLES-FACTPACK.md
./_data/archive/gay-uncles-index-2026-05.html
./_data/archive/gay-uncles-draft-2026-07.html
./_data/pieces/GAY-UNCLES-COPY.md
./_data/pieces/GAY-UNCLES-BRIEF.md
./_data/pieces/GAY-UNCLES-DATA-FACT-PACK.md

### CMD: grep -ril "gay uncles\|gay-uncles" . --exclude-dir=node_modules --exclude-dir=.git
ALTERRELL-INTERACTIVE-BIBLE.md
old/MANIFEST.md
old/DESIGN-DECISION-LOG.md
old/AI-MASTER-RULES.md
old/CARD-INVENTORY.md
old/REPO-AUDIT-2026-07-05.md
old/_workbench/gay-uncles-cards.html
old/gay-uncles/index.new-2026-07-21.html
old/_data/platform/STRUCTURAL-AUDIT-REPORT.md
old/_data/platform/COMPLIANCE-MATRIX.md
old/_design/VISUAL-REFERENCE.html
_tools/scratch/bt-retrofit-read-2026-08-20.cjs
public/_redirects
_data/archive/GAY-UNCLES-FACTPACK.md
_data/archive/big-black-love-BULLETS-2026-04-27.md
_data/archive/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md_ARCHIVED
_data/archive/gay-uncles-index-2026-05.html
_data/archive/hub-index-2026-08-08.html
_data/archive/gay-uncles-draft-2026-07.html
_data/archive/BRAND-BRIEF.md_ARCHIVED
_data/archive/BLACK-GAY-GEOGRAPHY-BRIEF.md_ARCHIVED
_data/platform/PROJECT-CONTEXT.md
_data/platform/CONTENT-TAXONOMY.md
_data/platform/PROJECT-STATUS.md
_data/platform/SESSION-QUEUE-2026-07.md
_data/pieces/GAY-UNCLES-BRIEF.md
_data/platform/ALTERRELL-CLAUDE-DESIGN-HANDOFF.md
_data/pieces/GAY-UNCLES-DATA-FACT-PACK.md
_data/pieces/GAY-UNCLES-COPY.md
_archive/legacy-2026-08-13/hub-index.html
_archive/legacy-2026-08-13/gay-uncles/index.new.html
reports/2026-07-27-bible-consolidation.md
reports/2026-07-27-reference-extraction.md
reports/2026-07-27-gay-uncles-rebuild.md
src/content/pieces/gay-uncles.mdx
src/lib/hub.ts
src/pages/index.astro
```

### 1b. Every file found — size, line count, git tracking

Directories returned by `find` are expanded to their files. The two lists are
merged and de-duplicated.

```
BYTES        LINES    TRACKED   PATH
6148         0        UNTRACKED _archive/legacy-2026-08-13/gay-uncles/.DS_Store
56347        878      tracked   _archive/legacy-2026-08-13/gay-uncles/index.new.html
15065        242      tracked   _archive/legacy-2026-08-13/hub-index.html
8179         98       tracked   _data/archive/big-black-love-BULLETS-2026-04-27.md
16423        298      tracked   _data/archive/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md_ARCHIVED
6488         129      tracked   _data/archive/BLACK-GAY-GEOGRAPHY-BRIEF.md_ARCHIVED
16838        407      tracked   _data/archive/BRAND-BRIEF.md_ARCHIVED
75338        1753     tracked   _data/archive/gay-uncles-draft-2026-07.html
10789        177      tracked   _data/archive/GAY-UNCLES-FACTPACK.md
62584        1444     tracked   _data/archive/gay-uncles-index-2026-05.html
33403        628      tracked   _data/archive/hub-index-2026-08-08.html
12083        243      tracked   _data/pieces/GAY-UNCLES-BRIEF.md
15295        152      tracked   _data/pieces/GAY-UNCLES-COPY.md
11701        226      tracked   _data/pieces/GAY-UNCLES-DATA-FACT-PACK.md
14331        345      tracked   _data/platform/ALTERRELL-CLAUDE-DESIGN-HANDOFF.md
3496         77       tracked   _data/platform/CONTENT-TAXONOMY.md
8201         181      tracked   _data/platform/PROJECT-CONTEXT.md
24051        526      tracked   _data/platform/PROJECT-STATUS.md
8270         143      tracked   _data/platform/SESSION-QUEUE-2026-07.md
6556         142      tracked   _tools/scratch/bt-retrofit-read-2026-08-20.cjs
46612        378      tracked   ALTERRELL-INTERACTIVE-BIBLE.md
5866         99       tracked   old/_data/platform/COMPLIANCE-MATRIX.md
27137        409      tracked   old/_data/platform/STRUCTURAL-AUDIT-REPORT.md
30599        581      tracked   old/_design/VISUAL-REFERENCE.html
5077         164      tracked   old/_workbench/gay-uncles-cards.html
22168        475      tracked   old/AI-MASTER-RULES.md
2027         29       tracked   old/CARD-INVENTORY.md
29600        489      tracked   old/DESIGN-DECISION-LOG.md
70947        1404     tracked   old/gay-uncles/index.new-2026-07-21.html
7472         80       tracked   old/MANIFEST.md
5783         56       tracked   old/REPO-AUDIT-2026-07-05.md
2085         41       tracked   public/_redirects
6113         68       tracked   reports/2026-07-27-bible-consolidation.md
9600         177      tracked   reports/2026-07-27-gay-uncles-rebuild.md
21524        101      tracked   reports/2026-07-27-reference-extraction.md
293835       1030     tracked   reports/gay-uncles-2026-07-27/tab-data-1280.png
228653       752      tracked   reports/gay-uncles-2026-07-27/tab-data-390.png
256138       850      tracked   reports/gay-uncles-2026-07-27/tab-hold-ground-1280.png
212408       649      tracked   reports/gay-uncles-2026-07-27/tab-hold-ground-390.png
205449       885      tracked   reports/gay-uncles-2026-07-27/tab-map-1280.png
140338       382      tracked   reports/gay-uncles-2026-07-27/tab-map-390.png
268275       974      tracked   reports/gay-uncles-2026-07-27/tab-my-story-1280.png
222545       797      tracked   reports/gay-uncles-2026-07-27/tab-my-story-390.png
322953       1081     tracked   reports/gay-uncles-2026-07-27/tab-overview-1280.png
244043       759      tracked   reports/gay-uncles-2026-07-27/tab-overview-390.png
118105       365      tracked   reports/gay-uncles-2026-07-27/tab-share-1280.png
80466        180      tracked   reports/gay-uncles-2026-07-27/tab-share-390.png
182106       710      tracked   reports/gay-uncles-2026-07-27/tab-sources-1280.png
144086       581      tracked   reports/gay-uncles-2026-07-27/tab-sources-390.png
262384       1347     tracked   reports/gay-uncles-2026-07-27/tab-supporting-us-1280.png
211292       768      tracked   reports/gay-uncles-2026-07-27/tab-supporting-us-390.png
21921        303      tracked   src/content/pieces/gay-uncles.mdx
4019         102      tracked   src/lib/hub.ts
7622         167      tracked   src/pages/index.astro

TOTAL FILES: 54
```

**One untracked file:** `_archive/legacy-2026-08-13/gay-uncles/.DS_Store`
(6148 bytes, macOS metadata). Every other gay-uncles file on disk is tracked by
git. Nothing is hiding in a gitignored path.

`wc -l` reports 0 lines for `.DS_Store` and non-meaningful line counts for the
`.png` screenshots in `reports/gay-uncles-2026-07-27/` — those are binary files
and the line count is a byte-pattern artifact, not content.

---

## STEP 2 — THE ARCHIVE CARDS, EXTRACTED

Source: `_archive/legacy-2026-08-13/gay-uncles/index.new.html` (56347 bytes, 878 lines).
Parsed with Python `html.parser`, in document order, across all three carousels.

```
CARD 1  (line 135, carousel: "Overview data cards")
  variant class : card--a
  title         : Where people found their person
  label         : Overview · O-1
  stat          : ~100
  source        : TikTok @alterrell · May 2026

CARD 2  (line 150, carousel: "Overview data cards")
  variant class : card--d
  title         : (none)
  label         : Overview · O-2
  stat          : (none)
  source        : Williams Institute, UCLA · March 2021

CARD 3  (line 248, carousel: "The Map data cards")
  variant class : card--b
  title         : Poll responses by city
  label         : The Map · M-1 · 1 of 3
  stat          : (none)
  source        : TikTok @alterrell · May 2026 · Not a representative sample

CARD 4  (line 281, carousel: "The Map data cards")
  variant class : card--b
  title         : Poll responses by city
  label         : The Map · M-1 · 2 of 3
  stat          : (none)
  source        : TikTok @alterrell · May 2026 · Not a representative sample

CARD 5  (line 314, carousel: "The Map data cards")
  variant class : card--b
  title         : Poll responses by city
  label         : The Map · M-1 · 3 of 3
  stat          : (none)
  source        : TikTok @alterrell · May 2026 · 15+ additional cities in full tally

CARD 6  (line 337, carousel: "The Map data cards")
  variant class : card--d
  title         : Gay population, by the numbers
  label         : The Map · M-2
  stat          : (none)
  source        : Williams Institute, UCLA · March 2021

CARD 7  (line 362, carousel: "The Map data cards")
  variant class : card--d
  title         : Black population, by the numbers
  label         : The Map · M-3
  stat          : (none)
  source        : Census ACS 2019-2023 · city-level Black population share

CARD 8  (line 427, carousel: "The Data cards")
  variant class : card--b
  title         : Black-white BMI gap, by state
  label         : The Data · W-1 · 1 of 2
  stat          : (none)
  source        : CDC BRFSS 2022-2024 · self-reported BMI ≥30, state-level

CARD 9  (line 460, carousel: "The Data cards")
  variant class : card--b
  title         : Black-white BMI gap, by state
  label         : The Data · W-1 · 2 of 2
  stat          : (none)
  source        : CDC BRFSS 2022-2024 · self-reported BMI ≥30, state-level

CARD 10  (line 488, carousel: "The Data cards")
  variant class : card--b
  title         : Black median household income
  label         : The Data · W-2 · 1 of 2
  stat          : (none)
  source        : Census ACS 2019-2023 5-Yr Estimates via Neilsberg Research

CARD 11  (line 516, carousel: "The Data cards")
  variant class : card--b
  title         : Black median household income
  label         : The Data · W-2 · 2 of 2
  stat          : (none)
  source        : [AMA — W-2 EDITORIAL LINE]

TOTAL carousel__card ELEMENTS FOUND: 11
```

---

## STEP 3 — THE BAR DATA, EXTRACTED

### 3a. `carousel__bar-row` label/value pairs, grouped by carousel

```
CAROUSEL: "Overview data cards" (line 129) — 0 bar rows
  (no carousel__bar-row elements in this carousel)

CAROUSEL: "The Map data cards" (line 242) — 10 bar rows
  Atlanta  |  16
  Chicago  |  15
  Houston  |  12
  DC / DMV  |  10
  NYC / Bklyn  |  10
  Philadelphia  |  5
  Detroit  |  5
  Los Angeles  |  4
  New Orleans  |  2
  Oakland  |  2

CAROUSEL: "The Data cards" (line 421) — 14 bar rows
  DC  |  +22
  California  |  +12
  Georgia  |  +11
  Texas  |  +10
  Illinois  |  +10
  Michigan  |  +8
  New York  |  +7
  NYC  |  $60.7k
  DC  |  $60.1k
  Los Angeles  |  $52.6k
  US median  |  $53.4k
  Atlanta  |  $47.9k
  Houston  |  $46.2k
  Chicago  |  $43.7k

TOTAL carousel__bar-row COUNT: 24
```

### 3b. The same 24 rows, attributed to the card each sits in

```
  -- rows inside CARD 3 --
     Atlanta  |  16
     Chicago  |  15
     Houston  |  12
     DC / DMV  |  10
  -- rows inside CARD 4 --
     NYC / Bklyn  |  10
     Philadelphia  |  5
     Detroit  |  5
     Los Angeles  |  4
  -- rows inside CARD 5 --
     New Orleans  |  2
     Oakland  |  2
  -- rows inside CARD 8 --
     DC  |  +22
     California  |  +12
     Georgia  |  +11
     Texas  |  +10
  -- rows inside CARD 9 --
     Illinois  |  +10
     Michigan  |  +8
     New York  |  +7
  -- rows inside CARD 10 --
     NYC  |  $60.7k
     DC  |  $60.1k
     Los Angeles  |  $52.6k
  -- rows inside CARD 11 --
     US median  |  $53.4k
     Atlanta  |  $47.9k
     Houston  |  $46.2k
     Chicago  |  $43.7k

  (rows attributed to cards: 24)
```

### 3c. Every `carousel__compare-cell` as val | desc

```
CAROUSEL: "Overview data cards"
  706k  |  NYC metro LGBT adults (4.5%) · fewer poll responses
  194k  |  ATL metro LGBT adults (4.6%) · more poll responses

CAROUSEL: "The Map data cards"
  706k  |  NYC metro LGBT adults
  194k  |  ATL metro LGBT adults
  77%  |  Detroit Black population share
  47%  |  Atlanta Black population share

TOTAL carousel__compare-cell COUNT: 6
```

---

## STEP 4 — WHAT THE PORT DROPPED

Archive: `_archive/legacy-2026-08-13/gay-uncles/index.new.html`
Port: `src/content/pieces/gay-uncles.mdx` (21921 bytes, 303 lines)

```
### A. [AMA — ...] placeholders in ARCHIVE (_archive/legacy-2026-08-13/gay-uncles/index.new.html)
  line 127   [AMA — Section headline]
  line 165   [AMA — O-2 EDITORIAL LINE]
  line 219   [AMA — Section headline]
  line 240   [AMA — Section headline]
  line 354   [AMA — M-2 EDITORIAL LINE]
  line 379   [AMA — M-3 EDITORIAL LINE]
  line 419   [AMA — Section headline]
  line 544   [AMA — W-2 EDITORIAL LINE]
  line 664   [AMA — Share to Social intro, 1-2 sentences]
  COUNT A: 9

### B. [AMA — ...] placeholders in MDX (src/content/pieces/gay-uncles.mdx)
  line 42    [AMA — …]
  line 64    [AMA — Section headline]
  line 73    [AMA — O-2 EDITORIAL LINE]
  line 101   [AMA — Section headline]
  line 116   [AMA — Section headline]
  line 127   [AMA — M-2 EDITORIAL LINE]
  line 137   [AMA — M-3 EDITORIAL LINE]
  line 162   [AMA — Section headline]
  line 268   [AMA — Share to Social intro, 1-2 sentences]
  COUNT B: 9

### IN A BUT NOT IN B
  [AMA — W-2 EDITORIAL LINE]

### BLOCK COUNTS
  carousel__card blocks in archive : 11
  ai-metric blocks in .mdx         : 27
  --- ai-metric occurrences in .mdx ---
  50:                                     onto .ai-metrics / .ai-metric.
  66:<div class="ai-metrics">
  67:  <div class="ai-metric">
  68:    <div class="ai-metric-num ai-metric-num--teal">~100</div>
  69:    <div class="ai-metric-label"><strong>Where people found their person.</strong> ~100 people told us where they found their person, 25+ cities represented.</div>
  70:    <div class="ai-metric-sub">TikTok, @alterrell, May 2026 — community poll, not a representative sample</div>
  72:  <div class="ai-metric">
  73:    <div class="ai-metric-num">[AMA — O-2 EDITORIAL LINE]</div>
  74:    <div class="ai-metric-label">Second overview card. The archived file carries the placeholder, not a line.</div>
  75:    <div class="ai-metric-sub">Awaiting AMA</div>
  120:<div class="ai-metrics">
  121:  <div class="ai-metric">
  122:    <div class="ai-metric-num">[[FIGURE NEEDS SOURCE]]</div>
  123:    <div class="ai-metric-label"><strong>Gay population, by the numbers.</strong> NYC is 3.6x larger. NYC got fewer responses.</div>
  124:    <div class="ai-metric-sub">The multiple is not attached to a number in any source line on the archived piece</div>
  126:  <div class="ai-metric">
  127:    <div class="ai-metric-num">[AMA — M-2 EDITORIAL LINE]</div>
  128:    <div class="ai-metric-label">Editorial line for the gay-population card. The archived file carries the placeholder, not a line.</div>
  129:    <div class="ai-metric-sub">Awaiting AMA</div>
  131:  <div class="ai-metric">
  132:    <div class="ai-metric-num ai-metric-num--teal">Detroit</div>
  133:    <div class="ai-metric-label"><strong>Black population, by the numbers.</strong> Detroit is more Black. Atlanta got more responses.</div>
  134:    <div class="ai-metric-sub">Black population share by city: Census ACS 2019–2023</div>
  136:  <div class="ai-metric">
  137:    <div class="ai-metric-num">[AMA — M-3 EDITORIAL LINE]</div>
  138:    <div class="ai-metric-label">Editorial line for the Black-population card. The archived file carries the placeholder, not a line.</div>
  139:    <div class="ai-metric-sub">Awaiting AMA</div>
```

```
### PRECISE BLOCK COUNTS
  archive: <article class="carousel__card ...">  = 11
  mdx:     <div class="ai-metric">               = 6
  mdx:     <div class="ai-metrics"> wrappers      = 2
  (the raw 'grep -c ai-metric' count of 27 includes ai-metric-num / -label / -sub child lines)

### OTHER ARCHIVE DATA vs MDX
  archive carousel__bar-row      = 24
  mdx     bar-row / bar markup   = 0
  archive carousel__compare-cell = 6
  mdx     compare-cell           = 0

### [[FIGURE NEEDS SOURCE]] markers in mdx
  122:    <div class="ai-metric-num">[[FIGURE NEEDS SOURCE]]</div>

### placeholder present in B but not A
  [AMA — …]
```

### What the numbers actually say

- **Placeholders:** 9 in the archive, 9 in the `.mdx` — but they are not the
  same nine. `[AMA — W-2 EDITORIAL LINE]` (archive line 544) has no counterpart
  in the `.mdx`. The `.mdx` adds `[AMA — …]` at line 42, which does not exist in
  the archive. The W-2 card also carried the placeholder in its
  `carousel__card-source` slot (card 11), so the port dropped both the editorial
  line and the unsourced-source flag for that card.
- **Cards:** 11 `carousel__card` blocks in the archive → 6 `ai-metric` blocks in
  the `.mdx`. Five cards did not survive the port. (The raw `grep -c ai-metric`
  count of 27 counts child element lines — `ai-metric-num`, `ai-metric-label`,
  `ai-metric-sub` — not blocks.)
- **Bar data:** 24 `carousel__bar-row` pairs in the archive → **0** in the
  `.mdx`. The entire bar dataset is absent from the port: poll responses by city
  (10 rows), Black-white BMI gap by state (7 rows), Black median household
  income by city (7 rows).
- **Compare cells:** 6 in the archive → **0** in the `.mdx`. The NYC/ATL
  comparison and the Detroit/Atlanta comparison exist only as prose in the port.
- The `.mdx` carries one `[[FIGURE NEEDS SOURCE]]` marker at line 122, on the
  "Gay population, by the numbers" metric — the 3.6x multiple has no source line
  behind it in the archived piece.

---

## STEP 5 — THE SAME SWEEP FOR EVERY OTHER PIECE

### 5a. Full listing of `_archive/`, `_workbench/`, `_data/`

```
### DIRECTORY: _archive
  6148       _archive/legacy-2026-08-13/concert-tax/.DS_Store
  182482     _archive/legacy-2026-08-13/concert-tax/assets/chart-bubble.png
  186272     _archive/legacy-2026-08-13/concert-tax/assets/chart-historical.png
  149652     _archive/legacy-2026-08-13/concert-tax/index.html
  9815       _archive/legacy-2026-08-13/concert-tax/tab1-card2-comparison.html
  8495       _archive/legacy-2026-08-13/concert-tax/tab1-card3-stacked-bar.html
  8281       _archive/legacy-2026-08-13/concert-tax/tab1-card4a-cohort-rap.html
  8269       _archive/legacy-2026-08-13/concert-tax/tab1-card4b-cohort-pop.html
  9491       _archive/legacy-2026-08-13/concert-tax/tab2-card-optionA-stadium-production-v3.html
  6148       _archive/legacy-2026-08-13/fast-food-sodium/.DS_Store
  107420     _archive/legacy-2026-08-13/fast-food-sodium/index.html
  6148       _archive/legacy-2026-08-13/gay-uncles/.DS_Store
  56347      _archive/legacy-2026-08-13/gay-uncles/index.new.html
  15065      _archive/legacy-2026-08-13/hub-index.html
  6148       _archive/legacy-2026-08-13/naming/.DS_Store
  13472      _archive/legacy-2026-08-13/naming/index.html
  6148       _archive/legacy-2026-08-13/naming/part-0/.DS_Store
  35619      _archive/legacy-2026-08-13/naming/part-0/index.html
  6148       _archive/legacy-2026-08-13/naming/part-1/.DS_Store
  56416      _archive/legacy-2026-08-13/naming/part-1/index.html
  6148       _archive/legacy-2026-08-13/naming/part-2/.DS_Store
  54708      _archive/legacy-2026-08-13/naming/part-2/index.html
  46531      _archive/legacy-2026-08-13/naming/part-3/index.html
  23336      _archive/legacy-2026-08-13/piece-template.html
  1595       _archive/legacy-2026-08-13/README-tuner-layer.md
  6111       _archive/legacy-2026-08-13/scratch-dark.astro
  1862       _archive/legacy-2026-08-13/scratch-min.astro
  10547      _archive/legacy-2026-08-13/scratch.astro
  1252       _archive/legacy-2026-08-13/superseded-rest-slug-route.astro
  384550     _archive/legacy-2026-08-13/tuner-v3.html
  6148       _archive/legacy-2026-08-13/wheres-beyonce/.DS_Store
  50770      _archive/legacy-2026-08-13/wheres-beyonce/index.html
  66552      _archive/legacy-2026-08-19/alterrell-interactive-root-2026-08-13.css
  13591      _archive/legacy-2026-08-19/Piece.astro
  7183       _archive/legacy-2026-08-19/PieceLayout.astro
  FILE COUNT: 35

### DIRECTORY: _workbench
  8429       _workbench/back-in-my-day-cards.html
  23692      _workbench/beyonce-cards.html
  15442      _workbench/btu-web-map.html
  17625      _workbench/carousel-demo.html
  FILE COUNT: 4

### DIRECTORY: _data
  10244      _data/.DS_Store
  29536      _data/archive/american-diet-evolution.html
  18963      _data/archive/american-food-evolution.html
  8179       _data/archive/big-black-love-BULLETS-2026-04-27.md
  16423      _data/archive/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md_ARCHIVED
  6488       _data/archive/BLACK-GAY-GEOGRAPHY-BRIEF.md_ARCHIVED
  4595       _data/archive/BLACK-GRADUATES-BRIEF.md_ARCHIVED
  3438       _data/archive/BLACK-SITCOMS-BRIEF.md_ARCHIVED
  65147      _data/archive/BLACK-TELEVISION-UNIVERSE-BRIEF.md_ARCHIVED
  16838      _data/archive/BRAND-BRIEF.md_ARCHIVED
  10690      _data/archive/CONCERT-TAX-BRIEF.md_ARCHIVED
  29103      _data/archive/concert-tax-COPY-DRAFT-2026-04-27.md
  35480      _data/archive/CONCERT-TAX-FACTPACK.md
  150790     _data/archive/concert-tax-index-2026-08-08.html
  70582      _data/archive/concert-tax-index-v2.html
  68777      _data/archive/concert-tax-index.html
  62937      _data/archive/concet-index-old.html
  15166      _data/archive/CONGRESS-BRIEF.md_ARCHIVED
  56240      _data/archive/COPAGANDA-PIECE-BRIEF.md_ARCHIVED
  37079      _data/archive/food-by-food-evolution.html
  75338      _data/archive/gay-uncles-draft-2026-07.html
  10789      _data/archive/GAY-UNCLES-FACTPACK.md
  62584      _data/archive/gay-uncles-index-2026-05.html
  2073       _data/archive/HBS-BRIEF.md_ARCHIVED
  33403      _data/archive/hub-index-2026-08-08.html
  5282       _data/archive/naming-part-0-BULLETS-2026-04-27.md
  6017       _data/archive/naming-part-1-BULLETS-2026-04-27.md
  7387       _data/archive/naming-part-2-BULLETS-2026-04-27.md
  22904      _data/archive/NAMING-SERIES-BRIEF.md_ARCHIVED
  27093      _data/archive/pizza-deep-dive-mockup.html
  1704       _data/archive/PLATFORM-BRIEF.md_ARCHIVED
  115395     _data/archive/sodium index.html
  1276       _data/archive/WHERE-ARE-THEY-BRIEF.md_ARCHIVED
  77604      _data/archive/where-are-they.html
  684        _data/config.js
  6148       _data/naming/.DS_Store
  14315      _data/naming/aaliyah_rebuilt.html
  10404      _data/naming/aaliyah.html
  17916      _data/naming/alfonso_carlton_comparison.html
  11643      _data/naming/aspirational_names.html
  12041      _data/naming/athletes_indexed.html
  16867      _data/naming/black_names_gender.html
  10560      _data/naming/colson_whitehead.html
  12043      _data/naming/combined_arab_names_milestones.html
  10914      _data/naming/complete_tier_system.md
  10909      _data/naming/content_calendar.md
  11411      _data/naming/denzel_washington.html
  8076       _data/naming/dual_axis_test.html
  12731      _data/naming/episode_1_musicians_script.md
  11179      _data/naming/episode_2_oscars_script.md
  14377      _data/naming/episode_3_sitcoms_script.md
  11347      _data/naming/episode_4_authors_models_script.md
  12097      _data/naming/episode_5_black_classics_script.md
  6244       _data/naming/female_arab_names.html
  8433       _data/naming/FINAL_STATUS_COMPLETE.md
  10059      _data/naming/halle_berry_oscar.html
  13189      _data/naming/instagram_captions.md
  11559      _data/naming/jamal_black_classic.html
  18103      _data/naming/jasmine_whitley_comparison.html
  13161      _data/naming/kareem_exception.html
  11654      _data/naming/kobe_bryant.html
  19611      _data/naming/living_single_indexed.html
  7269       _data/naming/male_arab_names.html
  14708      _data/naming/mariah_final.html
  20561      _data/naming/mariah_long_v2.html
  14831      _data/naming/mariah_short_v2.html
  10977      _data/naming/MASTER_PRODUCTION_GUIDE.md
  7445       _data/naming/master_trailer_script.md
  11796      _data/naming/maya_angelou.html
  4510       _data/naming/modeling_validation.md
  6857       _data/naming/politics_authors_validation.md
  48154      _data/naming/raw/Name Data for Tableau - Final Rollup (1).csv
  24933      _data/naming/raw/yob1880.txt
  24065      _data/naming/raw/yob1881.txt
  26559      _data/naming/raw/yob1882.txt
  26002      _data/naming/raw/yob1883.txt
  28670      _data/naming/raw/yob1884.txt
  28625      _data/naming/raw/yob1885.txt
  29822      _data/naming/raw/yob1886.txt
  29531      _data/naming/raw/yob1887.txt
  33064      _data/naming/raw/yob1888.txt
  32297      _data/naming/raw/yob1889.txt
  33621      _data/naming/raw/yob1890.txt
  33186      _data/naming/raw/yob1891.txt
  36542      _data/naming/raw/yob1892.txt
  35433      _data/naming/raw/yob1893.txt
  36817      _data/naming/raw/yob1894.txt
  38232      _data/naming/raw/yob1895.txt
  38747      _data/naming/raw/yob1896.txt
  37936      _data/naming/raw/yob1897.txt
  40924      _data/naming/raw/yob1898.txt
  38141      _data/naming/raw/yob1899.txt
  46859      _data/naming/raw/yob1900.txt
  39584      _data/naming/raw/yob1901.txt
  42284      _data/naming/raw/yob1902.txt
  42679      _data/naming/raw/yob1903.txt
  44808      _data/naming/raw/yob1904.txt
  46003      _data/naming/raw/yob1905.txt
  45845      _data/naming/raw/yob1906.txt
  49829      _data/naming/raw/yob1907.txt
  50841      _data/naming/raw/yob1908.txt
  53501      _data/naming/raw/yob1909.txt
  58710      _data/naming/raw/yob1910.txt
  61761      _data/naming/raw/yob1911.txt
  80729      _data/naming/raw/yob1912.txt
  88705      _data/naming/raw/yob1913.txt
  101543     _data/naming/raw/yob1914.txt
  119431     _data/naming/raw/yob1915.txt
  123875     _data/naming/raw/yob1916.txt
  126774     _data/naming/raw/yob1917.txt
  133055     _data/naming/raw/yob1918.txt
  132729     _data/naming/raw/yob1919.txt
  137747     _data/naming/raw/yob1920.txt
  139192     _data/naming/raw/yob1921.txt
  138159     _data/naming/raw/yob1922.txt
  136668     _data/naming/raw/yob1923.txt
  139633     _data/naming/raw/yob1924.txt
  136775     _data/naming/raw/yob1925.txt
  134301     _data/naming/raw/yob1926.txt
  133883     _data/naming/raw/yob1927.txt
  130704     _data/naming/raw/yob1928.txt
  126466     _data/naming/raw/yob1929.txt
  125956     _data/naming/raw/yob1930.txt
  119614     _data/naming/raw/yob1931.txt
  120762     _data/naming/raw/yob1932.txt
  115882     _data/naming/raw/yob1933.txt
  118058     _data/naming/raw/yob1934.txt
  116315     _data/naming/raw/yob1935.txt
  114332     _data/naming/raw/yob1936.txt
  115342     _data/naming/raw/yob1937.txt
  116350     _data/naming/raw/yob1938.txt
  114799     _data/naming/raw/yob1939.txt
  115652     _data/naming/raw/yob1940.txt
  117234     _data/naming/raw/yob1941.txt
  121634     _data/naming/raw/yob1942.txt
  121518     _data/naming/raw/yob1943.txt
  118112     _data/naming/raw/yob1944.txt
  116521     _data/naming/raw/yob1945.txt
  125481     _data/naming/raw/yob1946.txt
  134069     _data/naming/raw/yob1947.txt
  132441     _data/naming/raw/yob1948.txt
  132878     _data/naming/raw/yob1949.txt
  133249     _data/naming/raw/yob1950.txt
  135505     _data/naming/raw/yob1951.txt
  137634     _data/naming/raw/yob1952.txt
  140147     _data/naming/raw/yob1953.txt
  141835     _data/naming/raw/yob1954.txt
  143714     _data/naming/raw/yob1955.txt
  146550     _data/naming/raw/yob1956.txt
  149199     _data/naming/raw/yob1957.txt
  148739     _data/naming/raw/yob1958.txt
  151957     _data/naming/raw/yob1959.txt
  154076     _data/naming/raw/yob1960.txt
  157587     _data/naming/raw/yob1961.txt
  158029     _data/naming/raw/yob1962.txt
  158939     _data/naming/raw/yob1963.txt
  160590     _data/naming/raw/yob1964.txt
  155028     _data/naming/raw/yob1965.txt
  157472     _data/naming/raw/yob1966.txt
  160641     _data/naming/raw/yob1967.txt
  167476     _data/naming/raw/yob1968.txt
  178016     _data/naming/raw/yob1969.txt
  191503     _data/naming/raw/yob1970.txt
  198197     _data/naming/raw/yob1971.txt
  199500     _data/naming/raw/yob1972.txt
  203059     _data/naming/raw/yob1973.txt
  210510     _data/naming/raw/yob1974.txt
  219222     _data/naming/raw/yob1975.txt
  224968     _data/naming/raw/yob1976.txt
  235077     _data/naming/raw/yob1977.txt
  235999     _data/naming/raw/yob1978.txt
  246477     _data/naming/raw/yob1979.txt
  251499     _data/naming/raw/yob1980.txt
  251963     _data/naming/raw/yob1981.txt
  254938     _data/naming/raw/yob1982.txt
  250981     _data/naming/raw/yob1983.txt
  252772     _data/naming/raw/yob1984.txt
  260340     _data/naming/raw/yob1985.txt
  268113     _data/naming/raw/yob1986.txt
  278442     _data/naming/raw/yob1987.txt
  291095     _data/naming/raw/yob1988.txt
  309554     _data/naming/raw/yob1989.txt
  322047     _data/naming/raw/yob1990.txt
  327266     _data/naming/raw/yob1991.txt
  331549     _data/naming/raw/yob1992.txt
  337902     _data/naming/raw/yob1993.txt
  338225     _data/naming/raw/yob1994.txt
  339121     _data/naming/raw/yob1995.txt
  343055     _data/naming/raw/yob1996.txt
  350121     _data/naming/raw/yob1997.txt
  361687     _data/naming/raw/yob1998.txt
  369416     _data/naming/raw/yob1999.txt
  385142     _data/naming/raw/yob2000.txt
  4255303    _data/naming/raw/yob2001-2010.csv
  391188     _data/naming/raw/yob2001.txt
  394851     _data/naming/raw/yob2002.txt
  402678     _data/naming/raw/yob2003.txt
  413510     _data/naming/raw/yob2004.txt
  420237     _data/naming/raw/yob2005.txt
  440432     _data/naming/raw/yob2006.txt
  451414     _data/naming/raw/yob2007.txt
  452928     _data/naming/raw/yob2008.txt
  448109     _data/naming/raw/yob2009.txt
  439726     _data/naming/raw/yob2010.txt
  437259     _data/naming/raw/yob2011.txt
  435190     _data/naming/raw/yob2012.txt
  428954     _data/naming/raw/yob2013.txt
  428419     _data/naming/raw/yob2014.txt
  426342     _data/naming/raw/yob2015.txt
  424685     _data/naming/raw/yob2016.txt
  419101     _data/naming/raw/yob2017.txt
  412825     _data/naming/raw/yob2018.txt
  409569     _data/naming/raw/yob2019.txt
  1235       _data/naming/README.md
  8932       _data/naming/sitcom_actor_crossreference.md
  4056       _data/naming/sitcom_names_analysis.md
  9620       _data/naming/substack_episode_1_complete.md
  9238       _data/naming/substack_episode_2_complete.md
  12320      _data/naming/substack_post_templates.md
  12872      _data/naming/tamika_keisha_decline.html
  9220       _data/naming/three_bucket_framework.md
  10244      _data/naming/three_declines.html
  10727      _data/naming/tier1_master_list_COMPLETE.md
  7799       _data/naming/tier1_master_list.md
  6801       _data/naming/tier2_tier3_summary.md
  11929      _data/naming/tyra_banks.html
  11041      _data/naming/viola_davis.html
  9343       _data/naming/whitney_houston.html
  11813      _data/naming/zora_neale_hurston.html
  6148       _data/pieces/.DS_Store
  34555      _data/pieces/BACK-IN-MY-DAY-RESEARCH-2.md
  17868      _data/pieces/BACK-IN-MY-DAY-RESEARCH.md
  11519      _data/pieces/BTU-ANIMATION-BRIEF.md
  23111      _data/pieces/BTU-DRAMA-BRIEF.md
  20975      _data/pieces/BTU-MINISERIES-BRIEF.md
  13185      _data/pieces/BTU-OPEN-DECISIONS.md
  12100      _data/pieces/BTU-SESSION-STARTERS.md
  36092      _data/pieces/BTU-SITCOM-BRIEF.md
  18202      _data/pieces/BTU-SOAPS-BRIEF.md
  14561      _data/pieces/CROWNING-ACHIEVEMENTS-PIECE-BRIEF.md
  1470       _data/pieces/FOOD-EVOLUTION-BRIEF.md
  7900       _data/pieces/FOREVER-LOVED-FACTPACK.md
  12083      _data/pieces/GAY-UNCLES-BRIEF.md
  15295      _data/pieces/GAY-UNCLES-COPY.md
  11701      _data/pieces/GAY-UNCLES-DATA-FACT-PACK.md
  8737       _data/pieces/HBS-FACTPACK.md
  11746      _data/pieces/NAMING-SERIES-BRIEF.md
  12342      _data/pieces/NAMING-SERIES-FACTPACK.md
  9163       _data/pieces/SODIUM-FACTPACK.md
  14707      _data/pieces/WHERES-BEYONCE-FACTPACK.md
  6148       _data/platform/.DS_Store
  14331      _data/platform/ALTERRELL-CLAUDE-DESIGN-HANDOFF.md
  3496       _data/platform/CONTENT-TAXONOMY.md
  8201       _data/platform/PROJECT-CONTEXT.md
  6163       _data/platform/PROJECT-CONTEXT.txt
  24051      _data/platform/PROJECT-STATUS.md
  11878      _data/platform/self-check.sh
  2058       _data/platform/SESSION-PROMPTS.md
  8270       _data/platform/SESSION-QUEUE-2026-07.md
  10082      _data/platform/VOICE-MASTER.md
  FILE COUNT: 260

```

### 5b. Per-piece asset matrix

```
### PIECE: concert-tax
  -- archive files (_archive/**) --
     6148       _archive/legacy-2026-08-13/concert-tax/.DS_Store
     182482     _archive/legacy-2026-08-13/concert-tax/assets/chart-bubble.png
     186272     _archive/legacy-2026-08-13/concert-tax/assets/chart-historical.png
     149652     _archive/legacy-2026-08-13/concert-tax/index.html
     9815       _archive/legacy-2026-08-13/concert-tax/tab1-card2-comparison.html
     8495       _archive/legacy-2026-08-13/concert-tax/tab1-card3-stacked-bar.html
     8281       _archive/legacy-2026-08-13/concert-tax/tab1-card4a-cohort-rap.html
     8269       _archive/legacy-2026-08-13/concert-tax/tab1-card4b-cohort-pop.html
     9491       _archive/legacy-2026-08-13/concert-tax/tab2-card-optionA-stadium-production-v3.html
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*concert-tax*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     10690      _data/archive/CONCERT-TAX-BRIEF.md_ARCHIVED
     29103      _data/archive/concert-tax-COPY-DRAFT-2026-04-27.md
     35480      _data/archive/CONCERT-TAX-FACTPACK.md
     150790     _data/archive/concert-tax-index-2026-08-08.html
     70582      _data/archive/concert-tax-index-v2.html
     68777      _data/archive/concert-tax-index.html
  -- data directory (_data/<piece>) --
     NONE (_data/concert-tax does not exist)
  -- live src/content/pieces entry --
     -rw-r--r--  1 alterrellmills  staff  27292 Aug 20 19:17 concert-tax.mdx

### PIECE: fast-food-sodium
  -- archive files (_archive/**) --
     6148       _archive/legacy-2026-08-13/fast-food-sodium/.DS_Store
     107420     _archive/legacy-2026-08-13/fast-food-sodium/index.html
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*fast-food-sodium*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     NONE (find _data/pieces _data/archive -iname "*fast-food-sodium*" returned nothing)
  -- data directory (_data/<piece>) --
     NONE (_data/fast-food-sodium does not exist)
  -- live src/content/pieces entry --
     -rw-r--r--  1 alterrellmills  staff  28003 Aug 22 21:44 fast-food-sodium.mdx

### PIECE: naming
  -- archive files (_archive/**) --
     6148       _archive/legacy-2026-08-13/naming/.DS_Store
     13472      _archive/legacy-2026-08-13/naming/index.html
     6148       _archive/legacy-2026-08-13/naming/part-0/.DS_Store
     35619      _archive/legacy-2026-08-13/naming/part-0/index.html
     6148       _archive/legacy-2026-08-13/naming/part-1/.DS_Store
     56416      _archive/legacy-2026-08-13/naming/part-1/index.html
     6148       _archive/legacy-2026-08-13/naming/part-2/.DS_Store
     54708      _archive/legacy-2026-08-13/naming/part-2/index.html
     46531      _archive/legacy-2026-08-13/naming/part-3/index.html
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*naming*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     5282       _data/archive/naming-part-0-BULLETS-2026-04-27.md
     6017       _data/archive/naming-part-1-BULLETS-2026-04-27.md
     7387       _data/archive/naming-part-2-BULLETS-2026-04-27.md
     22904      _data/archive/NAMING-SERIES-BRIEF.md_ARCHIVED
     11746      _data/pieces/NAMING-SERIES-BRIEF.md
     12342      _data/pieces/NAMING-SERIES-FACTPACK.md
  -- data directory (_data/<piece>) --
     EXISTS: _data/naming (194 files, 30192K)
  -- live src/content/pieces entry --
     -rw-r--r--  1 alterrellmills  staff  27596 Aug 26 08:41 naming.mdx

### PIECE: wheres-beyonce
  -- archive files (_archive/**) --
     6148       _archive/legacy-2026-08-13/wheres-beyonce/.DS_Store
     50770      _archive/legacy-2026-08-13/wheres-beyonce/index.html
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*wheres-beyonce*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     14707      _data/pieces/WHERES-BEYONCE-FACTPACK.md
  -- data directory (_data/<piece>) --
     NONE (_data/wheres-beyonce does not exist)
  -- live src/content/pieces entry --
     -rw-r--r--  1 alterrellmills  staff  11233 Aug 16 21:21 wheres-beyonce.mdx

### PIECE: copaganda
  -- archive files (_archive/**) --
     NONE (find _archive -iname "*copaganda*" returned nothing)
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*copaganda*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     56240      _data/archive/COPAGANDA-PIECE-BRIEF.md_ARCHIVED
  -- data directory (_data/<piece>) --
     NONE (_data/copaganda does not exist)
  -- live src/content/pieces entry --
     NONE

### PIECE: btu
  -- archive files (_archive/**) --
     NONE (find _archive -iname "*btu*" returned nothing)
  -- workbench files (_workbench/**) --
     15442      _workbench/btu-web-map.html
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     11519      _data/pieces/BTU-ANIMATION-BRIEF.md
     23111      _data/pieces/BTU-DRAMA-BRIEF.md
     20975      _data/pieces/BTU-MINISERIES-BRIEF.md
     13185      _data/pieces/BTU-OPEN-DECISIONS.md
     12100      _data/pieces/BTU-SESSION-STARTERS.md
     36092      _data/pieces/BTU-SITCOM-BRIEF.md
     18202      _data/pieces/BTU-SOAPS-BRIEF.md
  -- data directory (_data/<piece>) --
     NONE (_data/btu does not exist)
  -- live src/content/pieces entry --
     NONE

### PIECE: black-graduates
  -- archive files (_archive/**) --
     NONE (find _archive -iname "*black-graduates*" returned nothing)
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*black-graduates*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     4595       _data/archive/BLACK-GRADUATES-BRIEF.md_ARCHIVED
  -- data directory (_data/<piece>) --
     NONE (_data/black-graduates does not exist)
  -- live src/content/pieces entry --
     NONE

### PIECE: crowning-achievements
  -- archive files (_archive/**) --
     NONE (find _archive -iname "*crowning-achievements*" returned nothing)
  -- workbench files (_workbench/**) --
     NONE (find _workbench -iname "*crowning-achievements*" returned nothing)
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     14561      _data/pieces/CROWNING-ACHIEVEMENTS-PIECE-BRIEF.md
  -- data directory (_data/<piece>) --
     NONE (_data/crowning-achievements does not exist)
  -- live src/content/pieces entry --
     NONE

### PIECE: back-in-my-day
  -- archive files (_archive/**) --
     NONE (find _archive -iname "*back-in-my-day*" returned nothing)
  -- workbench files (_workbench/**) --
     8429       _workbench/back-in-my-day-cards.html
  -- brief / factpack / copy (_data/pieces + _data/archive) --
     34555      _data/pieces/BACK-IN-MY-DAY-RESEARCH-2.md
     17868      _data/pieces/BACK-IN-MY-DAY-RESEARCH.md
  -- data directory (_data/<piece>) --
     NONE (_data/back-in-my-day does not exist)
  -- live src/content/pieces entry --
     NONE

```

### 5c. Root-level piece directories, and the live content collection

The nine-piece sweep above searches `_archive/`, `_workbench/` and `_data/` only,
as instructed. Two of the named pieces also have working files at the repo root
that the sweep would otherwise miss:

```
### NOTE: root-level piece directories not covered by the _archive/_workbench/_data sweep
  copaganda:
     13330      copaganda/visual-2-producers.html
     17504      copaganda/visual-2a-producer-treemap.html
     9290       copaganda/visual-2b1-decade-totals.html
     7853       copaganda/visual-2b2-decade-by-producer.html
     10098      copaganda/visual-2b3-decade-by-network.html
     10446      copaganda/visual-3.html
     16344      copaganda/visual-4-scale-comparison.html
     17154      copaganda/visual-5-city-budgets.html
  crowning-achievements:
     48330      crowning-achievements/week-1.html
  old/gay-uncles:
     70947      old/gay-uncles/index.new-2026-07-21.html

### src/content/pieces — full listing
  total 240
  drwxr-xr-x  7 alterrellmills  staff    224 Aug 26 08:41 .
  drwxr-xr-x  4 alterrellmills  staff    128 Aug 16 21:21 ..
  -rw-r--r--  1 alterrellmills  staff  27292 Aug 20 19:17 concert-tax.mdx
  -rw-r--r--  1 alterrellmills  staff  28003 Aug 22 21:44 fast-food-sodium.mdx
  -rw-r--r--  1 alterrellmills  staff  21921 Aug 16 21:21 gay-uncles.mdx
  -rw-r--r--  1 alterrellmills  staff  27596 Aug 26 08:41 naming.mdx
  -rw-r--r--  1 alterrellmills  staff  11233 Aug 16 21:21 wheres-beyonce.mdx

### CMD: git log --diff-filter=D --name-only --pretty=format:"%h %ad" --date=short -- "*.html" "*.md" | head -80
337f5f5 2026-08-13
_tools/fixtures/S1-fail.html
_tools/fixtures/S1-pass.html
_tools/fixtures/S2-fail.html
_tools/fixtures/S2-pass.html

7805845 2026-07-27
old/gay-uncles/index.new.html

3ae1390 2026-07-19
_data/pieces/FRAMESHIFT-FACTPACK.md

37e49dd 2026-06-03
_data/platform/VOICE-GUIDE.md

25f6d93 2026-06-01
_data/archive/BLACK-GAY-GEOGRAPHY-BRIEF-v2.md
_data/archive/CONCERT-TAX-BRIEF.md
_data/archive/CONGRESS-BRIEF.md
_data/archive/HBS-BRIEF.md
_data/archive/WHERE-ARE-THEY-BRIEF.md
_data/pieces/BLACK-GAY-GEOGRAPHY-BRIEF.md
_data/pieces/BLACK-GRADUATES-BRIEF.md
_data/pieces/BLACK-SITCOMS-BRIEF.md
_data/pieces/BLACK-TELEVISION-UNIVERSE-BRIEF.md
_data/pieces/CONGRESS-BRIEF.md
_data/pieces/COPAGANDA-PIECE-BRIEF.md
_data/pieces/FRAMESHIFT-BRIEF.md
_data/pieces/NAMING-SERIES-BRIEF.md
_data/platform/BRAND-BRIEF.md
_data/platform/PLATFORM-BRIEF.md

c3846aa 2026-05-26
_data/pieces/piece-template.html
_templates/card-gallery.html
_templates/footer.html
_templates/head.html
_templates/hero.html
_templates/journey-block.html
_templates/methodology.html
_templates/nav.html
_templates/piece-local-css-standard.html
_templates/scripts.html
_templates/share-block.html
_templates/spread-the-word-tab.html
_templates/tab-bar.html
_templates/tab-panel.html
_templates/take-action-tab.html

5bf0385 2026-05-26
_templates/piece-template.html

48bd76c 2026-05-25
_data/pieces/CONGRESS-1A-FACTPACK.md

0ce32ae 2026-05-18
_data/PROJECT-STATUS.md

c1cbf4c 2026-04-27
_data/COPAGANDA-BRIEF.md

bb4cc3f 2026-03-19
PLATFORM-BRIEF.md

a5e7fb8 2026-03-19
HUB-PIECE-BRIEF.md

865ba49 2026-03-19
SESSION-PROMPTS.md

e221632 2026-03-19
SODIUM-PIECE-BRIEF.md

5b9929a 2026-03-19
SPECIALIST-MAP-PIECE-BRIEF.md

978176c 2026-03-18
fast-food-sodium/index.html
```

### Piece-by-piece summary of what exists

| Piece | Archive | Workbench | Brief/Factpack | Data dir | Live `.mdx` |
|---|---|---|---|---|---|
| concert-tax | yes (9 files, incl. 2 PNG charts + 5 card fragments) | no | yes (6 in `_data/archive`) | no | yes (27292 b) |
| fast-food-sodium | yes (index.html, 107420 b) | no | no — but `_data/pieces/SODIUM-FACTPACK.md` (9163 b) exists under a different slug | no | yes (28003 b) |
| naming | yes (index + parts 0–3) | no | yes (6 files) | yes (`_data/naming`, 194 files, ~30 MB) | yes (27596 b) |
| wheres-beyonce | yes (index.html, 50770 b) | no — but `_workbench/beyonce-cards.html` (23692 b) exists under a different slug | yes (factpack) | no | yes (11233 b) |
| copaganda | no | no | yes (`COPAGANDA-PIECE-BRIEF.md_ARCHIVED`, 56240 b) | no | no — 8 visual HTML files at `copaganda/` |
| btu | no | yes (`btu-web-map.html`) | yes (7 briefs, 135184 b total) | no | no |
| black-graduates | no | no | yes (`BLACK-GRADUATES-BRIEF.md_ARCHIVED`, 4595 b) | no | no |
| crowning-achievements | no | no | yes (piece brief, 14561 b) | no | no — `crowning-achievements/week-1.html` at root |
| back-in-my-day | no | yes (`back-in-my-day-cards.html`) | yes (2 research files, 52423 b) | no | no |

Two slug mismatches worth naming: the sodium factpack is `SODIUM-FACTPACK.md`,
not `FAST-FOOD-SODIUM-*`, and the Beyoncé workbench file is `beyonce-cards.html`,
not `wheres-beyonce-*`. A slug-literal search misses both.

Four pieces — copaganda, btu, black-graduates, back-in-my-day — have research or
workbench material but no entry in `src/content/pieces/`. crowning-achievements
has a brief and a built `week-1.html` at the root, also not in the collection.

---

## STEP 6 — REPORT

This file. Written after every step above had run.

