import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksService } from './shared';
import { ReadTasksComponent } from './read'; // Só colocar o ".read" pois o index.ts já cuida do resto dos export

@NgModule({
  declarations: [ReadTasksComponent],
  // providers: [TasksService], Esse serviço não precisa dessa importação de providers, pois ele já teve esse serviço injetado pelo Angular no componente através do Injectable.
  imports: [CommonModule],
})
export class TasksModule {}
