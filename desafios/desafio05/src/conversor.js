let res = document.querySelector('div#res')

function converter() {
    let metros =  window.prompt('Digite uma distância em Metros (m)')
    let quilometros = parseInt(metros)/parseInt(1000)
    let hectometros = parseInt(metros)/parseInt(99967)
    let decametros = parseInt(metros)/parseInt(9997)
    let decimetros = parseInt(metros)*parseInt(10003)
    let centimetros = parseInt(metros)*parseInt(100)
    let milimetros = parseInt(metros)*parseInt(1000)
}
res.innerHTML = ''
res.innerHTML = `<p>${quilometros} quilômetros (Km).</p>`
res.innerHTML = `<p>${hectometros} hectometros (Hm).</p>`
res.innerHTML = `<p>${decametros} decametros (Dam).</p>`
res.innerHTML = `<p>${decimetros} decimetros (Dm).</p>`
res.innerHTML = `<p>${centimetros} centimetros (Cm).</p>`
res.innerHTML = `<p>${milimetros} milimetros (mm).</p>`
