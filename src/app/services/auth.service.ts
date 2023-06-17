import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Users } from '../users/data';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_connect!: Users;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userSubject: any;
  public user: any;
  private use!:Users[];
  id:number=8;
  //public userConnectObservable: Observable<any>;

  constructor(private http:HttpClient,private router:Router,private _userService:UserService) {
   
    this.userSubject = localStorage.getItem('user');
    //this.use= [{ id: 8, group: [], role: 'user' },{ id: 1, group: [], role: 'user' }];
    this._userService.getUsersList().subscribe((data: any[])=>{
      this.use=data;
      //console.log(this.use);
      const lol=8
      // const currentUser = this.use.find(user => user.id === lol); 
      // console.log("POIUHN?",currentUser);
      
      // if (currentUser) {
      //   this.user_connect = currentUser;

      // }

    });
// 
    
    //this.user_connect = { id: 1, group: [], role: 'user' };
    this.user = this.userSubject
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.loggedIn.next(isLoggedIn === 'true');

   }
   
   isLoggedIn():Observable<boolean>{
    
    return this.loggedIn.asObservable();
    
   }
   isUser():boolean{
    console.log("whats in user connect",this.user_connect);
    
    let test=this.user_connect && this.user_connect.role === 'user';
    if (test){
    console.log("LE ROLE EST",test);
    
    return true;}
    else
    {
      console.log("une erreur",test);
      
      return false;
    }
    //return this.userrole.asObservable();
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
    // public getGroup(): string {
    //   const userGroups = this.user_connect.group;
    //   if (userGroups && userGroups.length > 0) {
    //     const groupName: string = userGroups[0].name;
    //     return groupName;
    //   }
    //   return '';
    // }


}
