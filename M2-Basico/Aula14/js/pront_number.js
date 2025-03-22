/** 
 Quando se usa () esta chamando uma função que executa uma ação

Objeto window só e executado no navegador.

todos eles sao funções dentro do objeto window
quando uma funçao esta dentro de um objeto se chama de metodo mas se tiver fora e função mesmo
window.alert('Mensagem');
undefined

window. confirm('Deseja realmente apagar?');
false

window. confirm('Deseja realmente apagar?');
true

window.prompt ('digite seu nome')

let confirma = confirm('Qualquer mensagem' );
vai retornar o valor undefined que vai ser encaminhado para a variavel confirma

Para plotar direto no terminal console do navegador nao precisa usar o console.log conforme aqui no node

confirma
false
*/
//exercicio
let num1 = prompt("Digite um numero")
let num2 = prompt("Digite mais um numero")
num1 = Number(num1);    
num2 = Number(num2);  
let resultado = num1 + num2;
alert(`O Resultado da Adição foi ${resultado}`)
console.log(typeof resultado);