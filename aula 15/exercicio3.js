let listaDeTarefas = [];

function adicionarTarefa(tarefa) {
    listaDeTarefas.push(tarefa);
}

adicionarTarefa("Comprar leite");
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");

console.log("Lista de tarefas antes de remover:", listaDeTarefas);

function removerTarefa(tarefa) {
    for (let i = 0; i < listaDeTarefas.length; i++) {
        if (listaDeTarefas[i] === tarefa) {
            listaDeTarefas.splice(i, 1);
            break;
        }
    }
}

removerTarefa("Estudar JavaScript");

console.log("Lista de tarefas depois de remover:", listaDeTarefas);

