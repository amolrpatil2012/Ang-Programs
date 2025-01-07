import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  name = ""
  name1 = ""
  clearName()
  {
    this.name = ""
    this.name1 = ""
  }

}
