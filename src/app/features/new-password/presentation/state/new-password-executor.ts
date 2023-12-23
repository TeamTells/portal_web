import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { Validator } from 'src/app/core/validators/validator';
import {
  NewPasswordAction,
  NewPasswordActionTypes,
} from './new-password-action';
import {
  NewPasswordResultAction,
  NewPasswordResultActionTypes,
} from './new-password-result-action';
import { NewPasswordState } from './new-password-state';

@Injectable({
  providedIn: 'root',
})
export class NewPasswordExecutor extends Executor<
  NewPasswordState,
  NewPasswordAction,
  NewPasswordResultAction
> {
  constructor(
    @Inject('NewPasswordPasswordValidator')
    private passwordValidator: Validator,
  ) {
    super();
  }

  execute(action: NewPasswordAction) {
    switch (action.type) {
      case NewPasswordActionTypes.CHANGE_PASSWORD:
        this.reduce({
          type: NewPasswordResultActionTypes.CHANGE_PASSWORD,
          password: action.password,
        });
        break;

      case NewPasswordActionTypes.NEW:
        this.handleReset();
        break;
    }
  }

  private handleReset() {
    let passwordError = this.passwordValidator.validate(
      this.getState().password,
    );

    if (passwordError != null) {
      this.reduce({
        type: NewPasswordResultActionTypes.VALIDATION_ERROR,
        passwordError: passwordError != null ? passwordError : '',
      });
      return;
    }

    this.reduce({ type: NewPasswordResultActionTypes.CHANGE_LOADING_STATE });

    setTimeout(() => {
      this.reduce({
        type: NewPasswordResultActionTypes.CHANGE_STATUS_STATE,
        status: 'success',
      });
      this.reduce({
        type: NewPasswordResultActionTypes.CHANGE_LOADING_STATE,
      });
    }, 3000);
  }
}
