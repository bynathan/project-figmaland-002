const inptNavbarEmail = document.getElementById('inpt-navbar-email');
const buttonNavbarSubscribe = document.getElementById('button-navbar-subscribe');

let valueInptNavbarEmail;

buttonNavbarSubscribe.addEventListener('click', () => {
    valueInptNavbarEmail = inptNavbarEmail.value;
});