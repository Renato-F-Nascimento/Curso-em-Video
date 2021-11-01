var valores = []
function adicionar(){    
    let num = Number(document.querySelector('#num').value)     
    let lista = document.querySelector('#lista')    
    if (num < 1 || num > 100 || valores.indexOf(num) != -1) {
        alert ("Valor inválido ou já encontrado em lista")
    } else {
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }  
     //num.value = ''
     //num.focus() não funcionando
}

function fim() {    
    let msg = document.querySelector('#msg')
    let tot = valores.length
    valores.sort()   
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos=0; pos < valores.length; pos++){
        soma += valores[pos]
        maior = valores[pos]
        media = soma / tot
    }    
    msg.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados</p>`
    msg.innerHTML += `<p>O maior número informado foi ${maior}</p>`
    msg.innerHTML += `<p>O menor número informado foi ${menor}</p>`
    msg.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    msg.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}
