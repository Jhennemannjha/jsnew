////// Operadores Aritmeticos ////////// 
/**
 * + Adição e concatenação
 * - * / e 
 * ** (potenciação "exemplo 2 elevado a 10 ")
 * % Resto da divisao
 * Precendencias
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + -
 * 
 */

//Adição
const num1 = 5;
const num2 = 7;
console.log (num1 + num2); // = 12

//concatenação
const num3 = '5';
const num4 = 7;
console.log (num3 + num4); // = 57

//potenciação
const num5 = 5;
const num6 = 7;
console.log (num5 ** num6); // = 78125

//% Resto da divisao
const num7 = 10;
const num8 = 3;
console.log (num7 % num8); // = 1
console.log(num7/num8);//3.3333333333333335


////// Operadores de Incremento //////////
//++ operador de incremento (não pode usar numa constante)
// * -- operador de decremento

// ++ operador de incremento
let quant = 1;
quant++; // = 2
quant++; // = 3
++quant; // = 4 (pode usar antes ou depois da variavel)
quant++; // = 5
console.log(quant); 

// -- operador de decremento
let quant1 = 10;
quant1--; // = 9
quant1--; // = 8
--quant1; // = 7 
quant1--; // = 6
console.log(quant1); 


////// Operadores de Atribuições //////////
//+= *= /= **=operadores de atribuição

//+= (contador + contrador)
let passos = 5;
let contador = 2;
contador += passos; // = 7
contador += passos; // = 12
contador += passos; // = 17
console.log (contador); 

let passos1 = 5;
passos1 **= 2; // = 25
passos1 **= 2; // = 625
passos1 **= 2; // = 390625
console.log (passos1);

let passos2 = 5;
passos2 /= 2;// = 2.5
passos2 /= 2;// = 1.25
passos2 /= 2;// = 0,625
console.log (passos2);


//NaN = Not a Number 
// e quando deu erro no calc por tipagem

const num12 = 10;
const num22 = parseInt('5.2'); //parseInt converte um numero que esta em um string em numero inteiro
const num23 = parseFloat('5.2'); //parseInt converte um numero que esta em um string em numero flutuante 
const num24 = Number('5.2'); //parseInt converte um numero que esta em um string em qualquer tipo de numero
console.log(num12+num22); // =15
console.log(num12+num23); // =15.2
console.log(num12+num24); // =15.2