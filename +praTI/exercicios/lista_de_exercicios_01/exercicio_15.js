// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let  anterior = 0, atual = 1, proximo 
for (let i = 1; i <= 10; i++){
    proximo = anterior + atual
    console.log(`${atual} `)
    anterior = atual
    atual = proximo
}