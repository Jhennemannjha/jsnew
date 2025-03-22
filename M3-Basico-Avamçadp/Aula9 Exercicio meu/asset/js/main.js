

const form = document.querySelector('#formulario');//buscando no html o id do formulario


//evento que quero assistir //função anonima // e e de evento
form.addEventListener("submit", function (e) {
    e.preventDefault(); // nao enviar
    //target tras dizendo que tipo de evento tbm, se e um click ou um arrast e etc
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso && !altura) {
        setarResultado('Peso e Altura Invalidos', false)
        return;
    }
    
    if (!peso || peso <= 0) {
        setarResultado('Peso Invalido', false)
        return;
    }
    if (!altura || altura <= 0) {
        setarResultado('Altura Invalido', false)
        return;
    }

    const imc = getImc(peso, altura);
    function getImc() {
        const imc = (peso / ((altura) ** 2));
        return imc.toFixed(2);
    }

    

    //pode ser assim
    const nivelImc = getNivelImc(imc);

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc >= 40) return nivel[5];
        if (imc >= 35) return nivel[4];
        if (imc >= 30) return nivel[3];
        if (imc >= 25) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
    console.log(imc, nivelImc);
    const msg = `Seu IMC é: ${imc} (${nivelImc})`
    setarResultado(msg, true)

});



function criaParagrafoP() {
    const p = document.createElement('p');
    //aqui estou criando uma clase para a var p poder ser editada no css
    p.classList.add('paragrafo-resultado');
    return p;
}

function setarResultado(msg, isValid) {
    //chama a id resultado que esta no html para dentro da variavel resultado
    const resultado = document.querySelector('#resultado')
    //aqui apaga oque esta dentro de resultado
    resultado.innerHTML = '';
    //aqui estou criando uma variavel p de paragrafo com o elemento p
    const p = criaParagrafoP();
    //validar, se true vai para a clase que criamos no p que vai para o css, se for falso vai para a clase bad no css
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }



    p.innerHTML = msg;
    //isse um filho (p) dentro de resultado com a função appendChild e sera enserido na div
    resultado.appendChild(p);
}















/*const numPeso = Number(peso.value);
const numAltura = Number(altura.value);
const calcular = (numPeso / ((numAltura) ** 2));
const imc = calcular.toFixed(2);

console.log(dadosPessoais);




const dadosPessoais = []; //saude = "Dados Incorretos"]
function mostrarSaude(saude) {
   
}

dadosPessoais.push({
    //so consegue usar o value pois esta dentro de recebeenventoform
    Peso: peso,
    Altura: altura,
    //icm: imc
});

//${imc} ${mostrarSaude}
*/