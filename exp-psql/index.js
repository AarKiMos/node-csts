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

app.listen(5400);
