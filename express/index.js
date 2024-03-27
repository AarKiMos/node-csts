const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath))

// app.get("", (req, resp) => {
//   resp.send(`<h1>Hello ${req.query.name}, this is home page.</h1>`);
// });

// app.get("/about", (req, resp) => {
//   resp.send("Hello, this is about page.");
// });

// app.get("/help", (req, resp) => {
//   resp.send("Hello, this is help page.");
// });

// app.get("/json-obj", (req, resp) => {
//   resp.send({
//     name: "Aachman",
//     email: "aachman@example.com",
//   });
// });

// app.get("/json-array", (req, resp) => {
//   resp.send([
//     {
//       name: "Aachman",
//       email: "aachman@example.com",
//     },
//     {
//       name: "Aloha",
//       email: "aloha@example.com",
//     },
//   ]);
// });

app.listen(5400);
