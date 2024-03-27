const express = require("express");
const app = express();


// -------------------------------------------------------------Render EJS

// app.set("view engine", "ejs");

// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "Aachman Mittal",
//     email: "aachman@example.com",
//     city: "Delhi",
//     skills: [
//       "html",
//       "css",
//       "js",
//       "python",
//       "elixir",
//       "node",
//       "django",
//       "tailwindCSS",
//     ],
//   };
//   resp.render("profile", { user });
// });

// app.get("/login", (_, resp) => {
//   resp.render("login");
// });

// -------------------------------------------------------------Send Files

// const path = require("path");
// const publicPath = path.join(__dirname, "public");

// app.get("", (_, resp) => {
//   resp.sendFile(path.join(publicPath, "index.html"));
// });

// app.get("/about", (_, resp) => {
//   resp.sendFile(path.join(publicPath, "about.html"));
// });

// app.get("/help", (_, resp) => {
//   resp.sendFile(path.join(publicPath, "help.html"));
// });

// app.get("*", (_, resp) => {
//   resp.sendFile(path.join(publicPath, "404.html"));
// });

// --------------------------------------------------------Simple Response

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

// -----------------------------------------------------------Static Files

// app.use(express.static(publicPath))

// -----------------------------------------------------------------------

app.listen(5400);
