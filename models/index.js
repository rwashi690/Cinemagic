// import models
const User = require('./User');
const Movie = require('./Movie');
const UserTag = require('./UserTag');

// User has many Movie through UserTag
User.hasMany(Movie, {
  through: UserTag,
});

// Movie belongs to many User through UserTag
Movie.belongsToMany(User, {
  through: UserTag,
});

// export models together
module.exports = { User, Movie, UserTag };