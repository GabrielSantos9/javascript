function desconto() {
    let res = document.querySelector('div.res')

    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = window.prompt(`Qual é o preço do ${produto}?`)

    let porcentagem = 10
    let porcentagemtotal = 100
    let calculo = Number(porcentagem)*Number(preco)/Number(porcentagemtotal)
    let subtracao = Number(preco)-Number(calculo)

    res.innerHTML = ''
    res.innerHTML += `<p>Calculando desconto de <strong>10%</strong> para <strong>${produto}</strong>.</p>`
    res.innerHTML += `<p>O preço original era <strong>R$ ${preco}</strong>.</p>`
    res.innerHTML += `<p>Você acaba de ganhar <strong>R$ ${calculo}</strong> de desconto <strong>(-10%)</strong>.</p>`
    res.innerHTML += `<p>No fim, você vai pagar <strong>R$ ${subtracao}</strong> no produto <strong>${produto}</strong>.</p>`
}