const mongoose = require("mongoose")
const {Schema} = mongoose


const userSchema = new Schema({
    // registration
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    }, 
    userType: {
        type:String,
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User;