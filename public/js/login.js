//Create javascript
const loginHandler = async (event) => {
  //const userID = request.sessions.userId;
  event.preventDefault();
  //Get values of name and email from HTML by targetting the ids
  const username = document.querySelector('#username_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();
  //Check to see if a username and password were entered
  if (username && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body:JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.ok) {
      document.location.replace('/user/profile' );
      //document.location.replace('/user/' + userID);
    } else {
      alert(response.statusText);
    }
  }
};

const signupHandler =async (event)=>{
  // const userID = request.sessions.userId;
  event.preventDefault();
  const username = document.querySelector('#username_signup').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password_signup').value.trim();
  console.log(username);
  if (username && email && password){
    const response = await fetch ('/', {
      method: 'POST',
      body: JSON. stringify({username, email, password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.ok) {
      document.location.replace('/user/profile');
      //document.location.replace('/user/' + userID);
    } else {
      alert((response.statusText));
    }
  }
};
console.log('Am I here!');
document.querySelector('.loginForm').addEventListener('submit', loginHandler);
document.querySelector('.signupForm').addEventListener('submit', signupHandler);
