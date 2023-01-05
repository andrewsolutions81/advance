/* SERVER / INDEX */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connect } from "./Database.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8081;
mongoose.set("strictQuery", false);

connect()

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    app.listen(port, () => console.log(`✅ Server listening on port:${port}.`))
  )
  .catch((error) => {
    console.log("❌ Server NOT listening:", error);
  });
