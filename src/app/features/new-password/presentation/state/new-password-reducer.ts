import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';
import { Reducer } from 'src/app/core/mvi/store';
import {
  NewPasswordResultAction,
  NewPasswordResultActionTypes,
} from './new-password-result-action';
import { NewPasswordState } from './new-password-state';

@Injectable({
  providedIn: 'root',
})
export class NewPasswordReducer
  implements Reducer<NewPasswordState, NewPasswordResultAction>
{
  reduce(
    state: NewPasswordState,
    action: NewPasswordResultAction,
  ): NewPasswordState {
    switch (action.type) {
      case NewPasswordResultActionTypes.CHANGE_PASSWORD:
        return clone(state, { password: action.password, passwordError: '' });

      case NewPasswordResultActionTypes.VALIDATION_ERROR:
        return clone(state, { passwordError: action.passwordError });

      case NewPasswordResultActionTypes.CHANGE_LOADING_STATE:
        return clone(state, { isLoading: !state.isLoading });

      case NewPasswordResultActionTypes.UPDATE_NEW_PASSWORD_ERROR_STATE:
        return clone(state, { newPasswordError: action.errorState });

      case NewPasswordResultActionTypes.CHANGE_STATUS_STATE:
        return clone(state, { status: action.status });
    }
  }
}
