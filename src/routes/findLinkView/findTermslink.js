const express = require('express');
const findTermsLink = require('../../controllers/linkController.js');
const urlOdrFinder = require('../../utils/urlOdrFinder.js');

const findTermsLinkRouter = express.Router();

findTermsLinkRouter.post('/', async (req, res) => {
    if (!req.body || !req.body.url) {
        return res.status(400).send("Bad Request: ")
    }
    const { url } = req.body;
    try {
        const termsLink = await findTermsLink(url);
        const odrConstumerUrl = await urlOdrFinder(termsLink)


        res.send(
            termsLink && odrConstumerUrl
                ? `
                <li><a href=${termsLink} target="_blank">Link found: ${termsLink}</li></a>
                <p>${odrConstumerUrl}</p>
                `
                : "No link found."
        );
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error")
    }

})

module.exports = findTermsLinkRouter;