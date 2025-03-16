import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from "./main-component/main-component.component";
import { LeftComponentComponent } from "./left-component/left-component.component";

@Component({
  selector: 'app-root',
  imports: [MainComponentComponent, LeftComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Birds';
}
