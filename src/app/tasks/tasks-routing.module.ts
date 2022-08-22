import { Routes } from '@angular/router';
import { ReadTasksComponent } from './read';

export const TasksRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/read'
  },
  {
    path: 'tasks/read',
    component: ReadTasksComponent
  }
]
