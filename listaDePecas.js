// Array da lista de peças
const listaDePecas = ["Pinça de freio", "Retrovisor", "Volante", "Cano de escape"]

// Mostra para o usuário a lista
console.log(listaDePecas)

// Condicional que verifica o tamanho do array e imprime na tela uma mensagem para cada situação
if(listaDePecas.length < 20) {
    console.log("É posssível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
} 

// Declaração da variável peso para uma determinada peça
var peso = 48

// Condicional de verificação do peso da peça
if (peso >= 5) {
    console.log("Peso da peça está adequado")  
} else {
    console.log("Peso insuficiente")
}

// Declaração de uma variável let, que tem seu escopo limitado
let nomePeca = "Retrovisor"

// Condicional que verifica o número de caracteres de uma peça.
if (nomePeca.length > 3) {
    console.log("Nome adequado")    
} else if(nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.error.log("O nome deve possuir mais de 3 caracteres")
}