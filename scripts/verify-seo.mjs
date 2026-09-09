// Verify the static HTML consumed by crawlers, without relying on JavaScript.
import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'

const out = 'out'
const site = 'https://solusibejo.com'
const sitemap = await readFile(path.join(out, 'sitemap.xml'), 'utf8')
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
  return path.join(out, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`)
}

for (const [index, url] of urls.entries()) {
  assert.ok(url.startsWith(`${site}/`), `Noncanonical sitemap origin: ${url}`)
  const html = await readFile(exported(url), 'utf8')
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
  await access(path.join(out, new URL(image).pathname))
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
  assert.ok(!schemas.some(node => node.aggregateRating), `${url}: unsupported review rating`)
  const article = schemas.find(node => node['@type'] === 'Article')
  if (article) {
    assert.equal(article.image, image, `${url}: article and OG image disagree`)
    assert.ok(entries[index].includes('<lastmod>'), `${url}: missing editorial modification date`)
  } else {
    assert.ok(!entries[index].includes('<lastmod>'), `${url}: fabricated static modification date`)
  }
}
const home = await readFile(path.join(out, 'index.html'), 'utf8')
const homeId = await readFile(path.join(out, 'id.html'), 'utf8')
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
const about = await readFile(path.join(out, 'about.html'), 'utf8')
assert.ok(about.includes('Historical credential'), 'Credential expiry disclosure missing')
const work = await readFile(path.join(out, 'work.html'), 'utf8')
assert.ok(
  work.includes('href="https://www.geoxspot.com/"'),
  'GeoXSpot proof link missing from work page'
)
const llms = await readFile(path.join(out, 'llms.txt'), 'utf8')
for (const url of urls) assert.ok(llms.includes(url), `Missing llms URL: ${url}`)
assert.ok(
  llms.includes('permission requests and status only'),
  'iOS limitation missing from llms.txt'
)
const robots = await readFile(path.join(out, 'robots.txt'), 'utf8')
const notFound = await readFile(path.join(out, '404.html'), 'utf8')
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
  `SEO export verified: ${urls.length} pages, unique metadata, canonical/hreflang, JSON-LD, social images, recommendations, credentials, sitemap and llms.txt.`
)
