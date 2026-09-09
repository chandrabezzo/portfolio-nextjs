import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })

const m = await page.evaluate(() => {
  const link = document.querySelector('header a')
  const logo = link.querySelector('img')
  const span = link.querySelector('span')
  const cs = getComputedStyle(span)

  // Ink extents of the text, not its line box.
  const c = document.createElement('canvas').getContext('2d')
  c.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
  const tm = c.measureText(span.textContent)

  const sr = span.getBoundingClientRect()
  const lr = logo.getBoundingClientRect()

  // Baseline position inside the span box.
  const probe = document.createElement('span')
  probe.textContent = 'x'
  probe.style.cssText = 'display:inline-block;width:0;overflow:hidden'
  span.appendChild(probe)
  const baseline = probe.getBoundingClientRect().bottom
  probe.remove()

  const inkTop = baseline - tm.actualBoundingBoxAscent
  const inkBottom = baseline + tm.actualBoundingBoxDescent

  // The rendered glyph inside the letterboxed <img> box.
  const ar = logo.naturalWidth / logo.naturalHeight
  const drawnH = lr.width / ar
  const glyphTop = lr.top + (lr.height - drawnH) / 2

  return {
    fontSize: cs.fontSize,
    span: { top: +sr.top.toFixed(2), bottom: +sr.bottom.toFixed(2) },
    baseline: +baseline.toFixed(2),
    ink: { top: +inkTop.toFixed(2), bottom: +inkBottom.toFixed(2), mid: +((inkTop + inkBottom) / 2).toFixed(2) },
    imgBox: { top: +lr.top.toFixed(2), bottom: +lr.bottom.toFixed(2), h: +lr.height.toFixed(2), w: +lr.width.toFixed(2) },
    glyph: { top: +glyphTop.toFixed(2), bottom: +(glyphTop + drawnH).toFixed(2), h: +drawnH.toFixed(2), mid: +(glyphTop + drawnH / 2).toFixed(2) },
  }
})

console.log(JSON.stringify(m, null, 2))
console.log('\nOptical delta (logo glyph mid - text ink mid):', (m.glyph.mid - m.ink.mid).toFixed(2), 'px')
console.log('Logo glyph height vs text ink height:', m.glyph.h.toFixed(1), 'vs', (m.ink.bottom - m.ink.top).toFixed(1))
await browser.close()
