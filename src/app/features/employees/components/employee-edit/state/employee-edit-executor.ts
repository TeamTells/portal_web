import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { EmployeeEditState } from './employee-edit-state';
import {
  EmployeeEditResultAction,
  EmployeeEditResultActionTypes,
} from './employee-edit-result-action';
import {
  EmployeeEditAction,
  EmployeeEditActionTypes,
} from './employee-edit-action';
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class EmployeeEditExecutor extends Executor<
  EmployeeEditState,
  EmployeeEditAction,
  EmployeeEditResultAction
> {
  constructor(
    @Inject('NewEmployeeEmailValidator') private emailValidator: Validator,
    @Inject('NewEmployeePasswordValidator')
    private passwordValidator: Validator,
    @Inject('NewEmployeeFirstNameValidator')
    private firstNameValidator: Validator,
    @Inject('NewEmployeeLastNameValidator')
    private lastNameValidator: Validator,
    @Inject('NewEmployeeDateOfBirthValidator')
    private dateOfBirthValidator: Validator
  ) {
    super();
  }

  execute(action: EmployeeEditAction) {
    switch (action.type) {
      case EmployeeEditActionTypes.CHANGE_FIRST_NAME:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_FIRST_NAME,
          firstName: action.firstName,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_LAST_NAME:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_LAST_NAME,
          lastName: action.lastName,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_PATRONYMIC:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_PATRONYMIC,
          patronymic: action.patronymic,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_DATE_OF_BIRTH:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_DATE_OF_BIRTH,
          dateOfBirth: action.dateOfBirth,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_PASSWORD:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_PASSWORD,
          password: action.password,
        });
        break;

      case EmployeeEditActionTypes.SELECT_DEPARTMENT:
        this.reduce({
          type: EmployeeEditResultActionTypes.SELECT_DEPARTMENT,
          department: this.getState().departments.find(
            (d) => d.id === action.departmentId
          ),
        });
        break;

      case EmployeeEditActionTypes.ADD_ROLE:
        this.reduce({
          type: EmployeeEditResultActionTypes.ADD_ROLE,
          role: this.getState().roles.find((r) => r.id === action.roleId),
        });
        break;

      case EmployeeEditActionTypes.REMOVE_ROLE:
        this.reduce({
          type: EmployeeEditResultActionTypes.REMOVE_ROLE,
          role: this.getState().roles.find((r) => r.id === action.roleId),
        });
        break;

      case EmployeeEditActionTypes.EDIT:
        this.handleEdit();
        break;
    }
  }

  private handleEdit() {
    let emailError = this.emailValidator.validate(this.getState().email);
    let passwordError = this.passwordValidator.validate(
      this.getState().password
    );
    let firstNameError = this.firstNameValidator.validate(
      this.getState().firstName
    );
    let lastNameError = this.lastNameValidator.validate(
      this.getState().lastName
    );
    let dateOfBirthError = this.dateOfBirthValidator.validate(
      this.getState().dateOfBirth
    );

    if (
      emailError != null ||
      passwordError != null ||
      firstNameError != null ||
      lastNameError != null ||
      dateOfBirthError != null
    ) {
      this.reduce({
        type: EmployeeEditResultActionTypes.VALIDATION_ERROR,
        emailError: emailError != null ? emailError : '',
        passwordError: passwordError != null ? passwordError : '',
        firstNameError: firstNameError != null ? firstNameError : '',
        lastNameError: lastNameError != null ? lastNameError : '',
        dateOfBirthError: dateOfBirthError != null ? dateOfBirthError : '',
      });
      return;
    }

    // Успех. Все валлидно 👻
    console.log(this.getState());
  }
}
