import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../users/data';
//import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getToken(donnees:any){
    return this.http.post('http://localhost:3000/login',donnees)
  }
  addUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  }
  getUsersList(): Observable<any> {
    return this.http.get<Users[]>(`http://localhost:3000/users`);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${id}`, data);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
   
}
