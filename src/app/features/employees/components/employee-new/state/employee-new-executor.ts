import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { EmployeeNewState } from './employee-new-state';
import {
  EmployeeNewResultAction,
  EmployeeNewResultActionTypes,
} from './employee-new-result-action';
import {
  EmployeeNewAction,
  EmployeeNewActionTypes,
} from './employee-new-action';
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNewExecutor extends Executor<
  EmployeeNewState,
  EmployeeNewAction,
  EmployeeNewResultAction
> {
  constructor(
    @Inject('EmailValidator') private emailValidator: Validator,
    @Inject('PasswordValidator') private passwordValidator: Validator
  ) {
    super();
  }

  execute(action: EmployeeNewAction) {
    switch (action.type) {
      case EmployeeNewActionTypes.CHANGE_FIRST_NAME:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_FIRST_NAME,
          firstName: action.firstName,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_LAST_NAME:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_LAST_NAME,
          lastName: action.lastName,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_PATRONYMIC:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_PATRONYMIC,
          patronymic: action.patronymic,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_DATE_OF_BIRTH:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_DATE_OF_BIRTH,
          dateOfDirth: action.dateOfBirth,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_PASSWORD:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_PASSWORD,
          password: action.password,
        });
        break;

      case EmployeeNewActionTypes.SELECT_DEPARTMENT:
        this.reduce({
          type: EmployeeNewResultActionTypes.SELECT_DEPARTMENT,
          department: this.getState().departments.find(
            (d) => d.id === action.departmentId
          ),
        });
        break;

      case EmployeeNewActionTypes.SELECT_RIGHT:
        this.reduce({
          type: EmployeeNewResultActionTypes.SELECT_RIGHT,
          right: this.getState().rights.find((r) => r.id === action.rightId),
        });
        break;

      case EmployeeNewActionTypes.SELECT_ROLE:
        this.reduce({
          type: EmployeeNewResultActionTypes.SELECT_ROLE,
          role: this.getState().roles.find((r) => r.id === action.roleId),
        });
        break;

      case EmployeeNewActionTypes.CREATE:
        this.handleLogin();
        break;
    }
  }

  private handleLogin() {
    let emailError = this.emailValidator.validate(this.getState().email);
    let passwordError = this.passwordValidator.validate(
      this.getState().password
    );

    if (emailError != null || passwordError != null) {
      this.reduce({
        type: EmployeeNewResultActionTypes.VALIDATION_ERROR,
        emailError: emailError != null ? emailError : '',
        passwordError: passwordError != null ? passwordError : '',
        dateOfBirthError: '',
        firstNameError: '',
        lastNameError: '',
      });
      return;
    }

    // Успех. Все валлидно 👻
    console.log(this.getState());
  }
}
