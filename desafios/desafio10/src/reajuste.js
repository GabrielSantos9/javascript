function calculo() {
    let res = document.querySelector('div.res') 

    let va = Number(prompt('Qual é o valor de a?'))
    let vb = Number(prompt('Qual é o valor de b?'))
    let vc = Number(prompt('Qual é o valor de c?'))
    let vd = Number(vb**2) - (4*va*vc)  

    
     res.innerHTML = ''
     res.innerHTML += `<p><strong>Resolvendo Bhaskara</strong></br></p>`
     res.innerHTML += `<p>A equação atual é <strong>${va}x² + ${vb}x + ${vc} = 0</strong>.</br></p>`
     res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${vb}²- 4 . ${va} . ${vc}</strong>.</br></p>`
     res.innerHTML += `<p>O valor calculado foi <strong>&Delta; = ${vd}</strong></br></p>`
}