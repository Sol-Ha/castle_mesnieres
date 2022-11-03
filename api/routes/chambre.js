import express from "express"
import { createChambre, deleteChambre, updateChambre } from "../controllers/chambrecontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createChambre)

//UPDATE
router.put("/:id", verifyAdmin, updateChambre)

//DELETE
router.delete("/:id", verifyAdmin, deleteChambre)

export default router