const express = require("express");
const dbConnect = require("./mongodb");

const app = express();
app.use(express.json())

app.get("/", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = await conn.find().toArray();
  console.log(data);

  resp.send({ name: "Aachman", data });
});

app.post("/add", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = req.body;
  console.log(data);

  let result = await conn.insertOne(data);
  resp.send(result);
});

app.listen(5400);
