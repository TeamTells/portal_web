import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';
import { EmployeeNewState } from './employee-new-state';
import { Reducer } from 'src/app/core/mvi/store';
import {
  EmployeeNewResultAction,
  EmployeeNewResultActionTypes,
} from './employee-new-result-action';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNewReducer
  implements Reducer<EmployeeNewState, EmployeeNewResultAction>
{
  reduce(
    state: EmployeeNewState,
    action: EmployeeNewResultAction
  ): EmployeeNewState {
    switch (action.type) {
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
          dateOfBirth: action.dateOfDirth,
          dateOfBirthErorr: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_LAST_NAME:
        return clone(state, {
          lastName: action.lastName,
          lastNameError: '',
        });

      case EmployeeNewResultActionTypes.CHANGE_EMAIL:
        return clone(state, { email: action.email, emailError: '' });

      case EmployeeNewResultActionTypes.CHANGE_PASSWORD:
        return clone(state, { password: action.password, passwordError: '' });

      case EmployeeNewResultActionTypes.SELECT_DEPARTMENT:
        return { ...state, department: action.department };

      case EmployeeNewResultActionTypes.SELECT_ROLE:
        return { ...state, role: action.role };

      case EmployeeNewResultActionTypes.SELECT_RIGHT:
        return { ...state, right: action.right };

      case EmployeeNewResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          firstNameError: action.firstNameError,
          lastNameError: action.lastNameError,
          dateOfBirth: action.dateOfBirthError,
          emailError: action.emailError,
          passwordError: action.passwordError,
        });
    }
  }
}
