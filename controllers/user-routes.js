// import express
const router = require('express').Router();
// import models
const { UserTag, Movie } = require('../models');
// import authentication
const withAuth = require('../utils/authentication.js');

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
        user_id: req.session.userId,
      }
    });

    if(!userTags) {
      res.status(200).json({ message: 'You have not added any movies to your collection!'});
      return;
    }

    const moviePromises = userTags.map(tag => {
      return Movie.findAll({
        where: {
          id: tag.movie_id,
        }
      });
    });

    const userMovies = await Promise.all(moviePromises);

    //    res.status(200).json(userMovies);
    //  } catch (err) {
    //    res.status(500).json(err);
    res.render('userProfile', {
      ...userMovies,
      logged_in: true
    });
  } catch (err){
    res.status(500).json(err);
  }
});

// delete a userTag
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const doomedData = await UserTag.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!doomedData) {
//       res.status(404).json({ message: 'No movie found with that id!' });
//       return;
//     }

//     res.status(200).json(doomedData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const findDoomedData = await Movie.findByPk(req.params.id);
    const doomedData = await UserTag.destroy({
      where: {
        movie_id: findDoomedData.id,
        user_id: req.sessions.userId,
      },
    });

    if (!doomedData) {
      res.status(404).json({ message: 'That movie is not in your collection!' });
      return;
    }

    res.status(200).json(doomedData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;