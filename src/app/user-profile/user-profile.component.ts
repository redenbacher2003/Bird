import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interface/items';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms';
import { SpeedDial } from 'primeng/speeddial';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { AccountPasswordUpdateDto } from '../interface/items';
import { passwordStrengthValidator } from '../password-validator.ts';
import { CommonModule, NgIf } from '@angular/common';
import { Toast, ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { DataaccessService } from '../dataaccess.service';
import { error } from 'node:console';

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
            ReactiveFormsModule,
            ToastModule,
            Toast,
            RippleModule,
            CommonModule,
            DividerModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent implements OnInit {
  items: MenuItem[] = [];
  confirmPasswordDialogVisible : boolean = false;
  confirmPassword : string = ''; 
  badPassword : boolean = false;
  passwordValidationErrors : ValidationErrors | null = null;
  passwordUpdateDto : AccountPasswordUpdateDto = {
    username : '',
    currentPassword : '',
    newPassword : ''
  };  
  passswordForm = new FormGroup({
    currentPassword: new FormControl('', {validators : [passwordStrengthValidator()]} ),
    newPassword: new FormControl('', {validators : [passwordStrengthValidator()]} ),
    confirmPassword: new FormControl('', {validators : [passwordStrengthValidator()]} )
  });

  constructor(
              private profileService : ProfileService,
              private router: Router, 
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private dataService : DataaccessService) { 

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

        this.passswordForm.get('currentPassword')?.valueChanges.subscribe(() => {
          const errors: ValidationErrors | null = this.passswordForm.get('currentPassword')?.errors ?? null;
          this.passwordValidationErrors = errors;
        });

         this.passswordForm.get('newPassword')?.valueChanges.subscribe(() => {
          const errors: ValidationErrors | null = this.passswordForm.get('newPassword')?.errors ?? null;
          this.passwordValidationErrors = errors;
        });

         this.passswordForm.get('confirmPassword')?.valueChanges.subscribe(() => {
          const errors: ValidationErrors | null = this.passswordForm.get('confirmPassword')?.errors ?? null;
          this.passwordValidationErrors = errors;
        });


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
    if (this.passswordForm.get('newPassword')?.value === this.passswordForm.get('confirmPassword')?.value) {
      this.passwordUpdateDto.username = this.user.username;
      this.passwordUpdateDto.currentPassword = this.passswordForm.get('currentPassword')?.value ?? '';
      this.passwordUpdateDto.newPassword = this.passswordForm.get('newPassword')?.value ?? '';
      console.log(this.passwordUpdateDto);
      this.dataService.UpdatePasswordAsync(this.passwordUpdateDto).subscribe({
        next: (result) => {
          console.log('Password updated successfully', result);
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Password updated successfully'}); 
          },
        error: (error) => {
          console.error('Error updating password', error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Failed to update password'}); 
        }
      });
      this.passswordForm.reset();
      this.confirmPasswordDialogVisible = false;
      this.badPassword = false;
    
    } 
    else {
      this.badPassword = true;
    }
 }
}