
const mongoose=require("mongoose");

const cabSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    charge:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("cab",cabSchema);