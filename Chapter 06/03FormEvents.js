// Forms Events(Submit Form)

let form = document.querySelector('.sign-up');
let email = document.querySelector('#UserEmail');
let password = document.querySelector('#Password');

form.addEventListener('submit', (e) => {
e.preventDefault();
console.log(email.value, password.value);

})

