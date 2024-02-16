const express = require("express");
const findTermsLink = require("../../controllers/termsLink.controller");

const findTermslinkRouter = express.Router();

findTermslinkRouter.post("/", async (req, res) => {
    if (!req.body || !req.body.url) {
        return res.status(400).send("Bad Request: ");
    }
    const { url } = req.body;

    try {
        const termsLink = await findTermsLink(url);
        res.send(
            termsLink
                ? `<div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px; display: flex; align-items: center; flex-wrap: wrap;">
                <h2 style="margin-bottom: 10px;">Link Found</h2>
                <p style="margin-bottom: 10px;">A terms and conditions link was found on the selected page:</p>
                <p>${termsLink}</p>
                <a href="${termsLink}" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; margin-right: 10px;">Go to terms page</a>
                <form action="/downloadpdf" method="post" style="display: flex; align-items: center;">
                  <input type="hidden" name="url" value="${termsLink}">
                  <button type="submit" style="padding: 10px 20px; background-color: #B4AC3F; color: #fff; text-decoration: none; border-radius: 5px; border: none; cursor: pointer;">Download Terms PDF</button>
                </form>
              </div>`
                : `<div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                        <p style="margin-bottom: 10px;">Terms and conditions url not found.</p>
                        <a href="/" style="display: inline-block; padding: 10px 20px; background-color: #D85E2D; color: #fff; text-decoration: none; border-radius: 5px;">Go back</a>
                    </div>`
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});

module.exports = findTermslinkRouter;
