const express = require("express")
require('dotenv').config()
const connectDb = require("./config/db")
const books = require("./routes/api/books")
const booksRouter = require("./routes/api/books")

connectDb()
const app = express()
const port = process.env.PORT || 8000

app.use(cors({ origin: true, credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', booksRouter)

app.listen(port, ()=> console.log(`server running on port ${port}`))