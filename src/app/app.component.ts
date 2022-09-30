import { Component } from '@angular/core';

@Component({
  // Propriedade (selector) que se liga ao index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciador De Tarefas';
}
