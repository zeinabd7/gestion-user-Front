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
import {ModalModule} from 'ngx-bootstrap/modal';
import { EntreprisesComponent } from './entreprises/entreprises/entreprises.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntreprisesComponent,
    HeaderComponent,
    UsersComponent,
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
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule

   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
