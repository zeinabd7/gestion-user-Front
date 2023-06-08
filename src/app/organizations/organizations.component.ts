import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Organizations } from './data';
import { OrganizationsService } from '../services/organizations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from '../entreprises/data';
import { EntreprisesService } from '../services/entreprises.service';
import { EditOrgaComponent } from './edit-orga/edit-orga.component';
@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit{
  organizationForm!:FormGroup;
  organizations?:Organizations[];
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  entreprises!:Entreprises[];
  entreprise_id!:number;
  orga?:any[];
  constructor(private router:Router,private orgaService:OrganizationsService,private _fb:FormBuilder,private modalService:BsModalService,private _entrepriseService : EntreprisesService,private route:ActivatedRoute){
    this.organizationForm = this._fb.group({
      id:[''],
      name: ['', Validators.required],
      entreprise_id:['',Validators.required]
      });
      
  }
  ngOnInit(): void {
      this.orgaService.getOrganizations().subscribe((data: Organizations[])=>{
        this.organizations=data;
        });
       //this.showOrganizations(this.entreprise_id);
        //this.entreprise_id =+ this.route.snapshot.paramMap.get('entreprise_id')!;
        // this.route.params.subscribe(params => {
        //   const entrepriseId = params['entreprise_id'];
        //   this.showOrganizations(entrepriseId);
        // });
        
      }
    

create(){
  
  if (this.organizationForm.valid){
    // if(this.organizationForm.value){
    //   this.openEditForm
    //   console.log(this.organizationForm.value);
      
    // }
    this.orgaService.addOrganization(this.organizationForm.value).subscribe({
      next: () => {
        console.log(this.organizationForm.value);
        window.location.reload();
      },
      error: (err: any) => {
        console.error(err);
      },
    });
}
}
openEditForm(data:any,template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  this.organizationForm.patchValue(data);
  if(this.organizationForm.value.id){
  this.orgaService.updateOrganization(this.organizationForm.value.id,this.organizationForm.value).subscribe({
        next: () => {
          console.log("updating");
          console.log(this.organizationForm.value.id);
          //window.location.reload();
          
      }
    }) 
  }  
}
deleteOrganization(id:number){
  if (confirm('Voulez-vous supprimer?')) {
  this.orgaService.deleteOrganization(id).subscribe({
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
goToAddUsers(){
 //this.orgaService.openModal();
}
adminList(){
  this.router.navigate(['admin-orga']);
}
showOrganizations(entreprise_id:number){
  // this.orgaService.getOrganizationsbyEntrepriseId(entreprise_id).subscribe({
  //   next: (data:any) =>  {
  //     this.organizations=data;
  //   },
  //   error: (err: any) => {
  //     console.error(err);
  //   },
  // });
}
close():void{
  this.modalRef?.hide();
}
editOrga(orga:Organizations){
  //this.modalRef = this.modalService.show(EditOrgaComponent);
  const ref = this.modalService.show(EditOrgaComponent);
}
}


