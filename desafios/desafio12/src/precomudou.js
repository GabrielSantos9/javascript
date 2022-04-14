function verificar() {
    let res = document.querySelector('div.res')
    let precoanterior = Number(window.prompt('Qual era o preço Anterior do produto?'))
    let precoatual = Number(window.prompt('Qual o preço Atual do produto?'))

    let subiu = Number(precoatual)-Number(precoanterior)
    
    let porcentagemtotal = 100
    let calculoporcentagem = Number(subiu)/Number(precoanterior)*Number(100)
    
    res.innerHTML = ''
    res.innerHTML += `<p><strong>Analisado os valores informado.</strong></p></br>`
    res.innerHTML += `<p>O produto custava <strong>R$ ${precoanterior.toFixed(1).replace(".", ",")}</strong>, e agora custa <strong>R$ ${precoatual.toFixed(1).replace(".", ",")}</strong>.</p>`
    res.innerHTML += `<p>O preço subiu <strong>R$ ${subiu.toFixed(1).replace(".", ",")}</strong> em relação ao preço anterior.</p>`
    res.innerHTML += `<p>Uma variação de <strong>${calculoporcentagem.toFixed(1)}%</strong>.</p>`
}