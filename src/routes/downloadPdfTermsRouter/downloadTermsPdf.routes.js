const express = require("express");
const downloadPdf = require("../../utils/PDFDownload");
const findTermsLink = require("../../controllers/termsLink.controller");

const downloadTermsPdfRouter = express.Router();

downloadTermsPdfRouter.post("/", async (req, res) => {
  if (!req.body || !req.body.url) {
    return res.status(400).send("Bad Request: ");
  }
  const { url } = req.body;

  try {
    const termsLink = await findTermsLink(url);
    const pdf = await downloadPdf(termsLink);
    res.send(pdf);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = downloadTermsPdfRouter;
