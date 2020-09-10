const mongoClient = require("mongodb").MongoClient
let mongo
const getMongo = async () => {
    if(!mongo || !mongo.isConnected)
     mongo = mongoClient.connect("mongodb://localhost")
    return mongo
}
const db = async () => {
    const mongo = await getMongo()
    return mongo.db("myblog")
}
module.exports = db;