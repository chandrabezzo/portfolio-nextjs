import { chromium } from 'playwright'
const browser = await chromium.launch()
for (const w of [320, 375, 390, 768, 1280]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 800 } })
  const page = await ctx.newPage()
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })
  const r = await page.evaluate((w) => {
    const span = document.querySelector('header a span')
    const header = document.querySelector('header')
    const lines = Math.round(span.getBoundingClientRect().height / parseFloat(getComputedStyle(span).lineHeight))
    return {
      nameLines: lines,
      headerH: Math.round(header.getBoundingClientRect().height),
      overflow: document.documentElement.scrollWidth > w + 1
        ? `${document.documentElement.scrollWidth}>${w}` : 'none',
    }
  }, w)
  console.log(`${String(w).padStart(4)}px  nameLines=${r.nameLines}  headerH=${r.headerH}  overflow=${r.overflow}`)
  await page.screenshot({ path: `scripts/review/shots/header-${w}.png`, clip: { x: 0, y: 0, width: Math.min(w, 520), height: 64 } })
  await ctx.close()
}
await browser.close()
