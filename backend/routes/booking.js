
const express=require("express");
const router=express.Router();
const Cab=require("../models/cab");
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

        const prev = await Cab.findOne({name:cab_type});
        // console.log(prev);
        prev.bookings.push(finishing_time);
        prev.save();
        // console.log(cab);
        return res.json(booking);

    } catch (error) {
        return res.json(error);
    }
});

router.get("/all_bookings",async(req,res)=>{
    try {
        const bookings=await Booking.find({});
        return res.json(bookings);

    } catch (error) {
        return res.json(error);
    }
})



module.exports=router;
