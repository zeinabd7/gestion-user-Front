import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { UsersComponent } from './users/users.component';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import { EntreprisesComponent } from './entreprises/entreprises/entreprises.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntreprisesComponent,
    //UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    ReactiveFormsModule,
    OrganizationsModule,
    UsersModule,
    ModalModule.forRoot(),
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
