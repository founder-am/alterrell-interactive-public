import sys, csv, json, collections, re
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from scipy.stats import spearmanr
S, OUT = sys.argv[1], sys.argv[2]
raw, geo = f"{S}/raw", f"{S}/geo"
def unit(p):
    p = int(p)
    return '105+116' if p in (105, 116) else str(p)
# ---------- precinct polygons
gj = json.load(open(f"{geo}/precincts_26c.geojson"))
polys, ids = [], []
for f in gj['features']:
    polys.append(shape(f['geometry'])); ids.append(int(float(f['properties']['precinct'])))
tree = STRtree(polys)
def pct(lon, lat):
    for i in tree.query(Point(lon, lat), predicate='intersects'):
        return ids[i]
    return None
# ---------- population: ACS 2020-2024 B01003 x crosswalk
acs = {}
for r in csv.DictReader(open(f"{geo}/acsdt5y2024-b01003.dat"), delimiter='|'):
    if r['GEO_ID'].startswith('1400000US'):
        acs[r['GEO_ID'][9:]] = int(r['B01003_E001'])
pop = collections.defaultdict(float)
xw_tracts = set()
for r in csv.DictReader(open(f"{geo}/crosswalk_tract_precinct.csv")):
    pop[int(r['precinct'])] += acs.get(r['tract_geoid'], 0) * float(r['weight']); xw_tracts.add(r['tract_geoid'])
nyc_tracts = {g for g in acs if g[:5] in ('36005','36047','36061','36081','36085')}
acs_nyc_total = sum(acs[g] for g in nyc_tracts)
missing_tracts = sorted(nyc_tracts - xw_tracts)
missing_pop = sum(acs[g] for g in missing_tracts)
upop = collections.defaultdict(float)
for p, v in pop.items(): upop[unit(p)] += v
# ---------- arrests / summons
def load(fn, key):
    out = []
    for r in csv.DictReader(open(f"{raw}/{fn}")):
        out.append(r)
    return out
arr = load('arrests_8h9b-rp9u.csv','') + load('arrests_uip8-fykc.csv','')
smn = load('summons_sv2w-rv3k.csv','') + load('summons_mv4k-y93f.csv','')
def clean_p(p):
    try: return int(float(p))
    except: return None
valid = set(ids)
arr_by = collections.defaultdict(lambda: collections.Counter())   # unit -> year -> n (all marijuana/cannabis articles)
arr_art = collections.defaultdict(lambda: collections.Counter())  # (unit, article) -> year -> n
anom = collections.Counter()
for r in arr:
    p = clean_p(r['precinct'])
    if p not in valid: anom[('arrest_precinct_not_in_26c', r['precinct'])] += int(r['n']); continue
    arr_by[unit(p)][int(r['year'])] += int(r['n']); arr_art[(unit(p), r['article'])][int(r['year'])] += int(r['n'])
smn_by = collections.defaultdict(lambda: collections.Counter())
for r in smn:
    p = clean_p(r['precinct'])
    if p not in valid: anom[('summons_precinct_not_in_26c', r['precinct'])] += int(r['n']); continue
    smn_by[unit(p)][int(r['year'])] += int(r['n'])
# 2021 pre-MRTA portion
arr21pre = collections.Counter(); smn21pre = collections.Counter()
for r in csv.DictReader(open(f"{raw}/arrests_2021_split.csv")):
    p = clean_p(r['precinct'])
    if p in valid and r['period'].startswith('pre'): arr21pre[unit(p)] += int(r['n'])
for r in csv.DictReader(open(f"{raw}/summons_2021_split.csv")):
    p = clean_p(r['precinct'])
    if p in valid and r['period'].startswith('pre'): smn21pre[unit(p)] += int(r['n'])
# ---------- dispensaries
DT = {'Adult-Use Conditional Retail Dispensary License':'CAURD','Adult-Use Retail Dispensary License':'AURD','Adult-Use Registered Organization Dispensary License':'ROD','Adult-Use Microbusiness License':'MICRO'}
rows = list(csv.DictReader(open(f"{raw}/ocm_nyc_and_nullcounty.csv")))
gc = {r[0]: r for r in csv.reader(open(f"{geo}/geocode_out.csv")) if r}
disp = []
gs2 = {}
for ln in open(f"{geo}/geosearch_out.tsv"):
    a = ln.rstrip('\n').split('\t')
    gs2[a[0]] = (a[2], a[3], a[5], a[6])
