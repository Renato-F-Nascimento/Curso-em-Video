function calcular() {
    var num1 = Number(prompt("Primeiro valor:"))
    var num2 = Number(prompt("Segundo valor:"))
    var op = Number(prompt(`Valores informados: ${num1} e ${num2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    var soma = num1 + num2
    var sub = num1 - num2
    var mult = num1 * num2
    var div = (num1 / num2).toLocaleString('pt-BR')
    var msg = document.querySelector('#msg')
    msg.innerHTML = `<h2>Calculando...</h2>`

    switch (op) {
        case 1:
            msg.innerHTML += `<p>${num1} + ${num2} = <strong>${soma}</strong></p>`
            break
        case 2:
            msg.innerHTML += `<p>${num1} + ${num2} = <strong>${sub}</strong></p>`
            break
        case 3:
            msg.innerHTML += `<p>${num1} + ${num2} = <strong>${mult}</strong></p>`
            break
        case 4:
            msg.innerHTML += `<p>${num1} + ${num2} = <strong>${div}</strong></p>`
            break
        default: 
            msg.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`
    } 

    }
