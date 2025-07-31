const mongoose = require("mongoose")
const router = require("express").Router()
const Poem = require("../models/Poem")

router.get("/", async(req,res)=>{
    res.render("poems/homepage.ejs")
})

router.get("/new", async(req,res)=>{
    res.render("poems/new-poem.ejs")
})

//1. Create a route for creating a poem
//2. Router will be router.post()
//3. The URL inside the router must match URL in the form
//4. Make sure the method is post in the form
//5. Use poem.create tp create the form using req.body
//6. res.redirect to your desired page

router.post("/new",async(req,res)=>{
    console.log(req.body)
    
    res.redirect("/poem")
})


module.exports = router