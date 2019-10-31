document.querySelector('#btn').addEventListener("click", function() {
    var padrao = /pinguim/;
    var senha = document.querySelector('#inputPassword').value;
    var usuario = document.querySelector('#user').value;

    if (!!usuario)
        padrao.test(senha) ? window.location.href = 'logado.html' : alert('Dica: Tente usar a palavra "pinguim" como senha');
    else
        alert('Por favor, insira um usuário');
});