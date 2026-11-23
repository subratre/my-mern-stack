import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the api world" })
})

app.get("/users", (req, res) => {
    res.json({ users: [{ name: "subrat", age: 24 }, {name: "santosh", age:63},{ name: "soumya", age: 36 }, { name: "santosh", age: 23 }, { name: "manas", age: 52 }, { name: "pratap", age: 31 }] })
})

export default app