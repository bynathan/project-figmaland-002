const inptMainForEmail = document.getElementById('main-for-input-email');
const buttonMainForSubscribe = document.getElementById('main-for-button-subscribe');

let valueInptMainForEmail;

buttonMainForSubscribe.addEventListener('click', () => {
    valueInptMainForEmail = inptMainForEmail.value;
});