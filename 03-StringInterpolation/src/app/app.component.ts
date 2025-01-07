import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName = 'Sachin';
  lastName = 'Tendulkar';
  color = 'red';

  getProfession(): string {
    return 'Cricketer';
  }
  getPath(): string {
    return 'https://chat.openai.com/';
  }
  max(first: number, second: number): number {
    return Math.max(first, second);
  }
}
