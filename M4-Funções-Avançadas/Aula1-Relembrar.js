//Declaração de função (function hoisting = so ocorre se declarar dessa forma a baixo = posso chamar a função antes de declarala )
falaOi();
function falaOi(){
console.log("oi");
}

//First-class objects (Objetos de primeira classe)
//Significa que a função pode ser tratada com uma dado  
//que quer dizer criar uma expreção como um dado
//Function expression
//Ex:
const souUmDado = function(){
    console.log('sou um dado');
};
souUmDado();

//com isso posso jogar a variavel dentro de outra função
function executaFuncao(funcao){//(funcao e um paramentro = variavel que irei receber)
    funcao();
}
executaFuncao(souUmDado);//aqui estou chamando a função
// dizendo que o paramentro 'funca'o esta executando 
// a variavel souUmDado

//Arrow function = Function expression mais curta
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
}
obj.falar();

//ou pode ser assim 

const obj2 = {
    falar () {
        console.log('cnt falando...');
    }
}
obj2.falar();

//até aqui as funçãos sao objtops de primeiro grau
///////////////////////////////////////////////////////////////////////////////////