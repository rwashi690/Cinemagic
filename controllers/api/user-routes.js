// import express
const router = require('express').Router();
// import User model from models folder
const { User } = require('../../models');

// create new User
router.post('/', async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

