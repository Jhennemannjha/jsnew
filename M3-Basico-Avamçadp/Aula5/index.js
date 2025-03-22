//if
const hora1 = 13;
if (hora1 < 12) {
    console.log("hora de Acordar");
} else if (hora1 > 12) {
    console.log("Continua Dormindo");
}
/*
exercicio
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
const hora = 50;
if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 16 && hora <= 23) {
    console.log("Boa noite");
} else { console.log("Hora Errada"); }; 

//o if com else if para na primeira verdade
