const mongoose = require("mongoose");
// DB doesn't have a proper way to sort datas so we using mongoose to sort things up
const Schema = mongoose.Schema

const bedroomSchema = new Schema({
    bedroom_title: {
      type: String,
      required: true
    },
    bedroom_image: {
      type: String,
    },
    bedroom_content: {
      type: String,
      required: true
    },
    bedroom_priceHighseason:{
        type: Number,
        required: true
    },
    bedroom_priceLowSeason:{
        type: Number,
        required: true
    }
  }, { timestamps: true })

// name of my table / collection
module.exports = mongoose.model("Bedroom", bedroomSchema)