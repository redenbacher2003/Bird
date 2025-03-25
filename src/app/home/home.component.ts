import { Component } from '@angular/core';
import { LeftComponentComponent } from '../left-component/left-component.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [LeftComponentComponent, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
