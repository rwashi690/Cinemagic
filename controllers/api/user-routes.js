// import express
const router = require('express').Router();
// import User model from models folder
const { User} = require('../../models');

// create new User
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({

        });
        console.log('hewwo');
    } catch (err) {
        res.status(500).json(err);
    }
});