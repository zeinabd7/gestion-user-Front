import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Users } from '../users/data';
import { HttpClientModule,HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_connect!: Users
  isLoggedIn = new BehaviorSubject(false);
  private userSubject: any;
  // public user: Observable<Users>;
  public user: any;
  //public use?:Users[];
  constructor(private http:HttpClient) {
    this.userSubject = localStorage.getItem('user')!;
    // this.user = this.userSubject.asObservable();
    this.user = this.userSubject
   
   }
  //role!:string;
    public  userValue()  {
      let user: String =  localStorage.getItem('user')!
      console.log('===uservqlue', localStorage.getItem('user'));
      
      return this.userSubject;
      }
     /*  login(username: string, password: string) {
        const api_url="http://localhost:3000"
        return this.http.post<any>(`${api_url}/login`, { username, password})
            .pipe(map((user: Users) => {
                
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            })); 
    } */
  
    public logoutUser(){
      this.isLoggedIn.next(false);
    }
    public getRole(){
      let user = this.user_connect.role
      console.log('users===',user);
      
      return user
      //return this.user;
    }


}
