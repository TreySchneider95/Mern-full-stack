const express = require("express")
require('dotenv').config()
const connectDb = require("./config/db")

connectDb()
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(port, ()=> console.log(`server running on port ${port}`))