/**
 * 67. Criando uma Lista de tarefas
 * 
 * classes:
 *  container
 *  input-tarefa
 *  btn-add-tarefa
 *  lista-tarefas
 */


const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.lista-tarefas');


function criaLi() {
    const li = document.createElement('li');
    return li;

}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(txtInput) {
    const li = criaLi();
    li.innerText = txtInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
})

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    
    if(el.classList.contains('apagar')) {
        console.log(el.parentElement.innerText[0]);
        el.parentElement.remove();
        salvarTarefas();
    }
    
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (const tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    console.log(listaDeTarefas);
    //colocar a lista de tarefas para um arquivo JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);
    //salvar coisas no navegador do usuário
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
    //obter as tarefas do storage do navegador
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();

