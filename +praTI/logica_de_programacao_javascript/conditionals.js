//Operadores relacionais ou de comparação
// retornar um valor lógico com base em uma comparação
console.log(10 > 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 >= 5)
console.log(10 == 5)
console.log(10 == '10')
console.log(10 === '10')
console.log(10 != 10)
console.log(10 !== '10')



//CONDICIONAIS
//OPERADORES LÓGICOS (And (&&), OR (||)):
console.log((10 < 5) && (10 > 2))
console.log((10 < 5) && !(10 > 2))
console.log((10 < 5) || (10 > 2))

let usuario = 'Luan Nascimento'
let senha = '1234'

if ( usuario == 'Luan Nascimento' && senha == '1234'){
    console.log('Bem-vindo(a) ao sistema!')
} else {
    console.log('Senha ou nome de usuário incorretos')
}

//Operador ternário
(usuario == 'Luan Nascimento' && senha == '1234') ? console.log("Bem-vindo(a) ao sistema") : console.log("Dados incorretos")


//Exercícios:
// //1 - Verificar se um número é par ou ímpar.
valor = 4
if ( valor % 2 == 0){
    console.log('Valor par')
} else {
    console.log('Valor ímpar')
}

// //2 - Encontrar maior valor entre três números

let valor1 = 1;
let valor2 = 2;
let valor3 = 2;

if ((valor1 > valor2) && (valor2 < valor3)){
    console.log("Maior número: " + valor1)
} else if ( (valor2 > valor1) && (valor2 > valor3)){
    console.log("Maior número" + valor2)
} else if ((valor3 > valor1) && (valor3 > valor2)){
    console.log("Maior número: " + valor3)
} else{
    console.log("Há pelo menos dois Números iguais ou todos iguais")
}

//3 - Fazer calculadora simples utilizando entrada de usuário

// para obter entrada: "const requires = require()

const prompt = require('prompt-sync')()

valor1 = Number(prompt("Insira o primeiro valor: "))
valor2 = Number(prompt("Insira o segundo valor: "))
let op = prompt('Informe a operação desejada: (+, -, *, /): ')
let resultado = 0

if (op === '+'){
    resultado = valor1 + valor2
} else if ( op ==='-'){
    resultado = valor1 - valor2
} else if (op === '*'){
    resultado = valor1 * valor2
} else if (op ==='/'){
    if (valor2 !== 0){
        resultado = valor1 / valor2
    } else{
        consolelog('Erro: Divisão por 0')
        resultado = undefined
    }
} else {
    console.log('Operacao Invalida')
    resultado = undefined
}

if (resultado !== undefined){
    console.log('Resultado: ' + resultado)
}

switch (op){
    case '+':
        resultado = valor1 + valor2
    break;
    case '-':
        resultado = valor1 + valor2
    break;
    case '*':
        resultado = valor1 * valor2
    break;
    case '/':
        if (valor2 == 0){
            consolelog('Erro: divisão por 0.')
        } else {
            resultado = valor1 / valor2
        }
    break;
    default:
        console.log('Operação inválida')
    break;
}

console.log("Resultado: " + resultado)

//Exercício 4: verificar se número é positivo, negativo ou zero:
let valor = Number(prompt('Insira um valor: '))

 if (valor > 0){
     console.log('Valor positivo.')
} else if ( valor < 0){
     console.log('Valor negativo')
 } else {
     console.log('Zero')
}


//Exercício 6: definir faixas etárias para crianças, adultos, e idosos e com switch apresentar na tela se 
// a pessoa que informou a idade está em uma e qual a faixa etária

let idade = Number(prompt('Digite a sua idade: '))

