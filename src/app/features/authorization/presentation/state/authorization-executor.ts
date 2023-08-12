import {Executor} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationAction, AuthorizationActionTypes} from "./authorization-action";
import {AuthorizationResultAction, AuthorizationResultActionTypes} from "./authorization-result-action";
import {Inject, inject, Injectable} from "@angular/core";
import {Validator} from "../../../../core/validators/validator";
import {AuthService} from "../../domain/auth.service";
import {AuthorizationNavigator} from "../navigation/authorization-navigator";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationExecutor extends Executor<AuthorizationState, AuthorizationAction, AuthorizationResultAction> {

    constructor(
        @Inject("EmailValidator") private emailValidator: Validator,
        @Inject("PasswordValidator") private passwordValidator: Validator,
        private authService: AuthService,
        private navigator: AuthorizationNavigator
    ) {
        super();
    }

    execute(action: AuthorizationAction) {
        switch (action.type) {
            case AuthorizationActionTypes.CHANGE_EMAIL:
                this.reduce({
                    type: AuthorizationResultActionTypes.CHANGE_EMAIL,
                    email: action.email
                })
                break

            case AuthorizationActionTypes.CHANGE_PASSWORD:
                this.reduce({
                    type: AuthorizationResultActionTypes.CHANGE_PASSWORD,
                    password: action.password
                })
                break

            case AuthorizationActionTypes.LOGIN:
                this.handleLogin()
                break;

        }
    }

    private handleLogin() {
        let emailError = this.emailValidator.validate(this.getState().email)
        let passwordError = this.passwordValidator.validate(this.getState().password)

        if (emailError != null || passwordError != null) {
            this.reduce({
                type: AuthorizationResultActionTypes.VALIDATION_ERROR,
                emailError: emailError != null ? emailError : "",
                passwordError: passwordError != null ? passwordError : "",
            })
            return
        }

        this.authService.login()
          .subscribe((result) => {
            this.handleSubscribeResult(result)
          })
    }

    private handleSubscribeResult(result: boolean) {
      if (result) {
        this.navigator.openMainPage()
      } else {
        // show error
      }
    }

}
