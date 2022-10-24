import express from "express"
import { createArticlepresse, deleteArticlepresse, updateArticlepresse } from "../controllers/articlepressecontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createArticlepresse)

//UPDATE
router.put("/:id", verifyAdmin, updateArticlepresse)

//DELETE
router.delete("/:id", verifyAdmin, deleteArticlepresse)

export default router