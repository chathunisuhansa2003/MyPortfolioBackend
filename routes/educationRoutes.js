const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

router.get("/", async (req, res) => {
  try {
    const educations = await Education.find().sort({ _id: -1 });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { institution, degree, field, start, end } = req.body;

    const educationData = {
      institute: institution || req.body.institute || "",
      degree: degree || "",
      year: [start, end].filter(Boolean).join(" - "),
      description: field || req.body.description || "",
    };

    const education = new Education(educationData);
    const savedEducation = await education.save();

    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
