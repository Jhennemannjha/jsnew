/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
I
*/
const nome = 'Luiz Otávgio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84 ;
const altura = 1.80;
let imc;
imc = peso /(altura *altura);
let anoDeNascimento = 2024 - idade 

//exercicio
//pode ser assim
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc, 'e nasceu no ano de', anoDeNascimento);
//ou assim
console.log(nome +''+ sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoDeNascimento, '.');
//ou assim
//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}.`);
 
