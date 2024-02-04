console.clear();
import express from "express";
import dotenv from 'dotenv';

const expressApp = express();
dotenv.config();
const PORT = process.env.PORT

expressApp.get('/', (req, res) => {
    res.send(`
    <form = action="/findterms" method="post">
    <label for="url">Enter URL:</label>
    <input type="text" id="url" name="url" required/>
    <button type="submit"> Find Terms Link</button>
    </form>
    `);
})


expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));