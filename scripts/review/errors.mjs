import { chromium } from 'playwright'
const BASE = process.env.BASE ?? 'http://localhost:3000'
const browser = await chromium.launch()
const ctx = await browser.newContext()
const page = await ctx.newPage()
const errs = []
page.on('console', (m) => m.type() === 'error' && errs.push(`console: ${m.text()}`))
page.on('pageerror', (e) => errs.push(`pageerror: ${e.message}\n${(e.stack||'').split('\n').slice(0,6).join('\n')}`))

for (const url of ['/', '/about', '/work', '/work/screen-time-native-integration', '/id', '/id/about', '/contact']) {
  await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' }).catch(() => {})
  await page.waitForTimeout(600)
}
// Exercise client-side navigation, which is where hydration-time bugs surface.
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
for (const sel of ['header a[href="/work"]', 'header a[href="/about"]']) {
  const el = await page.$(sel)
  if (el) { await el.click(); await page.waitForTimeout(900) }
}
// Toggle theme and language.
const tt = await page.$('header button[aria-label]')
if (tt) { await tt.click(); await page.waitForTimeout(400) }
const idLink = await page.$('header a[hreflang="id"]')
if (idLink) { await idLink.click(); await page.waitForTimeout(900) }

console.log(errs.length ? errs.join('\n---\n') : 'NO ERRORS')
await browser.close()
