const mongoose = require("mongoose")
const db = process.env.URI

const connectDb = async ()=>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db)
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
    console.log("Connected to DB")
}

module.exports = connectDb