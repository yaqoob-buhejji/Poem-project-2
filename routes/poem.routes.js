const mongoose = require("mongoose")
const router = require("express").Router()
const Poem = require("../models/Poem")


// Renders the homepage
router.get("/", async(req,res)=>{
    res.render("poems/homepage.ejs")
})
router.get("/all", async(req,res)=>{
    const allPoems = await Poem.find()
    res.render("poems/poems.ejs", {allPoems:allPoems})
})


// Renders the new poem page 
router.get("/new", async(req,res)=>{
    res.render("poems/new-poem.ejs")
})

//1. Create a route for creating a poem
//2. Router will be router.post()
//3. The URL inside the router must match URL in the form
//4. Make sure the method is post in the form
//5. Use poem.create tp create the form using req.body
//6. res.redirect to your desired page


// Creates the poem
router.post("/new",async(req,res)=>{
    console.log(req.body)
    
    try{
    await Poem.create(req.body)
    res.render("poems/poems.ejs")

    }catch(error){
        console.log(error)
    }
})

// Task: Render the poem page
//1. Create the EJS page
//2. store the poems in a variable using Poem.find()
//3. Send the list of poems as an object to the EJS
//4. res.render() the EJS page from the correct folder

module.exports = router

