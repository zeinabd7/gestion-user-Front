import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userIsAuthenticated: boolean=false;
  constructor(private router : Router,private _authService:AuthService) {}
  ngOnInit() {
    this._authService.isLoggedIn.subscribe((status) => {
      this.userIsAuthenticated = status;
    });
  }
  goToHome(){
    this.router.navigate(['dashboard/top-cards']);
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  onLogout(){
    this._authService.logoutUser();
    this.router.navigate(['login']);  
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
