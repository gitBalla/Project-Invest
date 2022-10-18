const express = require('express');
const Profile = require('../../models/profile');

const router = express.Router();

// Check for valid email, check for valid github

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

// Update profile
router.put('/', async (req, res) => {
  try {
    const profile = {
      username: req.body.username,
      displayName: req.body.displayName,
      profileImage: req.body.profileImage,
      description: req.body.description,
      github: req.body.github,
      email: req.body.email,
      status: req.body.status,
    };
    await Profile.findOneAndUpdate({ username: req.body.username }, profile);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
