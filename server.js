require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on render)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/paint-r-us_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use("/api/mail/", require("./controllers/nodemailer"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
