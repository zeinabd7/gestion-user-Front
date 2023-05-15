import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsCreateComponent } from './organizations-components/organizations-create/organizations-create.component';

const routes :Routes=[
  {
    path:'organizations', component:OrganizationsComponent,
    children:[
      { path: 'organizations-create', component:OrganizationsCreateComponent }
    ]
  }
];


@NgModule({
  declarations: [
    OrganizationsCreateComponent,
    OrganizationsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
})
export class OrganizationsModule { }
