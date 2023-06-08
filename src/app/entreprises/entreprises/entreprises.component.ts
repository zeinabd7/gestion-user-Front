import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from '../data';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { Organizations } from 'src/app/organizations/data';
import { Router } from '@angular/router';
import { OrgaListComponent } from 'src/app/organizations/orga-list/orga-list.component';
import { HttpClient } from '@angular/common/http';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent {
  entrepriseForm!:FormGroup;
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  entreprises?: Entreprises[];
  organizations!:Organizations[];
  data:any;
  entreprise_id!:number;
  @Output() openOrganizations: EventEmitter<any> = new EventEmitter<any>();

  //entrepriseId!:number;
  constructor(private modalService:BsModalService,private _fb: FormBuilder,private _entrepriseService:EntreprisesService,private _orgaService:OrganizationsService,private router:Router,private http:HttpClient){
    //this.user=user;
    this.entrepriseForm = this._fb.group({
      id:'',
      name:'',
      owner:'',
    });
    this._orgaService.getOrganizations().subscribe((data: any[])=>{
      this.organizations=data;
    });
  }
  ngOnInit(): void {
    this._entrepriseService.getEntreprises().subscribe((data: Entreprises[])=>{
      this.entreprises=data;
      });
      
  }
  // success(): void {
  //   this.toastr.success('This is a success message', 'Tada');
  // }

create(){
  if (this.entrepriseForm.valid){
    console.log(this.entrepriseForm.value);
    
    if(this.entrepriseForm.value.id){
      
      this.data=this.entrepriseForm.value;
      
      this.openEditForm(this.data,this.template);
    }else{
          
    this._entrepriseService.addEntreprise(this.entrepriseForm.value).subscribe({
      next: () => {
        console.log(this.entrepriseForm.value);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
}

}
}
open(enterprise_id: any) {
	this._entrepriseService.setEntrepriseId(enterprise_id);
	this.modalService.show(OrgaListComponent)
}

openModal(template: TemplateRef<any>){
  this.entrepriseForm = this._fb.group({
    id:'',
    name:'',
    owner:'',
  });
    this.modalRef = this.modalService.show(template);  
  
}
openEditForm(data:Entreprises,template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  this.entrepriseForm.patchValue(data);  
  this._entrepriseService.updateEntreprise(data).subscribe({
        next: () => {
          console.log("updating");
          console.log(this.entrepriseForm.value.id);
          
      },
      error: (err: any) => {
        console.log(err);
        
        }
    })   
}

deleteEntreprise(id:number){
  if (confirm('Voulez-vous supprimer?')) {
  this._entrepriseService.deleteEntreprise(id).subscribe({
    next: () => {
      console.log("deleting");
      }
      })
    }
this.refreshList();
}
close(): void {
  this.modalRef?.hide();
  }
  
  refreshList(){
    this._entrepriseService.getEntreprises().subscribe((data: Entreprises[])=>{
      this.entreprises=data;
      });
  }
  redirectToOrganizations(entreprise_id: number) {
    this.router.navigate(['organizations', entreprise_id]);
  }
  
}
