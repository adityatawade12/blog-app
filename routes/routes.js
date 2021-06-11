var express=require("express");
var dbs=require("../controllers/db")
const { renderHome,
    renderBlogs,
    renderBlogPost,
    renderAddBlog}=require("../controllers/renders")

const router=express.Router();

router.get("/",renderHome)


router.get("/blogs",dbs.getAllBlogs,renderBlogs)

router.get("/blogs/new",renderAddBlog)

router.get("/blogs/:blogId",dbs.getOneBlog,renderBlogPost)

router.post("/blogs/new",dbs.postNewBlog)


module.exports=router;