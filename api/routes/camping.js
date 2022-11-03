import express from "express"
import { createCamping, deleteCamping, updateCamping } from "../controllers/campingcontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createCamping)

//UPDATE
router.put("/:id", verifyAdmin, updateCamping)

//DELETE
router.delete("/:id", verifyAdmin, deleteCamping)

export default router