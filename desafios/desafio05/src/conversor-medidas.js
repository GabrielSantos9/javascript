function converter() {
    let res = document.querySelector('div.res')
    let quilometros = 1000
    let hectometros = 99967
    let decametros = 9997
    let decimetros = 10003
    let centimetros = 100
    let milimetros = 1000

    let metros =  window.prompt('Digite uma distância em Metros (m)')
    let km = parseInt(metros)/parseInt(quilometros)
    let hm = parseInt(metros)/parseInt(hectometros)
    let dam = parseInt(metros)/parseInt(decametros)
    let dm = parseInt(metros)*parseInt(decimetros)
    let cm = parseInt(metros)*parseInt(centimetros)
    let mm = parseInt(metros)*parseInt(milimetros)
    
    res.innerHTML += `A distância de <strong>${metros}</strong> metros, corresponde a...</br>`
    res.innerHTML += `<strong>${km}</strong> quilômetros (km).</br>`
    res.innerHTML += `<strong>${hm}</strong> hectômetros (hm).</br>`
    res.innerHTML += `<strong>${dam}</strong> decâmetros (dam).</br>`
    res.innerHTML += `<strong>${dm}</strong> decímetros (dm).</br>`
    res.innerHTML += `<strong>${cm}</strong> centímetros (cm).</br>`
    res.innerHTML += `<strong>${mm}</strong> milímetros (mm).</br>`

}
