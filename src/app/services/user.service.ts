import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getToken(donnees:any){
    return this.http.post('http://localhost:3000/login',donnees)
  }
}
