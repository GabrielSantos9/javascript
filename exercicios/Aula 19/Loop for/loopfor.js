                                            //Loop For 
// É simplesmente semelhante ao While, só que não precisa cirar contador fora do while, ou  encremento, isso tudo faz parte do FOR.
//ex:
    //Inicializador    //Condicional  //Interação
for (var contador = 0; contador < 10; contador ++) {
    console.log(contador)
}

//* O FOR é bom também para terar solo uma Array.
//ex:
var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13]; //o contador vai percorrer até a quantidade de elementos que tem essa Array.
for (var contador = 0; contador < numerosAleatorios.length; contador++) {
// o .length vai trazer a quantiedade de valores que tem nessa Array.
    console.log(`${contador} - ${numerosAleatorios[contador]}`);
} //o "${contador}" é a posição, oq ue ele está imprimindo. / e o "[contaodr]" é a posição do Array.
//De vez você ficar Imprimindo manualmente o valor de cada Array([0, 1, 2, 3, ...]), você simples coloca em um loop e Imprimi automaticamente.

                                            // --- //

//* Com o Loop FOR podemos também fazer decrementos, ou seja, no anterior fizemos encremento(++), mas também podemos fazer o Decremento(--)
//ex:
                //Inicializador           //Condicional  //Interação
for (var i = numerosAleatorios.length - 1; i >= 0; i--) {
    //o valor inicial do var tem que ser o ultimo, porquê ele já vai descendo, o inicializador ñ pode ser 0, e sim o maximo, pq se eu for descendo, diminuindo, entao o inicializador não pode ser 0, pq se eu for descendo o valor então tem que ser 0, então o valor inicial tem que ser o máximo.
    //o ".length vai retornar 7, porquê esse array tem 7 elementos, só que começa a contar a partir de 0, então não é 7, e sim 6, ai teremos que colocar a colocar -1 no lado da length."
    //a Interação vai ir dimunuindo até enquanto o i for menor ou igual a 0.
    console.log(`Posição ${i} com descremento: ${numerosAleatorios[i]}`);
}

//* Usamos muito o FOR para percorrer uma Array ou Imprimir números, mas nem sempre é preciso ter número envolvido, ter array envolvido, basta uma expressão booliana para que a gente trabalhe com FOR.
//ex:
var contador = true;
var condicao = 1;

for (; condicao; ) {
    if (contador % 5 === 0) {
        condicao = false;
    }
    console.log(`Condição booleana simples: ${contador}`);
    ++contador;
}

                                                // --- //

//* No Loop For assim como no While, eu tenho a palavra reservada break, então eu consigo interromper um FOR.
//ex:
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(`Utilizando break ${i}`);
}

                                                // --- //

//* Uma palavra reservada que parece com o "break" é o "continue", ela também tem no While. Se utiliza o "continue" palavra e o seu Loop a partir dessa palavra para baixo não vai ser mais executado, só que ele vai continuar o Loop, ou seja, ele vai voltar de novo no Loop e vai interar  o próximo valor, mas a partir da palavra "continue" para baixo, ele não executa o código.
//ex:
for (var i = 0; i < 50; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log('Utilizando continue', i);
}

//* Existe uma outro forma de fazer for, que é o "FOR OF", que ele é um atalho para quando estamos interando uma ARRAY.
//ex:
var numerosAleatorios = [3, 5, 10, 2, 19, 21,13];
for (var num of numerosAleatorios) {
    console.log('for of', num);
}
//* O que esse "FOR OF" faz ?
//ele é um atalho para o FOR comum, porquê ele vai percorrer na Array e já vai armazenar a variável.
//ex:
var num = [3, 5, 10, 2, 19, 21, 13];

                                                    // --- //

//* Agora no Loop normal, vou mostar como faz um Loop dentro de outro Loop.
//ex:
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 50; j++) {
        if (j % 2 === 0) {
            continue;
        }

        if (j > 7) {
            break;
        }

        console.log(`i: ${i}; j: ${j}`);
    }
}

                                                    // --- //

//* Agora, vamos fazer o mesmo PING-PONG que foi feito no while, e vamos usar o FOR normal.
for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'PING PONG');
    } else if (i % 3 === 0) {
        console.log(i, 'PING');
    } else if (i % 5 === 0) {
        console.log(i, 'PONG');
    }
}