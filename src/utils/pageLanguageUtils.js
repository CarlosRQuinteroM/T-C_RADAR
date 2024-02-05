async function getPageLanguage(page, url) {
    try {
        await page.goto(url);
        const pageLanguage = await page.evaluate(() => {
            return document.documentElement.lang || navigator.language;
        })
        return pageLanguage
    } catch (error) {
        console.log(error);

    }
}
module.exports = getPageLanguage;