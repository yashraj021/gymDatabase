const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('gym-cuvyb');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('gym');

client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
    db.collection('gymData').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() =>
    db.collection('gymData').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});
