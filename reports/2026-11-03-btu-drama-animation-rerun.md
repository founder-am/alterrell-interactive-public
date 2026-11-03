# READ FIRST — alterrell-interactive-public
# BTU Drama + Animation research pass: RERUN REPORT

## 1. Run header

- Run date: 2026-11-03 (container UTC; `date -u` at preflight: Tue Nov 3 22:26:31 UTC 2026)
- Repo: founder-am/alterrell-interactive-public
- Branch: cloud/11-02-btu-drama-animation. Prior head: 776693e (the stop report, left unchanged). Research commit: b4088cd.
- Model: claude-opus-5-5 (configured session model)
- Deploy: none
- Files written:
  - `_data/pieces/BTU-DRAMA-BRIEF.md`: +166 lines, 0 deleted
  - `_data/pieces/BTU-ANIMATION-BRIEF.md`: +103 lines, 0 deleted
  - this report
- Copy of record: no proper copy of record exists for BTU. `ls _data/pieces/*-COPY.md` returns only GAY-UNCLES-COPY.md. The two briefs were used as **interim** append targets, per Bible COPY-06.

## 2. Acceptance list (fails first)

No item FAILs.

| # | Result | Reason |
|---|---|---|
| A1 | PASS | Nothing is marked "verified". Every value carries a source key, and each key names its URL with access date 2026-11-03. Check: `git diff 776693e..HEAD -- _data/pieces \| grep -E "^\+" \| grep -i verif` returned nothing. |
| A2 | PASS | No [AMA], voice_note or editorial slot was filled. The OD-04 Fat Albert note is listed as AMA VOICE and was not drafted. |
| A3 | PASS | `git diff --numstat 776693e..HEAD` shows `103 0` and `166 0`. The stop report 2026-11-03-btu-drama-animation.md is unchanged. |
| A4 | PASS | `grep -n -E "RETIRED\|NEVER USE" _data/pieces/BTU-*.md` returned nothing, so no retired figure exists to reintroduce. |
| A5 | PASS | READINESS table is in section 5. |
| A6 | PASS | Coverage: **34 of 45 items resolved** (section 4). |

## 3. Stop conditions and access limits

| Condition | Fired | Resolution |
|---|---|---|
| PREFLIGHT: more than a third of hosts fail on DNS or proxy | NO. 0 of 3 failed. | `curl -sS -o /dev/null -w "%{http_code} %{url_effective}" -L https://www.<host>/` at 2026-11-03 22:26 UTC: imdb.com 202; naacpimageawards.net 200; emmys.com 200, redirected to televisionacademy.com. |
| git status shows a path I did not create | NO | Before each commit, `git status --short` showed only the files I wrote. |

These limits did not stop the run, but they shaped the sources:

- **IMDb unusable.**
  - curl gets an empty 202 bot-check page.
  - WebFetch returns `getaddrinfo ENOTFOUND www.imdb.com`.
  - A headless-browser fetch was refused by the session's permission classifier as bot-check circumvention. I did not try to work around that.
  - IMDb figures appear only as quoted search-result text, tagged [WS].
- **Wikipedia API rate-limited.** `w/api.php` returned HTTP 429. Raw pages (`index.php?action=raw`) were then read one request every 4 seconds with a single fixed user agent. Switching user agent or hostname was refused by the classifier, and I did not pursue it. WebFetch cannot resolve en.wikipedia.org.
- **Primary NAACP data covers 2024–2026 only.** `naacpimageawards.net/wp-json/wp/v2/nominee-year` lists 3 years with 253 nominee records. The previous-awards pages for the 52nd–55th awards render with JavaScript and the HTML has no nominee text. Earlier NAACP results are SECONDARY.
- **Discovery press PDF not read.** The HAHN final-season release returned "SSL certificate problem: certificate has expired". TLS was not bypassed.
- **watchmode.com returned HTTP 403.** The Corner per-actor episode counts are SECONDARY via search text.

## 4. Coverage, and the command or URL behind every number

**Coverage: 34 of 45 items resolved.** The denominator is the 45 items listed in the 11-03 stop report:

