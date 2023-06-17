import { Injectable } from '@angular/core';
import { Groups, Group_Permissions } from '../groups/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
groups!:Groups[];
  constructor(private http:HttpClient) {
    this.groups=this.groups;
  }
  getGroups(){
    return this.http.get<Groups[]>('http://localhost:3000/groups');
  }
  getGroup(id:number):Observable<Groups>{
    return this.http.get<Groups>('http://localhost:3000/groups/'+id);
  }
  addGroup(group:Groups):Observable<Groups>{
    return this.http.post<Groups>('http://localhost:3000/groups',group);
  }
  updateGroup(group:Groups):Observable<Groups>{
    return this.http.put<Groups>('http://localhost:3000/groups/'+group.id,group);
  }
  deleteGroup(id:number):Observable<Groups>{
    return this.http.delete<Groups>('http://localhost:3000/groups/'+id);
  }
  addGroupPermissions(grp:Group_Permissions):Observable<Group_Permissions>{
    return this.http.post<Group_Permissions>('http://localhost:3000/group_permissions',grp);

  }
}
