//motivação: facilitar a escrita de código, tornando-a menos 
//redundante e eliminando a necessidade de repetir linhas de código.

//laço: estrutura/bloco de código que será executado 
//um certo números de vezes

//tipos:

//WHILE (enquanto)
//executa algo um determinado numero de vezes enquanto uma condicao for verdadeira
// while ( condicao ser verdadeira){
//     executar bloco de codigo;
// }
// deve haver uma condição de parada para que o codigo
//não se repita indefinidamente

//Loops
const prompt = require('prompt-sync')()

//WHILE - executa determinado código enquanto uma condição for verdadeira
let number = Number(prompt("Digite um número"))

let counter = 1

while ( counter <=10){
    console.log(`${number} * ${counter} = ${number * counter}`)
    counter++
}

let counter2 = 10

while ( counter2 > 0){
    console.log(`${counter2}`)
    counter2--
}

// FOR - estrutura de repetição utilizada para executar blocos de códgigo um 
// número limitado de vezes
// Estrutura:
for (let counter3 = 0; counter3 <= 10; counter3++){
    console.log(`${counter3}`)
}

//média aritmética de números inseridos até digitar 0

//WHILE X DO-WHILE
let resposta = null

let totalDeValores = 0, media = 0;

while (resposta != 0){
    resposta = Number(prompt("Digite outro valor para a média: "))
    if (resposta == 0){
        break
    } else{
        media +=resposta
        totalDeValores++

    }
    media = media/totalDeValores
    console.log(`Média atual: ${media}`)
}

//DO-WHILE
//executa um bloco código repetidamente pelo menos uma vez,
//independentemente de a condição a ser avaliada for verdadeira ou falsa
let contador = 11
do{
    console.log(contador, contador++)
} while (contador < 10)

    