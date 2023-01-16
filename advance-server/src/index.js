/* SERVER / INDEX */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./Database.js";
import { appRoutes } from "./Routes.js"

const app = express();

/* Middleware */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

/* images from public folder */
app.use(express.static('public'));
app.use('/src', express.static('public'))
app.use('/images', express.static('images'));


dotenv.config();
const port = process.env.PORT || 8081;
const mongoUri = process.env.MONGO_URI;
mongoose.set("strictQuery", false);

/* Database */
connect()

/* App Routes */
appRoutes(app)


mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    app.listen(port, () => console.log(`✅ Server listening on port:${port}.`))
  )
  .catch((error) => {
    console.log("❌ Server NOT listening:", error);
  });

