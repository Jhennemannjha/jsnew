//argumetos que sustenta todos os argumentos enviados

function funcao() {
    console.log(arguments[6]);
    console.log(arguments);
}
funcao(1, 2, 3, 4, 5, 6, 'valor', 7, 8, 9, 10);
console.log('/////////////////////////////////////////');

//pode fazer
function calculo(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
calculo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log('/////////////////////////////////////////');

//undefined
function calculo2(a, b, c, d, e, f) {

    console.log(a, b, c, d, e, f);
}
calculo2(1, 2, 3);//1 2 3 undefined undefined undefined

console.log('/////////////////////////////////////////');

//NaN
function calculo3(a, b) {

    console.log(a + b);
}
calculo3(3);//NaN pois 2+ undefined = NaN

console.log('/////////////////////////////////////////');

//Resolver NaN
function calculo4(a, b = 2) {
    //Maneira antiga
    // b = b || 2;

    console.log(a + b);
}
calculo4(3, 5);//8
calculo4(3);//5

console.log('/////////////////////////////////////////');

//Para assumir no meio do caminho só com Undefined
function calculo5(a, b = 2, c = 10) {
    //Maneira antiga
    // b = b || 2;

    console.log(a + b + c);
}
calculo5(3, undefined, 6);//11
calculo5(3, NaN, 6);//NaN
calculo5(3, "", 6);//concateno 36
calculo5(3, false, 6);//9
calculo5(3, null, 6);//9

console.log('/////////////////////////////////////////');

//obj
function novaFuncaoObj({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
novaFuncaoObj({ nome: 'junior', sobrenome: 'Hennemann', idade: 33 })//junior Hennemann 33

//ou
function novaFuncaoObj2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'junior', sobrenome: 'Hennemann', idade: 33 }
novaFuncaoObj2(obj);//junior Hennemann 33
console.log('/////////////////////////////////////////');

//Arrewy
function novaFuncaoArrey([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
novaFuncaoArrey(['junior', 'Hennemann', 33])//junior Hennemann 33

console.log('/////////////////////////////////////////');

//Conta ...resteopereiton (o resto e do ultimo parametro)
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador=== '+') acumulador += numero;
        if (operador=== '-') acumulador -= numero;
        if (operador=== '*') acumulador *= numero;
        if (operador=== '/') acumulador /= numero;

    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50)//140
conta('-', 1, 20, 30, 40, 50)//-139
conta('*', 1, 20, 30, 40, 50)//1200000
conta('/', 1, 20, 30, 40, 50)//8.333333333333334e-7

//pode er assim

let conta1 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador=== '+') acumulador += numero;
        if (operador=== '-') acumulador -= numero;
        if (operador=== '*') acumulador *= numero;
        if (operador=== '/') acumulador /= numero;

    }
    console.log(acumulador);
}
conta1('+', 0, 20, 30, 40, 50)//140
conta1('-', 1, 20, 30, 40, 50)//-139
conta1('*', 1, 20, 30, 40, 50)//1200000
conta1('/', 1, 20, 30, 40, 50)//8.333333333333334e-7

console.log('/////////////////////////////////////////');

//Conta ...resteopereiton (o resto e do ultimo parametro)
function conta3(operador, acumulador, ...numeros) {
    
    console.log(arguments);
   
}
conta3('+', 0, 20, 30, 40, 50);
//[Arguments] { '0': '+', '1': 0, '2': 20, '3': 30, '4': 40, '5': 50 }

console.log('/////////////////////////////////////////');

//Arguments Nao funciona no arrowfunction
let conta4 = (operador, acumulador, ...numeros) => {
    console.log(arguments);
}
conta4('+', 0, 20, 30, 40, 50);
//[Arguments] { '0': '+', '1': 0, '2': 20, '3': 30, '4': 40, '5': 50 }
