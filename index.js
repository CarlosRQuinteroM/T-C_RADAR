console.clear();
import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import findTermsLink from "./src/controllers/linkController.js";


const expressApp = express();
dotenv.config();
const PORT = process.env.PORT

expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.get('/', (req, res) => {
    res.send(`
    <form action="/findtermslink" method="post">
    <label for="url">Enter URL:</label>
    <input type="text" id="url" name="url" required/>
    <button type="submit">Find Terms Link</button>
    </form>
    `);
})

expressApp.post('/findtermslink', async (req, res) => {
    if (!req.body || !req.body.url) {
        return res.status(400).send("Bad Request: ")
    }
    const { url } = req.body;
    try {
        const termsLink = await findTermsLink(url);
        res.send(termsLink ? `Link found: ${termsLink}` : "No Link found")
    } catch (error) {
        console(error)
        res.status(500).send("Server error")
    }

})




expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));