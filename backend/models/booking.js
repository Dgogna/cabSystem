
const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    cab_type:{
        type:String,
        required:true
    },
    finishing_time:{
        type:Date,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("booking",bookingSchema);