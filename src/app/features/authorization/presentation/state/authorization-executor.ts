import {Executor} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationAction, AuthorizationActionTypes} from "./authorization-action";
import {AuthorizationResultAction, AuthorizationResultActionTypes} from "./authorization-result-action";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationExecutor extends Executor<AuthorizationState, AuthorizationAction, AuthorizationResultAction> {

    execute(action: AuthorizationAction) {
        console.log(action)

        switch (action.type) {
            case AuthorizationActionTypes.CHANGE_EMAIL:
                this.reduce({
                    type: AuthorizationResultActionTypes.CHANGE_EMAIL,
                    email: ""
                })
                break

            case AuthorizationActionTypes.CHANGE_PASSWORD:
                this.reduce({
                    type: AuthorizationResultActionTypes.CHANGE_PASSWORD,
                    password: ""
                })
                break
        }
    }

}
