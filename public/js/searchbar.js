// function to turn watch providers list into booleans
function providerBoolean (providers) {
  const providerIds = providers.map(element => element.provider_id);
  const booleans = providerIds.map(element => {
    switch (element) {
    case 8:
    case 175:
      netflix_avail = true;
      break;
    case 119:
    case 9:
      apv_avail = true;
      break;
    case 390:
    case 337:
      disneyp_avail = true;
      break;
    case 269:
      funimation_avail = true;
      break;
    case 15:
      hulu_avail = true;
      break;
    case 384:
    case 616:
      hbomax_avail = true;
      break;
    case 386:
    case 387:
      peacock_avail = true;
      break;
    case 283:
      crunchyroll_avail = true;
      break;
    case 531:
      paramountp_avail = true;
      break;
    case 642:
    case 350:
      appletvp_avail = true;
      break;
    default:
      console.log('No streaming services carry this movie');
    }
  });
  return booleans;
}

// second api call to return providers
function getMovieProviders(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=de9c1cbc12726b5dfbdf93e65610b6dc`, {
    "method": "GET"
  }
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const { id, results } = data;
      console.log(results.US.flatrate);
      let providers = results.US.flatrate;
      const test2 = providerBoolean(providers);
      console.log(test2);
    })
    .catch(err => {
      console.error(err);
    });
}

// api call to return data
function searchFunction(query) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=de9c1cbc12726b5dfbdf93e65610b6dc&language=en-US&query=${query}&page=1`, {
    "method": "GET"
  }
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const { page, results, total_pages, total_results } = data;
      console.log(page);
      console.log(results);
      console.log(total_pages);
      console.log(total_results);
      console.log(results[0]);
      console.log(results[0].id);
      // const {page, results, total_pages, total_results}= data;
      //console.log(results)
      let movie_id =results[0].id;
      const test = getMovieProviders(movie_id);
      console.log(test);
    })
    .catch(err => {
      console.error(err);
    });
}

//creating a function to execute search
function search(movieInput) {
  searchFunction(movieInput);
}

// function to clean data to be useable
function cleanDataFunction (rawData) {
  console.log(rawData);
  return rawData;
}

// send data to api when query is typed and button is pressed
const searchBarFunctionHandler = async (event) => {
  event.preventDefault();

  const searchBar = document.querySelector('#movie-name').value.trim();

  // check for null value and cancel if null; otherwise send api call
  if (searchBar) {
    // api call to return data and movie id, which is then run to get providers and also turned those into booleans
    const rawData = search(searchBar);
    // run function to clean data to return the result of the api call as a json that can be read for Movie model
    const cleanData = cleanDataFunction(rawData);
    //send the movie's cleaned data to be turned into a Movie
    const response = await fetch('/search', {
      method: 'POST',
      body: cleanData,
    });
    if(response.ok) {
      document.location.replace('/search');
    } else {
      res.status(500).json({ message: 'Oops, something went wrong.' });
    }
  }
};

// actual event listener
submitButton = document.getElementById('submit-button');
searchInput = document.getElementById('movie-name');

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  let movie = searchInput.value;
  search(movie);
});

// document
//   .querySelector('.new-movie-form')
//   .addEventListener('submit', searchBarFunctionHandler);