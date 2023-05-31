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
  constructor(private router : Router,private _authService:AuthService) {}
  ngOnInit() {
    //this.isLoggedIn$ = this._authService.isLoggedIn();
    this.isLoggedIn$ = this._authService.isLoggedIn();
    
    this.isLoggedIn$.subscribe(loggedIn => {
      console.log(loggedIn);
    });
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
}
