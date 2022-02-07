const searchRoutes = require('../../controllers/search-routes');

const newMovieHandler = async (event) => {
 event.preventDefault();

const movieSearch = document.querySelector('#movie-search').value.trim();

if (movie-search) {
const response=  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&&query=${movieSearch}&page=1`).then()

}
}
document
  .querySelector('.new-movie-form')
  .addEventListener('click', newMovieHandler);