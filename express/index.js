const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log("data sent by client:", req.query.name)
  resp.send(`Hello ${req.query.name}, this is home page.`);
});

app.get("/about", (req, resp) => {
  resp.send("Hello, this is about page.");
});

app.get("/help", (req, resp) => {
  resp.send("Hello, this is help page.");
});

app.listen(5400);
