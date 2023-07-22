import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavaBarComponentComponent } from './nava-bar-component/nava-bar-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavaBarComponentComponent,
    SideBarComponentComponent,
    DashboardComponentComponent,
    UserComponentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
