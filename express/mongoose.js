const { MongoTopologyClosedError } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
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

// saveInDB()

const updateInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.updateOne(
    { name: "A 40" },
    {
      $set: {
        price: 27000,
      },
    }
  );

  console.log(data);
};

// updateInDB();

const deleteInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.deleteOne({ name: "Note 12 Pro 5G" });
  console.log(data);
};

// deleteInDB()

const findInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.find({ brand: "Mi" });
  console.log(data);
};

findInDB()
