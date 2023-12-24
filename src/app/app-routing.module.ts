import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  alreadyLoginGuardFunction,
  loginGuardFunction,
} from './features/authorization/presentation/guard/auth-guard';
import { AuthorizationComponent } from './features/authorization/presentation/view/authorization.component';
import { SectionContentComponent } from './features/documentation/contents/impl/presentation/view/section-content.component';
import { SectionComponent } from './features/documentation/section-menu/impl/presentation/view/section.component';
import { SectionSettingsComponent } from './features/documentation/section-settings/impl/presentation/view/section-settings.component';
import { SectionsComponent } from './features/documentation/sections/impl/presentation/view/sections.component';
import { EditorComponent } from './features/editor2/presentation/editor/editor.component';
import { DepartmentEditComponent } from './features/employees/components/department-edit/department-edit.component';
import { DepartmentInfoComponent } from './features/employees/components/department-info/department-info.component';
import { DepartmentNewComponent } from './features/employees/components/department-new/department-new.component';
import { EmployeeEditComponent } from './features/employees/components/employee-edit/employee-edit.component';
import { EmployeeNewComponent } from './features/employees/components/employee-new/employee-new.component';
import { EmployeesListComponent } from './features/employees/components/employees-list/employees-list.component';
import { RolesComponent } from './features/employees/components/roles/roles.component';
import { EmployeesComponent } from './features/employees/presentation/employees.component';
import { MainComponent } from './features/main/presentation/main.component';
import { NewPasswordComponent } from './features/new-password/presentation/view/new-password.component';
import { ProfileChangePasswordComponent } from './features/profile/profile-change-password/presentation/view/profile-change-password.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { ProfileSecurityComponent } from './features/profile/profile-security/profile-security.component';
import { ProfileComponent } from './features/profile/profile/profile.component';
import { RegistrationComponent } from './features/registration/presentation/view/registration.component';
import { ResetPasswordComponent } from './features/reset-password/presentation/view/reset-password.component';
import { SettingsComponent } from './features/settings/presentation/settings.component';

const employeesItems: Routes = [
  {
    path: 'new-employee',
    component: EmployeeNewComponent,
  },
  {
    path: 'new-department',
    component: DepartmentNewComponent,
  },
  {
    path: 'edit-employee',
    component: EmployeeEditComponent,
  },
  {
    path: 'edit-department/:id',
    component: DepartmentEditComponent,
  },
  {
    path: 'department/:id',
    component: DepartmentInfoComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: '',
    component: EmployeesListComponent,
  },
];

const profileItems: Routes = [
  {
    path: '',
    component: ProfileInfoComponent,
  },
  {
    path: 'security',
    component: ProfileSecurityComponent,
  },
  {
    path: 'change-password',
    component: ProfileChangePasswordComponent,
  },
];

const sectionRotes: Routes = [
  {
    path: 'content',
    component: SectionContentComponent,
  },
  {
    path: 'settings',
    component: SectionSettingsComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
];

const mainItems: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    children: employeesItems,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'sections',
    component: SectionsComponent,
  },
  {
    path: 'section/:id',
    component: SectionComponent,
    children: sectionRotes,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: profileItems,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
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
    path: 'new-password',
    component: NewPasswordComponent,
    canActivate: [alreadyLoginGuardFunction],
  },
  {
    path: '',
    component: MainComponent,
    //canActivate: [loginGuardFunction],
    children: mainItems,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
