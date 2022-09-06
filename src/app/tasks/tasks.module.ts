import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TasksService } from './shared';
import { ReadTasksComponent } from './read';
import { InsertTasksComponent } from './insert/insert-tasks.component'; // Só colocar o ".read" pois o index.ts já cuida do resto dos export

@NgModule({
  declarations: [ReadTasksComponent, InsertTasksComponent],
  // providers: [TasksService], Esse serviço não precisa dessa importação de providers, pois ele já teve esse serviço injetado pelo Angular no componente através do Injectable.
  imports: [CommonModule, RouterModule, FormsModule],
})
export class TasksModule {}
