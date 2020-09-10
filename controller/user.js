const userRouter = require("express").Router()
const User = require("../model/user")

userRouter.post("/", (req, res) => {
    const { name, email } = req.body;
    res.send(User.create(name, email))
})

userRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    res.send(await User.find(id))
})

userRouter.get("/", async (req, res) => {
    res.json(await User.findAll())
})
module.exports = userRouter;