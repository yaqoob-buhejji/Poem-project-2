const mongoose = require("mongoose")
const router = require("express").Router()
const User = require("../models/User")


// Renders the homepage
router.get("/", async(req,res)=>{
    res.render("poems/homepage.ejs")
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
    try{
    console.log(req.session.user)
    const currentUser = await User.findById(req.session.user._id)
    currentUser.poems.push(req.body)
    await currentUser.save();
    res.redirect('/poem/all')

    }catch(error){
        console.log(error)
    }
})

// Task: Render the poem page
//1. Create the EJS page
//2. store the poems in a variable using Poem.find()
//3. Send the list of poems as an object to the EJS
//4. res.render() the EJS page from the correct folder

router.get("/all", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id)
        res.render("poems/allpoems.ejs", {allPoems: currentUser.poems})
    } catch(error){
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id)
        const poems = currentUser.poems.id(req.params.id)
        res.render("poems/poems-details.ejs", {poems})
    } catch(error){
        console.log(error)
    }
})

router.delete("/:id", async (req,res)=>{
    console.log(req.params)
    try{
        const currentUser = await User.findById(req.session.user._id)
        currentUser.poems.id(req.params.id).deleteOne();
        await currentUser.save();
        res.redirect("/poem/all")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/:id/update", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id)
        const poems = currentUser.poems.id(req.params.id)
        res.render("poems/poem-edit.ejs", {poems})
    } catch(error){
        console.log(error)
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id)
        const poems = currentUser.poems.id(req.params.id)
        poems.set(req.body)
        await currentUser.save();
        res.redirect('/poem/all')
    } catch(error){
        console.log(error)
    }
})


module.exports = router