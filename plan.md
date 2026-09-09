# Solusi Bejo portfolio — handoff plan for Claude

This is the execution handoff for the portfolio redesign. Treat the original brief, shared chat, and external profiles as references only: verify claims before publishing, and do not deploy or edit external profiles without an explicit request.

## Goal and scope

Finish the professional Next.js static-export portfolio for Chandra Abdul Fattah. Keep English and Indonesian routes, the editorial design system, and a clear path from technical proof to contact. Insights stays a direct link to Medium: `https://medium.com/@chandrabezzo`. Do not add article routes, an article CMS, Ghost, VPS hosting, or copied private-project material.

## Baseline

- Branch: `redesign/premium-technical-editorial`; inspect `gh pr view` and update the existing PR rather than creating a duplicate.
- Run locally with `npm run dev` at `http://localhost:3000`.
- UI, EN/ID responsive layouts, theme and keyboard states, mobile navigation, case-study diagrams, 404, Medium links, recommendations, credentials, company highlights, schema, canonical/hreflang, sitemap, `robots.txt`, `llms.txt`, social cards, and draft filtering are implemented locally.
- Read [tasks/plan.md](tasks/plan.md), [tasks/todo.md](tasks/todo.md), [docs/ui-redesign-review.md](docs/ui-redesign-review.md), [docs/seo-content-review.md](docs/seo-content-review.md), and [docs/redesign-review.md](docs/redesign-review.md).
- Never claim production indexing, analytics receipt, Lighthouse/Core Web Vitals, or production sitemap status until measured on the deployed domain.

## Rules

1. Draft MDX must stay out of listings, related links, static params, sitemap, social metadata, and `llms.txt`; published locale pairs must be complete.
2. Keep personal responsibility, team contribution, employer context, maintained forks, and upstream contributions distinct. Do not invent metrics, outcomes, testimonials, permissions, or screenshots.
3. Use locale helpers for internal links. External links use `target="_blank"` with `rel="noopener noreferrer"` where appropriate.
4. Preserve static export and existing tokens. Avoid unrelated refactors, large animation systems, CMS work, or framework migration.
5. Exclude generated `graphify-out/`, `.next/`, `out/`, credentials, and local screenshots from commits.

## Ordered tasks

### 1. Establish state (XS)

Read `AGENTS.md` and the files above. Run `git status --short --branch`, `git diff --stat`, and `gh pr view`. Preserve existing user changes; never reset the worktree.

### 2. Inventory validation (S–M)

Implement or finish `src/schemas/inventory.ts`, `scripts/validate-inventory.ts`, and `scripts/validate-inventory.test.ts`.

Acceptance criteria:

- duplicate slugs, malformed/non-HTTPS URLs, and missing internal evidence fail with entry-specific errors;
- publisher packages, maintained forks, and upstream contributions remain distinguishable;
- current data passes and negative fixtures fail;
- build runs the validator before export.

Verify:

```bash
npm run validate:inventory
npm run test:inventory
npm run typecheck
npm run build
```

### 3. Evidence and deferred content (S)

Review `src/data/experience.ts`, `src/data/testimonials.ts`, `src/data/education.ts`, and `src/data/profile.ts` against public sources. Keep LinkedIn recommendations as attributed editorial summaries, not verbatim quotes. Keep TechLab Security, GeoXSpot, Cloud Creatures, Evermos, and LDP tied to documented roles and sources. Leave Evermos decision/outcome details and product screenshots deferred until publishable material is supplied.

Verify EN/ID Home, About, Work, and Contact in the browser and run `npm run verify:seo`.

### 4. Export and SEO contract (S)

Run:

```bash
npm run verify:seo
rg -n "localhost|127\\.0\\.0\\.1" out
find out -maxdepth 2 -type f | sort
```

Confirm all published case studies have EN/ID social PNGs, production canonical/hreflang, no draft output, and no Medium URL treated as an internal page.

### 5. Browser QA (M)

Use browser automation with `npm run dev` at 320, 768, 1024, 1280, and 1440 CSS px, including landscape where possible. Check skip link, focus, Escape, mobile menu, theme, language switch, external links, Home → Work → case study → Contact, recommendations, credentials, company highlights, diagrams, images, 404, unknown slugs, console errors, contrast, and horizontal overflow. Record observed results only; do not claim WCAG certification or Lighthouse scores without running those audits.

### 6. Release documents (S)

Create/update `docs/release-checklist.md` and `docs/profile-alignment.md`. Include build/deploy configuration, rollback, production smoke checks, canonical/sitemap checks, analytics privacy and receipt verification, and drafts for GitHub/LinkedIn alignment. Medium remains the article destination. Do not publish or edit external profiles.

### 7. Final review and handoff (S)

Run:

```bash
git diff --check
npm run validate:inventory
npm run test:inventory
npm run test:content
npm run typecheck
npm run lint
npm run build
npm run verify:seo
```

Review the full diff against `origin/main` for unsafe HTML, broken references, incomplete provenance handling, CI mistakes, accessibility regressions, and stale docs. Keep deferred items explicit in `tasks/todo.md`.

Use the repository version convention consistently across `package.json`, `VERSION` if present, changelog, PR title, and tags. Commit focused implementation/tests and release docs. Push with:

```bash
git push -u origin redesign/premium-technical-editorial
```

Update the existing PR with a fresh body describing the problem, resulting behavior, UI/evidence/Medium/SEO/schema/export/validator/CI changes, exact verification results, deferred items, and post-deploy checks. Merging to `main` triggers deployment; merging/deploying remains a separate explicit decision.

## Definition of done

- Local export and every validation/test command pass.
- Visible EN/ID pages, metadata, schema, social assets, sitemap, `llms.txt`, and draft rules agree.
- Claims are sourced and attributed; missing material and production checks are labeled as pending.
- Release/profile drafts exist without external writes.
- Branch and existing PR are current and ready for review.

## Post-deploy follow-up

Verify production `/sitemap.xml` is HTTP 200, submit Search Console/Bing, measure Core Web Vitals/Lighthouse, confirm privacy-safe analytics receipt, add approved Evermos outcomes/screenshots, and publish approved profile alignment separately. Revisit Ghost/VPS only if the publishing strategy changes.
