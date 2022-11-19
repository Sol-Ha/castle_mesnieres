const Moderator = require ('../models/moderatorModel')
const mongoose = require('mongoose')
// login
const loginModerator= async (req, res) => {
  res.json ({message: "Utilisateur connecté"})
}

// get all moderators
const getModerators = async (req, res) => {
  const moderators = await Moderator.find({}).sort({createdAt: -1})

  res.status(200).json(moderators)
}

// get a single moderator
const getModerator = async (req, res) => {
  
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({err: "Aucun modérateur trouvé"})
  }

  const moderator = await Moderator.findById(id)
  if (!moderator) {
    return res.status(404).json({err: "Aucun modérateur trouvé"})
  }

  res.status(200).json(moderator)
}


// create a new moderator
const createModerator = async (req, res) => {
  const { moderator_firstName, moderator_lastName, moderator_persona, moderator_email, moderator_password, moderator_birthday, moderator_endContract } = req.body

  let emptyFields = []

  if (!moderator_firstName) {
    emptyFields.push("moderator_firstName")
  }
  if (!moderator_lastName) {
    emptyFields.push("moderator_firstName")
  }
  if (!moderator_persona) {
    emptyFields.push("moderator_persona")
  }
  if (!moderator_email) {
    emptyFields.push("moderator_email")
  }
  if (!moderator_password) {
    emptyFields.push("moderator_password")
  }
  if (!moderator_birthday) {
    emptyFields.push("moderator_birthday")
  }
  if (!moderator_endContract) {
    emptyFields.push("moderator_endContract")
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ err: "Veuillez remplir tout les champs", emptyFields })
  }

  try {
    const moderator = await Moderator.create({ moderator_firstName, moderator_lastName, moderator_persona, moderator_email, moderator_password, moderator_birthday, moderator_endContract })
    res.status(200).json(moderator)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

// delete a moderator
const deleteModerator = async (req, res) => {
 
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: "Ce modérateur est inconnu"})
  }

  const moderator = await Moderator.findOneAndDelete({_id: id})
  if(!moderator) {
    return res.status(400).json({err: "Ce modérateur est inconnu"})
  }

  res.status(200).json(moderator)
}

// update a moderator
const updateModerator = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({err: "Ce modérateur est inconnu"})
  }

  const moderator = await Moderator.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  if (!moderator) {
    return res.status(400).json({err: "Ce modérateur est inconnu"})
  }

  res.status(200).json(moderator)
}


module.exports = {
  getModerators,
  getModerator,
  createModerator,
  deleteModerator,
  updateModerator,
  loginModerator
}