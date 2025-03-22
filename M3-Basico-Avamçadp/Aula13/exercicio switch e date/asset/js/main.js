
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
} //           se       v         f
const novoDia = new Date();
/*const dia = novoDia.getDate();
const ano = novoDia.getFullYear();
const hora = zeroAEsquerda(novoDia.getHours());
const min = zeroAEsquerda(novoDia.getMinutes());
*/


function diaDaSemanaTexto(segADom) {
    let diaZ;
    switch (segADom) {
        case 0:
            return diaZ = 'Domingo'
        case 1:
            return diaZ = 'Segunda'
        case 2:
            return diaZ = 'Terça'
        case 3:
            return diaZ = 'Quarta'
        case 4:
            return diaZ = 'Quinta'
        case 5:
            return diaZ = 'Sexta'
        case 6:
            return diaZ = 'Sabado'
    }
}

function mesDoAnoTexto(janADez) {
    let mesZ;
    switch (janADez) {
        case 0:
            return mesZ = 'Janeiro'
        case 1:
            return mesZ = 'Fevereiro'
        case 2:
            return mesZ = 'Março'
        case 3:
            return mesZ = 'Abril'
        case 4:
            return mesZ = 'Maio'
        case 5:
            return mesZ = 'Junho'
        case 6:
            return mesZ = 'Julho'
        case 7:
            return mesZ = 'Agosto'
        case 8:
            return mesZ = 'Setembro'
        case 9:
            return mesZ = 'Outubro'
        case 10:
            return mesZ = 'Novembro'
        case 11:
            return mesZ = 'Dezembro'
    }
}

const plotData = criaData(novoDia)
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = diaDaSemanaTexto(diaSemana);
    const nomeMes = mesDoAnoTexto(numeroMes);

    return (`${nomeDia}-feira, ${data.getDate()} de ${nomeMes} `+
    `de ${data.getFullYear()} `+ 
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
}



const form = document.querySelector('.container h1');
form.innerHTML = plotData;



