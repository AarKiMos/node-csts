const express = require("express");
const dbConnect = require("./mongodb");

const app = express();

app.get("/", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = await conn.find().toArray();
  console.log(data);

  resp.send({ name: "Aachman", data });
});

app.listen(5400);
