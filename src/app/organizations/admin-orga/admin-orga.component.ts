import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/users/data';

@Component({
  selector: 'app-admin-orga',
  templateUrl: './admin-orga.component.html',
  styleUrls: ['./admin-orga.component.css']
})
export class AdminOrgaComponent implements OnInit {
  userForm!:FormGroup;
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  users?: Users[];
  userList:any;
  entreprises!:any[];

constructor(private _userService:UserService,private modalService:BsModalService,private _fb: FormBuilder,private _entrepriseService : EntreprisesService) {
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
      },
      error: (err: any) => {
        console.error(err);

      },
    });
//}
}
}
close(): void {
this.modalRef?.hide();
}
openModalUser(template: TemplateRef<any>){
  //this.router.navigate(['users/users-add']);
  this.modalRef = this.modalService.show(template);  
  
}
}
