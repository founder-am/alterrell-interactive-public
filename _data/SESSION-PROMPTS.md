# SESSION-PROMPTS.md

Copy-paste session openers for each session type. Each prompt is self-contained.

---

## HOW CLAUDE CODE PROMPTS WORK IN THIS PROJECT

Before every Claude Code prompt, Claude surfaces two buckets and a recommendation:

```
NEEDS YOUR INPUT:
[editorial, copy, design intent, title, data — only what requires AMA]

SDA HANDLING:
[technical implementation — no input needed unless something feels wrong]

IMPLEMENTATION:
Option A — [leanest approach]
Option B — [if A has a known risk, what adds safety]
Recommend: A [or B, with one sentence why]
```

AMA responds to the input bucket only. Claude writes the prompt based on that response.

---

## FILE READ RULES — lean by default

- **Always:** `_data/PLATFORM-BRIEF.md` · `_data/DEPLOY-CHECKLIST.md`
- **Only if copy is changing:** relevant `_data/[PIECE]-BRIEF.md`
- **Only if HTML is changing:** the piece `index.html`
- **Only if CSS is changing:** `alterrell-interactive.css`
- **All five files:** new piece builds only (Type 2 from scratch)

---

## TYPE 1 — Editorial Session (claude.ai)

**Use for:** Research, data audit, editorial framing, thesis lock, tab/section map, copy drafting, AI voice pass. No code. No file builds.

**Paste this to open:**

```
Type 1 session. Piece: [NAME]. Goal: [ONE SENTENCE].
```

Claude responds with:
- Files being read this session
- Current piece phase per PROJECT-STATUS.md
- What this session must produce
- EIC: why now
- CBUXO: non-analytical reader risks before work begins

---

## TYPE 2 — Build Session (Claude Code)

**Use for:** Building a new piece from scratch or substantive changes to an existing piece. One piece at a time. Never mixed with platform changes.

**Paste this to open:**

```
Type 2 session. Piece: [NAME]. Task: [ONE SENTENCE].
```

Claude surfaces the two buckets and implementation options before writing any prompt. AMA responds. Claude writes the lean prompt.

Required reads for Type 2 (new build): all five files.
Required reads for Type 2 (existing piece): PLATFORM-BRIEF + DEPLOY-CHECKLIST + piece HTML only.

---

## TYPE 3 — Platform Session (Claude Code)

**Use for:** CSS changes, hub updates, `_redirects`, config files, PROJECT-STATUS.md updates. Never mixed with piece builds.

**Paste this to open:**

```
Type 3 session. Task: [ONE SENTENCE]. Files: [LIST].
```

Claude surfaces the two buckets and implementation options before writing any prompt.

Required reads for Type 3: PLATFORM-BRIEF + DEPLOY-CHECKLIST + only the files being changed.

---

## DEPLOY CHECKLIST RUN — before any commit

```
Run _data/DEPLOY-CHECKLIST.md against all modified files.
Update _data/PROJECT-STATUS.md.
Report: checklist pass/fail · batch type · files in commit · files excluded and why.
Do not push until confirmed.
```

---

## AI VOICE PASS — Editorial Partner mode

**Use for:** Marked-up draft before AMA rewrites. Read `_data/VOICE-GUIDE.md` before running any pass.

**Paste this to open:**

```
Type 1 session. Voice pass. Piece: [NAME]. Section: [NAME].
[PASTE COPY]
```

Claude produces section by section:
1. ORIGINAL — exact text
2. FLAGS — trope name, reference to VOICE-GUIDE.md
3. SUGGESTED REWRITE — in AMA's voice, AMA edits this

Does not change data, sourcing, or argument structure. Voice only.
