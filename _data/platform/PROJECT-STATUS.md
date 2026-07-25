# PROJECT STATUS
Updated: 2026-07-05 (full rewrite from repo audit — replaces 2026-05-22 version)
Repo path: `_data/platform/PROJECT-STATUS.md`

---

## PURPOSE
Production tracking file. Answers: what exists, what is in progress, what blocks deploy.
This version distinguishes REPO-VERIFIED state from SESSION-RECORD state
(work completed in chat sessions but not yet uploaded). Until the Upload
Queue below is cleared, treat session-record items as recoverable, not live.

## STATUS KEYS
LIVE · BUILT · IN PROGRESS · BLOCKED · PARKED · NOT STARTED · CONCEPT
NOT COMMITTED — completed in a session; files never uploaded to repo

---

## UPLOAD QUEUE (clear these before new build work)

Rewritten 2026-07-25 from verified repo state. Struck: Hub Batch A
(D-80 series card and D-81 HBS removal both confirmed live on the hub;
Gay Uncles held at Coming Soon by design per D-82, not a queue item),
CARD-INVENTORY.md (exists at `_workbench/CARD-INVENTORY.md`),
REPO-AUDIT-2026-07-05.md and SESSION-QUEUE-2026-07.md (both exist in
repo; REPO-AUDIT retired to `old/` this pass). Remaining real items:

1. Beyoncé filled workbench copy + Overview essay (recover from June chats).
2. CROWNING-ACHIEVEMENTS-FACTS.md (recover — data-integrity priority).
3. BTU research files (recover → `_data/pieces/BTU-*.md`).
4. Copaganda brief + V2 spec (recover).
5. Back in My Day full card HTML (verify vs chat 2f421f20, then commit).

---

## PLATFORM

### Hub
LIVE and current. Batch A confirmed committed: single naming series card
→ /naming/ (D-80), HBS card removed (D-81). Roster verified in
`index.html`: Fast Food Sodium, That Name Is So Ghetto (series),
Concert Tax — all `hub-card--live` — plus Gay Uncles, held at Coming
Soon by design (D-82); the Explore flip ships as its own follow-up
Batch A after the voice-pass Batch C lands.

