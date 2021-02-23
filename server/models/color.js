const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  colorCategory: { type: String, required: true },
  hex: { type: String, required: true },
});

const Color = new mongoose.model("color", colorSchema);
module.exports = Color;