for i, r in enumerate(rows):
    if r['license_type'] not in DT: continue
    g = gc.get(f"row{i}")
    lon = lat = None; status = 'NO_ADDRESS'; mtype = ''; matched = ''
    if g:
        status = g[2]; mtype = g[3] if len(g) > 3 else ''; matched = g[4] if len(g) > 4 else ''
        if status == 'Match' and len(g) > 5 and g[5]:
            lon, lat = map(float, g[5].split(','))
    geocoder = 'Census Geocoder Public_AR_Current' if lon is not None else ''
    if lon is None and f"row{i}" in gs2:
        lab, mt, lo, la = gs2[f"row{i}"]
        hn = r['address_line_1'].strip().split(' ')[0]
        if lab.upper().startswith(hn.upper() + ' '):
            lon, lat = float(lo), float(la); geocoder = 'NYC DCP GeoSearch v2'; matched = lab; mtype = mt
        else:
            geocoder = f'REJECTED GeoSearch ({lab})'
    p = pct(lon, lat) if lon is not None else None
    disp.append(dict(row_id=f"row{i}", geocoder=geocoder, license_number=r['license_number'], type=DT[r['license_type']], license_status=r['license_status'],
        operational_status=r['operational_status'], retail_date_opened_to_public=r['retail_date_opened_to_public'][:10], issued_date=r['issued_date'][:10],
        dba=r['dba'], entity_name=r['entity_name'], address_line_1=r['address_line_1'], city=r['city'], zip_code=r['zip_code'][:5], county=r['county'],
        geocode_status=status, geocode_match_type=mtype, geocode_matched_address=matched, lon=lon, lat=lat, precinct=p if p else '', unit=unit(p) if p else ''))
# dedupe: same license number at same precinct+address counted once
seen = set(); 
for d in disp:
    k = (d['license_number'], d['address_line_1'].lower().strip()) if d['license_number'] else None
    d['duplicate_row'] = 'Y' if k and k in seen else ''
    if k: seen.add(k)
RETAIL = {'CAURD','AURD','ROD'}
def is_open(d): return d['type'] in RETAIL and d['operational_status'] == 'Active' and d['unit'] and not d['duplicate_row']
def ever(d): return d['type'] in RETAIL and d['retail_date_opened_to_public'] and d['unit'] and not d['duplicate_row']
def caurd_open(d): return d['type'] == 'CAURD' and is_open(d)
def micro_open(d): return d['type'] == 'MICRO' and d['operational_status']=='Active' and d['retail_date_opened_to_public'] and d['unit'] and not d['duplicate_row']
dcount = {k: collections.Counter() for k in ('open','ever','caurd_open','micro_open')}
for d in disp:
    for k, f in (('open',is_open),('ever',ever),('caurd_open',caurd_open),('micro_open',micro_open)):
        if f(d): dcount[k][d['unit']] += 1
# ---------- OCM verification-page list (second OCM source, cross-check)
vin = {r[0]: r for r in csv.reader(open(f"{geo}/ver_in.csv"))}
vgs = {}
for ln in open(f"{geo}/ver_gs.tsv"):
    a = ln.rstrip('\n').split('\t'); vgs[a[0]] = a
ver = []
for r in csv.reader(open(f"{geo}/ver_out.csv")):
    lon = lat = None; gcd = ''
    if r[2] == 'Match' and len(r) > 5 and r[5]:
        lon, lat = map(float, r[5].split(',')); gcd = 'Census Geocoder Public_AR_Current'
    elif r[0] in vgs and vgs[r[0]][2].upper().startswith(vin[r[0]][1].split(' ')[0].upper() + ' '):
        lon, lat = float(vgs[r[0]][5]), float(vgs[r[0]][6]); gcd = 'NYC DCP GeoSearch v2'
    p = pct(lon, lat) if lon is not None else None
    ver.append(dict(id=r[0], address=vin[r[0]][1], city=vin[r[0]][2], zip=vin[r[0]][4], geocode_status=r[2], geocoder=gcd, lon=lon, lat=lat, precinct=p or '', unit=unit(p) if p else ''))
