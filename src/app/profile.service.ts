import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityEvent, activityLog, UserProfile } from './interface/items';

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

  getUserLogs(userLog : activityLog[]): ActivityEvent[] | null {

    return userLog?.map(log => ({
      status: log.activityType,
      date: log.activityDate,
      icon: this.getActivityIcon(log.activityType),
      color: '#2196F3' 
    })) || null;
  }
  private getActivityIcon(activityType: string): string {
    switch (activityType) {
      case 'User logged in':
        return 'login-Icon';
      case 'User updated password':
        return 'update-password-Icon';
      default:
        return 'pi pi-info-circle';
    }
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

  logout(): void {
    this.clearUser();
    localStorage.removeItem('token');
  }
}