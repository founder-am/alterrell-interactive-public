# _data/cannabis — marijuana enforcement and dispensaries by NYPD precinct

Built 2026-11-03 (cloud session, branch `cloud/11-02-cannabis-data`). Every pull below was run on 2026-11-03 (UTC).
Research data only. Nothing here is copy, and nothing here ships.

Unit: NYPD precinct (RULED, AMA 10-26/10-29-26). Precincts 105 and 116 are merged into one unit, `105+116`. Precinct 116 first appears in the arrest data on 2024-12-19 (MEASURED), so every pre-MRTA arrest in that area is coded 105. Merged, there are 77 units.

**Arrests, summonses and convictions are never merged.** Each one has its own columns and files. This folder holds no conviction data, because none exists at precinct level in open data (see the factpack).

## Files

| File | What it is |
|---|---|
| `precinct_table.csv` | One row per unit. Columns: ACS population; marijuana arrests by year 2006–2026; the 2021 pre/post-MRTA split; arrests in the 2014-01-01..2021-03-30 window, total and per 10k residents; post-MRTA arrests 2021-03-31..2026-06-30; summonses in the window, total and per 10k; open dispensaries, total and per 10k; ever-opened dispensaries; dispensaries on the OCM verification page; open CAURDs; open microbusiness retail. |
| `arrests_marijuana_by_precinct_year.csv` | Long format: unit, Penal Law article (PL221 or PL222), year, arrests. |
| `summonses_marijuana_by_precinct_year.csv` | Long format: unit, year, criminal court summonses. |
| `mrta_2021_split.csv` | Calendar year 2021 split at 2021-03-31, for arrests and for summonses. |
| `dispensaries_geocoded.csv` | Every NYC-candidate OCM retail-type licence row, with geocoder, match type, coordinates, precinct, and flags for whether it was counted as open or ever-opened. |
| `dispensaries_ocm_verification_page_geocoded.csv` | The OCM Dispensary Location Verification page list, geocoded and assigned to precincts. This is the cross-check source. |
| `precinct_population_acs2024.csv` | ACS 2020–2024 5-year B01003 total population, allocated to precincts through the crosswalk. |
| `crosswalk_tract_precinct.csv` | Tract-to-precinct weights (method below). |
| `correlations.csv` | Every rank correlation that was run, with n and method. |
| `raw/` | Unmodified API responses and geocoder outputs. |
| `queries/` | Every SoQL query text, verbatim. |
| `scripts/` | `crosswalk.py` and `build.py`. They expect the raw downloads laid out under `raw/` and `geo/` in a working directory (see Reproduce). |

## Every query

All NYC Open Data queries go to `https://data.cityofnewyork.us/resource/<id>.csv?$query=<SoQL>`. The NY Open Data query goes to `https://data.ny.gov/resource/<id>.csv`.

1. **Arrests by precinct-year-article.** Run against `8h9b-rp9u` (NYPD Arrests Data, Historic) and `uip8-fykc` (NYPD Arrest Data, Year to Date). Text: `queries/query_arrests.soql`.
   Filter: `law_code like 'PL 221%'` (Penal Law Article 221, marijuana, pre-MRTA) or `law_code like 'PL 222%'` (Article 222, cannabis, post-MRTA). Excludes `pd_cd = '781'` ("CRIMINAL DISPOSAL FIREARM 1"; 6 rows carry law code PL 2225500).
2. **Arrests 2021 split at 2021-03-31.** Run against `8h9b-rp9u`. Text: `queries/query_arrests_2021_split.soql`.
3. **Criminal court summonses by precinct-year.** Run against `sv2w-rv3k` (Historic) and `mv4k-y93f` (YTD). Text: `queries/query_summons.soql`.
   Filter: `offense_description` contains MARIJ, MARIG, MARJU or CANNABIS, and does not contain THETIC. The last condition drops synthetic cannabinoids.
   The summons data is coded by free text, with misspellings. The filter was built from the full list of distinct marijuana-like descriptions; that list is reproduced in the factpack.
