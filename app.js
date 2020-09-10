const express = require("express");
const userRouter = require("./controller/user")
const db = require("./mongo")
const User = require("./model/user")
const port = 8080;
const host = "localhost";
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(async (req, res, next) => {
    User.db = await db();
    next()
})

app.use("/users", userRouter);


app.listen(port, host);


