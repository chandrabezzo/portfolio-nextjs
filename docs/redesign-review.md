# Redesign review — 8 September 2026

## Scope and sources

Reviewed the redesign from `212e83f` (last legacy version) through `ea75714`, then implemented the local follow-up. The pre-existing untracked `plan.md` is retained with a status appendix.

The implementation brief and shared discussion are design references. External profile edits, posting, deployment, and publication of private repository material are not part of this change.

Primary references reviewed:

- [Shared design discussion](https://chatgpt.com/share/6a9e90e0-23a4-83ec-ab09-3829e9c0eb32)
- [Production website](https://solusibejo.com/): still the legacy dark developer portfolio at review time.
- [LinkedIn experience](https://www.linkedin.com/in/chandra-abdul-fattah/): read in the user's browser; only public professional fields used in content.
- [LinkedIn projects](https://www.linkedin.com/in/chandra-abdul-fattah/details/projects/)
- [GitHub](https://github.com/chandrabezzo) and [Solusi Bejo organization](https://github.com/Solusi-Bejo/)
- [pub.dev publisher](https://pub.dev/publishers/solusibejo.com/packages): 23 packages verified on 7 September 2026.
- [TechLab](https://www.techlab.com.my/), [GeoXSpot](https://www.geoxspot.com/), [Cloud Creatures](https://thecloudcreatures.com/), [LDP](https://ldpgroup.co.id/), [LDP Digital](https://digital.ldpgroup.co.id/).

## Standards review

Three functional defects were confirmed and fixed:

1. Mobile navigation locked body scrolling without a scrollable menu. The menu now has a viewport-bound scroll area, natural keyboard order, Escape focus restoration, and closes on desktop resize. Desktop navigation starts at 1280px to avoid truncating the identity and wrapping links at 1024px.
2. Empty analytics-host configuration from GitHub Actions produced a local `/js/` script URL. Whitespace/empty values now fall back to Plausible; trailing slashes are normalized.
3. MDX heading fragment links opened duplicate tabs. Fragment and mail links now retain native same-page behavior; external HTTP(S) links can open another tab.

Other fixes: primary-button contrast follows the theme token; dark-mode inline code inherits legible text; case-study heading anchors account for the sticky header; Work has a complete heading hierarchy.

## Spec and trust review

Completed in this change:

- Warm light editorial default with a persistent dark preference, restrained green palette, clearer hero, a real portrait, and proof before the portrait on mobile.
- Shorter first-view copy that identifies mobile/platform expertise, seniority, and a clear next action.
- Three concept diagrams illustrating published work. They are labeled as concepts, not presented as actual screenshots or confidential system architecture.
- Work separates case studies, current engagements, and selected shipped products; the full inventory remains in Archive.
- Added TechLab Lead Mobile Developer (part-time, February 2026), Cloud Creatures Mobile Engineer (freelance, June 2025), and LDP Co-Founder (August 2025), as listed on LinkedIn. LDP company scope is not represented as undocumented personal achievements.
- Corrected Solusi Bejo's start to August 2017 and removed the contradictory 2015 About milestone.
- Added Ikhtiar and Mofasa from the public LinkedIn project inventory. Store availability is not asserted for historical entries.
- Expertise now links to concrete case studies and packages. Mobile experience is described as starting in 2017, distinct from software experience since 2014 and Flutter since approximately 2019.
- Open-source inventory now includes all 23 verified publisher packages, within 29 total curated package/contribution entries. Publisher membership is not a claim of sole authorship. Package Rename Plus is identified as a fork and GrowthBook as an upstream contribution.
- Screen Time's English and Indonesian case studies explicitly distinguish Android functionality from the iOS permission-only implementation, with pinned implementation references.

Remaining editorial work from the broader brief:

- Scope update: the user excluded on-site articles from this redesign. Insights remains a direct link to Medium; article creation, on-site article routes, and the earlier 3–5 article target are no longer release requirements. Ghost with separate hosting/VPS is deferred as a future option raised by the user.
- Obtain 2–3 attributed recommendations. Existing placeholders remain excluded from rendered pages.
- Expand Evermos with approved concrete decisions, trade-offs, and outcomes. Its internal TODO is not displayed to visitors.
- Add approved product screenshots where available. No proprietary screenshots or architecture were copied from private repositories.
- Align external GitHub/LinkedIn profiles in a separate explicitly requested publication task.
- Broader technical backlog: build-time validation of structured data inventories (in addition to existing MDX validation), per-case social cards, and production analytics verification after configuration/deployment.

## Validation

- `npm run dev` used for visual and interaction review in Chrome.
- 20 pages across EN/ID checked at 320 CSS pixels: 14 core pages plus 6 case-study pages. No horizontal page overflow; one H1 per page. Core pages had no missing fragment targets or completed broken images.
- Visual checks at 320, 768, 1024, and 1440 CSS pixels; mobile landscape checked at approximately 666 × 320.
- Mobile menu scroll, Escape focus restoration, resize-to-desktop closure, theme toggle, language navigation, and same-tab case-study anchors verified.
- `npm run typecheck`, `npm run lint`, and `git diff --check` pass.
- `npm run build` passes: 21 HTML pages including the custom 404, 20 sitemap URLs, valid internal file/fragment destinations, production canonicals and JSON-LD on all indexable pages, OG PNG and robots files present.
- Next reports metadataBase fallback warnings for metadata processing, but the exported HTML contains no localhost URLs; all indexable page canonicals and social URLs use the production domain.

Chrome's ColorZilla extension injects `cz-shortcut-listen` into the body before hydration, causing a development hydration warning. The mismatch names that injected attribute; it is not hidden by suppressing application warnings. Browser review did not constitute a full automated WCAG or Lighthouse audit. Next's lint-command deprecation, stale Browserslist data, and intentionally hidden testimonial placeholders remain non-blocking toolchain/editorial warnings.
