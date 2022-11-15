// login user

// schema 
const User = require("../models/userModel")

// async function is used to communicate with DB
// if we send a requesst to the route /login and it's a post request
// it will find this function
const loginUser = async (req, res) => {
    res.json({message : "Utilisateur connecté"})
}

// exporting that function
module.exports ={loginUser}