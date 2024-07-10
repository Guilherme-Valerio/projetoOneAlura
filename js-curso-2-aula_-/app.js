let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function verficarChuteI() {
    console.log('Foi clicado!');
}






function somar() {
    n1 = parseInt(prompt('Escolha o numero 1'));
    n2 = parseInt(prompt('Escolha o numero 2'));
    n3 = n1 + n2;
    alert(`A soma dos numeros que voce chutou é ${n3}`)
}