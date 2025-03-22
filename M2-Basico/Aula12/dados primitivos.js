////////////// Dados Primitivos //////////////////
//String, Number, undefined, null e Symbol (simbol e falado mais a frente)
const nome = 'Luiz1'; // string
const nomel = "Luiz1"; // string
const nome2 = "Luiz1"; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória mas pode retornar valor
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória e nao retorna valor
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome, nome) ; //Typeof mostra tipo e valor da variavel ou constante.

//sinal de = e chamado de operador de atribuição

//operação com dados primitivos

let a = 2;
let b = a;
console.log(a, b); 
a = 5;
console.log (a,b);

/*resposta de dados primitivos
2 2
5 2
nao altera valor de b*/

