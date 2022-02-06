const router = require('express').Router();

const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');
const searchRoutes = require('./search-routes');

router.use('/', loginRoutes);
router.use('/user', userRoutes);
router.use('/search', searchRoutes);

module.exports = router;