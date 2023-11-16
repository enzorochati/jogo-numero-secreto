const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

console.log('Número Secreto:', numeroSecreto);
