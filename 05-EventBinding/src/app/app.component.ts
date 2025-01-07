import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text1 = "<h1> Sachin Tendulkar </h1>"
  text2="<p>This is first para</p><p>This is second para</p> "
  url = "https://chat.openai.com"
  color = "red"
  isDisabled= false;
  count = 0
  text3 = ''
  text4 = ''
  onClick(){
    this.count++;
  }
  onChange3(event: any){
    this.text3 = event.target.value

  }
  onChange4(element: HTMLInputElement){
    this.text4 = element.value

  }

}
