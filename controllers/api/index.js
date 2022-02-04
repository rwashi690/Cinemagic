//index.js
const router = require('express').Router();

const userRoutes = require('./user-routes');
const searchRoutes = require('./search-routes');

router.use('/users', userRoutes);
router.use('/search', searchRoutes);

module.exports = router;