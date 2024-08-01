import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from '../models/interfaces/user';
import { Roles } from '../models/enums/roles';

@Injectable({
  providedIn: 'root'
})
export class UserDataProviderService {
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);


  setUser(user: User): void {
    this.user$.next(user);
  }

  getUser(): User {
    return this.user$.getValue();
  }

  isAdmin(): boolean {
    return this.user$.getValue().role === Roles.ADMIN;
  }

  isManager(): boolean {
    return this.user$.getValue().role === Roles.MANAGER;
  }

  isEmployee(): boolean {
    return this.user$.getValue().role === Roles.EMPLOYEE;
  }

  getUserDataAsObservable(): Observable<User> {
    return this.user$.asObservable();
  }
}
