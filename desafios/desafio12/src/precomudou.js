function verificar() {
    let res = document.querySelector('div.res')
    let precoanterior = Number(window.prompt('Qual era o preço Anterior do produto?'))
    let precoatual = Number(window.prompt('Qual o preço Atual do produto?'))

    var preco1 = precoanterior.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var preco2 = precoatual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    console.log(preco1)
    console.log(preco2)

    let subiu = Number(precoatual)-Number(precoanterior)
    let porcentagemtotal = 100
    let calculoporcentagem = Number(subiu)/Number(precoanterior)*Number(100)
    
    
    res.innerHTML = ''
    res.innerHTML += `<p><strong>Analisado os valores informado.</strong></p></br>`
    res.innerHTML += `<p>O produto custava <strong>${preco1}</strong>, e agora custa <strong>${preco2}</strong>.</p>`
    if (preco2 > preco1) {
        res.innerHTML += `<p>Hoje o produto está mais <strong>Caro</strong>.</p>`
        res.innerHTML += `<p>O preço subiu <strong>${subiu.toFixed(2)}</strong> em relação ao preço anterior.</p>`
    } else if (preco2 < preco1) {
        res.innerHTML += `<p>Hoje o produto está mais <strong>Barato</strong>.</p>`
        res.innerHTML += `<p>O preço abaixou <strong>${subiu.toFixed(2).replace(".", ",")}</strong> em relação ao preço anterior.</p>`
    }
    res.innerHTML += `<p>Uma variação de <strong>${calculoporcentagem.toFixed(1)}%</strong>.</p>`
}