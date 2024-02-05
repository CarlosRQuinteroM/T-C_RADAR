const express = require('express');
const findTermsLink = require('../../controllers/linkController');

const findTermsLinkRouter = express.Router();

findTermsLinkRouter.post('/', async (req, res) => {
    if (!req.body || !req.body.url) {
        return res.status(400).send("Bad Request: ")
    }
    const { url } = req.body;
    try {
        const termsLink = await findTermsLink(url);
        res.send(
            termsLink
                ? `<li><a href=${termsLink} target="_blank">Link found: ${termsLink}</li></a>`
                : "No link found."
        );
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error")
    }

})

module.exports = findTermsLinkRouter;