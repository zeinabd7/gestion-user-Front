import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent {
  isLoggedIn$!:Observable<boolean>;
  constructor(private router : Router,private _authService:AuthService) {}
  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn();
    this.isLoggedIn$.subscribe(loggedIn => {
      console.log(loggedIn);
    });
  }
  isUser():boolean{
    return this._authService.getRole()==='user';
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
}
