# GAY-UNCLES-BRIEF.md
## Advice From Your Thick Gay Uncles
**Save to:** `_data/pieces/GAY-UNCLES-BRIEF.md`
**Created:** June 9, 2026
**Status:** Build-ready pending AMA voice pass and Type 2 card fixes
**Lane:** Alterrell Interactive — Obsidian Futures tag, dark card-native treatment
**URL:** interactive.alterrell.com/gay-uncles/

---

## PIECE IDENTITY

**Full title:** Advice From Your Thick Gay Uncles
**Subtitle:** What the data says about where bigger Black gay men are loved
**Hub card title:** TBD — not yet locked
**Editorial register:** Personal data essay. Uncle energy. First person. Warm, direct, data-backed.
**Primary audience:** Bigger Black gay men who date other Black men
**Secondary audience:** Their friend groups, chasers, anyone who has watched someone they love struggle with this
**Emotional arc:** Recognition → Data confirmation → Structural explanation → Actionable map

**Thesis:** Where you live is a legitimate variable in dating strategy. The data shows that bigger Black gay men find partners in cities where Black men have economic mass, normalized body standards, and established community infrastructure. This is a market conditions problem, not a personal failure.

---

## TAB STRUCTURE (5 tabs, confirmed)

1. Overview
2. My Story
3. The Map
4. Why These Cities
5. Your Move

Note: Naming Series grandfathered Sources tab standard does NOT apply here. Gay Uncles uses the show/hide tab + accordion structure. No Sources tab — methodology lives in footer accordion.

---

## BUILD STATUS

**File:** `gay-uncles/index.html` (built directly — no separate workbench file)
**Design system:** Obsidian Futures dark — #0a0a12 background, #E8B923 gold accents, paper text
**Current state:** HTML complete, placeholder copy in place, 2 cards held, CSS fixes needed

### Cards built (9 total):

