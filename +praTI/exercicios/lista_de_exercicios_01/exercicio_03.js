// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

//utilizando o método prompt para obter entrada do usuário:
const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite uma nota de 0 a 10: "))

if ( nota > 7 ){
    console.log(`Parabéns\nVocê obteve uma nota de ${nota} pontos e está aprovado!`)
} else if ( nota >= 5 && nota < 7){
    console.log(`Você obteve uma nota de ${nota} pontos e está em recuperação.`)
} else {
    console.log(`Você obteve uma nota de ${nota} pontos e está reprovado.`)
}