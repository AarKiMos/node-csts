const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbClient = new MongoClient(url);

async function dbConnect(database, collection) {
  let result = await dbClient.connect();
  let db = result.db(database);
  return db.collection(collection);
}

module.exports = dbConnect