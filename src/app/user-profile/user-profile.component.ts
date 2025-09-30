import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interface/items';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeedDial } from 'primeng/speeddial';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { AccountPasswordUpdateDto } from '../interface/items';

@Component({
  selector: 'app-user-profile',
  imports: [
            ButtonModule,
            ConfirmDialog,
            InputTextModule,
            FormsModule,
            SpeedDial,
            TooltipModule,
            Dialog,
            PasswordModule,
            ReactiveFormsModule],
  providers: [ConfirmationService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent implements OnInit {
  
  items: MenuItem[] = [];
  confirmPasswordDialogVisible : boolean = false;
  confirmPassword : string = ''; 
  badPassword : boolean = false;
  passwordUpdateDto : AccountPasswordUpdateDto = {
    username : '',
    currentPassword : '',
    newPassword : ''
  };  

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

  ngOnInit(): void {
    this.items = [
            {
                icon: 'edit-Icon',
                tooltipOptions: {tooltipLabel: 'Edit Profile', tooltipPosition: 'top'},
                command: () => {
                }
            },
            {
                icon: 'logout-Icon',
                tooltipOptions: {tooltipLabel: 'Log Out', tooltipPosition: 'top'},
                command: () => {
                  this.confirm();
                }
            },
            {
                icon: 'passwordReset-Icon',
                tooltipOptions: {tooltipLabel: 'Reset Password', tooltipPosition: 'top'},
                command: () => {
                  this.showDialog();
                }
            }
        ];
}
 
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

  showDialog() {
      this.confirmPasswordDialogVisible = true;
  }

  logout() {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }

  updatePassword() {
    if (this.passwordUpdateDto.newPassword !== this.confirmPassword) {
      this.badPassword = true;
      return;
    }
  }
}