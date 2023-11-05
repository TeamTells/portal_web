import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./features/main/presentation/main.component";
import { AuthorizationComponent } from "./features/authorization/presentation/view/authorization.component";
import { alreadyLoginGuardFunction, loginGuardFunction } from "./features/authorization/presentation/guard/auth-guard";
import { NewsComponent } from "./features/news/presentation/news.component";
import { EmployeesComponent } from "./features/employees/presentation/employees.component";
import { SettingsComponent } from "./features/settings/presentation/settings.component";
import { DepartmentInfoComponent } from './features/employees/components/department-info/department-info.component';
import { RolesComponent } from './features/employees/components/roles/roles.component';
import { EmployeesListComponent } from './features/employees/components/employees-list/employees-list.component';
import { EmployeesNewComponent } from './features/employees/components/employee-new/presentation/view/employee-new.component';

const employeesItems: Routes = [
  {path: 'new-employee', component: EmployeesNewComponent},
  {path: 'department/:id', component: DepartmentInfoComponent},
  {path: 'roles', component: RolesComponent},
  {path: '', component: EmployeesListComponent},
]
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./features/main/presentation/main.component";
import {AuthorizationComponent} from "./features/authorization/presentation/view/authorization.component";
import {alreadyLoginGuardFunction, loginGuardFunction} from "./features/authorization/presentation/guard/auth-guard";

import {EmployeesComponent} from "./features/employees/presentation/employees.component";
import {SettingsComponent} from "./features/settings/presentation/settings.component";
import { SectionComponent } from './features/section/presentation/section.component';
import { SectionsComponent } from './features/sections/presentation/sections.component';

const mainItems: Routes = [
  {path: 'sections', component: SectionsComponent},
  {path: 'employees', component: EmployeesComponent, children: employeesItems},
  {path: 'settings', component: SettingsComponent},
  {path:'sections/:id', component:SectionComponent}
]

const appRoutes: Routes = [
  {path: 'login', component: AuthorizationComponent, canActivate: [alreadyLoginGuardFunction]},

  {
    path: '',
    component: MainComponent,
    canActivate: [loginGuardFunction],
    children: mainItems
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
