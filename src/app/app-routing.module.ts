import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {ClientComponent} from "./components/client/client.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ClientService} from "./services/client.service";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },

      {
      path:'client',
      component:ClientComponent,


    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