### Platform CSS
`alterrell-interactive.css` at repo root — canonical, current. Lanes retired
June 2026: all pieces are Alterrell Interactive; Obsidian Futures is a tag +
card-native exception (380×660, #0a0a12) for BTU and Crowning Achievements only.

### Design Decision Log
Repo copy ends at D-92 (2026-07-25). Per D-92, this log is the ruling
record; AI-MASTER-RULES.md is the operative digest — rulings flow log
to rules, never the reverse.

---

## PIECES

### Concert Tax — "Female Musicians Earn Less But Share More"
STATUS: Piece LIVE at `concert-tax/index.html`. Card workbench committed
(teal/paper) with 14 cards; session record says 16 — reconcile in recovery pass.
BLOCKER: 7 `[AMA EDITORIAL LINE]` slots in workbench (spines in
VOICE-SPINES-2026-07.md). Then Type 2 gallery assembly into the piece.
Hub card title update rides with Batch A re-run.

### Advice From Your Thick Gay Uncles
STATUS: BUILT at `gay-uncles/index.html` (57KB, 5-tab restructure, 9 cards
in-piece). Workbench is intentionally a stub — cards live in the piece.
Brief: `_data/pieces/GAY-UNCLES-BRIEF.md` ✓ (old BLACK-GAY-GEOGRAPHY path is dead).
BLOCKER: 15 AMA voice slots in the live file (spines in VOICE-SPINES-2026-07.md).
Held: W-2 format decision, YM-1 format decision.
Open data flag: DC BMI gap +22 (card) vs +23 (brief) — reconcile at voice-pass commit.
Hub flip to Explore: per D-81 ruling, sequence against voice pass (Decision 2).

### Where's Beyoncé? (disaster philanthropy)
STATUS: Shell BUILT at `wheres-beyonce/index.html` (50KB). 10 workbench cards
committed June 9. Target Q3, hurricane season.
NOT COMMITTED: all 11 editorial slots filled + 600-word Overview essay (June chats).
Resolved holds: Kevin Hart quote (Vogue UK June 2021), 700× anchor cut,
Card 5 bar-delta cut, "Celebrity giving (est.)" labels on Cards 3–4.
Design lane: standard teal.
Slug: RULED per D-83 — rename to /wheres-beyonce/ (2026-07-25). Path
rename unblocked by D-89 (a rename is not a build, proceeds ahead of
the Upload Queue). Then Type 2 build — this is the hard-deadline piece.

### Sodium — "Fast Food's Hidden Sodium Tax"
STATUS: LIVE at `fast-food-sodium/index.html`. Complete; can flip Coming Soon /
active on the hub as calendar needs.
FLAGS: Systemic Issues intro still says "Four mechanisms" (2 accordions remain) —
spine provided. OG/Twitter meta retains older word order + $219B stat — AMA to
rule: update or keep as social-optimized variant.

### Naming Series — "That Name Is So Ghetto"
STATUS: Parts 0–1 LIVE and linked. Part 2 ("The Living Room") and Part 3
("The Academy Effect") BUILT in repo, unlinked — surface via Batch A re-run.
Series index BUILT at `/naming/`. Part 2 voice pass incomplete (em dashes,
AI tone). Parts 4–7 in build planning; per D-90 (2026-07-25), Parts 4–7
are new pieces and build to the D-88 standard (piece-template.html,
ai- classes, sources-as-tab, no accordions) — Part 2 is explicitly NOT
the template for Parts 3–6. Parts 0–3 rebuild to match afterward, at
which point the D-74 footer-accordion exemption expires. Not part of
this session's build queue; noted here so it isn't missed at next pickup.
Canonical: `_data/pieces/NAMING-SERIES-BRIEF.md` ✓

### BTU (Black Television Universe)
STATUS: Research complete in session records — five clusters (Sitcom 37 shows /
27 nodes / 11 chains; Drama 14/17/10; Miniseries 6; Soaps full incl. Beyond the
Gates; Animation 5). All 13 ODs resolved. Soaps = frontrunner for first ship.
Editorial spine: Beyond the Gates 2026 NAACP nom (first daytime drama);
Michele Val Jean 35-year gap (Generations 1989 → BTG 2025).
NOT COMMITTED: none of this research is in the repo. Workbench stub only.
BLOCKER: commit research as `_data/pieces/BTU-*.md` before any build.
Card spec: 380×660 OF card-native, #0a0a12. Show cards are the deliverable,
not a network map.

### Copaganda
STATUS: Five-visual suite data-locked; V2 redesign (producer typographic wall,
font size = total seasons + producer cards). Build order V3→V5→V4→V2→V1, V1 parked.
NOT COMMITTED: brief and V2 spec exist only in session records. Workbench stub.
BLOCKER: recovery commit before V3 build.

### Crowning Achievements — Black Music Royalty
STATUS: Architecture locked — 4 cards per artist (Stats/Reign/Infrastructure/Bio),
380×660 OF card-native. Roster: 6 Billboard Titans + 9 Main Drops + 10 Special Edition.
NOT COMMITTED: CROWNING-ACHIEVEMENTS-FACTS.md is 404 — retired-stats register
(Diana Ross, Donna Summer, Tina Turner corrections; "74% crossover" retired)
exists only in session records. HIGH-PRIORITY recovery before any card build.

### Back in My Day (food ingredient evolution)
STATUS: Phase 1 locked (Bread, Ice Cream, Pasta, Milk); 4 ingredient-category
hex codes locked; y-axis ceiling 27. Research committed ✓
(`BACK-IN-MY-DAY-RESEARCH.md`). Workbench in repo appears partial vs session
record (7 macro cards + A/B/C rounds, chat 2f421f20) — verify, then commit.
Generation cards ON HOLD pending 300×280 execution refinement.
NEXT BUILD: Option C cascade pills (after workbench verification).

### Congress Part 1A — "Senator Selfish (District-74)"
STATUS: NOT STARTED. Target Sept–Oct general election window.
Factpack path in old status file is 404 — locate or rebuild factpack before
Type 1 session.

### HBS
DEFERRED (June 9, 2026). Do not surface unless AMA raises it.

---

## SEPARATE PRODUCTS

### Forever Loved
LIVE at forever-loved.netlify.app (separate deploy; not in this repo).

### FrameShift
Deferred to Q3/Q4. Free-tier MVP built; paid tier gated on waitlist validation.

---

## EXPLORATORY (no piece attached)
- Background session-singer research (Crow, Price, Vandross, McDonald, Carey;
  hubs: Darlene Love, Dionne Warwick)
- City cultural-erasure research (Boston, Newark, Memphis, Philadelphia,
  Chicago, Houston, Detroit; Atlanta counter-case)
- Low Battery tool · Specialist Map · Voter wait times · Reality TV labor economics

---

## DEPLOY RULE (unchanged)
Nothing moves to LIVE unless: structure approved · voice pass completed
(if applicable) · build verified in browser · Ko-fi block present ·
deploy checklist passed.

## NEXT STALENESS CHECK
Aug 1, 2026 (proposed — this audit supersedes the July 9 check; AMA to confirm).
