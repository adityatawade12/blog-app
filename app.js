var express= require("express");
var app=express();
var router = require("./routes/routes")
var methodOverride=require("method-override")
var favicon = require('serve-favicon')
const expressSanitizer = require('express-sanitizer');
var expressLogging = require('express-logging'),logger = require('logops');
require('dotenv').config()

app.use(expressLogging(logger));

app.use(favicon('./favicon.ico'))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use(expressSanitizer());
app.use(router)

app.set("view engine","ejs")







app.listen(process.env.PORT,()=>{
    console.log("Server is running on port"+process.env.PORT)
})