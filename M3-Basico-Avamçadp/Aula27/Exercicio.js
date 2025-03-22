// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

//Retornar verdadeiro o falso se o numero e inteiro
/*console.log(Number.isInteger(num1));//False
console.log(Number.isInteger(num2));//True*/


function divisívelPor(x) {
    if (Number.isNaN((x / 3) || (x / 5))) {
        return "Só aceitamos Number"
    }
    if ((Number.isInteger(x / 3)) && (Number.isInteger(x / 5))) {
        return "FizzBuzz"
    }
    if (Number.isInteger(x / 3)) {
        return "Fizz";
    }
    if (Number.isInteger(x / 5)) {
        return "Buzz"
    }
    return "Não e Divizivel";


}
console.log(divisívelPor("aaaa"));
////////////////////////////////////////////////////////////
//Correto

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))

}