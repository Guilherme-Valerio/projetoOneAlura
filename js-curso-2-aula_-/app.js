//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    console.log('O botão foi clicado!');
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero é menor');
        } else {
        exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == 10){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número  Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


function somar() {
    n1 = parseInt(prompt('Escolha o numero 1'));
    n2 = parseInt(prompt('Escolha o numero 2'));
    n3 = n1 + n2;
    alert(`A soma dos numeros que voce chutou é ${n3}`);
}

exibirMensagemInicial();