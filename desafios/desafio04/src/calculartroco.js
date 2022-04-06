function comprarproduto() {
    let produto = window.prompt('Que produto você está comprando?')
    let valorproduto = window.prompt(`Quanto custa ${produto} que você está comprando?`)
    let dinheiroemmao = window.prompt(`Qual foi o valor que você deu para comprar o ${produto}?`)
    let troco = parseInt(dinheiroemmao)-parseInt(valorproduto) 
    window.alert(`Você comprou ${produto} que custou ${valorproduto}.
Deu ${dinheiroemmao} em dinheiro e vai receber ` +troco +  ` de troco.
Volte sempre!`)
}