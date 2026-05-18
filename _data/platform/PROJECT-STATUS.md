# PROJECT STATUS
Updated: May 18, 2026

---

## PURPOSE
Production tracking file. Answers: what exists, what is in progress, what blocks deploy.

---

## STATUS KEYS
- LIVE — deployed and accessible
- BUILT — file exists, not deployed or flipped to coming soon
- IN PROGRESS — actively being worked on
- BLOCKED — work cannot continue without a specific resolution
- PARKED — complete or near-complete, not on active calendar
- NOT STARTED — scoped but no build work begun
- CONCEPT — idea stage, not yet in research

---

## PLATFORM

### Hub
LIVE

---

## PIECES

### Concert Tax
**Title:** Female Musicians Earn Less But Share More
**Status:** BUILT — awaiting hub card update
**Blocker:** Hub card title/tagline mismatch (still says "The Male Concert Laziness Surcharge"). Batch A commit pending.
**Canonical file:** `concert-tax/index.html` (final produced May 17, 2026)
**Brief:** `_data/CONCERT-TAX-BRIEF.md` (SUPERSEDED — refer to index file and Design Decision Log)
**Next:** Batch A hub card update, then deploy.

### Naming Series
- Part 0: LIVE (voice pass incomplete — em dashes, AI tone present)
- Part 1: LIVE (strongest of three)
- Part 2: LIVE (voice pass incomplete — em dashes, AI tone present)
**Next:** Type 1 editorial session per part — AI voice pass, then AMA rewrite.
**Canonical file:** `_data/NAMING-SERIES-BRIEF.md`

### Advice From Your Thick Gay Uncles (Big Black Love)
**Status:** IN PROGRESS
**Blocker:** Hub card has [AMA TO CONFIRM] in 3 fields. Essay not complete.
**Canonical file:** `_data/BLACK-GAY-GEOGRAPHY-BRIEF.md`
**Note:** Working title "Big Black Love" retired from status tracking. Use brief title.

### Sodium
**Status:** PARKED (Coming Soon on hub)
**Blocker before reactivation:** Ko-fi missing from journey block (deploy gate). Data refresh needed on menu items.
**Canonical file:** `_data/SODIUM-FACTPACK.md`
**Next:** Type 1 at reactivation — data refresh, Ko-fi addition, subhead lock.

### Where's Beyoncé
**Working title:** Where's Beyoncé?
**Status:** NOT STARTED — HTML shell exists at `where-are-they/index.html`
**Target:** Q3 2026, hurricane season (Aug–Oct)
**Canonical file:** `_data/WHERES-BEYONCE-FACTPACK.md`
**Next:** Type 1 editorial — subhead lock, Helene data, Lahaina/Maui decision.

### Copaganda (Benson & Stabler Aren't Coming / Law & Order: ICE Is a Matter of Time)
**Status:** NOT STARTED — research + visual suite locked
**Canonical file:** `_data/COPAGANDA-PIECE-BRIEF.md`
**Build order locked:** V3→V5→V4→V2→V1
**Next:** Type 1 (copy drafting) or Type 2 (visual builds) — both unblocked. AMA exploring what can be built without essay finalized.

### Congress Part 1A (Senator Selfish / District-74)
**Status:** NOT STARTED
**Target:** Q3/Q4 2026, general election window (Sept–Oct)
**Canonical file:** `_data/CONGRESS-1A-FACTPACK.md`
**Next:** Type 1 editorial — argument refinement, tab architecture lock, title confirmation.

### HBS Digital Museum
**Status:** NOT STARTED — almost nothing locked
**Target:** Q2 2026, June reunion (URGENT if timing holds)
**Canonical file:** `_data/HBS-FACTPACK.md`
**Next:** AMA gathering materials. Type 1 editorial session needed urgently for argument lock, title, format decision.

### Black Sitcoms
**Status:** CONCEPT — data collected, not in research
**Canonical file:** `_data/BLACK-SITCOMS-BRIEF.md`
**Next:** Scope decision (broadcast only vs. cable/streaming) before research pass.

---

## SEPARATE PRODUCTS

### FrameShift
**Status:** Free tier MVP built. Paid tier NOT BUILT — gated on waitlist validation.
**Canonical file:** `_data/FRAMESHIFT-BRIEF.md` (needs BUILT/NOT BUILT markers per feature)
**Next:** Demand validation setup (waitlist + refundable deposit).

### Forever Loved
**Status:** Free tier MVP built. Three-tab structure implemented.
**Canonical file:** `_data/FOREVER-LOVED-FACTPACK.md`
**Next:** Mobile QA, accessibility audit, Ko-fi placement review.

---

## DEPLOY RULE

Nothing moves to LIVE unless:
- Structure approved
- Voice pass completed (if applicable)
- Build verified in browser
- Ko-fi block present (deploy gate)
- Deploy checklist passed
