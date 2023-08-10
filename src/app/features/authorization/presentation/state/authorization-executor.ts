import {Executor} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationAction, AuthorizationActionTypes} from "./authorization-action";
import {AuthorizationResultAction, AuthorizationResultActionTypes} from "./authorization-result-action";
import {inject, Injectable} from "@angular/core";
import {Validator} from "../../../../core/validators/validator";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationExecutor extends Executor<AuthorizationState, AuthorizationAction, AuthorizationResultAction> {

    constructor(private validator: Validator) {
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
        //console.log(this.getState())
        let error = this.validator.validate(this.getState().email)

        if (error != null) {
            this.reduce({
                type: AuthorizationResultActionTypes.EMAIL_VALIDATION_ERROR,
                error: error
            })
            return
        }

        // Логика авторизации
    }

}
