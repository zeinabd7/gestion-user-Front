
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private userService: UserService){}
  loginForm!: FormGroup

  Login(){
    this.userService.getToken(this.loginForm.value).subscribe(res=>{
      const token = JSON.parse(JSON.stringify(res))
      console.log(token[0].token);})
    
    
  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({ 
        username: [null, [Validators.required] ],
        password: [null,[Validators.required,Validators.minLength(4)]]
      })
  }
}

