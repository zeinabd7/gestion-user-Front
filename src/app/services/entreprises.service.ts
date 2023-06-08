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
  private entrepriseId: any;

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
    console.log(entreprise.id);
    
    return this.http.put<Entreprises>('http://localhost:3000/entreprises/'+entreprise.id,entreprise);
    }
  deleteEntreprise(id:number):Observable<Entreprises>{
    return this.http.delete<Entreprises>('http://localhost:3000/entreprises/'+id);
    }
    setEntrepriseId(id: any): void {
      this.entrepriseId = id;
    }
  
    getEntrepriseId(): any {
      return this.entrepriseId;
    }
    }


