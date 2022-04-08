function converter() {
    let res = document.querySelector('.div1')
    let celsius = (window.prompt('Digite uma temperatura em °C (Celsius).'))

    // kelvin
    let somak = "273.15"
    let contak = parseInt(celsius)+parseInt(somak)

    // fahrenheit
    let dividir1 = 9
    let dividir2 = 5
    let totaldividir = parseInt(dividir1)/parseInt(dividir2)
    let somaf = 32
    let contaf = parseFloat(totaldividir)*parseInt(celsius)
    let tot = parseInt(contaf)+parseInt(somaf)


    // Resultado na tela
    res.innerHTML += ''
    res.innerHTML += `A temperatura de<strong> ${celsius}°C</strong>, corresponde  a...<br/>`
    res.innerHTML += `<strong>${contak}°K</strong> (Kelvin)<br/>`
    res.innerHTML += `<strong>${tot}°F</strong> (Fahrenheit)<br/>`
}