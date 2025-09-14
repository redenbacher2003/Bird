import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './interface/items';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userKey = 'currentUser';
  private userSubject = new BehaviorSubject<UserProfile | null>(this.getUserFromStorage());

  user$ = this.userSubject.asObservable();

  constructor() {}

  private getUserFromStorage(): UserProfile | null {
    const data = localStorage.getItem(this.userKey);
    return data ? JSON.parse(data) : null;
  }

  setUser(user: UserProfile): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(): UserProfile | null {
    return this.userSubject.value;
  }

  clearUser(): void {
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }
}