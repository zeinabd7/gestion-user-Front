import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PermissionsService } from 'src/app/services/permissions.service';
import { Permissions } from '../data';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
permissionForm!:FormGroup;
permissions?:Permissions[];
modalRef?:BsModalRef;
template!: TemplateRef<any> ;
constructor(private permService:PermissionsService,private _fb:FormBuilder,private modalService:BsModalService) {
  this.permissionForm = this._fb.group({
    id:[''],
    name: ['', Validators.required],
    });
 }
 ngOnInit(): void {
  this.permService.getPermissions().subscribe((data: Permissions[])=>{
    this.permissions=data;
    });
}
create(){
  
  if (this.permissionForm.valid){
    // if(this.permissionForm.value.id){
    // this.data=this.permissionForm.value;
    //  this.openEditForm(this.data,this.template)
    //  console.log(this.permissionForm.value);
      
    // }else{
    this.permService.addPermissions(this.permissionForm.value).subscribe({
      next: () => {
        console.log(this.permissionForm.value);
        window.location.reload();
      },
      error: (err: any) => {
        console.error(err);
      },
    });
//}
  }
}
openEditForm(data:any,template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  this.permissionForm.patchValue(data);
  if(this.permissionForm.value.id){
  this.permService.updatePermissions(this.permissionForm.value.id).subscribe({
        next: () => {
          console.log("updating");
          console.log(this.permissionForm.value.id);
          //window.location.reload();
          
      }
    }) 
  }  
}
deletePermission(id:number){
  if (confirm('Voulez-vous supprimer?')) {
  this.permService.deletePermissions(id).subscribe({
    next: () => {
      console.log("deleting");
      window.location.reload();
      }
      })
    }
}
openModal(template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);  
  
}
}
