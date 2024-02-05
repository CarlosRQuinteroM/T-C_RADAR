console.clear();
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const formExpressAppRouter = require('./src/routes/home/formLinkRouter.js');
const findTermsLinkRouter = require('./src/routes/findLinkView/findTermslink.js');



const expressApp = express();
dotenv.config();
const PORT = process.env.PORT
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use('/', formExpressAppRouter)
expressApp.use('/findtermslink', findTermsLinkRouter);




expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));