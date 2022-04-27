//  var novoUsuario = {
//     nome: 'Gabriel',
//     idade: 27,
//     pais: 'Brasil',
//     youtube: 'Gasazfps'
// };  
//*Destructuring --> De um lado onde boto as variáveis, passando {} em todas as propriedades que eu quero,e do outro sinal de igual eu boto o nome do Objeto.

       //PROPRIEDADES   //NOME DO OBJETO
// var {nome, pais, idade} = novoUsuario; 
// console.log(nome, pais, idade);
//Então automaticamente ele vai extrair com esses nomes que eu boto do Objeto.

//*Como dizer a propriedade que eu quero extrair, mas quero que ele armazene na variável de outro nome.
//ex:
    //Ayrton //NOVA VAR...
// var {nome: primeiroNome} = novoUsuario;
// console.log(primeiroNome);
//Agora a propriedade "nome" tem uma variável! (Está armazenada em uma variável)

//Outro ex:
// var {youtube: canal} = novoUsuario;
// console.log(canal)

                                                // --- //

//*Com o destructuring eu consigo extrair propriedades de um objeto que está dentro de outro objeto, que está dentro de outro objeto, mesmo que seja filho, do filho,de filho.
//ex:
// var novoUsuario2 = {
//     nome: {
//         primeiro: 'Gabriel Jr',
//         ultimo: 'Goku'
//     }
// };
 //OBJ PAI    //Gabriel JR     //VAR
// var {nome: {primeiro}} = novoUsuario2;
// console.log(primeiro);

//*Caso você venha extrair uma propriedade de um objeto que venha não existir por algum motivo, você consegue dizer: se não  existir salve esse valor(usando DESTRUCTURING).
//ex:
// var {nome: {segundo = 'Vegeta'}} = novoUsuario2;
// console.log(segundo);   //|-> caso não tenha a propriedade "segundo" no Objeto, 
                        //ira usar essa propriedade.

                                                  // --- // 

//*A gente consegue usar Destructuring com parâmetro de uma função, ou seja, vamos dizer que você criou uma função que vai receber um objet com um parâmetro e você passe esse objeto, e na hora que você recebe essa função dentro do próprio parâmetro da função você consegue extrair, mas se você receber um projeto inteiro, você diz que só quer apenas aquelas tais propriedades.
    //Sem o Destructuring 
    // function imprimeUsurario(usuario) {
    //     console.log(usuario.nome);
    //     console.log(usuario.idade);
    //     console.log(usuario.sexo);
    // }
    // var usuarioFunction = {
    //     nome: 'Sophia',
    //     idade: 27,
    //     sexo: 'F'
    // }
    // imprimeUsurario(usuarioFunction)

    //Com o Destructuring
    // function imprimeUsurario({nome, idade, sexo, pais = 'Eua'}) {
    //     console.log(nome);
    //     console.log(idade);
    //     console.log(sexo);
    //     console.log(pais);
    // }
    var usuarioFunction = {
        nome: 'Sophia',
        idade: 27,
        sexo: 'F',
        pais: 'Brasil'
    };
    // imprimeUsurario(usuarioFunction);
//logo, de vez receber um objeto inteiro, eu posso dizer quais as propriedades do objeto que eu quero Extrair.

//*Dois objetos legais do objeto OBJECT do JS para você usar com objetos no JS.
// console.log(Object.keys(usuarioFunction));
//Imprime uma Array[] com todas as chaves do meu objeto.
// console.log(Object.values(usuarioFunction));
//Imprime os valores do meu objeto.