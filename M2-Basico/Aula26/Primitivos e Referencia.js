/*
--*Primitivos (imutáveis)* - string, number, boolean, undefined,
null (bigint, symbol) - Valor Copiados


*/
let a = 'A';
let b = a; // A A = Cópia
console. log(a, b);

a = 'Outra coisa' ;
console.log(a, b);// Outra coisa A = B ja fez a copia e mesmo que atere o valor de a B ainda tera o primeiro valor de A



/*
--*ReferÊncia (mutaveis)* arrey, object, function --Valores passados por referencia
Imutaveis= não consegue aterar os valor dos index como arrey
*/
let c = [1, 2, 3];
let d = c; // como e um arrey ele nao faz uma copia mas sim aponta para o mesmo lugar na memoria
console. log(c, d);//[ 1, 2, 3 ] [ 1, 2, 3 ]
c[0]=5 //Altera nos dois
console. log(c, d);//[ 5, 2, 3 ] [ 5, 2, 3 ]
c.push (5)
console. log(c, d);//[ 5, 2, 3, 5 ] [ 5, 2, 3, 5 ]
d.pop ()
console. log(c, d);//[ 5, 2, 3 ] [ 5, 2, 3 ]
//como aponta para o mesmo lugar na memoria, se mudar em um muda nos dois

//cara copiar um mutalvel como um imutavel
let e = [1, 2, 3];
let f = [...e] //aqui estou dizendo que e para copiar e nao para apontar para a memoria
let g = f;
console.log(e, f, g);//[ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
f.push(4);
console.log(e, f, g);//[ 1, 2, 3 ] [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

//tambem posso fazer para objtos


const h = {
nome: 'Luiz',
sobrenome: 'Otávio'
};

const i = h;
const j = {...h}

h.nome = 'João' ;
console.log(i);//{ nome: 'João', sobrenome: 'Otávio' }//esta direcionado para a memoria

h.nome = 'João' ;
console.log(j);//{ nome: 'Luiz', sobrenome: 'Otávio' } copiou apenas oque a em h
