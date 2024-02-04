console.clear();
import express from "express";
import dotenv from 'dotenv';

const expressApp = express();
dotenv.config();
const PORT = process.env.PORT


expressApp.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));