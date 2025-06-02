import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { loginRequest, tokenResponse } from '../interface/items';
import { AuthService } from '../auth-service.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-log-in',
  imports: [FloatLabel, FormsModule, InputTextModule, ButtonModule],
  providers: [AuthService],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  constructor(private authService: AuthService) {}
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
      } else {
        console.error('Login failed, no token received');
      }

    }); 
  
  }
}