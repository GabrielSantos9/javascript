function verificar() {
    let res = document.querySelector('div.res')

    let ano = window.prompt('Qual é o ano que você quer Verificar?')
    res.innerHTML = ''
    if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
        res.innerHTML += `<p>O ano ${ano} <mark class="mrk1">É BISSEXTO</mark></br></p>`
    } else {
        res.innerHTML += `<p>O ano ${ano} <mark class="mrk2">NÃO É BISSEXTO</mark></br></p>`
    }
}