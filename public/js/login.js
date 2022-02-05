const loginHandler = async (event) => {
  event.preventDefault();

  //Get values of name and email from HTML by targetting the ids
  const username = document.querySelector('#username_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();

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

//const signUpHandler =async (event)=>{
//  event.preventDefault();
//}