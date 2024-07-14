const express = require("express"); // import express module
const app = express(); // create express application

const PORT = 4000;

// Set up the / route
app.get("/", (req, res) => {
  res.send("Hello, home!");
});

// Set up additional GET routes with HTML responses
app.get("/Home", (req, res) => {
  res.send("<h1>Hello Home!</h1>");
});

app.get("/About", (req, res) => {
  res.send("<h1>Welcome to About page!</h1>");
});

app.get("/Contact", (req, res) => {
  res.send("<h1>Welcome to the Contact page!</h1>");
});

app.get("/Newsletter", (req, res) => {
  res.send("<h1>Check out our newsletter!</h1>");
});

// Utilize request params
app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.send(`<h1>You are on the ${page} page!</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
