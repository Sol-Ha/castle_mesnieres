const express = require("express");
const { getBedrooms, createBedroom, updateBedroom } = require("../controllers/bedroomControllers")
const router = express.Router();

// get all
router.get("/", getBedrooms);

// post a new workout
router.post('/', createBedroom);

// update a new workout
router.patch("/:id", updateBedroom);

module.exports = router;
