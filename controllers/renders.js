const renderHome=(req,res,next)=>{
    res.render("index")
}

const renderBlogs=(req,res,next)=>{
    console.log(req.blogList)
    res.render("blogs",{blogs:req.blogList})
}

const renderAddBlog=(req,res,next)=>{
    res.render("newBlog")
}

const renderBlogPost=(req,res,next)=>{
    res.render("blogPost",{blog:req.blogData})
}

const renderBlogPostEdit=(req,res,next)=>{
    res.render("blogPostEdit",{blog:req.blogData})
}

const renderNonePage=(req,res,next)=>{
    res.render("none")
}

module.exports={
    renderHome,
    renderBlogs,
    renderBlogPost,
    renderAddBlog,
    renderBlogPostEdit,
    renderNonePage
}