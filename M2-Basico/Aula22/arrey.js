//Arrey = Lista = coleção de coisas= [] separado por , virgula = objeto indexado
//e indexados por ,
 //            0         1       2
const alunos = ['Luiz', 'Maria', 'João' ];
console.log(alunos[1]);//Maria
//subistituir aluno
alunos[0] = "eduardo"
console.log(alunos[0]);//eduardo
console.log(alunos)//[ 'eduardo', 'Maria', 'João' ]
//acrescentar no arrey no exemplo um 3 que ainda nao tem
alunos[3] = "carlos"
console.log(alunos[3]);//Carlos
console.log(alunos);//[ 'eduardo', 'Maria', 'João', 'carlos' ]
//saber tamanho do arrey
console.log(alunos.length)//4
//colocar um item no final sem precisar saber quantos arrey tem
alunos.push("miguel")
console.log(alunos)//[ 'eduardo', 'Maria', 'João', 'carlos', 'miguel' ]
//Colocar um item no começo
alunos.unshift("junior")
console.log(alunos)//[ 'junior', 'eduardo', 'Maria', 'João', 'carlos', 'miguel' ]
//remover do final
alunos.pop()
console.log(alunos)//[ 'junior', 'eduardo', 'Maria', 'João', 'carlos' ] foi removido miguel
//Remover e guardar o removido
const removido = alunos.pop()
console.log(removido)//Carlos pois miguel ja foi removido
//remover do Inicio
alunos.shift()
console.log(alunos)//[ 'eduardo', 'Maria', 'João' ] foi removido junior
//deletar o item mas vai ficar com um espaço vazio no index
delete alunos[1]
console.log(alunos)//[ 'eduardo', <1 empty item>, 'João' ]
//puxar por faixa index*/
console.log(alunos.slice(0,2))//[ 'eduardo', <1 empty item> ]
//perguntar se aluno e um arrey
console.log(alunos instanceof Array)//true



/*const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, 
como number, string, boolean, undefined, null, symbol e bigint
(os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. 
Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. 
Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição 
= (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]

Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
*/