/*exercicio
pegar os dados com .value
colocar um objeto dentro do arrey
div tem que esta acima do script
*/

function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    //aqui e um arrey
    const pessoas = []
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //aqui estou enviando dados para dentro do arrey
        pessoas.push({
            //so consegue usar o value pois esta dentro de recebeenventoform
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        //isso e para apenas apoarecer no terminal
        console.log(pessoas)
        //aqui estou enviando dados para dentro do arrey para a tela
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
        form.addEventListener("submit", recebeEventoForm);    
}
meuEscopo();