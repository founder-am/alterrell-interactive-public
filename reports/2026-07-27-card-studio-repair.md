# Card Studio Repair

**Date:** 2026-07-27
**Batch A.** Touched only `tools/ai-card-studio.html` and `CLAUDE.md`. No piece file, no other CSS file, no Bible edit.

Fixes the tool-fidelity conflict surfaced in `reports/2026-07-27-reference-extraction.md`: `tools/ai-card-studio.html` reuses `alterrell-interactive.css`'s `.carousel__card*` class names ("so Puppeteer selectors work," per the tool's own header comment) but had hardcoded different values under six of them, each marked `/* LOCKED */` as if correct.

---

## Every value changed

| Element | Property | Before | After | Source of truth |
|---|---|---|---|---|
| `.carousel__card-title` | `font-family` | `'DM Sans', system-ui, sans-serif` | `var(--font-editorial)` → `'DM Serif Display', Georgia, serif` | alterrell-interactive.css:1731 |
| `.carousel__card-title` | `font-size` | `12px` | `1rem` (16px) | alterrell-interactive.css:1732 |
| `.carousel__card-title` | `font-weight` | `500` | *(removed — no override, matches platform)* | alterrell-interactive.css:1730–1736 has no weight declaration |
| `.carousel__card-label` (comp-tag) | `font-size` | `9px` (hardcoded) | `var(--text-micro)` → `0.625rem` (10px) | alterrell-interactive.css:1722 |
| `.carousel__card-source` | `color` | `#999` (flat) | `var(--c-ink-label)` (lane-dependent) | alterrell-interactive.css:1759 |
| `.carousel__card-head` | `padding` | `0.75rem 0.875rem` | `0.875rem 1rem 0.625rem` | alterrell-interactive.css:1700 |
| `.carousel__card-foot` | `padding` | `0.5rem 0.875rem` | `0.5rem 1rem 0.625rem` | alterrell-interactive.css:1713 |
| `.carousel__card-head` | `border-bottom` | Applied unconditionally to every shell | Removed from the base rule; now applied only via `.card--a .carousel__card-head` (which already existed in the file, previously redundant) | alterrell-interactive.css:1763–1766 |

**Supporting additions**, needed to make the above `var()` values actually resolve (the tool is deliberately standalone — no import of `alterrell-interactive.css` — so its own token set had gaps):

- `:root` gained `--font-editorial: 'DM Serif Display', Georgia, serif;` and `--text-micro: 0.625rem;`, copied verbatim from `alterrell-interactive.css`'s own `:root` (lines 66, 77). The tool already had an unused `--font-ed` token holding the same font stack — left in place, untouched, since removing it wasn't asked for and it's not referenced anywhere in the card CSS.
- `.lane-ai` and `.lane-of` each gained a `--c-ink-label` custom property, since the live platform's `.carousel--teal` / `.carousel--dark` classes define one and the tool's lane blocks didn't. Values are the *resolved* colors from the platform tokens, not re-derived indirection chains (the tool doesn't import `--ink-muted` etc.):
  - `.lane-ai`: `--c-ink-label: #888888;` — matches `.carousel--teal`'s `--c-ink-label: var(--ink-muted)`, and `--ink-muted` resolves to `#888888` in `alterrell-interactive.css`'s `:root` (line 34).
  - `.lane-of`: `--c-ink-label: #E8B923;` — matches `.carousel--dark`'s `--c-ink-label: #E8B923` directly.
- The existing `.card--a .carousel__card-head { border-bottom: ... }` rule (previously redundant, since the base rule already applied the border to every shell) gained `padding-bottom: 0.625rem;` to fully mirror `alterrell-interactive.css` lines 1763–1766, which re-declare that value redundantly too.

