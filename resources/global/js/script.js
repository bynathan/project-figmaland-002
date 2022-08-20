window.confirm('Projeto, em Desenvolvimento.')
window.confirm('Clique em OK, para vizualizar o Projeto.')
window.confirm('Este é o link para visualizar o diretorio do Projeto no GitHub:  https://bynathan.github.io/project-figmaland-002/')

const inptNavbarEmail = document.getElementById('inpt-navbar-email');
const buttonNavbarSubscribe = document.getElementById('button-navbar-subscribe');

let valueInptNavbarEmail;

buttonNavbarSubscribe.addEventListener('click', () => {
    valueInptNavbarEmail = inptNavbarEmail.value;
});
