const express = require("express");
const path = require("path");

const cors = require("cors");

const dotenv = require("dotenv");
const dns = require("dns");

const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const educationRoutes = require("./routes/educationRoutes");

const userRoutes = require("./routes/userRoutes");

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const secretRoute = require("./routes/secretRoute");
dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);
connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/projects", projectRoutes);
app.use("/api/education", educationRoutes);

app.use("/api/users", userRoutes);

app.get("/download-cv", (req, res) => {
  const cvPath = path.join(__dirname, "uploads", "Chathuni SuhansaCV.pdf");
  res.download(cvPath, "Chathuni-Suhansa-CV.pdf");
});

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", secretRoute);
app.get("/", (req, res) => {
  res.send("API Running");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});