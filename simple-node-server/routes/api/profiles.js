const express = require('express');
const Profile = require('../../models/profile');

const router = express.Router();

// get all Profiles
router.get('/', async (req, res) => {
  const projects = await Profile.find();
  res.json(projects);
});

// Get user by ID
router.get('/:username', async (req, res) => {
  try {
    const profile = await Profile.findOne({ username: req.params.username });
    res.send(profile);
  } catch (e) {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
