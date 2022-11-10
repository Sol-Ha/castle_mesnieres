import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newAdmin = new Admin({
            user_firstname: req.body.user_firstname,
            user_lastname: req.body.user_lastname,
            username: req.body.username,
            user_email: req.body.user_email,
            password: hash,
            user_question: req.body.user_question,
            user_answer: req.body.user_answer,
            user_birthday: req.body.user_birthday,
            user_endcontract: req.body.user_endcontract,
            // isSuperadmin: req.body.isSuperadmin
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