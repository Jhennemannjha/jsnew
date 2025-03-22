//Closures e a apbilidade da função de acessar seu escopo lexixo


function retornaFuncao(){
    const nome = 'junior'
    return function (){
        //essa função anonima tem acesso a 3 escopo
        //o dela (closures) 
        //o da mae dela (Script)
        //o global (Window)
        //Sempre olhando para cima
        return nome;
    }
}
const funcao = retornaFuncao();
console.log(funcao());//junior,

/////////////////////////////

function retornaFuncao1(nome){
    return function (){
        return nome;
    }
}
const funcao1 = retornaFuncao1('junior');
console.log(funcao1());//junior,

