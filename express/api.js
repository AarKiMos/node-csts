const express = require("express");
const dbConnect = require("./mongodb");
const mongo = require("mongodb");

const app = express();
app.use(express.json());

app.get("/products", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = await conn.find().toArray();
  console.log(data);

  resp.send({ name: "Aachman", data });
});

app.post("/products", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = req.body;
  console.log(data);

  let result = await conn.insertOne(data);
  resp.send(result);
});

app.put("/products/:_id", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");
  let data = req.body;
  console.log(data);

  const objId = new mongo.ObjectId(req.params._id);
  let result = await conn.updateOne({ _id: objId }, { $set: data });
  resp.send(result);
});

app.delete("/products/:_id", async (req, resp) => {
  let conn = await dbConnect("e-comm", "products");

  const objId = new mongo.ObjectId(req.params._id);
  let result = await conn.deleteOne({ _id: objId });
  resp.send(result);
});

app.listen(5400);
