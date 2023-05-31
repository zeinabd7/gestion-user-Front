import { Injectable, TemplateRef } from '@angular/core';
import { Organizations } from '../organizations/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  //template!: TemplateRef<any> ;
  organizations!:Organizations[];
  constructor(private http:HttpClient,private use:UserService) {
    this.organizations=this.organizations;
   }
  getOrganizations():Observable<any>{
    return this.http.get<Organizations>('http://localhost:3000/organizations');
    }
  /*getOrganization(id:number):Observable<Organizations>{
    return this.http.get<Organizations>('http://localhost:3000/organizations/'+id);
    }*/
    getOrganization():Observable<any>{
      return this.http.get<any>('http://localhost:3000/organizations/');
      }
    
  addOrganization(data:Organizations):Observable<Organizations>{
      return this.http.post<Organizations>('http://localhost:3000/organizations',data);
    }
  updateOrganization(id:number,organization:Organizations):Observable<Organizations>{
    return this.http.put<Organizations>(`http://localhost:3000/organizations/${id}`,organization);
      }

  deleteOrganization(id:number):Observable<Organizations>{
    return this.http.delete<Organizations>('http://localhost:3000/organizations/'+id);
    }
  /* openModal(){
    this.use.openModalUser(this.template);
  } */
  getOrganizationsbyEntrepriseId(entrepriseId:number):Observable<any>{
    const url = `http://localhost:3000/organizations?entreprise_id=${entrepriseId}`;
  return this.http.get<any>(url);
  }


}