vcount = collections.Counter(v['unit'] for v in ver if v['unit'])
with open(f"{OUT}/dispensaries_ocm_verification_page_geocoded.csv",'w',newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(ver[0].keys())); w.writeheader(); w.writerows(ver)
# ---------- write CSVs
units = sorted(upop, key=lambda u: int(u.split('+')[0]))
years = list(range(2006, 2027))
with open(f"{OUT}/arrests_marijuana_by_precinct_year.csv",'w',newline='') as f:
    w = csv.writer(f); w.writerow(['unit','article','year','arrests'])
    for (u, a), c in sorted(arr_art.items(), key=lambda x:(int(x[0][0].split('+')[0]), x[0][1])):
        for y in sorted(c): w.writerow([u, a, y, c[y]])
with open(f"{OUT}/summonses_marijuana_by_precinct_year.csv",'w',newline='') as f:
    w = csv.writer(f); w.writerow(['unit','year','criminal_court_summonses'])
    for u in units:
        for y in sorted(smn_by[u]): w.writerow([u, y, smn_by[u][y]])
with open(f"{OUT}/mrta_2021_split.csv",'w',newline='') as f:
    w = csv.writer(f); w.writerow(['source','unit','period','article','n'])
    for fn, src in (('arrests_2021_split.csv','arrests'),('summons_2021_split.csv','summonses')):
        for r in csv.DictReader(open(f"{raw}/{fn}")):
            p = clean_p(r['precinct']); w.writerow([src, unit(p) if p in valid else f"INVALID:{r['precinct']}", r['period'], r.get('article',''), r['n']])
with open(f"{OUT}/dispensaries_geocoded.csv",'w',newline='') as f:
    flds = list(disp[0].keys()) + ['counted_open','counted_ever_opened']
    w = csv.DictWriter(f, fieldnames=flds); w.writeheader()
    for d in disp:
        d2 = dict(d); d2['counted_open'] = 'Y' if is_open(d) else ''; d2['counted_ever_opened'] = 'Y' if ever(d) else ''; w.writerow(d2)
with open(f"{OUT}/precinct_population_acs2024.csv",'w',newline='') as f:
    w = csv.writer(f); w.writerow(['precinct','acs_2020_2024_pop_estimate'])
    for p in sorted(pop): w.writerow([p, round(pop[p])])
# per-precinct table, pre-MRTA window = 2014-01-01..2021-03-30
def window(c, pre21, y0): return sum(c[y] for y in range(y0, 2021)) + pre21
table = []
for u in units:
    P = upop[u]
    a_w = window(arr_by[u], arr21pre[u], 2014); s_w = window(smn_by[u], smn21pre[u], 2014)
    a_post = sum(arr_by[u][y] for y in range(2022, 2027)) + (arr_by[u][2021] - arr21pre[u])
    row = dict(unit=u, pop_acs2024=round(P))
    for y in years: row[f"arrests_{y}"] = arr_by[u][y]
    row.update(arrests_2021_pre_mrta=arr21pre[u], arrests_2021_post_mrta=arr_by[u][2021]-arr21pre[u],
        arrests_window_2014_to_2021_03_30=a_w, arrests_window_per10k=round(a_w/P*1e4, 2) if P else '',
        arrests_post_mrta_2021_03_31_to_2026_06_30=a_post,
        summonses_window_2014_to_2021_03_30=s_w, summonses_window_per10k=round(s_w/P*1e4, 2) if P else '',
        dispensaries_open=dcount['open'][u], dispensaries_open_per10k=round(dcount['open'][u]/P*1e4, 3) if P else '',
        dispensaries_ever_opened=dcount['ever'][u], dispensaries_verification_page=vcount[u], caurd_open=dcount['caurd_open'][u], microbusiness_retail_open=dcount['micro_open'][u])
    table.append(row)
with open(f"{OUT}/precinct_table.csv",'w',newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(table[0].keys())); w.writeheader(); w.writerows(table)
# ---------- correlations
res = []
MINPOP = 1000
def corr(name, xk, yk, rows):
    xs = [r[xk] for r in rows]; ys = [r[yk] for r in rows]
    rho, p = spearmanr(xs, ys)
    res.append(dict(test=name, x=xk, y=yk, n=len(rows), method='Spearman rank (scipy.stats.spearmanr, average ranks for ties, two-sided p from t-approx)', rho=round(float(rho),3), p=f"{p:.2g}"))
