function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //mesma função do querySelector.
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente.')//Caso esteja VAZIO ou for MAIOR que o ano atual, irá dar esse ERRO.
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //para colocar imagem dinâmica pelo .js
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {  //Se o que tiver marcado, checado for o fsex0, é sinal que ele é MASCULINO. 
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bb-homem.png')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-homem.png')
            } else if (idade >= 21 && idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-homem.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bb-homem.png')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade >= 21 && idade < 50) {
                // ADULTA
                img.setAttribute('src', 'foto-adulta-mulher.png')
            } else if (idade >= 50) {
                // IDOSA
                img.setAttribute('src', 'foto-idosa-mulher.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}