// console.log(this)

function Usuario() {
    this.nome = 'Gasaz'
    this.idade = 27;
    this.soma = function(a, b) {
      return a + b;
    }

  }

  // Usuario();

  var usuario = new Usuario();
  console.log(usuario)

  console.log(usuario.nome);
  console.log(usuario.idade);
  console.log(usuario.soma(10, 4));


  // call
  // 
  function Personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('personagem this', this)
  }

  var personagemThis = {
    nome: 'Gasaz'
  }

  // Personagem.call(personagemThis, 'param1', 123, [5])


  // Apply
  // var personagemParams = ['param2', 23, [1, 2, 3]];
  // Personagem.apply(personagemThis, personagemParams)

  // bind
  // 
  
  var pers = Personagem.bind(personagemThis, 'Olá')
  pers('Mundo', '!!!')

  // Arrow Functions

  var soma = (a, b) => {
    return a + b
  }
  console.log(10, 10)

//forma mais curta
// var soma = (a, b) => a + b
// console.log(soma(10, 11))

var soma = (a, b) => (
  a + b
)
console.log(soma(10,11))

// var retornaUsuario = () => (
  // {
    // nome: 'Gasaz',
  // idade: 19,
  // estado: 'São Paulo'
// }
// )
// console.log(retornaUsuario)

var retornaUsuario = cidade => (
  {
    nome: 'Gasaz',
    idade: 19,
    cidade
  }
)
console.log(retornaUsuario('Arujá'))