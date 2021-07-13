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

export default BotaoCheck;