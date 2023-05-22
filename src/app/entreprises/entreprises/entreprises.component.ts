import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Entreprises } from '../data';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { Organizations } from 'src/app/organizations/data';

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
  organizations?:Organizations[];
  constructor(private modalService:BsModalService,private _fb: FormBuilder,private _entrepriseService:EntreprisesService,private _orgaService:OrganizationsService){
    //this.user=user;
    this.entrepriseForm = this._fb.group({
      name:'',
      owner:'',
    });
  }
  ngOnInit(): void {
    this._entrepriseService.getEntreprises().subscribe((data: Entreprises[])=>{
      this.entreprises=data;
      });
    }
goToCreate(){
 console.log("est")
}
create(){
  if (this.entrepriseForm.valid){
    this._entrepriseService.addEntreprise(this.entrepriseForm.value).subscribe({
      next: () => {
        console.log(this.entrepriseForm.value);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
// }
this.close();
}
}
openModal(template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);  
}
openEditForm(data:any,template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  this.entrepriseForm.patchValue(data);this._entrepriseService.updateEntreprise(this.entrepriseForm.value.id).subscribe({
        next: () => {
          console.log("updating");
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

}
close(): void {
  this.modalRef?.hide();
  }
  showOrganizations(){
    this._entrepriseService.getOrganizationsbyEntreprise();
  }
}
