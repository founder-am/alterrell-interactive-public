# READ FIRST — alterrell-interactive-public

# PROJECT STATUS
Updated: 2026-08-22 (regenerated from the tree by measurement)
Repo path: `_data/platform/PROJECT-STATUS.md`

## THIS SUPERSEDES THE 2026-07-05 VERSION, AND WHY

The 07-05 version described the pre-Astro tree. It named live pieces at
`concert-tax/index.html`, `gay-uncles/index.html`, `fast-food-sodium/index.html`
and `wheres-beyonce/index.html`. None of those four paths exists in this repo
today (`find . -maxdepth 2 -name index.html`, run 2026-08-22, returns no such
file at any of them). It also named `alterrell-interactive.css` at the repo
root as "canonical, current"; that file is now a 424-byte shim whose own first
line reads `/* SHIM. Not a stylesheet.`.

This file is a CLAUDE.md UPLOAD GATE item, read fourth by every session in this
repo. A gate item describing a tree that no longer exists starts every session
from a false picture, which is the failure this regeneration exists to end.

## HOW TO READ THIS FILE

Every statement below was measured on 2026-08-22 and names the file or command
it came from. Nothing is carried forward from the 07-05 version, and no prose
is imported from LEDGER.md. Where a statement would need a value that could not
be measured from the tree, it reads UNKNOWN, and every UNKNOWN is listed again
at the end.

This file is internal. It is not reader-facing and no sentence in it ships.

---

## THE TREE, AS IT IS

Astro static site. `astro.config.mjs`: `output: 'static'`, `outDir: './dist'`,
integration `@astrojs/mdx`. `package.json`: astro ^5.18.2, @astrojs/mdx ^4.3.14,
playwright ^1.62.1; scripts are `dev`, `build`, `preview`.

`npm run build` on 2026-08-22 emitted 4 pages, listed by the build itself as:

    /404.html
    /index.html
    /pieces/fast-food-sodium/index.html
    /pieces/concert-tax/index.html

`find dist -type f` returns 11 files: those 4 HTML pages, one bundled
stylesheet `dist/_astro/index.BS8RN6vO.css`, `dist/_redirects`, and the five
files copied from `public/og/`.

### The one template
`src/pages/pieces/[slug].astro`, 235 lines. Its own header states the fixed DOM
order (nav → hero → journey block → tab bar → tab panels → footer) and that it
carries zero CSS rules. Confirmed by grep: the only occurrence of the string
`<style` in the file is at line 15, inside that header comment. It builds one
route per entry in `BUILT_SLUGS`.

### The one stylesheet
`src/styles/alterrell-interactive.css`. Measured by `node _tools/check.js` on
2026-08-22: **437 distinct selectors**. The repo-root
`alterrell-interactive.css` is a 424-byte shim, not a stylesheet; its comment
says it exists so legacy pages that link the root path keep resolving.
29 HTML files in this repo outside `dist/` and `node_modules/` still link that
root path (`grep -rl 'alterrell-interactive.css' --include='*.html'`, count 29).

### Components
`find src/components -type f` returns 7:
Carousel.astro, ConcertBuilder.astro, SectionNav.astro, ShareBlock.astro,
SodiumPicker.astro, TabSection.astro, TicketSplit.astro.

### Data
`src/data/concert-artists.json` (8,944 bytes) and `src/data/sodium-items.json`.

### Redirects
`public/_redirects`. Two live 301s, both to the Astro route:
`/fast-food-sodium` and `/sodium` → `/pieces/fast-food-sodium/`. Catch-all
`/*  /404.html  404`. Four redirect groups are commented out in the file with
their reason written beside them: congress (not built), naming parts (held
until naming ships), `/big-black-love/*` (gay-uncles not migrated).
`netlify.toml` carries `command = "npm run build"`, `publish = "dist"`,
`NODE_VERSION = "20"`, and no catch-all.

---

## WHAT SHIPS, AND WHAT DOES NOT

The list lives in `src/lib/hub.ts` and nowhere else. Measured from that file:

    BUILT_SLUGS   = ['concert-tax', 'fast-food-sodium']
    LINKED_SLUGS  = BUILT_SLUGS        (the file sets them equal)
    EXTRA_CARDS   = []                 (empty)

`src/lib/hub.ts` states the go-live set was ruled by AMA 2026-08-13 and
narrowed by AMA 2026-08-16, and that there are no coming-soon cards on the hub
at all. The build output above confirms it: two piece routes, no others.

