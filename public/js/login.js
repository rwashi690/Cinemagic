//
const loginHandler = async (event) => {
  event.preventDefault();
  //Get values of name and email from HTML by targetting the ids
  const username = document.querySelector('#username_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();
  //Check to see if a username and password were entered
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body:JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('.loginForm').addEventListener('submit', loginHandler);

const signupHandler =async (event)=>{
  event.preventDefault();
  const username = document.querySelector('#username_signup').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password_signup').value.trim();

  if (username && email && password){
    const response = await fetch ('/api/users/signup', {
      method: 'POST',
      body: JSON. stringify({username, email, password}),
      headers: {'Content-Type':'application/json'},
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert((response.statusText));
    }
  }
};

document.querySelector('.signupForm').addEventListener('submit', signupHandler);