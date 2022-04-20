function verificar() {
    let res = document.querySelector('div.res')

    let nomedoaluno = window.prompt('Qual o nome do Aluno?')
    let primeiranota = window.prompt(`Primeira nota de ${nomedoaluno}:`)
    let segundanota = window.prompt(`Segunda nota de ${nomedoaluno}`)
    
    let nota1 = primeiranota.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    let nota2 = segundanota.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    let divisao = 2
    let soma = Number(primeiranota)+Number(segundanota)
    let media = Number(soma)/Number(divisao)

    res.innerHTML = ''
    res.innerHTML += `<p>Com as notas <strong>${primeiranota}</strong> e <strong>${segundanota}</strong>, a média é <strong>${media.toFixed(1).replace(".", ",")}</strong>.</p>`
    if (media < 3,0) {
        res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está REPROVADO.</p>`
    } else if (media == 3,0 || 6,0) {
        res.innerHTML += `<p>Com a média èntre 3,0 e 6,0, o aluno está de RECUPERAÇÃO.</p>`
    } else if (media > 6,0) {
        res.innerHTML += `<p>Com a média ácima de 6,0, o aluno está APROVADO.</p>`
    }
}