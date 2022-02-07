const searchRoutes = require('../../controllers/search-routes');
const apikey = config.API_KEY;
const movieSearch = document.querySelector('#movie-search').value.trim();

const newMovieHandler = async (event) => {
  event.preventDefault();
  if(movieSearch){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${movieSearched}&page=1`, {
      "method": "GET"
    }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        //const {page, results, total_pages, total_results}= data;
        //console.log(results)
      })
      .catch(err => {
        console.error(err);
      });
  }
};

document.querySelector('.new-movie-form').addEventListener('click', newMovieHandler);



// const newMovieHandler = async (event) => {
//     event.preventDefault();
//    const movieSearch = document.querySelector('#movie-search').value.trim();
//    if (movie-search) {
//    const response=  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&&query=${movieSearch}&page=1`).then()
//    }
//    }