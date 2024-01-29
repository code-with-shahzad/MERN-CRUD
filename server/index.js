require("dotenv").config();
const express = require("express");
const dbConnection = require("./config/DBConnection");

const app = express();
dbConnection();

app.get("/", (req, res) => {
  return res.json({ hello: "word" });
});

app.listen(process.env.PORT);
