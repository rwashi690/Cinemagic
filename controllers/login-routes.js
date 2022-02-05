// import express router
const router = require('express').Router();

// import User model data
const { User } = require('../models');

// create new User
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// log user in
router.post('/', async (req, res) => {
  try {
        
  } catch (err) {
    res.status(500).json(err);
  }
});