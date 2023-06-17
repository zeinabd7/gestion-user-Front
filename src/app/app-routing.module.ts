import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { EntreprisesComponent } from './entreprises/entreprises/entreprises.component';
import { AuthGuard } from './guards/auth.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { AdminOrgaComponent } from './organizations/admin-orga/admin-orga.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
//import { UsersModule } from './users/users.module';
//import { UsersComponent } from './users/users.component';
//import { UsersModule } from './users/users.module';



const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',loadChildren:() => DashboardModule},
  { path: 'login', component: LoginComponent},
  {path:'organization',loadChildren:() => OrganizationsModule},
  {path:'entreprises',component:EntreprisesComponent},
  { path: 'users', component: UsersComponent,canActivate:[AuthGuard]},
  {path:'admin-orga',component:AdminOrgaComponent},
  {path:'groups',component:GroupsComponent}
  //{ path: '**', redirectTo: '' }
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
