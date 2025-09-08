import { Component } from '@angular/core';
import { LeftComponentComponent } from './left-component/left-component.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { CanActivate, Router, RouterModule } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-root',
  imports: [LeftComponentComponent, HomeComponent, LogInComponent, RouterModule],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {
    // Check if the user is logged in

    if (typeof localStorage === 'undefined') {
        // If token exists, navigate to the dashboard or home
        this.router.navigate(['/login']);
      } 
      else 
       {
        const token = localStorage.getItem('access_token');
          if (!token) {
            this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/home']);
        }
    }
  }
  title = 'Birds';

  
}
