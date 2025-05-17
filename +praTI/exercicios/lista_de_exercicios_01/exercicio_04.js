// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

//utilizando o método prompt para obter entrada do usuário:
const prompt = require('prompt-sync')()
console.log('Escolha uma opção:' +
    '\n1 - Somar dois valores' + '\n2 - Subtrair dois valores' + '\n3 - Sair\n')
let validadorDeResposta = Number(prompt())

let valor1, valor2
switch (validadorDeResposta){
    case 1:
        valor1 = Number(prompt('Digite o valor 1: '))
        valor2 = Number(prompt('Digite o valor 2: '))
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2} `)
        break;

    case 2:
        valor1 = Number(prompt('Digite o valor 1: '))
        valor2 = Number(prompt('Digite o valor 2: '))
        console.log(`${valor1} - ${valor2} = ${valor1 - valor2} `)
        break
    
    case 3:
        break;
}