const tarefas = [
    {
      titulo: 'Passear com o cachorro',
      concluida: false,
          dias: 10,
    },
    {
      titulo: 'Comprar leite',
      concluida: false,
          dias: 5,
    },
    {
      titulo: 'Lavar louça',
      concluida: true,
          dias: 60,
    }
  ]

const filtrarConcluidas = tarefas.filter(tarefa => tarefa.concluida == true)

console.log(filtrarConcluidas)

const numeroNaoConcluidas = tarefas.filter(tarefa => tarefa.concluida == false).length 

console.log(numeroNaoConcluidas)

const verificarTarefas30dias = tarefas.filter(tarefa => tarefa.concluida == true && tarefa.dias <70)

console.log(verificarTarefas30dias)