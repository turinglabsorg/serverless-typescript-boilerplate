const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');

// Init express server
const app = express();
app.use(cors());
app.use(express.json());

// Default response
app.get("/hello", async function (req, res) {
  res.send({ message: "API IS ONLINE", error: false })
})
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
