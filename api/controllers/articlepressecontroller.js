import Articlepresse from "../models/Articlepresse.js"
import { createError } from "../utils/error.js"

//CREATE
export const createArticlepresse = async (req, res, next) => {
    const newArticlepresse = new Articlepresse(req.body)

    try {
        const savedArticlepresse = await newArticlepresse.save()
        res.status(200).json(savedArticlepresse)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateArticlepresse = async (req, res, next) => {
    try {
        const updatedArticlepresse = await Articlepresse.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedArticlepresse)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteArticlepresse = async (req, res, next) => {
    try {
        await Articlepresse.findByIdAndDelete(req.params.id)
        res.status(200).json("L'article a été supprimé.")
    } catch (err) {
        next(err);
    }
}