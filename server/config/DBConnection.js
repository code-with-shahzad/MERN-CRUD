require("dotenv").config();
const mongoose = require("mongoose");

async function dbConnection() {
  await mongoose.connect(process.env.DB_URL);
}

module.exports = dbConnection;