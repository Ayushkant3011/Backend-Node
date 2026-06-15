const { MongoClient } = require("mongodb");

const URI = 
    "mongodb+srv://ayushkant3011:omUvhWqZ9wiu0lJ5@cluster0.ks4sm.mongodb.net/";



const client = new MongoClient(URI);


const dbName = 'EdTechProject';

async function main(){
    await client.connect();

    console.log("Db is connected");

    const db = client.db(dbName);

    const collection = db.collection('User');

    



    return 'Done...!';
}



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());