const { MongoClient } = require("mongodb");

const URI = 
    "mongodb+srv://ayushkant3011:omUvhWqZ9wiu0lJ5@cluster0.ks4sm.mongodb.net/";



const client = new MongoClient(URI);


const dbName = 'EdTechProject';

async function main(){
    await client.connect();

    console.log("Db is connected");

    const db = client.db(dbName);

    const collection = db.collection('Users');


    const data = {
        firstName : "Kiara",
        lastName : "Advani",
        city : "Mumbai"
    }

    const insertRes = await collection.insertOne(data);

    console.log("Inserted Data", insertRes);


    const findRes = await collection.find({}).toArray();

    console.log("Found Docs => ", findRes);



    return 'Done...!';
}



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());