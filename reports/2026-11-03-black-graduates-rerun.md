# READ FIRST — alterrell-interactive-public

# Black Graduates research pass: RERUN REPORT

## 1. Run

- Run date: 2026-11-03 (UTC; `date -u` at preflight: `Tue Nov  3 22:26:37 UTC 2026`)
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-black-graduates. This is the same branch as the stop report `reports/2026-11-03-black-graduates.md`, which this run did not touch.
- Model: given in the chat reply. The session's policy does not allow model identifiers in files pushed to a repo.
- Deploy: none
- Bible: I re-read ALTERRELL-INTERACTIVE-BIBLE.md (2026-10-29 text) and applied COPY-06 to the choice of copy of record (§5, item 1).
- Research commit: `1d2b217` appends "## Research 2026-11-03 (cloud)" to `_data/pieces/BLACK-GRADUATES-BRIEF.md` (182 lines added, 0 removed). Its push output: `b3bb061..1d2b217  cloud/11-02-black-graduates -> cloud/11-02-black-graduates`.

## 2. Acceptance (fails first)

No acceptance item failed.

| ID | Result | Reason |
|---|---|---|
| A1 | PASS | Every row tagged MEASURED in the appended section names a URL. Each section states its access date (2026-11-03). Rows without a fetched page are tagged PLACEHOLDER, not MEASURED. |
| A2 | PASS | No [AMA], voice_note or editorial line was filled or edited. Line 17's "nearly 30%" is reported in §5 but not changed. |
| A3 | PASS | `head -197 _data/pieces/BLACK-GRADUATES-BRIEF.md \| sha256sum` = `ae7811809139d6bcc5d89361f54fbc4236e65794b7268b235fd15dc0b2243730`, the same hash as before the append. `git diff … \| grep -c '^-[^-]'` = 0. The stop report is unchanged. |
| A4 | PASS | `grep -c -i "RETIRED\|NEVER USE"` on the brief = 0. Nothing could be reintroduced. |
| A5 | PASS | READINESS table in §5. |
| A6 | PASS | **32 resolved of 70 found** (table below). |

Coverage. MEASURED 2026-11-03. "Resolved" means a fetched page gives the answer with the episode where WORK 2 asks for one. A search snippet alone does not count.

| WORK item | Found | Resolved | Unresolved |
|---|---|---|---|
| 1. Cast, line 163 (Wayans family counted as one entry) | 10 | 6: Brandy, Vaughn, Fields, Coles, Tia Mowry, Tamera Mowry | 4: Alexander, White, Ribeiro, Wayans family (3 of 5 members fetched: Keenen, Marlon, Damon; Kim and Shawn not) |
| 1. Creators, line 164 | 5 | 4: Bowser, Brock Akil (school yes, year conflicting), Farquhar, Rhimes | 1: Perry (TLS failure on the only source) |
| 2. Existing table rows, lines 124–138 | 15 | 12 | 3: Fresh Prince Will/ULA (season-level only), Empire/Wharton (no on-screen episode), Scandal/Georgetown (no episode) |
| 2. Inventoried shows with no row | 39 | 9 with a named school and episode | 30: summaries name no school. That is not proof the show never names one |
| 3. Attainment series | 1 | 1 | 0 |
| **Total** | **70** | **32** | **38** |

