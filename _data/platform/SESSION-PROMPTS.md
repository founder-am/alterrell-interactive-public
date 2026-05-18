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

Input: approved structure spec


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