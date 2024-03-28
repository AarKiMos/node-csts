const dbConnect = require("../mongodb");

const insert = async () => {
  const db = await dbConnect("e-comm", "products");
  // console.log(db);
  const result = await db.updateMany(
    { brand: "Oppo" },
    {
      $set: {
        brand: "Mi",
      },
    }
  );

  if (result.acknowledged) {
    console.log("data updated");
  }
};

insert();
