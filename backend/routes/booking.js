
const express=require("express");
const router=express.Router();

const Booking=require("../models/booking");


router.post("/create",async (req,res)=>{
    try {
        const {email,source,destination,cab_type,finishing_time} = req.body;
        // console.log("creating an new cab");
        const booking=await Booking.create({
            email:email,
            source:source,
            destination:destination,
            cab_type:cab_type,
            finishing_time:finishing_time
        })
        // console.log(cab);
        return res.json(booking);

    } catch (error) {
        return res.json(error);
    }
});



module.exports=router;
