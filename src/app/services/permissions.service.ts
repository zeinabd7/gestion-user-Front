import { Injectable } from '@angular/core';
import { Permissions } from '../groups/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
permissions!:Permissions[];
  constructor(private http:HttpClient) {
    this.permissions=this.permissions;
   }
  getPermissions(){
    return this.http.get<Permissions[]>('http://localhost:3000/permissions');
  }
  getPermission(id:number):Observable<Permissions>{
    return this.http.get<Permissions>('http://localhost:3000/permissions/'+id);
  }
  addPermissions(permission:Permissions):Observable<Permissions>{
    return this.http.post<Permissions>('http://localhost:3000/permissions',permission);
  }
  updatePermissions(permission:Permissions):Observable<Permissions>{
    return this.http.put<Permissions>('http://localhost:3000/permissions/'+permission.id,permission);
  }
  deletePermissions(id:number):Observable<Permissions>{
    return this.http.delete<Permissions>('http://localhost:3000/permissions/'+id);
  }
  
}
