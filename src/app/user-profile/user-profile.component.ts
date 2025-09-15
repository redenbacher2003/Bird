import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interface/items';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  imports: [ButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  
  constructor(private profileService : ProfileService, private router: Router ) { 
    this.user = this.profileService.getUser() ?? {
      id: '',
      username: '',
      lastname: '',
      firstname: '',
      email: ''
    };

  }

  user : UserProfile = {
    id: '',
    username: '',
    lastname: '',
    firstname: '',
    email: ''
  };


  logout() {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }
}
