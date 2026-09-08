# Alterrell Interactive — Site Stack Setup Guide
### interactive.alterrell.com

---

## Overview

| Layer | Tool | Purpose |
|---|---|---|
| Site & hub | Framer | Homepage + project pages |
| Interactive tools | Netlify | Hosts standalone HTML calculators |
| Forms & waitlists | Tally | Embedded waitlist forms |
| Support CTA | Ko-fi | "Support the work" tip link |
| Domain | Bluehost (DNS only) | Points subdomain to Framer |

---

## Step 1 — Take Down the WordPress Site

You don't need to delete anything. Just redirect traffic.

**In Bluehost:**
1. Log in to Bluehost → go to **Domains**
2. Find `interactive.alterrell.com`
3. Click **Manage** → go to **DNS / Zone Editor**
4. Find the `CNAME` or `A` record pointing to WordPress
5. You'll update this record in Step 4 once Framer gives you a target address
6. Leave it alone for now — don't delete it yet

**In WordPress (optional but clean):**
1. Log in to WordPress admin for interactive.alterrell.com
2. Go to **Settings → Reading**
3. Check **"Discourage search engines from indexing this site"**
4. This prevents the old WP pages from showing up in Google while you transition

---

## Step 2 — Set Up Netlify (for interactive tools)

Netlify hosts your HTML calculator files. Free tier is plenty.

1. Go to **netlify.com** → Sign up with GitHub or email
2. Once logged in → click **"Add new site"** → **"Deploy manually"**
3. Drag your `sodium-calculator-v1.html` file into the deploy box
4. Netlify gives you a random URL like `quirky-name-123.netlify.app`
5. Go to **Site configuration → Domain management**
6. Click **"Add a domain"** → enter `interactive.alterrell.com/sodium` (or set up a subdomain like `tools.alterrell.com`)

**Going forward — your deploy workflow:**
- Build a calculator in Claude chat → get an HTML file
- Drag it to Netlify → live in 30 seconds
- No code, no server, no maintenance

---

## Step 3 — Set Up Framer (for the main site)

Framer is where the homepage and project pages live.

1. Go to **framer.com** → Sign up
2. Create a **New Project** → start from blank canvas
3. Build or paste in the homepage structure (use the HTML preview as your reference)
4. For each project page: create a new page, add your stat cards, tabs, and embed the Netlify URL via **Embed component** (paste the full Netlify URL)
5. Go to **Publish → Custom Domain**
6. Enter `interactive.alterrell.com`
7. Framer will give you a **CNAME target** (looks like `xxxxxx.framer.app`)
8. Copy that CNAME value — you need it for Step 4

**Framer plan note:** The free tier shows a Framer badge. The **Mini plan (~$5/mo)** removes the badge and lets you use a custom domain cleanly. Worth it.

---

## Step 4 — Point Your Domain (Bluehost → Framer)

1. Log back in to **Bluehost → Domains → DNS / Zone Editor**
2. Find the existing `CNAME` record for `interactive` (the subdomain)
3. Click **Edit**
4. Change the **value/target** to the Framer CNAME you copied in Step 3
5. Save
6. DNS propagation takes 15 minutes to 48 hours — usually under an hour

**After it propagates:**
- `interactive.alterrell.com` → loads your Framer site
- Your Netlify calculator lives at whatever URL you set (e.g., `interactive.alterrell.com/sodium` if you configure the subdomain routing in Framer's embed)

---

## Step 5 — Set Up Tally (waitlist forms)

1. Go to **tally.so** → Sign up free
2. Create a new form → keep it minimal:
   - Field 1: Email address
   - Field 2 (optional): "Which item interests you most?" (dropdown)
3. Under **Share** → copy the **Embed code**
4. In Framer, add an **Embed component** to the bottom of each project page
5. Paste the Tally embed code

---

## Step 6 — Set Up Ko-fi (support CTA)

1. Go to **ko-fi.com** → Sign up
2. Set up your page: name, photo, short description ("Independent data journalism. Built to move people.")
3. Your Ko-fi URL will be something like `ko-fi.com/alterrellmills`
4. In Framer and in the calculator HTML: replace the `#` href on the "Support the work" button with your Ko-fi URL

---

## Final Folder Structure (for your reference)

```
interactive.alterrell.com/          ← Framer site
├── /                               ← Homepage (project grid)
├── /sodium                         ← Sodium project page (Framer)
│   └── [embedded] Netlify calc     ← sodium-calculator-v1.html
├── /names                          ← Names project page (Framer) [future]
└── /congress                       ← Congress project page (Framer) [future]

Netlify (separate hosting):
├── sodium-calculator-v1.html
└── [future calculators here]
```

---

## What to Deactivate in WordPress

Once your Framer site is live and the domain is pointed correctly:

1. **WordPress admin → Plugins → Deactivate All**
   - You can leave them installed, just deactivated
2. **Settings → Reading → Check "Discourage search engines"** (if not done already)
3. **Leave Bluehost hosting active** — you still use it for DNS management and likely for `mirror.alterrell.com` (Mills Mirror). Don't cancel Bluehost.
4. You can leave WordPress installed and dormant. No need to delete anything.

---

## Total Ongoing Cost

| Tool | Cost |
|---|---|
| Framer Mini | ~$5/mo |
| Netlify | Free |
| Tally | Free |
| Ko-fi | Free (they take 0% on tips) |
| Bluehost | Whatever you already pay (keep for DNS + Mills Mirror) |

**Estimated new spend: ~$5/month**

---

## Questions to Answer Before You Start

- [ ] Do you want the calculator at `interactive.alterrell.com/sodium` or a different URL?
- [ ] Do you want Ko-fi or a different tip platform? (alternatives: Buy Me a Coffee, Gumroad)
- [ ] Do you want to set up Framer yourself or have me build the full Framer export first?
