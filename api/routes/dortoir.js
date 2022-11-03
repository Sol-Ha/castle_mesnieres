import express from "express"
import { createDortoir, deleteDortoir, updateDortoir } from "../controllers/dortoircontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createDortoir)

//UPDATE
router.put("/:id", verifyAdmin, updateDortoir)

//DELETE
router.delete("/:id", verifyAdmin, deleteDortoir)

export default router