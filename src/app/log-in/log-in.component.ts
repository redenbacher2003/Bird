import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { loginRequest, tokenResponse } from '../interface/items';
import { AuthService } from '../auth-service.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-log-in',
  imports: [FloatLabel, FormsModule, InputTextModule, ButtonModule, PasswordModule],
  providers: [AuthService],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
  standalone: true
})
export class LogInComponent {
  constructor(private authService: AuthService, private router: Router) {}
  userName: string = '';
  passWord: string = '';
  loginRequest: loginRequest = {
    userName: this.userName,
    passWord: this.passWord
  };

  onSubmit() {
    this.loginRequest.userName = this.userName;
    this.loginRequest.passWord = this.passWord;

    this.authService.login(this.loginRequest).subscribe((response: tokenResponse) => {
      if (response && response.accessToken) {
        localStorage.setItem('token', response.accessToken);
        console.log('Login successful, token stored:', response.accessToken);
        // Redirect to the dashboard or home page after successful login
        this.router.navigate(['/dashboard']);
      } else {
        console.error('Login failed, no token received');
      }

    }); 
  
  }
}