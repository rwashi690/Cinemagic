// import models
const User = require('./User');
const Movie = require('./Movie');
const UserTag = require('./UserTag');

// User has many Movie through UserTag
User.hasMany(Movie, {
    through: UserTag,
})