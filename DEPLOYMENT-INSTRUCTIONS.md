# TheBLK.Group - Deployment Instructions for Brandon

## ✅ COMPLETED BY SPARTAN 4
- [x] Created GitHub repo: https://github.com/BrandonBLKGroup/TheBLK.Group
- [x] Built full website (Home, Selling, Buying, Team pages)
- [x] Pushed code to main branch
- [x] Added SEO files (sitemap.xml, robots.txt, CNAME)
- [x] Tested locally

## 🔧 ACTION REQUIRED BY BRANDON (3 Steps, 5 Minutes)

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/BrandonBLKGroup/TheBLK.Group/settings/pages
2. Under "Source":
   - Select **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**
4. Check the box **"Enforce HTTPS"**
5. Wait 2-3 minutes for deployment

### Step 2: Configure DNS on Namecheap
1. Log in to Namecheap
2. Go to Domain List → **theblk.group** → Manage → Advanced DNS
3. **DELETE** any existing A records or CNAME records for @ and www
4. **ADD** these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | brandonblkgroup.github.io. | Automatic |

5. Click **Save All Changes**

### Step 3: Verify & Test
1. Wait 5-10 minutes for DNS propagation
2. Visit: https://theblk.group
3. Test all pages:
   - Home (hero, awards, stats)
   - Selling tab (30 Day Strategy, form)
   - Buying tab (off-market search, form)
   - Team tab (5 agents)
4. Test both forms (should open email to BrandonBLKGroup@Gmail.com)
5. Test on mobile

## 📋 What's Included

### Pages
- **Home:** Dual value prop (sellers/buyers), awards bar, stats (700+ homes, 12 years, 6 agents)
- **Selling:** 30 Day Marketing Strategy breakdown, 3% commission callout, inquiry form
- **Buying:** Off-market access, showing scheduler, home details form
- **Team:** Brandon Bruning, Amanda Mitchell, Shelley Lisko, Brad Lisko, Kevin Cloud

### Awards Displayed
- 🏆 #1 Team in Central Arkansas 2025 (Sales Volume)
- 🥇 #1 Team in LPT Realty Arkansas 2025
- 💎 Pinnacle Diamond (30M+ Sales 2025)
- ⭐ Best Realtors - Little Rock Soiree 2025

### Design
- v3 template standards (sage green #5B8A5A, premium clean design)
- Mobile responsive
- LPT Realty branding prominent on all pages

### SEO
- Meta tags (title, description, keywords, OG, Twitter)
- Schema markup (RealEstateAgent + WebSite)
- sitemap.xml
- robots.txt

## 📧 Form Routing
Both forms currently use **mailto** protocol (opens email client with pre-filled info to BrandonBLKGroup@Gmail.com).

**To upgrade to backend submission:**
1. Use Google Sheets webhook (like market sites)
2. Or integrate with Go High Level API
3. Replace mailto with fetch() POST

## 🚀 Post-Deployment SEO Checklist
After site is live:
- [ ] Add to Google Search Console
- [ ] Submit sitemap: https://theblk.group/sitemap.xml
- [ ] Request indexing for main pages
- [ ] Add backlinks from Make[Area]Home.com sites
- [ ] Link from Brain and Lab (if appropriate)

## ⚠️ Notes
- **6th Team Member:** Jarvis said 6 agents but only named 5. Add 6th member when identified.
- **30 Day Strategy Details:** Currently has placeholder bullet points. Add specific week-by-week breakdown when available.
- **Professional Photos:** Team section uses initials. Replace with actual headshots when available.
- **10-Minute Cache:** GitHub Pages caches for 10 minutes. Use incognito/Ctrl+Shift+R to see updates.

## 🔗 Useful Links
- Live Site: https://theblk.group (after deployment)
- GitHub Repo: https://github.com/BrandonBLKGroup/TheBLK.Group
- GitHub Pages Settings: https://github.com/BrandonBLKGroup/TheBLK.Group/settings/pages
- Namecheap DNS: https://ap.www.namecheap.com/domains/domaincontrolpanel/theblk.group/advancedns

---

**Built by Spartan 4 for The BLK Group at LPT Realty**
Contact: BrandonBLKGroup@Gmail.com
