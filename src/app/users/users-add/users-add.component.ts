import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit{
  userForm!:FormGroup;
  modalRef: any;
  constructor(private _fb: FormBuilder,private _userService:UserService,private modalService:BsModalService){
    this.userForm = this._fb.group({
      name:'',
      email:'',
      password:'',
       role:'',});
  }
ngOnInit(): void {
  
}
create(){
  if (this.userForm.valid){
    this._userService.addUser(this.userForm.value).subscribe({
      next: () => {
        console.log("success");
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
openModalUser(template: TemplateRef<any>){
  //this.router.navigate(['users/users-add']);
  this.modalRef = this.modalService.show(
    template
  );  
}
}
