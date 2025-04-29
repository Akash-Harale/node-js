const mongoose = require("mongoose");

require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = {
  connectToDatabase,
};
