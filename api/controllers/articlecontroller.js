import Article from "../models/Article.js";
import { createError } from "../utils/error.js";

//CREATE
export const createArticle = async (req, res, next) => {
    const newArticle = new Article(req.body)

    try {
        const savedArticle = await newArticle.save()
        res.status(200).json(savedArticle)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateArticle = async (req, res, next) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedArticle)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteArticle = async (req, res, next) => {
    try {
        await Article.findByIdAndDelete(req.params.id)
        res.status(200).json("L'article a été supprimé.")
    } catch (err) {
        next(err);
    }
}