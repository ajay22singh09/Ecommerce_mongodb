const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName ="ecommerce";
async function main() { 
   client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("Collections");
      return 'done.';
}
main().then(console.log).catch(console.error).finally(() => client.close());
