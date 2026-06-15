const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Do not exit the process here so the server can start for debugging.
    // Application code should handle lack of DB connection on a per-route basis.
  }
};

module.exports = connectDB;