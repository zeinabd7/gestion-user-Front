import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Users } from '../users/data';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_connect!: Users
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userSubject: any;
  //private loggedInn: boolean = false;
  // public user: Observable<Users>;
  public user: any;
  //public use?:Users[];
    
  constructor(private http:HttpClient,private router:Router) {
    this.userSubject = localStorage.getItem('user')!;
    // this.user = this.userSubject.asObservable();
    this.user = this.userSubject
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.loggedIn.next(isLoggedIn === 'true');
   }
   isLoggedIn():Observable<boolean>{
    
    return this.loggedIn.asObservable();
    
   }
  
    setLoggedInStatus(loggedIn: boolean): void {
      //this.loggedInn=loggedIn;
      this.loggedIn.next(loggedIn);
      localStorage.setItem('isLoggedIn', loggedIn.toString());
    }
    public  userValue()  {
      //let user: String =  localStorage.getItem('user')!
      //console.log('===uservqlue', localStorage.getItem('user'));
      
      return this.userSubject;
      }
      login(){
        const api_url="http://localhost:3000"
        this.http.get<any>(`${api_url}/users`).subscribe(
          res=>{
            const user = res.find((a:Users)=>{
              return a.username === user.username  && a.password === user.password ;
            });
            if(user){
              localStorage.setItem('user',user)
              //this._authService.user_connect = user
              this.loggedIn.next(true)
            this.router.navigate(['dashboard/top-cards']);
            }
          }
         )
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
  
     public logout():void{
      // this.loggedIn.next(false); 
      // localStorage.removeItem('isLoggedIn');
      // this.router.navigate(['login']);
      this.setLoggedInStatus(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
      }
    public getRole(){
      let user = this.user_connect.role
      //console.log('users===',user);
      
      return user
      //return this.user;
    }
    public getGroup(): string {
      const groupName: string = this.user_connect.group[0].name;
      return groupName;
    }


}
