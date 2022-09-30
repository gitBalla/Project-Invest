const express = require('express');
const User = require('../../models/user');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

// Post user
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    developer: req.body.developer,
    investor: req.body.investor,
  });
  try {
    const userExist = await User.find({ username: req.body.username });
    if (userExist.length > 0) {
      res.send({ error: 'User exists' });
      return;
    }
    await user.save();
    res.send(user);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
