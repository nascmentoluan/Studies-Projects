// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

let A = Number(prompt('Digite o valor do lado A: '))
let B = Number(prompt('Digite o valor do lado B: '))
let C = Number(prompt('Digite o valor do lado C: '))

if ((A < B + C) && (B < A + C) && (C < B + A)){
    console.log(`Os lados ${A}, ${B} e ${C} formam um triângulo.`)

    if ((A == B) && ( B == C)){
        console.log('O triângulo é equilátero.')
    } else if ((A == B) || (A == C) || (B == C)){
        console.log('O triângulo é isósceles.')
    } else {
        console.log('O triângulo é escaleno.')
    }
}