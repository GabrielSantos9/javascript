function reajuste() {
    let res = document.querySelector('div.res') 

    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario =  window.prompt(`Qual é o salário de ${nome}?`)
    let reajuste = window.prompt(`O salário de ${nome} vai ser reajustado em qual Porcentagem?`)

    let porcentagem = `${reajuste}`
    let porcentagemtotal = 100
    let calculo = Number(porcentagem)*Number(salario)/Number(porcentagemtotal)
    var soma = Number(salario)+Number(calculo)

    res.innerHTML = ''
    res.innerHTML += `<strong>${nome} recebeu um aumento salarial!</strong></br>`
    res.innerHTML += `O salario atual era <strong>R$ ${salario}</strong>.</br>`
    res.innerHTML += `Com um aumento de <strong>${reajuste}%</strong>, vai aumentar <strong>R$ ${calculo}</strong> no próximo mês.</br>`
    res.innerHTML += `E a partir daí. <strong>${nome}</strong> vai passar a ganhar <strong>R$ ${soma}</strong>!</br>`
}