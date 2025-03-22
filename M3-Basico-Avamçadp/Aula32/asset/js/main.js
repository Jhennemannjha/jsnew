const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');
//apenas cria uma função que cria a const li com o elemente li e retorna li
function criaLi() {
    const li = document.createElement('li')
    return li;
}

function limpaInput() {
    //cursor ficar piscasndo no navegador
    inputTarefa.focus();
    //limpar caixa
    inputTarefa.value = '';
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add("apagar");
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')


    li.appendChild(botaoApagar);
}

//cria a tarefa chamando a function criali e envia o input para a lista de tarefas
function criatarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    //estou chamando a função para limpar
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}
//cria o botao
btnTarefa.addEventListener('click', function () {
    //aqui se a caixa tiver vazia nao cria
    if (!inputTarefa.value) return;
    criatarefa(inputTarefa.value);
});

//a caixa de texto funciona com o enter
inputTarefa.addEventListener('keypress', function (e) {
    //numero do botao enter e 13
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criatarefa(inputTarefa.value);
    }
})

//aqui eu clico um evento de click
document.addEventListener('click', function (e) {
    //aqui crio a variavel el que chama o evento com .targer que vai me informar onde stou clicando
    const el = e.target;
    //si onde clicar tiver a classe apagar
    if (el.classList.contains("apagar")) {
        //ira remover o pai dele
        el.parentElement.remove();
        salvarTarefas();
    }
})
//Salvar tarefas
function salvarTarefas() {
    //vou selecionar todos os lu de dentro de tarefas
    const liTarefas = tarefas.querySelectorAll('li');
    //crio um arrey
    const listaDeTarefas = [];
    //crio um for de repetição
    for (let i of liTarefas) {
        //retorna todas as tarefas que entrarem na lista
        let tarefaTexto = i.innerText;
        //apagar a palavra apagar e com o trim tira o espaço que fica
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        //puchei a tarefas texto para dentro do arrey
        listaDeTarefas.push(tarefaTexto);

    }
    //JSON = formato de texto que e usado para salvar dados entre sistemas
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //local no novegador para salvar (tarefas e o nome para recuperar novamente o tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON);
}
//fulsao que puxa as tarefas salvas
function addTarefasSalvas() {
    //busquei
    const tarefas = localStorage.getItem("tarefas")
    //convertendo para arrey
    const listaDeTarefas = JSON.parse(tarefas);
    for (let i of listaDeTarefas) {
        criatarefa(i);
    }
}
addTarefasSalvas()