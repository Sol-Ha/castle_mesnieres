const Moderator = require('../models/moderatorModel')
const mongoose = require('mongoose')

// get all moderators
const getModerators = async (req, res) => {
  const moderators = await Moderator.find({}).sort({createdAt: -1})

  res.status(200).json(moderators)
}

// get a single moderator
const getModerator = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Aucun modérateur trouvé'})
  }

  const moderator = await Moderator.findById(id)

  if (!moderator) {
    return res.status(404).json({error: 'Aucun modérateur trouvé'})
  }

  res.status(200).json(moderator)
}

// create a new moderator
const createModerator = async (req, res) => {
  const { moderator_firstName, moderator_lastName, moderator_persona, moderator_email, moderator_password, moderator_birthday, moderator_endContract } = req.body

  let emptyFields = []

  if (!moderator_firstName) {
    emptyFields.push('title')
  }
  if (!moderator_lastName) {
    emptyFields.push('load')
  }
  if (!moderator_persona) {
    emptyFields.push('reps')
  }
  if (!moderator_email) {
    emptyFields.push('reps')
  }
  if (!moderator_password) {
    emptyFields.push('reps')
  }
  if (!moderator_birthday) {
    emptyFields.push('reps')
  }
  if (!moderator_endContract) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Veuillez remplir tout les champs', emptyFields })
  }

  try {
    const moderator = await Moderator.create({ moderator_firstName, moderator_lastName, moderator_persona, moderator_email, moderator_password, moderator_birthday, moderator_endContract })
    res.status(200).json(moderator)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a moderator
const deleteModerator = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Ce modérateur est inconnu'})
  }

  const moderator = await Moderator.findOneAndDelete({_id: id})

  if(!moderator) {
    return res.status(400).json({error: 'Ce modérateur est inconnu'})
  }

  res.status(200).json(moderator)
}

// update a moderator
const updateModerator = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Ce modérateur est inconnu'})
  }

  const moderator = await Moderator.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!moderator) {
    return res.status(400).json({error: 'Ce modérateur est inconnu'})
  }

  res.status(200).json(moderator)
}

const loginModerator = async (req, res) => {
  res.json({mssg: 'login user'})
}

module.exports = {
  getModerators,
  getModerator,
  createModerator,
  deleteModerator,
  updateModerator,
  loginModerator
}