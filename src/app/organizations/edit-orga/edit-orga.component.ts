import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from 'src/app/entreprises/data';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { Organizations } from '../data';

@Component({
  selector: 'app-edit-orga',
  templateUrl: './edit-orga.component.html',
  styleUrls: ['./edit-orga.component.css']
})
export class EditOrgaComponent {
  organizationForm!:FormGroup;
  organizations?:Organizations[];
  modalRef?:BsModalRef;
  template!: TemplateRef<any> ;
  entreprises!:Entreprises[];
  entreprise_id!:number;
  orga!:Organizations;
  constructor( private router:Router,private orgaService:OrganizationsService,private _fb:FormBuilder,private modalService:BsModalService,private _entrepriseService : EntreprisesService,private route:ActivatedRoute){
    /*this.organizationForm = this._fb.group({
      id:[''],
      name: ['', Validators.required],
      entreprise_id:['',Validators.required]
      
    });*/
      // this._entrepriseService.getEntreprises().subscribe((data: any[])=>{
      //   this.entreprises=data;
      // });
  }
  ngOnInit(): void {
    this.setForm();
      /*this.orgaService.getOrganizations().subscribe((data: Organizations[])=>{
        this.organizations=data;
        });
        this.entreprise_id =+ this.route.snapshot.paramMap.get('entreprise_id')!;*/
        
      }
      private setForm() {
      
        //if (this.organizations) {
          this.organizationForm = this._fb.group({
            //id: [this.orga.id],
            //name: [this.orga.name],
            //entreprise_id: [this.orga.entreprise_id]
            
          });
        //} else{
          this.orgaService.getOrganization().subscribe(user => {
            this.organizationForm.patchValue(user);
          });
          
        //}        
        
      }
  onSubmit(){
    //if(this.organizationForm.value.id){
      this.orgaService.updateOrganization(this.organizationForm.value.id,this.organizationForm.value).subscribe({
            next: () => {
              console.log("updating");
              console.log(this.organizationForm.value.id);
              //window.location.reload();
              
          }
        }) 
    //}else{
      //console.log("can't read value");
      
   // } 
    
  }
  
      
      

}
