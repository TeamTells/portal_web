import {Reducer} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationResultAction, AuthorizationResultActionTypes} from "./authorization-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationReducer implements Reducer<AuthorizationState, AuthorizationResultAction> {

  reduce(state: AuthorizationState, action: AuthorizationResultAction): AuthorizationState {
    switch (action.type) {
      case AuthorizationResultActionTypes.CHANGE_EMAIL:
        return clone(state, {email: action.email, emailError: ""})

      case AuthorizationResultActionTypes.CHANGE_PASSWORD:
        return clone(state, {password: action.password, passwordError: ""})

      case AuthorizationResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          emailError: action.emailError,
          passwordError: action.passwordError,
          isLoading: !state.isLoading
        })

      case AuthorizationResultActionTypes.CHANGE_LOADING_STATE:
        return clone(state, {isLoading: !state.isLoading})

      case AuthorizationResultActionTypes.UPDATE_LOGIN_ERROR_STATE:
        return clone(state, {loginError: action.errorState})
    }
  }

}
