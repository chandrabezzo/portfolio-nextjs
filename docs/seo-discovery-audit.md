# SEO and AI discovery audit — 9 September 2026

## Assessment

Technical readiness is strong; indexing and recommendation frequency have not been established. The production homepage was reloaded in Chrome and displays the new design, name, specialization, company experience, recommendations, and Medium navigation. An earlier search-service response showed old content; that is not proof that Google's index is stale.

The existing export contract verifies 20 EN/ID pages, unique titles/descriptions, production canonical URLs, reciprocal hreflang, one H1, language attributes, identity JSON-LD, social assets, sitemap, llms.txt, and noindex on the 404 page. Content is present in static HTML. The earlier production HTTP inspection also retrieved the new homepage, robots.txt, sitemap and llms.txt.

## Enhancements implemented locally

- Person schema now includes a disambiguating description generated from the same current job titles displayed on About, retaining part-time and freelance context. Existing worksFor organizations remain present; no unverified employment type or dates were invented.
- WebSite schema includes Solusi Bejo as alternateName, connecting the displayed brand to the personal site name.
- Case-study author and publisher include explicit Person type, name and profile URL alongside the stable entity ID. This makes their identity understandable to consumers that do not resolve references across separate JSON-LD blocks.
- `npm run verify:seo:live` checks the production version of the export contract, HTTP status, restrictive X-Robots-Tag headers, social PNG content type, and real HTTP 404 behavior. It requires the new schema after deployment and never silently falls back to local files. Request failures are not classified as indexing failures.
- Local export assertions now require the new identity and engagement context.

## Validation and limits

- Production build, `npm run verify:seo`, typecheck and lint passed after schema changes. The build still reports an internal metadataBase warning; exported metadata checks, including the custom 404, pass.
- Home was reviewed in Chrome on production and locally after starting `npm run dev`.
- Production HTTP requests from the terminal intermittently time out. The first live-check run did not finish successfully. A passing local check must not be reported as a passing production check.
- These changes are local, not deployed in this audit. Search Console/Bing access, actual bot logs, external structured-data validators and field Core Web Vitals have not been checked. No claim is made about ranking, indexing completeness, or recommendation frequency.

## Next actions in priority order

1. Deploy the reviewed changes and run `npm run verify:seo:live` from a network able to reach the host. Confirm www redirects permanently to the canonical apex domain and unknown paths return 404. Check CDN rules and verified crawler logs if requests fail; do not disable security globally.
2. Verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap and inspect Home, About, Work and each case study. Record selected canonical, last crawl and indexing reason. No verification token is fabricated or added here.
3. Add publishable decisions and outcomes to Evermos/GeoXSpot case studies with clear personal responsibility and public evidence. Preserve the user's correction that KlikDokter owns its application; do not infer a Jasamedika delivery relationship without confirmation.
4. Add contextual links from relevant GitHub READMEs, pub.dev package pages, LinkedIn and Medium bio/articles to the portfolio or relevant case study. Keep articles on Medium.
5. Measure mobile performance and referral/conversion data. Separate named searches from non-brand queries and search-enabled AI responses from model-memory responses. Record query, date, platform and cited URLs when sampling AI visibility.

## Official guidance

- Google: https://developers.google.com/search/docs/appearance/ai-features — normal SEO requirements apply; no special AI file or schema is required and inclusion is not guaranteed.
- Google site names: https://developers.google.com/search/docs/appearance/site-names
- OpenAI: https://developers.openai.com/api/docs/bots — OAI-SearchBot governs search crawling; GPTBot training is a separate choice. robots.txt alone does not establish CDN access.
- Anthropic: https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — Claude-SearchBot, Claude-User and ClaudeBot have different purposes.

Keep llms.txt as an optional summary, not a ranking promise. No provider-specific submission mechanism for DeepSeek was verified in this audit.
