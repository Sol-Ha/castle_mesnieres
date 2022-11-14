import express from "express"
import { deleteAdmin, updateAdmin } from "../controllers/admincontroller.js"
import { verifyAdmin, verifySuperadmin } from "../utils/verifyToken.js"

const {
    createAdmin,
    getAdmins,
    getAdmin,
    deleteAdmin,
    updateAdmin
  } = require('../controllers/workoutController')
const router = express.Router()

router.get('/', getAdmin)

//GET a single workout
router.get('/:id', getAdmin)

// POST a new workout
router.post('/', createAdmin)

// DELETE a workout
router.delete('/:id', deleteAdmin)

// UPDATE a workout
router.patch('/:id', updateAdmin)

// router.get("/checkauthentification", verifyToken, (req, res, next) => {
//     res.send("Vous êtes authentifié.")
// })

// router.get("/checkadmin/:id", verifyAdmin,(req, res, next) => {
//     res.send("Vous êtes authentifié en tant qu'admin.")
// })

// router.get("/checksuperadmin/:id", verifySuperadmin,(req, res, next) => {
//     res.send("Vous êtes authentifié en tant que super admin.")
// })

//UPDATE
// router.put("/:id", verifyAdmin, updateAdmin)

//DELETE
// router.delete("/:id", verifySuperadmin, deleteAdmin)

module.exports = router
// export default router