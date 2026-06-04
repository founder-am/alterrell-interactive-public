# BTU-SESSION-STARTERS.md
## Black Television Universe — Session Opener Cheat Sheet
**Created:** 2026-06-03
**Save to:** `_data/pieces/BTU-SESSION-STARTERS.md`

---

## HOW TO USE THIS FILE

Each section below is a copy-paste session opener for a specific next step on the BTU.
Pick the one that matches what you want to do, paste it into a new claude.ai chat, and attach the relevant brief files listed under "Attach these."

All BTU sessions are **Type 1 (Editorial)** until build begins. No code. No building.
Build sessions happen after: briefs are complete + open decisions resolved + BTU-NETWORK-DATA.md is locked.

---

## WHERE THE PROJECT STANDS (as of 2026-06-03)

| Cluster | Brief Status | Research Pass | Open Decisions Blocking |
|---|---|---|---|
| A — Sitcoms | ✅ Draft complete | Partial — 14 shows still need cast matrices | OD-02, OD-03, OD-05, OD-06, OD-07 |
| B — Dramas | ✅ Draft complete | Not started — 14 shows need cast matrices | OD-01 (Wire ruling) is the biggest blocker |
| C — Miniseries | ✅ Draft complete | Partial — 6 titles still need passes | OD-10, OD-11 |
| D — Soaps | ✅ Starter draft | Not started — needs dedicated session | OD-12, OD-13 |
| E — Animation | ✅ Starter draft | Not started — low priority | OD-04 (Fat Albert ruling) |
| Open Decisions | ✅ Master log complete | — | 13 unresolved; resolve before any pass closes |

---

---

## SESSION 1 — RESOLVE OPEN DECISIONS

**Use when:** You want to make rulings on the 13 open decisions before any research pass continues.
**Output:** Updated BTU-OPEN-DECISIONS.md with all rulings locked.
**Time estimate:** One focused session.

**Attach these:**
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 editorial session for the Black Television Universe (BTU) on Alterrell Interactive.

I am attaching BTU-OPEN-DECISIONS.md. There are 13 unresolved decisions that are blocking research passes across all five BTU clusters.

Your role in this session: Editorial Partner and Sr. Data Architect only.

For each open decision, do the following:
1. Read the question and options out loud in one sentence
2. State which cluster(s) it blocks
3. State your recommendation and the reason in 2–3 sentences
4. Wait for my ruling before moving to the next decision

Do not batch the decisions. Go one at a time. Do not write any code.

When all decisions are resolved, produce an updated BTU-OPEN-DECISIONS.md with each decision marked RESOLVED and the ruling recorded.
```

---

## SESSION 2 — SITCOM CLUSTER RESEARCH PASS (Complete the gaps)

**Use when:** You want to finish the Sitcom cluster research — the 14 shows that still need cast matrices.
**Output:** Completed cast matrices for all 🔲 shows, ready to be added to BTU-SITCOM-BRIEF.md.
**Prerequisite:** OD-02 (In Living Color), OD-03 (Disney), OD-05 (Amos 'n' Andy) resolved first — or note they're still open and skip those shows.

**Attach these:**
- `BTU-SITCOM-BRIEF.md`
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 editorial research session for the Black Television Universe (BTU), Sitcom Cluster (Cluster A).

I am attaching BTU-SITCOM-BRIEF.md and BTU-OPEN-DECISIONS.md.

Your role: Sr. Data Architect and Editorial Partner.

The Sitcom cluster brief is complete but has 14 shows marked 🔲 that still need cast matrices. Your job in this session is to research and return cast matrices for as many of those shows as possible.

Before starting, check BTU-OPEN-DECISIONS.md and note which open decisions affect this cluster. If a show is gated by an unresolved decision, skip it and flag it — do not assume a ruling.

For each show, return:
- Full main cast with episode counts
- Each actor's other qualifying BTU credits (sitcom or drama)
- Generational bucket (Founders / Builders / Peak Era / Current)
- Any NAACP or Emmy validation relevant to borderline actors
- Flag any new load-bearing node candidates

Format: one cast matrix table per show, matching the format already in the brief.

Do not write any code. Do not build anything. Research and cast matrices only.

Work through the 🔲 shows in this priority order:
1. The Cosby Show (missing anchor — highest priority)
2. Tyler Perry's House of Payne
3. The Wayans Bros.
4. The Steve Harvey Show
5. The Jamie Foxx Show
6. The Parkers
7. One on One
8. The Bernie Mac Show
9. My Wife & Kids
10. Eve
11. All of Us
12. What's Happening!!
13. Grown-ish
14. The Ms. Pat Show
```