Only 3 of the 10 resolved WORK 1 answers come from the institution itself (Stanford, Northwestern, Illinois). The other 7 are SECONDARY. Marlon Wayans (Howard's own site) is a fourth primary source, inside the unresolved family entry.

## 3. Stop conditions

1. **PREFLIGHT, passed.** `curl -sS -o /dev/null -w "%{http_code}" -L https://<host>/` returned nces.ed.gov 200, www.census.gov 200, www.imdb.com 202 (MEASURED 2026-11-03). 0 of 3 failed. IMDb's 202 is a bot challenge page. IMDb was not used as a source.
2. **Unknown paths:** none. `git status --short` showed only the brief before commit 1d2b217, and only this report before the final commit.
3. **Early stops:** none were declared. Coverage gaps are listed in §2 and §5 with reasons.

## 4. Source of every number in this report

| Number | Command or URL | Tag |
|---|---|---|
| Attainment values (69 points, 1940–2025) | https://www2.census.gov/programs-surveys/demo/tables/educational-attainment/time-series/cps-historical-time-series/hst_attain02.xlsx, read with openpyxl at rows 77–145, column K, accessed 2026-11-03 | MEASURED |
| Server last-modified 2026-10-28 | `curl -sSI <same URL> \| grep last-modified` | MEASURED |
| 51 shows, 5,571 episode summaries | `bin/eps.py` (scratchpad, not committed) over Wikipedia `action=raw` list and season pages; sum of `episodes_parsed` | MEASURED (SECONDARY source) |
| Season, episode and air dates for sweep rows | `bin/season.py <list page> <title>` | MEASURED (SECONDARY source) |
| 182 lines appended, 0 removed | `git diff --stat`; `git diff \| grep -c '^-[^-]'` | MEASURED |
| 70 found, 32 resolved | §2 table, counted from brief lines 124–165 and the appended section | MEASURED |
| Alma mater years (Bowser '87, Brock Akil BSJ92 / BSJ96, Farquhar 1973, Rhimes '91, Brandy 1996, Kim Wayans '83) | URLs in the appended W1 table | MEASURED except Kim Wayans '83 (PLACEHOLDER) |
| Bel-Air S4E1, S4E8 | thedig.howard.edu and sportskeeda URLs in the appended W2 table | MEASURED |

## 5. Anomalies and open items (reported, not fixed)

1. **No copy of record (COPY-06).** No BLACK-GRADUATES-COPY.md exists, so the brief was used as an **interim** target for the append. The appended section says this in its first paragraph.
2. **Where research undercuts the brief. No brief line was changed:**
   - Atlanta row says "Princeton (dropped out)". In S4E2 "The Homeliest Little Horse", Earn says he was **kicked out**. The episode is in season 4 (Wikipedia "Atlanta season 4").
   - The Cosby row says Hillman was "modeled on Spelman/Hampton". The Spelman link (S3E25 filmed at Spelman) is supported. No source was found for Hampton.
   - Attainment table: 1970 (~4.3%) matches 1968 (4.5 in 1970). 2010 (~18%) matches 2006/2007 (19.8 in 2010). The 1990 range (~9.5–11%) spans 1983 to 1990 values (11.3 in 1990). 2022 and 2024 match exactly. The 1940 value (1.3) is "Black and other races".
   - Line 17's "nearly 30%" is an editorial line, left unchanged. Series values: 29.6 (2024), 29.9 (2025).
   - The Fresh Prince row lists Carlton at Princeton only. He attends ULA first and transfers in S6E24.
   - The Bel-Air TBD row resolves to Lisa at Howard (S4E1, from Howard's own site), Carlton at Morehouse over Princeton (season 4), and Will at a UPenn **summer business program** (S4E8). Will's is not a degree enrollment.
3. **Conflicts between sources:**
   - Brock Akil's year: Northwestern's Medill page says BSJ92, Northwestern's School of Communication page says BSJ96.
   - Farquhar: the Illinois PDF says "1973, Advertising". Wikipedia says communications and lists West Point attendance. The primary source is used.
4. **grown-ish episode citations** were found in the sweep but left out of the appended table: Cal U is named in S1E11 "Safe and Sound", S2E9 "Body Count" and S3E1 "Crunch Time" (Wikipedia list). They aren't added to the brief because changing appended lines would break the appends-only rule. Add them in a later append if wanted.
5. **Black-ish:** the Wikipedia summary for S4E18 says only that Dre wants Junior at Howard. The words "his alma mater" come from Bustle and The Root (both SECONDARY).
6. **Tooling and access:**
   - WebFetch failed DNS on every host, even under Full network. curl through the proxy worked, so all fetches used curl.
   - The Wikipedia API returned 429. I switched to `index.php?action=raw`.
   - TLS failures (not bypassed): georgiaencyclopedia.org (self-signed chain), wesleyan.edu and blogs.illinois.edu (unable to get local issuer certificate).
   - Other failures: DNS for www.marketplace.org; HTTP 500 mojo.dailybruin.com; 403 axios.com, dvdtalk.com, three library catalogs; 404 aol.com; 503 connect.admission.ucla.edu; connection reset on web.archive.org.
7. **Sweep limits.** The sweep keeps only the first college term per summary and reads short Wikipedia summaries, so it can miss schools named on screen. Regex false positives (actor surnames "Brown", "Big College") were removed by hand. The scripts live in the session scratchpad and were not committed.
8. **DO NOT rule (line 187)** says not to draw attention to actors who didn't attend college. The W1 table records no-college findings for Vaughn, Alexander, Perry, Damon and Shawn Wayans as research only. Whether any of it reaches copy is AMA's call.
9. **CLAUDE.md conflicts, resolved in favor of the prompt:** the report lives in this repo's `reports/`, and no LEDGER file was written. The model name appears only in chat (session policy).

### READINESS: every remaining blocker to publish

| # | Blocker | Class |
|---|---|---|
| R1 | Attainment trend series (one stated Census CPS series, 1940–2025) | DATA DONE |
| R2 | Bel-Air TBD row | DATA DONE |
| R3 | Primary sources for 7 SECONDARY WORK 1 answers (Brandy, Vaughn, Fields, Coles, both Mowrys, Rhimes) | DATA UNAVAILABLE (no institutional page found this run) |
| R4 | Alexander, Perry, White, Ribeiro, Kim Wayans, Shawn Wayans | DATA UNAVAILABLE (fetch failures or Wikipedia only) |
| R5 | Brock Akil graduation year (BSJ92 vs BSJ96) | DATA UNAVAILABLE (Northwestern conflicts with itself) |
| R6 | On-screen episode for Fresh Prince ULA, Empire Wharton, Scandal Georgetown | DATA UNAVAILABLE |
| R7 | 30 inventoried shows with no named school in summaries | DATA UNAVAILABLE (needs transcripts or viewing) |
| R8 | Geographic callout figures (line 64) and the ADW "25% enrollment" claim (line 17) | DATA UNAVAILABLE (not in this run's WORK) |
| R9 | Brief lines contradicted by research: Atlanta "dropped out", Hampton model, 1970/1990/2010 values, "nearly 30%" | AMA RULING |
| R10 | Copy of record: create `*-COPY.md` or confirm the brief as interim (COPY-06) | AMA RULING |
| R11 | Naming no-college people vs the line 187 DO NOT rule | AMA RULING |
| R12 | Inventory criteria mismatches (2000s shows listed under 1990s; Kenan & Kel, The Boondocks) from the stop report | AMA RULING |
| R13 | Overview editorial | AMA VOICE |
| R14 | Type 2 build (gated by line 191 until the 90s cast pass is accepted) | BUILD (Type 2) |

## 6. LEDGER line

- Black Graduates research rerun: WORK 1-3 appended to brief, 32 of 70 items resolved, Bel-Air TBD and attainment series done | researching | 11-03-26
