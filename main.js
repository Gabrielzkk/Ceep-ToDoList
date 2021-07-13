import BotaoCheck from "./componentes/concluirTarefa.js";
import BotaoDelete from "./componentes/deletaTarefa.js"
    
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
    tarefa.appendChild(BotaoDelete());
    lista.appendChild(tarefa);

    input.value = "";
}

const addNovaTarefa = document.querySelector("[data-form-button]");

addNovaTarefa.addEventListener("click", criarTarefa);
