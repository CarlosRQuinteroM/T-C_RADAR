console.clear();
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const findTermsLink = require('./src/controllers/linkController.js');
const formLink = require('./src/views/formLink.js');



const expressApp = express();
dotenv.config();
const PORT = process.env.PORT

expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.get('/', (req, res) => {
    res.send(formLink);
})

expressApp.post('/findtermslink', async (req, res) => {
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




expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));