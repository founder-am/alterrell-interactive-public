import sys, json, csv, collections, shapefile
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
geo = sys.argv[1]
gj = json.load(open(f"{geo}/precincts_26c.geojson"))
polys, ids = [], []
for f in gj['features']:
    polys.append(shape(f['geometry'])); ids.append(int(float(f['properties']['precinct'])))
tree = STRtree(polys)
def pct(lon, lat):
    p = Point(lon, lat)
    for i in tree.query(p, predicate='intersects'):
        return ids[i]
    return None
r = shapefile.Reader(f"{geo}/blk/tl_2020_36_tabblock20.dbf")
flds = [f[0] for f in r.fields[1:]]
nyc = {'005','047','061','081','085'}
tract_pop = collections.Counter(); tract_blocks = collections.Counter()
cell_pop = collections.Counter(); cell_blocks = collections.Counter()
unassigned = [0,0]
for rec in r.iterRecords(fields=['COUNTYFP20','TRACTCE20','POP20','INTPTLAT20','INTPTLON20']):
    d = rec.as_dict(); c, t, pop, lat, lon = d['COUNTYFP20'], d['TRACTCE20'], int(d['POP20']), d['INTPTLAT20'], d['INTPTLON20']
    if c not in nyc: continue
    geoid = '36'+c+t
    pr = pct(float(lon), float(lat))
    tract_pop[geoid] += pop; tract_blocks[geoid] += 1
    if pr is None:
        unassigned[0] += 1; unassigned[1] += pop; continue
    cell_pop[(geoid, pr)] += pop; cell_blocks[(geoid, pr)] += 1
with open(sys.argv[2], 'w', newline='') as fh:
    w = csv.writer(fh); w.writerow(['tract_geoid','precinct','blocks_in_cell','pop20_in_cell','tract_pop20','weight'])
    for (g, pr), bp in sorted(cell_pop.items()):
        tp = tract_pop[g]
        wt = bp/tp if tp else cell_blocks[(g,pr)]/tract_blocks[g]
        w.writerow([g, pr, cell_blocks[(g,pr)], bp, tp, round(wt, 6)])
print('NYC blocks', sum(tract_blocks.values()), 'tracts', len(tract_pop), 'pop20', sum(tract_pop.values()))
print('blocks with internal point outside all precinct polygons', unassigned[0], 'pop20', unassigned[1])
print('precincts receiving blocks', len({p for _,p in cell_pop}))
