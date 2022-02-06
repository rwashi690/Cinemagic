// remove movie from collection
const removeMovieHandler = async (event) => {
  event.preventDefault();

  console.log('i love quan');
};

// add event listener to activate
document
  .querySelector('.removeMovie-button')
  .addEventListener('click', removeMovieHandler);