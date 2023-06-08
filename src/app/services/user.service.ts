import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Users } from '../users/data';
import { TokenService } from './token.service';
//import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private userId!:any;
  template!: TemplateRef<any> ;

  constructor(private http:HttpClient,private tokenService: TokenService) { }

  getToken(donnees:any){
    return this.http.post('http://localhost:3000/login',donnees)
  }
   addUser(data: any): Observable<any> {
    const userWithToken = this.tokenService.addTokenToUser(data);
    return this.http.post('http://localhost:3000/users', userWithToken);
  } 
  getUsersList(): Observable<any> {
    return this.http.get<Users[]>(`http://localhost:3000/users`);
  }
  getUsersListbyId(id:any):Observable<any>{
    return this.http.get<Users[]>(`http://localhost:3000/users/${id}`);
  }
  updateUser(user:Users): Observable<any> {
    return this.http.put('http://localhost:3000/users/'+user.id,user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  
  
  setUser(id:any):void{
    this.userId = id;

  }
  getUser():any{
    return this.userId;
  }
  
   
}
