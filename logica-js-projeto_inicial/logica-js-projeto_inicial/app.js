alert('Boas vindas ao jogo do número secreto');
let nome = prompt('Qual seu nome?')
alert(`Olá ${nome}, vamos ao jogo!`)
numeroMax = 100
let numeroSecreto = parseInt(Math.random() * numeroMax + 1)
console.log(numeroSecreto)
let cont = 0
let chute

while (numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    if (numeroSecreto == chute) {
        alert(`Você acertou o número secreto é ${numeroSecreto}`)
    } else if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`)
    } else {
        alert(`O número secreto é menor que ${chute}`)
    }
    cont++
}

let palavraTentativa = cont > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou com ${cont} ${palavraTentativa}`)

/*
if (cont == 1) {
    alert(`Você acertou com ${cont} vez`)
} else {
    alert(`Você acertou com ${cont} vezes`)
}
*/