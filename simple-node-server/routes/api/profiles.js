const express = require('express');
const Profile = require('../../models/profile');

const router = express.Router();

// Check for valid email, check for valid github
function checkEmail(email) {
  const re = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  return re.test(email) || email === ' ';
}

function checkGithub(github) {
  const re =
    /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
  return re.test(github) || github === ' ';
}

function checkImgurURI(profileImage) {
  const re =
    /(?:https?:\/\/)?(?:i\.)?imgur\.com\/(?:gallery\/)?(.+(?=[sbtmlh]\..{3,4})|.+(?=\..{3,4})|.+?(?:(?=\s)|$))/;
  return re.test(profileImage) || profileImage === ' ';
}

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
    if (!checkEmail(req.body.email)) {
      res.send({ error: 'Invalid Email Address' });
      return;
    }
    if (!checkGithub(req.body.github)) {
      res.send({ error: 'Invalid Github Link' });
      return;
    }
    if (!checkImgurURI(req.body.profileImage)) {
      res.send({ error: 'Invalid Imgur link' });
      return;
    }
    await Profile.findOneAndUpdate({ username: req.body.username }, profile);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
