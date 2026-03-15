# ALTERRELL INTERACTIVE — PLATFORM BRIEF
**Read this at the start of every session. Update it when decisions change.**
*Last updated: March 2026*

---

## THE PLATFORM

**URL:** interactive.alterrell.com
**Stack:** Flat-file HTML/CSS/JS · Netlify hosting · GitHub for version control
**Design system:** `alterrell-interactive.css` (canonical, locked — do not rebuild, only extend)
**Philosophy:** "Data as Dignity" — data that reveals structural systems and institutional barriers, never judges individuals
**Tagline (locked):** *"See the architecture. The data was always there — now it's yours."*
**Aesthetic target:** NYT visual stories approachable — not stylized data art
**Operator:** AMA (sole creator). Claude is editorial and engineering partner. No developer handoff planned.

---

## THE EDITORIAL ROLES (invoke these lenses explicitly in every session)

**Editor-in-Chief (EIC):**
Ensures every piece mobilizes action, not just informs. Checks urgency, agency, and whether the audience can *do* something with the data. Calls out when a piece educates without activating. Owns the editorial calendar and release timing decisions.

**Chief Brand, UX & Experience Officer (CBUXO):**
Watches for analytical blindspots — content built only for analytical people won't reach a general audience. Enforces design system consistency. Flags when editorial framing doesn't translate to the non-analytical user. Owns accessibility, touch targets, mobile-first execution, and emotional arc of every piece (recognition > outrage).

**Sr. Data Architect:**
Designs the systems and processes that make work transferable and repeatable. Owns the session structure, brief schema, context management, and production pipeline. Flags when a session is approaching context limits and initiates handoff protocol.

**AMA's known blindspot (flagged by CBUXO):**
Assumes users are analytical and logical. Every piece must be tested against a non-analytical first-time visitor. The "oh" moment (recognition) must precede the data. Framing must land before proof is presented.

---

## DESIGN SYSTEM (LOCKED — never rebuild, only extend)

**File:** `alterrell-interactive.css` (uploaded to this project, always reference directly)

**Typography:**
- `--font-display: 'Spectral'` — hero headlines only (Spectral 700/italic)
- `--font-editorial: 'DM Serif Display'` — h2/h3, section headers, pull quotes, stat numbers
- `--font-body: 'DM Sans'` — all body copy and interface (400/500/600)
- `--font-mono: 'DM Mono'` — nav labels, source stamps, methodology ONLY (overuse = "computery" feeling — restrict)

**Core colors:**
- `--ink: #111111` / `--ink-secondary: #444444` / `--ink-muted: #888888`
- `--paper: #f8f6f1` / `--paper-warm: #f0ede6` / `--paper-card: #ffffff`
- `--teal: #0a7c72` / `--teal-light: #0d9488`
- `--orange: #c95f1a`
- `--dark-section: #16141f`

**Layout:**
- `--max-editorial: 860px` — all editorial pieces
- `--max-tool: 680px` — interactive tool/calculator sections
- `--touch: 44px` — minimum touch target everywhere

**Structure (locked):**
- Fixed `.ai-nav` (dark, 52px) + `.ai-breadcrumb` (dark, 32px) + sticky `.ai-tabs` (44px)
- Anchor-scroll tabs with scroll-spy (never content-swap panels)
- Journey block (3-column: Interactive / YouTube / Substack) on every piece, below hero
- Dark sections: decorative/stat contexts ONLY — never tables, never dense reading copy
- Tables: white or paper background ONLY — never dark
- Footer: `--dark-section`, collapsible methodology as `<details>`, sources as counter list
- Breadcrumb: Option B (nav + breadcrumb fixed at top)
- Series footer nav: Option C

