import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  sw = true;

  color: string;

  printDataMichaelComp(event: any) {
    console.log('RICARDO COMP:', event);
  }
}
