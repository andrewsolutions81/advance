import mongoose from "mongoose";

function connect() {
  const mongoDb = process.env.MONGO_URI;
  mongoose.connect(mongoDb);

  mongoose.connection.once("open", () => {
    console.log("✅ Connected to mongo data base.");
  });

  mongoose.connection.on("error", (err) => {
    console.log("❌ No connection to database:", err);
  });

  return mongoose.connection;
}

export { connect }
