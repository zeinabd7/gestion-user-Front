
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private userService: UserService,private router:Router){}
  loginForm!: FormGroup

  Login(){
     if(this.loginForm.valid){

      this.userService.getToken(this.loginForm.value)
          .subscribe({
            next: () => {
                this.router.navigate(['dashboard/top-cards']);
                //console.log('login success');
            },
            error: error => {
                console.log('login error', error);
            }
        });
      } 
  
    
    
  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({ 
        username: [null, [Validators.required] ],
        password: [null,[Validators.required,Validators.minLength(4)]]
      })
  }
}

