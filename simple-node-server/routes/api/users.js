const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const config = require('../../config/dev');
const Profile = require('../../models/profile');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get user by ID
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.send(user);
  } catch (e) {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

// Post user
router.post('/', async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      developer: req.body.developer,
      investor: req.body.investor,
    });
    const profile = new Profile({
      username: req.body.username,
      displayName: req.body.username,
      profileImage: ' ',
      description: ' ',
      github: ' ',
      email: ' ',
      status: 'Public',
    });
    const userExist = await User.find({ username: req.body.username });
    if (userExist.length > 0) {
      res.send({ error: 'Username exists' });
      return;
    }
    await user.save();
    await profile.save();
    res.send(user);
  } catch (e) {
    res.send({ error: e });
  }
});

// Update user
router.put('/', async (req, res) => {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      developer: req.body.developer,
      investor: req.body.investor,
    };
    await User.findOneAndUpdate({ username: req.body.username }, user);
  } catch (e) {
    res.send({ error: e });
  }
});

// Login: generate JWT token, return to user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.send({ error: 'User not found' });
  }
  if (password === user.password) {
    const token = jwt.sign({ username, password }, config.secrets.jwt, {
      expiresIn: '7d',
    });

    if (res.status(201)) {
      return res.send({ status: 'ok', data: token });
    }
    return res.send({ error: 'error' });
  }
  return res.send({ status: 'error', error: 'Incorrect Password' });
});

// Delete user
router.delete('/:username', async (req, res) => {
  // Check if token exists
  if (req.body.token.length > 0) {
    try {
      // remove 'token=' from token string
      const stringToken = req.body.token.replace('token=', '');
      // Verify token is valid
      const user = jwt.verify(stringToken, config.secrets.jwt);
      const { username } = user.username;
      // Verify if user from token still exists
      User.findOne({ username }).catch(() => {
        res.send({ status: 'error', error: 'token is not valid' });
      });
      // Check if token user is same as requested user
      if (user.username === req.params.username) {
        await User.deleteOne({ username: req.params.username });
        await Profile.deleteOne({ username: req.params.username });
        res.send({ status: 'ok' });
      } else {
        res.send({ error: 'Access not permitted' });
      }
    } catch (e) {
      res.send({ error: e });
    }
  } else {
    res.send({ error: 'Error: token does not exist' });
  }
});

router.post('/userDetails', async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, config.secrets.jwt);
    const { username } = user.username;
    User.findOne({ username })
      .then((data) => {
        res.send({ status: 'ok', data });
      })
      .catch((e) => {
        res.send({ status: 'error', data: e });
      });
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
