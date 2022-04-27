// É uma função de JS que executa um código enquanto ela for verdadeira.
//ex:
var contador = 0;
while (contador < 5) {
    console.log(contador);
    ++contador; //encrementar (adicionar +1)
}
//Enquanto for menor que 5, vou encrementar +1, até chegar no 5 e encerrar o Loop

                                                // --- //  

//*Existe uma palavra reservada no JS para você forçar o Loop, seja while, ou outro Loop que é o 'BREAK'.
//ex:
var contador = 0;
while (contador < 5) {
    if (contador === 3) {
        break;
    }
    console.log(contador);
    ++contador;
}
//Quando o contador chegar até o 3(for igual ao 3) elevai sair da interação e vai chamar o BREAK.

                                                // --- //
                                                
                                        //Pseudo-Algoritimos, uma lógica
//*Vamos imprimir do 0 a 100, e toda vez que esse contador que vou estar Imprimindo do 0 a 100 for multiplo de 3, eu vou imprimir PING, e toda vez que ele for multiplo de 5, vou Imprimir PONG, e toda vez que ele ofr multiplo de 3 e 5 ao mesmo tempo, vou imprimir PING-PONG.

var contador = 0;

while (contador < 100) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} - PING PONG`);
    } else if (contador % 3 === 0) {
        console.log(`${contador} - PING`);
    } else if (contador % 5 === 0) {
        console.log(`${contador} - PONG`);
    }
    ++contador;
} 