**One correction to the task's own framing, flagged rather than silently followed:** the instruction described the source-stamp fix as "lane-dependent (teal or gold)." The live platform's actual `--c-ink-label` token for the teal lane is **not** teal — `.carousel--teal`'s `--c-ink-label` is `var(--ink-muted)` (`#888888`, a muted gray), not `var(--teal)`. Only the dark/OF lane is genuinely gold (`#E8B923`). I implemented the literal instruction — `color: var(--c-ink-label)` — and wired the token to the platform's *actual* resolved values (gray for AI lane, gold for OF lane), since the task's own preamble says the goal is to "match the live platform stylesheet exactly." Worth noting this "teal or gold" phrasing likely traces back to my own imprecise wording in the prior audit report's headline-finding table, which is probably where this instruction's description originated.

---

## Explicitly not changed (in scope, but out of this pass's six bullets)

`.carousel__card-source`'s `font-size` stays `8px`. The live platform value is `var(--text-micro)` (10px) — same token I *did* apply to comp-tag — but the task's bullet for source only named `color`, not `font-size`, so it was left alone per "do not touch any other rule in the file." This is a small residual delta (8px vs. 10px) distinct from the CARD-07 item below; flagging it here for visibility rather than fixing it unprompted.

---

## Screenshot comparison

Method: loaded one test card per shell (A/B/C/D) into the tool, exported all four through the tool's own **Export All PNG** button (the real `html2canvas` pipeline, not just a preview screenshot), and separately screenshotted the corresponding `.card--a/b/c/d` element from `piece-template.html`'s own demo carousel — the canonical template, styled purely by `alterrell-interactive.css` with no tool involved. Saved to `reports/2026-07-27-card-studio-repair/`:

- `exported-repair-check-shell-{a,b,c,d}-01.png` — tool export output
- `live-shell-{A,B,C,D}.png` — live platform component, same shell

**Result: visual match confirmed** on every property this repair touched:

- **Title size/font** — Shell A and Shell B both carry a title in the reference template; in both, the exported card's title now renders as the same bold display-serif face as the live card's placeholder title (previously it would have been a smaller sans-serif line). Shells C and D's reference demo cards in `piece-template.html` don't include a title element at all (C has no head; D's head has only the label), so those two shells' title styling is confirmed via A/B rather than directly.
- **Comp-tag size/color** — confirmed matching (small, teal, uppercase DM Mono) across all four shells; both sides now share the same 10px token.
- **Source color** — confirmed matching (muted gray, not flat `#999`) across all four shells.
- **Head/foot padding** — visually consistent spacing and proportions between exported and live cards on the shells where both have comparable content (A, B); C and D's reference demo cards are minimal (no head on C; no compare-grid actually populated on D, just a plain paragraph), which limits pixel-level confirmation there, but nothing suggests a mismatch — the padding values are now byte-identical to the CSS source, not approximated.

No console errors during load or export (`TOOL_CONSOLE_ERRORS: []`).

One incidental, pre-existing observation, not introduced by this repair and not fixed here (out of scope — no markup changes were made, only the six named CSS properties): the tool's `buildCardHTML`/`buildThumbHTML` functions always emit a `carousel__card-head` for every shell, while `piece-template.html`'s own Shell C demo card omits the head entirely. This is a markup-choice difference, not a CSS-fidelity issue, and wasn't part of this repair's scope.

---

## Deferred, not fixed here

Per the task's explicit instruction: **CARD-07's comp-tag figure and `--text-micro` are not touched.** The Bible's `CARD-07` states comp-tag is "DM Mono 9px" (sourced from `AI-MASTER-RULES.md` §8), while the live platform's actual `.carousel__card-label` uses `var(--text-micro)`, which resolves to 10px. This repair moved the tool from a hardcoded 9px to the live token (10px) — which means the tool now matches the *live CSS*, but by the same move it now diverges from the *Bible's stated rule* by that same 1px. This three-way mismatch (Bible: 9px, live CSS: 10px, tool pre-repair: 9px, tool post-repair: 10px) is exactly the open item flagged in the prior audit and remains open — resolving it means either amending CARD-07's stated figure or amending the `--text-micro` token/its usage in `alterrell-interactive.css`, neither of which this Batch A touches.

---

*End of report.*
