console.clear();
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const formExpressAppRouter = require('./src/routes/home/formLinkRouter.js');
const downloadTermsPdfRouter = require('./src/routes/downloadPdfTermsRouter/downloadTermsPdfRouter.js');
const findTermsLinkRouter = require('./src/routes/findLinkViewRouter/findTermslinkRouter.js');




const expressApp = express();
dotenv.config();
const PORT = process.env.PORT
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use('/', formExpressAppRouter)
expressApp.use('/findtermslink', findTermsLinkRouter);
expressApp.use('/downloadpdf', downloadTermsPdfRouter);




expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));