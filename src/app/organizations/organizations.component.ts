import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Organizations } from './data';
import { OrganizationsService } from '../services/organizations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from '../entreprises/data';
import { EntreprisesService } from '../services/entreprises.service';
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
  constructor(private router:Router,private orgaService:OrganizationsService,private _fb:FormBuilder,private modalService:BsModalService,private _entrepriseService : EntreprisesService){
    this.organizationForm = this._fb.group({
      name: ['', Validators.required],
      entreprise_id:['',Validators.required]
      });
      this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
        this.entreprises=data;
      });
  }
  ngOnInit(): void {
      this.orgaService.getOrganizations().subscribe((data: Organizations[])=>{
        this.organizations=data;
        });
      }
    

create(){
  if (this.organizationForm.valid){
    this.orgaService.addOrganization(this.organizationForm.value).subscribe({
      next: () => {
        console.log(this.organizationForm.value);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
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
}
