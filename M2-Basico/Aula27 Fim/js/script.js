function meuEscopo() {
    //crio uma variavel que chama do html a classe form atrazer do css que usa
    //um . no inicio
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    /*
    ////Medo antigo
    // digo que a clase form do html se submete a um evento
    form.onsubmit = function (evento) {
        //diz para que quando acontecer o evento nao envie
        evento.preventDefault();
        alert(1);
        console.log('Foi Enviado');
    };
    */
    //Novo metodo


    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //para pegar um dado digitado na pag (input e so usar o .value)
       // console.log(nome.value, sobrenome,peso, altura);
    }

    //adiviona um escutador de evento no meu metodo addEventListener
    //O evento submit é disparado quando a pessoa usuária clica em um botão 
    //             nao precisa do on no submit e agora crio uma função para o evento submit
    form.addEventListener(/*aqui vai o evento que eu quero escutar */"submit", recebeEventoForm);
   
}
meuEscopo();