import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './presentation/employees.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { RolesComponent } from './components/roles/roles.component';
import { RoleItemComponent } from './components/roles/role-item/role-item.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { Validator } from 'src/app/core/validators/validator';
import {
  DateRule,
  EmailRule,
  EmptyRule,
  MaxLengthRule,
  MinLengthRule,
} from 'src/app/core/validators/rule';
import { DepartmentNewComponent } from './components/department-new/department-new.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    DepartmentInfoComponent,
    MenuComponent,
    MenuItemComponent,
    DepartmentComponent,
    EmployeeItemComponent,
    RolesComponent,
    RoleItemComponent,
    AddEmployeesComponent,
    DepartmentNewComponent,
    EmployeeNewComponent,
    DepartmentEditComponent,
    EmployeeEditComponent,
  ],
  exports: [EmployeesComponent],
  imports: [CommonModule, ComponentsModule, RouterOutlet],
  providers: [
    {
      provide: 'NewEmployeeEmailValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.emailValidatorFactory,
    },
    {
      provide: 'NewEmployeePasswordValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.passwordValidatorFactory,
    },
    {
      provide: 'NewEmployeeFirstNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.firstNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeLastNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.lastNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeDateOfBirthValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.dateOfBirthValidatorFactory,
    },
    {
      provide: 'NewDepartmentNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.nameValidatorFactory,
    },
  ],
})
export class EmployeesModule {
  public static emailValidatorFactory = () =>
    new Validator([new EmailRule('Введи E-mail')]);

  public static passwordValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите пароль'),
      new MinLengthRule('Пароль должен иметь больше 8 символов', 8),
      new MaxLengthRule('Пароль не может быть длиннее 25 символов', 25),
    ]);

  public static firstNameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите имя'),
      new MaxLengthRule('Имя не может быть длиннее 50 символов', 50),
    ]);

  public static lastNameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите фамилию'),
      new MaxLengthRule('Фамилия не может быть длиннее 50 символов', 50),
    ]);

  public static dateOfBirthValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите дату рождения'),
      new DateRule(
        'Введите корректную строку даты в формате день.месяц.год (Пример: 05.10.2002)',
      ),
    ]);

  public static nameValidatorFactory = () =>
    new Validator([new EmptyRule('Введите название департамента')]);
}
