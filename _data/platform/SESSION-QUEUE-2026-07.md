# SESSION QUEUE — July 2026
Repo path: `_data/platform/SESSION-QUEUE-2026-07.md`
Created: July 5, 2026 (from repo audit) · Protocol: D-85

## HOW THIS FILE WORKS

**AMA kickoff line (Claude Code, paste exactly):**
> Read _data/platform/SESSION-QUEUE-2026-07.md and run the next unchecked
> prompt for its session type. Follow all required reads inside the prompt
> before touching anything.

**AMA kickoff line (claude.ai recovery sessions):**
> Fetch https://raw.githubusercontent.com/founder-am/alterrell-interactive-public/main/_data/platform/SESSION-QUEUE-2026-07.md
> and run the next unchecked Type 1 prompt.

**Claude rules for this file:**
- Run ONE prompt per session. Do not chain.
- If the next unchecked prompt has an open `>> ASK AMA:` line, ask those
  questions first and wait — do not guess, do not skip ahead.
- At session end: flip the prompt's checkbox to `[x]`, add a one-line result
  under it, and include this file in the session's files-to-upload list
  (Claude Code sessions edit it directly; claude.ai sessions output the
  updated copy for upload).
- If a prompt can't complete, mark `[!]` with a one-line blocker instead.

**STANDING RULE — VOICE HARVEST (D-86, every research session, including
exploratory ones):** before closing, Claude compiles a "lines you already
said" harvest — AMA's verbatim in-session reactions and phrasings, mapped to
open copy slots across all pieces (see VOICE-SPINES-2026-07.md for the
current slot list). Output as a paste-ready block for ChatGPT with the
instruction "this is my raw draft — tighten rhythm only." This is extraction,
not Claude writing copy. A research session without a harvest is an
incomplete session.

Queue order is execution order. Prompts 2–6 are recovery sessions: they mine
past chats and package files — NO new writing, NO new research, NO new design.

---

## THE QUEUE

- [ ] **P0 · Upload only (no session)** — Upload via GitHub web UI in one
  docs commit: PROJECT-STATUS.md (replace), CARD-INVENTORY.md (replace),
  DESIGN-DECISION-LOG.md (replace — full merged file, no pasting needed),
  REPO-AUDIT-2026-07-05.md (new, at _data/platform/audits/), and this file
  (new). Commit: `Docs: status/inventory/decision-log sync + session queue — July 5 audit`

- [x] **P1 · Type 3 (Claude Code) — Hub Batch A re-run**
  D-82: Gay Uncles → Coming Soon (a). Sodium: Active. Series tag: "Series".
  Result (2026-07-06): Series card → /naming/, "The Fame Effect" removed, HBS card + Coming Next divider removed per D-81. Concert Tax title and Sodium card already correct. index.html updated; SESSION-QUEUE-2026-07.md created.

