// Define the structure we wish to see in database
// mongoose define that structure 
// it needs to be imported to the controller
const mongoose = require('mongoose')

// passing an object with properties
// unique to avoid another doublon to be registered if currently in db
const Schema = mongoose.Schema

const moderatorSchema = new Schema({
    moderator_firstName: {
        type: String,
        required: true,
    },
    moderator_lastName: {
        type: String,
        required: true,
    },
    moderator_persona: {
        type: String,
        required: true,
        unique: true,
    },
    moderator_email: {
        type: String,
        required: true,
        unique: true,
    },
    moderator_password: {
        type: String,
        required: true,
    },
    moderator_birthday: {
        type: Date,
        required: true,
    },
    moderator_endContract: {
        type: Date,
        required: true,
    }
}, { timestamps: true })

// exporting through module and calling it a chosen name for the collection
module.exports = mongoose.model('moderator', moderatorSchema)