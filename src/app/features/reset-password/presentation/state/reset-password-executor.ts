import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { Validator } from 'src/app/core/validators/validator';
import {
  ResetAction,
  ResetPasswordAction,
  ResetPasswordActionTypes,
} from './reset-password-action';
import {
  ResetPasswordResultAction,
  ResetPasswordResultActionTypes,
} from './reset-password-result-action';
import { ResetPasswordState } from './reset-password-state';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordExecutor extends Executor<
  ResetPasswordState,
  ResetAction,
  ResetPasswordResultAction
> {
  constructor(
    @Inject('ResetPasswordEmailValidator') private emailValidator: Validator,
  ) {
    super();
  }

  execute(action: ResetPasswordAction) {
    switch (action.type) {
      case ResetPasswordActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: ResetPasswordResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case ResetPasswordActionTypes.RESET:
        this.handleReset();
        break;
    }
  }

  private handleReset() {
    let emailError = this.emailValidator.validate(this.getState().email);

    if (emailError != null) {
      this.reduce({
        type: ResetPasswordResultActionTypes.VALIDATION_ERROR,
        emailError: emailError != null ? emailError : '',
      });
      return;
    }

    this.reduce({ type: ResetPasswordResultActionTypes.CHANGE_LOADING_STATE });

    setTimeout(() => {
      this.reduce({
        type: ResetPasswordResultActionTypes.CHANGE_STATUS_STATE,
        status: 'success',
      });
      this.reduce({
        type: ResetPasswordResultActionTypes.CHANGE_LOADING_STATE,
      });
    }, 3000);
  }
}
