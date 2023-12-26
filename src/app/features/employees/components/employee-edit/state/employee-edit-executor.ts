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
import { EmployeeService } from '../../../data/employee-service';
import { ActivatedRoute } from '@angular/router';
import { EmployeesNavItem, EmployeesNavigator } from '../../../navigation/employees-navigator';

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
    private dateOfBirthValidator: Validator,
    @Inject('NewEmployeePhoneNumberValidator')
    private phoneNumberValidator: Validator,
    @Inject('NewEmployeeJobTitleValidator')
    private jobTitleValidator: Validator,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private navigator: EmployeesNavigator
  ) {
    super();
  }

  execute(action: EmployeeEditAction) {
    switch (action.type) {
      case EmployeeEditActionTypes.CHANGE_JOB_TITLE:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_JOB_TITLE,
          jobTitle: action.jobTitle,
        });
        break;

      case EmployeeEditActionTypes.CHANGE_PHONE_NUMBER:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_PHONE_NUMBER,
          phoneNumber: action.phoneNumber,
        });
        break;

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
          department: action.department,
        });
        break;

      case EmployeeEditActionTypes.REMOVE_DEPARTMENT:
        this.reduce({
          type: EmployeeEditResultActionTypes.REMOVE_DEPARTMENT,
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

      case EmployeeEditActionTypes.INITIALIZE:
        this.reduce({
          type: EmployeeEditResultActionTypes.INITIALIZE,
          state: action.state,
        });
        break;

      case EmployeeEditActionTypes.EDIT:
        this.handleEdit();
        break;

      case EmployeeEditActionTypes.OPEN_DEPARTMENT_MODAL:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE,
          visible: true
        })
        break;
      case EmployeeEditActionTypes.CLOSE_DEPARTMENT_MODAL:
        this.reduce({
          type: EmployeeEditResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE,
          visible: false
        })
        break;

      case EmployeeEditActionTypes.INIT_EMPLOYEE_FIELD:
        this.reduce({
          type: EmployeeEditResultActionTypes.INIT_EMPLOYEE_FIELD,
          employee: action.employee
        })
        console.log(this.getState())
        break;

    }
  }

  private handleEdit() {
    let phoneNumberError = this.phoneNumberValidator.validate(
      this.getState().phoneNumber,
    );
    let jobTitleError = this.jobTitleValidator.validate(
      this.getState().jobTitle,
    );
    let emailError = this.emailValidator.validate(this.getState().email);
    let passwordError = this.passwordValidator.validate(
      this.getState().password,
    );
    let firstNameError = this.firstNameValidator.validate(
      this.getState().firstName,
    );
    let lastNameError = this.lastNameValidator.validate(
      this.getState().lastName,
    );
    let dateOfBirthError = this.dateOfBirthValidator.validate(
      this.getState().dateOfBirth,
    );

    console.log(phoneNumberError)
    console.log(jobTitleError)
    console.log(emailError)
    console.log(firstNameError)
    console.log(lastNameError)
    console.log(dateOfBirthError)

    if (
      phoneNumberError != null ||
      jobTitleError != null ||
      emailError != null ||
      firstNameError != null ||
      lastNameError != null ||
      dateOfBirthError != null
    ) {
      this.reduce({
        type: EmployeeEditResultActionTypes.VALIDATION_ERROR,
        phoneNumberError: phoneNumberError != null ? phoneNumberError : '',
        jobTitleError: jobTitleError != null ? jobTitleError : '',
        emailError: emailError != null ? emailError : '',
        passwordError: passwordError != null ? passwordError : '',
        firstNameError: firstNameError != null ? firstNameError : '',
        lastNameError: lastNameError != null ? lastNameError : '',
        dateOfBirthError: dateOfBirthError != null ? dateOfBirthError : '',
      });
      return;
    }

    let state = this.getState()
    this.employeeService.editEmployee( state.id,{
      firstName: state.firstName,
      secondName: state.lastName,
      surname: state.patronymic,
      roles: state.selectedRoles.map((role): number => {
        return Number(role.id)
      }),
      dateOfBirth: '1212-12-12',
      telephoneNumber: state.phoneNumber,
      email: state.email,
      icon: '',
      departmentID: state.department? state.department.id : null
    }).subscribe(()=>{
      this.navigator.showContent({
        navItem: EmployeesNavItem.USERS,
        params: '',
        ids: []
      })
    })
    
  }
}
