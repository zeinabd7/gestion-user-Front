import { EntreprisesComponent } from './../../entreprises/entreprises/entreprises.component';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from 'src/app/entreprises/data';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { Organizations } from '../data';
import { EditOrgaComponent } from '../edit-orga/edit-orga.component';

@Component({
  selector: 'app-orga-list',
  templateUrl: './orga-list.component.html',
  styleUrls: ['./orga-list.component.css']
})
export class OrgaListComponent {
  organizationForm!:FormGroup;
  organizations?:Organizations[];
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  entreprises!:Entreprises[];
  entreprise_id:any;

  @ViewChild(EntreprisesComponent) entrepriseComponent!: EntreprisesComponent;
   constructor(private router:Router,private orgaService:OrganizationsService,private _fb:FormBuilder,private modalService:BsModalService,private _entrepriseService : EntreprisesService,private route:ActivatedRoute){
    this.organizationForm = this._fb.group({
      id:[''],
      name: ['', Validators.required],
      entreprise_id:['',Validators.required]
      });
      this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
        this.entreprises=data;
      });
      
      // this.entreprise_id =+ this.route.snapshot.paramMap.get('entreprise_id')!;
      // console.log(this.route.snapshot.paramMap);
      
  }
  ngOnInit(): void {
	this.entreprise_id = this._entrepriseService.getEntrepriseId()
    this.showOrganizations(this.entreprise_id)
      }
	  
    showOrganizations(entreprise_id:number){
        this.orgaService.getOrganizationsbyEntrepriseId(entreprise_id).subscribe({
          next: (data:any) =>  {
            this.organizations=data;
          },
          error: (err: any) => {
            console.error(err);
          },
        });
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

close():void{
  this.modalRef?.hide();
}
editOrga(orga:Organizations){
  //this.modalRef = this.modalService.show(EditOrgaComponent);
  const ref = this.modalService.show(EditOrgaComponent);
}
}

