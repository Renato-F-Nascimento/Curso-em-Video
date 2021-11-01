function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()   
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${(hora)} horas`
    if(hora > 5 && hora < 12){
        img.src = 'Manha.jpg'
        document.body.style.backgroundColor = '#ffde50'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Tarde.jpg'
        document.body.style.backgroundColor = '#dc6b0b'
    } else {
        img.src = 'Noite.jpg'
        document.body.style.backgroundColor = '#081b1f'
    }
}

