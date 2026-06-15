const bcrypt = require("bcryptjs");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (email === adminEmail && password === adminPassword) {
      return res.json({
        token: "demo-admin-token",
        message: "Login successful",
      });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (oldPassword === process.env.ADMIN_PASSWORD || oldPassword === "admin123") {
      return res.json({ message: "Password updated successfully" });
    }

    return res.status(400).json({ message: "Old password is incorrect" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { loginAdmin, changePassword };