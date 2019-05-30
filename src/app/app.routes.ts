import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { AccesosComponent } from "./components/accesos/accesos.component";
import { UsersComponent } from "./components/users/users.component";
import { PeopleComponent } from "./components/people/people.component";
import { MenuaccesosComponent } from "./components/menuaccesos/menuaccesos.component";
import { StepperComponent } from "./components/stepper/stepper.component";
import { TransporteComponent } from "./components/transporte/transporte.component";

const APP_ROUTES: Routes = [
    //{ path: 'login', component: LoginComponent },
    //{ path: 'home', component: HomeComponent },
    { path: 'menuadmin', component: MenuadminComponent },
    { path: 'accesos', component: AccesosComponent },
    { path: 'menuaccesos', component: MenuaccesosComponent },
    { path: 'users', component: UsersComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'stepper', component: StepperComponent },
    { path: 'transporte', component: TransporteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });