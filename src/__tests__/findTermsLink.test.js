const puppeteer = require('puppeteer');
const findTermsLink = require('../controllers/linkController.js')

describe('findTermsLink Functionality', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
    })

    afterAll(async () => {
        await browser.close();
    })

    it('should handle a page without a terms link', async ()=>{
        const url  = "https://quintero-moreno-carlos.netlify.app/" ;
        const termsLink = await findTermsLink(url);
        expect(termsLink).toBeUndefined();
    });

    it("should find the terms link on a page", async () => {
        const url = "https://www.facebook.com/";
        const termsLink = await findTermsLink(url);
        expect(termsLink).toBe('https://www.facebook.com/policies?ref=pf');
    });
});