import { Routes } from '@angular/router';
import { ReadTasksComponent } from './read';
import { InsertTasksComponent } from './insert';
import { UpdateTasksComponent } from './update';

export const TasksRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/read'
  },
  {
    path: 'tasks/read',
    component: ReadTasksComponent
  },
  {
    path: 'tasks/insert',
    component: InsertTasksComponent
  },
  {
    /**
      * Esse "path" permite parâmetro. Nesse caso como vou editar um tarefa específica,
     * preciso saber qual é tarefa para poder trazer ela para minha tela de edição/ update.
     * Com isso utilizarei um com um nome relacionado ao "id", para que fique claro que vou
     * utilizar os IDs de cada objeto do array que compõe o método "readAll".
     * Assim terei acesso a todos os IDs, IDs esses que utilizei da classe Date no TasksServices para criar.
     *
     * Para criar o parâmetro no path do Angular utilize da marcação ":" e o nome que quiser (procure um
     * que se referencie ao que vc quer fazer).
     *
     * Dito tudo isso, deve se entender que foi criado uma url dinâmica e que a informação
     * trazida com ela vai ser carregada pelo UpdateTasksComponent.
    */
    path: 'tasks/update/:id',
    component: UpdateTasksComponent
  }
]
