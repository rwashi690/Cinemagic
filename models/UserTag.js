// import Model and DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');

// import database connection from config/connection.js
const sequelize = require('../config/connection');

// extend the UserTag model by extending off of Sequelize's Model class
class UserTag extends Model {}

// set up UserTag table's columns
UserTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userTag',
  }
);

module.exports = UserTag;