import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';
import { Reducer } from 'src/app/core/mvi/store';
import {
  EmployeeNewResultAction,
  EmployeeNewResultActionTypes,
} from './employee-new-result-action';
import { EmployeeNewState } from './employee-new-state';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNewReducer
  implements Reducer<EmployeeNewState, EmployeeNewResultAction>
{
  reduce(
    state: EmployeeNewState,
    action: EmployeeNewResultAction,
  ): EmployeeNewState {
    switch (action.type) {
      case EmployeeNewResultActionTypes.CHANGE_JOB_TITLE:
        return clone(state, {
          jobTitle: action.jobTitle,
          jobTitleError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_PHONE_NUMBER:
        return clone(state, {
          phoneNumber: action.phoneNumber,
          phoneNumberError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_FIRST_NAME:
        return clone(state, {
          firstName: action.firstName,
          firstNameError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_FIRST_NAME:
        return clone(state, {
          firstName: action.firstName,
          firstNameError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_PATRONYMIC:
        return clone(state, {
          patronymic: action.patronymic,
        });

      case EmployeeNewResultActionTypes.CHANGE_DATE_OF_BIRTH:
        return clone(state, {
          dateOfBirth: action.dateOfBirth,
          dateOfBirthError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_LAST_NAME:
        return clone(state, {
          lastName: action.lastName,
          lastNameError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_EMAIL:
        return clone(state, { email: action.email, emailError: '' });

      case EmployeeNewResultActionTypes.SELECT_DEPARTMENT:
        return {
          ...state,
          department: action.department,
          visibleSelectDepartmentModal: false,
        };

      case EmployeeNewResultActionTypes.REMOVE_DEPARTMENT:
        return { ...state, department: undefined };

      case EmployeeNewResultActionTypes.ADD_ROLE:
        return {
          ...state,
          selectedRoles: action.role
            ? [...state.selectedRoles, action.role]
            : state.selectedRoles,
        };

      case EmployeeNewResultActionTypes.REMOVE_ROLE:
        return {
          ...state,
          selectedRoles: state.selectedRoles.filter(
            (role) => role.id !== action.role?.id,
          ),
        };

      case EmployeeNewResultActionTypes.VALIDATION_ERROR:
        return clone(state, { ...action });

      case EmployeeNewResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE:
        return clone(state, { visibleSelectDepartmentModal: action.visible });
    }
  }
}
