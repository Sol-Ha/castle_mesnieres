import Camping from "../models/Camping.js";
import { createError } from "../utils/error.js";

//CREATE
export const createCamping = async (req, res, next) => {
    const newCamping = new Camping(req.body)

    try {
        const savedCamping = await newCamping.save()
        res.status(200).json(savedCamping)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateCamping = async (req, res, next) => {
    try {
        const updatedCamping = await Camping.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedCamping)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteCamping = async (req, res, next) => {
    try {
        await Camping.findByIdAndDelete(req.params.id)
        res.status(200).json("Le camping a été supprimé.")
    } catch (err) {
        next(err);
    }
}