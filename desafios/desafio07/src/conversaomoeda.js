
function converter() {
    var res = document.querySelector('div.res')
    var dinheironacarteira = window.prompt('Quantos R$ você deseja converter?')
    var dolar = 4.70

    var conversaodolar = parseFloat(dinheironacarteira)/parseFloat(dolar)
    
    res.innerHTML = ''
    res.innerHTML += `<p>Você converteu <strong>R$${dinheironacarteira}</strong> em <strong>$${conversaodolar.toFixed(2)}</strong> !</p>`
}