# ALTERRELL INTERACTIVE HUB — PIECE BRIEF
**Read this before touching index.html. Update before ending any session.**
*Last updated: March 2026*

---

## STATUS
**Complete — deployed Q1 2026.**
**Priority: Ships BEFORE Fast Food Sodium.**
**Target: 1 session to complete if this brief is read first.**

---

## WHAT THE HUB IS

The landing page for interactive.alterrell.com. A portfolio grid of pieces with a platform identity. Does not host content — it links to each piece. Sets the tone for the entire platform.

---

## LOCKED DECISIONS

**Structure:**
- Minimal header: Platform wordmark + tagline
- Tagline (locked): *"See the architecture. The data was always there — now it's yours."*
- About text placeholder (short, to be written by AMA — leave slot)
- Project card grid (primary content)
- Minimal footer
- No cross-links to Mills Mirror, Rehearse, Obsidian Futures for now

**Project card design (locked Option B):**
- Landscape card orientation
- Series header label (DM Mono, small caps)
- Piece title (DM Serif Display)
- One-line description (DM Sans)
- Status pill tag: Published / In Progress / Coming Soon
- "Coming soon" = grayed out, pointer-events: none, opacity ~0.45
- Abstract icon or solid color block thumbnail (not screenshots yet)

**Navigation:**
- `.ai-nav` at top (dark, platform brand)
- No breadcrumb on hub (breadcrumb is per-piece)
- No tab bar on hub

**What's NOT on the hub:**
- No Ko-fi / tip link yet (AMA to add when ready)
- No Shopify (future, when AMA decides)
- No Mills Mirror / Rehearse / Obsidian Futures links (deferred)

---

## CURRENT STATE OF PIECES (for card status pills)

| Piece | Status pill | URL |
|-------|-------------|-----|
| Fast Food Sodium | In Progress | `/fast-food-sodium/` |
| Congress Series Part 1A | In Progress | `/congress-salary/` |
| Where Are They? | Coming Soon | — |
| HBS Case | Coming Soon | — |
| Musical Queens | Coming Soon | — |
| Ethnic Naming | Coming Soon | — |

---

## OPEN ITEMS

1. **Build `index.html` from scratch** against `alterrell-interactive.css`
2. **AMA to provide:** Short about text (2–3 sentences) + any tagline variant to test
3. **Confirm card order** — does sodium lead, or is there a different sequencing logic?
4. **Test on mobile** — card grid must stack cleanly at 375px

---

## FILES

| File | Location | State |
|------|----------|-------|
| `index.html` | GitHub root | ⚠️ Previous version has known drift — rebuild, do not patch |
| Reference file | `alterrell-interactive.html` (was uploaded in session `56226f0a`) | Available in past uploads |

---

## DO NOT

- Do not patch the existing `index.html` — rebuild it
- Do not add cross-links to other Alterrell brands
- Do not add Shopify, Ko-fi, or tip links without AMA instruction
- Do not include a breadcrumb (hub-only exception)
- Do not make Coming Soon cards clickable
