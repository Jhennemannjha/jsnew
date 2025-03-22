for (let i = 0; i <= 10; i += 2) {
    //%divizivel
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
/*
0 par
2 par
4 par
6 par
8 par
10 par
*/


}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Luiz',
    'Otávio', 'João', 'Miranda'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
/*
Índice 0 Maçã
Índice 1 Pêra
Índice 2 Uva
Índice 3 Luiz
Índice 4 Otávio
Índice 5 João
Índice 6 Miranda
*/
}