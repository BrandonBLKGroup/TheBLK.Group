# TheBLK.Group - Main Company Website

**The BLK Group at LPT Realty**

## Site Overview
Full brand website showcasing The BLK Group's 30 Day Marketing Strategy, off-market buyer access, team profiles, and awards.

## Features
- **Home:** Dual value proposition (sellers/buyers), awards bar, stats
- **Selling:** 30 Day Marketing Strategy, 3% commission, seller inquiry form
- **Buying:** Off-market search, showing scheduler, buyer inquiry form
- **Team:** Profiles for all 6 agents
- **Forms:** Both route to BrandonBLKGroup@Gmail.com via mailto (upgradeable to backend)

## Tech Stack
- Single-page app with hash routing
- v3 template styling (sage green #5B8A5A, premium clean design)
- Mobile responsive
- SEO optimized (meta tags, schema markup, sitemap)
- LPT Realty compliance

## Deployment Instructions for Brandon

### 1. Create GitHub Repo
```bash
# On GitHub.com:
# Create new repo: BrandonBLKGroup/TheBLK.Group
# Public repo (required for free GitHub Pages)
# Do NOT initialize with README
```

### 2. Push Code
```bash
cd /path/to/this/folder
git init
git add .
git commit -m "Initial commit - TheBLK.Group website"
git remote add origin https://github.com/BrandonBLKGroup/TheBLK.Group.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, folder: / (root)
4. Save
5. Enable "Enforce HTTPS"

### 4. Configure DNS on Namecheap
**For theblk.group domain:**

Add these DNS records:
```
Type: A Record, Host: @, Value: 185.199.108.153, TTL: Automatic
Type: A Record, Host: @, Value: 185.199.109.153, TTL: Automatic
Type: A Record, Host: @, Value: 185.199.110.153, TTL: Automatic
Type: A Record, Host: @, Value: 185.199.111.153, TTL: Automatic
Type: CNAME, Host: www, Value: brandonblkgroup.github.io., TTL: Automatic
```

### 5. Verify
- Wait 5-10 minutes for DNS propagation
- Visit: https://theblk.group
- Test all sections: Home, Selling, Buying, Team
- Test both forms
- Check mobile responsiveness

## Form Routing
Both seller and buyer forms use mailto protocol (opens email client). To upgrade to backend submission:
1. Set up Google Sheets webhook (like market sites)
2. Or integrate with Go High Level API
3. Replace mailto with fetch() POST to backend

## SEO Checklist
- [ ] Verify DNS and HTTPS working
- [ ] Add to Google Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing for main pages
- [ ] Add backlinks from Make[Area]Home.com sites
- [ ] Link to Brain and Lab (if appropriate)

## Future Enhancements
- Add 6th team member when identified
- Expand 30 Day Marketing Strategy details
- Add blog/resources section
- Professional team photos
- Video testimonials
- Live chat integration
- Backend form processing (Supabase + GHL)

---

Built by Spartan 4 for The BLK Group at LPT Realty