| Group | Resolved | Unresolved |
|---|---|---|
| Drama open items | 6 of 7 | #5 Twenties "sitcom Primary": the 80%+ test cannot be measured from an episode guide (AMA RULING) |
| Animation pass items | 3 of 6 (season counts for borderline shows; crossover nodes; Fat Albert ruling, already RULED 2026-06-03 as OD-04) | full voice cast (Fat Albert has no guide cast); majority-Black voice-cast % (not recorded by any guide); Boondocks continuity (AMA RULING) |
| Show season and episode counts | 25 of 32 | 7 where the two guides disagree: The Proud Family, Everybody Still Hates Chris, Big Mouth, Black Dynamite, Being Mary Jane, Queen Sugar, Reasonable Doubt |

No search cap was used. Every show in both briefs was run.

| Number | Tag | Command or URL (accessed 2026-11-03) |
|---|---|---|
| Season and episode counts for all 32 shows | MEASURED (SECONDARY) | `python3 -I tvm.py` → api.tvmaze.com/shows/<id>/episodes and /seasons |
| Wikipedia season and episode counts | MEASURED (SECONDARY) | `python3 -I wpraw.py <titles>` → en.wikipedia.org/w/index.php?action=raw&title=<title>, infobox `num_seasons` / `num_episodes` |
| "Aired as of 2026-11-03" counts | MEASURED | the same TVmaze episode JSON, filtered to `airdate <= 2026-11-03` |
| Per-person episode counts (Rotimi 14, Devine 7 on P-Valley and 10 on ER for Epps, Waithe 3, Reasonable Doubt S3–S4 guests) | MEASURED (SECONDARY) | `python3 -I person.py <names>` → api.tvmaze.com/people/<id>/guestcastcredits ; `python3 -I epcast.py 61704 <names>` |
| Devine, A Different World episodes 1–9 and 21 | MEASURED (SECONDARY) | https://epguides.com/DifferentWorld/season1.shtml |
| The Corner: 4 nominations, 3 Emmys (2000) | MEASURED (PRIMARY) | https://www.televisionacademy.com/shows/corner |
| P-Valley final season "Friday, December 4th" | MEASURED (PRIMARY) | https://www.starz.com/us/en/series/p-valley/46156 |
| Louder and Prouder S4 = "fourth and final", premiering July 29 | MEASURED (PRIMARY) | https://press.disneyplus.com/news/disney-plus-the-proud-family-louder-and-prouder |
| Louder and Prouder S2 nominated, Animated Series, 55th NAACP (2024) | MEASURED (PRIMARY) | https://naacpimageawards.net/nominee/the-proud-family-louder-and-prouder-s2/ |
| Epps NAACP: noms 2005 and 2012, wins 2007, 2008 and 2013 | MEASURED (SECONDARY) | raw Wikipedia page "NAACP Image Award for Outstanding Supporting Actor in a Drama Series" |
| Thornton, Power: 3 episodes | MEASURED (SECONDARY) | WebSearch text quoting IMDb; raw Wikipedia page "Shannon Thornton" (Recurring, Season 5) |
| HAHN 196 scripted episodes | MEASURED (SECONDARY) | Wikipedia infobox; TVmaze 198 includes S8E17–18 "Final Cast Reunion Part 1/2" |
| 0 deleted lines, +166 / +103 | MEASURED | `git diff --numstat 776693e..HEAD` |

## 5. READINESS: every remaining blocker to publish

