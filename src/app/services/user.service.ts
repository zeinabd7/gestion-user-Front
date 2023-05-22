import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Users } from '../users/data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
//import { apiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _refreshrequired = new Subject<void>();
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;

  constructor(private http:HttpClient,private modalService:BsModalService) { }

  getToken(donnees:any){
    return this.http.post('http://localhost:3000/login',donnees)
  }
  /* addUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  } */
  getUsersList(): Observable<any> {
    return this.http.get<Users[]>(`http://localhost:3000/users`);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${id}`, data);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  get Refreshrequired() {
    return this._refreshrequired;
  }
  addUser(inputdata: any) {
    return this.http.post('http://localhost:3000/users', inputdata).pipe(
      tap(() => {
        this.Refreshrequired.next();

      })
    );
  }
  openModalUser(template: TemplateRef<any>){
    //this.router.navigate(['users/users-add']);
    this.modalRef = this.modalService.show(template);  
    
  }
  
   
}
