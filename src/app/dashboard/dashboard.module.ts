import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { SalesSummaryComponent } from "./dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { OrganizationsComponent } from "../organizations/organizations.component";
import { UsersModule } from "../users/users.module";
import { AuthGuard } from "../guards/auth.guard";
import { UsersComponent } from "../users/users.component";
//import { OrganizationsModule } from "../organizations/organizations.module";
//import { UsersComponent } from "../users/users.component";

const routes: Routes = [
  {
   /*  path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent, */
    path:'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard],
    children:[
    { path: 'top-selling', component:TopSellingComponent },
    { path: 'feeds', component:FeedsComponent },
    { path: 'top-cards', component:TopCardsComponent },
    { path: 'blog-cards', component:BlogCardsComponent },
    { path: 'sales-summary', component:SalesSummaryComponent }
  ]
  },
  {path:'organizations',component:OrganizationsComponent},
  //{path:'users',loadChildren:()=>UsersModule,canActivate:[AuthGuard]}
  //{ path: 'users', component: UsersComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    //UsersModule,
   // OrganizationsModule
  ],
  
  declarations: [
    DashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent
  ],
})
export class DashboardModule {}
