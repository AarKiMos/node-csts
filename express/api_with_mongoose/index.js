const express = require("express");
require("./config");

const Product = require("./products");

const app = express();

app.use(express.json());

app.post("/product", async (req, resp) => {
  // console.log(req.body)

  let product = new Product(req.body);
  let result = await product.save();

  resp.send(result);
});

app.get("/product", async (req, resp) => {
  let result = await Product.find();

  resp.send(result);
});

app.delete("/product/:_id", async (req, resp) => {
  let result = await Product.deleteOne(req.params);
  console.log(result);
  resp.send(result);
});

app.put("/product/:_id", async (req, resp) => {
  let product = await Product.updateOne(req.params, {
    $set: req.body,
  });

  resp.send(product);
});

app.get("/product/search/:key", async (req, resp) => {
  let products = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(products);
});

app.listen(5400);
