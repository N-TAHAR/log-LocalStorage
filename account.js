console.log(localStorage.getItem('mail')) ;
console.log(localStorage.getItem('password'));
console.log(localStorage.getItem('enter'));



let email = document.querySelector('.email');
let password = document.querySelector('.password');

email.innerHTML += localStorage.getItem('mail');
password.innerHTML += localStorage.getItem('password'); 

