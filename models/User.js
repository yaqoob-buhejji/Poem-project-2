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

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is required" ],
        unique: [true, "username already taken please pick another username"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    poems: [poemSchema],

})

const User = mongoose.model("User",userSchema)

module.exports = User