# READ FIRST — alterrell-interactive-public

## Archived: the tuner v3 specificity-hack layer (2026-08-13)

Nothing was deleted. The verbatim original of the removed CSS layer lives in
two places, both created before any file in this branch was touched:

    git show pre-hub-rewrite-2026-08-13:alterrell-interactive.css | sed -n '1998,$p'
    git show pre-hub-rewrite-2026-08-13:src/styles/alterrell-interactive.css | sed -n '1998,$p'

and in the full-repo tarball:

    ../../../alterrell-interactive-BACKUP-2026-08-13.tgz   (66,811,055 bytes)

### What it was
Lines 1998 to 2114 of both copies of `alterrell-interactive.css`: the tuner v3
export, dated 2026-08-13, in which every selector carried a prefix combining
`body` with a negated id. That prefix raised each rule to id-level specificity.

### Why it existed
Astro scopes a component `<style>` block with a `[data-astro-cid-*]` attribute
selector, which adds a class-level unit to every rule in it. The hub's own
block therefore outranked the shared stylesheet, and the prefix was the
counterweight.

### Why it is gone
`src/pages/index.astro` now carries no `<style>` block at all, so there is
nothing left to outrank. The same declarations are live at the tail of both
copies of `alterrell-interactive.css` at normal, single-class specificity.

### What is not a straight copy
Three declarations from the export were not carried forward, each because it
contradicted an acceptance line in the 2026-08-13 rebuild. All three are named,
with the conflict printed in full, in
`../../../alterrell-hq/reports/2026-08-13-hub-rewrite.md`.
