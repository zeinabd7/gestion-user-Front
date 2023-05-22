
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../services/auth.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private formBuilder: FormBuilder,private router:Router,private _authService:AuthService,private http:HttpClient){}
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      username: [''] ,
      password: ['']
    })
}
  /* if (this._authService.userValue) { 
    this.router.navigate(['dashboard/top-cards']);
} */
  Login(){
     if(this.loginForm.valid){

        const val = this.loginForm.value;
        const api_url="http://localhost:3000"
         this.http.get<any>(`${api_url}/users`).subscribe(
          res=>{
            const user = res.find((a:any)=>{
              return a.username === val.username && a.password === val.password ;
            });
            if(user){
              localStorage.setItem('user',user)
              this._authService.user_connect = user
            this.router.navigate(['dashboard/top-cards']);
            }
          }
          
         )
   
      } 
  
    
    
  }

  
}

