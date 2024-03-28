const mongoose = require("mongoose");

const main = async () => {
  console.log("main")
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "Note 12 Pro 5G",
    brand: "Mi",
    price: 21999,
    category: "Smartphone",
    parentCompany: "Xiaomi",
  });

  let result = await data.save();
  console.log(result);
};

main()
