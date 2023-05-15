import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor(private router:Router) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }
  goToOrga(){
    this.router.navigate(['organizations']);
  }
  goToUsers(){
    this.router.navigate(['users']);
  }
  goToEntreprises(){
    this.router.navigate(['entreprises']);
  }
}
