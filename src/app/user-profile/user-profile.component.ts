import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interface/items';


@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  
  constructor(private profileService : ProfileService) { 
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

  
}
