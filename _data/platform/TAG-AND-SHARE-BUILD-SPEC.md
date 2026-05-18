# BUILD SPEC: TAG SYSTEM + SHAREABLE ASSETS TAB
**Scoped:** May 6, 2026
**Session type required:** Type 3 (hub/CSS) + Type 2 (per piece, shareable tab)
**Priority:** Ship after Concert Tax. Do not mix with active piece builds.

---

## OVERVIEW

Two connected platform features to build:

1. **Tag system** — visible tags on hub cards and piece pages, with future filtering capability built in from day one via data attributes
2. **Shareable assets tab** — a dedicated tab on every piece page with purpose-built mobile-optimized share cards

These are separate builds but should be specced together because the tag system informs what appears on shareable assets cards.

---

## FEATURE 1: TAG SYSTEM

### What exists today
- `data-category` attributes exist on hub cards (scoped April 2026)
- Values: `government`, `industry`, `culture`, `health`
- These do not match the locked taxonomy above — they need to be migrated

### What needs to be built

**Hub (Type 3 session — Batch A):**
- Migrate all `data-category` values to match locked taxonomy tags
- Add `data-tags` attribute to every hub card with comma-separated tag values
- Render visible tag pills on each hub card in the locked position (below headline row, above CTA)
- Tag pills: navy fill, white text, DM Sans 800, 9–10px, uppercase, tracked, border-radius 2px
- No filter UI yet — data attributes only, filter deferred to a future session
- Hub card left border color: electric blue `#2563EB` for all active pieces (no tag-based color differentiation until highlight color is decided)

**Piece pages (Type 2 session per piece — Batch B):**
- Add tag block to every live piece page in the locked position (below headline row, above body copy)
- Same tag pill styling as hub cards
- Tags must match what appears on the hub card for that piece

**Files that will be modified:**
- `index.html` (hub)
- `fast-food-sodium/index.html`
- `what-in-a-name/index.html` (all three parts)
- `where-are-they/index.html`
- `concert-tax/index.html` (when built)

**Checklist gate:** Tag system ships in the same commit as hub. Piece page tags ship in each piece's next scheduled build session — not in a separate standalone commit.

---

## FEATURE 2: SHAREABLE ASSETS TAB

### Why this exists
The platform is mobile-forward. Readers read and share from the same device. Dark-field or complex layouts do not screenshot cleanly. Rather than constraining the site design to what screenshots well, each piece gets a dedicated tab with purpose-built share cards — white background, clean, mobile-optimized, sized correctly for the platform where sharing is most likely to happen.

### Tab placement
The shareable assets tab is always the last tab in the tab bar. It never interrupts the editorial flow of the piece. Label: **Share** (DM Sans 800, uppercase, tracked — consistent with all other tab labels).

### What the tab contains
Each piece's Share tab contains 2–4 shareable asset cards. Minimum viable set per piece:

**Card 1 — Stat card**
- White background `#FFFFFF`
- One dominant stat from the piece (same stat used in the hub card stat band)
- Stat number: Spectral 800, large
- Context line: DM Sans 500, small
- Platform wordmark at bottom: "ALTERRELL Interactive" in locked type treatment
- Piece title below wordmark: DM Sans 500, small
- No teal, no paper, no orange — navy and white only

**Card 2 — Argument card**
- White background
- Piece title in Spectral 800
- One-sentence subhead from the piece
- Tags from the piece
- Platform wordmark at bottom
- No imagery

**Card 3 (optional) — Data pull card**
- A single data finding stated as a plain sentence
- Source stamp in DM Mono
- Platform wordmark at bottom

### How sharing works
Each card has a **Copy Image** button below it (not inside the card — the button is outside the card boundary so it does not appear in the screenshot). On mobile, this triggers the native share sheet. On desktop, it copies the card as an image to clipboard.

Implementation: `html2canvas` or equivalent. Card renders at 1080×1080px for square social format. Button label: "Copy to share" — DM Sans 500, navy text, no fill, border `1px solid #E2E0DC`.

### What the Share tab does NOT contain
- No methodology
- No sources
- No navigation to other tabs
- No Ko-fi block (Ko-fi lives on the last content tab, not the Share tab)
- No body copy

### CSS additions required (alterrell-interactive.css extension only)
```css
/* Share tab card container */
.share-card-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px 0;
}

/* Individual share card */
.share-card {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  background: #FFFFFF;
  border: 1px solid #E2E0DC;
  border-radius: 4px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Copy button — outside card boundary */
.share-copy-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #0F172A;
  background: none;
  border: 1px solid #E2E0DC;
  border-radius: 2px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 8px;
}
```

### Per-piece work required
Each piece needs a Share tab built in its next scheduled Type 2 session. This is not a separate standalone session — it ships in the same commit as whatever content update is next for that piece.

**Share tab content must be drafted in a Type 1 session before the Type 2 build.** AMA approves the stat, argument card copy, and optional data pull card before Claude Code builds the tab.

---

## SEQUENCING

| Step | Session type | What ships |
|---|---|---|
| 1 | Type 3 — Batch A | Hub tag migration: data attributes + visible tag pills on all hub cards |
| 2 | Type 1 per piece | Draft Share tab content (stat, argument copy, optional data pull) for each piece |
| 3 | Type 2 per piece | Add tag block to piece page + build Share tab — same commit, same session |

Do not build Share tabs without approved content from a Type 1 session first. Do not ship piece page tags without the hub tag migration landing first.

---

## OPEN DECISIONS (resolve in Type 1 before build)

1. Does the Share tab label read "Share" or "Get Assets" or something else?
2. Are share cards square (1080×1080) only, or do we also build a story format (1080×1920)?
3. Does the Copy button use html2canvas, or does AMA prefer a different method?
4. Tag color differentiation by category — deferred until highlight color is decided. Confirm this is still the call before hub tag build session opens.

---
