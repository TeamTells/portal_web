import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import {
  NewPasswordAction,
  NewPasswordActionTypes,
} from '../state/new-password-action';
import { NewPasswordExecutor } from '../state/new-password-executor';
import { NewPasswordReducer } from '../state/new-password-reducer';
import { NewPasswordResultAction } from '../state/new-password-result-action';
import { NewPasswordState } from '../state/new-password-state';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
})
export class NewPasswordComponent extends Store<
  NewPasswordState,
  NewPasswordExecutor,
  NewPasswordAction,
  NewPasswordResultAction
> {
  constructor(
    state: NewPasswordState,
    executor: NewPasswordExecutor,
    reducer: NewPasswordReducer,
  ) {
    super(state, executor, reducer);
  }

  protected readonly NewPasswordActionTypes = NewPasswordActionTypes;
}
