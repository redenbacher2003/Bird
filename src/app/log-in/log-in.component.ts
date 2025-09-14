import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { loginRequest, tokenResponse } from '../interface/items';
import { AuthService } from '../auth-service.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { UserProfile } from '../interface/items';
import { ProfileService } from '../profile.service';
import { DataaccessService } from '../dataaccess.service';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-log-in',
  imports: [FloatLabel,
            FormsModule, 
            InputTextModule, 
            ButtonModule, 
            PasswordModule,
            Dialog],
  providers: [AuthService],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
  standalone: true
})
export class LogInComponent {
  constructor(private authService: AuthService,
              private router: Router,
              private profileService : ProfileService,
              private dataAccessService : DataaccessService) {}

  userName: string = '';
  passWord: string = '';
  visible: boolean = false;

  loginRequest: loginRequest = {
    userName: this.userName,
    passWord: this.passWord
  };

    showDialog() {
        this.visible = true;
    }

  onSubmit() {
  this.loginRequest.userName = this.userName;
  this.loginRequest.passWord = this.passWord;

  this.authService.login(this.loginRequest).subscribe({
    next: (response: tokenResponse) => {
      if (response && response.accessToken) {
        localStorage.setItem('token', response.accessToken);

        // Fetch and store user profile after successful login
        this.dataAccessService.GetByUserIdAsync(this.userName).subscribe({
          next: (profile: UserProfile) => {
            this.profileService.setUser(profile); // Store in profile Service
            console.log('User profile fetched and stored:', profile);
          },
          error: (err) => {
            console.error('Error fetching user profile:', err);
            this.showDialog();
          }
        });

        // Redirect to the dashboard or home page after successful login
        this.router.navigate(['/dashboard']);
      } else {
        this.visible = true;
      }
    },
    error: (err) => {
      console.error('Login error:', err);
      this.visible = true;
    }
  });
} 
}