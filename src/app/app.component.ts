import { Component } from '@angular/core';
import { LeftComponentComponent } from './left-component/left-component.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [LeftComponentComponent, HomeComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Birds';
}
