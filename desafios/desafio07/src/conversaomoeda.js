function converter() {
    var cotacaodolar = window.prompt('Antes de mais nada, Quanto está a cotação do dólar agora?')
    var dinheironacarteira = window.prompt('Quantos R$ você deseja converter?')

    Number(dinheironacarteira)
    Number (conversaodolar)
    var conversaodolar = parseFloat(dinheironacarteira)*parseFloat(cotacaodolar)
    var res = window.alert(`Você converteu R$${dinheironacarteira} em ${conversaodolar}`)
}