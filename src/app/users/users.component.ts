import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EntreprisesService } from '../services/entreprises.service';
import { UserService } from '../services/user.service';
import { Users } from './data';
import { Entreprises } from '../entreprises/data';
import { Group } from './data';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
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
template!: TemplateRef<any> ;
entre!:Entreprises[];
entrepriseId!:any;
data:any;
entreprise!:any;
group!:Group[];
constructor(private modalService:BsModalService,private _fb: FormBuilder,private _userService:UserService,private _entrepriseService : EntreprisesService,private tokenService: TokenService,private auth:AuthService){
this.userForm=this._fb.group({
  id:'',
  name:'',
  username:'',
  password:'',
  role:'',
  entreprise_id:'',
  token:'',
  group:''
});
   this.group=[{
  id:1,name:"superadmin",droits:["r","w","x"]},
  {id:2,name:"user",droits:["r"]},
  {id:3,name:"admin",droits:["r","w"]}
]
// this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
//   this.entreprises=data;
// });
}
ngOnInit(): void {
  // if(this.auth.getGroup()==='superadmin'){
  //   this._userService.getUsersList().subscribe((data:Users[])=>{
  //     this.users=data;
  //   });
  // } else if(this.auth.getGroup()==='admin'){
  //   this._userService.getUsersListbyId(9).subscribe((data:Users[])=>{
  //     this.users=data;
  //   });
  // }
  
    this._userService.getUsersList().subscribe((data:Users[])=>{
      this.users=data;
    });
this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
  this.entre=data;
  //this.entrepriseId=this.entre;
});

}

getEntrepriseName(entrepriseId?: number): string {
  
  if(entrepriseId){
    this.entre.find((e)=>{
      if(e.id===entrepriseId){
        console.log(e);
        }
        });
     
    //const entreprise = this.entre.find(e => e.id === entrepriseId);
    return this.entreprise ? this.entreprise.name : 'Erreur';
       
  }
  return '';
}
create(){
  if (this.userForm.valid){
    console.log(this.userForm.valid);
    
    if(this.userForm.value.id){
      
      this.data=this.userForm.value;
      
      this.openEditForm(this.data,this.template);
    }else{
      const selectedGroupName = this.userForm.value.group;
      const selectedGroup = this.group.find(group => group.name === selectedGroupName);
  
      if (selectedGroup) {
        const user = {
          ...this.userForm.value,
          group: [selectedGroup]
        };
      
    this._userService.addUser(user).subscribe({
      next: () => {
        console.log(this.userForm.value);
        localStorage.setItem('token', user.token);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
    }
}
}}
openModalUser(template:TemplateRef<any>){
  this.userForm=this._fb.group({
    name:'',
    username:'',
    password:'',
    role:'',
    entreprise_id:'',
    token:'',
    group:''
  });
this.modalRef=this.modalService.show(template)
}
close():void{
  this.modalRef?.hide();
}
openEditForm(data:Users,template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  this.userForm.patchValue(data);
  
  this._userService.updateUser(data).subscribe({
        next: () => {
          console.log("updating");
          console.log("id user==",this.userForm.value.id);
          //window.location.reload();
          
      },
      error:(err:any)=>{
        console.log(err);
      }
    }) 
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
