# PROJECT STATUS
Updated: May 18, 2026 (Session 3 — Concert Tax structural fixes)

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
LIVE — rebuilt May 2026 with two-column category layout (Industry / Culture), filter pills, Coming Next section. Container upgraded to 1080px platform-wide.

### Platform CSS
Container `--max-editorial` upgraded from 860px to 1080px (May 2026). Category color system added: `--category-industry`, `--category-culture`, `--category-govt`, `--category-health`.

---

## PIECES

### Concert Tax
**Title:** Female Musicians Earn Less But Share More
**Status:** LIVE — structural fixes applied May 18, 2026
**Canonical file:** `concert-tax/index.html`
**Brief:** `_data/CONCERT-TAX-BRIEF.md` (SUPERSEDED — refer to index file and Design Decision Log)
**Session 3 complete (Type 2 structural):** Container alignment (1.25rem), compact journey bar, Spread the Word reorder, swipeable card gallery, 22-source footer accordion, tab bar alignment.
**Next:** Session 4 — Type 1 editorial (AI voice pass, em dashes, AI tone audit on all tabs).

### Naming Series
- Part 0: LIVE at /naming/part-0/ (voice pass incomplete — em dashes, AI tone present)
- Part 1: LIVE at /naming/part-1/ (strongest of three)
- Part 2: LIVE at /naming/part-2/ (voice pass incomplete — em dashes, AI tone present)
**Slug rename completed May 2026:** /what-in-a-name/* → /naming/*. Redirects active in _redirects.
**Next:** Type 1 editorial session per part — AI voice pass, then AMA rewrite.
**Canonical file:** `_data/pieces/NAMING-SERIES-BRIEF.md`

### Advice From Your Thick Gay Uncles
**Status:** IN PROGRESS — folder renamed to /gay-uncles/ (May 2026)
**Blocker:** Essay/voice pass not complete. [AMA TO PASTE] placeholders throughout piece.
**Canonical file:** `_data/pieces/BLACK-GAY-GEOGRAPHY-BRIEF.md`
**Note:** Slug renamed from /big-black-love/ to /gay-uncles/. Redirect active in _redirects. OG image needs to be created at og/gay-uncles.png.

### Sodium
**Status:** LIVE — deploy blockers resolved May 2026
**Ko-fi:** Added to journey block (was "Explore" → now "Support / Ko-fi"). Deploy gate cleared.
**Sources tab:** Relocated to dark footer accordion (collapsible). Tab removed from tab bar.
**Subhead:** Reads — confirm with AMA: "The sodium in your meal and the ads targeting your zip code aren't accidents. They're architecture..."
**Remaining:** Data refresh on menu items still needed — requires AMA to provide updated nutrition values. Not a build blocker, but piece data is 2024-2025 vintage.
**Canonical file:** `_data/pieces/SODIUM-FACTPACK.md`

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