| ID | Tab | Type | Copy status | Build status |
|----|-----|------|-------------|--------------|
| O-1 | Overview | Stat block (3 numbers) | Clean — no placeholders | Approved pending center-align fix |
| O-2 | Overview | Stacked contrast (NYC vs ATL) | Editorial line hardcoded — needs voice check | Approved pending center-align fix |
| MS-1 | My Story | Pull quote (teal field) | Too wordy — AMA rewriting | Hold — format + copy both pending |
| MS-2 | My Story | Pull quote (teal field) | Too wordy — AMA rewriting | Hold — format + copy both pending |
| M-1 | The Map | Ranked bar chart (10 cities, tiered) | Clean — data only | Approved |
| M-2 | The Map | QA card (gay pop doesn't predict) | [AMA EDITORIAL LINE] unfilled | Approved structure — needs voice pass |
| M-3 | The Map | QA card (Black pop doesn't predict) | [AMA EDITORIAL LINE] unfilled | Approved structure — needs voice pass |
| W-1 | Why These Cities | BMI point spread, orange bars | Clean — data only | Out of spec — rebuild in Type 2 |
| W-2 | Why These Cities | Income stat block | Retitle + reframe needed (see data below) | Out of spec — rebuild in Type 2 |

### Cards held / not built (4):

| ID | Tab | Status | Blocker |
|----|-----|--------|---------|
| YM-1 | Your Move | HELD | AMA deciding format: ranked city/events list vs. general guidance vs. other |
| YM-2 | Your Move | NOT BUILT | AMA writes final warm close pull quote |
| YM-3 | Your Move | Scaffold only | [AMA TO PASTE] — For the Chasers, 3-4 lines |
| YM-4 | Your Move | Scaffold only | [AMA TO PASTE] — For the Friend Group, 3-4 lines |

---

## TYPE 2 SESSION — KNOWN FIXES

Before Type 2 session opens, AMA must resolve:
- YM-1 format decision
- MS-1 / MS-2 replacement copy + variant selection (Browse Mode in card studio)

CSS fixes to make in Type 2:
- Center-align all stat numerics: `.bbl-stat-big`, `.bbl-stat-mid`, `.bbl-qa-num`
- Card dimension audit — all cards must conform to 300×280px mobile standard
- W-1 internal layout rebuild (4-column layout out of spec)
- W-2 rebuild: remove body copy from card face, retitle, show full income spread
- MS-1 / MS-2: rebuild once AMA confirms copy + variant

---

## CONFIRMED DATA

### Poll data
**Source:** TikTok @alterrell, May 2026. n≈100 strict partner mentions from ~85 unique commenters across 25+ cities. Not a representative sample. Video: 4K+ views, 562 likes, 174 comments.

| Tier | City | Count |
|------|------|-------|
| Top | Atlanta | 16 |
| Top | Chicago | 15 |
| Top | Houston | 12 |
| Top | DC / DMV | 10 |
| Mid | NYC / Brooklyn | 10 |
| Mid | Philadelphia | 5 |
| Mid | Detroit | 5 |
| Lower | Los Angeles | 4 |
| Lower | New Orleans | 2 |
| Lower | Oakland | 2 |

Also mentioned (2 each): Tampa, Orlando, Charlotte, Jacksonville, Miami, Indianapolis, Mobile AL. Plus Seattle (1), Virginia Beach (1), Phoenix (1).

### LGBT population by metro
**Source:** Williams Institute, UCLA. March 2021. Gallup Daily Tracking 2012-2017 applied to 2017 Census ACS. All-LGBT, not race-adjusted.

| Metro | LGBT adults | Poll responses |
|-------|-------------|----------------|
| NYC-Newark-Jersey City | 706,000 (4.5%) | 10 |
| LA-Long Beach-Anaheim | 523,000 (5.1%) | 4 |
| Chicago-Naperville-Elgin | 298,000 (4.1%) | 15 |
| DC-Arlington-Alexandria | 209,000 (4.5%) | 10 |
| Philadelphia-Camden-Wilmington | 198,000 (4.2%) | 5 |
| Atlanta-Sandy Springs-Alpharetta | 194,000 (4.6%) | 16 |
| Houston-The Woodlands-Sugar Land | 169,000 (3.5%) | 12 |
| Detroit-Warren-Dearborn | 131,000 (3.9%) | 5 |

NYC/ATL ratio: 3.6×. NYC got fewer poll responses.

### Black population by city
**Source:** Census ACS 2019-2023, city proper.

| City | Black % | Poll responses |
|------|---------|----------------|
| Detroit | 77% | 5 |
| New Orleans | 59% | 2 |
| Atlanta | 47% | 16 |
| DC | 44% | 10 |
| Philadelphia | 38% | 5 |
| Chicago | 28% | 15 |
| NYC | 23% | 10 |
| Houston | 22% | 12 |
| Oakland | 21% | 2 |
| LA | 8% | 4 |

### BMI gap by state
**Source:** CDC BRFSS 2022-2024. Self-reported BMI ≥30. State-level only — city-level not available by race. Framed as "above-average BMI," not "obesity."

| State (poll cities) | Black rate | White rate | Gap |
|---------------------|-----------|------------|-----|
| DC | 37% | 15% | +22 pts |
| California (LA, Oakland) | 38% | 26% | +12 pts |
| Georgia (Atlanta) | 44% | 33% | +11 pts |
| Texas (Houston) | 44% | 34% | +10 pts |
| Illinois (Chicago) | 43% | 34% | +10 pts |
| Michigan (Detroit) | 43% | 35% | +8 pts |
| New York (NYC) | 36% | 29% | +7 pts |

### Black median household income — ALL FIGURES CONFIRMED
**Source:** U.S. Census Bureau ACS 2019-2023 5-Year Estimates via Neilsberg Research. 2023 inflation-adjusted dollars. Confirmed June 9, 2026.

| City | Black Median HH Income |
|------|----------------------|
| NYC | $60,673 |
| DC | $60,089 |
| US national Black median | $53,444 |
| Los Angeles | $52,612 |
| Atlanta | $47,937 |
| Houston | $46,230 |
| Chicago | $43,744 |

**W-2 editorial reframe (locked June 9, 2026):**
Card title changes from "Top poll cities rank among strongest for Black household income" to a full income spread showing all 6 cities with national median as benchmark. Chicago ($43,744) and Houston ($46,230) fall below the national Black median — the honest argument is that income correlates but does not determine. The spread is the story. This makes the structural argument stronger, not weaker.

---

## PLACEHOLDER COPY — FULL LIST FOR VOICE PASS

### Tab 1 — Overview
- `[AMA TO PASTE]` 2-3 paragraphs: hook, the lie vs. thesis, who the piece is for, what the uncles are about to show you. Recognition first, data second.

### Tab 2 — My Story
- `[AMA TO PASTE]` Section heading (current placeholder: "I Wasn't Always This Size" — confirm or replace)
- `[AMA TO PASTE]` 2-4 paragraphs: crossing-over narrative, thinner AMA, the access, the shift, acquired vs. congenital framing. Short and intimate. Earns what follows.
- MS-1 pull quote: replace current copy (too wordy). One strong sentence that works standalone.
- MS-2 pull quote: replace current copy (too wordy). One strong sentence that works standalone.

### Tab 3 — The Map
- `[AMA TO PASTE]` Section heading: frame community data as signal, not science
- `[AMA TO PASTE]` 1-2 paragraphs: establish the poll, frame Atlanta leading, set up M-2/M-3
- M-2 editorial line: one sentence, uncle voice — gay population doesn't predict it. What's the implication?
- M-3 editorial line: one sentence, uncle voice — Black population alone doesn't predict it. Plants the thread Tab 4 answers.
- `[AMA TO PASTE]` Context copy below cards: bridge from "these two variables don't explain it" to "so what does?"

### Tab 4 — Why These Cities
- `[AMA TO PASTE]` Section heading: name the structural argument
- `[AMA TO PASTE]` 2-3 paragraphs: what the top cities share, body norm gap, income spread (use confirmed W-2 data), the combination theory — income + body norms + infrastructure
- `[AMA TO PASTE]` Analysis copy below cards: interpret W-1 + W-2 together. Not a summary — an interpretation.

### Tab 5 — Your Move
- `[AMA TO PASTE]` 1-2 sentences in uncle voice: tell the reader to pick their seat
- YM-1: format decision needed before copy can be written
- YM-2: warm close pull quote — the landing line. "You are not the problem, the market conditions are real, here's your map." AMA writes the final version.
- YM-3: 3-4 lines, For the Chasers — what participation actually looks like
- YM-4: 3-4 lines, For the Friend Group — coordinate around big boy events, wingman not advice

---

## SUPPORTING DATA (for copy, not cards)

### Apps
- Jack'd: ~30% Black user base (founders stated — specific citation TBD). Dominant in ATL, Houston, DC.
- Grindr: largest overall. Grid layout rewards photos first. Body filters are a feature. Dominant in LA, NYC.
- Scruff: Bear/otter/muscle subculture. Body-type tags. Same parent company as Jack'd.
- Limitation: no published city-by-city market share data. Community observation.

### Academic sources
- Feliciano, Robnett, Komaie. "Internet Daters' Body Type Preferences." Sex Roles, 2009. Black and Latino men significantly more likely than White men to prefer dates with thick or large bodies.
- PMC, "Role of Body Size in Mate Selection among African American Young Adults." 2015. Overweight Black women more likely to casually date than thinnest weight category.
- EduBirdie survey, 2025. 78% of Gen Z say body positivity has gone too far. Gen Z shifting to body neutrality.

### Key pull quotes from TikTok comments
- "Don't come to California looking for people into big black men. You will be lusted after but not sought after for love."
- "They appreciate thickness in Houston. I never felt like I wasn't attractive. Complete opposite of when I lived in Dallas."
- "There are no Black queer spaces — it's all 'BIPOC' and 'diverse' which often means very few other Black folks." — Oakland
- "I'm at my partner in Atlanta...we've been together now over 27 years."
- Counter-argument to include honestly: "It's not about where you live it's about timing, where they are and where you are in life." — Chicago/NJ commenter

---

## DEPLOY CHECKLIST (pre-deploy gates)

- [ ] All [AMA TO PASTE] placeholders filled
- [ ] MS-1 and MS-2 replacement copy confirmed + variant selected
- [ ] YM-1 format decided and card built
- [ ] YM-2 warm close written by AMA
- [ ] YM-3 and YM-4 copy filled
- [ ] W-1 rebuilt to spec (300×280px, layout audit)
- [ ] W-2 rebuilt with full income spread and confirmed data
- [ ] All stat numerics center-aligned
- [ ] Card dimension audit passed (all cards at mobile standard)
- [ ] M-2 and M-3 editorial lines filled
- [ ] Footer methodology updated with confirmed W-2 source note
- [ ] No em dashes in final copy
- [ ] No choppy declarative fragments in final copy
- [ ] Share block on Overview tab (confirmed correct tab)
- [ ] OG image exists at /og/gay-uncles.png

---

## ARCHIVED FILES
- `BLACK-GAY-GEOGRAPHY-BRIEF.md_ARCHIVED` — original piece brief, retired
- `BLACK-GAY-GEOGRAPHY-BRIEF-v2.md_ARCHIVED` — second iteration, retired
- `GAY-UNCLES-DATA-FACT-PACK.md` — data reference, still active for drafting
