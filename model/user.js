const ObjectID = require("mongodb").ObjectID
let _db
class User {

    static get db() { return _db; }
    static set db(value) { _db = value; }

    static async getCollection() {
      return User.db.collection("users")
    }
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }

    static async create(name, email) {
        const user = new User(name, email);
        const collection = await this.getCollection()
        await collection.insertOne(user);
    }

    static async find(id) {
        const collection = await this.getCollection()
        const user = await collection.findOne({  _id: ObjectID(id) });
        console.log(user);
        return user
    }

    static async findAll() {
        const collection = await this.getCollection()
        const users = await collection.find().toArray();
        return users
    }
}

module.exports = User;