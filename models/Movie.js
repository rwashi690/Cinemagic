// import Model and DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');

// import database connection from config/connection.js
const sequelize = require('../config/connection');

// extend the Movie model by extending off of Sequelize's Model class
class Movie extends Model {}

// set up Movie table's columns
Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    api_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tagline: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avgRating: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
    },
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    netflix_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    apv_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    disneyp_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    funimation_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hulu_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hbomax_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    peacock_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    crunchyroll_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    paramountp_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    appletvp_avail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;