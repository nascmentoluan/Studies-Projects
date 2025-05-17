// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let numero, somatorioNumeros = 0, mediaAritmetica, quantidadeDeNumeros = 0

do {
    numero = Number(prompt('Digite um valor decimal: '))
    if (numero == 0){
        break;
    }
    somatorioNumeros += numero
    quantidadeDeNumeros++
} while ( numero != 0)

mediaAritmetica = somatorioNumeros/quantidadeDeNumeros
console.log(`A media dos números é de: ${mediaAritmetica}`)