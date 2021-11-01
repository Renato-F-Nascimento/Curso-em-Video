function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id',  'foto')
    if (ano.value.length == 0 || ano.value > anoAtual){
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(ano.value)
        var genero = ""
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebe h.jpg')
            } else if (idade >=10 && idade < 30) {
                //jovem
                img.setAttribute('src', 'jovem h.jpg')
            } else if (idade >=30 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >=10 && idade < 30) {
                //jovem
                img.setAttribute('src', 'jovem m.jpg')
            } else if (idade >=30 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
       res.innerHTML = `Detectamos ${genero} de ${idade} anos` 
       res.appendChild(img)
    }
}
