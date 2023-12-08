import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/main/presentation/main.component';
import { AuthorizationComponent } from './features/authorization/presentation/view/authorization.component';
import {
  alreadyLoginGuardFunction,
  loginGuardFunction,
} from './features/authorization/presentation/guard/auth-guard';
import { EmployeesComponent } from './features/employees/presentation/employees.component';
import { SettingsComponent } from './features/settings/presentation/settings.component';
import { DepartmentInfoComponent } from './features/employees/components/department-info/department-info.component';
import { RolesComponent } from './features/employees/components/roles/roles.component';
import { EmployeesListComponent } from './features/employees/components/employees-list/employees-list.component';
import { EmployeeNewComponent } from './features/employees/components/employee-new/employee-new.component';
import { DepartmentNewComponent } from './features/employees/components/department-new/department-new.component';
import { EmployeeEditComponent } from './features/employees/components/employee-edit/employee-edit.component';
import { DepartmentEditComponent } from './features/employees/components/department-edit/department-edit.component';
import { RegistrationComponent } from './features/registration/presentation/view/registration.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { ProfileSecurityComponent } from './features/profile/profile-security/profile-security.component';
import { ProfileComponent } from './features/profile/profile/profile.component';
import { ProfileChangePasswordComponent } from './features/profile/profile-change-password/presentation/view/profile-change-password.component';
import { SectionsComponent } from './features/documentation/sections/impl/presentation/view/sections.component';
import { SectionComponent } from './features/documentation/section-menu/impl/presentation/view/section.component';
import { ResetPasswordComponent } from './features/reset-password/presentation/view/reset-password.component';

const employeesItems: Routes = [
  { path: 'new-employee', component: EmployeeNewComponent },
  { path: 'new-department', component: DepartmentNewComponent },
  { path: 'edit-employee', component: EmployeeEditComponent },
  { path: 'edit-department', component: DepartmentEditComponent },
  { path: 'department/:id', component: DepartmentInfoComponent },
  { path: 'roles', component: RolesComponent },
  { path: '', component: EmployeesListComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'sections/:id', component: SectionComponent },
];

const profileItems: Routes = [
  { path: '', component: ProfileInfoComponent },
  { path: 'security', component: ProfileSecurityComponent },
  { path: 'change-password', component: ProfileChangePasswordComponent },
];

const mainItems: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    children: employeesItems,
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'section/:id', component: SectionComponent },
  { path: 'profile', component: ProfileComponent, children: profileItems },
];

const appRoutes: Routes = [
  {
    path: 'login',
    component: AuthorizationComponent,
    canActivate: [alreadyLoginGuardFunction],
  },
  {
    path: 'signup',
    component: RegistrationComponent,
    canActivate: [alreadyLoginGuardFunction],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [alreadyLoginGuardFunction],
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [loginGuardFunction],
    children: mainItems,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
