console.clear();
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const formExpressAppRouter = require('./routes/home/formLink.routes.js');
const downloadTermsPdfRouter = require('./routes/downloadPdfTermsRouter/downloadTermsPdf.routes.js');
const findTermsLinkRouter= require('./routes/findLinkViewRouter/findTermslink.routes.js')




const expressApp = express();
dotenv.config();
const PORT = process.env.PORT
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use('/', formExpressAppRouter)
expressApp.use('/findtermslink', findTermsLinkRouter);
expressApp.use('/downloadpdf', downloadTermsPdfRouter);




expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));