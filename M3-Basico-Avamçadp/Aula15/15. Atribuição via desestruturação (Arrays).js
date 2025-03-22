////////////normal///////////////
let varA = 'A' ; // B
let varB = 'B' ; // C
let varC = 'C' ; // A
const originalA = varA
varA = varB;
varB = varC;
varC = originalA;

console. log(varA, varB, varC) ;//b c a
////////com atribuiçao com destruturação ////////////////////
let a = 'A' ; // B
let b = 'B' ; // C
let c = 'C' ; // A

const letras = [b, c, a];
[a, b, c] = letras; 

console.log(a, b, c);//b c a

////////com atribuiçao com destruturação ////////////////////
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero); //1000 20000

//////pegando o resto
///...rest = pegar resto; ...spread = distribuir
const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero1, segundoNumero2, ...resto] = numeros2;
console.log(primeiroNumero, segundoNumero); //1000 20000
console.log(resto);//[ 3000, 4000,5000, 6000,7000, 8000,9000]


////////////normal///////////////
const numeros3 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros3[1][2]);//6

////////com atribuiçao com destruturação ////////////////////
const numeros4 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const[,[,segundaOpcaoDoSegundoGrupo]] = numeros4;
console.log(segundaOpcaoDoSegundoGrupo);//5

//pode tbm fazer desse jeito mais sim a destruturação
const numeros5 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const[primeira, segunda, terceira] = numeros5;;
console.log(terceira[1]);//8