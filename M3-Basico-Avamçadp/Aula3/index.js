/*
Operadores
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NAO
*/

const usuario = 'Luiz' ; // form usuário digitou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);//true
const vaiLogar1 = usuario === 'Luiz' && senha === '123457';
console.log(vaiLogar1);//false
const otimista = 'bonito'
const pesimista = 'tomo banho'
const oqueFazer =  otimista === "feio" || pesimista === "tomo banho";
console.log(oqueFazer);//true
const oqueFazer2 =  otimista === "bonito" || pesimista === "não tomo banho";
console.log(oqueFazer2);//true
console.log(!false);//true
console.log(!true);//false