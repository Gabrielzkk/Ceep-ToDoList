const criarTarefa = (event) => {

    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valorInput = input.value;
    input.value = "";
}

const addNovaTarefa = document.querySelector("[data-form-button]");

addNovaTarefa.addEventListener("click", criarTarefa);
