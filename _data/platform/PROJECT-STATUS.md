# READ FIRST — alterrell-interactive-public

# PROJECT STATUS
Updated: 2026-08-27 (regenerated from the tree by measurement)
Repo path: `_data/platform/PROJECT-STATUS.md`

## THIS SUPERSEDES THE 2026-08-22 VERSION, AND WHY

The 08-22 version's own staleness trigger named three values: `BUILT_SLUGS`,
the dist file list, and the rule hash. Two of the three moved.

    dist file list   11 files -> 17 files, and 4 HTML routes -> 8
    rule hash        76477b49…868d, UNCHANGED
    BUILT_SLUGS      unchanged: ['concert-tax', 'fast-food-sodium']

The trigger fired on the dist list. Four commits landed 2026-08-27 (`fa1dbae`,
`1363ba8`, `b869d3f`, `4cce108`) which added the naming series as static
passthrough files under `public/`, added nine live redirect rules, and added a
hub card through `EXTRA_CARDS`. The 08-22 version describes a tree with no
`public/naming/`, no `public/alterrell-interactive.css`, two live redirects and
a clean checker run. All four of those statements are now false.

## HOW TO READ THIS FILE

Every statement below was measured on 2026-08-27 and names the file or command
it came from. Nothing is carried forward from the 08-22 version without being
re-measured; where a re-measurement matched, it is still stated as measured
today. Where a statement would need a value that could not be measured from the
tree, it reads UNKNOWN, and every UNKNOWN is listed again at the end.

This file is internal. It is not reader-facing and no sentence in it ships.

---

## THE TREE, AS IT IS

Astro static site. `astro.config.mjs`: `output: 'static'`, `outDir: './dist'`,
integration `@astrojs/mdx`. `package.json`: astro ^5.18.2, @astrojs/mdx ^4.3.14,
playwright ^1.62.1; scripts are `dev`, `build`, `preview`.

`npm run build` on 2026-08-27 reports **4 page(s) built** — Astro renders four
and only four:

    /404.html
    /index.html
    /pieces/fast-food-sodium/index.html
    /pieces/concert-tax/index.html

**But `dist/` holds 8 HTML routes, not 4.** The other four are copied verbatim
out of `public/` and Astro never renders them, so the build log undercounts what
ships. This is the single most misreadable fact in the tree and it is why the
08-22 dist figure went stale. `find dist -name '*.html' | sort`:

    dist/404.html                              built by Astro
    dist/index.html                            built by Astro
    dist/naming/index.html                     copied from public/
    dist/naming/part-0/index.html              copied from public/
    dist/naming/part-1/index.html              copied from public/
    dist/naming/part-2/index.html              copied from public/
    dist/pieces/concert-tax/index.html         built by Astro
    dist/pieces/fast-food-sodium/index.html    built by Astro

`find dist -type f` returns **17 files**: the 8 HTML above, one bundled
stylesheet `dist/_astro/index.BS8RN6vO.css`, `dist/_redirects`,
`dist/_data/config.js`, `dist/alterrell-interactive.css`, and the five files
copied from `public/og/`.

`find public -type f` returns 12 files.

### The one template
`src/pages/pieces/[slug].astro`, 235 lines. Its own header states the fixed DOM
order (nav → hero → journey block → tab bar → tab panels → footer) and that it
carries zero CSS rules. It builds one route per entry in `BUILT_SLUGS`.
It does not build the naming routes; nothing does.

### The stylesheet, now in THREE places
`node _tools/check.js` reports **437 distinct selectors** in the platform
stylesheet, unchanged from 08-22.

    src/styles/alterrell-interactive.css    2,952 lines / 96,995 bytes  CANONICAL
    public/alterrell-interactive.css        2,952 lines / 96,995 bytes  NEW 08-27
    alterrell-interactive.css (repo root)      424 bytes                the shim

`shasum -a 256` on the first two returns the same digest,
`bb742029de0ccd6ef799fbadf9212b653ab9ecf0b881a37b1f1243181ba694dc`. They are
byte-identical copies. The `public/` copy was added by `fa1dbae` because the
naming pages link `../../alterrell-interactive.css`, which from
`public/naming/part-0/` resolves to `public/alterrell-interactive.css`.

