// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

//utilizando o método prompt para obter entrada do usuário:
const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite a sua idade: '))

if ( idade >= 0 && idade <= 12){
    console.log(`Você tem ${idade} anos; Logo, é uma criança!`)
} else if (idade > 12 && idade <= 17 ){
    console.log(`Você tem ${idade} anos; Logo, é um(a) adolescente!`)
} else if (idade > 17 && idade <= 64){
    console.log(`Você tem ${idade} anos; Logo, é um adulto!`)
} else if ( idade > 64){
    console.log(`Você tem ${idade} anos; Logo, é um(a) idoso(a)!`)
} else {
    console.log('Digite uma idade válida.')
}