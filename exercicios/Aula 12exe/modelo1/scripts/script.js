function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/foto-manha.png'
        document.body.style.background = '#f9b96a'
    } else if (hora >=  12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/foto-tarde.png'
        document.body.style.background = '#fd6002'
    } else {
        // BOA NOITE!
        img.src = 'img/foto-noite.png'
        document.body.style.background = '#3d7d9c'
    }
}