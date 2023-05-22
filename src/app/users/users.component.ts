import { Component, Input, OnInit, TemplateRef } from '@angular/core';
//import { Router } from '@angular/router';
import { Users } from './data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { EntreprisesService } from '../services/entreprises.service';
//import { UsersAddComponent } from './users-add/users-add.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm!:FormGroup;
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  users?: Users[];
  userList:any;
  entreprises!:any[];
  //id!:any
    constructor(private modalService:BsModalService,private _fb: FormBuilder,private _userService:UserService,private _entrepriseService : EntreprisesService){
    this.userForm = this._fb.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', [Validators.required] ],
            //entreprise_name: ['', [Validators.required] ],
            entreprise_id: ['', [Validators.required] ],

    });
    this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
      this.entreprises=data;
    });
  }
  ngOnInit(): void {
     this._userService.getUsersList().subscribe(
      (users: Users[]) => this.users = users
      ); 
  }
  
  create(){
    if (this.userForm.valid){
      /* if (this.userForm.value) {
        this._userService.updateUser(this.userForm.value.id,this.userForm.value).subscribe({
          next: () => {
            console.log("updating");
            this.refreshList();
            
        }
      })
      }
       else {   */
      this._userService.addUser(this.userForm.value).subscribe({
        next: () => {
          console.log(this.userForm.value);
          this.close();
          this.refreshList();
        },
        error: (err: any) => {
          console.error(err);

        },
      });
  //}
  }
  }
  openModal(template: TemplateRef<any>){
    //this.router.navigate(['users/users-add']);
    //this.modal.openModalUser(template);
  }
  close(): void {
  this.modalRef?.hide();
  }
  openModalUser(template: TemplateRef<any>){
    //this.router.navigate(['users/users-add']);
    this.modalRef = this.modalService.show(template);  
    
  }
  openEditForm(data:any,template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    //this.openModalUser(this.template);
    this.userForm.patchValue(data);this._userService.updateUser(this.userForm.value.id,this.userForm.value).subscribe({
          next: () => {
            console.log("updating");
        }
      })   
  }
  deleteUser(id:any){
    console.log(id);
    if (confirm('Voulez-vous supprimer?')) {
      this._userService.deleteUser(id).subscribe({
        next: () => {
          this.refreshList();
          console.log("ok")
        },
        error: console.log,
      });
    }
}
refreshList() {
  this._userService.getUsersList().subscribe(res => this.userList = res);
}
}
