/*Raiz quadrada: 7.416198487095663

55 é inteiro: true

É NaN: false

Arredondando para baixo: 55

Arredondando para cima: 55

Com duas casas decimais: 55.00
*/
//quero obter um elemento por id do html
let numero = Number(prompt("Digite seu numero:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = numero;
numero = Number(numero);
//<p></p> =  paragrafo
texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada: <strong> ${numero ** 0.5} <strong/> </p> `;
texto.innerHTML += `<p> ${numero} é inteiro:<strong> ${Number.isInteger(numero)}<strong/></p> `;
texto.innerHTML += `<p>é NaN:<strong> ${Number.isNaN(numero)} <strong/> </p> `;
texto.innerHTML += `<p>Arredondando para baixo: <strong> ${Math.ceil(numero)}<strong/> </p> `;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.floor(numero)} <strong/> </p> `;
texto.innerHTML += `<p>Com duas casas decimais: <strong> ${numero.toFixed(2)} <strong/> </p> `;

