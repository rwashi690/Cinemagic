const router = require('express').Router();
const req = require('express/lib/request');
const { Movie, User } = require('../models');
const withAuth = require('../utils/authentication.js');

//Create a new user
router.post('/', async (req, res) => {
  try{
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //Setting up sessions with a variable of logged_in set to `true`
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.username = userData.username;
      req.session.userId = userData.id;
      res.status(200).json(userData);
    });
    res.render('userProfile', {
      ...userMovies,
      logged_in: true
    });
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res.status(400).json({message: 'Incorrect email or password, please try again'});
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({message: 'Incorrect email or password, please try again'});
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.username = userData.username;
      req.session.userId = userData.id;
      res.status(200).json({ user: userData, message: 'Logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

//generate the index.js and handlebars page by completing a get request
router.get('/', async (req, res) =>{
  if (req.session.logged_in){
    res.redirect('userProfile');
    return;
  }
  res.render('login');
});
