function mostrar(){

let mes = prompt("Digite o mês em extenso (ex: Setembro)")
let mesup = mes.charAt(0).toUpperCase() + mes.slice(1)
let estacao = ""

switch (mesup/*.charAt(0).toUpperCase() + mes.slice(1) - tambem posso alterar aqui, o texto digitado ficará igual*/) {
    case "Janeiro": case "Fevereiro": case "Março":
        estacao = "Verão"
    break
    case "Abril": case "Maio": case "Junho":
        estacao = "Outono"
    break
    case "Julho": case "Agosto": case "Setembro":
        estacao = "Inverno"
    break
    case "Outubro": case "Novembro": case "Dezembro":
        estacao = "Primavera"
    break
    default:
        estacao = "Desconhecida. Mês invalido"
}

let res = document.querySelector("#res")

res.innerHTML = `No mês de <mark>${mesup}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>`
}