---

## SESSION 3 — DRAMA CLUSTER RESEARCH PASS

**Use when:** You want to start the Drama cluster research pass.
**Output:** Cast matrices for Primary drama shows, crossover node identification.
**Prerequisite:** OD-01 (Wire/non-Black creator ruling) resolved first — it determines whether The Wire is Primary or Secondary and affects Clarke Peters / Wendell Pierce node placement.

**Attach these:**
- `BTU-DRAMA-BRIEF.md`
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 editorial research session for the Black Television Universe (BTU), Drama Cluster (Cluster B).

I am attaching BTU-DRAMA-BRIEF.md and BTU-OPEN-DECISIONS.md.

Your role: Sr. Data Architect and Editorial Partner.

Before starting, check OD-01 in BTU-OPEN-DECISIONS.md — it determines whether The Wire qualifies as Primary or Secondary. Tell me its current status. If it is still unresolved, set The Wire aside and work around it.

For each 🔲 show in the Drama brief, return:
- Full main cast with season counts
- Each actor's other qualifying BTU credits (sitcom or drama cluster)
- Generational bucket assignment
- Any NAACP or Emmy validation for borderline actors
- Flag any crossover nodes — actors who also have qualifying Sitcom cluster credits

Work through in this priority order:
1. Empire (largest cast, most likely BTU connections)
2. Power + Power Book II + Power Book III (treat as one franchise pass)
3. The Chi
4. Queen Sugar
5. Greenleaf
6. Being Mary Jane
7. The Haves and the Have Nots
8. Reasonable Doubt (verify season count first)

Do not write any code. Research and cast matrices only.
```

---

## SESSION 4 — MINISERIES CLUSTER RESEARCH PASS

**Use when:** You want to finish the Miniseries cluster — 6 titles still need full passes.
**Output:** Cast matrices and award verification for remaining Cluster C titles.
**Prerequisite:** None blocking — can run independently.

**Attach these:**
- `BTU-MINISERIES-BRIEF.md`
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 editorial research session for the Black Television Universe (BTU), Miniseries / Limited Series Cluster (Cluster C).

I am attaching BTU-MINISERIES-BRIEF.md and BTU-OPEN-DECISIONS.md.

Your role: Sr. Data Architect and Editorial Partner.

The Miniseries cluster uses a different eligibility gate than other clusters — no season minimum, but at least one major award validation (Emmy, Globe, NAACP, or Peabody) is required.

For each 🔲 title in the brief, return:
- Full main cast
- Award validation confirmed (state the specific award and year)
- Majority-Black cast confirmation or flag
- Each main actor's additional BTU credits in Cluster A or B
- Flag any new crossover nodes

Work through in this priority order:
1. Roots: The Next Generations (1979) — Hal Williams connection to verify
2. Lovecraft Country (2020) — large cast, multiple likely crossover nodes
3. Genius: Aretha (2021) — Malcolm-Jamal Warner connection
4. The Book of Negroes (2015) — Aunjanue Ellis; award verification
5. The No. 1 Ladies' Detective Agency (2008–2009) — Jill Scott; award verification
6. Seven Seconds (2018) — OD-10 applies; cast verification needed

Do not write any code. Research only.
```

---

## SESSION 5 — SOAPS CLUSTER RESEARCH PASS

**Use when:** You're ready to tackle the soap opera cluster — it needs a full dedicated research session.
**Output:** Cast timelines for All My Children and Y&R Black cast, Debbi Morgan full credit list, NAACP Daytime Drama award history.
**Prerequisite:** OD-12 (Generations ruling) and OD-13 (Dynasty ruling) helpful but not blocking — can note them as open and work around them.

