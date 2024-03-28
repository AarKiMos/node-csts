const dbConnect = require("../mongodb");

const insert = async () => {
  const db = await dbConnect("e-comm", "products");
  // console.log(db);
  const result = await db.insertMany([{
    name: "note 5",
    brand: "vivo",
    price: 29000,
    category: "smartphone",
  },
  {
    name: "note 6",
    brand: "vivo",
    price: 29000,
    category: "smartphone",
  },
  {
    name: "note 7",
    brand: "vivo",
    price: 29000,
    category: "smartphone",
  }]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
