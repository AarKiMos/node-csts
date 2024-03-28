const express = require("express");
const app = express();

// ------------------------------------------------------------Insert Data


// ----------------------------------------------------------------MongoDB

// const dbConnect = require('./mongodb')

// // With Async-Await
// const main = async () => {
//   let conn = await dbConnect('e-comm', 'products');
//   let data = await conn.find().toArray();
//   console.log(data);
// };

// main();

// // With Promises
// dbConnect("e-comm", "products").then((conn) => {
//   conn
//     .find()
//     .toArray()
//     .then((data) => console.log(data));
// });

// -------------------------------------------------------------Middleware
// const routes = express.Router();
// const reqFilter = require("./middleware");

// // app.use(reqFilter); //Application level middleware

// app.get("", (req, resp) => {
//   resp.send("Welcome to Home Page.");
// });

// // Route level middleware
// app.get("/users", reqFilter, (req, resp) => {
//   resp.send("Welcome to Users Page.");
// });

// // Route group middleware
// routes.use(reqFilter);

// routes.get("/about", (req, resp) => {
//   resp.send("Welcome to About Page.");
// });

// routes.get("/contact", (req, resp) => {
//   resp.send("Welcome to Contact Page.");
// });

// app.use("/", routes);

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
