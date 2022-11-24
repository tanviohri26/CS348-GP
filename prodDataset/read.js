const { MongoClient } = require("mongodb");
const fs = require('fs')
const accountID = [];
function myFunction(item) {
let itemID = item._id + '';
accountID.push(itemID);
}
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://anoushka:anoushka@cluster0.5k05tai.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("prod");
    const coll = db.collection("accounts");

    // find code goes here
    const cursor = coll.find();

    // iterate code goes here
    await cursor.forEach(myFunction);
  } finally {

    const data = JSON.stringify(accountID)
    fs.writeFile('file.json', data,  err=> { 
      if(err) { 
      throw err; 
      } 
      });
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

