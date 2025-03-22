
//////////ATRIBUIÇÃO NORMAL/////////////////
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa.nome);//luiz
//ou
/*
const nome = pessoa.nome;
console.log(nome);//luiz
*/
////////ATRIBUIÇÃO Com destruturação//////////////////
//{nome do parametro que quero chamar}
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);//Luiz Miranda

const{endereco: {rua, numero}} = pessoa;
console.log(rua, numero);//Av Brasil 320

//ou

/*const {rua} = pessoa.endereco;
console.log(rua);//Av Brasil
*/


////mais exemplo
const pessoa2 = {
    //nome2: 'Luiz',
    sobrenome2: 'Miranda',
    idade2: 30,
    endereco2: {
        rua2: 'Av Brasil',
        numero2: 320
    }
};

//caso a variavel nao exista ou valor vazio, atribui um valor padrao
const{nome2 = "valor padrao", sobrenome2} = pessoa2;
    console.log(nome2, sobrenome2);//nao existe Miranda


////mais exemplo
const pessoa3 = {
    nome3: 'Luiz',
    sobrenome3: 'Miranda',
    idade3: 30,
    endereco3: {
        rua3: 'Av Brasil',
        numero3: 320
    }
};
//trocar o nome da variavel e da um valor padrao caso n tenha valor
const{nome3: n = "valor padrao", sobrenome3} = pessoa3;
    console.log(n, sobrenome3);//nao existe Miranda


//tbm posso pegar p rest
const{idade3, ...resto} =pessoa3;
//deixei a idade de fora
console.log(resto);//{ nome3: 'Luiz', sobrenome3: 'Miranda', endereco3: { rua3: 'Av Brasil', numero3: 320 }}

