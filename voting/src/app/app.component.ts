import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = 'Should mankind colonize the Universe?';
  people: Person[] = [
    { name: 'Mr. IQ' },
    { name: 'Ms. Universe' },
    { name: 'Bombasto' }
  ];
}
