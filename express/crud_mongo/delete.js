const dbConnect = require("../mongodb");

const insert = async () => {
  const db = await dbConnect("e-comm", "products");
  // console.log(db);
  const result = await db.deleteMany(
    { brand: "Mi", price: 29000 }
  );

  if (result.acknowledged) {
    console.log("data deleted");
  }
};

insert();
