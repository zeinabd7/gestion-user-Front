import { Component } from '@angular/core';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';


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
  // ngOnInit() {
  //   if(this.authService.userValue()){
  //     this.user = this.authService.userValue();
  //   }
  // }
  
}

