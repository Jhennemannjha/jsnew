//Escopo Lexico permite que a função puche qualquer variavel para dentro dafunção
//primeiro busca dentro da função
//caso n encontre busca fora da função
//isso e o ecopo lexico
const nome = "luiz";
function falaNome(){
    console.log(nome);
}
falaNome();//luiz 

//isso dei um parametro e chamei o parametro
const nome2 = "luiz";
function falaNome2(a){
    console.log(nome2 + " " + a);
}
falaNome2('calor');//luiz calor

console.log('//////////////////////////////');


//complica um pouco
const nome3= "joao";
function falaNome3(){
    console.log(nome3);//aqui esta acima de junior e abaixo de joao entao busca joao
}
function usaFala(){
    const nome3 = 'junior';//vai buscar o nome3 sempre acima 
    return falaNome3();
}
usaFala();//Joao