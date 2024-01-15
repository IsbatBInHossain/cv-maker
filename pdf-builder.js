import puppeteer from 'puppeteer'
;(async () => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  await page.goto('http://localhost:5173', {
    waitUntil: 'networkidle2',
  })

  await page.pdf({
    path: 'output/resume.pdf',
    format: 'A4',
    printBackground: true,
  })

  await browser.close()
})()
