// import express
const router = require('express').Router();

// import models from models folder
const { UserTag, Movie } = require('../models');

// import login authentication
const withAuth = require('../utils/authentication');

// make new UserTag (aka designate new Movie to existing User)
router.post('/', withAuth, async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    const newUserTag = await UserTag.create({ movie_id: newMovie.id, user_id: req.session.userId });

    res.status(200).json(newUserTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;