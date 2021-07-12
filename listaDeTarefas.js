const criarTarefa = (event) => {

    event.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valorInput = input.value;


    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    const conteudo = `<p class="content">${valorInput}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoCheck());
    lista.appendChild(tarefa);

    input.value = "";
}

const addNovaTarefa = document.querySelector("[data-form-button]");

addNovaTarefa.addEventListener("click", criarTarefa);

// Criando o componente do botao

const BotaoCheck = () => {

    const botaoCheck = document.createElement("button");
    botaoCheck.classList.add("check-button");
    botaoCheck.innerText = "Concluído";

    botaoCheck.addEventListener("click", concluirTarefa);

    return botaoCheck;
}


const concluirTarefa = function(event){

    const botaoCheck = event.target;
    const tarefaCompleta = botaoCheck.parentElement;

    tarefaCompleta.classList.toggle("done");
    console.log("Tarefa concluída");
}