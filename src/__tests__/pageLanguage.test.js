const puppeteer = require('puppeteer');
const getPageLanguage = require('../utils/pageLanguageUtils.js');



describe('getPageLanguaje Funcionality', () => {

    it('should get the page language', async () => {

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        const url = "https://es-es.facebook.com/"


        try {
            const pageLanguage = await getPageLanguage(page, url);
            expect(pageLanguage).toBeDefined();
            expect(typeof pageLanguage).toBe('string');
            expect(pageLanguage).toBe('es');
        } finally {
            await browser.close();

        }
    }, 10000)

    it('should handle errors when getting the page language', async () => {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        const url = 'https://invalid-url.com';

        try {
            const pageLanguage = await getPageLanguage(page, url);
            expect(pageLanguage).toBeUndefined();
        } finally {
            await browser.close();
        }

    }, 10000)
})