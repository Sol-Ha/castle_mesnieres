// Define the structure we wish to see in database
// mongoose define that structure 
// it needs to be imported to the controller
const mongoose = require("mongoose")
// bcrypt hashes password in a secure way ( even if the DB is attacked the pw will stay protected)
const bcrypt = require ("bcrypt")


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

// FUNCTION static createModerator method function because we use this
// moderatorSchema.statics.create = async function(moderator_firstName, moderator_lastName, moderator_persona, moderator_email,moderator_password, moderator_birthday, moderator_endContract ) {

    // find one because unique ID
    // const mailExist = await this.findOne ({moderator_email})
    // const personaExist = await this.findOne ({moderator_persona})
    // if(mailExist){
    //     throw err ("Cet e-mail est déjà utilisé")
    // }
    // if(personaExist){
    //     throw err ("Ce pseudo existe déjà")
    // }
        // salt ( makes a string of caracters / it also prevent people with same pw to be hashed differently
        // it avoids hackers to do a pw matching if they manage to crack one (the longer the salt the harder it is to crack : 10 is the common) )
        // const salt = await bcrypt.genSalt(10)
        // method hash with password with salt
        // const hash = await bcrypt.hash(moderator_password, salt)

    //     const moderator = await this.create({moderator_firstName, moderator_lastName, moderator_persona, moderator_email, moderator_password, moderator_birthday, moderator_endContract})
        
    //     return moderator
    // }


// exporting through module and calling it a chosen name for the collection
module.exports = mongoose.model("Moderator", moderatorSchema)