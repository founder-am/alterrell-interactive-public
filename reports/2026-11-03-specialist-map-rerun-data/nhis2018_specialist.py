"""NHIS 2018 sample adult: % who saw/talked to a medical specialist in past 12 months (AHCSYR8),
by family income as % of poverty (POVRATI3, 5 imputations, Rubin's rules), race/Hispanic origin
(HISCODI3), and insurance (COVER, ages 18-64). Weighted with WTFA_SA; variance by Taylor
linearization using PSTRAT/PPSU. Crude and age-adjusted (2000 US std pop, NCHS Statistical Notes 20,
Distribution #8: 18-24 .128810, 25-44 .401725, 45-64 .299194, 65+ .170271).
Usage: python3 -I nhis2018_specialist.py <dir with samadult.csv personsx.csv incmimp1-5.dat>"""
import sys, os
import numpy as np, pandas as pd

d = sys.argv[1]
sa = pd.read_csv(os.path.join(d, "samadult.csv"),
                 usecols=["HHX", "FMX", "FPX", "WTFA_SA", "PSTRAT", "PPSU", "AGE_P", "AHCSYR8"],
                 dtype={"HHX": str, "FMX": str, "FPX": str})
ps = pd.read_csv(os.path.join(d, "personsx.csv"),
                 usecols=["HHX", "FMX", "FPX", "HISCODI3", "COVER"],
                 dtype={"HHX": str, "FMX": str, "FPX": str})
for df in (sa, ps):
    df["HHX"] = df["HHX"].str.zfill(6); df["FMX"] = df["FMX"].str.zfill(2); df["FPX"] = df["FPX"].str.zfill(2)
sa = sa.merge(ps, on=["HHX", "FMX", "FPX"], how="left", validate="1:1")
assert sa["HISCODI3"].notna().all()
sa = sa[sa["AHCSYR8"].isin([1, 2])].copy()
sa["y"] = (sa["AHCSYR8"] == 1).astype(float)
sa["ageg"] = pd.cut(sa["AGE_P"], [17, 24, 44, 64, 200], labels=["18-24", "25-44", "45-64", "65+"])
STD = {"18-24": .128810, "25-44": .401725, "45-64": .299194, "65+": .170271}

imps = []
for i in range(1, 6):
    rows = []
    with open(os.path.join(d, f"incmimp{i}.dat")) as f:
        for line in f:
            rows.append((line[6:12], line[12:14], line[14:16], float(line[25:34]) / 1000.0))
    imps.append(pd.DataFrame(rows, columns=["HHX", "FMX", "FPX", "pov"]))


def lin_var(df, num, den):
    """Variance of ratio sum(w*num)/sum(w*den) by Taylor linearization, with-replacement PSUs."""
    w = df["WTFA_SA"].values
    R = (w * num).sum() / (w * den).sum()
    z = w * (num - R * den) / (w * den).sum()
    t = pd.DataFrame({"s": df["PSTRAT"].values, "p": df["PPSU"].values, "z": z})
    psu = t.groupby(["s", "p"])["z"].sum().reset_index()
    v = 0.0
    for _, g in psu.groupby("s"):
        n = len(g)
        if n > 1:
            v += n / (n - 1) * ((g["z"] - g["z"].mean()) ** 2).sum()
    return R, v


def est(df, mask, adjust):
    """Return (estimate, variance) for subgroup mask; full design kept for variance."""
    m = mask.values.astype(float)
    y = df["y"].values
    if not adjust:
        return lin_var(df, y * m, m)
    # direct age adjustment: sum_k std_k * p_k ; linearized as sum of ratio influence terms
    w = df["WTFA_SA"].values
    zt = np.zeros(len(df)); R = 0.0
    for k, sk in STD.items():
        a = m * (df["ageg"] == k).values
        pk = (w * y * a).sum() / (w * a).sum()
        R += sk * pk
        zt += sk * w * (y * a - pk * a) / (w * a).sum()
    t = pd.DataFrame({"s": df["PSTRAT"].values, "p": df["PPSU"].values, "z": zt})
    psu = t.groupby(["s", "p"])["z"].sum().reset_index()
    v = 0.0
    for _, g in psu.groupby("s"):
        n = len(g)
        if n > 1:
            v += n / (n - 1) * ((g["z"] - g["z"].mean()) ** 2).sum()
    return R, v


def rubin(pairs):
    q = np.array([p[0] for p in pairs]); u = np.array([p[1] for p in pairs])
    m = len(q); qb = q.mean(); ub = u.mean(); b = q.var(ddof=1) if m > 1 else 0.0
    return qb, np.sqrt(ub + (1 + 1 / m) * b)


def fmt(label, pairs, n):
    q, se = rubin(pairs)
    return f"{label:<44} {100*q:6.1f}%  95% CI {100*(q-1.96*se):5.1f}-{100*(q+1.96*se):5.1f}  n={n}"


print("NHIS 2018 sample adults with valid AHCSYR8, n =", len(sa))
for adjust in (False, True):
    print("\n=== " + ("AGE-ADJUSTED" if adjust else "CRUDE") + " ===")
    print(fmt("All adults 18+", [est(sa, sa["y"] == sa["y"], adjust)], len(sa)))
    # income
    bands = [("<100% FPL", 0, 1.0), ("100-199% FPL", 1.0, 2.0), ("200-399% FPL", 2.0, 4.0), ("400%+ FPL", 4.0, 1e9)]
    for lab, lo, hi in bands:
        pairs = []; n = None
        for imp in imps:
            dd = sa.merge(imp, on=["HHX", "FMX", "FPX"], how="left", validate="1:1")
            mk = (dd["pov"] >= lo) & (dd["pov"] < hi)
            pairs.append(est(dd, mk, adjust)); n = int(mk.sum())
        print(fmt("Income " + lab, pairs, n))
    races = {1: "Hispanic", 2: "Non-Hispanic White", 3: "Non-Hispanic Black", 4: "Non-Hispanic Asian"}
    for c, lab in races.items():
        mk = sa["HISCODI3"] == c
        print(fmt(lab, [est(sa, mk, adjust)], int(mk.sum())))
    a64 = (sa["AGE_P"] <= 64)
    for c, lab in {1: "18-64 Private", 2: "18-64 Medicaid/other public", 4: "18-64 Uninsured"}.items():
        mk = a64 & (sa["COVER"] == c)
        if adjust:
            # 18-64 only: renormalize std to the three under-65 groups
            pass
        print(fmt(lab + (" (crude only)" if adjust else ""), [est(sa, mk, False)], int(mk.sum())))
