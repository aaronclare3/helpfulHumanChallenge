require("dotenv").config();

const colorsData = require("./colorsData");
const connectDB = require("./config/db");
const Color = require("./models/color");

connectDB();

const importData = async () => {
  try {
    await Color.deleteMany({});

    await Color.insertMany(colorsData);

    console.log("DATA IMPORT SUCCESS");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
