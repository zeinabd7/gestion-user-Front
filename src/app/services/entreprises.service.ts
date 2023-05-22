import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprises } from '../entreprises/data';
import { Organizations } from '../organizations/data';
@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  entreprises!:Entreprises[];
  organizations!:Organizations[];
  constructor(private http:HttpClient) { 
    this.entreprises=this.entreprises;
  }
    getEntreprises(){
    return this.http.get<Entreprises[]>('http://localhost:3000/entreprises');
    }
    getEntreprise(id:number):Observable<Entreprises>{
      return this.http.get<Entreprises>('http://localhost:3000/entreprises/'+id);
      }
  
  addEntreprise(entreprise:Entreprises):Observable<Entreprises>{
    return this.http.post<Entreprises>('http://localhost:3000/entreprises',entreprise);
    }
  updateEntreprise(entreprise:Entreprises):Observable<Entreprises>{
    return this.http.put<Entreprises>('http://localhost:3000/entreprises/'+entreprise.id,entreprise);
    }
  deleteEntreprise(id:number):Observable<Entreprises>{
    return this.http.delete<Entreprises>('http://localhost:3000/entreprises/'+id);
    }
    getOrganizationsbyEntreprise(){
       this.http.get<any[]>('http://localhost:3000/entreprises')

      .subscribe((entreprises: any[]) => {
        this.entreprises = entreprises;

        // Fetch organizations for each enterprise
        this.organizations.forEach((organization) => {
          this.http.get<any[]>('http://localhost:3000/organizations', {
            params: { entreprise_id: organization.entreprise_id}
            
          })
          console.log(organization);
          
        });
      }); 
  }
    }


