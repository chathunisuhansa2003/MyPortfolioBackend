const Project = require("../models/Project");


// ======================================
// GET ALL PROJECTS
// ======================================

const getProjects = async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ======================================
// GET SINGLE PROJECT
// ======================================

const getProjectById = async (req, res) => {

  try {

    const project = await Project.findById(req.params.id);

    if (!project) {

      return res.status(404).json({
        message: "Project not found",
      });

    }

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ======================================
// CREATE PROJECT
// ======================================

const createProject = async (req, res) => {

  try {

    const project = new Project(req.body);

    const savedProject = await project.save();

    res.status(201).json(savedProject);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ======================================
// UPDATE PROJECT
// ======================================

const updateProject = async (req, res) => {

  try {

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProject) {

      return res.status(404).json({
        message: "Project not found",
      });

    }

    res.json(updatedProject);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ======================================
// DELETE PROJECT
// ======================================

const deleteProject = async (req, res) => {

  try {

    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {

      return res.status(404).json({
        message: "Project not found",
      });

    }

    res.json({
      message: "Project deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};



// EXPORT ALL FUNCTIONS

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};