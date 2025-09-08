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
      return false;
    }
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
