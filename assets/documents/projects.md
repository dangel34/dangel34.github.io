---
layout: default
title: Projects
---

# Security Projects

Hands-on implementation and lab-based engineering work focused on defensive security, configuration hardening, and infrastructure resilience.

---

<div class="project-card" markdown="1">

## Mercyhurst University Alumni Data Scientist Project  
**Mercyhurst University**  
February 2025 – May 2025

### Overview
Collaborated with a four-person team to clean, enrich, and structure alumni datasets to improve outreach targeting and engagement analytics for the University Advancement team.

### Environment
- Team-based data analysis project  
- Structured datasets containing alumni records  
- OSINT techniques for data enrichment  
- Data cleaning and normalization workflows  

### Objectives
- Improve dataset accuracy and completeness  
- Reduce duplication and inconsistent formatting  
- Enrich records using publicly available information  
- Deliver structured datasets for analytical use  

### Implementation
Performed data cleaning, normalization, and validation across alumni records.  

Applied open-source intelligence (OSINT) techniques to enrich missing or outdated data fields while maintaining ethical and privacy boundaries.  

Standardized outputs to ensure compatibility with institutional analytics workflows.

### Security Considerations
- Responsible use of publicly available information  
- Data minimization principles  
- Structured handling of personally identifiable information (PII)  
- Ethical OSINT methodology  

### Outcome
Delivered structured, enriched datasets to the University Advancement team to support improved outreach and engagement strategies.  

Gained experience in collaborative data workflows, information validation, and privacy-aware data handling practices.

</div>

<div class="project-card" markdown="1">

## Cookiedle  
**Personal Project**  
2025

### Overview
Designed and built a browser-based daily guessing game inspired by Wordle, using Cookie Run Kingdom characters as the subject matter. Features two daily game modes, a cheat-proof backend, and a 170+ cookie database.

### Environment
- Static frontend hosted on GitHub Pages  
- Serverless backend via Cloudflare Workers  
- Cookie database built with a custom Selenium scraper  
- CI/CD through GitHub

### Objectives
- Deliver a daily-reset game experience consistent across all players  
- Prevent client-side answer exposure through server-side validation  
- Build a maintainable data pipeline for expanding the cookie database  
- Ensure mobile-friendly, responsive gameplay

### Implementation
Built a two-mode daily game: a trait-matching cookie guesser and a skill identification challenge. The frontend is a single-page app served statically via GitHub Pages, with fuzzy autocomplete search and localStorage-based session persistence.

All game logic — guess checking, hint generation, and daily answer selection — runs in a Cloudflare Worker. The daily target is derived server-side using `SHA-256(date + COOKIE_SECRET)`, where the secret is stored as an encrypted Cloudflare environment variable and never transmitted to the browser.

Automated cookie data collection using a Selenium scraper targeting noff.gg, with a build script that injects the CSV dataset into the frontend at deploy time.

### Security Considerations
- Answer never present in page source or network traffic  
- All guess validation handled server-side in the Cloudflare Worker  
- `COOKIE_SECRET` stored as an encrypted environment variable — absent from version control  
- CORS restricted to the production GitHub Pages origin  
- Easter egg page excluded from search engine indexing via `robots.txt`

### Outcome
Shipped a fully playable, cheat-proof daily game with a live player base. Gained hands-on experience with serverless architecture, secrets management, client/server trust boundaries, and automated data pipelines.

**[▶ Play Cookiedle](https://dangel34.github.io/Cookiedle-Game)**

</div>
