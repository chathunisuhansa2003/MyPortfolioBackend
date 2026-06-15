const express = require("express");

const router = express.Router();

const Project = require("../models/Project");

/* CREATE PROJECT */
router.post("/", async (req, res) => {

  try {

    const newProject = new Project(req.body);

    const savedProject = await newProject.save();

    res.status(201).json(savedProject);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

/* GET PROJECTS */
router.get("/", async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;