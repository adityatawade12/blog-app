var express= require("express");
var app=express();
var router = require("./routes/routes")
var bodyParser=require("body-parser")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.set("view engine","ejs")


app.use(router)




app.listen(process.env.PORT||3000,process.env.IP,()=>{
    console.log("Server is running"+process.env.IP)
})