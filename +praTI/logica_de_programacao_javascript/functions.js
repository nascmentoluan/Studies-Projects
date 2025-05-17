//function - serve para indicar/declarar função

function RetornaParOuImpar(valor){
    let resultado

    if (valor % 2 == 0){
        resultado = 'PAR'
    } else{
        resultado = 'IMPAR'
    }

    return resultado
}

let resultado = RetornaParOuImpar(2)
console.log(resultado)

function CalcularArea(largura, comprimento){
    return largura * comprimento
}

console.log(CalcularArea(10, 10))

function OrdenarArray(numeros){
    //return numeros.sort((a, b) => a - b)
    for (let k = 0; k < numeros.length; k++){
    for (let j = k + 1; j < numeros.length; j++){
        if ( numeros [k] > numeros[j]){
            let temp = numeros[k]
            numeros[k] = numeros[j]
            numeros[j] = temp
        }
    }
}
    return numeros

}


//tipos de função

//função anônima - função que tem nome declarado explicitamente

let exibeNome = function(nome){
    console.log(nome)
}

//arrow function - tipo de declaracao mais enxuta com uso de setas
let exibeOutroNome = (nome) => console.log(nome)

exibeOutroNome('Luan')


//função por parâmetro - callback
//funções passadas por parâmetros para outras funções
let sucesso = (message) => console.log(message)

let erro = function() {
    console.log('Requisição deu errado')
}

function requisicao(sucesso,erro){
    if(true) {
        sucesso('Requisição deu certo')
    } else {
        erro()
    }
}

requisicao((message) => console.log(message), erro)


function somarElementosArray(array){
    let somaElementos
    for (let i = 0; i < array.length; i++){
        somaElementos += array[i]
    }

    return somaElementos
}

function maiorElementoArray(array){
    let maiorElementoArray = array[0]

    for (let i = 0; i < array.length; i++){
        if (array[i] > maiorElementoArray){
            maiorElementoArray = array[i]
        }
    }

    return maiorElementoArray
}

//funções nativas do javaScript
let nome = 'Luan Pablo'

console.log(nome.length)
console.log(nome.charAt(0))
console.log(nome.indexOf('P'))

console.log(nome.replace('Luan', 'Pablo'))
console.log(nome.substr(6,5))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log("    Nascimento".trim())

//fazer função para inverter string
function reverseString(str) {
    let reversed = ''

    for (let i = str.length - 1; i >=0; i--){
        reversed += str[i] 
    }

    return reversed
}

//encontrar o numero de vogais de uma String
function countVowels(str){
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.lentgh : 0   
}

console.log(Math.ceil(100.2))
console.log(Math.floor(100.2))
console.log(Math.round(100.2))
console.log(Math.sqrt(81))
console.log(Math.cbrt(81))
console.log(Math.pow(9, 2))
console.log(Math.abs(-100.2))
console.log(Math.random() * 100)


//gerar um número aleatório entre dois valores
console.log(randomBetween(1,3))


//funções para obter datas:
let date = new Date()

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.toString())


let newDate = new Date(2005, 7, 11)
let novaData = new Date(2025, 7, 11)

console.log(newDate.getTime())
console.log(novaData.getTime())

let milissegundosEntreDatas = Math.abs(newDate.getTime() - novaData.getTime())
console.log(milissegundosEntreDatas)

let milissegundosPorDia = ( 1 * 24 * 60 * 60 * 1000)

console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas/milissegundosPorDia}`)

//formatar uma data
function formateDate(date) {
    let day = date.getDate().toString.padStart(2, '0')

    let month = (date.getMonth() + 1).toString().padStart(2, '0')

    let year = delete.getFullYear().toString()
    return `${day}/${month}/${year}`
}

console.log(formateDate(newDate))


//somar duas matrizes
function somarMatrizes(){
    
}