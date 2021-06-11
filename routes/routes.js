var express=require("express");

const router=express.Router();

router.get("/hello",(req,res,next)=>{
    // res.send("Next Page")
    res.render("index.html")
})

router.get("/",(req,res,next)=>{
   
    res.render("index")
})

module.exports=router;