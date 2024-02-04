const puppeteer = require('puppeteer');
const data = require('../../data.json');
const capitalizeFirtsLetter = require('../utils/utils.js');


async function findTermsLink(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(url)
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


        if (pageTargetLink) {
            console.log("pageTargetLink", pageTargetLink.href)
            return pageTargetLink.href;
        } else {
            console.log(error);
            return `A terms and conditions link was not found on the selected page.<a>${url}</a>`
        }


    } catch (error) {
        console.log(error)
    } finally {
        await browser.close();
    }
}

module.exports = findTermsLink;