// function to turn watch providers list into booleans
function providerBoolean (providersList) {
  const providerIds = providersList.map(element => element.provider_id);
  console.log(providerIds);
  const booleans = providerIds.map(element => {
    switch (element) {
    case 8:
    case 175:
      return 1;
    case 119:
    case 9:
      return 2;
    case 390:
    case 337:
      return 3;
    case 269:
      return 4;
    case 15:
      return 5;
    case 384:
    case 616:
      return 6;
    case 386:
    case 387:
      return 7;
    case 283:
      return 8;
    case 531:
      return 9;
    case 642:
    case 350:
      return 10;
    default:
      console.log('No streaming services carry this movie');
    }
  });
  console.log(booleans);
  return JSON.stringify(booleans);
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
      console.log(providers);
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

// function to clean data to be useable
function cleanDataFunction (rawData) {
  console.log(rawData);
}

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
  let rawData = searchFunction(movie);
  console.log(rawData);
});

// document
//   .querySelector('.new-movie-form')
//   .addEventListener('submit', searchBarFunctionHandler);