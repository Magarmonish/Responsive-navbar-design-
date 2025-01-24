
// Search Form Toggle
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
 
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
  sinupform.classList.remove('active');
};

// Login Form Toggle
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  sinupform.classList.remove('active');
  searchForm.classList.remove('active');
  navbar.classList.toggle('active');
};

// Signup Form Toggle
let sinupform = document.querySelector('.singup-form');
document.querySelector('#singup-btn').onclick = () => {
  sinupform.classList.toggle('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
  navbar.classList.toggle('active');
};

// Navbar Toggle
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  sinupform.classList.remove('active');
 
};
