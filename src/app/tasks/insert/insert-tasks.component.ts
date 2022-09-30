import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService, Task } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-tasks',
  templateUrl: './insert-tasks.component.html',
  styleUrls: ['./insert-tasks.component.css']
})
export class InsertTasksComponent implements OnInit {

  // ViewChild - Decorator que permite que tenha uma referência do DOM dentro do componente
  /**
   * @static:
   * Essa nova versão traz essa opção de "static", assim quando você define que um elemento é estático,
   * significa que ele não irá sumir em algum momento da execução, no caso se ele fosse dinâmico poderia ocorrer
   * um erro ao utilizar a diretiva ng por exemplo. Ele veio como uma precaução contra erros.
   *
   * Outra coisa é que se for {static:false} a query ficará disponível ao passar ngAfterViewInit, ou seja,
   * após os componentes da View serem inicializadas,  enquanto {static: true}, ao passar por ngOnInit, ou seja,
   * após o construtor e junto com os Inputs Properties.
   */
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  /**
   * @param tasksService - Instância da classe TasksService
   * @param router - Para que ocorra o direcionamento da tela
   */
  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  /**
   * Para conseguir associar as novas tasks com a interface, você precisa de uma instância real
   * que traga essa interface para esse componente, basicamente que traga essa lista.
   * E ai que entra o lifecycle hook "ngOnInit" para fazer esse papel
  */
  ngOnInit(): void {
    this.task = new Task();
  }

  // Método para inserir a nova tarefa no localStorage
  insert(): void {
    /**
     * Caso tenha erro de validação ele vai ignorar e não fazer o cadastro.
     * Caso não tenha, então ele vai chamar o componente TasksService e passar o método insert
     * desse componente (finalizar documentação depois que entender certinho)
     * */
    if (this.formTask.form.valid) { // Utilizando da referência feita acima do formulário através do "ViewChild"
      this.tasksService.insert(this.task);
      this.router.navigate(['/tasks']); // Módulo de roteamento para permitir que após o novo cadastro, possa voltar para a tela principal
    }
  }

}
