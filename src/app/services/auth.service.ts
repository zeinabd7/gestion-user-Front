import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../users/data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);
  private userSubject: BehaviorSubject<Users | null>;
  constructor() {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
   }
  /* public login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    } */
    public get userValue() {
      return this.userSubject.value;
      }
    public logoutUser(){
      this.isLoggedIn.next(false);
    }
}
