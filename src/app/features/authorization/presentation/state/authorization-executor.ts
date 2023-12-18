import { Executor } from 'src/app/core/mvi/store';
import { AuthorizationState, LoginErrorState } from './authorization-state';
import {
  AuthorizationAction,
  AuthorizationActionTypes,
} from './authorization-action';
import {
  AuthorizationResultAction,
  AuthorizationResultActionTypes,
} from './authorization-result-action';
import { Inject, Injectable } from '@angular/core';
import { Validator } from '../../../../core/validators/validator';
import { AuthService } from '../../domain/auth.service';
import { AuthorizationNavigator } from '../navigation/authorization-navigator';
import { LoginByPasswordData } from '../../domain/login-by-password-data';
import { LoginStatus } from '../../domain/login-status';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationExecutor extends Executor<
  AuthorizationState,
  AuthorizationAction,
  AuthorizationResultAction
> {
  constructor(
    @Inject('EmailValidator') private emailValidator: Validator,
    @Inject('PasswordValidator') private passwordValidator: Validator,
    private authService: AuthService,
    private navigator: AuthorizationNavigator
  ) {
    super();
  }

  execute(action: AuthorizationAction) {
    switch (action.type) {
      case AuthorizationActionTypes.TOGGLE_REMEMBER_ME:
        this.reduce({
          type: AuthorizationResultActionTypes.TOGGLE_REMEMBER_ME,
        });
        break;

      case AuthorizationActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: AuthorizationResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case AuthorizationActionTypes.CHANGE_PASSWORD:
        this.reduce({
          type: AuthorizationResultActionTypes.CHANGE_PASSWORD,
          password: action.password,
        });
        break;

      case AuthorizationActionTypes.LOGIN:
        this.handleLogin();
        break;
    }
  }

  private handleLogin() {
    this.reduce({ type: AuthorizationResultActionTypes.CHANGE_LOADING_STATE });

    let emailError = this.emailValidator.validate(this.getState().email);
    let passwordError = this.passwordValidator.validate(
      this.getState().password
    );

    if (emailError != null || passwordError != null) {
      this.reduce({
        type: AuthorizationResultActionTypes.VALIDATION_ERROR,
        emailError: emailError != null ? emailError : '',
        passwordError: passwordError != null ? passwordError : '',
      });
      return;
    }

    this.authService
      .login(
        new LoginByPasswordData(this.getState().email, this.getState().password)
      )
      .subscribe((status) => {
        this.handleStatus(status);
        this.reduce({
          type: AuthorizationResultActionTypes.CHANGE_LOADING_STATE,
        });
      });
  }

  private handleStatus(status: LoginStatus) {
    switch (status) {
      case LoginStatus.SUCCESS:
        this.navigator.openMainPage();
        break;
      case LoginStatus.INCORRECT_CREDENTIALS:
        this.reduce({
          type: AuthorizationResultActionTypes.UPDATE_LOGIN_ERROR_STATE,
          errorState: LoginErrorState.INCORRECT_CREDENTIALS,
        });
        break;
      case LoginStatus.UNKNOWN:
        this.reduce({
          type: AuthorizationResultActionTypes.UPDATE_LOGIN_ERROR_STATE,
          errorState: LoginErrorState.CONNECTION_ERROR,
        });
        break;
    }
  }
}
