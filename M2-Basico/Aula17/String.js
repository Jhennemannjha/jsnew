//string = texto
//strings são indexadas
//               012 345678 910
let umaString = "um \"texto\"";
console.log(umaString); //um "texto"
console.log(umaString[4]); //t
//essa função faz a mesma coisa que o + para concatena (posso concatenar varios elementos)
console.log(umaString.concat(' em', ' um', ' lindo', ' dia.'));//um "texto" em um lindo dia.
console.log(umaString+ ' em um lindo dia.');//um "texto" em um lindo dia.
console.log(`${umaString} em um lindo dia.`) ;//um "texto" em um lindo dia.


//colocando um ponto depois de uma variavel consigamos ver 
//varias atribuiçoes
//js disponibiliza um interfase para manipular a string apos o ponto
//.charAt faz a mesma coisa que console.log(umaString[4]);
//busca o elemento da posição
// se passar do maximo de caracteres, retorna nada 
console.log(umaString.charAt(4));//t
//.charCodeAt Retorna o codigo da tabela asque do elemento 4
console.log(umaString.charCodeAt(4));//116
//Pesquisar por um indic
//Ex: Em qual indici começa a palavra texto
console.log(umaString.indexOf('texto'));//4
//caso nao seja encontrado retorna -1
console.log(umaString.indexOf('Texto'));//-1
//tbm posso dizer de qual indici que quero que comece a procurar
console.log(umaString.indexOf('o', 2))//8
//lastIndexOf começa de tras para frente a diferença e quando eu falar que e para começas de uma posição
console.log(umaString.lastIndexOf('o', 2))//-1
console.log(umaString.lastIndexOf('m', 2))//1

//Expreções Regulares
//como .math
//usa / / podendo usar a flag g (expreção regular precisa de um curso compelto pois e muita coisa)
console.log(umaString.match(/[a-z]/g));//  'u', 'm', 't', 'e', 'x', 't','o' (retorno todas as letras minusculas)
console.log(umaString.match(/x/));//Aqui estou pedindo para encontrar a letra x retorno [ 'x', index: 6, input: 'um "texto"', groups: undefined ]
//                0123456789                  
let umaString1 = "O rato roeu a roupa do rei de roma. ";
console. log(umaString1.replace(/r/g,'#'));//O #ato #oeu a #oupa do #ei de #oma. (substitui uma palavra por outra podendo ou nao usar expreção regular)
//buscar o tamanho de uma string
//nao e uma função e sim um atributo
console.log(umaString1.length);//36
//quero buscar dizendo onde começa o onde termina (no terminar tem que ser sempre um a mais)
//se usar um valor negativo começa de tras para frente
console.log(umaString1.slice(2, 6));//rato
//Dividir uma string por palavras usando espaço mas posso separar usando uma letra
console.log(umaString1.split(' '));//['O','rato','roeu','a','roupa','do','rei','de','roma.', '']
console.log(umaString1.split('r'));//[ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma. ' ]
//colocando um numero digo quantas vezes quero que aconteça
console.log(umaString1.split(' ' ,2));//['O','rato']
//colocar a string toda maiuscula
console.log(umaString1.toLocaleUpperCase());//O RATO ROEU A ROUPA DO REI DE ROMA. 
//toda minuscula
console.log(umaString1.toLowerCase());//o rato roeu a roupa do rei de roma.  