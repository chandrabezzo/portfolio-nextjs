// Verify the static HTML consumed by crawlers, without relying on JavaScript.
import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'

const out = 'out'
const site = 'https://solusibejo.com'
const live = process.argv.includes('--live')
// Live checks inspect the actual hosting response, not the local build.
const responses = new Map()
async function productionResponse(url) {
  if (!responses.has(url)) {
    responses.set(
      url,
      fetch(url, { signal: AbortSignal.timeout(20000) })
        .then(async response => {
          assert.equal(response.status, 200, `${url}: expected HTTP 200, got ${response.status}`)
          assert.ok(
            !/noindex|nosnippet/i.test(response.headers.get('x-robots-tag') ?? ''),
            `${url}: restrictive X-Robots-Tag`
          )
          return { body: await response.arrayBuffer(), headers: response.headers }
        })
        .catch(error => {
          throw new Error(
            `${url}: production verification failed (${error.message}); check connectivity, deployed content and CDN rules. This is not evidence of deindexing.`
          )
        })
    )
  }
  const { body, headers } = await responses.get(url)
  return new Response(body, { headers })
}
async function readExport(file) {
  if (!live) return readFile(path.join(out, file), 'utf8')
  const route = file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`
  return (await productionResponse(`${site}${route}`)).text()
}
const sitemap = await readExport('sitemap.xml')
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => match[1])
const urls = entries.map(entry => entry.match(/<loc>(.*?)<\/loc>/)[1])
assert.ok(urls.length > 0, 'Sitemap must contain indexable pages')
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URL')
const titles = new Set()
const descriptions = new Set()
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(match =>
    Object.fromEntries(
      [...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(attr => [attr[1].toLowerCase(), attr[2]])
    )
  )
const exported = url => {
  const pathname = new URL(url).pathname
  return pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`
}

