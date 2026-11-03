"""MEPS 2023 (HC-251 full-year consolidated + HC-248G office-based events).
Outcome A: % of adults 18+ with >=1 office-based visit (in person or telehealth) where they talked to an MD
(SEEDOC_M18=1) whose specialty (DRSPLTY_M18) is a specialist code.
Outcome B: mean specialist office visits per adult.
Specialist codes: all DRSPLTY_M18 codes except primary care {6 family practice, 8 general practice,
10 geriatrics, 14 internal medicine, 24 pediatrician} and ambiguous {13 hospital residence, 21 osteopathy,
91 other dr specialty, -1/-7/-8}. Sensitivity: also drop 11 OB/GYN and 28 psychiatry.
Weights PERWT23F; Taylor linearization on VARSTR/VARPSU; age adjustment to 2000 US std pop (NCHS
Statistical Notes 20, Distribution #8).
Usage: python3 -I meps2023_specialist.py <dir with h251.dta h248g.dta>"""
import sys, os
import numpy as np, pandas as pd

d = sys.argv[1]
fy = pd.read_stata(os.path.join(d, "h251.dta"), convert_categoricals=False,
                   columns=["DUPERSID", "AGELAST", "POVCAT23", "RACETHX", "INSCOV23", "PERWT23F", "VARSTR", "VARPSU"])
ob = pd.read_stata(os.path.join(d, "h248g.dta"), convert_categoricals=False,
                   columns=["DUPERSID", "SEEDOC_M18", "DRSPLTY_M18"])
PC = {6, 8, 10, 14, 24}; AMB = {13, 21, 91, -1, -7, -8}
spec_main = ob[(ob.SEEDOC_M18 == 1) & ~ob.DRSPLTY_M18.isin(PC | AMB)]
spec_narrow = spec_main[~spec_main.DRSPLTY_M18.isin({11, 28})]
pcp = ob[(ob.SEEDOC_M18 == 1) & ob.DRSPLTY_M18.isin(PC)]
fy = fy[(fy.PERWT23F > 0) & (fy.AGELAST >= 18)].copy()
for name, ev in (("n_spec", spec_main), ("n_specN", spec_narrow), ("n_pcp", pcp)):
    c = ev.groupby("DUPERSID").size().rename(name)
    fy = fy.merge(c, left_on="DUPERSID", right_index=True, how="left")
    fy[name] = fy[name].fillna(0)
fy["any_spec"] = (fy.n_spec > 0).astype(float)
fy["any_specN"] = (fy.n_specN > 0).astype(float)
fy["any_pcp"] = (fy.n_pcp > 0).astype(float)
fy["ageg"] = pd.cut(fy.AGELAST, [17, 24, 44, 64, 200], labels=["18-24", "25-44", "45-64", "65+"])
STD = {"18-24": .128810, "25-44": .401725, "45-64": .299194, "65+": .170271}


def var_from_z(z):
    t = pd.DataFrame({"s": fy.VARSTR.values, "p": fy.VARPSU.values, "z": z})
    psu = t.groupby(["s", "p"])["z"].sum().reset_index()
    v = 0.0
    for _, g in psu.groupby("s"):
        n = len(g)
        if n > 1:
            v += n / (n - 1) * ((g.z - g.z.mean()) ** 2).sum()
    return v


def est(y, mask, adjust):
    w = fy.PERWT23F.values; m = mask.values.astype(float); y = fy[y].values
    if not adjust:
        R = (w * y * m).sum() / (w * m).sum()
        return R, var_from_z(w * m * (y - R) / (w * m).sum())
    R = 0.0; z = np.zeros(len(fy))
    for k, sk in STD.items():
        a = m * (fy.ageg == k).values
        pk = (w * y * a).sum() / (w * a).sum(); R += sk * pk
        z += sk * w * a * (y - pk) / (w * a).sum()
    return R, var_from_z(z)


groups = [("All adults 18+", fy.AGELAST >= 18)]
groups += [("Income <100% FPL (poor)", fy.POVCAT23 == 1),
           ("Income 100-199% FPL (near poor + low)", fy.POVCAT23.isin([2, 3])),
           ("Income 200-399% FPL (middle)", fy.POVCAT23 == 4),
           ("Income 400%+ FPL (high)", fy.POVCAT23 == 5)]
groups += [(l, fy.RACETHX == c) for c, l in {1: "Hispanic", 2: "NH White only", 3: "NH Black only", 4: "NH Asian only"}.items()]
ins = [(l, (fy.AGELAST <= 64) & (fy.INSCOV23 == c)) for c, l in {1: "18-64 any private", 2: "18-64 public only", 3: "18-64 uninsured all year"}.items()]

print(f"MEPS 2023 adults 18+ with positive weight: n={len(fy)}; specialist OB events counted: {len(spec_main)}")
for y, lab in (("any_spec", "ANY SPECIALIST VISIT (main definition), %"), ("any_specN", "ANY SPECIALIST VISIT excl. OB/GYN & psychiatry, %"),
               ("n_spec", "SPECIALIST VISITS PER ADULT (mean)"), ("any_pcp", "ANY PRIMARY CARE MD VISIT, %")):
    sc = 1 if y.startswith("n_") else 100
    for adjust in (False, True):
        print(f"\n=== {lab} | {'AGE-ADJUSTED' if adjust else 'CRUDE'} ===")
        for l, mk in groups + (ins if not adjust else []):
            R, v = est(y, mk, adjust); se = np.sqrt(v)
            print(f"{l:<40} {sc*R:7.2f}  95% CI {sc*(R-1.96*se):6.2f}-{sc*(R+1.96*se):6.2f}  n={int(mk.sum())}")