`find src/content/pieces -type f` returns 5 `.mdx` files. Three of them build
nothing, because they are in neither list. From each file's own frontmatter
`status:` field:

| .mdx file | frontmatter status | in BUILT_SLUGS | route in dist/ | tabs |
|---|---|---|---|---|
| concert-tax.mdx | `live` | yes | yes | 7 |
| fast-food-sodium.mdx | `live` | yes | yes | 7 |
| gay-uncles.mdx | `coming-soon` | no | no | 8 |
| naming.mdx | `coming-soon` | no | no | 5 |
| wheres-beyonce.mdx | `coming-soon` | no | no | 5 |

Tab counts are `tabs:` entry counts read from each file's frontmatter. The
template reads that list and hardcodes no tab anywhere.

---

## PIECES

Only two statements per piece are made here, and both are measured: what the
frontmatter declares, and what the build emitted. Editorial readiness — voice
passes, open copy slots, what a piece still needs before it is good — is not
derivable from the tree and is UNKNOWN in every row below.

### Concert Tax — "Female Musicians Earn Less But Share More"
BUILT and LINKED. Route `dist/pieces/concert-tax/index.html`.
`src/content/pieces/concert-tax.mdx`, 523 lines / 27,292 bytes,
`status: live`, `category: industry`, `stakes: "Pay equity"`,
`publishDate: 2024-06-01`.
7 tabs, read from frontmatter: Overview · The Data · The Double Standard ·
History · Take Action · Share to Social · Sources.
`node _tools/check.js` read the built page's live tab bar as
`div#piece-tabs`, 7 tabs, labels matching that list exactly.
Carries two interactive components: TicketSplit (the ticket-price slider,
stylesheet section 22) and ConcertBuilder (the three-step picker, section 23,
data from `src/data/concert-artists.json`).
OG image: `public/og/concert-tax.png`, 1200 x 630, 52,081 bytes. Verified
2026-08-22 to resolve 200 image/png at the exact path the built page emits.
Editorial readiness: UNKNOWN.

### Fast Food Sodium — "Fast Food's Hidden Sodium Tax"
BUILT and LINKED. Route `dist/pieces/fast-food-sodium/index.html`.
`src/content/pieces/fast-food-sodium.mdx`, 471 lines / 28,003 bytes,
`status: live`, `category: industry`, `stakes: "Public health"`. No
`publishDate` in frontmatter.
7 tabs: Overview · The System · Systemic Issues · Compare Your Order ·
Best Options · Spread the Word · Sources. "Spread the Word" is the
grandfathered name (Bible TABS-02 names Concert Tax and Sodium as the two
exceptions).
Carries SodiumPicker (stylesheet section 21) on the Compare Your Order tab.
Nine `.ai-table` tables (`grep -c '<table class="ai-table">'`), at mdx lines
195, 237, 312, 327, 341, 355, 372, 386 and 403.
OG image: `public/og/fast-food-sodium.png`, 1760 x 674, 189,587 bytes — not
1200 x 630. See the OG section below.
Editorial readiness: UNKNOWN.

### Advice From Your Thick Gay Uncles
NOT BUILT. `src/content/pieces/gay-uncles.mdx` exists (303 lines / 21,921
bytes, `status: coming-soon`, `category: culture`, 8 tabs including
"Hold Your Ground") and is in neither `BUILT_SLUGS` nor `LINKED_SLUGS`, so
nothing builds it and nothing links it. There is no `gay-uncles/index.html`
anywhere in the repo. `public/_redirects` holds `/big-black-love/*` commented
out with the reason "gay-uncles has not migrated to Astro and is not in dist".
Note against Bible TABS-05, which says Gay Uncles ships exactly 7 tabs with
"Hold Your Ground" cut: this .mdx carries 8 tabs and "Hold Your Ground" is one
of them. It is not built, so nothing ships in violation today.
Remaining work: UNKNOWN.

### That Name Is So Ghetto (naming)
NOT BUILT. `src/content/pieces/naming.mdx` exists (320 lines / 27,596 bytes,
`status: coming-soon`, `category: culture`, `format: series`, 5 tabs: The
Series, Part 0, Part 1, Part 2, Sources). In neither list. `src/lib/hub.ts`
records that naming came off the live list on 2026-08-16.
Three naming redirect lines in `public/_redirects` are commented out, held
until it ships; the file states the target will then be `/pieces/naming/`.
Source material at `_data/naming/` — 260 files under `_data/` in total, of
which the `_data/naming/raw/` SSA year files are the bulk.
An OG image `public/og/naming.png` exists (1768 x 752) for a piece with no
built route.
Remaining work: UNKNOWN.

