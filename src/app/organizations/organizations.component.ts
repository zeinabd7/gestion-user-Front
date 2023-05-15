import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent {
  constructor(private router:Router){}

goToCreate(){
  this.router.navigate(['organizations/organizations-create']);
  
}
}
