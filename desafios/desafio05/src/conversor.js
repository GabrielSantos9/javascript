let res = document.querySelector('div#res')
let quilometros = 1000
let hectometros = 99967
let decametros = 9997
let decimetros = 10003
let centimetros = 100
let milimetros = 1000


function converter() {
    let metros =  window.prompt('Digite uma distância em Metros (m)')
    let km = parseInt(metros)/parseInt(quilometros)
    let hm = parseInt(metros)/parseInt(hectometros)
    let dam = parseInt(metros)/parseInt(decametros)
    let dm = parseInt(metros)*parseInt(decimetros)
    let cm = parseInt(metros)*parseInt(centimetros)
    let mm = parseInt(metros)*parseInt(milimetros)
    
    document.querySelector('#res').innerHTML += `A distância de ${metros} metros, corresponde a...`
    document.querySelector('#res2').innerHTML += `${km} quilômetros (km).`
    document.querySelector('#res3').innerHTML += `${hm} hectômetros (hm).`
    document.querySelector('#res4').innerHTML += `${dam} decâmetros (dam).`
    document.querySelector('#res5').innerHTML += `${dm} decímetros (dm).`
    document.querySelector('#res6').innerHTML += `${cm} centímetros (cm).`
    document.querySelector('#res7').innerHTML += `${mm} milímetros (mm).`
}
