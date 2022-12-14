import { Injectable } from '@angular/core';

import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  // O retorno vai ser um array de tarefas
  readAll(): Task[] {
    const tasks = localStorage['tasks']; //localStorage - objeto que já vem por padrão pelo navegador, você só precisa passar uma chave de busca para ele
    return tasks ? JSON.parse(tasks) : []; // ternário para simplificar o if e o else
  }

  // Instanciando um objeto "task" a partir da classe "Task" / E o retorno será "void", pois não é necessário retornar algo
  insert(task: Task): void {
    const tasks = this.readAll(); // Primeiro você armazena todas as tarefas já cadastradas em uma variável
    task.id = new Date().getTime(); // Depois vc cadastra uma nova tarefa a partir de um valor dado a um id utilizando do objeto "Date"
    tasks.push(task); // Inserção de nova tarefa
    localStorage['tasks'] = JSON.stringify(tasks); // Guardando os dados convertidos em String no localStorage
  }

  /**
    * @param id -> Recebe um id do tipo "number" e retorna o mesmo tipo (array de objetos) que a classe Task
    *
    * @method find -> Interage com cada elemento (nesse caso chamado de "task")
    * do array e retorna o primeiro elemento que for considerado como true ao ser comparado com
    * o parâmetro do tipo number (nesse caso também chamado de "id").
    *
    * Resumindo: Se o id desse elemento específico da lista for igual ao valor do id que foi passado,
    * então o elemento será retornado.
  */
  searchForId(id: number): Task {
    const tasks: Task[] = this.readAll();
    return tasks.find(task => task.id === id);
  }

  /**
   * @params obj - cada objeto/tarefa/elemento desse array
   * @params index - posição do objeto/tarefa/elemento que está sendo inteirado no momento
   * @params objs - se resume a variável "tasks" que nesse caso tem seu valor vindo do método "readAll",
   * que traz consigo um array de objetos com todas as tarefas que já foram cadastradas
  */
  update(task: Task): void {
    const tasks: Task[] = this.readAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  delete(id: number): void {
    // Foi utilizado o "let" e não o "const" pois o valor das "tasks" vai ser redefinido para uma nova lista de "tasks"
    let tasks: Task[] = this.readAll();
    // Filtra as tasks que tiverem o id diferente do que foi colocado
    tasks = tasks.filter((task) => task.id !== id);
    // Por fim atribui essa nova lista para o localStorage
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {
    const tasks: Task[] = this.readAll();
    tasks.forEach((obj, index, objs) => {

      if (id === obj.id) {
        // Invés de substituir toda a lista, vc vai substituir apenas a propriedade "conclude" que faz parte do construtor da classe "Task"
        objs[index].conclude = !obj.conclude; // Vai inverter o valor booleano
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
