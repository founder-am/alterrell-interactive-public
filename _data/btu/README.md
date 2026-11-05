# READ FIRST — alterrell-interactive-public

# _data/btu/: BTU network data (Batch B)

Compiled 2026-11-03 to 2026-11-04 by a cloud session on branch `cloud/11-02-btu-network`. Research data only. Nothing in `src/` or `public/` reads these files yet.

**Inputs.** The data comes from the four cluster briefs in `_data/pieces/`: BTU-SITCOM-BRIEF.md (Cluster A), BTU-DRAMA-BRIEF.md (B), BTU-MINISERIES-BRIEF.md (C) and BTU-SOAPS-BRIEF.md (D). Eligibility rulings come from BTU-OPEN-DECISIONS.md. BTU-ANIMATION-BRIEF.md (Cluster E) is not compiled, because the WORK list names four cluster briefs. BLACK-TELEVISION-UNIVERSE-BRIEF.md was read for context, but its path cards and first-pass findings were not compiled, because they are not cluster-brief research.

**Copy of record.** These files are data, not copy of record. Under BIBLE COPY-06, no proper copy of record exists for BTU, because there is no `*-COPY.md` file.

## Files

| File | One row per |
|---|---|
| `nodes.csv` | show, or person (actor or creator) |
| `edges.csv` | person-to-show credit asserted in a cluster brief |

## nodes.csv fields

| Field | Meaning |
|---|---|
| `id` | `s-<slug>` for shows, `p-<slug>` for people. The slug is the lowercased ASCII name with punctuation removed. |
| `type` | `show`, `actor`, `creator` or `actor+creator`. Creator status follows the briefs' creator-node designations: OD-06 (Tyler Perry), the drama brief's CREATOR NODES table, Debbie Allen (A Different World), and the Empire matrix (Lee Daniels, Danny Strong). |
| `name` | The name as written in the brief. |
| `cluster` | `A-sitcom`, `B-drama`, `C-miniseries`, `D-soap`, or `X-unassigned`. X means a brief names the show as a credit but no brief assigns it to a cluster. A person's cluster lists every A to D cluster their edges touch, separated by `\|`. |
| `years` | **Show:** premiere-to-end years from TVmaze (MEASURED), or the brief's years where TVmaze has no record (PLACEHOLDER). **Person:** the span of their VERIFIED edges. Each edge contributes its MEASURED edge years where they exist, otherwise the show's span. This is an envelope, not a career span. |
| `source` | **Show:** its TVmaze page, or Wikipedia where TVmaze has no record. **Person:** their TVmaze person page(s) where matched. Otherwise, the source URLs of their verified edges, so every MEASURED person `years` value has a URL. |
| `crossover_flag` | `CROSSOVER-VERIFIED`: the person has VERIFIED edges in 2 or more of clusters A to D. `CROSSOVER-UNVERIFIED`: they reach 2 or more clusters only when UNVERIFIED edges are counted. Blank: one cluster. X-cluster shows never count toward a crossover. |
| `crossover_clusters` | The clusters the person spans, for example `A+C`. |
| `tier` | **Show only:** the tier the brief assigns, with the OD ruling that set it. |
| `years_tag` | `MEASURED` or `PLACEHOLDER`. |
| `source_class` | `SECONDARY` (see Sources). |
| `accessed` | Access date of the source. |
| `brief_years` | **Show only:** the years as written in the brief, kept for comparison. |
| `brief_ref` | Brief file and section the row came from. |
| `notes` | **Show only:** year conflicts between the brief and the source, plus OD flags. |

## edges.csv fields

The first six columns are the ones the WORK list names. The rest support them.

| Field | Meaning |
|---|---|
| `person`, `show` | Names as written in the briefs. Join to nodes.csv on `person_id` and `show_id`. |
| `role` | The character name from TVmaze, or the credit type from a TVmaze crew credit (MEASURED). Otherwise the brief's wording (PLACEHOLDER). Wikidata and Wikipedia matches never overwrite the brief's character name. |
| `episodes` | The number of TVmaze guest-cast episode credits (MEASURED), else the brief's figure as written (PLACEHOLDER). A MEASURED count is the episodes TVmaze has credited. That is a floor, not a true total, because TVmaze guest lists are incomplete for older series. TVmaze lists main cast at show level only, so main-cast rows carry the brief's figure. Every brief figure written with `~`, `+`, `all` or a range is unverified. |
| `years` | The first and last airdate year of those TVmaze guest credits (MEASURED), else the brief's years (PLACEHOLDER). |
| `source` | The URL that confirms the credit, or the literal `UNVERIFIED`. |
| `status` | `VERIFIED` or `UNVERIFIED`. |
| `person_id`, `show_id`, `show_cluster` | Keys into nodes.csv. |
| `role_tag`, `episodes_tag`, `years_tag` | `MEASURED` or `PLACEHOLDER` for the field named. |
| `source_class` | `SECONDARY` for every verified edge. |
| `accessed` | Access date. |
| `evidence` | What the source showed: TVmaze main cast, TVmaze guest cast with a count, TVmaze crew type, a Wikidata property, or the Wikipedia line matched. For UNVERIFIED rows, every source checked. |
| `brief_role`, `brief_episodes`, `brief_years`, `brief_ref` | The brief's original values and location, never edited. |
| `notes` | Rulings and anomalies attached to the row. |

