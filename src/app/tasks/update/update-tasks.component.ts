import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService, Task } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css'],
})
export class UpdateTasksComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  /**
   * @param tasksService -> Instância da classe TasksService
   * @param route -> Módulo de rota que será utilizada para obter o parâmetro (nesse caso o ID)
   * de cada objeto (nesse caso cada Tarefa)
   * @param router -> Para que ocorra o direcionamento da tela
  */
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * @variable id -> Através do route será obtido o exato parâmetro ('id') que o [routerLink irá trazer]
   * do ReadTasksComponent.html . Isso será possível porque temos acesso a esse objeto "snapshot"
   * vindo do route e seguido do outro objeto chamado "params" e que mapeia todos os parâmetros que foi
   * obtido na url de cada tarefa que veio para essa página de edição através do ":id"
   * utilizado no path do TasksRoutingModule.
   *
   * @operator + -> Um operador do TypeScript que converte para o tipo number.
   *
   * @atribute this.task -> Tem seu valor como sendo o método "searchForId" da classe TasksService.
   * Se quiser saber mais, veja esse método no services (componente para regras de negócio).
  */
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.tasksService.searchForId(id);
  }

  /**
   * @method update - Está buscando o método "update" que faz parte da classe TasksService
   * @method navigate - Módulo de roteamento para permitir que após o novo cadastro,
   * possa voltar para a tela principal
   */
  update(): void {
    if (this.formTask.form.valid) {
      this.tasksService.update(this.task);
      this.router.navigate(['/tarefas']);
    }
  }
}
