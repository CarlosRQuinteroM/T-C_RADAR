const puppeteer = require("puppeteer");

async function urlOdrFinder(termsLink) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(termsLink)

    try {
        const odrCunsumerURL = await page.$$eval("p", (anchors) =>
            anchors.map((p) => ({
                text: p.textContent.trim(),
            }))
        );

        let odrConsumer = ["ec.europa.eu/consumers/odr"];
        console.log(odrCunsumerURL)

        const odrUrlFinder = odrCunsumerURL.find((url) => {
            return odrConsumer.some((str) => url.text.includes(str));
        });

        console.log("odrUrlFinder", odrUrlFinder)

        if (odrCunsumerURL) {
            return `${odrUrlFinder.text}`;
        } else {
            return 'No ODR consumer Url find.'
        }

    } catch (error) {
        console.log(error);
    }
};

module.exports = urlOdrFinder;