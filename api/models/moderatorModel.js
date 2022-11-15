// Define the structure we wish to see in database
// mongoose define that structure 
// it needs to be imported to the controller
const mongoose = require('mongoose')

// passing an object with properties
// unique to avoid another doublon to be registered if currently in db
const Schema = mongoose.Schema

const moderatorSchema = new Schema({
    user_firstName: {
        type: String,
        required: true,
    },
    user_lastName: {
        type: String,
        required: true,
    },
    user_persona: {
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
    user_endContract: {
        type: Date,
        required: true,
    }
}, { timestamps: true })

// exporting through module and calling it a chosen name for the collection
module.exports = mongoose.model('moderator', moderatorSchema)