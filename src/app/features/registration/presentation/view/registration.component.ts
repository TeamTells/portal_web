import { Component } from '@angular/core';
import { RegistrationState } from '../state/registration-state';
import { RegistrationExecutor } from '../state/registration-exectutor';
import {
  RegistrationAction,
  RegistrationActionTypes,
} from '../state/registration-action';
import { RegistrationResultAction } from '../state/registration-result-action';
import { Store } from 'src/app/core/mvi/store';
import { RegistrationReducer } from '../state/registration-reducer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent extends Store<
  RegistrationState,
  RegistrationExecutor,
  RegistrationAction,
  RegistrationResultAction
> {
  constructor(
    state: RegistrationState,
    executor: RegistrationExecutor,
    reducer: RegistrationReducer
  ) {
    super(state, executor, reducer);
  }

  protected readonly RegistrationActionTypes = RegistrationActionTypes;
}
