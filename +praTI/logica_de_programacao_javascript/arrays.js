//Arrays (vetores unidemensionais)
//arrays/vetores são estruturas de dados unidimensionais,
//ou seja, possuem uma dimensão
// arrays em JS suportam mais de um tipo de dado

let listaDeItems = Array()

listaDeItems[0] = 'carne'
listaDeItems[1] = 'melancia'
listaDeItems['não perecíveis'] = 'sal'

for (let i = 0; i < listaDeItems.length; i++){
    console.log(listaDeItems[i])
}

//Operações com Arrays

//adicionar elemento no final do array:
listaDeItems.push('banana')

//adicionar no começo do array
listaDeItems.unshift('laranja')

//eliminar último elemento do array
listaDeItems.pop()

//eliminar primeiro elemento do array
listaDeItems.shift()

console.table(listaDeItems)



//criar array 'numeros', preencher com números à minha escolha
const prompt = require('prompt-sync')()

let numeros = Array(), soma, pares = Array()

for (let i = 0; i < 10; i++){
    numeros[i] = Number(prompt('Digite um número à sua escolha: '))
    soma += numeros[i]

    if (numeros[i] % 2 == 0){
        pares.push(numeros[i])
    }
}

for (let j = 0; j < numeros.length; j++){
    numeros[j]
}

let media = soma/numeros.length

console.log(`Soma: ${soma}`)
console.log(`Media: ${media}`)
console.table(pares)

//forma alternativa:

soma = numeros.reduce((acumulador, valor) => 
acumulador + valor, 0)

pares = numeros.filter((num => num % 2 === 0))

for (let k = 0; k < numeros.length; k++){
    for (let j = k + 1; j < numeros.length; j++){
        if ( numeros [k] > numeros[j]){
            let temp = numeros[k]
            numeros[k] = numeros[j]
            numeros[j] = temp
        }
    }
}
console.log(numeros)

//forma aleternativa
//console.log(numeros.sort(a, b) => a - b)


//Arrays MULTIDIMENSIONAIS - MATRIZES
let matriz = []

for (let i = 0; i < 3; i++){

    matriz[i] = []

    for (let j = 0; j < 3; j++){
        matriz[i][j] = 10

    }
}

console.table(matriz)

let mercado = []

mercado['fruteira'] = ['maca', 'abacate', 'pera']
mercado['acogue'] = ['carnes']

console.table(mercado)

//calcular diagonal da matriz

let diagonalPrincipal, diagonalSecundaria

for (let i = 0; j < matriz.length; i++){
    for ( let j = 0; j < matriz.length; i++){
        if ( i == j){
            diagonalPrincipal *= matriz[i][j]
            diagonalSecundaria *= matriz[i][n - 1 - i]
        }
    }
}


let listaCoisa = Array()
//listaCoisa['hardware'] = ['placa de video'] 
listaCoisa['hardware'] = ['Placa de video']
listaCoisa['hardware'][1] = 'Smartwatch'
listaCoisa['games'] = ['GTA VI']
listaCoisa['games'][1] = 'The Witcher'
console.table(listaCoisa)


