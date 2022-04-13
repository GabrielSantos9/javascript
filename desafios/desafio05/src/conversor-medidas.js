function converter() {
    let res = document.querySelector('div.res')

    let metros =  window.prompt('Digite uma distância em Metros (m)')
    let km = Number(metros)/Number(1000).toFixed(3)
    let hm = Number(metros)/Number(100).toFixed(3)
    let dam = Number(metros)/Number(10).toFixed(3)
    let dm = parseFloat(metros)*Number(10)
    let cm = parseFloat(metros)*Number(100)
    let mm = parseFloat(metros)*Number(1000)
    
    res.innerHTML += `A distância de <strong>${metros}</strong> metros, corresponde a...</br>`
    res.innerHTML += `<strong>${km}</strong> quilômetros (km).</br>`
    res.innerHTML += `<strong>${hm}</strong> hectômetros (hm).</br>`
    res.innerHTML += `<strong>${dam}</strong> decâmetros (dam).</br>`
    res.innerHTML += `<strong>${dm}</strong> decímetros (dm).</br>`
    res.innerHTML += `<strong>${cm}</strong> centímetros (cm).</br>`
    res.innerHTML += `<strong>${mm}</strong> milímetros (mm).</br>`

}
