function tabuada() {
    let num = document.querySelector("#num")
    let tab = document.querySelector("#tabela")
    let n = Number(num.value)

    if (num.value.length == 0){
        alert("Insira um valor")
    } else {
        tab.innerHTML = ""
    for (let c = 1; c <= 10; c ++) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }
}
}