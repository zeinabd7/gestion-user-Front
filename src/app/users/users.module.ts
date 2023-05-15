import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes :Routes=[
  {
    path:'users', component:UsersComponent,
    children:[
      { path: 'users-add', component:UsersAddComponent }
    ]
  }
];


@NgModule({
  declarations: [
    UsersAddComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class UsersModule { }
