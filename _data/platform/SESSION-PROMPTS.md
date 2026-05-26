# SESSION-PROMPTS.md
Updated: May 2026

---

## SESSION TYPES

### TYPE 1 — Editorial (claude.ai)
Use for:
- essays
- argument shaping
- tab mapping
- card extraction

Prompt:

Type 1 session.
Piece: [NAME]
Goal: [ONE SENTENCE]

Input: [AMA essay or draft]


Output required:
- argument structure
- tab system
- key sections mapped

No HTML. No styling. No voice rewrite.

---

### TYPE 2 — BUILD (Claude Code)
Use for:
- implementing approved structure
- building HTML pages
- layout execution

Prompt:

Type 2 session.
Piece: [NAME]
Task: [ONE SENTENCE]

Read these files in this exact order and confirm each aloud:
1. `_data/platform/PLATFORM-BRIEF.md`
2. `_data/platform/DEPLOY-CHECKLIST.md`
3. `_data/templates/VISUAL-REFERENCE.html`
4. `_data/templates/piece-template.html`
5. The relevant piece brief from `_data/pieces/`
6. The piece's existing `index.html` (if editing, not creating)

After reading, state:
- The top 7 deploy checklist items you will enforce
- Which tab structure the piece uses
- Which interactive tool pattern is used on which tab

---
PRE-BUILD MOCKUP GATE (mandatory):
Before writing ANY HTML, present a section-by-section mockup showing:
- Which zones are structural (unchanged from template)
- Which zones are piece-specific (what content goes where)
- Which card shells are used and where
- Which interactive tool pattern is used on which tab
- How prose width is maintained (single .ai-inner container)
- Tab names for tabs 2–4

AMA confirms the mockup. Only then does the build proceed.
If you skip the mockup and go straight to code, the session has failed.
---

Do not copy any files to output directories. Write directly to the repo path.

Rules:
- no new narrative decisions
- no rewriting copy
- only implementation

---

### TYPE 3 — PLATFORM (Claude Code)
Use for:
- CSS
- index.html
- global changes

Prompt:

Type 3 session.
Task: [ONE SENTENCE]
Files: [LIST]


---

## PRE-BUILD CHECK (MANDATORY)

Before any build:
Claude must confirm:
- files read
- scope understood
- no structural invention will occur