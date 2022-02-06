// import express
const router = require('express').Router();

// import models from models folder
const { User, UserTag, Movie } = require('../models');

// import login authentication
const withAuth = require('../utils/authenication');



module.exports = router;