import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {

    if (typeof localStorage === 'undefined') {
      this.router.navigate(['/login']);
      console.log('Local storage is not available.');
      return false;
    }
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      console.log('No token found in local storage.');
      return false;
    }

    console.log('Token found:', token);
    return true;
  }
}
