const criarTarefa = (event) => {

    event.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valorInput = input.value;


    const tarefa = document.createElement("li");
    const conteudo = `<p class="content">${valorInput}</p>`;

    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);

    input.value = "";
}

const addNovaTarefa = document.querySelector("[data-form-button]");

addNovaTarefa.addEventListener("click", criarTarefa);
