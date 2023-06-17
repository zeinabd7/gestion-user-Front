import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$!:Observable<boolean>;
  isUserr:boolean=false;
  constructor(private router : Router,private _authService:AuthService) {
    //this.isUserr=true;
  }
  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn();
    this.isLoggedIn$.subscribe(loggedIn => {
      console.log(loggedIn);
    });
    
    //console.log("user",this._authService.isUser());
    //this.isUserr=this._authService.isUser()
    
  }
  
  goToHome(){
    this.router.navigate(['dashboard/top-cards']);
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  onLogout(){
    this._authService.logout(); 
  }
  goToOrga(){
    this.router.navigate(['organizations']);
  }
  goToUsers(){
    this.router.navigate(['users']);
  }
  goToEntreprises(){
    this.router.navigate(['entreprises']);
  }
  goToGroups(){
    this.router.navigate(['groups']);
  }
}
