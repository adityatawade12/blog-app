const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
var ObjectID = require('mongodb').ObjectID;   
const express = require("express")


const postNewBlog=(req,res,next)=>{
    
    
    mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
      if (err) {
        console.error(err)
        return
      }

      const db = client.db('blogs')
      const collection = db.collection('blogData')
      collection.insertOne({author: req.sanitize(req.body.author),title:req.sanitize(req.body.title),img:req.sanitize(req.body.img),blog:req.sanitize(req.body.blog),date:new Date()}, (err, result) => {
          console.log(err)
        console.log(result)
        client.close()
    })
    
    })
    res.redirect("/blogs")
}

const getAllBlogs=(req,res,next)=>{
    mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
      if (err) {
        console.error(err)
        return
      }

      const db = client.db('blogs')
      const collection = db.collection('blogData')
      collection.find().toArray((err, items) => {
        // console.log(items)
        client.close()
        req.blogList=items
        next()
      })
    
    })

}


const getOneBlog=(req,res,next)=>{
    mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
      if (err) {
        console.error(err)
        return
      }

      const db = client.db('blogs')
      const collection = db.collection('blogData')
      console.log(typeof(req.params.blogId))
      try {
        collection.findOne({"_id": new ObjectID(req.params.blogId)}, (err, item) => {
            console.log(item)
            client.close()
            item.date=new Date(item.date)
            req.blogData=item
            next()
          })
      } catch (error) {
          console.log(error)
      }
     
    
    })

}

const updateBlog=(req,res,next)=>{
    
    
  mongo.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, client) => {
    if (err) {
      console.error(err)
      return
    }

    const db = client.db('blogs')
    const collection = db.collection('blogData')
    try {
      collection.updateOne({"_id": new ObjectID(req.params.blogId)}, {'$set': {author: req.sanitize(req.body.author),title:req.sanitize(req.body.title),img:req.sanitize(req.body.img),blog:req.sanitize(req.body.blog),lastUpdated:new Date()}}, (err, item) => {
        console.log(item)
        console.log("heyyaa")
        client.close()
      })
    } catch (error) {
      console.log(error)
    }
    
 
  
  })
  res.redirect("/blogs/"+req.params.blogId)
}


const deleteBlog=(req,res,next)=>{
    
    
  mongo.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, client) => {
    if (err) {
      console.error(err)
      return
    }

    const db = client.db('blogs')
    const collection = db.collection('blogData')
    try {
      collection.deleteOne({"_id": new ObjectID(req.params.blogId)}, (err, item) => {
        console.log(item)
        console.log("dELETING BLOG")
        client.close()
      })
      
    } catch (error) {
      console.log(error)
    }
    
 
  
  })
  res.redirect("/blogs")
}


module.exports={
    postNewBlog,
    getAllBlogs,
    getOneBlog,
    updateBlog,
    deleteBlog
}