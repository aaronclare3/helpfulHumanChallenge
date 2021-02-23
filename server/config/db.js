require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongoDB connection SUCCESS");
  } catch (error) {
    console.log("mongoDB connection FAILED", error);
    process.exit(1);
  }
};

module.exports = connectDB;
