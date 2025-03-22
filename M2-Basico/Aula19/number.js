let num1 = 1500.548635241; //frectal
let num2 = 2;//inteiro
console.log (num1+num2);//1502.548635241
//transformar um Number em um String mas sem mudar a variavel pois esta apenas dentro do console toString
//altera para sempre seria num1 = num1.toString
console.log(num1.toString() + num2);//1500.5486352412 concatenou o dois no final do num1 que nesse console se torna uma string
//representação Binaria
console.log(num1.toString(2));//10111011100.100011000111001101011011111100011000011101
//dizer quantos numes apos a virgula aparesa
console.log(num1.toFixed(2));//1500.55
//Retornar verdadeiro o falso se o numero e inteiro
console.log(Number.isInteger(num1));//False
console.log(Number.isInteger(num2));//True
//NaN e quando sua conta deu errado 
//descobrir se e NaN
console.log(isNaN(num1));//false
//agora pedir para retornar true ou false se deu errado ou nao
//se a conta for invalida (deu erro) retornara um true
let temp = num1* "oi";
console.log(temp);//NaN
console.log(Number.isNaN(temp));//true

//para tirar a impresizao do numeros usar o Number

let num3 = 1.999999988888
console.log(num3.toFixed(2));//2
console.log(Number.isInteger(num3));//false

//perceba que mesmo aredondando ele nao retorna inteiro
//para arrumar
let num4 = 1.999999988888
num4 = Number(num4.toFixed(2));
console.log(num3.toFixed(2));//2
console.log(Number.isInteger(num4));//true
console.log(Number.isInteger(num3));//false
