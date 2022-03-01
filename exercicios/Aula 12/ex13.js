var agora = new Date()
var diaSem = agora.getDay()

/*diaSem = Caso queira deixar como opção, ex: selecionar um número de 1 até 5.
Mas caso queira deixar opcional, tire o "console.log(diaSem)" (logo abaixo).*/

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabádo
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
         console.log('Domingo')
         break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break

    default: //caso tenha um número que não seja correspondente aos de cima. ex: 7,8,9,etc.
        console.log('[ERRO] Dia inválido!')
        break
}