const router = require('express').Router();
const { Movie }= require('../../models');
const reqAuth = require('../../utils/authentication');

router.post('/', reqAuth, async (request, response) => {
  try {
    const newMovie = await Movie.create({
      ...request.body,
      username: request.session.username,
    });

    response.status(200).json(newMovie);
  } catch (err) {
    response.status(400).json(err);
  }
});

module.exports = router;