**Attach these:**
- `BTU-SOAPS-BRIEF.md`
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 editorial research session for the Black Television Universe (BTU), Soap Opera Cluster (Cluster D).

I am attaching BTU-SOAPS-BRIEF.md and BTU-OPEN-DECISIONS.md.

Your role: Sr. Data Architect and Editorial Partner.

The Soaps cluster has not yet had a research pass. This session needs to produce the foundation data for the entire cluster.

Priority 1 — Debbi Morgan full credit list:
Research and return every soap opera credit Debbi Morgan has held, with show name, character name, and years. She is expected to be the load-bearing center of this cluster.

Priority 2 — All My Children Black cast timeline:
Return a year-by-year summary of significant Black recurring cast on All My Children (1970–2011). Focus on actors with 3+ season runs.

Priority 3 — The Young and the Restless Black cast:
Same as above for Y&R (1973–present). Focus on Neil Winters / Drucilla Winters arc and any other Black recurring cast with 3+ season runs.

Priority 4 — NAACP Image Award Daytime Drama category:
Return the full list of NAACP Daytime Drama nominees and winners, as far back as records allow. This is the primary validation source for this cluster.

Priority 5 — Generations (NBC, 1989–1991):
Full cast and episode count. Note open decision OD-12 — include the data but flag that the eligibility ruling is pending.

Do not write any code. Research only.
```

---

## SESSION 6 — LOCK THE NETWORK DATA FILE

**Use when:** All five cluster briefs are complete, all open decisions are resolved, and you are ready to consolidate everything into the master data file before build begins.
**Output:** BTU-NETWORK-DATA.md — the single file Claude Code reads at build time.
**Prerequisite:** All five research passes complete. All 13 open decisions resolved.

**Attach these:**
- `BTU-SITCOM-BRIEF.md`
- `BTU-DRAMA-BRIEF.md`
- `BTU-MINISERIES-BRIEF.md`
- `BTU-SOAPS-BRIEF.md`
- `BTU-ANIMATION-BRIEF.md`
- `BTU-OPEN-DECISIONS.md`

**Paste this:**
```
This is a Type 1 data consolidation session for the Black Television Universe (BTU).

I am attaching all five cluster briefs and BTU-OPEN-DECISIONS.md.

Your role: Sr. Data Architect only.

All cluster research passes are complete. All open decisions are resolved. This session produces BTU-NETWORK-DATA.md — the master reference file that Claude Code will read at build time. No decisions get made at build time. Everything lives in this file.

Produce BTU-NETWORK-DATA.md in this format:

1. NODE LIST — every BTU-eligible actor with:
   - Name
   - Cluster(s) — A, B, C, D, E
   - Tier — Primary or Secondary
   - Generational bucket — Founders / Builders / Peak Era / Current
   - Load-bearing node flag — yes or no
   - Creator node flag — yes or no (if applicable)

2. EDGE LIST — every verified connection between nodes with:
   - Actor A
   - Actor B
   - Show (the shared credit that creates the edge)
   - Cluster of that show
   - Decade of that shared credit

3. PATH CARDS — all verified generational chains, formatted as:
   Person A → [Show] → Person B → [Show] → Person C

4. CROSSOVER NODES — actors appearing in multiple clusters, listed once with all cluster tags

Flag any edge that is inferred rather than verified with [UNVERIFIED — DO NOT BUILD].

Do not write any code. Data file only.
```

---

## QUICK REFERENCE — WHAT'S BLOCKING WHAT

| If you want to do... | You need first... |
|---|---|
| Sitcom research pass | OD-02, OD-03, OD-05 ruled (or flagged as skip) |
| Drama research pass | OD-01 ruled (Wire question) |
| Miniseries research pass | Nothing blocking — can start now |
| Soaps research pass | Nothing blocking — can start now |
| Animation research pass | OD-04 ruled (Fat Albert question) |
| Lock network data file | All 5 research passes complete + all 13 ODs resolved |
| D3 build session (Type 2) | Network data file locked |
