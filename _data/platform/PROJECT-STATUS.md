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

1. Hub Batch A re-run — series card (D-80), HBS card removal (D-81),
   surface /naming/part-2/, /naming/part-3/, /naming/. Gay Uncles flip
   per Decision 2 ruling (see audit chat, July 5).
2. Platform docs — this file, CARD-INVENTORY.md, decision log append
   (D-80/D-81), REPO-AUDIT-2026-07-05.md.
3. Beyoncé filled workbench copy + Overview essay (recover from June chats).
4. CROWNING-ACHIEVEMENTS-FACTS.md (recover — data-integrity priority).
5. BTU research files (recover → `_data/pieces/BTU-*.md`).
6. Copaganda brief + V2 spec (recover).
7. Back in My Day full card HTML (verify vs chat 2f421f20, then commit).

---

## PLATFORM

### Hub
LIVE — but at 2026-05-22 state. Links 4 pieces: Concert Tax,
Fast Food Sodium, Naming Part 0, Naming Part 1, plus coming-soon cards.
NOT COMMITTED: June 24 Batch A (D-80 single naming series card → /naming/;
D-81 HBS card + Coming Next divider removed; Gay Uncles Coming Soon → Explore).
Target post-commit roster: Sodium Tax, That Name Is So Ghetto (series),
Concert Tax, Gay Uncles. No Coming Soon cards remain.

### Platform CSS
`alterrell-interactive.css` at repo root — canonical, current. Lanes retired
June 2026: all pieces are Alterrell Interactive; Obsidian Futures is a tag +
card-native exception (380×660, #0a0a12) for BTU and Crowning Achievements only.

### Design Decision Log
Repo copy ends at D-79. D-80/D-81 append block generated 2026-07-05,
pending AMA confirmation of wording + upload.

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
STATUS: Shell BUILT at `where-are-they/index.html` (50KB). 10 workbench cards
committed June 9. Target Q3, hurricane season.
NOT COMMITTED: all 11 editorial slots filled + 600-word Overview essay (June chats).
Resolved holds: Kevin Hart quote (Vogue UK June 2021), 700× anchor cut,
Card 5 bar-delta cut, "Celebrity giving (est.)" labels on Cards 3–4.
Design lane: standard teal.
PENDING: slug decision (/where-are-they/ vs /wheres-beyonce/) before share
cards ship. Then Type 2 build — this is the hard-deadline piece.

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
AI tone). Parts 4–7 in build planning; Part 2 is the template for 3–6,
Part 7 fresh build. Grandfathered from Sources-tab standard (footer
methodology accordion, 5-tab).
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
