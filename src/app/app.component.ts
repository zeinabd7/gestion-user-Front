import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'gestion_user_Front';
  constructor(private router : Router,private _authService:AuthService) {}

  goToLogin(){
    this.router.navigate(['login']);
  }
  onLogout(){
    this._authService.logoutUser();
    this.router.navigate(['login']);  
  }
}

