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
    let contaf = parseInt(celsius)*parseInt(totaldividir)+parseInt(somaf)


    // Resultado na tela
    res.innerHTML += ''
    res.innerHTML += `A temperatura de ${celsius}°C, corresponde  a...`
    res.innerHTML += `${contak}°K (Kelvin)`
    res.innerHTML += `${contaf}°F (Fahrenheit)`
}