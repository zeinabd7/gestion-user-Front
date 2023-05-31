import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsCreateComponent } from './organizations-components/organizations-create/organizations-create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminOrgaComponent } from './admin-orga/admin-orga.component';
import { EditOrgaComponent } from './edit-orga/edit-orga.component';
import { OrgaListComponent } from './orga-list/orga-list.component';

const routes :Routes=[
  {path:'organizations', component:OrganizationsComponent,},
  {path:'organizations/:entreprise_id',component:OrganizationsComponent}
];


@NgModule({
  declarations: [
    OrganizationsCreateComponent,
    OrganizationsComponent,
    AdminOrgaComponent,
    EditOrgaComponent,
    OrgaListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class OrganizationsModule { }
