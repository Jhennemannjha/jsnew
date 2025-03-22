//função auto Invocada
//IIFE -> Immediately invoked function expression
//para fugir do escopo global 
// cria uma função e joga tudo para dentro
function qualquerCoisa() {
    console.log(531646541);
}
qualquerCoisa();

//para criar uma função que e invocada automaticamente
//me protege do escopo global
(function (idade, peso, altura/*PARAMETROS*/) {
    const sobrenome = 'hennemann';
    function criaNome(nome) {
        return nome + " " + sobrenome + ' ' + idade;
    }
    function falaNome() {
        return criaNome('junior');
    }
    console.log(criaNome());//undefined hennemann 33
    console.log(falaNome());//junior hennemann 33
    console.log(idade, peso, altura);//33 90 1.8
    //Nada que estiver aqui dentro toca o escopo Global
})(33, 90, 1.80/*ARGUMENTOS*/);
