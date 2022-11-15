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
  const { user_firstName, user_lastName, user_persona, user_email, user_password, user_birthday, user_endContract } = req.body

  let emptyFields = []

  if (!user_firstName) {
    emptyFields.push('title')
  }
  if (!user_lastName) {
    emptyFields.push('load')
  }
  if (!user_persona) {
    emptyFields.push('reps')
  }
  if (!user_email) {
    emptyFields.push('reps')
  }
  if (!user_password) {
    emptyFields.push('reps')
  }
  if (!user_birthday) {
    emptyFields.push('reps')
  }
  if (!user_endContract) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Veuillez remplir tout les champs', emptyFields })
  }

  try {
    const moderator = await Moderator.create({ user_firstName, user_lastName, user_persona, user_email, user_password, user_birthday, user_endContract })
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

module.exports = {
  getModerators,
  getModerator,
  createModerator,
  deleteModerator,
  updateModerator
}