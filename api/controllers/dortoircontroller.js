import Dortoir from "../models/Dortoir.js";
import { createError } from "../utils/error.js";

//CREATE
export const createDortoir = async (req, res, next) => {
    const newDortoir = new Dortoir(req.body)

    try {
        const savedDortoir = await newDortoir.save()
        res.status(200).json(savedDortoir)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateDortoir = async (req, res, next) => {
    try {
        const updatedDortoir = await Dortoir.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedDortoir)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteDortoir = async (req, res, next) => {
    try {
        await Dortoir.findByIdAndDelete(req.params.id)
        res.status(200).json("Le dortoir a été supprimé.")
    } catch (err) {
        next(err);
    }
}