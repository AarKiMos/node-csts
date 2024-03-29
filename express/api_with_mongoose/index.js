const express = require("express");
require("./config");

const Product = require("./products");

const app = express();

app.use(express.json())

app.post("/product", async (req, resp) => {
  // console.log(req.body)

  let product = new Product(req.body)
  let result = await product.save()

  resp.send(result);
});

app.listen(5400)
