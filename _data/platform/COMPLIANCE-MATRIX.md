# COMPLIANCE MATRIX — Alterrell Interactive Platform
Last updated: 2026-05-19 (Batch B — Sodium Type 2)

---

## GLOBAL PLATFORM STANDARDS

| Standard | Status | Notes |
|---|---|---|
| Tab bar inside content container | ✅ DONE 2026-05-19 | `padding-left/right: max(1.25rem, calc((100% - var(--max-editorial)) / 2))` promoted to `.ai-tabs` in global CSS. Concert Tax piece-local `#ct-tabs` override is now redundant — remove in Type 2 session. |
| Journey block pattern (compact) | ✅ DONE 2026-05-19 | `.ai-journey-compact` and child selectors added to global CSS (section 11b). Piece HTML still uses piece-local `.ct-journey` — update each piece in their Type 2 sessions. |
| Dark footer sources accordion | ✅ DONE 2026-05-19 | `.ai-footer-methodology` + `.ai-footer-sources` classes already existed in global CSS (section 12). Concert Tax uses them correctly. Sodium uses all inline styles and `<ol>` — convert in Sodium Type 2 session. |
| Mobile-first tab rendering | ✅ | Enforced in global `.ai-tabs` |
| Journey block: 3 items only (pieces) | ✅ | Enforced by deploy checklist |
| OG tags on all pieces | 🔲 | Audit needed — not checked in Batch A |
| Share block on all pieces | 🔲 | Audit needed — not checked in Batch A |
| Breadcrumb on all pieces | 🔲 | Audit needed — not checked in Batch A |

---

## PIECE-BY-PIECE STATUS

### concert-tax
| Item | Status | Notes |
|---|---|---|
| Tab bar alignment | ✅ DONE 2026-05-19 | `#ct-tabs` CSS padding override removed in Batch B. Now inherits global `.ai-tabs` padding cleanly. |
| Journey block | ⚠️ HTML only | Uses piece-local `.ct-journey`. CSS class `.ai-journey-compact` exists — swap HTML in next Concert Tax Type 2. |
| Footer sources | ✅ | Uses `.ai-footer-methodology` + `.ai-footer-sources` (global classes). Correct. |
| `.ct-sources-group` dividers | ✅ | Piece-local — intentional. Fine to keep. |

### fast-food-sodium
| Item | Status | Notes |
|---|---|---|
| Hero title | ✅ DONE 2026-05-19 | Changed from "The Hidden Cost of Cheap Protein" to "Fast Food's Hidden Sodium Tax". Matches hub card and `<title>` tag. |
| Hero subhead | ✅ DONE 2026-05-19 | Updated to AMA-confirmed May 18 version: "The sodium in your meal and the ads targeting your zip code..." OG/Twitter meta descriptions intentionally retain different optimized wording ($219B stat) — AMA to confirm if update needed. |
| Structure order | ✅ DONE 2026-05-19 | Nav/breadcrumb DOM order corrected: breadcrumb now precedes nav per deploy checklist. Both are position:fixed so no visual change. |
| Tab bar alignment | ✅ | No piece-local `.ai-tabs` override — inherits global class cleanly. |
| Journey block | ✅ DONE 2026-05-19 | Replaced piece-local `.sodium-journey` (3-column grid with icons) with `.ai-journey-compact` markup. All piece-local CSS removed. |
| Footer sources | ✅ DONE 2026-05-19 | Converted: `<footer>` → `class="ai-footer"`, inner div → `class="ai-footer-inner"`, `<details>` → `class="ai-footer-methodology"`, `<ol>` → `<ul class="ai-footer-sources">`. All inline styles removed from accordion. Note: footer top padding increased from `var(--space-md)` to `var(--space-xl)` by inheriting global `.ai-footer` — verify visually. |

### gay-uncles
| Item | Status | Notes |
|---|---|---|
| Tab bar alignment | ✅ | Piece-local override changes background/border only — inherits new global padding cleanly. No conflict. |
| Journey block | 🔲 | Not audited in Batch A. |
| Footer sources | 🔲 | Not audited in Batch A. |

### naming/part-0
| Item | Status | Notes |
|---|---|---|
| Tab bar alignment | ✅ | Piece-local override changes background/border only. Inherits new global padding cleanly. No conflict. |
| Journey block | 🔲 | Not audited in Batch A. |
| Footer sources | 🔲 | Not audited in Batch A. |

### naming/part-1
| Item | Status | Notes |
|---|---|---|
| Tab bar alignment | ✅ | Piece-local override changes background/border only. Inherits new global padding cleanly. No conflict. |
| Journey block | 🔲 | Not audited in Batch A. |
| Footer sources | 🔲 | Not audited in Batch A. |

### naming/part-2
| Item | Status | Notes |
|---|---|---|
| Tab bar alignment | ✅ | Piece-local override changes background/border only. Inherits new global padding cleanly. No conflict. |
| Journey block | 🔲 | Not audited in Batch A. |
| Footer sources | 🔲 | Not audited in Batch A. |

---

## IMPLEMENTATION NOTES

### Task 3 — Sources Accordion: Two Divergent Implementations Found

**Concert Tax (correct):**
- Outer: `<details class="ai-footer-methodology">`
- Summary: `<summary>Methodology & Sources</summary>` — styled via global CSS (+ / − markers, teal color)
- Body: `<div class="ai-footer-methodology-body">`
- Prose: `<p class="ai-footer-methodology-note">`
- List: `<ul class="ai-footer-sources">` — styled via global CSS (CSS counters, mono font, `#504d68` color)
- Group headers: `.ct-sources-group` — piece-local, resets counter, adds category label

**Sodium (needs conversion):**
- Raw `<details style="...">` — all inline styles
- `<summary>` — inline styles, no +/− markers
- `<ol>` — browser-native numbering, inline styles, different color (`#444` vs `#504d68`)
- Missing: counter styling, group header support, design-system typography

**Conclusion:** No new global CSS was needed for Task 3. Pattern already exists. Sodium conversion is a Type 2 task.

---

## NEXT SESSIONS

| Session | Type | Pieces | Work |
|---|---|---|---|
| Next | Type 2 | concert-tax | Swap `.ct-journey` HTML to `.ai-journey-compact` (CSS override already removed in Batch B) |
| Next | Type 2 | gay-uncles, naming/* | Audit + add journey compact, confirm footer pattern, check structure order |
| TBD | Batch C | Platform | OG tag audit, share block audit, breadcrumb audit across all pieces |
