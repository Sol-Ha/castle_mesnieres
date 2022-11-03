import mongoose from "mongoose";

const DortoirSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    check: {
        type: String,
        required: true,
    },
    priceLowSeason: {
        type: Number,
        required: true,
    },
    priceHighSeason: {
        type: Number,
        required: true,
    },
    photo: {
        type: [String],
    }
});

export default mongoose.model("Dortoir", DortoirSchema);