# Design Principles — Alterrell Interactive
Finalized: June 9, 2026
Authority: This file is canonical for all visual production. Claude Code self-audits against these before outputting any card or chart HTML.

## HARD GATES (fail = rebuild)

### P-01: One focal point per component
The most important element must have 2× the visual weight of anything else. No close seconds.

### P-03: Color = meaning
Two elements share a color only if they share a semantic role. Unique color for every unique role. Minimum 3 distinct semantic colors per card with data.

### P-04: 8:1 minimum type scale contrast
Largest element to smallest. If the ratio doesn't hit 8:1, start over.

### P-05: 40px+ gaps between all zones
Whitespace creates a hard pause between thoughts. Anything less than 40px won't read as a break. Never compress below 32px.

### P-06: Data viz must be visible from across the room
20px+ bars minimum. Labels ≥12px. Bar height wins over the empty space cap (P-16) when data points are few — never shrink bars to hit the 5% rule.

### P-11: No two elements share more than 3 type properties
Size, color, face, weight — every element needs a unique combination of at least 2.

### P-12: One color per stat
Never put two numbers side by side without color-coding. Dividers alone don't cut it.

### P-16: 5% empty space per component, max
If a zone takes up more than 5% of the height without earning that space, it's an error. Exception: bar height (P-06) wins over this ceiling when data points are few.

## GUIDELINES (enforce, but allow override with AMA approval)

### P-02: Center-align key info, left-align supporting copy
Names, titles, heroes, stats centered. Body copy, metadata, utility left. Context-dependent: centering applies to card-native ceremonial layout; left-align applies to chart data layouts.

### P-07: Brand stamps at 100% opacity
Series identity must be unmistakable. Small is fine. Faint is not.

### P-08: Grid over list
2×2 or 3×3 for parallel content. Vertical list for ranked or ordered content only.

### P-09: Display type has physical weight
OF card-native hero names use stroke outline treatment:
- -webkit-text-stroke: 1px rgba(248,246,241,0.6)
- paint-order: stroke fill
- text-shadow: 0 2px 6px rgba(0,0,0,0.5)
Teal-lane pieces use flat rendering — no texture effects.

### P-10: Cards are physical objects
Always have a surface. Always have an edge. Always sit on a visible background.

### P-13: Respect reference spacing
Preserve density, negative space, and proportions from the reference. Recoloring is adaptation; resizing needs approval. When spacing comes from the reference, preserve it. When spacing comes from filling a preset frame, dead space rule (P-14) applies.

### P-14: Dead space is a mistake
Components shrink to fit content. Stretching to fill a preset frame is wrong. Test: did a human design this space, or did it appear because the frame was too big? If designed — keep it. If incidental — eliminate it.

### P-15: Weight first, color second
Typographic weight does the hierarchy work. Color reinforces — it does not substitute.

## PLATFORM SPECS

- Spectral 700 = platform standard (teal-lane)
- Spectral 800 = OF card-native only (BTU, Crowning Achievements names)
- Paper canonical: #f8f6f1
- Paper warm: #f0ede6
- Paper card: #ffffff
- Teal #0a7c72: retired as page-section background. Active as accent, border, bar fill, UI element.
- Teal-lane cards: 300×280px, 7px teal border, white interior
- OF card-native: 380×660px, accent color border, dark bg #0a0a12 (D-72 locked)
- Four card shells: A (stat), B (chart), C (pull quote), D (comparison)
