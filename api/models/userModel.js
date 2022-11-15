// Define the structure we wish to see in database
// mongoose define that structure 
// it needs to be imported to the controller
import mongoose from "mongoose";

const Schema = mongoose.Schema

// passing an object with properties
// unique to avoid another doublon to be registered if currently in db
const userSchema = new Schema({

    user_nickName:{
        type: String,
        required: true,
        unique: true
    },
    user_password:{
        type: String,
        required: true,
    }
})

// exporting through module and calling it a chosen name with it's schema
module.exports = mongoose.model("User", userSchema)