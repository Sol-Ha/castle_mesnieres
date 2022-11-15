// Define the structure we wish to see in database
// mongoose define that structure 
// it needs to be imported to the controller
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// passing an object with properties
// unique to avoid another doublon to be registered if currently in db
const userSchema = new Schema({

    user_firstName: {
        type: String,
        required: true,
    },
    user_lastName: {
        type: String,
        required: true,
    }
    ,
    user_userName: {
        type: String,
        required: true,
        unique: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_birthday: {
        type: Date,
        required: true,
    },
    user_answer: {
        type: String,
    },
    user_question: {
        type: String,
        required: true,
    },
    user_endContract: {
        type: Date,
        required: true,
    },
    isSuperadmin: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true })

// exporting through module and calling it a chosen name for the collection
module.exports = mongoose.model("User", userSchema)