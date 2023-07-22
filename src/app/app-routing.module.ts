import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {DashboardComponentComponent} from './dashboard-component/dashboard-component.component';
import {UserComponentComponent} from './user-component/user-component.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponentComponent, children: [
      {path: 'listuser', component: UserComponentComponent},
      {path: 'dashboard', component: DashboardComponentComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
