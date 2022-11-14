import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    user_firstname: {
        type: String,
        required: true,
    },
    user_lastname: {
        type: String,
        required: true,
    },
    user_username: {
        type: String,
        required: true,
        unique: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_birthday: {
        type: Date,
        required: true,
    },
    user_answer: {
        type: String,
        required: true,
    },
    user_question: {
        type: String,
        required: true,
    },
    user_endcontract: {
        type: Date,
        required: true,
    },
    isSuperadmin: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true },
);

export default mongoose.model("Admin", AdminSchema);