- [ ] **P2 · Type 1 (claude.ai) — Where's Beyoncé copy recovery**
  >> ASK AMA: D-83 ruling — keep /where-are-they/ or rename to
  /wheres-beyonce/ + redirect? (Needed so P8 can bake it in.)
  Recovery only, no new writing. (1) conversation_search June Beyoncé
  sessions ("Beyoncé workbench editorial slots Overview essay", "Kevin Hart
  Vogue 700x anchor") and pull final approved copy for all 11 slots + the
  600-word Overview essay. (2) Fetch committed _workbench/beyonce-cards.html
  from raw GitHub. (3) Produce updated beyonce-cards.html with recovered
  copy placed and placeholders removed, plus
  _data/pieces/WHERES-BEYONCE-OVERVIEW-ESSAY.md. Map every recovered line to
  its slot for AMA review BEFORE writing files. Any slot not recoverable
  verbatim: mark [NOT RECOVERED] and stop — never fill with new writing.
  (4) Files-to-upload list + commit message + update this queue file.

- [ ] **P3 · Type 1 (claude.ai) — Crowning Achievements facts recovery**
  Data-integrity priority. conversation_search ("Crowning Achievements
  verified facts retired stats", "Diana Ross Hot 100 UK figure", "Donna
  Summer 42 entries corrected"). Rebuild
  _data/pieces/CROWNING-ACHIEVEMENTS-FACTS.md with two sections: VERIFIED
  FACTS (each stat + named source) and RETIRED STATS (each + reason). Must
  include: Diana Ross "70 Hot 100" (UK figure), Donna Summer 42→32, Tina
  Turner "38 solo"→18, "74% crossover rate" (no source, permanently
  retired). Anything not recoverable verbatim: [UNVERIFIED — DO NOT USE].
  Files-to-upload + commit message + update queue.

- [ ] **P4 · Type 1 (claude.ai) — BTU research commit package**
  Package only — no new research, no scope changes. conversation_search BTU
  sessions ("BTU cluster Soaps Beyond the Gates", "Sitcom load-bearing nodes
  path chains", "BTU open decisions resolved"). Produce
  _data/pieces/BTU-BRIEF.md (argument, 13 resolved ODs, 380×660 OF
  card-native spec, show-cards-not-map ruling, ship order with Soaps
  frontrunner) + one BTU-CLUSTER-[NAME].md per cluster (Sitcom, Drama,
  Miniseries, Soaps, Animation). Soaps gets fullest treatment incl. Beyond
  the Gates 2026 NAACP spine and Michele Val Jean 35-year arc. Gaps get
  flagged, not filled. Files-to-upload + commit message + update queue.

- [ ] **P5 · Type 1 (claude.ai) — Copaganda brief recovery**
  conversation_search ("Copaganda V2 producer typographic wall seasons",
  "Copaganda five visual suite build order", "12-card producer map").
  Produce _data/pieces/COPAGANDA-BRIEF.md: five-visual suite, V2 spec (name
  wall, font size = total seasons, producer cards), build order
  V3→V5→V4→V2→V1 with V1 parked, canonical file list from the
  near-duplicate resolution. If the 4 V2 HTML files are recoverable, extract
  for _workbench/; if not, commit spec only and note V2 rebuilds in its
  Type 2 slot. Files-to-upload + commit message + update queue.

- [ ] **P6 · Type 1 (claude.ai) — Back in My Day workbench verification**
  Short session. Fetch committed _workbench/back-in-my-day-cards.html; pull
  final version from chat 2f421f20 (7 macro cards + per-food A/B/C rounds);
  diff. If chat version is the superset, package for upload. Confirm locked
  constants intact: Phase 1 foods (Bread, Ice Cream, Pasta, Milk), 4
  ingredient-category hex codes, y-axis ceiling 27, generation cards ON
  HOLD. Files-to-upload + commit message + update queue. (Option C cascade
  pills build is a separate Type 2 after this lands.)

- [ ] **P7 · Type 2 (Claude Code) — Gay Uncles voice-pass placement + fixes**
  GATE: runs only after AMA's ChatGPT voice pass (VOICE-SPINES-2026-07.md).
  >> ASK AMA: paste final copy for GU-1 through GU-15 + tightened MS-1/MS-2;
  rule DC BMI gap figure (+22 or +23).
  Read first: AI-MASTER-RULES.md, _design/DESIGN-PRINCIPLES.md,
  _data/pieces/GAY-UNCLES-BRIEF.md, gay-uncles/index.html,
  alterrell-interactive.css. Place AMA copy verbatim — no smoothing. Also:
  (1) reconcile BMI gap in card AND brief to AMA's figure; (2) center-align
  stat numerics on O-1, O-2, M-2, M-3; (3) W-1/W-2 dimension audit vs
  300×280 — report before fixing, W-2 format is AMA's call; (4) verify
  og/gay-uncles.png status. Batch C copy + CSS fixes ride together only if
  checklist allows; otherwise split and say so. Show diffs. If D-82 ruled
  (a): output the one-line hub flip edit as its own follow-up Batch A.
  Update queue.

- [ ] **P8 · Type 2 (Claude Code) — Where's Beyoncé build**
  GATE: runs only after P2 files are in the repo. Q3 hard deadline.
  Read first: AI-MASTER-RULES.md, _design/DESIGN-PRINCIPLES.md,
  _design/CHART-LIBRARY-REFERENCE.html, _workbench/beyonce-cards.html
  (post-recovery), _data/pieces/WHERES-BEYONCE-OVERVIEW-ESSAY.md,
  where-are-they/index.html, alterrell-interactive.css. Slug per D-83
  ruling (rename includes _redirects entry). MANDATORY pre-build mockup
  before any HTML: structural vs piece zones, shells + placement for the 10
  cards, tab names 2–4, prose width via padding only — wait for AMA
  approval. Locked facts, do not re-litigate: Kevin Hart quote Vogue UK
  June 2021; 700× anchor cut; Card 5 bar-delta cut; "Celebrity giving
  (est.)" labels Cards 3–4. Standard teal lane. Journey block above tabs,
  share block on Overview, Sources last tab, clean dark footer, Ko-fi
  present. Batch B: piece folder + hub card, checklist must pass. Show
  diffs, commit message, AMA uploads. Update queue.

---

## COMPLETED
(move checked entries here with date + one-line result)
