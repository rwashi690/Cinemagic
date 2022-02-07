// // remove movie from collection
// const removeMovieHandler = async (event, movieID, userID) => {
//   event.preventDefault();
//   // make variable that holds the movie id of the movie that is being deleted by the click of a button
//   const doomedId = movieID;
//   //send that id through a fetch delete request
//   const response = await fetch('/user/' + userID, {
//     method: 'DELETE',
//     body: doomedId,
//   });

// const res = require('express/lib/response');
// const { get } = require('express/lib/response');

//   if (response.ok) {
//     document.location.replace('/user/' + userID);
//   } else {
//     alert('Failed to remove Movie');
//   }
// };

// // add event listener to activate
// document
//   .querySelector('.removeMovie-button')
//   .addEventListener('click', removeMovieHandler(movieID, userID));

// display all movies belong to user on page load
const loadAllMoviesHandler = async (event) => {
  event.preventDefault();

  const userID = req.sessions.userId;

  if (userID) {
    const response = await fetch('/user/' + userID, {
      method: 'GET',
      body: userID,
    });

    if (response.ok) {
      document.location.replace('/user/' + userID);
    } else {
      res.status(500).json({ message: 'Oops, something went wrong.' });
    }
  }
};

// remove movie from collection
const removeMovieHandler = async (event) => {
  event.preventDefault();
  // make variable that holds the movie id of the movie that is being deleted by the click of a button
  const doomedId = document.querySelector('#movie-id').value.trim();
  // make variable that holds the user id of the user who wants to delete the movie
  const userID = req.sessions.userId;
  //send that id through a fetch delete request
  if (doomedId && userID) {
    const response = await fetch('/user/' + userID, {
      method: 'DELETE',
      body: doomedId,
    });

    if (response.ok) {
      document.location.replace('/user/' + userID);
    } else {
      alert('Failed to remove Movie');
    }
  }
};

// add event listeners to activate
document
  .querySelector('.removeMovie-button')
  .addEventListener('submit', removeMovieHandler);

document.addEventListener('load', loadAllMoviesHandler);