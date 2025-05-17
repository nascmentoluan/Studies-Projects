// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let valorInicial, fatorial = 1

valorInicial = Number(prompt('Digite um numero: '))
for (let i = 1; i <= valorInicial; i++){
    fatorial *= i
}

console.log(`O fatorial de ${ valorInicial} é igual a ${fatorial}`)