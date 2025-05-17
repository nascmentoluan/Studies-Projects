// let livro = {
//     nome: 'O Morro dos Ventos Uivantes', 
//     anoLancamento: 1800,
//     autor: 'Emily Bronte',
//     numPaginas: 900,
//     genero: 'comédia',
//     atores: ['Kate Bush', 'Ralph Fiennes'],

//     mostrarCaracteristicas: function(){
//         return `${this.nome} é um livro de romance`
//     }
// }
//clona diretamente objeto, não recomendado
// let novoLivro = livro
// novoLivro.preco = 20.5

// console.log(livro)
// console.log(novoLivro)

// let filme = {
//     nome: 'Cisne Negro', 
//     anoLancamento: 2011,
//     genero: 'terror, suspense',
//     atores: ['Natalie Portman'],

//     mostrarCaracteristicas: function(){
//         return `${this.nome} é um sobre "balé"`
//     }
// }


function novoFilme(nome, genero, anoLancamento, atores){
    return {
        nome,
        genero,
        anoLancamento,
        atores
    }
}

let filmeNovo = novoFilme('Cisne Negro', 'terror, suspense', 2011, 'Natalie Portman')

// console.log(filmeNovo)

//"for in": operar sobre índices
let jogos = ['GoW', 'TLOU', 'LoL', 'LiS', 'Gris']

for (let jogo in jogos){
    console.log(jogos[jogo])
}

//"for of": operar sobre o valor, arrays de objetos
let palavra = 'abracadabra'

for (let valor of palavra){
    console.log(valor)
}

for (let value of Object.keys(filmeNovo)){
    console.log(filmeNovo[value])
}
// inválide: não há como iterar um objeto com for normal.
// for (let i = 0; i < Object.keys(filmeNovo).length; i++){
//     console.log(filmeNovo.keys)
// }


//calcular medias das notas dps alunos de um professor e 
//digam se a turma do professor está na media

let professor = {
    nome: 'Moraine Sedai',
    materia: 'Filosofia',
    notas: {
        aluno1: [10, 10],
        aluno2: [3, 7]
    }
}
let somatoriaNotas = 0, numAlunos = 0 

for (let aluno in professor.notas){
    somatoriaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/ professor.notas
    [aluno].length : professor.notas[aluno]

    numAlunos++

}

let media = somatoriaNotas/numAlunos

if(media >= 6){
    console.log(`a media da turma é ${media} e está acima do padrão`)

} else{
    console.log(`a media da turma é ${media} e está abaixo do padrão`)
}


let livraria = [
{titulo: "1984", autor: "George Orwell", ano: 1960},
{titulo: "O Profeta", ator: "Endrew Berthold", ano: 2001},
{titulo: "Código Limpo", autor: "Martin", ano: 2010}
]

//for of para iterar e verificar os livros publicados antes do ano 2000
for (let livro of livraria){
    if (livro.ano < 2000) {
        console.log(livro)
    }
}


let filmes = [
    {titulo: "Sempre ao seu lado", genero: "drama"},
    {titulo: "Massacre da Serra Elétrica", genero: "Horror"},
    {titulo: "Como eu era antes de você", genero: "Drama"},
    {titulo: "Tarzan", genero: "Animação, Aventura"},

]

//listar quantidade de generos por filme
//for earch - método de iteração sobre arrays que espera função como parâmetro (callback)
filmes.forEach((filme) => {
    if (contagemFilmes[filme.genero]){
        contagemFilmes [filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
})
for (let genero in contagemFilmes){
    console.log(`Estão presentes na lista ${contagemFilmes[genero]} filmes do genero ${genero}`)

}
console.table(contagemFilmes)


//construir uma função que calcule o fatorial de um numero
function fatorial(numero){
    let fatorial = i

    for (let i = 1; i <= numero; i++){
        fatorial *= 1
    }

    console.log(fatorial)
}

//imprimam os primeiros 10 numeros da sequencia de fibonacci
function fibonacci(){
    let a = 0, b = 1, temp
    console.log(a)
    console.log(b)

    for (let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}

// função pa - progressao aritmetica
function pa(primeiroTermo, razao){
    let soma = 0

    for (let i = 0; i < 10; i++){
        let termo = primeiroTermo + i * razao
        console.log(termo)
        soma += termo
    }

    console.log(`A soma dos termos é ${soma}`)
}


function fatorial(n) {
    if (n === 0){
        return 1
    } else {
        return n * fatorial(n - 1)
    }

}

//pilha de chamadas - call stack
//stack overflow - estouro de pilha - funções que excedem o limite da memória da pilha



//soma dos números de 1 até N
function soma(n){
    if(n === 1){
        return 1
    } else {
        return n + soma(n - 1)
    }
}


//fibonacci
function fibonacci(n){
    if (n === 0 ){
        return 0
    } else if ( n === 1){
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                { id: 4, nome: "Tablets", filhos: []},
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function imprimirCategorias(lista, nivel = 0) {
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length>0){
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}