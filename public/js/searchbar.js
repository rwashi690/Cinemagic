movieResults =document.getElementById('display-MovieResult');
movieReleaseEl = document.getElementById('release_date');
movieDescriptionEl = document.getElementById('description');
movieTitleEl = document.getElementById('title');
moviePosterEl=document.getElementById('poster');
streamingServicesEl=document.getElementById('streaming_services');
const apikey = config.API_KEY;


// second api call to return providers
function getMovieProviders(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apikey}`, {
    "method": "GET"
  }
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log(data)
      const { id, results} = data;
      let providers = results.US.flatrate;
      console.log(providers);
      for (let i=0; i<providers.length;i++){
        console.log(providers[i]);
        console.log(providers[i].logo_path);
        var img = new Image(100,100);
        img.src = `https://image.tmdb.org/t/p/original/${providers[i].logo_path}`;
        var src = document.getElementById("streaming_services");
        src.appendChild(img);
      }
    })
    .catch(err => {
      console.error(err);
    });
}


// api call to return data
function getMovieTitle(movieSearched){
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${movieSearched}&page=1`, {
    "method": "GET"
  }
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log(data);
      const { page, results, total_pages, total_results } = data;
      console.log(results[0]);
      let movieTitle =results[0].title;
      let movieDescription =results[0].overview;
      let movieRelease =results[0].release_date;
      let movie_id =results[0].id;
      let moviePoster=results[0].poster_path;
      getMovieProviders(movie_id);
      movieTitleEl.textContent=movieTitle;
      movieReleaseEl.textContent=movieRelease;
      movieDescriptionEl.textContent=movieDescription;
      moviePosterEl.setAttribute("src", `https://image.tmdb.org/t/p/w500${moviePoster}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// function to clean data to be useable
// function cleanDataFunction (rawData) {
//   console.log(rawData);
// }

// send data to api when query is typed and button is pressed
// const searchBarFunctionHandler = async (event) => {
//   event.preventDefault();

//   const searchBar = document.querySelector('#movie-name').value.trim();

//   // check for null value and cancel if null; otherwise send api call
//   if (searchBar) {
//     // api call to return data and movie id, which is then run to get providers and also turned those into booleans
//     const rawData = search(searchBar);
//     // run function to clean data to return the result of the api call as a json that can be read for Movie model
//     const cleanData = cleanDataFunction(rawData);
//     //send the movie's cleaned data to be turned into a Movie
//     const response = await fetch('/search', {
//       method: 'POST',
//       body: cleanData,
//     });
//     if(response.ok) {
//       document.location.replace('/search');
//     } else {
//       res.status(500).json({ message: 'Oops, something went wrong.' });
//     }
//   }
// };

// actual event listener
submitButton = document.getElementById('submit-button');
searchInput = document.getElementById('movie-name');

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  let movie = searchInput.value;
  getMovieTitle(movie);
  // let rawData =
  // console.log(rawData);
});