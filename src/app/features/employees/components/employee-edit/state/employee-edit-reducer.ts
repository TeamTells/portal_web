import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';
import { Reducer } from 'src/app/core/mvi/store';
import {
  EmployeeEditResultAction,
  EmployeeEditResultActionTypes,
} from './employee-edit-result-action';
import { EmployeeEditState } from './employee-edit-state';

@Injectable({
  providedIn: 'root',
})
export class EmployeeEditReducer
  implements Reducer<EmployeeEditState, EmployeeEditResultAction>
{
  reduce(
    state: EmployeeEditState,
    action: EmployeeEditResultAction,
  ): EmployeeEditState {
    switch (action.type) {
      case EmployeeEditResultActionTypes.CHANGE_JOB_TITLE:
        return clone(state, {
          jobTitle: action.jobTitle,
          jobTitleError: '',
        });

      case EmployeeEditResultActionTypes.CHANGE_PHONE_NUMBER:
        return clone(state, {
          phoneNumber: action.phoneNumber,
          phoneNumberError: '',
        });

      case EmployeeEditResultActionTypes.CHANGE_FIRST_NAME:
        return clone(state, {
          firstName: action.firstName,
          firstNameError: '',
        });

      case EmployeeEditResultActionTypes.CHANGE_PATRONYMIC:
        return clone(state, {
          patronymic: action.patronymic,
        });

      case EmployeeEditResultActionTypes.CHANGE_DATE_OF_BIRTH:
        return clone(state, {
          dateOfBirth: action.dateOfBirth,
          dateOfBirthError: '',
        });

      case EmployeeEditResultActionTypes.CHANGE_LAST_NAME:
        return clone(state, {
          lastName: action.lastName,
          lastNameError: '',
        });

      case EmployeeEditResultActionTypes.CHANGE_EMAIL:
        return clone(state, { email: action.email, emailError: '' });

      case EmployeeEditResultActionTypes.CHANGE_PASSWORD:
        return clone(state, { password: action.password, passwordError: '' });

      case EmployeeEditResultActionTypes.SELECT_DEPARTMENT:
        return { ...state, department: action.department, visibleSelectDepartmentModal: false };

      case EmployeeEditResultActionTypes.REMOVE_DEPARTMENT:
        return { ...state, department: null };

      case EmployeeEditResultActionTypes.ADD_ROLE:
        return {
          ...state,
          selectedRoles: action.role
            ? [...state.selectedRoles, action.role]
            : state.selectedRoles,
        };

      case EmployeeEditResultActionTypes.REMOVE_ROLE:
        return {
          ...state,
          selectedRoles: state.selectedRoles.filter(
            (role) => role.id !== action.role?.id,
          ),
        };

      case EmployeeEditResultActionTypes.INITIALIZE:
        return {
          ...action.state,
          jobTitleError: '',
          phoneNumberError: '',
          dateOfBirthError: '',
          emailError: '',
          firstNameError: '',
          lastNameError: '',
          passwordError: '',
          isLoading: false,
          visibleSelectDepartmentModal: false
        };

      case EmployeeEditResultActionTypes.VALIDATION_ERROR:
        return clone(state, { ...action });
      
      case EmployeeEditResultActionTypes.INIT_EMPLOYEE_FIELD:
        return clone(state, { 
          id: action.employee.id,
          firstName: action.employee.firstName,
          lastName: action.employee.secondName,
          patronymic: action.employee.surname,
          dateOfBirth: action.employee.dateOfBirth,
          email: action.employee.email,
          phoneNumber: action.employee.telephoneNumber
        });

      case EmployeeEditResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE:
        return clone(state, { visibleSelectDepartmentModal: action.visible })
    }
    
    
  }
}
