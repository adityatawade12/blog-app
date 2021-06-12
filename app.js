var express= require("express");
var app=express();
var router = require("./routes/routes")
var methodOverride=require("method-override")
var favicon = require('serve-favicon')
const expressSanitizer = require('express-sanitizer');
var expressLogging = require('express-logging'),logger = require('logops');
 

app.use(expressLogging(logger));

app.use(favicon('./favicon.ico'))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use(expressSanitizer());
app.use(router)

app.set("view engine","ejs")







app.listen(process.env.PORT||3000,process.env.IP,()=>{
    console.log("Server is running"+process.env.IP)
})