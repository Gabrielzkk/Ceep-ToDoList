const BotaoDelete = () => {

    const botaoDelete = document.createElement("button");
    botaoDelete.innerText = "Deletar";

    botaoDelete.addEventListener("click", deletarTarefa);

    return botaoDelete;
}

const deletarTarefa = (event) => {

    const botaoDelete = event.target;
    const tarefaCompleta = botaoDelete.parentElement;
    
    tarefaCompleta.remove();

    console.log("Tarefa excluída.");

    return botaoDelete;
}

export default BotaoDelete;