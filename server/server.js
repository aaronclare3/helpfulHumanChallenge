require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const colorsRoutes = require("./routes/colorsRoutes");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/colors", colorsRoutes);

app.listen(4000, () => console.log("server is up and running on port 4000!"));
