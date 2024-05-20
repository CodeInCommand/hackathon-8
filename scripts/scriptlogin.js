// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');
  
//     loginForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const username = document.getElementById('loginUsername').value;
//       const password = document.getElementById('loginPassword').value;
  

//       alert(`Login successful! Welcome, ${username}`);
//       this.reset(); 
//     });
  
//     signupForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const newUsername = document.getElementById('signupUsername').value;
//       const newPassword = document.getElementById('signupPassword').value;
  

//       alert(`Signup successful! New user: ${newUsername}`);
//       this.reset(); 
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const forgotPasswordLink = document.querySelector('.forgot-password a');
  const backToLoginLink = document.querySelector('.login-link a');

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    console.log('Username:', username);
    console.log('Password:', password);

    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      // alert('Invalid username or password');
      const {error} = await response.json();
      alert(error);
      return;
    }

    const data = await response.json();
    console.log(data);

localStorage.setItem('user', JSON.stringify(data.data));

/*
    const user = JSON.parse(localStorage.getItem('user'));
*/


    alert(`Login successful! Welcome, ${username}`);
    this.reset(); 
    window.location.href = '/pages/index.html';
  });



  // signupForm.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   const newUsername = document.getElementById('signupUsername').value;
  //   const newPassword = document.getElementById('signupPassword').value;

  //   console.log('New Username:', newUsername);
  //   console.log('New Password:', newPassword);


  //   alert(`Signup successful! New user: ${newUsername}`);
  //   this.reset(); 
  // });


  // forgotPasswordLink.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   console.log('Redirecting to password reset page...');
  // });


  // backToLoginLink.addEventListener('click', function(event) {
  //   event.preventDefault();

  //   console.log('Redirecting to login page...');
  // });
});
