import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../shared';

@Component({
  selector: 'app-read-tasks',
  templateUrl: './read-tasks.component.html',
  styleUrls: ['./read-tasks.component.css']
})
export class ReadTasksComponent implements OnInit {

  // A tipagem desse Array é a Class Task do componente "task.model.ts"
  // Importando array "Task" que vem do "task.model.ts" do diretório "shared"
  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  // Utilizará do lifecycle hook "ngOnInit" para sempre iniciar listando todas as propriedades do objeto "localStorage"
  ngOnInit(): void {
    this.tasks = this.readAll();
    this.tasks = [
      new Task(1, "Tarefa 1", false),
      new Task(2, "Tarefa 2", true),
    ];
  }

  /* Função para pegar o método "readAll" do componente Service e trazer para o Component/Controller para ele controlar o acesso entre a regra de negócio e a "view" da aplicação, o html, a parte que o usuário pode ver e interagir
  É possível utilizar desse método pelo import feito em cima do "TasksService" */
  readAll(): Task[] {
    return this.tasksService.readAll();
  }

}
