// Como ainda não foi ensinada a parte de entrada de dados, eu utilizei a data atual.
// Em um software mais completo, o programa receberia a informação do usuário para então
// fazer a análise dos dados e determinar os caminhos a seren percorridos.

let dataAtual = new Date()
const dataEvento = new Date('2021-08-28')
let idadeParticipante = 18
let qtdParticipantes = 101

if (dataAtual >= dataEvento) {
    console.log('Data disponível')
    if (idadeParticipante >= 18) {
        console.log('Você já tem idade suficiente para participar do evento')
        if (qtdParticipantes >= 100) {
            console.log('O limite máximo de participantes já foi atingido!')
        } else {
            console.log("Ainda há espaço na lista. Escolha seu assento!")
        }
    } else {
        console.log('Sua idade ainda é inadequada!')
    }
} else {
    console.log('Data inválida!')
}