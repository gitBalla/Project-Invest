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
    firstName: req.body.name,
    lastName: req.body.image,
    username: req.body.category,
    password: req.body.description,
    developer: req.body.developer,
    investor: req.body.investor,
  });
  try {
    const tempUser = User.findOne({ username: req.body.username });
    if (tempUser) {
      res.send({ error: 'User exists' });
    }
    await user.save();
    res.send(user);
  } catch (e) {
    res.send({ error: e });
  }
});

module.exports = router;
