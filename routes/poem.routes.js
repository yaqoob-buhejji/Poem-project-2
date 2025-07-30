const mongoose = require("mongoose")
const router = require("express").Router()


router.get("/", async(req,res)=>{
    res.render("./poems/homepage.ejs")
})

module.exports = router