import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],  
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
        const token = localStorage.getItem('token');
          if (!token) {
            this.router.navigate(['/login']);
        } else {
          //this.router.navigate(['/dashboard']);
        }
    }
  }
  title = 'Birds';

  
}
