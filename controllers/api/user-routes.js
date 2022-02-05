const router = require('express').Router();
const { User } = require('../../models');


//Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //Setting up sessions with a variable of logged_in set to `true`
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.username =userData.username;
      res.status(200).json(userData);
    });
  } catch (err) {
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
      res.status(400).json({message: 'Incorrect password, please try again'});
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.username =userData.username;
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