// import express
const router = require('express').Router();

// import models from models folder
const { UserTag, Movie } = require('../models');

// import login authentication
const withAuth = require('../utils/authentication');

// import the api key
const apikey = config.API_KEY;

// make new Movie model to display from the api call data
router.post('/', withAuth, async (req, res) => {
  try {
    const searchResult = await Movie.create(req.body);
    // serialize data to fit template
    const results = searchResult.map((movie) => movie.get({ plain: true }));
    // pass serialized data into template
    res.render('searchResults', {
      results,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json({ message: 'Oops, something went wrong.' });
  }
});

// make new UserTag (aka designate new Movie to existing User)
router.post('/:id', withAuth, async (req, res) => {
  try {
    // const newMovie = await Movie.create(req.body);
    const newUserTag = await UserTag.create({ movie_id: newMovie.id, user_id: req.session.userId });

    res.status(200).json(newUserTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;