### Where's Beyoncé?
NOT BUILT. `src/content/pieces/wheres-beyonce.mdx` exists (218 lines / 11,233
bytes, `status: coming-soon`, 5 tabs). In neither list. Frontmatter carries no
`category` and no `stakes`; `src/lib/hub.ts` records that this is deliberate,
because the archived file names neither and nothing is invented.
Remaining work, and whether the Q3 hurricane-season target still stands:
UNKNOWN.

### Everything else the 07-05 version listed as a piece
BTU, Copaganda, Crowning Achievements, Back in My Day, Congress, HBS: none has
an `.mdx` in `src/content/pieces`, so none has a route and none can ship
without one being written. What exists in the tree for them, measured:

    _data/pieces/BTU-*.md                       7 files: 5 *-BRIEF.md
                                                (ANIMATION, DRAMA, MINISERIES,
                                                SITCOM, SOAPS) plus
                                                BTU-OPEN-DECISIONS.md and
                                                BTU-SESSION-STARTERS.md
    _data/pieces/CROWNING-ACHIEVEMENTS-PIECE-BRIEF.md
    _data/pieces/BACK-IN-MY-DAY-RESEARCH.md and -2.md
    copaganda/                                  8 files, 102,019 bytes
    crowning-achievements/                      1 file,  48,330 bytes

The 07-05 version listed BTU research and the Copaganda brief as NOT COMMITTED
recovery items. Both directories and both brief sets are now present in the
repo. Whether their CONTENT is the complete research the 07-05 version was
waiting for: UNKNOWN — that is a comparison against session records this file
cannot read.
`CROWNING-ACHIEVEMENTS-FACTS.md`, which the 07-05 version flagged as a
high-priority 404, is still absent: `find . -name 'CROWNING-ACHIEVEMENTS-FACTS*'`
returns nothing.

---

## THE CHECKER

`_tools/check.js` is the only thing that makes a rule a rule (CLAUDE.md,
"Rules and exceptions"). Its own header says it is READ ONLY over piece files
and that its only writes are screenshots and a JSON dump.

Run 2026-08-22, `node _tools/check.js --json <tmp> --no-shots`:

    Rule hash        76477b4978c33b8cc86c7cfad093ad115bfedf707f456b278894c2dbb662868d
    FAIL cells       0
    D1 duplicates    0
    Chromium         151.0.7922.34  (pinned 151.0.7922.34)
    Playwright       1.62.0
    Selectors        437
    Widths           360, 768, 1280
    Classified       PIECE (2): concert-tax, fast-food-sodium — all 15 rules
                     PAGE  (2): 404.html, index.html — geometry only

Rule keys present in the JSON it wrote: structure `S3 S4 S5 S6 S7 S8 S9 S10
S11`; per-width `geometry` plus `g5`, `g6`; `d1`; and content rule `T7b`,
which reported "5 content files clean" — T7b scans all five `.mdx`, including
the three that build nothing.

The rule hash is a SHA-256 over the block between the `RULE DEFINITIONS BEGIN`
and `END` markers in check.js. It is the same value carried in
`_tools/results.json`, so the current tree is being scored by the same rule
text as the last recorded run.

Shots go to `../alterrell-hq/reports/shots/` unless `--shots` overrides it.
They are deliberately not in this repo.

---

## OG IMAGES

`public/og/`, dimensions read from each PNG's IHDR header on 2026-08-22:

| file | dimensions | bytes | piece has a built route |
|---|---|---|---|
| concert-tax.png | 1200 x 630 | 52,081 | yes |
| fast-food-sodium.png | 1760 x 674 | 189,587 | yes |
| hub.png | 1982 x 1232 | 247,125 | n/a — the hub |
| naming.png | 1768 x 752 | 178,322 | no |

One of the four is 1200 x 630. The template emits
`og:image = https://interactive.alterrell.com/og/{slug}.png` for every piece
from one line, `[slug].astro` line 67, so a piece without a matching file in
`public/og/` emits a URL that 404s. Both built pieces have a file.

The three non-1200x630 files are NOT re-rendered: re-rendering changes what
every existing share of those URLs renders as. That is an AMA call and is
recorded here as open, not as a defect to fix unasked.

---

## TOOLS

