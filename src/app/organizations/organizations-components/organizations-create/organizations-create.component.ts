import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organizations-create',
  templateUrl: './organizations-create.component.html',
  styleUrls: ['./organizations-create.component.css']
})
export class OrganizationsCreateComponent implements OnInit{
  orgaForm!:FormGroup;
  constructor(private _fb: FormBuilder,){
    this.orgaForm = this._fb.group({name:''});
  }
  onFormSubmit(){}
  ngOnInit(): void {
      
  }
}
