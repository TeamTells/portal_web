import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import { ResetPasswordState } from '../state/reset-password-state';
import { ResetPasswordExecutor } from '../state/reset-password-executor';
import {
  ResetPasswordAction,
  ResetPasswordActionTypes,
} from '../state/reset-password-action';
import { ResetPasswordResultAction } from '../state/reset-password-result-action';
import { ResetPasswordReducer } from '../state/reset-password-reducer';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent extends Store<
  ResetPasswordState,
  ResetPasswordExecutor,
  ResetPasswordAction,
  ResetPasswordResultAction
> {
  constructor(
    state: ResetPasswordState,
    executor: ResetPasswordExecutor,
    reducer: ResetPasswordReducer
  ) {
    super(state, executor, reducer);
  }

  protected readonly ResetPasswordActionTypes = ResetPasswordActionTypes;
}
