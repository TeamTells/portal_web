import { Injectable } from '@angular/core';
import { Reducer } from 'src/app/core/mvi/store';
import { RegistrationState } from './registration-state';
import {
  RegistrationResultAction,
  RegistrationResultActionTypes,
} from './registration-result-action';
import { clone } from 'cloneable-ts';

@Injectable({
  providedIn: 'root',
})
export class RegistrationReducer
  implements Reducer<RegistrationState, RegistrationResultAction>
{
  reduce(
    state: RegistrationState,
    action: RegistrationResultAction
  ): RegistrationState {
    switch (action.type) {
      case RegistrationResultActionTypes.CHANGE_STATUS_STATE:
        return clone(state, {
          status: action.status,
        });

      case RegistrationResultActionTypes.CHANGE_NAME:
        return clone(state, {
          name: action.name,
          nameError: '',
        });

      case RegistrationResultActionTypes.CHANGE_EMAIL:
        return clone(state, {
          email: action.email,
          emailError: '',
        });

      case RegistrationResultActionTypes.CHANGE_PHONE_NUMBER:
        return clone(state, {
          phoneNumber: action.phoneNumber,
          phoneNumberError: '',
        });

      case RegistrationResultActionTypes.CHANGE_SPECIALIZING:
        return clone(state, {
          selectedSpecializing: action.specializing,
          specializingError: '',
        });

      case RegistrationResultActionTypes.REMOVE_SPECIALIZING:
        return { ...state, selectedSpecializing: null, specializingError: '' };

      case RegistrationResultActionTypes.CHANGE_STAFF_SIZE:
        return clone(state, {
          selectedStaffSize: action.staffSize,
          staffSizeError: '',
        });

      case RegistrationResultActionTypes.REMOVE_STAFF_SIZE:
        return { ...state, selectedStaffSize: null, staffSizeError: '' };

      case RegistrationResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          nameError: action.nameError,
          emailError: action.emailError,
          phoneNumberError: action.phoneNumberError,
          specializingError: action.specializingError,
          staffSizeError: action.staffSizeError,
        });

      case RegistrationResultActionTypes.CREATE:
        return clone(state, {
          status: 'pending',
        });
    }
  }
}
