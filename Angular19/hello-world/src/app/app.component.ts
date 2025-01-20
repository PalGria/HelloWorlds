import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HolaMundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world';
}
