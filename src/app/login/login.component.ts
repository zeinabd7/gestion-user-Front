
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
  loggedIn!: boolean;
  constructor( private formBuilder: FormBuilder,private router:Router,private _authService:AuthService,private http:HttpClient){}
  loginForm!: FormGroup
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      username: [''] ,
      password: ['']
    })
}

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
              localStorage.setItem('user',JSON.stringify(user))
              this._authService.user_connect = user
              this._authService.setLoggedInStatus(true);
              const token = user.token;
              console.log("genretarded token",token);
              localStorage.setItem('token', token);
              console.log(this._authService.setLoggedInStatus);
              console.log(user);
              
              this.router.navigate(['dashboard/top-cards']);
            }
          }
          
          
          
         )
   
      }  
  } 

  
}

