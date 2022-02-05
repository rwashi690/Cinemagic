const sequelize = require('../config/connection');
const { User, Movie } = require('../models');

const movieData = require('./moviesData.json');
const userData =require('./userData.json');

const seedDB = async() =>{
  await sequelize.sync({force:true});
  const users = await User.build(userData, {
    individualHooks: true,
    returning: true,
  });
  for (let mv of movieData){
    await Movie.create({
      ...mv,
      username: users.username });
  }
};

seedDB();