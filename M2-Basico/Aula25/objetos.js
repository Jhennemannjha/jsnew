/**Objetos
 * inves de eu criar isso para fazer o cadastro de varias pessoas:
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 =55;
 * eu crio um objeto:
*/
//lembro Arrey [] objeto {}
const pessoa1 = {
    //aqui se cria os atributos
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}
const pessoa2 = {
    nome: 'Maria',
    sobrenome: "Oliveira",
    idade: 55

};

console.log(pessoa1.nome);//Luiz
console.log(pessoa1.sobrenome);//Miranda
console.log(pessoa2.nome);//Maria
console.log(pessoa2.sobrenome);//Oliveira


///melhor
//cria uma função que retorna uma objeto
//                        paramentro
function criaPessoa(nome, sobrenome, idade) {
    return {//atributos
        /*nome: nome,
        sobrenome: sobrenome,
        idade: idade*/
        //quando tenho nomes repetidos para abreviar posso apenas colocar:
        nome,
        sobrenome,
        idade
    };
}
//                              argumento
const pessoa3 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa4 = criaPessoa('Junior', 'hennemann', 33);
console.log(pessoa3.nome);//Luiz
console.log(pessoa4.nome);//Junior

//aqui vimos objeto dentro de uma função
//Agora veremos uma função dentro de um objeto que é um metodo que executa açoes
//nao precisa usar function no começo

const pessoa5 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
//   fala e um metodo/função
    fala() {
        console.log('Olá mundo!');//tem que chamar no lado de fora se nao nao plota
    }
};
pessoa5.fala();



//palavra this nesse contesto chama oque esta dentro do objto (é o proprio objeto)
const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    //   fala e um metodo/função
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
