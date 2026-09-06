import { chromium } from 'playwright'
const BASE = 'http://localhost:4321'
const browser = await chromium.launch()
const page = await browser.newPage()
let bad = 0
for (const url of ['/', '/about', '/work', '/work/screen-time-native-integration', '/contact', '/id', '/id/work']) {
  await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' })
  const blocks = await page.$$eval('script[type="application/ld+json"]', (els) => els.map((e) => e.textContent))
  for (const [i, raw] of blocks.entries()) {
    let data
    try { data = JSON.parse(raw) } catch (e) { console.log(`${url} [${i}] INVALID JSON: ${e.message}`); bad++; continue }
    // The exact access pattern that was throwing.
    const ctxType = typeof data['@context']
    const ok = !Array.isArray(data) && ctxType === 'string'
    if (!ok) { console.log(`${url} [${i}] BAD SHAPE array=${Array.isArray(data)} @context=${ctxType}`); bad++; continue }
    // Simulate the consumer that crashed.
    try { data['@context'].toLowerCase() } catch (e) { console.log(`${url} [${i}] THROWS: ${e.message}`); bad++ }
    const types = data['@graph'] ? data['@graph'].map((n) => n['@type']) : [data['@type']]
    console.log(`${url} [${i}] ok  @context=string  nodes=${types.join(', ')}`)
  }
}
console.log(bad === 0 ? '\nAll JSON-LD blocks are objects with a string @context.' : `\n${bad} problem(s).`)
await browser.close()
