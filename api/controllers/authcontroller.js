import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newAdmin = new Admin({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newAdmin.save()
        res.status(200).send("L'administrateur a été créé avec succès")
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username })
        if (!admin) return next(createError(404, "L'admin n'a pas été trouvé"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, admin.password)
        if (!isPasswordCorrect) return next(createError(400, "Mot de passe ou nom d'utilisateur incorrect"))
        // Vérification si superadmin ou pas grâce à jsonwebtoken
        const token = jwt.sign({ id: admin._id, isSuperadmin: admin.isSuperadmin }, process.env.JWT)

        const { password, isSuperadmin, ...otherDetails } = admin._doc
        res.cookie("access_token", token, { httpOnly: true, }).status(200).json({ ...otherDetails });
    } catch (err) {
        next(err)
    }
}