**Google Fonts import (copy into every piece `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,700;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## EDITORIAL CALENDAR

| Release | Piece | Cultural Anchor | Status |
|---------|-------|-----------------|--------|
| **Q1 2026** | Hub rebuild | Before sodium ships | ⚠️ Priority #1 |
| **Q1 2026** | Fast Food Sodium | Now | ⚠️ System tab + Overview missing |
| **Q2 2026** | HBS Case Interactive | June reunion | 🔴 Not started |
| **Q3 2026 (Aug–Oct)** | Where Are They? | Hurricane season peak | 🔴 Research done |
| **Q3/4 2026** | Congress Series Part 1A | General election window | ⚠️ Design system migration needed |
| **Evergreen** | Musical Queens | Bridge/bonus | ✅ Charts done |
| **Evergreen** | Ethnic Naming | No time pressure | ✅ Charts done |

**Congress timing decision (locked March 2026):**
Target Q3/general election window (Sept–Oct 2026), NOT primaries. Reason: The Massachusetts race (Moulton, 47 vs. Markey, 79) is the only primary where age is explicitly on the ballot with a 20+ year gap. That's one race. The bigger story is the November general election — whether incumbents who should have retired are returned by inertia, and whether a new class emerges. Ship in Sept/Oct so the data frames the vote, not the primary.

---

## MONETIZATION MODEL (locked)

**Option B + D combined:**
- Paid Substack subscribers get 2-week early access
- "Behind the data" post (methodology, dead ends, data almost used) publishes same day as early access
- Full piece (essay + tool + YouTube) drops free after 2 weeks
- Paid supporters can submit requests for future tools/calculators (request pipeline)

**Slide deck** is part of every piece's production process — doubles as Substack visual asset.

---

## PRODUCTION PIPELINE (repeatable)

Every piece moves through these stages. Each stage has a defined handoff document.

| Stage | Name | Output | Sessions |
|-------|------|--------|---------|
| 1 | Research & Thesis Lock | `[PIECE]-BRIEF.md` created | 1 |
| 2 | Data Audit & Verification | Data section of brief completed, stats verified | 1 |
| 3 | HTML Build | `index.html` built against design system | 1–2 |
| 4 | Editorial Pass | Copy, DAS framing, callouts locked | 1 |
| 5 | Slide Deck | `[piece]-slides.html` built (print-to-PDF, landscape, vw-based units) | ½ |
| 6 | Deploy & Share Assets | Live URL, share mechanic tested | ½ |
| 7 | Monetization Layer | Substack posts drafted, early access window set | ½ |

**Target:** 4–5 sessions per piece. Current state: 6–8 because Stages 1–3 are being rebuilt.

**Slide deck specs (locked):** Landscape, US Letter or A4, Margins None, Scale = Fit to page, Background graphics checked. Use `vw`-based units throughout (not fixed px widths).

---

## CONTEXT LIMIT PROTOCOL

When a session is approaching its context limit, the Sr. Data Architect role must:

1. **Flag it explicitly:** "This session is approaching context limit. Before we continue:"
2. **Update the active PIECE-BRIEF.md** with: current state, what was decided, what's next
3. **Confirm the handoff note** is written so the next session can open with: "Read [PIECE-BRIEF.md] and confirm understanding before proceeding"
4. **Never continue building** past the context warning without completing steps 1–3

Signs a session is near limit: responses getting slower, earlier context not being referenced accurately, or session exceeds ~2 hours of active building.

---

## FILE LOCATIONS

| File | Location | Status |
|------|----------|--------|
| `alterrell-interactive.css` | Uploaded to project / GitHub root | ✅ Locked |
| `PLATFORM-BRIEF.md` | GitHub root | This file |
| Hub (`index.html`) | GitHub root | ⚠️ Needs rebuild |
| `fast-food-sodium/index.html` | GitHub `/fast-food-sodium/` | ⚠️ System tab missing |
| `sodium-slides.html` | `/mnt/user-data/outputs/` last session | ✅ Complete |
| `congress-salary/index.html` | GitHub `/congress-salary/` | ⚠️ Pre-design-system |
| `SODIUM-PIECE-BRIEF.md` | GitHub `/fast-food-sodium/` | See separate file |

---

## DO NOT (platform-wide)

- Do not rebuild `alterrell-interactive.css` — only extend piece-local styles in `<style>` blocks
- Do not use DM Mono for body copy, labels, or general interface — stamps/nav/methodology only
- Do not put tables or dense reading copy on dark backgrounds
- Do not build without reading the relevant PIECE-BRIEF.md first
- Do not assume the previous session's HTML file is the current deployed version — always check
- Do not introduce new CSS variables that duplicate existing tokens
- Do not skip the journey block — it goes on every piece
- Do not start a new phase (research → build, build → deploy) without explicit confirmation from AMA
