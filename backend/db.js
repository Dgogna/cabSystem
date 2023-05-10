
const mongoose=require("mongoose");

const connectToMongo = ()=>{
    // mongoose.connect("mongodb://localhost:27017/cabSystemDB")
    mongoose.connect("mongodb+srv://admin-dhruv:Test123@cluster0.zmald.mongodb.net/cabSystemDB")
}

module.exports = connectToMongo;