# PROJECT STATUS
Updated: 2026-05-19 (Batch B — Sodium Type 2 structural compliance + Concert Tax tab override removal)

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
**Status:** LIVE — structural fixes applied May 18, 2026; tab CSS override removed 2026-05-19
**Canonical file:** `concert-tax/index.html`
**Brief:** `_data/CONCERT-TAX-BRIEF.md` (SUPERSEDED — refer to index file and Design Decision Log)
**Session 3 complete (Type 2 structural):** Container alignment (1.25rem), compact journey bar, Spread the Word reorder, swipeable card gallery, 22-source footer accordion, tab bar alignment.
**Batch B (2026-05-19):** Removed redundant `#ct-tabs` CSS padding override — now inherits global `.ai-tabs` from Batch A.
**2026-05-20 (Type 2 — gallery + journey):**
- All 5 tab card galleries converted from `.ct-gallery` (grid) to `.ct-swipeable-outer` carousel pattern. `.ct-gallery` CSS removed.
- Gallery JS generalized: was ID-based single-gallery, now class-based multi-gallery (`querySelectorAll('.ct-swipeable-outer')`).
- Journey bar items updated: `flex-direction: column`, `gap: 8px`, `padding: 12px 1.25rem`, action 15px/600, dest 9px, divider 36px. Locked as platform standard in DESIGN-DECISION-LOG.md D-20.
- Concert Builder interactive added to Data tab (previous session).
**2026-05-21 (Type 2 — The Receipt tool):** Added "Your Ticket, Decoded" interactive to The Data tab. Part 1: slider ($25-$500) + receipt-style revenue breakdown (NITO split: ticketing 27%, venue 17%, promoter/production 30%, management/agent 18%, artist 8%). Part 2: three production profile cards (swipeable carousel, D-21 pattern) documenting Ed Sheeran / Zach Bryan+Post Malone / Beyonce+Taylor Swift tiers. Editorial close quote. All sourced from NITO Dec 2024 survey, IQ Magazine Jan 2026, Pollstar, Guinness WR, Billboard. Note: USC Annenberg "19 cents per dollar" gender pay gap stat UNVERIFIED — AMA to insert citation before publish.
**Remaining:** Journey HTML still uses piece-local `.ct-journey` — swap to `.ai-journey-compact` in Type 3 template extraction session.
**Next:** Session 4 — Type 1 editorial (AI voice pass, em dashes, AI tone audit on all tabs). Also: verify and insert gender pay gap citation in Receipt tool gender note.

### Naming Series
- Part 0: LIVE at /naming/part-0/ — **Batch C copy update complete 2026-05-20.** AMA-approved copy placed in all 4 body tabs. Hero dek updated. Pull quote in Tab 4 shortened. All tabs: Tab 1 (Roots/Kunta Kinte), Tab 2 (Mills surname), Tab 3 (first name reclamation), Tab 4 (SSA data). Tab 5 (About) untouched.
- Part 1: LIVE at /naming/part-1/ — **Batch C copy update complete 2026-05-20.** AMA-approved copy placed in all 5 tabs. Overview reframed with personal investment framing. Tab 2 restructured (naming approval systems context added before résumé study). Tab 3 h2 updated. Tab 4 chart-editorial blocks updated for both Whitney and Mariah. Tab 5 pattern descriptions and body copy updated.
- Part 2: LIVE at /naming/part-2/ (voice pass incomplete — em dashes, AI tone present. Not touched in Batch C.)
**Slug rename completed May 2026:** /what-in-a-name/* → /naming/*. Redirects active in _redirects.
**Next:** Type 1 editorial session per part — AI voice pass, then AMA rewrite.
**Canonical file:** `_data/pieces/NAMING-SERIES-BRIEF.md`

### Advice From Your Thick Gay Uncles
**Status:** IN PROGRESS — folder renamed to /gay-uncles/ (May 2026)
**Blocker:** Essay/voice pass not complete. [AMA TO PASTE] placeholders throughout piece.
**Canonical file:** `_data/pieces/BLACK-GAY-GEOGRAPHY-BRIEF.md`
**Note:** Slug renamed from /big-black-love/ to /gay-uncles/. Redirect active in _redirects. OG image needs to be created at og/gay-uncles.png.

### Sodium
**Status:** LIVE — structural compliance complete as of 2026-05-19
**Ko-fi:** Present in journey block (Watch / Read / Support).
**Sources:** Dark footer accordion using global `.ai-footer-methodology` + `.ai-footer-sources` CSS classes.
**Hero title:** "Fast Food's Hidden Sodium Tax" (matched hub card 2026-05-19).
**Subhead:** AMA-confirmed May 18 version locked: "The sodium in your meal and the ads targeting your zip code aren't accidents. They're architecture — and they're driving a healthcare crisis that costs all of us."
**Note — OG/Twitter meta descriptions:** Currently retain older word order + "$219B" stat. AMA to confirm whether to update or leave as social-optimized variant.
**Batch B (2026-05-19):** Hero title fixed, subhead confirmed, journey block migrated to `.ai-journey-compact`, footer migrated to global classes, nav/breadcrumb DOM order corrected, redundant piece-local journey CSS removed.
**Remaining:** Data refresh on menu items — requires AMA to provide updated nutrition values. Not a build blocker, piece data is 2024-2025 vintage.
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
