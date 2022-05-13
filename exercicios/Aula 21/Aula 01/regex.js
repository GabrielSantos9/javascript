110290-i                        //^[0-9]+[-][a-z]$
597735-k                        //^[0-9]+[-][a-z]$
12890301-f                      //^[0-9]+[-][a-z]$

// 307.626.860-33                  //[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}

2010-12-20
20/12/2010                      //([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})

                                            // --- //
                                            
// g - global (encontra todas as ocorrências)
// i - insensitive 
// (()()) grupos
// | ou

const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}