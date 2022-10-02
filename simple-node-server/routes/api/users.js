const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const config = require('../../config/dev');

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
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      developer: req.body.developer,
      investor: req.body.investor,
    });
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

// router.post('/userDetails', async (req, res) => {
//   const { token } = req.body;
//   try {
//     const user = jwt.verify(token, config.secrets.jwt);
//     const { username } = user.username;
//     User.findOne({ username })
//       .then((data) => {
//         res.send({ status: 'ok', data });
//       })
//       .catch((e) => {
//         res.send({ status: 'error', data: e });
//       });
//   } catch (e) {
//     res.send({ error: e });
//   }
// });

module.exports = router;