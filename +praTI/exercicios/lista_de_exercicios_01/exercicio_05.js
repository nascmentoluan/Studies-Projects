// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let altura = Number(prompt('Digite a sua altura(m): '))
let peso = Number(prompt('Digite o seu peso(kg): '))

let imc = peso/ (altura ** 2)

if ( imc < 18.5){
    console.log('Baixo peso')
} else if ( imc >= 18.5 &&  imc <= 24.9){
    console.log('peso normal')
} else if ( imc >= 25 && imc <= 29.9){
    console.log('Sobrepeso')
} else if ( imc <= 30 && imc <= 34.9){
    console.log('Obesidade grau I')
} else if ( imc <= 35 && imc <= 39.9){
    console.log('Obesidade grau II')
} else if ( imc >= 40){
    console.log('Obesidade grau III')
} else {
    console.log('Digite um valor válido.')
}
