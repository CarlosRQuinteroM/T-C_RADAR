import puppeteer from "puppeteer";

export default async function findTermsLink(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(url)
        console.log("await page.goto: ", url)

        const pageLanguage = await page.evaluate(() => {
            return document.documentElement.lang || navigator.language;
        })
        console.log("pageLanguage: ", pageLanguage)
    } catch (error) {
        console.log(error)
    } finally {
        await browser.close();
    }
}