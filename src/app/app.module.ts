import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

//External Utilities
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { LoginService } from "./services/login.service";
import { UserService } from "./services/user.service";
import { PeopleService } from "./services/people.service";
import { CreateuserService } from "./services/createuser.service";
import { CreatedeliveryService } from "./services/createdelivery.service";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { IsolatedComponent } from './components/isolated/isolated.component';
import { LoginComponent } from './components/login/login.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { AccesosComponent } from './components/accesos/accesos.component';
import { UsersComponent } from './components/users/users.component';
import { PeopleComponent } from './components/people/people.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MenuaccesosComponent } from './components/menuaccesos/menuaccesos.component';
import { ScrollmenuComponent } from './components/scrollmenu/scrollmenu.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TransporteComponent } from './components/transporte/transporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IsolatedComponent,
    LoginComponent,
    MenuadminComponent,
    AccesosComponent,
    UsersComponent,
    PeopleComponent,
    BreadcrumbComponent,
    MenuaccesosComponent,
    ScrollmenuComponent,
    CrearusuarioComponent,
    StepperComponent,
    TransporteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatTableModule,
    MatFormFieldModule 
  ],
  providers: [
    LoginService,
    UserService,
    PeopleService,
    CreateuserService,
    CreatedeliveryService
  ],
  exports: [
    MatPaginatorModule, 
    MatSortModule, 
    MatTableModule,
    MatFormFieldModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
