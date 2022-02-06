const router = require('express').Router();
const { UserTag, Movie } = require('../models');

// get all Movie belong to User logged in
// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const userTags = await UserTag.findAll({
//       where: {
//         user_id: req.params.id,
//       }
//     });

//     if(!userTags) {
//       res.status(200).json({ message: 'You have not added any movies to your collection!'});
//       return;
//     }

//     const userMovies = await Movie.findAll({
//       where: {
//         id: userTags,
//       }
//     });

//     res.status(200).json(userMovies);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const userTags = await UserTag.findAll({
//       where: {
//         user_id: req.params.id,
//       }
//     });

//     const userMovies = await UserTag.findAll({
//       include: [
//         {
//           model: Movie,
//           required: true,
//         },
//         {
//           model: UserTag,
//           required: true,
//           include: {
//             model: User,
//             required: true,
//             where: {
//               id: userTags.map(movie => movie.user_id),
//             },
//           },
//         },
//       ],
//     });

//     res.status(200).json(userMovies);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:id', withAuth, async (req, res) => {
  try {
    const userTags = await UserTag.findAll({
      where: {
        user_id: req.params.id,
      }
    });

    if(!userTags) {
      res.status(200).json({ message: 'You have not added any movies to your collection!'});
      return;
    }

    const userMovies = userTags.map(userTags => userTags.movie_id);

    res.status(200).json(userMovies);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;