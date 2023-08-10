import {Executor} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationAction, AuthorizationActionTypes} from "./authorization-action";
import {AuthorizationResultAction, AuthorizationResultActionTypes} from "./authorization-result-action";
import {Inject, inject, Injectable} from "@angular/core";
import {Validator} from "../../../../core/validators/validator";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationExecutor extends Executor<AuthorizationState, AuthorizationAction, AuthorizationResultAction> {

    constructor(
        @Inject("EmailValidator") private emailValidator: Validator,
        @Inject("PasswordValidator") private passwordValidator: Validator
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

        // Логика авторизации
    }

}
