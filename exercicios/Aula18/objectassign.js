//var usuario1 = {
//    nome: 'Gasaz',
//    idade: 18
//};
//
//var extrainfo = {
//    pais: 'Brasil',
//    estado: 'São Paulo'
//};

//
//

// *Juntar os dois objetos apenas em um, usando object.assign().

//var novousuario = Object.assign({}, usuario1, extrainfo);
//console.log(novousuario)

//
//

// *Juntar os dois objetos sem criar um novo Objeto. 
//Object.assign(usuario1, extrainfo);

//
//

// *Vai coloar o "extrainfo" para o objeto alvo (usuario1)
//console.log('usuario1', usuario1)

//
//

// *Outra forma de se fazer, uma forma mais CURTA.
//var novousuario2 = {
//    ...usuario1,
//    ...extrainfo,
//    Sexo: 'M',                      // para adicionar mais informações,                              
//    Profissao: 'Programador'        //  dentro do objeto "novousuario2".
//}; 
//os "..." significa ESPALHAMENTO, que fique os objetos "usuario1" e "extrainfo" juntos, na janela do novo objeto "novousuario2"
//console.log(novousuario2)

// 
//

// *Passando o nomke da propriedade de forma dinâmica.
//var nomeestado = 'Estado';
//var nome = 'LastName';
//
//var usuario3 = {
//    [nome]: 'Gasaz',                //LASTNAME
//    [nomeestado]: 'São Paulo'       //ESTADO
//};
//console.log(usuario3)

//
//

// GETTERS E SETTERS
var usuarios = [
        { // "{}" - VALORES
                nome: 'Gasaz',              //VALOR// 
                idade: 18                     //0//
        },
        {
                nome: 'Maria',              //VALOR//
                idade: 19                     //1//
        },
        {
                nome: 'Ronald',             //VALOR//
                idade: 20                     //2//
        }
];
console.log(usuarios[0].idade);

var usuario = {
        posicao: 0,
        get atual() {
                return usuarios[this.posicao]
        },
        set atual(posicao) {
                this.posicao = posicao;
        },
        proximo() {
                ++this.posicao;
        },
        anterior() {
                --this.posicao
        },
};

console.log(usuario.atual); // { nome: 'Gasaz', idade: 18 }
usuario.proximo();

console.log(usuario.atual); // { nome: 'Maria', idade: 19 }

usuario.proximo();
console.log(usuario.total); // { nome: 'Ronald', idade: 20 }

usuario.anterior();
console.log(usuario.total); // { nome: 'Maria', idade: 19 }

usuario.atual = 0;
console.log(usuario.total); // { nome: 'Gasaz', idade: 18 }

usuario.atual = 2;
console.log(usuario.total); // { nome: 'Ronald', idade: 20 }

