const express = require('express')
const {
  getModerators,
  getModerator,
  createModerator,
  deleteModerator,
  updateModerator
} = require('../controllers/moderatorController')

const router = express.Router()

// GET all workouts
router.get('/', getModerators)

// GET a single workout
router.get('/:id', getModerator)

// POST a new workout
router.post('/', createModerator)

// DELETE a workout
router.delete('/:id', deleteModerator)

// UPDATE a workout
router.patch('/:id', updateModerator)

module.exports = router