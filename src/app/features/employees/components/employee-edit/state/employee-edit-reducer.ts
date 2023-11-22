import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';
import { EmployeeEditState } from './employee-edit-state';
import { Reducer } from 'src/app/core/mvi/store';
import {
  EmployeeEditResultAction,
  EmployeeEditResultActionTypes,
} from './employee-edit-result-action';

@Injectable({
  providedIn: 'root',
})
export class EmployeeEditReducer
  implements Reducer<EmployeeEditState, EmployeeEditResultAction>
{
  reduce(
    state: EmployeeEditState,
    action: EmployeeEditResultAction
  ): EmployeeEditState {
    switch (action.type) {
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
          dateOfBirthErorr: '',
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
        return { ...state, department: action.department };

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
            (role) => role.id !== action.role?.id
          ),
        };

      case EmployeeEditResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          firstNameError: action.firstNameError,
          lastNameError: action.lastNameError,
          dateOfBirthErorr: action.dateOfBirthError,
          emailError: action.emailError,
          passwordError: action.passwordError,
        });
    }
  }
}
