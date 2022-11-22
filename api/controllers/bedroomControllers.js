const Bedroom = require("../models/bedroomModel");
const mongoose = require("mongoose");


//
// get all bedrooms
const getBedrooms = async (req, res) => {
  // finding all so empty and you create by descending order so newest one at the top
  const bedrooms = await Bedroom.find({}).sort({ createAt: -1 });
  res.status(200).json(bedrooms);
};


//
// create bedroom
const createBedroom = async (req, res) => {
  // making a body for our collection
  const { bedroom_title, bedroom_image, bedroom_content, bedroom_priceHighseason, bedroom_priceLowSeason } = req.body;
  try {
    // storing it through await
    const bedroom = await Bedroom.create({ bedroom_title, bedroom_image, bedroom_content, bedroom_priceHighseason, bedroom_priceLowSeason });
    // if ok
    res.status(200).json(bedroom);
  } catch (error) {
    // if not send back an answer with the error message property
    res.status(400).json({ error: error.message });
  }
  // res.json({message: "Post a new bedroom!"})
};


// update bedroom
const updateBedroom = async (req, res) => {
  // finding all so empty and you create by descending order so newest one at the top
  const { id } = req.params;
  // if it's not a mongoose valid ID method
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Aucune chambre trouvée" });
  }
  // find the document and delete if the id is equal to the id I'm passing
  const bedroom = await Bedroom.findByIdAndUpdate(
    { _id: id },
    // we request a body that we spread through the property of the object
    { ...req.body }
  );

  // if can't find it answer with
  if (!bedroom) {
    return res.status(404).json({ error: "Aucune chambre trouvée" });
  }
// status update
  res.status(200).json(bedroom);
};

module.exports = {
  getBedrooms,
  createBedroom,
  updateBedroom
};
