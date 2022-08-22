import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Para importar um módulo de rota de um módulo em específico para o módulo de rota da aplicação principal
import {TasksRoutes} from './tasks'

export const routes: Routes = [
  // Caso o caminho seja vazio, retornar o mesmo módulo de "tasks" com seu componentes de "read"
  {
    path: '',
    redirectTo: '/tasks/read', // Utilizar apenas "/" de começo para definir o caminho
    pathMatch: 'full'
  },
  // Para concatenar as rotas passadas no módulo de tasks com o módulo de rotas principal
  ...TasksRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
