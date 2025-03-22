// Break e Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        continue;//pula mas continua
    }

    if (numero === 7 ){
        break;//termina o laço
    }
    console.log(numero);
}