`tools/ai-card-studio.html` is a 300 x 280 carousel-card studio, not a general
export tool: it calls `html2canvas(cardEl, { width:300, height:280, scale:1 })`
at line 1391 and builds its offscreen wrapper to match at line 1382. It cannot
emit any other size. CLAUDE.md's gate item 6 describes it as the card export
tool "use only when generating share-card PNGs" — true for 300 x 280 cards,
and it is the wrong tool for an OG image.

`_tools/scratch/` held 38 files at the start of 2026-08-22 and holds 43 at the
end of it — per-session probe and shot scripts, dated in their filenames. They
are working instruments, not part of the build; nothing in `src/` or `dist/`
imports from that directory.

`_data/platform/self-check.sh` exists at that path.

---

## THE PRE-ASTRO TREE THAT IS STILL HERE

These directories predate the migration and are still in the repo. File counts
and byte totals measured with `find … -type f` on 2026-08-22. None of them is
built by Astro; `dist/` contains nothing from any of them.

    _archive/                  35 files    1,564,868 bytes
    _data/                    260 files   32,097,764 bytes
    _design/                    1 file       69,749 bytes  (CHART-LIBRARY-REFERENCE.html)
    _workbench/                 4 files       65,188 bytes
    old/                       41 files      652,472 bytes
    reports/                   29 files    3,551,983 bytes
    og/                         4 files      615,503 bytes  (NOT public/og — see below)
    copaganda/                  8 files      102,019 bytes
    crowning-achievements/      1 file        48,330 bytes
    tools/                      2 files       67,321 bytes
    404.html                                   3,344 bytes  (root; dist/404.html is the built one)
    alterrell-interactive.css                    424 bytes  (the shim)

Two of these are worth naming as live hazards rather than clutter:

1. `og/` at the repo root is a SECOND, DIFFERENT set of og images. `ls` on
   both, 2026-08-22: root `og/` holds hub.png, naming.png, sodium.png and
   README.md; `public/og/` holds concert-tax.png, fast-food-sodium.png,
   hub.png, naming.png and README.md. They are not copies of each other —
   root has `sodium.png` where public has `fast-food-sodium.png`, and root
   has no concert-tax image at all. Only `public/og/` is copied into `dist/`.
   Anything editing "the og images" can edit the wrong directory and see no
   effect on the built site.
2. `alterrell-interactive.css` at the root is the shim. CLAUDE.md gate item 3
   already says the root copy is pre-migration, and the shim's own comment says
   never add a rule to it. 29 legacy HTML files still link it.

Whether any of these directories should be demoted or removed: UNKNOWN, and
not proposed here. CLAUDE.md's "Writes" rule forbids moving or deleting
without explicit instruction, and requires demotions be proposed as a
commented-out script for review.

---

## GIT

Branch `main`. 190 commits, first dated 2026-03-06 ("Initial commit"), most
recent 222c20a on 2026-08-21. Working tree was clean at the start of the
2026-08-22 session (`git --no-pager status --short` printed nothing).

---

## DEPLOY

Netlify, from `netlify.toml`: build `npm run build`, publish `dist`, Node 20.
Whether the site is currently deployed, when it last deployed, and what
`interactive.alterrell.com` serves right now: UNKNOWN. Nothing in this repo
records deploy state, and this file will not guess at it.

---

## UNKNOWNS, LISTED

Every statement above that could not be measured from the tree:

 1. Editorial readiness of Concert Tax — open voice slots, unfinished copy.
 2. Editorial readiness of Fast Food Sodium — same.
 3. Remaining work on gay-uncles.mdx before it could enter BUILT_SLUGS.
 4. Remaining work on naming.mdx before it could enter BUILT_SLUGS.
 5. Remaining work on wheres-beyonce.mdx, and whether its Q3 target stands.
 6. Whether the committed BTU briefs and the copaganda/ directory are the
    complete research the 07-05 version was waiting to recover, or partial.
 7. Whether `og/` at the repo root, `old/`, `reports/`, `_workbench/` and the
    other pre-Astro directories should be demoted, and to where.
 8. Current deploy state: whether the site is live, when it last deployed, and
    what the production host serves.
 9. Whether the three non-1200x630 og images should be re-rendered.
10. Which of the 29 legacy HTML files linking the root CSS shim are still
    reachable by a reader, and which are dead files inside `old/` or
    `_archive/`.

## NEXT STALENESS CHECK

This file is a CLAUDE.md gate item, so it is read at the start of every
session in this repo. It goes stale the moment `BUILT_SLUGS`, the dist file
list, or the rule hash moves. No calendar date is proposed here; the three
values above are the trigger.
