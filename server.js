const express = require("express");
const app = express();

const DOWNLOAD_URL =
  "https://github.com/zamareli7/pos-prodigy-updates/releases/latest/download/ProdigyPOS-Setup-latest.exe";

app.get("/", (req, res) => {
  res.redirect(302, DOWNLOAD_URL);
});

app.get("/download", (req, res) => {
  res.redirect(302, DOWNLOAD_URL);
});

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`POS Prodigy download redirect running on port ${port}`);
});
