import express from "express"
import { createArticle, deleteArticle, updateArticle } from "../controllers/articlecontroller.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createArticle)

//UPDATE
router.put("/:id", verifyAdmin, updateArticle)

//DELETE
router.delete("/:id", verifyAdmin, deleteArticle)

export default router