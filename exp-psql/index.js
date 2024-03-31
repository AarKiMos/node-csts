const express = require("express");
const pool = require("./psql");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  // resp.send("Hello");

  pool.query("SELECT * FROM USERS", (err, result) => {
    if (err) throw err;
    else {
      resp.status(200).json(result.rows);
    }
  });
});

app.post("/", (req, resp) => {
  const body = req.body;

  pool.query(
    "INSERT INTO users (name, password, user_type) VALUES ($1, $2, $3)",
    [body.name, body.pass, body.type],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500);
      } else {
        resp.status(201).send("OK");
        console.log(result);
      }
    }
  );
});

app.listen(5400);
