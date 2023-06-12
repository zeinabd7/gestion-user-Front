import { Component } from '@angular/core';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  [x: string]: any;
  
  title = 'gestion_user_Front';
  constructor(private tokenService:TokenService,private authService:AuthService){}
  isLoggedIn$!:Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.isLoggedIn$.subscribe(loggedIn => {
      console.log(loggedIn);
    });
  }
  // ngOnInit() {
  //   if(this.authService.userValue()){
  //     this.user = this.authService.userValue();
  //   }
  // }
  isUser():boolean{
    return this.authService.getRole()==='user';
  }
  
}

