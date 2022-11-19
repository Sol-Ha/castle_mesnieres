const express = require("express")

const {
  getModerators,
  getModerator,
  deleteModerator,
  updateModerator,
  createModerator,
  loginModerator
} = require("../controllers/moderatorController")

const router = express.Router()

// CreateModerator Route
router.post("/createModerator", createModerator)

// Login Route
router.post("/login", loginModerator)


// GET all moderators
router.get("/", getModerators)

// GET a single moderator
router.get("/:id", getModerator)

// DELETE a moderator
router.delete("/:id", deleteModerator)

// UPDATE a moderator
router.patch("/:id", updateModerator)

module.exports = router