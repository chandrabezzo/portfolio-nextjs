import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 375, height: 800 } })
const page = await ctx.newPage()
const errs = []
page.on('pageerror', (e) => errs.push(e.message))
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })

await page.click('header button[aria-controls="mobile-nav"]')
await page.waitForTimeout(400)
const menu = await page.evaluate(() => {
  const nav = document.querySelector('#mobile-nav')
  if (!nav) return null
  return {
    visible: !!nav.offsetParent,
    links: [...nav.querySelectorAll('a')].map((a) => a.textContent.trim()).filter(Boolean),
    hasLangSwitch: !!nav.querySelector('a[hreflang]'),
    smallestTapTarget: Math.min(...[...nav.querySelectorAll('a,button')].map((e) => e.getBoundingClientRect().height)),
  }
})
console.log('MOBILE MENU:', JSON.stringify(menu, null, 2))
await page.screenshot({ path: 'scripts/review/shots/mobile-menu.png' })

// Theme toggle round-trip
await page.click('header button[aria-label]')
await page.waitForTimeout(300)
const afterToggle = await page.evaluate(() => ({
  cls: document.documentElement.className.includes('light'),
  stored: localStorage.getItem('sb-theme'),
  bg: getComputedStyle(document.body).backgroundColor,
}))
console.log('AFTER TOGGLE:', afterToggle)
await page.reload({ waitUntil: 'networkidle' })
const afterReload = await page.evaluate(() => ({
  cls: document.documentElement.className.includes('light'),
  bg: getComputedStyle(document.body).backgroundColor,
}))
console.log('AFTER RELOAD (persisted?):', afterReload)
console.log(errs.length ? 'PAGE ERRORS: ' + errs.join('; ') : 'no page errors')
await browser.close()
