
const express=require("express");
const router=express.Router();
const Cab=require("../models/cab");


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
