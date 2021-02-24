const express = require("express");
const router = express.Router();
const Color = require("../models/color");

// fetch all the colors
router.get("/", async (req, res) => {
  try {
    const allColors = await Color.find({});
    res.json(allColors);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching all colors" });
  }
});

// fetch 1 color
router.get("/:hex", async (req, res) => {
  try {
    const oneColor = await Color.find({ hex: req.params.hex });
    res.json(oneColor);
  } catch (error) {
    console.log(req.params);
    res.status(500).json({ message: "Server error fetching 1 color" });
  }
});

module.exports = router;
