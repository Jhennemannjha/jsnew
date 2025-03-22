/**
 * Avaliação de curto circuito
 * "falso literal" False
 * FALSY = 0, "" '' `` , null, undefined , NAN "so esses são valores avaliados como false"
 * qualquer outro e avaliado como true
 * 
 * $$ (true && False) vai retorna o valor false mesmo
 * || (true && False) vai retorna o valor verdadeiro (true) mesmo
 * 
 */
/*function fala0i() {
    return '0i';
}
const vaiExecutar = undefined;
const vaiExecutar2 = 'sim';
console.log(vaiExecutar && fala0i());//undefined
console.log(vaiExecutar2 && fala0i());//oi

*/


console.log('MAria'&&"João"&& "Junior" && 'Carlos'); //Carlos (ultima verdadeira)pq: ele tem que conferir ate o final se todas sao vdd
console.log('MAria'&&"João"&& 0 && 'Carlos'); //0 (primeiro false)pq: ele tem que conferir ate o final mas se achar uma falsa ele para pois ja descobrimos q e falso


console.log("Maria" || "João" || "" || 'Carlos'); //Maria(primeira Verdadeira)pq: ele só precisa de uma vdd
console.log(0 || NaN || "" || undefined); //undefined (ultimo false) pq: ele vai ate o final para ver se tem uma vdd

//EXEmplo
const corUsuario = null;
const corPadrao = corUsuario || "Preto";
console.log(corPadrao);//Preto

const corUsuario2 = "Vermelho";
const corPadrao2 = corUsuario2 || "Preto";
console.log(corPadrao2);//Vermelho

