const mongoose = require("mongoose")

const poemSchema = new mongoose.Schema({

    authorname: {
        type:String,
        required:[true,"Write the author name"],
    },
    text:{
        type:String,
        required:[true,"Write the poem "],

    },
    reference: {
       type: String,
    }
}) 

const Poem = mongoose.model("Poem", poemSchema)
module.exports = Poem



/* 
1. create a router.get() that renders new-poem.ejs
2. create new-poem.ejs and inside the ejs add a form with the same information as the model
3. submit the form as a method=post and as a action = /peom/new
*/