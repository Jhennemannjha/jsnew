//Funções ==executa oçoes = function
function saudacao (/* aqui se coloca inputs ou paramentros "nome" */ nome) { //corpo da função
    //Não e possivel editar nada da funçao fora do corpo da função
    console.log(`Bom Dia ${nome}`)//Bom Dia Luiz  //Bom Dia Maria
}
// devo chamar a função apos
//quando executo saudacao aqui e baixo executa a função
saudacao(/* Aqui se coloca argumentos que sera atribuido a nome que esta no parametro função */"Luiz");
saudacao(/* funções pode ser reaproveitada */"Maria");
// se eu nao colocar saudacao(); nao executa a função

//para retornar algo da função
function saudacao1 (nome) { 
    return `Bom Dia ${nome}`;
    //abaixo de retarne o programa nao le nada abaixo na função
    console.log("ola Mundo")//Nao retorna nada pois a função acabou no return
}
const retornaFuncao = saudacao1('Junior');
console.log(retornaFuncao);//Bom Dia Junior


//Funçap recebendo 2 valores
//caso eu nao envie nenhum valor o parametro assume
function somar (x = 0, y = 0){
    //eu nao consigo acessar a variavel resultado de fora da funcao
    const resultado = x + y
    return (resultado)
}
const resultado = (somar(2,5));
const resultado2 = (somar());
console.log(resultado);//7
console.log(resultado2);//0


//nao e certo mas posso criar variavelk com mesmo nome se uma estiver
//dentro da funça~e outra fora ex:
function somar1 (x, y){
    //eu nao consigo acessar a variavel resultado de fora da funcao
    const resultado1 = x + y
    return (resultado1)
}
const resultado1 = (somar1(5, 5));
console.log(resultado1);//10

//Criando função anonima = Função dentro de uma variavel
const raiz = function /* anonima pois nao tem nome e a propria variavel*/ (/* receberar o valor */ n) {
    const raizDeN = n ** 0.5
    return raizDeN
};
//vai o ponto e virgula; pois e o final de uma variavel e nao da funçap
//lembrando que final de função nao vai ;
console.log(raiz(9));//3

//Novo metodo de declarar função erolfunction
const raiz1 = (n)=>{
    const raizDeN = n ** 0.5
    return raizDeN
};
//vai o ponto e virgula; pois e o final de uma variavel e nao da funçap
//lembrando que final de função nao vai ;
console.log(raiz1(16));//4

// QUando e apenas uma linha, nem precisa de chaves 
const raiz2 = n => n ** 0.5
console.log(raiz2(20));//4.47213595499958

