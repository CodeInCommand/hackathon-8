// // const { MongoClient } = require('mongodb');

// // const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
// // const client = new MongoClient(uri);

// // async function run() {
// //   try {
// //     const database = client.db('crm');
// //     const customers  = database.collection('customers');
// //     const employees = database.collection('employees');
// //     const chats = database.collection('chats');
// //     const donations = database.collection('donations');
// //     const tickets = database.collection('tickets');


// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// // }

// // run().catch(console.dir);

// // document.addEventListener('DOMContentLoaded', function() {
// //     const navLinks = document.querySelectorAll('nav a');
  
// //     navLinks.forEach(link => {
// //       link.addEventListener('click', function(event) {
// //         navLinks.forEach(link => {
// //           link.classList.remove('active');
// //         });
// //         this.classList.add('active');
// //       });
// //     });
// //   });
  

// document.addEventListener('DOMContentLoaded', function() {
//   const loginForm = document.getElementById('loginForm');
//   const signupForm = document.getElementById('signupForm');
//   const forgotPasswordLink = document.querySelector('.forgot-password a');
//   const backToLoginLink = document.querySelector('.login-link a');

//   loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     // Perform login authentication here
//     // For demonstration, we'll log the credentials
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Simulating a successful login for demonstration
//     alert(Login successful! Welcome, ${username});
//     this.reset(); // Reset the form after successful login
//   });

//   signupForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const newUsername = document.getElementById('signupUsername').value;
//     const newPassword = document.getElementById('signupPassword').value;

//     // Perform signup process here
//     // For demonstration, we'll log the new user credentials
//     console.log('New Username:', newUsername);
//     console.log('New Password:', newPassword);

//     // Simulating a successful signup for demonstration
//     alert(Signup successful! New user: ${newUsername});
//     this.reset(); // Reset the form after successful signup
//   });

//   // Click event for "Forgot Password" link
//   forgotPasswordLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     // Implement your forgot password logic here
//     console.log('Redirecting to password reset page...');
//   });

//   // Click event for "Go back to Login" link
//   backToLoginLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     // Implement your logic to go back to login page here
//     console.log('Redirecting to login page...');
//   });
// });