const requireAuthentication = (request, response, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!request.session.logged_in) {
    response.redirect('/login');
  } else {
    next();
  }
};

module.exports = requireAuthentication;