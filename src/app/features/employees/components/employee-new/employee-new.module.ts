import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesNewComponent } from './presentation/view/employee-new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Validator } from 'src/app/core/validators/validator';
import {
    DateRule,
    EmailRule,
    EmptyRule,
    MaxLengthRule,
    MinLengthRule,
} from 'src/app/core/validators/rule';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  declarations: [EmployeesNewComponent],
  exports: [EmployeesNewComponent],
  imports: [CommonModule, ComponentsModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: 'NewEmployeeEmailValidator',
      useExisting: Validator,
      useFactory: EmployeeNewModule.emailValidatorFactory,
    },
    {
      provide: 'NewEmployeePasswordValidator',
      useExisting: Validator,
      useFactory: EmployeeNewModule.passwordValidatorFactory,
    },
    {
      provide: 'NewEmployeeFirstNameValidator',
      useExisting: Validator,
      useFactory: EmployeeNewModule.firstNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeLastNameValidator',
      useExisting: Validator,
      useFactory: EmployeeNewModule.lastNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeDateOfBirthValidator',
      useExisting: Validator,
      useFactory: EmployeeNewModule.dateOfBirthValidatorFactory,
    },
  ],
})
export class EmployeeNewModule {
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
        'Введите корректную строку даты в формате день.месяц.год (Пример: 05.10.2002)'
      ),
    ]);
}
