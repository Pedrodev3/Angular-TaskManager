import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
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
    /* Se quiser fazer algo hardcoded teria que adicionar um array aqui, igualando o atributo "tasks" a ele.
    Para que sempre inicie com ele, mas essa não é a ideia do projeto, mas sim fazer algo mais dinâmico */
    /* Exemplo -> this.tasks = [];
    Obs.: Visualmente não vai aparecer mas ainda sim o que vc inseriu/cadastrou ficaria no banco de dados */
  }

  /* Função para pegar o método "readAll" do componente Service e trazer para o Component/Controller para ele controlar o acesso entre a regra de negócio e a "view" da aplicação, o html, a parte que o usuário pode ver e interagir
  É possível utilizar desse método pelo import feito em cima do "TasksService" */
  readAll(): Task[] {
    return this.tasksService.readAll();
  }

}
