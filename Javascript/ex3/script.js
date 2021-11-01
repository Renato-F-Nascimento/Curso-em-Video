function contar() {
    let inicio = document.querySelector("#inicio")
    let fim = document.querySelector("#fim")
    let passo = document.querySelector("#passo")
    let msg = document.querySelector("#msg")
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        msg.innerHTML = "ERRO! Forneça todos os dados"
    } else if (i <= f && p > 0){
        msg.innerHTML = "<p>Contando:</p>"
            while (i <= f) {            
            msg.innerHTML += `${i} &#x1F449 `
            i = i + p 
            } msg.innerHTML += `&#x1F3C1`
    } else if (i > f && p > 0){
        msg.innerHTML = "<p>Contando:</p>"
        while (i >= f) {            
        msg.innerHTML += `${i} &#x1F449 `
        i = i - p 
        } msg.innerHTML += `&#x1F3C1` 
    } else {
        alert("Passo Inválido! Considerando Passo = 1")
        if (i <= f){
            msg.innerHTML = "<p>Contando:</p>"
                while (i <= f) {            
                msg.innerHTML += `${i} &#x1F449 `
                i = i + 1
                } msg.innerHTML += `&#x1F3C1`
        }      else {
            msg.innerHTML = "<p>Contando:</p>"
                while (i >= f) {            
                msg.innerHTML += `${i} &#x1F449 `
                i = i - 1 
                } msg.innerHTML += `&#x1F3C1` 
        }
    }
}