## How an edge was verified

Checks ran in order, and the first hit wins.

1. **TVmaze main cast.** The TVmaze person record (matched on name or a known alias) lists the show in its cast credits. Source: the TVmaze show page. The person page is named in `evidence`.
2. **TVmaze guest cast.** The person has guest credits on the show's episodes. The episode count and the first and last airdate years become MEASURED values.
3. **TVmaze crew.** A creator or producer credit, used for creator nodes.
4. **Wikidata.** The show item carries the person under P161 cast member, P170 creator, P162 producer, P1431 executive producer, P57 director, P58 screenwriter or P725 voice actor. The show item is matched by IMDb ID.
5. **Wikipedia, show article.** The person's name sits on a cast or credits list line: a bullet, table row or infobox field. Awards rows, episode summaries and reunion mentions do not count (pass 2 rule).
6. **Wikipedia, character list or actor article.** The person appears on a "List of … characters" or cast list page, or their own article has a filmography row naming the show (pass 2).

An edge that fails every check is `UNVERIFIED`, and `evidence` lists every URL checked.

## Sources

All sources are SECONDARY. TVmaze (api.tvmaze.com), Wikidata and Wikipedia are aggregators, not network or studio records. No primary source for TV cast credits was reachable: IMDb returned 403 to an unmodified request on 2026-11-03, and no network or studio cast-record source was tried. The briefs' own figures are never treated as verified.

## OD rulings applied

| Ruling | How it shows up in the data |
|---|---|
| OD-01 | The Wire, The Corner, Treme, Greenleaf, Power and The Haves and the Have Nots carry Primary tier. The White Shadow is not in any cluster brief, so it is not compiled. |
| OD-02 | In Living Color is a Cluster A Primary node. |
| OD-03 | That's So Raven and Raven's Home are Cluster A Primary nodes. The Proud Family is Cluster E and not compiled. |
| OD-04 | Bill Cosby's rows carry "editorial framing required". Fat Albert is Cluster E and not compiled. |
| OD-05 | Amos 'n' Andy is a Primary historical-anchor node. It has no cast edges, because the brief has no cast matrix. |
| OD-06 | Tyler Perry is a creator node on House of Payne and on The Haves and the Have Nots. |
| OD-07 | Sesame Street is X-unassigned, a Phase 2 candidate. Alaina Reed Hall's edge to it is kept. |
| OD-08 | New York Undercover is Secondary. Malik Yoba carries the edge. |
| OD-09 | Khandi Alexander's Scandal edge is kept as her Secondary-zone connection. |
| OD-10 | Seven Seconds is Secondary. Its edges are flagged. |
| OD-11 | The Josephine Baker Story is Primary, Cluster C. |
| OD-12 and its 2026-09-15 clarification | Generations is a show node with tier "Historical note only (OD-12; not a network node)". Its edges are kept for documentation and flagged in `notes`. The D3 build should not draw Generations as a network hub. |
| OD-13 | Dynasty is not compiled, since it is not a BTU show. Diahann Carroll enters through Julia (Cluster B Secondary). |
| Reality TV out; film out for Phase 1 | No reality, film or stage credits are edges. The film and stage credits the briefs name (Coming to America, Independence Day, The Sunset Limited, Hamilton, the Soul Food film) are excluded. |
| Isolated-nodes framing retired | No node carries an isolation flag. |
| Retired Malcolm-Jamal Warner / Genius: Aretha connection | Not reintroduced. Malcolm Barrett carries the Ted White role. |

## Excluded by the briefs themselves

The briefs list some actors as "Not BTU-eligible" (white actors on BTU shows). They are not nodes: Franklin Cover, Paul Benedict, Ned Wertimer (The Jeffersons), Jenna von Oÿ (The Parkers), John Schneider, Aaron O'Connell, Renée Lawless (The Haves and the Have Nots), and Abbey Lee (Lovecraft Country). The non-Black supporting players the miniseries brief names (Henry Fonda, Marlon Brando, Richard Thomas, Ben Chaplin, Allan Hawco, Greg Bryk, David Cross, Rubén Blades, David Dukes, Craig T. Nelson) are also not nodes.

## Counts at compile time

Each count comes from running the scratchpad script `build_csv.py` over these files on 2026-11-04. All counts are MEASURED.

| Cluster | Show nodes | Person nodes touching the cluster | Edges | VERIFIED | UNVERIFIED |
|---|---|---|---|---|---|
| A-sitcom | 39 | 163 | 214 | 212 | 2 |
| B-drama | 21 | 132 | 168 | 165 | 3 |
| C-miniseries | 12 | 67 | 80 | 78 | 2 |
| D-soap | 14 | 34 | 49 | 49 | 0 |
| X-unassigned | 26 | 0 | 29 | 29 | 0 |
| **Total** | **112** | **368 distinct** | **540** | **533** | **7** |

Person counts overlap across clusters, so their column does not sum to 368. 26 people carry `CROSSOVER-VERIFIED`, and none carry `CROSSOVER-UNVERIFIED`. Two people have no verified edge: Sandra Caldwell and Sicily Johnson.

Verified edges by evidence source: TVmaze 449 (main cast, guest cast and crew), Wikipedia 56, Wikidata 28.
