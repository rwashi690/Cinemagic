const {User} = require('../models');

const userData =[
  {
    username:'rosie_the_doggie',
    email:'rosieisadog@dog.com',
    password:'RosieLoves'
  }
];

const seedUsers = () => User.build(userData);
module.exports = seedUsers;