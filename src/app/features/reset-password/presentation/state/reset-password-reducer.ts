import { Reducer } from 'src/app/core/mvi/store';
import { ResetPasswordState } from './reset-password-state';
import {
  ResetPasswordResultAction,
  ResetPasswordResultActionTypes,
} from './reset-password-result-action';
import { Injectable } from '@angular/core';
import { clone } from 'cloneable-ts';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordReducer
  implements Reducer<ResetPasswordState, ResetPasswordResultAction>
{
  reduce(
    state: ResetPasswordState,
    action: ResetPasswordResultAction
  ): ResetPasswordState {
    switch (action.type) {
      case ResetPasswordResultActionTypes.CHANGE_EMAIL:
        return clone(state, { email: action.email, emailError: '' });

      case ResetPasswordResultActionTypes.VALIDATION_ERROR:
        return clone(state, { emailError: action.emailError });

      case ResetPasswordResultActionTypes.CHANGE_LOADING_STATE:
        return clone(state, { isLoading: !state.isLoading });

      case ResetPasswordResultActionTypes.UPDATE_LOGIN_ERROR_STATE:
        return clone(state, { resetPasswordError: action.errorState });

      case ResetPasswordResultActionTypes.CHANGE_STATUS_STATE:
        return clone(state, { status: action.status });
    }
  }
}
