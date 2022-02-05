const sequelize = require('../config/connection');
const seedMovie = require('./moviesSeeds');
const seedUsers =require('./userSeeds');


//const { User, Movie } = require('../models');
//const seedDB = async() =>{
//  await sequelize.sync({force:true});
//  const users = await User.build(userData, {
//    individualHooks: true,
//    returning: true,
//  });
//  for (let mv of movieData){
//    await Movie.create({
//      ...mv,
//      username: users.username });
//  }
//};

//seedDB();

const finishSeeds = async () => {
  await sequelize.sync({force:true});
  await seedMovie();
  await seedUsers();

  process.exit(0);
};

finishSeeds();