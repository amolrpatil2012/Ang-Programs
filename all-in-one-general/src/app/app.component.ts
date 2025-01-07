import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ForComponent } from "./controlFlow/for/for.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, DataBindingComponent, ForComponent],
})
export class AppComponent {
  title = 'all-in-one-general';
}
