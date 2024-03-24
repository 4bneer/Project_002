const valorX = document.getElementById('numberX');
const valorY = document.getElementById('numberY');
const form = document.getElementById('form-calcular');

function calcular(numero) {
    numero = valorX.value > valorY.value;
    return numero;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O número &nbsp;<b>${valorX.value}</b> &nbsp; é maior que o número &nbsp; <b>${valorY.value}</b>`;
    const mensagemErro = `O número &nbsp;<b>${valorX.value}</b> &nbsp; é menor que o número &nbsp; <b>${valorY.value}</b>`;
    if (calcular()) {
        document.querySelector('#mensagem').innerHTML = mensagemSucesso;
        document.querySelector('#mensagem').classList.add('sucess-message');
        document.querySelector('#mensagem').classList.remove('errorMessage');
        document.querySelector('#mensagem').style.display = 'flex';
    } else {
        document.querySelector('#mensagem').innerHTML = mensagemErro;
        document.querySelector('#mensagem').style.display = 'flex';
        document.querySelector('#mensagem').classList.remove('sucess-message');
        document.querySelector('#mensagem').classList.add('errorMessage');
    }
})