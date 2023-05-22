import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsCreateComponent } from './organizations-components/organizations-create/organizations-create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminOrgaComponent } from './admin-orga/admin-orga.component';

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
    OrganizationsComponent,
    AdminOrgaComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class OrganizationsModule { }
