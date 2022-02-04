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

// login user
router.post('/login', async (req, res) => {
  try {
    const loginUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if(!loginUser) {
      res.status(400).json({ message: 'Username or password is incorrect. Please try again.'});
      return;
    }

    const pwValidation = await loginUser.checkPassword(req.body.password);

    if(!pwValidation) {
      res.status(400).json({ message: 'Username or password is incorrect. Please try again.'});
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: loginUser, message: 'You are logged in.'});
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;