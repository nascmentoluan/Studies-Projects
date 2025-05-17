// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let numero
let somaTotal = 0
for (let i = 1; i <= 5; i++){
    numero = Number(prompt(`Digite o ${i}º valor: `))

    somaTotal += numero

}

console.log(`A soma dos números é: ${somaTotal}`)