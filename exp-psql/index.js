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

app.put("/:id", (req, resp) => {
  const body = req.body;

  pool.query(
    "UPDATE users SET name = $2, password = $3, user_type = $4 WHERE id = $1 RETURNING *",
    [req.params.id, body.name, body.pass, body.type],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500);
      } else if (!result.rowCount) {
        resp.status(404).send("User with id " + req.params.id + " not found.");
      } else {
        resp.status(200).send("OK");
        console.log(result);
      }
    }
  );
});

app.delete("/:id", (req, resp) => {
  pool.query(
    "DELETE FROM users WHERE id = $1",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500);
      } else if (!result.rowCount) {
        resp.status(404).send("User with id " + req.params.id + " not found.");
      } else {
        resp.status(200).send("OK");
        console.log(result);
      }
    }
  );
});

app.listen(5400);
