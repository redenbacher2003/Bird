import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interface/items';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  imports: [ButtonModule, ConfirmDialog, InputTextModule, FormsModule],
  providers: [ConfirmationService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  
  constructor(
              private profileService : ProfileService,
              private router: Router, 
              private confirmationService: ConfirmationService) { 

    this.user = this.profileService.getUser() ?? {
      id: '',
      username: '',
      lastname: '',
      firstname: '',
      email: ''
    };

  }

      
  inputLastName : string = '';    
  inputFirstName : string = '';    
  inputEmail : string = '';    
  inputUserName : string = '';


  user : UserProfile = {
    id: '',
    username: '',
    lastname: '',
    firstname: '',
    email: ''
  };

  confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Are you sure you wish to logout?',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Cancel',
                icon: 'pi pi-times',
                variant: 'outlined',
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Logout',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
              this.logout();
            },
            reject: () => {
            }
        });
    }

  logout() {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }
}
