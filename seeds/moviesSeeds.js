const {Movie} = require('../models');

const movieData = [
  {
    api_id:568124,
    title:'Encanto',
    releaseDate:'2021-11-24',
    tagline:'The tale of an extraordinary family, the Madrigals',
    avgRating:10,
    adult:false,
    netflix_avail:false,
    apv_avail:false,
    disneyp_avail:true,
    funimation_avail:false,
    hulu_avail:false,
    hbomax_avail:false,
    peacock_avail:false,
    crunchyroll_avail:false,
    paramountp_avail:false,
    appletvp_avail:true
  }
];

const seedMovie = () => Movie.build(movieData);
module.exports = seedMovie;