4. **Summonses 2021 split.** Text: `queries/query_summons_2021_split.soql`.
5. **OCM licences.** Run against `jskf-tt3q` (Current OCM Licenses, data.ny.gov). Text: `queries/query_ocm.soql`.
   Pulls every row whose county is one of the five NYC counties, or is null. NYC membership is then decided by geocode point-in-polygon, not by the county field.
6. **OCM Dispensary Location Verification page.** `https://cannabis.ny.gov/dispensary-location-verification`, HTML table parsed into `raw/ocm_verification_list.csv`.
7. **Precinct boundaries.** `https://data.cityofnewyork.us/resource/y76i-bdw7.geojson?$limit=500`. Police Precincts, DCP, **version 26c**, rowsUpdatedAt 2026-11-02T20:23Z, 78 polygons. Not committed (3.8 MB); re-download from the URL.
8. **ACS population.** `https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b01003.dat`. Not committed (18 MB).
   The Census API (`api.census.gov`) now redirects keyless requests to `missing_key.html`, so the table-based summary file was used instead.
9. **2020 census blocks.** `https://www2.census.gov/geo/tiger/TIGER2020/TABBLOCK20/tl_2020_36_tabblock20.zip`. Fields POP20, INTPTLAT20, INTPTLON20. Not committed (326 MB).
10. **Geocoder 1.** U.S. Census Geocoder batch, `https://geocoding.geo.census.gov/geocoder/locations/addressbatch`, benchmark **Public_AR_Current** (benchmark id 4).
11. **Geocoder 2 (fallback).** Used only for rows the Census geocoder returned as Tie or No_Match. NYC Department of City Planning GeoSearch, `https://geosearch.planninglabs.nyc/v2/search` (API reports version 0.2).
    A fallback result is accepted only when the returned label starts with the same house number as the input. One row failed that test and was rejected: `row712`, input 270-01 Hillside Ave, returned 258-01.

## Methods

- **Crosswalk.** Each 2020 block in the five NYC counties (37,984 blocks) is assigned to the precinct polygon containing its internal point.
  Tract-to-precinct weight = the tract's POP20 living in blocks inside that precinct, divided by the tract's total POP20. Tracts with POP20 = 0 use block-count shares.
  555 blocks, holding 1,760 POP20 residents, have internal points outside every precinct polygon (shoreline and water). These are dropped.
  Precinct population = sum over tracts of (ACS 2020–2024 tract estimate × weight).
- **Dispensary measures.**
  - *Open* = licence type is CAURD, AURD or ROD, `operational_status = 'Active'`, the row is placed in a precinct, and it is not a duplicate row (same licence number and address).
  - *Ever-opened* = same licence types, with `retail_date_opened_to_public` not null.
  - Microbusinesses are counted separately and only where `retail_date_opened_to_public` is set, because 34 microbusiness rows carry no address.
- **Arrest window.** 2014-01-01..2021-03-30. 2014 is the first full year after precinct 121 was created (first arrest coded 121: 2013-07-01). 2021-03-30 is the last day before the MRTA cutover.
  Rates are window totals per 10,000 residents. They are not annual.
- **Correlation.** Spearman rank, `scipy.stats.spearmanr`, average ranks for ties, two-sided p from the t-approximation.
  Precinct 22 (Central Park, 0 residents) is excluded from every rate correlation. n = 76 for rates, 77 for counts.
  The sensitivity run (F) uses 2006-01-01..2021-03-30, with 120, 121 and 122 merged; n = 74.

## Reproduce

```bash
python3 -m venv venv && venv/bin/pip install shapely pyshp scipy
```

Place the downloads like this: precinct GeoJSON at `geo/precincts_26c.geojson`, the ACS .dat file in `geo/`, the unzipped blocks in `geo/blk/`, and the files from this folder's `raw/` in both `raw/` and `geo/`, under the names the scripts open. Then run:

```bash
venv/bin/python -I scripts/crosswalk.py geo geo/crosswalk_tract_precinct.csv
```

```bash
venv/bin/python -I scripts/build.py . out
```