rated = [r for r in table if r['pop_acs2024'] >= MINPOP]
excluded = [r['unit'] for r in table if r['pop_acs2024'] < MINPOP]
for r in rated:
    r['ever_per10k'] = r['dispensaries_ever_opened']/r['pop_acs2024']*1e4
    r['caurd_per10k'] = r['caurd_open']/r['pop_acs2024']*1e4
    r['ver_per10k'] = r['dispensaries_verification_page']/r['pop_acs2024']*1e4
corr('A. arrest rate vs open-dispensary rate', 'arrests_window_per10k', 'dispensaries_open_per10k', rated)
corr('B. arrest count vs open-dispensary count', 'arrests_window_2014_to_2021_03_30', 'dispensaries_open', table)
corr('C. arrest rate vs ever-opened dispensary rate', 'arrests_window_per10k', 'ever_per10k', rated)
corr('D. arrest rate vs open CAURD rate', 'arrests_window_per10k', 'caurd_per10k', rated)
corr('G. arrest rate vs OCM verification-page dispensary rate', 'arrests_window_per10k', 'ver_per10k', rated)
corr('E. summons rate vs open-dispensary rate (summonses kept separate)', 'summonses_window_per10k', 'dispensaries_open_per10k', rated)
# sensitivity: 2006..2021-03-30 with SI 120/121/122 merged
si = {'120','121','122'}
alt = collections.defaultdict(lambda: dict(a=0, pop=0, d=0))
for r in table:
    k = '120+121+122' if r['unit'] in si else r['unit']
    u = r['unit']
    alt[k]['a'] += window(arr_by[u], arr21pre[u], 2006); alt[k]['pop'] += r['pop_acs2024']; alt[k]['d'] += r['dispensaries_open']
altrows = [dict(unit=k, ar=v['a']/v['pop']*1e4, dr=v['d']/v['pop']*1e4) for k, v in alt.items() if v['pop'] >= MINPOP]
corr('F. sensitivity: arrest rate 2006-01-01..2021-03-30 (SI merged) vs open-dispensary rate', 'ar', 'dr', altrows)
with open(f"{OUT}/correlations.csv",'w',newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(res[0].keys())); w.writeheader(); w.writerows(res)
# ---------- summary json for report
gs = collections.Counter(d['geocode_status'] for d in disp)
summ = dict(
  units=len(units), rated_units=len(rated), excluded_low_pop=excluded, pop_total=round(sum(upop.values())), acs_nyc_total=acs_nyc_total,
  tracts_not_in_crosswalk=missing_tracts, missing_pop=missing_pop,
  arrests_by_year={y: sum(arr_by[u][y] for u in units) for y in years},
  summons_by_year={y: sum(smn_by[u][y] for u in units) for y in years},
  arr21pre=sum(arr21pre.values()), smn21pre=sum(smn21pre.values()),
  window_arrests=sum(r['arrests_window_2014_to_2021_03_30'] for r in table), window_summons=sum(r['summonses_window_2014_to_2021_03_30'] for r in table),
  disp_rows=len(disp), geocode=dict(gs), in_nyc=sum(1 for d in disp if d['unit']), dup_rows=sum(1 for d in disp if d['duplicate_row']),
  open_total=sum(dcount['open'].values()), ever_total=sum(dcount['ever'].values()), caurd_open_total=sum(dcount['caurd_open'].values()), micro_open_total=sum(dcount['micro_open'].values()),
  open_retail_rows_not_placed=[(d['row_id'], d['type'], d['address_line_1'], d['city'], d['geocode_status']) for d in disp if d['type'] in RETAIL and d['operational_status']=='Active' and not d['unit'] and (d['county'] in ('New York','Kings','Queens','Bronx','Richmond'))],
  county_vs_geocode_mismatch=[(d['row_id'], d['county'], d['unit']) for d in disp if d['unit'] and d['county'] and d['county'] not in ('New York','Kings','Queens','Bronx','Richmond')],
  anomalies={f"{k[0]}:{k[1]}": v for k, v in anom.items()}, correlations=res,
  ver_rows=len(ver), ver_in_nyc=sum(1 for v in ver if v['unit']), ver_geocode=dict(collections.Counter(v['geocode_status'] for v in ver)),
  units_zero_open=sum(1 for r in table if r['dispensaries_open']==0),
)
json.dump(summ, open(f"{S}/summary.json",'w'), indent=1, default=str)
print(json.dumps({k: summ[k] for k in summ if k not in ('tracts_not_in_crosswalk',)}, indent=1, default=str))
