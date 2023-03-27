import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Primeiro projeto Angular CLI';
  nome: string = 'Millena Regina'
  
  
  fazConsoleLog(): void{
    console.log('Algo')
    this.nome = 'luiz'
  }
}