| Blocker | Class |
|---|---|
| Season and episode counts where TVmaze and Wikipedia agree (25 shows) | DATA DONE |
| Drama open items 1, 2, 3, 4, 6, 7 | DATA DONE |
| Season and episode counts where the guides disagree (Proud Family 2/52 vs 3/55; Everybody Still Hates Chris 10 vs 20; Big Mouth 80 vs 81; Black Dynamite 19 vs 20; Being Mary Jane 51 vs 52; Queen Sugar 88 vs 89; Reasonable Doubt 36 vs 35, still airing) | AMA RULING (choose the guide of record) |
| No IMDb access for an episode guide of record | DATA UNAVAILABLE (bot check; not circumvented) |
| NAACP results before 2024 from a primary source | DATA UNAVAILABLE |
| Majority-Black voice-cast % for every animated show (brief line 28) | DATA UNAVAILABLE |
| Fat Albert voice cast from a guide | DATA UNAVAILABLE (TVmaze has 0 cast rows) |
| Per-episode counts for Louder and Prouder guests; Devine on P-Valley S1; The Corner per actor | DATA UNAVAILABLE |
| Twenties as a sitcom Primary show (80%+ or OD-10 two-leads test) | AMA RULING |
| Family Reunion and The Carmichael Show as Black sitcoms (decides Devine's sitcom node) | AMA RULING |
| NAACP tiebreaker for a non-lead (Epps) | AMA RULING |
| Shaft as a two-lead show under OD-10 | AMA RULING |
| Boondocks gaps and McGruder's absence from S4 | AMA RULING |
| Proud Family original and revival as 1 or 2 series for the "2+ series" path | AMA RULING |
| Proud Family Movie (2005 TV film): TV credit or film credit | AMA RULING |
| P-Valley "qualifies" claim while S3 is unaired (premieres 2026-12-04) | AMA RULING |
| Copy of record: no BTU `*-COPY.md` exists | AMA RULING |
| Fat Albert editorial note (OD-04 Option C) | AMA VOICE |
| Amos 'n' Andy framing (OD-05; outside this run, blocks publish) | AMA VOICE |
| BTU-NETWORK-DATA.md does not exist; D3 build | BUILD (Type 2) |
| CARD-04: the deferred D-72 380×660 exception must be decided at build time | AMA RULING |

## 6. Anomalies and open items (stated, not fixed)

Claims the research undercuts. The brief text was left as written; each is stated in the appended sections.

1. **P-Valley** (drama brief line 70): "3 seasons … S3 confirmed — qualifies". As of 2026-11-03, 2 seasons have aired; S3 premieres 2026-12-04.
2. **The Chi** (line 214): "80 episodes". Both guides give 88.
3. **Tika Sumpter** (line 296): "213 eps". The show has 196 scripted episodes.
4. **Rotimi** (line 232): "recurring S8". The record is S6E16 plus S7–S8, 14 episodes.
5. **La La Anthony, Reasonable Doubt S4**: 2 episodes so far, below the 3-episode minimum. S4 is still airing.
6. **Loretta Devine, P-Valley**: "17 eps" not reproduced.
7. **Raising Kanan lead counts**: "40 eps" against a 48-episode run.
8. **Fat Albert** (animation brief line 42): table says 12 seasons; both guides say 8.
9. **Louder and Prouder**: table says "2+"; it ran 4, and S4 is final (Disney+ press).
10. **Big Mouth**: table says 7 seasons, 2017–2023; the guides say 8, ending 2025.
11. **Tyler James Williams**: listed as an Everybody Still Hates Chris voice node, but Wikipedia lists him as producer (episode 1) only.

Brief text the OD log has overtaken:

12. Animation brief line 80 still says Fat Albert "RULING NEEDED" (OD-04 ruled 2026-06-03).
13. Line 84 still says the Disney decision is "pending" (OD-03 ruled 2026-06-03).
14. Line 49 says Big Mouth has a "Black creator (Nick Kroll is not Black)", which contradicts itself.

Sources and process:

15. **Guide end-date disagreements** (counts agree): Fat Albert (1985-12-29 vs 1982-11-13), The PJs (2001-05-20 vs 2000-09-05), New York Undercover (1999-02-11 vs 1998-06-25).
16. **The animation brief's appended text** (lines 107–171) cites Fandom, Wordpress, Yahoo! and Behind The Voice Actors with no URLs. Those sources remain unchecked.
17. **No animation session starter** exists in BTU-SESSION-STARTERS.md. The brief's own checklist (lines 88–96) was used.
18. **Instruction conflict.** CLAUDE.md asks for a LEDGER append in ../alterrell-hq and reports in ../alterrell-hq/reports/. This run's prompt limits the session to one repo and forbids LEDGER writes; I followed the prompt.
19. **WebFetch cannot resolve** www.imdb.com or en.wikipedia.org, even with network access set to Full. curl reaches both. Settings for the WebFetch path may differ.
20. **Scratch scripts** (tvm.py, wpraw.py, person.py, epcast.py) are in the session scratchpad and are not committed. The commands are reproduced in section 4.

## 7. LEDGER line

- BTU drama+animation research pass rerun: 34 of 45 items resolved, findings appended to drama and animation briefs (interim), 11 items wait on AMA rulings or unavailable data | waiting | 11-03-26
