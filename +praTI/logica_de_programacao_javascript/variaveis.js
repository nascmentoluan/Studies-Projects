
console.log("1ª forma de expressar 'strings' com aspas duplas:")
console.log('2ª forma de expressar "strings" com aspas simples:')
console.log(`3ª forma de expressar strings com "crases":`)



console.log(typeof("typeof para exibir o tipo da dado presente no parâmetro da função"))
console.log(typeof(19))
console.log("19")



//let versus var versus const

//let : mais recente e recomendado para variáveis de escopo local.
let name = `Luan`
console.log(name)

//var: mais antiga, padrão em empresas e referencia-se globalmente nos escopos
var anotherName = 'Pablo'
console.log(anotherName)

//const: constante, não vai se alterar durante a execução do código
//recomendado para informações que não devem ser alteradas
const ESTADO = 'Maranhão'

ESTADO = 'São Paulo' //gera erro no console, não há como artibuir um novo valor!


//null x undefined

//undefined: variáveis não inicializada
//let test
//console.log(typeof(teste))

// null: variável PROPOSITALMENTE declarada como "vazia"
let varVazia = null
console.log(typeof(varVazia))

//Operadores artiméticos
// Ordem de precedência: (), **, * || /, + || -
let num1 = 5
let num2 = 3
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
//Resto(Módulo):
console.log(num1 % num2)

//Concatenação
console.log("10" + 10)

//Conversão (casting explícito)
// String para Inteiro:
let num = "10"
console.log(parseInt(num) + 10)

//Incrementos
let counter = 0

// Formas de incrementar:
counter += 1
counter++

//Pós-incremento: executa primeiro, incrementa depois
console.log(counter++)

//Pré-incremento: incrementa primeira, executa depois
console.log(++counter)

//Pré-decremento, decrementa primeiro, executa depois:
console.log(--counter)

//Pós-decremento executa primeiro, decrementa depois:
console.log(count--)

// incrementar com valor específico

let step = 2
counter += step
console.log(counter)





    