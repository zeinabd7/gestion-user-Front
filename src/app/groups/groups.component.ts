import { Component, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,ValidatorFn } from '@angular/forms';
import { Groups } from './data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GroupsService } from '../services/groups.service';
import { PermissionsComponent } from './permissions/permissions.component';
import { Permissions } from './data';
import { PermissionsService } from '../services/permissions.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
groupForm!:FormGroup;
modalRef?:BsModalRef;
template!: TemplateRef<any> ;
groups?:Groups[];
permissions!:Permissions[];
data:any;
formArray!: FormArray ;
constructor(private groupService:GroupsService,private _fb: FormBuilder,private modalService: BsModalService,private permService:PermissionsService) {
  this.groupForm=this._fb.group({
    id:[''],
    name:[''],
    perm: new FormArray([])
    
  }); 
  }
  ngOnInit(): void {
    console.log(this.permissions);
    console.log("wtf");
    this.formArray = this.groupForm.get('perm') as FormArray;
    this.permissions = [];
    this.permService.getPermissions().subscribe((data: Permissions[])=>{
      this.permissions=data;
      const group: any = {}; 
      this.permissions.forEach(permission => {
          group[permission.name] = new FormControl(permission.name);
          console.log("ppppppppppppppppppppppppppppppp" + group);
      });
      this.formArray.push(new FormGroup(group));
      this.groupService.getGroups().subscribe((data: Groups[])=>{
        this.groups=data;
        });
    });
    
      
  }
  isPermissionSelected(permissionId: number): boolean {
  //   const selectedPermissions = this.groupForm.value.perm || [];
  //  // return true
  //   return selectedPermissions.includes(permissionId);
    console.log(permissionId);
    
    return false;
  }
  
  onChange(event: Event) {
    const permissionId = +(event.target as HTMLInputElement).value; // Convert the value to a number
  const checked = (event.target as HTMLInputElement).checked;

  const selectedPermissions = this.groupForm.get('perm');
  console.log("********************************" + this.groupForm.get('perm')?.value);

  if (selectedPermissions) {
    
    let permissionsValue = selectedPermissions.value;

    if (!Array.isArray(permissionsValue)) {
      permissionsValue = [];
    }

    if (checked) {
      permissionsValue.push(permissionId);
    } else {
      permissionsValue = permissionsValue.filter((id: number) => id !== permissionId);
    }

    selectedPermissions.setValue(permissionsValue);
  }
  }
  
  create(){
    if (this.groupForm.valid){
    //   console.log(this.groupForm.value);
      
    //   if(this.groupForm.value.id){
        
    //     this.data=this.groupForm.value.name;
        
    //     this.openEditForm(this.data,this.template);
    //   }else{
            
    //   this.groupService.addGroup(this.groupForm.value.name).subscribe({
    //     next: () => {
    //       console.log(this.groupForm.value);
    //     },
    //     error: (err: any) => {
    //       console.error(err);
    //     },
    //   });
    // }
    // }
    console.log(this.groupForm.value);
    
  //   const p = this.groupForm.value.perm;
  //   console.log(' Permissions:', p);
  
  // const groupData = {
  //   id: this.groupForm.value.id,
  //   name: this.groupForm.value.name
  // };
  // this.groupService.addGroup(groupData).subscribe(
  //   (groupResponse: any) => {
  //     console.log('Group créé');
  //     const groupId = groupResponse.id; 
  //     const groupPermissionData = {
  //       id: 0,
  //       id_group: groupId,
  //       id_permissions: p, 
  //     };
  //     this.groupService.addGroupPermissions(groupPermissionData).subscribe(
  //       () => {
  //         console.log('Group_permission');
  //         this.groupForm.reset();
          
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  //   },
  //   error => {
  //     console.error('Failed to create group', error);
  //   }
  // );}
  }
}
  openModal(template: TemplateRef<any>){
    this.groupForm = this._fb.group({
      id:'',
      name:'',
      perm:[],
    });
      this.modalRef = this.modalService.show(template);      
  }
  openPerm(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template); 
  }
  openEditForm(data:Groups,template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.groupForm.patchValue(data);  
    this.groupService.updateGroup(data).subscribe({
          next: () => {
            console.log("updating");
            console.log(this.groupForm.value.id);
            
        },
        error: (err: any) => {
          console.log(err);
          
          }
      })   
  }
  deleteGroup(id:number){
    if (confirm('Voulez-vous supprimer?')) {
    this.groupService.deleteGroup(id).subscribe({
      next: () => {
        console.log("deleting");
        window.location.reload()
        }
        })
      }
    }
permissionsList(){
  this.modalService.show(PermissionsComponent)
  console.log(this.groups);
  console.log(this.permissions);
  
}
}
