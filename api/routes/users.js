const express = require ("express");
const router = express.Router()

// controller function ( can use import too)
// const {loginUser} = require("../controllers/userController")
router.get("/", (req, res) => {
    res.json({message:"Je récupére toutes les données!"})
})

router.get("/:id", (req, res) => {
    res.json({message:"Je récupére seulement CETTE donnée!"})
})

router.post("/", (req, res) => {
    res.json({message:"J'ai transmis la nouvelle donnée'!"})
})

router.patch("/:id", (req, res) => {
    res.json({message:"J'ai modifié cett donnée'!"})
})

router.delete("/:id", (req, res) => {
    res.json({message:"J'ai effacé cett donnée'!"})
})
// login route
// router.post("/login", () => {})
// router.post("/login", loginUser)

// this is in need to be registered in the index.js
module.exports = router
