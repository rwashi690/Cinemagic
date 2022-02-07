// add movies to collection of user (create new Movie; UserTag created automatically)
const addMovieHandler = async (event) => {
    event.preventDefault();

    const newMovie = document.querySelector('#movie-id').value.trim();
    if (newMovie) {
        const response = await fetch('/' + , {
            method: 'POST',
            body: ,
          });
    }
};

// event listener for add movie
document.querySelector('.addMovie-button').addEventListener('click', addMovieHandler);