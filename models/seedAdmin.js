import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

await mongoose.connect("mongodb://localhost:27017/portfolio");

const hashedPassword = await bcrypt.hash("admin123", 10);

await Admin.create({
  email: "admin@gmail.com",
  password: hashedPassword,
});

console.log("Admin created");
process.exit();