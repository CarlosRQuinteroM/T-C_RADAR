const express = require('express');
const formLink = require('../../views/formLink');


const formExpressAppRouter = express.Router();

formExpressAppRouter.get('/', (req, res) => {
    res.send(formLink);
})

module.exports = formExpressAppRouter;
