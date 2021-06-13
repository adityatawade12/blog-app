var express=require("express");
var dbs=require("../controllers/db")
const { renderHome,
    renderBlogs,
    renderBlogPost,
    renderAddBlog,
renderBlogPostEdit,
renderNonePage
}=require("../controllers/renders")

const router=express.Router();

router.get("/",renderHome)


router.get("/blogs",dbs.getAllBlogs,renderBlogs)

router.get("/blogs/new",renderAddBlog)

router.get("/blogs/:blogId",dbs.getOneBlog,renderBlogPost)

router.post("/blogs/new",dbs.postNewBlog)
router.get("/blogs/:blogId/edit",dbs.getOneBlog,renderBlogPostEdit)
router.put("/blogs/:blogId/edit",dbs.updateBlog)
router.delete("/blogs/:blogId",dbs.deleteBlog)
router.get("*",renderNonePage)

module.exports=router;