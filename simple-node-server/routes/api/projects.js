const express = require('express');
const Project = require('../../models/project');

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.send(project);
  } catch (e) {
    res.status(404);
    res.send({ error: "Project doesn't exist!" });
  }
});

// Post project
router.post('/', async (req, res) => {
  try {
    const project = new Project({
      name: req.body.name,
      username: req.body.username,
      image: req.body.image,
      category: req.body.category,
      description: req.body.description,
      dateCreated: new Date(),
    });
    // Make owner a contributor
    project.contributorList.push(req.body.username);
    await project.save();
    res.send(project);
  } catch (e) {
    res.send({ error: 'Failure when making POST to project' });
  }
});

// Add user to applicants
router.put('/', async (req, res) => {
  try {
    // Find project by id and push user to applicants array
    const project = await Project.findOneAndUpdate(
      { id: req.body.id },
      { $push: { applicantList: req.body.username } }
    );
    res.send(project);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
