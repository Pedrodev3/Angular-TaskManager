import { Injectable } from '@angular/core';

import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  listarTodos(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  cadastrar(task: Task): void {
    const tasks = this.listarTodos();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }


}
