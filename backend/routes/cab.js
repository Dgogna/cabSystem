
const express=require("express");
const router=express.Router();
const Cab=require("../models/cab");

router.get("/available",async(req,res)=>{
    try {
        const cabs=await Cab.find({});
        // for (var i=0;i<cabs.length;i++) {
        //     console.log(cabs[i]);
        //     if(cabs[i].bookings.length >0){
        //         var last= cabs[i].bookings.length -1;
        //         const anyTime = cabs[i].bookings[last].getTime();
        //         const currentTime = new Date().getTime();
        //         if(anyTime >= currentTime){
        //             delete cabs[i];
        //         }
        //     }
        //  }
        return res.json(cabs);

    } catch (error) {
        return res.json(error);
    }
})

router.post("/create",async (req,res)=>{
    try {
        const {name,charge} = req.body;
        // console.log("creating an new cab");
        const cab=await Cab.create({
            name:name,
            charge:charge
        })
        // console.log(cab);
        return res.json(cab);

    } catch (error) {
        return res.json(error);
    }
});

router.post("/update_price/:id",async (req,res)=>{
    // res.send("here we are updating the car price");
    // return ;
    try {
        const {name,charge} = req.body;
        const prev = await Cab.findOne({_id:req.params.id});
        // console.log(prev);

        prev.name=name;
        prev.charge=charge;
        await prev.save();
  
        return res.json(prev);

    } catch (error) {
        return res.json(error);
    }
});

module.exports=router;
