//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado!');
}

exibirTextoNaTela('h1', 'Jogo do Número  Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}


function somar() {
    n1 = parseInt(prompt('Escolha o numero 1'));
    n2 = parseInt(prompt('Escolha o numero 2'));
    n3 = n1 + n2;
    alert(`A soma dos numeros que voce chutou é ${n3}`);
}