const express = require('express');
const projects = require('../../data/projects.json');

const router = express.Router();

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get project by ID
router.get('/:id', (req, res) => {
  const found = projects.some(
    (project) => project.id === parseInt(req.params.id, 10)
  );

  if (found) {
    res.json(
      projects.filter((project) => project.id === parseInt(req.params.id, 10))
    );
  } else {
    res.status(400);
    res.json({ msg: `Project with id ${req.params.id} not found` });
  }
});

module.exports = router;
