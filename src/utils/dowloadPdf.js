const puppeteer = require("puppeteer");

async function downloadPdf(url) {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    const website_url = url;

    await page.goto(website_url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    const pdf = await page.pdf({
        path: 'TermsPage.pdf',
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
      });

    await browser.close();

    return pdf
}

module.exports = downloadPdf

