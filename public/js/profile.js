// remove movie from collection
const removeMovieHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/user/:id' , {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/user/:id');
  } else {
    alert('Failed to remove Movie');
  }
};

// add event listener to activate
document
  .querySelector('.removeMovie-button')
  .addEventListener('click', removeMovieHandler);


const router = require('express').Router();
const { User } = require('../models');