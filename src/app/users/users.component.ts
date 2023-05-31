import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EntreprisesService } from '../services/entreprises.service';
import { UserService } from '../services/user.service';
import { Users } from './data';
import { Entreprises } from '../entreprises/data';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
userForm!:FormGroup;
users?:Users[];
modalRef?:BsModalRef;
entreprises!:any;
entre!:Entreprises[];
entrepriseId!:any;
constructor(private modalService:BsModalService,private _fb: FormBuilder,private _userService:UserService,private _entrepriseService : EntreprisesService){
this.userForm=this._fb.group({
  name:'',
  username:'',
  password:'',
  role:'',
  entreprise_id:'',
  token:''
});

this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
  this.entreprises=data;
});
}
ngOnInit(): void {
    this._userService.getUsersList().subscribe((data:Users[])=>{
      this.users=data;
});
this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
  this.entre=data;
  this.entrepriseId=this.entre;
});

}
// getEntrepriseName(entrepriseId: number) {
//   this._entrepriseService.getEntreprises().subscribe(
//     res=>{
//       const entreprise=res.find((e:any)=>{
//         return e.id===entrepriseId;
//       })
//     });
//   }
getEntrepriseName(entrepriseId?: number): string {
  
  if(entrepriseId){
    const entreprise = this.entre.find(e => e.id === entrepriseId);
    return entreprise ? entreprise.name : 'Erreur';
       
  }
  return '';
}
create(){
  if (this.userForm.valid) {
    this._userService.addUser(this.userForm.value).subscribe({
      next: () => {
        console.log(this.userForm.value);
        console.log(this.userForm.value.i);
        
      },
      error: (error) => {
        console.log(error);
        }
    })
  } else {
    alert('Formulaire non valdie')
  }
}
openModalUser(template:TemplateRef<any>){
this.modalRef=this.modalService.show(template)
}
close():void{
  this.modalRef?.hide();
}
openEditForm(){

}
deleteUser(id:any){
  if(confirm('Voulez-vous spprimer?')){
    this._userService.deleteUser(id).subscribe({
      next: () => {
        window.location.reload()
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}

}
