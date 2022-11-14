const User = require('../models/Admin')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}
// import { createError } from "../utils/error.js";

//UPDATE
// export const updateAdmin = async (req, res, next) => {
//     try {
//         const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//         res.status(200).json(updatedAdmin)
//     } catch (err) {
//         next(err);
//     }
// }

//DELETE
// export const deleteAdmin = async (req, res, next) => {
//     try {
//         await Admin.findByIdAndDelete(req.params.id)
//         res.status(200).json("L'administrateur a été supprimé.")
//     } catch (err) {
//         next(err);
//     }
// }

// get all admins
// const getAdmins = async (req, res) => {
//     const admins = await Admin.find({}).sort({createdAt: -1})
  
//     res.status(200).json(admins)
//   }
  
//   // get a single admin
//   const getAdmin = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
  
//     const admin = await Admin.findById(id)
  
//     if (!admin) {
//       return res.status(404).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
    
//     res.status(200).json(admin)
//   }  

//   // create new admin
//   const createAdmin = async (req, res) => {
//     const {title, load, reps} = req.body
  
//     let emptyFields = []
  
//     if(!title) {
//       emptyFields.push('title')
//     }
//     if(!load) {
//       emptyFields.push('load')
//     }
//     if(!reps) {
//       emptyFields.push('reps')
//     }
//     if(emptyFields.length > 0) {
//       return res.status(400).json({ error: 'Veuillez remplir tout les champs...', emptyFields })
//     }
  
//     // add doc to db
//     try {
//       const admin = await Admin.create({title, load, reps})
//       res.status(200).json(admin)
//     } catch (error) {
//       res.status(400).json({error: error.message})
//     }
//   }
  
//   // delete admin
//   const deleteAdmin = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
  
//     const admin = await Admin.findOneAndDelete({_id: id})
  
//     if (!admin) {
//       return res.status(400).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
  
//     res.status(200).json(admin)
//   }
  
//   // update admin
//   const updateAdmin = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
  
//     const admin = await Admin.findOneAndUpdate({_id: id}, {
//       ...req.body
//     })
  
//     if (!admin) {
//       return res.status(400).json({error: "Nous n'avons pas trouvé cette administrateur"})
//     }
  
//     res.status(200).json(admin)
//   }
  
  
//   module.exports = {
//     getAdmins,
//     getAdmin,
//     createAdmin,
//     deleteAdmin,
//     updateAdmin
//   }

// login a user
const loginUser = async (req, res) => {
  const {user_username, user_password} = req.body

  try {
    const user = await User.login(user_username, user_password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({user_username, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
module.exports = { loginUser }