CLAUDE.md gate item 3 says "canonical; the root copy is pre-migration". That
sentence now describes a two-file world that has three files in it. **An edit to
`src/styles/` alone will not reach the four naming pages, and an edit to
`public/` alone will not reach the two Astro pieces.** Nothing in the tree keeps
the two copies in sync; they are identical today by construction, not by
mechanism.

`grep -rl 'alterrell-interactive.css' --include='*.html'` outside `dist/` and
`node_modules/` counts **33** files, up from 29 on 08-22; the four new naming
pages are the difference.

### Components
`find src/components -type f` returns 7:
Carousel.astro, ConcertBuilder.astro, SectionNav.astro, ShareBlock.astro,
SodiumPicker.astro, TabSection.astro, TicketSplit.astro.

### Data
`src/data/concert-artists.json` (8,944 bytes) and `src/data/sodium-items.json`
(27,990 bytes).

### Redirects
`public/_redirects`, 41 lines. **Nine live 301 rules, up from two on 08-22.**
All nine sit above the catch-all, because Netlify is first-match-wins and a rule
below `/*` is dead:

    line  7   /fast-food-sodium          -> /pieces/fast-food-sodium/
    line  8   /sodium                    -> /pieces/fast-food-sodium/
    line 20   /what-in-a-name/part-0/*   -> /naming/part-0/:splat
    line 21   /what-in-a-name/part-2/*   -> /naming/part-2/:splat
    line 22   /what-in-a-name/*          -> /naming/part-1/:splat
    line 29   /concert-tax/*             -> /pieces/concert-tax/
    line 30   /concert-tax               -> /pieces/concert-tax/
    line 34   /naming/part-3/*           -> /naming/
    line 35   /naming/part-3             -> /naming/
    line 41   /*                         -> /404.html  404   (catch-all)

The 08-22 statement that the naming redirects are "held until naming ships" and
that "the target will then be `/pieces/naming/`" is false on both counts: they
were unheld 2026-08-27 and their targets are the static `/naming/part-N/`
routes. `/pieces/naming/` does not exist and is not planned.

Two redirect groups remain commented out with their reason beside them:
congress (not built) and `/big-black-love/*` (gay-uncles not migrated).

`netlify.toml` carries `command = "npm run build"`, `publish = "dist"`,
`NODE_VERSION = "20"`, and no catch-all.

---

## WHAT SHIPS, AND WHAT DOES NOT

The list lives in `src/lib/hub.ts` and nowhere else. Measured from that file:

    BUILT_SLUGS   = ['concert-tax', 'fast-food-sodium']
    LINKED_SLUGS  = BUILT_SLUGS        (the file sets them equal)
    EXTRA_CARDS   = [ naming ]         (one entry, added 2026-08-27)

`EXTRA_CARDS` was empty on 08-22 and is not empty now. Its one entry, at
`src/lib/hub.ts:84-90`, is `slug: 'naming'`, `title: 'That Name Is So Ghetto'`,
`stakes: 'Series'`, `category: 'culture'`. The file's own comment says every
field is copied from `src/content/pieces/naming.mdx`, which stays parked.

**The hub therefore renders 3 cards, not 2**: two from `BUILT_SLUGS` and one
from `EXTRA_CARDS`. Measured from the built `dist/index.html`, the three cards
in DOM order are:

    1. /pieces/concert-tax/        "Female Musicians Earn Less But Share More"
    2. /pieces/fast-food-sodium/   "Fast Food's Hidden Sodium Tax"
    3. /naming/                    "That Name Is So Ghetto"

`HubCard` (`src/lib/hub.ts:55-63`) carries no `href` field. The destination is
derived instead, at `src/pages/index.astro:128`:

    href={extraSlugs.has(card.slug) ? `/${card.slug}/` : `/pieces/${card.slug}/`}

So membership in `EXTRA_CARDS` is itself what selects the root-level
`/{slug}/` shape; `.mdx`-backed cards get `/pieces/{slug}/`. A card's URL is a
consequence of which list it came from, and is expressed nowhere else.

`find src/content/pieces -type f` returns 5 `.mdx` files. Three build nothing,
because they are in neither list. From each file's own frontmatter:

| .mdx file | frontmatter status | in BUILT_SLUGS | route in dist/ | tabs |
|---|---|---|---|---|
| concert-tax.mdx | `live` | yes | yes | 7 |
| fast-food-sodium.mdx | `live` | yes | yes | 7 |
| gay-uncles.mdx | `coming-soon` | no | no | 8 |
| naming.mdx | `coming-soon` | no | **no — but /naming/ ships from public/** | 5 |
| wheres-beyonce.mdx | `coming-soon` | no | no | 5 |

Tab counts are `tabs:` entry counts read from each file's frontmatter,
unchanged from 08-22. The naming row is the one that no longer means what it
says: the `.mdx` is unbuilt, and the piece is nonetheless on the site as four
hand-maintained HTML files.

---

## PIECES

Two statements per piece are measured: what the frontmatter declares, and what
the build emitted. Editorial readiness is not derivable from the tree and is
UNKNOWN in every row, with one exception now measured under naming part 3.

### Concert Tax — "Female Musicians Earn Less But Share More"
BUILT and LINKED. Route `dist/pieces/concert-tax/index.html`.
`src/content/pieces/concert-tax.mdx`, 523 lines / 27,292 bytes,
`status: live`, `category: industry`, `stakes: "Pay equity"`,
`publishDate: 2024-06-01`.
7 tabs: Overview · The Data · The Double Standard · History · Take Action ·
Share to Social · Sources.
Carries TicketSplit (stylesheet section 22) and ConcertBuilder (section 23,
data from `src/data/concert-artists.json`).
OG image `public/og/concert-tax.png`, 1200 x 630, 52,081 bytes.
`node _tools/check.js` 2026-08-27: **0 fail cells.**
Editorial readiness: UNKNOWN.

### Fast Food Sodium — "Fast Food's Hidden Sodium Tax"
BUILT and LINKED. Route `dist/pieces/fast-food-sodium/index.html`.
`src/content/pieces/fast-food-sodium.mdx`, 471 lines / 28,003 bytes,
`status: live`, `category: industry`, `stakes: "Public health"`. No
`publishDate`.
7 tabs: Overview · The System · Systemic Issues · Compare Your Order ·
Best Options · Spread the Word · Sources. "Spread the Word" is grandfathered
(Bible TABS-02).
Carries SodiumPicker (stylesheet section 21).
OG image `public/og/fast-food-sodium.png`, 1760 x 674, 189,587 bytes — not
1200 x 630.
`node _tools/check.js` 2026-08-27: **0 fail cells.**
Editorial readiness: UNKNOWN.

### That Name Is So Ghetto / What's in a Name (naming)
**Status changed most since 08-22.** Not an Astro route and not in
`BUILT_SLUGS`. Ships as four static files copied into `dist/` from `public/`:

    public/naming/index.html          307 lines
    public/naming/part-0/index.html   740 lines
    public/naming/part-1/index.html  1347 lines
    public/naming/part-2/index.html  1154 lines

`src/content/pieces/naming.mdx` (320 lines / 27,596 bytes,
`status: coming-soon`, 5 tabs) stays parked and unbuilt; its frontmatter is the
source the `EXTRA_CARDS` hub card was copied from.

Two names are live for one series, both real, both from the archive: the hub
card reads **"That Name Is So Ghetto"** and `/naming/` is headlined **"What's
in a Name"**. Recorded here as measured, not resolved.

Measured on the three shipped parts, `<p>` word counts excluding headings,
script, style and comments:

| page | \<p\> count | words in \<p\> | inline charts |
|---|---|---|---|
| part-0 | 22 | 879 | 0 |
| part-1 | 28 | 918 | 3 |
| part-2 | 38 | 1,333 | 3 |

Charts are Chart.js, constructed inline; the data lives in `const` arrays in
each file. Both part-1 and part-2 load `chart.js@4.4.0` and
`chartjs-plugin-annotation@3.0.1` from `cdn.jsdelivr.net` at runtime, so two
shipped pages carry a third-party CDN dependency.

`og:image` and `twitter:image` on part-0 and part-2 were repaired in `fa1dbae`
from `og/part0.png` and `og/part2.png`, which exist in no commit and 404 live,
to `og/naming.png`, which returns 200 and is sha256-identical to the local copy.

**Part 3, The Academy Effect, is CUT** — ruled by AMA 2026-08-14, card removed
and a 301 added 2026-08-27. It exists only at
`_archive/legacy-2026-08-13/naming/part-3/index.html`, 819 lines. Editorial
readiness is measured, not UNKNOWN, and the file states it itself: **nine `<p>`
elements carry the literal comment `<!-- AMA VOICE PASS NEEDED -->` and no
text** — three `win-body` under the Overview h2, three `win-sub` under the three
chart h2s, and three `win-body` under the closing h2. Its `<p>` word count is
132 against 879 / 918 / 1,333 for the shipped parts, and every one of those 132
words is a hero dek, a share nudge, or the methodology footnote. Its three
charts are complete and inline. See the 2026-08-27 report for the full
diagnosis.

Parts 4 through 7 do not exist; part-3 links `/naming/part-4/`, which resolves
nowhere.

### Advice From Your Thick Gay Uncles
NOT BUILT. `src/content/pieces/gay-uncles.mdx`, 303 lines / 21,921 bytes,
`status: coming-soon`, `category: culture`, 8 tabs including "Hold Your
Ground". In neither list. No `gay-uncles/index.html` anywhere in the repo.
`/big-black-love/*` stays commented out in `public/_redirects`.
Note against Bible TABS-05, which says Gay Uncles ships exactly 7 tabs with
"Hold Your Ground" cut: this `.mdx` carries 8 and includes it. Not built, so
nothing ships in violation today.
Remaining work: UNKNOWN.

### Where's Beyoncé?
NOT BUILT. `src/content/pieces/wheres-beyonce.mdx`, 218 lines / 11,233 bytes,
`status: coming-soon`, 5 tabs. In neither list. No `category` and no `stakes`;
`src/lib/hub.ts` records that as deliberate, because the archived file names
neither and nothing is invented.
Remaining work, and whether the Q3 hurricane-season target still stands: UNKNOWN.

### Everything else the 07-05 version listed as a piece
BTU, Copaganda, Crowning Achievements, Back in My Day, Congress, HBS: none has
an `.mdx` in `src/content/pieces`, so none has a route. Measured in the tree:

    _data/pieces/BTU-*.md                       7 files
    _data/pieces/CROWNING-ACHIEVEMENTS-PIECE-BRIEF.md
    _data/pieces/BACK-IN-MY-DAY-RESEARCH.md and -2.md
    copaganda/                                  8 files, 102,019 bytes
    crowning-achievements/                      1 file,  48,330 bytes

`find . -name 'CROWNING-ACHIEVEMENTS-FACTS*'` still returns nothing.

---

## THE CHECKER

`_tools/check.js` is the only thing that makes a rule a rule (CLAUDE.md,
"Rules and exceptions"). Run 2026-08-27, `node _tools/check.js --json <tmp>
--no-shots`:

    Rule hash        76477b4978c33b8cc86c7cfad093ad115bfedf707f456b278894c2dbb662868d
    FAIL cells       34      (was 0 on 2026-08-22)
    D1 duplicates    30      (was 0 on 2026-08-22)
    Chromium         151.0.7922.34  (pinned 151.0.7922.34)
    Playwright       1.62.0
    Selectors        437
    Widths           360, 768, 1280
    Pages scanned    8       (was 4 on 2026-08-22)

**The rule hash did not move. check.js was not edited. The tree changed under
a fixed ruleset**, which is the honest reading of the jump from 0 to 34.

Every one of the 34 fail cells is on a naming page. The four Astro-rendered
pages score clean:

| page | fail cells | rules |
|---|---|---|
| 404 | 0 | — |
| index | 0 | — |
| pieces-concert-tax | 0 | — |
| pieces-fast-food-sodium | 0 | — |
| naming | 7 | G3, G7 at all 3 widths; S3 |
| naming-part-0 | 9 | G3, G7 at all 3 widths; S4, S5, S7 |
| naming-part-1 | 9 | G3, G7 at all 3 widths; S4, S5, S8 |
| naming-part-2 | 9 | G3, G7 at all 3 widths; S4, S5, S8 |

By rule: G3 4 pieces, G7 4 pieces, S4 3, S5 3, S8 2, S3 1, S7 1.

The gate's standard — "a rule failing on most pieces is a wrong rule, not many
broken pieces" — does **not** apply here. G3 and G7 pass on all four Astro
pages and fail on all four passthrough pages. That is a property of the pages,
not of the rules.

What the two geometry rules are reporting, from the JSON's own offender lists:

- **G7, contrast.** On part-0 at 360: 4 of 8 text samples below WCAG minimum.
  `p.win-footer-methodology-note` at **2.20:1** where 4.5:1 is required
  (`rgb(74,70,94)` on `rgb(10,10,10)` at 13px); `p.win-hero-dek` at 4.25:1;
  two share-block paragraphs at 4.28:1.
- **G3, tap targets.** On part-0 at 360: 3 of 8 controls under 44 x 44 —
  the "Alterrell Interactive" nav link at 136.4 x 16.2, the "What's in a Name"
  breadcrumb at 103.9 x 16.2, and the "Data" tab at 37.1 x 44.0.

The structure rules report the passthrough pages using the legacy tab contract:
S4 reads 5 `data-target` values the platform does not accept, S5 reads 5
`aria-controls` attributes as absent, and S7 reads part-0's first tab as
"Roots" where the contract expects "Overview".

**D1, duplicate selectors: 30**, all from inline `<style>` blocks in the four
naming pages re-declaring platform selectors:

| page | inline selectors | duplicates |
|---|---|---|
| naming | 37 | 6 — `.ai-breadcrumb`, `.ai-breadcrumb a`, `.ai-breadcrumb a:hover`, `.ai-nav`, `:root`, `body` |
| naming-part-0 | 75 | 8 — `.ai-breadcrumb`, `.ai-nav`, `.ai-tab`, `.ai-tab.active`, `.ai-tab:hover`, `.ai-tabs`, `:root`, `body` |
| naming-part-1 | 129 | 8 — same eight |
| naming-part-2 | 97 | 8 — same eight |

Content rule `T7b` reports PASS, "5 content files clean" — it scans all five
`.mdx`, including the three that build nothing, and it does not scan the four
naming HTML files, which are not content entries.

Shots go to `../alterrell-hq/reports/shots/` unless `--shots` overrides it.

---

## OG IMAGES

`public/og/`, dimensions read from each PNG's IHDR header on 2026-08-27:

| file | dimensions | bytes | live status 2026-08-27 |
|---|---|---|---|
| concert-tax.png | 1200 x 630 | 52,081 | **404** |
| fast-food-sodium.png | 1760 x 674 | 189,587 | **404** |
| hub.png | 1982 x 1232 | 247,125 | 200 |
| naming.png | 1768 x 752 | 178,322 | 200 |
| README.md | — | 2,429 | 200 |

One of the four PNGs is 1200 x 630. The template emits
`og:image = https://interactive.alterrell.com/og/{slug}.png` for every piece
from one line, `[slug].astro` line 67.

The live column is a deploy fact, not a tree fact: see DEPLOY below. The two
404s are files that exist and are committed but have never been published.

The three non-1200x630 files are NOT re-rendered: re-rendering changes what
every existing share of those URLs renders as. That is an AMA call and is
recorded here as open, not as a defect to fix unasked.

---

## TOOLS

`tools/ai-card-studio.html` is a 300 x 280 carousel-card studio, not a general
export tool: `html2canvas(cardEl, { width:300, height:280, scale:1 })` at line
1391, offscreen wrapper matched at 1382. It cannot emit any other size, and it
is the wrong tool for an OG image.

`_data/platform/self-check.sh` exists at that path.

---

## THE PRE-ASTRO TREE THAT IS STILL HERE

`find … -type f`, 2026-08-27. None of these is built by Astro.

    _archive/                  35 files    1,564,868 bytes
    _data/                    260 files   32,106,781 bytes
    _design/                    1 file       69,749 bytes
    _workbench/                 4 files       65,188 bytes
    old/                       41 files      652,472 bytes
    reports/                   29 files    3,551,983 bytes
    og/                         4 files      615,503 bytes  (NOT public/og)
    copaganda/                  8 files      102,019 bytes
    crowning-achievements/      1 file        48,330 bytes
    tools/                      2 files       67,321 bytes
    alterrell-interactive.css                    424 bytes  (the shim)

Three live hazards rather than clutter:

1. `og/` at the repo root is a SECOND, DIFFERENT set of og images: root `og/`
   holds hub.png, naming.png, sodium.png, README.md; `public/og/` holds
   concert-tax.png, fast-food-sodium.png, hub.png, naming.png, README.md. Only
   `public/og/` is copied into `dist/`.
2. `alterrell-interactive.css` at the root is the 424-byte shim; 33 legacy HTML
   files link it.
3. **NEW 08-27: `public/alterrell-interactive.css` is a third copy**, identical
   to `src/styles/` today with nothing keeping it so. See "The stylesheet, now
   in THREE places".

`_archive/legacy-2026-08-13/` is never modified and its contents do not count as
live usage of anything.

Whether any of these should be demoted or removed: UNKNOWN, and not proposed
here. CLAUDE.md's "Writes" rule forbids moving or deleting without explicit
instruction.

---

## GIT

Branch `main`. **199 commits**, first `0497033` dated 2026-03-06 ("Initial
commit"), most recent `4cce108` 2026-08-27 ("[Platform] Naming hub card via
EXTRA_CARDS"). `git --no-pager status --short` printed nothing at the start of
the 2026-08-27 session. `git ls-remote origin main` and local `HEAD` both read
`4cce108`: the branch is pushed and in sync.

---

## DEPLOY

Netlify, site `iridescent-starburst-92a5fe`, from `netlify.toml`: build
`npm run build`, publish `dist`, Node 20.

The 08-22 version recorded deploy state as UNKNOWN. **It is now known, and it is
the most important fact in this file:**

**Auto Publishing is LOCKED on the Netlify site and has been since May 26.** The
published deploy is `main@8664cd4`, May 26. Every deploy since has built and
completed without publishing. Tonight's build of `main@4cce108` completed in 11s
and did not publish.

Consequences measured against the live host on 2026-08-27:

    /                          200
    /naming/                   404
    /naming/part-0/            200   serving the pre-repair build
    /naming/part-1/            200
    /naming/part-2/            200   serving the pre-repair build
    /pieces/concert-tax/       404
    /pieces/fast-food-sodium/  404

The live naming pages come from deploy `main@4e277ce`, June 4. Live part-0 and
part-2 still emit `og/part0.png` and `og/part2.png`, both 404. Every commit
after June 4 is invisible to readers.

**AMA has ruled the site stays unpublished for now.** Work ships to GitHub,
Netlify builds it, and publishing is one UI toggle AMA holds. Nothing in this
repo can publish and nothing should try.

One measurement does not fit the one-published-build story and no explanation is
invented here: `naming.png` and `hub.png` return 200 live but were committed
2026-07-29 at `24d4671`, after the May 26 published deploy. Listed as an
UNKNOWN below.

---

## UNKNOWNS, LISTED

 1. Editorial readiness of Concert Tax — open voice slots, unfinished copy.
 2. Editorial readiness of Fast Food Sodium — same.
 3. Remaining work on gay-uncles.mdx before it could enter BUILT_SLUGS.
 4. Remaining work on wheres-beyonce.mdx, and whether its Q3 target stands.
 5. Whether the committed BTU briefs and the copaganda/ directory are the
    complete research the 07-05 version was waiting to recover, or partial.
 6. Whether `og/` at the repo root, `old/`, `reports/`, `_workbench/` and the
    other pre-Astro directories should be demoted, and to where.
 7. Whether the three non-1200x630 og images should be re-rendered.
 8. Which of the 33 legacy HTML files linking the root CSS shim are still
    reachable by a reader, and which are dead files inside `old/` or `_archive/`.
 9. Why `naming.png` and `hub.png`, committed 2026-07-29 after the May 26
    published deploy, return 200 live when `concert-tax.png` and
    `fast-food-sodium.png` do not.
10. Whether the two copies of the platform stylesheet should be reduced to one,
    and by which mechanism — a build step, a symlink, or a rule in check.js.
11. Whether the naming pages' G3 and G7 failures are accepted as the cost of
    shipping archive HTML verbatim, or are to be fixed. Fixing G7 changes
    reader-visible colour and is an AMA call.
12. Which of the two live names for the naming series — "That Name Is So
    Ghetto" on the hub card, "What's in a Name" on `/naming/` — is correct.
13. Whether part-3's nine empty prose slots are to be written. The file names
    what it needs; who writes it and when is not in the tree.

## NEXT STALENESS CHECK

This file is a CLAUDE.md gate item, read at the start of every session in this
repo. It goes stale the moment `BUILT_SLUGS`, `EXTRA_CARDS`, the dist file list,
or the rule hash moves. `EXTRA_CARDS` is added to the trigger because it moved
this time and the 08-22 trigger did not name it. No calendar date is proposed;
the four values above are the trigger.
