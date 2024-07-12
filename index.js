const express = require("express"); //import express module
const app = express(); // create express application

const PORT = 4000;

app.get("/Home", (req, res) => {
  res.send("<h1>Hello Home!</h1>");
});

app.get("/About", (req, res) => {
  res.send("<h1>Hello,<b>H</b>!</h1>");
});
//response.send("<h1>Hello, <b>example</b>!</h1>")

app.get("/Contact", (req, res) => {
  res.send("Welcome to the Contact page!");
});

app.get("/Newsletter", (req, res) => {
  res.send("Check out our newsletter!");
});

//start the server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
