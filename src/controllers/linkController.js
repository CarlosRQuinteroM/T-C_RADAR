import puppeteer from "puppeteer";
import data from "../../data.json" assert { type: "json" };
import { capitalizeFirtsLetter } from "../utils/utils.js";

export default async function findTermsLink(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(url)
        console.log("await page.goto: ", url)

        const pageLanguage = await page.evaluate(() => {
            return document.documentElement.lang || navigator.language;
        })

        const pageLinks = await page.$$eval("a", (anchors) =>
            anchors.map((a) => ({
                href: a.href,
                text: a.textContent.trim(),
            }))
        );

        const searchJsonForLanguage = data[pageLanguage.toUpperCase()] || [];
        const capitalizedLanguageToFind = searchJsonForLanguage.map(capitalizeFirtsLetter)

        const pageTargetLink = pageLinks.find((link) => {
            return capitalizedLanguageToFind.some((str) => link.text.includes(str));
        })

        console.log("pageTargetLink", pageTargetLink)


    } catch (error) {

        console.log(error)
    } finally {

        await browser.close();
    }
}