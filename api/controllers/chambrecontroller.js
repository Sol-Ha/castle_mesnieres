import Chambre from "../models/Chambre.js";
import { createError } from "../utils/error.js";

//CREATE
export const createChambre = async (req, res, next) => {
    const newChambre = new Chambre(req.body)

    try {
        const savedChambre = await newChambre.save()
        res.status(200).json(savedChambre)
    } catch (err) {
        next(err);
    }
}

//UPDATE
export const updateChambre = async (req, res, next) => {
    try {
        const updatedChambre = await Chambre.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedChambre)
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteChambre = async (req, res, next) => {
    try {
        await Chambre.findByIdAndDelete(req.params.id)
        res.status(200).json("La chambre a été supprimée.")
    } catch (err) {
        next(err);
    }
}