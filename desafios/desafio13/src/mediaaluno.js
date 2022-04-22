function verificar() {
    let res = document.querySelector('div.res')

    let nomedoaluno = window.prompt('Qual o nome do Aluno?')
    let primeiranota = window.prompt(`Primeira nota de ${nomedoaluno}:`)
    let segundanota = window.prompt(`Segunda nota de ${nomedoaluno}`)
    
    // let nota1 = primeiranota.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    // let nota2 = segundanota.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    let divisao = 2
    let soma = Number(primeiranota)+Number(segundanota)
    let media = Number(soma)/Number(divisao)

    console.log(media)

    let reprovado = 3
    let recuperacao = 3 && 6 
    let aprovado =  6

    res.innerHTML = ''
    res.innerHTML += `<p>Com as notas <strong>${primeiranota.replace(".", ",")}</strong> e <strong>${segundanota.replace(".", ",")}</strong>, a média é <strong>${media.toFixed(1).replace(".", ",")}</strong>.</p>`
    if (media < 3) {
        res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <mark class=mrk1>REPROVADO</mark>.</p>`
    } else if (media > 4) {
        res.innerHTML += `<p>Com a media entre 3,0 e 6,0, o aluno está de <mark class=mrk2>RECUPERAÇÃO</mark>.</p>`
    } 
    // else {(media > aprovado) 
    // res.innerHTML += `<p>Com a média acima de 6,0, o aluno está <mark class=mrk3>APROVADO</mark>.</p>`
    // }
}