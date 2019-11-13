
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://boi:c0dezindabad@cluster0-nssjy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    // const collection = client.db("test").collection("devices");
    console.log("connected", client);
    // perform actions on the collection object
    client.close();
});
