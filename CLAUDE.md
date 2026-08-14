# READ FIRST — alterrell-interactive-public

## UPLOAD GATE
DO NOT begin any build, editorial, or audit session without reading,
in this order:
1. ALTERRELL-INTERACTIVE-BIBLE.md  (canonical rules — the only file at this path)
2. src/pages/pieces/[slug].astro  (the only template)
3. src/styles/alterrell-interactive.css  (canonical; the root copy is
   pre-migration)
4. _data/platform/PROJECT-STATUS.md  (current state, upload queue)
5. _design/CHART-LIBRARY-REFERENCE.html  (chart work only)
6. tools/ai-card-studio.html  (card export tool, use only when
   generating share-card PNGs)
If a file is not readable, STOP and tell AMA rather than building from
memory.

piece-template.html is archived at
_archive/legacy-2026-08-13/piece-template.html on 2026-08-13. It is the
pre-Astro template. Do not read it as canon and do not build from it. The
template is src/pages/pieces/[slug].astro, and piece bodies are .mdx
entries in src/content/pieces/ that it renders.

## SESSION RULES
D-107: A turn containing a question contains no writes. A turn
containing writes contains no questions.

## LEDGER
Every session in this repo appends one line to
../alterrell-hq/LEDGER.md under the current week heading, then
commits and pushes alterrell-hq.

---

# Working rules

## Output
Any answer longer than 5 lines is written to a file, not printed to the
terminal. Write it into ../alterrell-hq/reports/ named YYYY-MM-DD-[slug].md,
and print only the file path plus a summary of at most 3 lines. This applies to
findings, analyses, recommendations, error explanations, and disposition
lists, not only to formal reports. If a session produces several such
answers, append to one file rather than creating several.

## Model
Any task touching more than one file runs on Opus 5. Sonnet is for
single-file mechanical passes only. Haiku is for read-and-report only.
State which model ran the task in the summary.

## Rules and exceptions
A rule exists only if _tools/check.js evaluates it. Prose rules are not
rules. There is no exceptions file. A failing rule stays FAIL and may
carry a KNOWN date; the failure count is never reduced for bookkeeping.
A rule failing on most pieces is a wrong rule, not many broken pieces.

## Writes
Never move a file to old/ or delete a file without explicit instruction.
Propose demotions as a commented-out script for review.
Every session appends exactly one line to ../alterrell-hq/LEDGER.md in the
format: - item | status | date
Status is never "completed" for work that was not verified done.

## Filenames
Any file whose name exists in more than one repo carries a first line
identifying its repo, in the form: # READ FIRST — [repo name].
Piece files are always index.html; when uploading one to chat, rename
it to [piece]-index.html first.
