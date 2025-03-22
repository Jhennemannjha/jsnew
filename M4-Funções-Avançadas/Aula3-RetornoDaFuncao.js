//Return
//retorna valor
//Termina função
//console.log nao retorna nada so mostra diferente de return

function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3))//5



function soma2(a, b) {
    console.log(a + b);
}
soma2(2, 3)//5

//existe função que retorna e funções que nao retorna nada dependendo o contesto
//como essa que apenas muda o fundo do body sem retornar valor
//Deixar comentado pois nao da para usar no console do nood
/*document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
    //onde clicar no navegador fica vermelho
});*/

//rerono d eum objto
function criaPessoa(nome, sobrenome) {
    // return {nome : nome, sobrenome: sobrenome}
    //Nao a necessidade de repedir qwuando os nomes forem iguais
    return { nome, sobrenome };
}
console.log(criaPessoa('junior', 'Hennemann'));//{ nome: 'junior', sobrenome: 'Hennemann' }
const p1 = criaPessoa('junior', 'Hennemann')
console.log(p1);//{ nome: 'junior', sobrenome: 'Hennemann' }
//mostrar que e a mesma coisa mas a função ja criou os objtos
const p2 = {
    nome: 'junior',
    sobrenome : "Hennemann"
}
console.log(p2);//{ nome: 'junior', sobrenome: 'Hennemann' }

//mostra que tipo de dado é
console.log(typeof p1);//object porq p1 = a function criaPessoa que retorna objeto
console.log(typeof p2);//object porq mesma coisa

console.log('/////////////////////////////////////////')
///PEga a complexidade
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('oi');
const resto = fala ('mundo!');
console.log(fala);//[Function: falaResto]
console.log(resto);//oi mundo!

//Quando usa essa complexidade
/*

function duplica(n){
    return n * 2;
}
function tripilica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}
*/
function criaMultiplicador (multiplicador){
    //multiplicador
    return function (n) {
        return n * multiplicador;
    }  
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);

console.log(duplica(2));//4
console.log(triplica(2));//6
console.log(quadriplica(2));//8