for (const [index, url] of urls.entries()) {
  if (live) console.log(`Checking ${index + 1}/${urls.length}: ${url}`)
  assert.ok(url.startsWith(`${site}/`), `Noncanonical sitemap origin: ${url}`)
  const html = await readExport(exported(url))
  const title = [...html.matchAll(/<title>(.*?)<\/title>/g)]
  assert.equal(title.length, 1, `${url}: one title required`)
  assert.ok(!titles.has(title[0][1]), `${url}: duplicate title`)
  titles.add(title[0][1])
  assert.equal(
    (title[0][1].match(/Chandra Abdul Fattah/g) ?? []).length,
    1,
    `${url}: repeated identity in title`
  )
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${url}: one H1 required`)
  const metas = tags(html, 'meta')
  const description = metas.filter(meta => meta.name === 'description')
  assert.equal(description.length, 1, `${url}: one description required`)
  assert.ok(
    description[0].content && !descriptions.has(description[0].content),
    `${url}: empty or duplicate description`
  )
  descriptions.add(description[0].content)
  assert.ok(
    !metas.some(
      meta => ['robots', 'googlebot'].includes(meta.name) && /noindex|nosnippet/.test(meta.content)
    ),
    `${url}: unexpectedly excluded from search`
  )
  assert.ok(
    /href="#main"/.test(html) && /id="main"/.test(html),
    `${url}: skip link or its target is missing`
  )
  const links = tags(html, 'link')
  assert.deepEqual(
    links.filter(link => link.rel === 'canonical').map(link => new URL(link.href).href),
    [url],
    `${url}: canonical mismatch`
  )
  const isId = new URL(url).pathname === '/id' || new URL(url).pathname.startsWith('/id/')
  assert.equal(tags(html, 'html')[0]?.lang, isId ? 'id-ID' : 'en', `${url}: missing page language`)
  const en = url.replace(`${site}/id`, site).replace(new RegExp(`^${site}$`), `${site}/`)
  const id = `${site}/id${new URL(en).pathname === '/' ? '' : new URL(en).pathname}`
  for (const [language, expected] of [
    ['en', en],
    ['id-ID', id],
    ['x-default', en],
  ]) {
    assert.ok(urls.includes(expected), `${url}: alternate is missing from export`)
    assert.ok(
      links.some(link => link.hreflang === language && new URL(link.href).href === expected),
      `${url}: HTML hreflang mismatch`
    )
    assert.ok(
      tags(entries[index], 'xhtml:link').some(
        link => link.hreflang === language && link.href === expected
      ),
      `${url}: sitemap hreflang mismatch`
    )
  }
  const image = metas.find(meta => meta.property === 'og:image')?.content
  assert.ok(image?.startsWith(site) && image.endsWith('.png'), `${url}: invalid social image`)
  if (live) {
    const response = await productionResponse(image)
    assert.ok(
      response.headers.get('content-type')?.includes('image/png'),
      `${url}: social image must be PNG`
    )
  } else {
    await access(path.join(out, new URL(image).pathname))
  }
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].flatMap(match => {
    const data = JSON.parse(match[1])
    assert.equal(data['@context'], 'https://schema.org')
    return data['@graph'] ?? [data]
  })
  const person = schemas.find(node => node['@type'] === 'Person')
  assert.equal(person?.name, 'Chandra Abdul Fattah', `${url}: missing identity schema`)
  assert.ok(
    person.worksFor.some(org => org.name === 'TechLab Security Sdn Bhd'),
    `${url}: current roles missing`
  )
  assert.ok(!person.hasOccupation, `${url}: obsolete occupation markup`)
  assert.ok(
    person.disambiguatingDescription?.includes(isId ? 'Paruh waktu' : 'Part-time'),
    `${url}: part-time role context missing`
  )
  assert.ok(
    person.disambiguatingDescription?.includes('Freelance'),
    `${url}: freelance context missing`
  )
  assert.equal(person.address?.addressLocality, 'Bandung', `${url}: profile locality mismatch`)
  assert.equal(schemas.find(node => node['@type'] === 'WebSite')?.alternateName, 'Solusi Bejo')
  assert.ok(!schemas.some(node => node.aggregateRating), `${url}: unsupported review rating`)
  const article = schemas.find(node => node['@type'] === 'Article')
  if (article) {
    assert.equal(article.author?.name, person.name, `${url}: article author identity missing`)
    assert.equal(article.image, image, `${url}: article and OG image disagree`)
    assert.ok(entries[index].includes('<lastmod>'), `${url}: missing editorial modification date`)
  } else {
    assert.ok(!entries[index].includes('<lastmod>'), `${url}: fabricated static modification date`)
  }
}
const home = await readExport('index.html')
const homeId = await readExport('id.html')
for (const [label, html] of [
  ['English homepage', home],
  ['Indonesian homepage', homeId],
]) {
  assert.ok(
    html.includes('href="https://medium.com/@chandrabezzo"'),
    `${label}: article navigation must lead to Medium`
  )
}
assert.ok(
  !urls.some(url => /\/(articles?|insights?)(\/|$)/.test(new URL(url).pathname)),
  'Sitemap must not advertise a retired on-site article section'
)
for (const author of ['Cevin Ways Al Cornelis', 'Dwi Kurnianto Mulyadien', 'Syamsu Rizal Ali'])
  assert.ok(home.includes(author), `Recommendation not in static HTML: ${author}`)
assert.ok(!home.includes('Placeholder Name'), 'Placeholder attribution leaked')
for (const language of ['English', 'Bahasa Indonesia'])
  assert.ok(home.includes(language), `Footer language missing: ${language}`)
const about = await readExport('about.html')
assert.ok(about.includes('Historical credential'), 'Credential expiry disclosure missing')
const work = await readExport('work.html')
assert.ok(
  work.includes('href="https://www.geoxspot.com/"'),
  'GeoXSpot proof link missing from work page'
)
const llms = await readExport('llms.txt')
for (const url of urls) assert.ok(llms.includes(url), `Missing llms URL: ${url}`)
assert.ok(llms.includes('Email: owner@solusibejo.com'), 'Current contact email missing from llms.txt')
assert.ok(!llms.includes('chandrashibezzo@gmail.com'), 'Retired contact email leaked into llms.txt')
assert.ok(
  llms.includes('permission requests and status only'),
  'iOS limitation missing from llms.txt'
)
const robots = await readExport('robots.txt')
let notFound
if (live) {
  const response = await fetch(`${site}/seo-verification-missing-page`, {
    signal: AbortSignal.timeout(20000),
  })
  assert.equal(
    response.status,
    404,
    'Unknown production route must return HTTP 404, not a soft 404'
  )
  notFound = await response.text()
} else {
  notFound = await readExport('404.html')
}
assert.ok(
  tags(notFound, 'meta').some(meta => meta.name === 'robots' && meta.content.includes('noindex')),
  '404 must be excluded from indexing'
)
// The loop above only walks sitemap URLs, and the 404 is deliberately not one,
// so nothing else here checks its absolute URLs. Next has resolved the OG image
// convention against the dev-server metadataBase on this route before.
assert.ok(
  /href="#main"/.test(notFound) && /id="main"/.test(notFound),
  '404 must offer the same skip link as every other page'
)
for (const meta of tags(notFound, 'meta')) {
  assert.ok(
    !/^https?:\/\/(localhost|127\.0\.0\.1)/.test(meta.content ?? ''),
    `404: absolute URL points at the dev server: ${meta.content}`
  )
}
assert.ok(robots.includes(`Sitemap: ${site}/sitemap.xml`), 'Invalid sitemap reference')
assert.ok(robots.includes('OAI-SearchBot'), 'Search crawler policy missing')
console.log(
  `SEO ${live ? 'production' : 'export'} verified: ${urls.length} pages, unique metadata, canonical/hreflang, JSON-LD, social images, recommendations, credentials, sitemap and llms.txt.`
)
