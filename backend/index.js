
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");

const port=5000;

const connectToMongo=require("./db");
connectToMongo();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("server is live");
    return ;
})

app.use("/cab",require("./routes/cab"));
app.use("/booking",require("./routes/booking"));

app.listen(port,()=>{
    console.log("backend is live o port 5000");
})

