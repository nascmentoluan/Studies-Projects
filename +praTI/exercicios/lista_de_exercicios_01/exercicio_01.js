// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

//utilizando o método prompt para obter entrada do usuário:
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um valor inteiro: '))

//verificando se o numero é impar ou par com operador modulo(%)
if ( numero % 2 == 0){
    console.log(`O Número ${numero} é par.`)
} else {
    console.log(`O Número ${numero} é ímpar.`)

}